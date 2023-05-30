import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { MediaPlayerEntityState, MediaPlayerState } from 'types';
import styles from './ymp-media-title.scss';
import { t } from 'i18n';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-media-title': YmpMediaTitle;
  }
}

export class YmpMediaTitle extends LitElement {
  /**
   * Media player state
   */
  entityState?: MediaPlayerEntityState;
  /**
   * Human readable media file title
   * @private
   */
  private _mediaTitle?: string;
  /**
   * Human readable media file description
   * @private
   */
  private _mediaDescription?: string;
  /**
   * Full media title
   * @private
   */
  private _fullTitle?: string;
  /**
   * Track title string overflow
   * @private
   */
  private _overflow?: number;

  static properties = {
    entityState: { attribute: true },
    _mediaTitle: { state: true, type: String },
    _mediaDescription: { state: true, type: String },
    _fullTitle: { state: true, type: String },
    _overflow: { state: true, type: Number },
  };

  static styles = styles;

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (changedProps.has('entityState') && this.entityState) {
      const mediaTitle = this._computeMediaTitle();
      const mediaDescription = this._computeMediaDescription();

      if (this._mediaTitle !== mediaTitle) {
        this._mediaTitle = mediaTitle;
      }
      if (this._mediaDescription !== mediaDescription) {
        this._mediaDescription = mediaDescription;
      }
    }

    if (changedProps.has('_mediaTitle') || changedProps.has('_mediaDescription')) {
      this._fullTitle = (this._mediaTitle + (this._mediaDescription ? ` - ${this._mediaDescription}` : '')).trim();
    }
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.entityState || !this._mediaTitle || !this._mediaDescription) {
      return true;
    }

    if (changedProps.has('_overflow')) {
      return true;
    }

    if (changedProps.has('entityState')) {
      const prevState = changedProps.get('entityState');
      const prevMediaTitle = this._computeMediaTitle(prevState);
      const prevMediaDescription = this._computeMediaDescription(prevState);

      return prevMediaTitle !== this._mediaTitle || prevMediaDescription !== this._mediaDescription;
    }

    return changedProps.has('_overflow') || changedProps.has('_fullTitle') || changedProps.has('_mediaTitle') || changedProps.has('_mediaDescription');
  }

  updated(changedProps: PropertyValues): void {
    if (changedProps.has('_fullTitle')) {
      setTimeout(() => this._computeOverflow(), 10);
    }
  }

  render(): TemplateResult {
    const containerClass = `container ${this._overflow ? 'move-on' : ''}`;
    const containerStyle = `animation-duration: ${this._overflow ?? 0}s;`;

    let fullTitle: string;
    if (!this.entityState) {
      fullTitle = t('media.no_source');
    } else if (this.entityState.state !== MediaPlayerState.PLAYING && this.entityState.state !== MediaPlayerState.PAUSED) {
      fullTitle = t('media.no_played');
    } else {
      fullTitle = this._fullTitle || t('media.no_name');
    }

    return html`
      <div class=${containerClass} style=${containerStyle}>
        <span class="hold-line">${fullTitle}</span>
        <div class="move-line-wrap">
          <div class="move-line">
            <span>${fullTitle}</span>
          </div>
        </div>
      </div>
    `;
  }

  private _computeMediaTitle(state?: MediaPlayerEntityState): string {
    const rawMediaTitle = (state || this.entityState)?.attributes.media_title;
    if (!rawMediaTitle) {
      return '';
    }
    const index = rawMediaTitle.indexOf('?authSig=');
    let cleanTitle = index > 0 ? rawMediaTitle.slice(0, index) : rawMediaTitle;

    if (cleanTitle.startsWith('http')) {
      cleanTitle = decodeURIComponent(cleanTitle.split('/').pop()!);
    }

    return cleanTitle.trim();
  }

  private _computeMediaDescription(state?: MediaPlayerEntityState): string {
    const stateAttributes = (state || this.entityState)?.attributes;
    if (!stateAttributes) {
      return '';
    }

    let mediaDescription: string;
    switch (stateAttributes.media_content_type) {
      case 'music':
      case 'image':
        mediaDescription = stateAttributes.media_artist ?? '';
        break;
      case 'playlist':
        mediaDescription = stateAttributes.media_playlist ?? '';
        break;
      case 'tvshow':
        mediaDescription = stateAttributes.media_series_title ?? '';
        if (stateAttributes.media_season) {
          mediaDescription += ` S${stateAttributes.media_season}`;

          if (stateAttributes.media_episode) {
            mediaDescription += `E${stateAttributes.media_episode}`;
          }
        }
        break;
      case 'channel':
        mediaDescription = stateAttributes.media_channel ?? '';
        break;
      default:
        mediaDescription = stateAttributes.app_name ?? '';
    }

    return mediaDescription.trim() ?? '';
  }

  private _computeOverflow(): void {
    const element = this.shadowRoot?.querySelector('.move-line') as HTMLElement | undefined;
    if (element && element.parentNode) {
      const status = element.clientWidth > (element.parentNode as HTMLElement).clientWidth;
      this._overflow = status ? 7.5 + element.clientWidth / 50 : undefined;
      return;
    }
    this._overflow = undefined;
  }
}

(window as any).customElements.define('ymp-media-title', YmpMediaTitle);
