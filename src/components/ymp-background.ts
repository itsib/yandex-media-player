import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './ymp-background.scss';
import { extractColors } from '../utils/color-generator';
import { debounce } from '../utils/debounce';
import { hexToRgba } from '../utils/hex-to-rgba';

const NARROW_WIDTH = 400;

declare global {
  interface HTMLElementTagNameMap {
    'ymp-background': YmpBackground;
  }
}

export class YmpBackground extends LitElement {
  /**
   * Media background image
   */
  image?: string;
  /**
   * Lovelace edit mode state (If not defined, then the card is not yet placed on the panel)
   */
  editMode?: boolean;
  /**
   * Accent color
   */
  color?: string;
  /**
   * The background color calculated from the picture
   */
  private _backgroundColor?: string;
  /**
   * Foreground color
   */
  private _foregroundColor?: string;
  /**
   * Primary text color
   */
  private _textPrimaryColor?: string;
  /**
   * Secondary text color
   */
  private _textSecondaryColor?: string;
  /**
   * True if the card width is less than 400px
   * @private
   */
  private _isNarrow?: boolean;
  /**
   * Card height ('ha-card'.offsetHeight)
   * @private
   */
  private _cardHeight = 0;
  /**
   * Saved observer card size to unsubscribe.
   * @private
   */
  private _resizeObserver?: ResizeObserver;

  private _fallbackImage = '/y-media-player/no-image.png';

  static styles = styles;

  static properties = {
    image: { attribute: true, type: String },
    editMode: { attribute: true, type: Boolean },
    color: { attribute: true, type: String },
    _backgroundColor: { state: true, type: String },
    _foregroundColor: { state: true, type: String },
    _textPrimaryColor: { state: true, type: String },
    _textSecondaryColor: { state: true, type: String },
    _isNarrow: { state: true, type: Boolean },
    _cardHeight: { state: true, type: Number },
  };

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (!this.hasUpdated) {
      this._computeCardSize();
    }

    if (changedProps.has('image')) {
      this._computeColors();
    }
  }

  firstUpdated(_: PropertyValues): void {
    this._attachObserver();
  }

  updated(changedProps: PropertyValues) {
    if (
      changedProps.has('image') ||
      changedProps.has('editMode') ||
      changedProps.has('color') ||
      changedProps.has('_cardHeight') ||
      changedProps.has('_backgroundColor') ||
      changedProps.has('_foregroundColor') ||
      changedProps.has('_textPrimaryColor') ||
      changedProps.has('_textSecondaryColor') ||
      changedProps.has('_isNarrow')
    ) {
      this._updateCssVars();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    this._updateCssVars();

    this.updateComplete.then(() => this._attachObserver());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
  }

  render(): TemplateResult {
    return html`
      <div class="fill"></div>
      <div class="image"></div>
      <div class="gradient"></div>
    `;
  }

  private _computeCardSize(): void {
    const card = this.shadowRoot!.querySelector('.fill') as HTMLElement | null;
    if (!card) {
      return;
    }

    this._cardHeight = card.offsetHeight;
    this._isNarrow = card.offsetWidth < NARROW_WIDTH;
  }

  private _updateCssVars(): void {
    const parent = this.parentNode as HTMLElement | null;
    if (!parent) {
      return;
    }

    const backgroundColor = this._backgroundColor ?? 'var(--ha-card-background, var(--card-background-color, #fff))';
    const backgroundAlfaColor = this._foregroundColor ? hexToRgba(this._foregroundColor, 0.3) : 'rgba(194, 194, 194, .3)';
    const foregroundColor = this._foregroundColor ?? 'var(--primary-text-color)';
    const textPrimaryColor = this._textPrimaryColor ?? 'var(--primary-text-color)';
    const textSecondaryColor = this._textSecondaryColor ?? 'var(--primary-text-color)';
    const accentColor = this.color === 'orange' ? '#ff9800' : 'var(--primary-color)';

    parent.style.setProperty('--ymp-media-image', `url(${this.image ?? this._fallbackImage})`);
    parent.style.setProperty('--ymp-media-image-width', `${this._cardHeight || 0}px`);
    parent.style.setProperty('--ymp-media-horizontal-gradient', `linear-gradient(to right, ${backgroundColor}, transparent)`);
    parent.style.setProperty('--ymp-media-vertical-gradient', `linear-gradient(to top, ${backgroundColor} 0%, ${backgroundColor} 15%, transparent 100%)`);
    parent.style.setProperty('--ymp-accent-color', accentColor); // #ff9800
    parent.style.setProperty('--ymp-disabled-color', `#6e6e6e`);
    parent.style.setProperty('--ymp-background-color', `${backgroundColor}`);
    parent.style.setProperty('--ymp-background-alfa-color', `${backgroundAlfaColor}`);
    parent.style.setProperty('--ymp-foreground-color', `${foregroundColor}`);
    parent.style.setProperty('--ymp-text-primary', `${textPrimaryColor}`);
    parent.style.setProperty('--ymp-text-secondary', `${textSecondaryColor}`);
  }

  private async _computeColors(): Promise<void> {
    if (!this.image) {
      return;
    }

    try {
      const [foregroundColor, backgroundColor, textPrimaryColor, textSecondaryColor] = await extractColors(this.image);
      this._backgroundColor = backgroundColor;
      this._foregroundColor = foregroundColor;
      this._textPrimaryColor = textPrimaryColor;
      this._textSecondaryColor = textSecondaryColor;
    } catch (err) {
      console.error('Error getting Image Colors', err);
      this._backgroundColor = undefined;
      this._foregroundColor = undefined;
      this._textPrimaryColor = undefined;
      this._textSecondaryColor = undefined;
    }
    this._updateCssVars();
  }

  private async _attachObserver(): Promise<void> {
    if (!this._resizeObserver) {
      this._resizeObserver = new ResizeObserver(debounce(() => this._computeCardSize(), 250, false));
    }

    const card = this.shadowRoot!.querySelector('.fill');
    if (!card) {
      return;
    }
    this._resizeObserver.observe(card);
  }
}

(window as any).customElements.define('ymp-background', YmpBackground);
