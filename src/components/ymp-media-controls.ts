import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './ymp-media-controls.scss';
import { MediaPlayerState } from 'types';
import { t } from 'i18n';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-media-controls': YmpMediaControls;
  }
}

export class YmpMediaControls extends LitElement {
  /**
   * Media player state attribute
   */
  state?: MediaPlayerState;
  /**
   * Used for reset hold states
   */
  duration?: number;
  /**
   * Inner media player state
   */
  private _innerState?: MediaPlayerState;
  /**
   * Prevents the execution of commands before the completion of the previous ones
   */
  private _lock?: boolean;

  private _sayTrack = false;

  static styles = styles;

  static properties = {
    state: { attribute: true, type: String },
    duration: { attribute: true, type: String },
    _innerState: { state: true, type: String },
    _lock: { state: true, type: Boolean },
    _sayTrack: { state: true, type: Boolean },
  };

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (changedProps.has('state')) {
      if (this._lock && this._innerState === this.state) {
        this._lock = false;
      }

      if (this.state !== this._innerState) {
        this._innerState = this.state;
      }
    }
  }

  render(): TemplateResult {
    return html`
      <div class="buttons-remote">
        <ymp-button icon="mdi:skip-previous" @click="${this._handlePrev}"></ymp-button>

        ${this._innerState === MediaPlayerState.PAUSED
          ? html` <ymp-button icon="mdi:play" style="--mdc-icon-size: 34px;" @click="${this._handlePlay}"></ymp-button> `
          : html` <ymp-button icon="mdi:pause" style="--mdc-icon-size: 34px;" @click="${this._handlePaused}"></ymp-button> `}

        <ymp-button icon="mdi:skip-next" @click="${this._handleNext}"></ymp-button>
      </div>

      <div class="buttons-action">
        <ymp-button icon="mdi:thumb-up" .label="${t('tooltip.like')}" @click="${this._handleLike}"></ymp-button>
        <ymp-button icon="mdi:thumb-down" .label="${t('tooltip.dislike')}" @click="${this._handleDisLike}"></ymp-button>
        <ymp-button icon="mdi:chat" .label="${t('tooltip.say_track_name')}" @click="${this._toggleSayTrack}"></ymp-button>
      </div>
    `;
  }

  private _handlePlay(): void {
    if (this._lock) {
      return;
    }
    this._lock = true;

    this._innerState = MediaPlayerState.PLAYING;

    const options = {
      detail: { paused: false },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('paused', options));
  }

  private _handlePaused(): void {
    if (this._lock) {
      return;
    }
    this._lock = true;

    this._innerState = MediaPlayerState.PAUSED;

    const options = {
      detail: { paused: true },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('paused', options));
  }

  private _handleNext(): void {
    const options = {
      detail: {},
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('next', options));
  }

  private _handlePrev(): void {
    const options = {
      detail: {},
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('prev', options));
  }

  private _handleLike(): void {
    const options = {
      detail: {
        media_content_type: 'command',
        media_content_id: 'лайк',
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('command', options));
  }

  private _handleDisLike(): void {
    const options = {
      detail: {
        media_content_type: 'command',
        media_content_id: 'снять лайк',
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('command', options));
  }

  private _toggleSayTrack(): void {
    this._sayTrack = !this._sayTrack;
    const options = {
      detail: {
        media_content_type: 'settings',
        media_content_id: `анонсировать треки: ${this._sayTrack ? 'да' : 'нет'}`,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('command', options));
  }
}

(window as any).customElements.define('ymp-media-controls', YmpMediaControls);
