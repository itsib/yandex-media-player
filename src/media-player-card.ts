import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './media-player-card.scss';
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, MediaPlayerCardConfig, MediaPlayerDeviceInfo, MediaPlayerEntityState, MediaPlayerState } from 'types';
import { findDevices } from './utils/find-devices';
import { t } from 'i18n';
import { DEMO_STATE } from './utils/demo-state';

declare global {
  interface HTMLElementTagNameMap {
    'yandex-music-browser': MediaPlayerCard;
  }
}

export class MediaPlayerCard extends LitElement implements LovelaceCard {
  /**
   * Home assistant instance
   */
  hass!: HomeAssistant;
  /**
   * Lovelace edit mode state (If not defined, then the card is not yet placed on the panel)
   */
  editMode?: boolean;
  /**
   * Configuration model
   * @private
   */
  private _config!: MediaPlayerCardConfig;
  /**
   * Controlled _devices
   * @private
   */
  private _devices?: MediaPlayerDeviceInfo[];
  /**
   * Selected primary device
   * @private
   */
  private _deviceId?: string;
  /**
   * Selected entity ID
   * @private
   */
  private _entityId?: string;
  /**
   * Media track image
   * @private
   */
  private _mediaImage?: string;

  static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./media-player-config');
    return document.createElement('media-player-config') as LovelaceCardEditor;
  }

  public static getStubConfig(): Omit<MediaPlayerCardConfig, 'type'> {
    return {
      color: 'accent',
      devices: [],
    };
  }

  static styles = styles;

  static properties = {
    hass: { attribute: false },
    editMode: { attribute: false },
    _config: { state: true },
    _devices: { state: true },
    _deviceId: { state: true, type: String },
    _entityId: { state: true, type: String },
    _mediaImage: { state: true, type: String },
  };

  setConfig(config: MediaPlayerCardConfig): void {
    this._config = config;
  }

  getCardSize(): number {
    return 3;
  }

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (!this._config || !this.hass) {
      return;
    }

    if (changedProps.has('_config')) {
      this._devices = findDevices(this.hass, this._config.devices);
    }

    if (changedProps.has('_devices')) {
      if (!this._devices || !this._devices.length) {
        this._deviceId = undefined;
      } else if (!this._deviceId || !this._devices.some(({ id }) => id === this._deviceId)) {
        this._deviceId = this._devices[0].id;
      }
    }

    if (changedProps.has('_deviceId')) {
      if (!this._deviceId || !this._devices) {
        this._entityId = undefined;
      } else {
        this._entityId = this._devices.find(device => device.id === this._deviceId)?.playerEntityId;
      }
    }

    if (changedProps.has('hass')) {
      const mediaImage = this._entityState?.attributes.entity_picture_local || this._entityState?.attributes.entity_picture;
      if (this._mediaImage !== mediaImage) {
        this._mediaImage = mediaImage;
      }
    }
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const disabled = !this._entityState || (this._state !== MediaPlayerState.PLAYING && this._state !== MediaPlayerState.PAUSED);
    const disabledProgress = disabled || this._entityState?.attributes.media_duration === undefined;

    return html`
      <ha-card class="media-player-card">
        <ymp-background .image="${this._mediaImage ? this.hass.hassUrl(this._mediaImage) : undefined}" .editMode="${this.editMode}" .color="${this._config.color}"></ymp-background>
        <div class="content">
          <div class="media-info">
            <ymp-station-logo .entityId=${this._entityId} .hass=${this.hass}></ymp-station-logo>

            <div class="device-and-track">
              <ymp-device-name .entityId=${this._entityId} .hass=${this.hass}></ymp-device-name>
              <ymp-media-title .entityState=${this._entityState}></ymp-media-title>
            </div>
          </div>

          <ymp-volume-controls
            .volume="${this._entityState?.attributes.volume_level}"
            .muted="${this._entityState?.attributes.is_volume_muted}"
            @volumeChange="${({ detail }) => this._serviceCall('volume_set', { volume_level: detail.volume as number })}"
            @mutedChange="${({ detail }) => this._serviceCall('volume_mute', { is_volume_muted: detail.muted as boolean })}"
          ></ymp-volume-controls>

          <ymp-media-controls
            .state="${this._state}"
            .duration="${this._entityState?.attributes.media_duration}"
            @paused="${({ detail }) => this._serviceCall(detail.paused ? 'media_pause' : 'media_play')}"
            @next="${() => this._serviceCall('media_next_track')}"
            @prev="${() => this._serviceCall('media_previous_track')}"
            @command="${({ detail }) => this._serviceCall('play_media', detail)}"
          ></ymp-media-controls>
        </div>
        <ymp-progress
          .disabled="${disabledProgress}"
          .duration="${this._entityState?.attributes.media_duration ?? 100}"
          .position="${this._entityState?.attributes.media_position ?? 0}"
          @seek="${({ detail }) => this._serviceCall('media_seek', { seek_position: detail.seek as number })}}"
        ></ymp-progress>
      </ha-card>
    `;
  }

  private async _serviceCall(service: string, data: Record<string, any> = {}): Promise<any> {
    if (!this._entityId) {
      return console.warn('No selected device');
    }

    return this.hass.callService('media_player', service, data, { entity_id: this._entityId }).catch(error => {
      console.error(error);
      throw error;
    });
  }

  private get _entityState(): MediaPlayerEntityState | undefined {
    if (this.editMode === undefined && (!this._entityId || !this.hass)) {
      return DEMO_STATE;
    }
    return this.hass && this._entityId ? (this.hass.states[this._entityId] as MediaPlayerEntityState) : undefined;
  }

  private get _state(): MediaPlayerState {
    return this._entityState?.state ?? MediaPlayerState.UNAVAILABLE;
  }
}

(window as any).customElements.define('yandex-music-browser', MediaPlayerCard);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'yandex-music-browser',
  name: t('application.name'),
  preview: true,
  description: t('application.description'),
});
