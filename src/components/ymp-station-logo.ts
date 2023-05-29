import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { HomeAssistant, LovelaceElement } from 'types';
import styles from './ymp-station-logo.scss';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-station-logo': YmpStationLogo;
  }
}

export class YmpStationLogo extends LitElement {
  /**
   * Home assistant instance
   */
  hass!: HomeAssistant;
  /**
   * Entity ID
   */
  entityId?: string;
  /**
   * Icon ID to display inside button
   * @private
   */
  private _icon?: string;
  /**
   * Custom HTML element for store icon instance
   * @private
   */
  private _iconElement?: LovelaceElement;

  static properties = {
    hass: { attribute: true },
    entityId: { attribute: true, type: String },
    _icon: { state: true, type: String },
    _iconElement: { state: true },
  };

  static styles = styles;

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (!this.hass) {
      return;
    }

    if (changedProps.has('hass') || changedProps.has('entityId')) {
      const icon = this.entityId ? this.hass.states[this.entityId]?.attributes?.icon : undefined;
      if (icon !== this._icon) {
        this._icon = icon;
      }
    }

    if ((changedProps.has('_icon') || changedProps.has('entityId')) && this.entityId) {
      window.loadCardHelpers().then(helpers => {
        this._iconElement = helpers.createHuiElement({
          type: 'icon',
          entity: this.entityId,
          icon: this._icon || 'yandex:alisa',
          hold_action: undefined,
          double_tap_action: undefined,
          tap_action: this.entityId ? { action: 'more-info' } : { action: 'none' },
          style: {},
        });

        if (this._iconElement) {
          this._iconElement.hass = this.hass;
        }
      });
    }
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.hass || !this.entityId || !this._icon || !this._iconElement) {
      return true;
    }
    return changedProps.has('entityId') || changedProps.has('_iconElement') || changedProps.has('_icon');
  }

  render(): TemplateResult {
    if (!this._iconElement) {
      return html``;
    }

    return html`${this._iconElement}`;
  }
}

(window as any).customElements.define('ymp-station-logo', YmpStationLogo);
