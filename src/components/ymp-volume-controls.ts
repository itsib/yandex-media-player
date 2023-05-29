import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './ymp-volume-controls.scss';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-volume-controls': YmpVolumeControls;
  }
}

export class YmpVolumeControls extends LitElement {
  /**
   * Current volume level
   */
  volume?: number;
  /**
   * Muted flag state
   */
  muted?: boolean;
  /**
   * Disabled controls
   */
  disabled?: boolean;
  /**
   * Inner volume state
   * @private
   */
  private _volumePercent?: number;
  /**
   * Inner muted state
   * @private
   */
  private _muted?: boolean;

  static styles = styles;

  static properties = {
    volume: { attribute: true, type: Number },
    muted: { attribute: 'muted', reflect: true, type: Boolean },
    disabled: { attribute: 'disabled', reflect: true, type: Boolean },
    _volumePercent: { state: true, type: Number },
    _muted: { state: true, type: Boolean },
  };

  willUpdate(changedProps: PropertyValues) {
    super.willUpdate(changedProps);

    if (changedProps.has('volume')) {
      const oldVolume = this._volumePercent === undefined ? undefined : Math.floor(this._volumePercent / 10) / 10;

      if (this.volume !== oldVolume) {
        this._volumePercent = this.volume === undefined ? undefined : Math.floor(this.volume * 100);
      }
    }

    if (changedProps.has('muted') && this.muted !== this._muted) {
      this._muted = this.muted;
    }
  }

  firstUpdated(changedProps: PropertyValues) {
    super.firstUpdated(changedProps);

    this._updateSliderStyles();
  }

  render(): TemplateResult {
    const disabled = this.disabled || this._muted === undefined || this._volumePercent === undefined;
    const muted = this._muted === undefined || this._volumePercent === undefined || this._muted;

    return html`
      <div class="mute">
        <ymp-button .icon="${muted ? 'mdi:volume-off' : 'mdi:volume-high'}" .disabled="${disabled}" @click="${this._handleMuteChange}"></ymp-button>
      </div>
      <div class="volume">
        <div class="slider-wrap">
          <ha-slider
            .disabled="${disabled || this._muted === true}"
            step="1"
            min="0"
            max="100"
            .value="${this._volumePercent}"
            .expand="${false}"
            @change=${this._handleVolumeChange}
          ></ha-slider>
        </div>
      </div>
    `;
  }

  /**
   * Reformat volume value and dispatch event
   * @param event
   * @private
   */
  private _handleVolumeChange(event: Event): void {
    this._volumePercent = Math.floor(Number(event.target?.['value']) || 0);
    const volume = Math.floor(this._volumePercent / 10) / 10;
    if (isNaN(volume)) {
      return;
    }

    const options = {
      detail: { volume },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('volumeChange', options));
  }

  /**
   * Handle muted button click and dispatch mutedChange event
   * @private
   */
  private _handleMuteChange(): void {
    this._muted = !this._muted;
    const options = {
      detail: { muted: this._muted },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('mutedChange', options));
  }

  /**
   * Access slider and update styles
   * @private
   */
  private _updateSliderStyles(): void {
    const haSlider = this.shadowRoot?.querySelector('ha-slider');
    const paperProgress = haSlider?.shadowRoot?.querySelector('paper-progress');
    const container = paperProgress?.shadowRoot?.querySelector('#progressContainer') as HTMLDivElement | null | undefined;
    if (!container) {
      return;
    }
    container.style.borderRadius = '2px';
    container.style.overflow = 'hidden';
  }
}

(window as any).customElements.define('ymp-volume-controls', YmpVolumeControls);
