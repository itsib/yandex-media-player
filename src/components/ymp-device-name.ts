import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { HomeAssistant } from 'types';
import styles from './ymp-device-name.scss';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-device-name': YmpDeviceName;
  }
}

const DEFAULT_NAME = 'Yandex Station';

export class YmpDeviceName extends LitElement {
  /**
   * Home assistant instance
   */
  hass!: HomeAssistant;
  /**
   * Calculated entity ID by device
   */
  entityId?: string;
  /**
   * Device id to name display
   */
  private _deviceId?: string;
  /**
   * Friendly name of entity
   * @private
   */
  private _entityName?: string;
  /**
   * Device name
   * @private
   */
  private _deviceName?: string;

  static properties = {
    hass: { attribute: true },
    entityId: { attribute: true, type: String },
    _deviceId: { state: true, type: String },
    _entityName: { state: true, type: String },
    _deviceName: { state: true, type: String },
  };

  static styles = styles;

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (!this.hass) {
      return;
    }

    if (changedProps.has('entityId')) {
      const entity = (this.entityId && this.hass.entities[this.entityId]) || undefined;
      if (this._deviceId !== entity?.device_id) {
        this._deviceId = entity?.device_id;
      }

      if (this._entityName !== entity?.name) {
        this._entityName = entity?.name;
      }
    }

    if (changedProps.has('_deviceId')) {
      const deviceName = (this._deviceId && this.hass.devices[this._deviceId]?.name) || undefined;
      if (this._deviceName !== deviceName) {
        this._deviceName = deviceName;
      }
    }
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.hass || !this._deviceId || !this.entityId || !this._deviceName) {
      return true;
    }

    return changedProps.has('_deviceName') || changedProps.has('_entityName');
  }

  render(): TemplateResult {
    return html`${this._entityName || this._deviceName || DEFAULT_NAME}`;
  }
}

(window as any).customElements.define('ymp-device-name', YmpDeviceName);
