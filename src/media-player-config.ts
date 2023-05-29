import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { HaFormSchema, HomeAssistant, LovelaceCardEditor, MediaPlayerCardConfig, ValueChangeEvent } from 'types';
import styles from './media-player-config.scss';
import { fireEvent } from './utils/fire-event';
import { t } from 'i18n';

const SCHEMA: HaFormSchema[] = [
  {
    name: 'devices',
    default: 'daily',
    required: true,
    selector: {
      device: {
        entity: {
          domain: 'media_player',
        },
        multiple: true,
      },
    },
  },
];

export class MediaPlayerConfig extends LitElement implements LovelaceCardEditor {
  /**
   * Home assistant instance
   */
  public hass!: HomeAssistant;
  /**
   * Configuration model
   * @private
   */
  private config!: MediaPlayerCardConfig;

  static styles = styles;

  static properties = {
    hass: {},
    config: { attribute: false },
  };

  setConfig(config: MediaPlayerCardConfig): void {
    this.config = config;
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config || !this.hass) {
      return true;
    }

    return changedProps.has('config');
  }

  render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
      <slot></slot>
      <div class="media-player-config">
        <ha-form
          .hass=${this.hass}
          .data=${this.config}
          .schema=${SCHEMA}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          .localizeValue=${this._localizeValue}
          @value-changed=${this._valueChanged}
        >
        </ha-form>
      </div>
    `;
  }

  private _computeLabel(schema: HaFormSchema): string | undefined {
    return t(`config.${schema.name}.label`);
  }

  private _computeHelper(schema: HaFormSchema): string | undefined {
    return t(`config.${schema.name}.helper`);
  }

  private _localizeValue(_: string): string {
    return 'Localized value';
  }

  private _valueChanged(event: ValueChangeEvent<MediaPlayerCardConfig>): void {
    fireEvent(this, 'config-changed', { config: event.detail.value });
  }
}

customElements.define('media-player-config', MediaPlayerConfig);
