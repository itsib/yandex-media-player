import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './ymp-button.scss';
import { CustomCardHelpers } from 'types';
import { getIconPath } from '../utils/get-icon-path';

const DEFAULT_PATH = 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z';
const LOADING_PATH = 'M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-button': YmpButton;
  }
}

export class YmpButton extends LitElement {
  /**
   * Icon ID, like 'yandex:alisa'
   */
  icon?: string;
  /**
   * Label that is used for ARIA support and as tooltip
   */
  label?: string;
  /**
   * Disable button
   */
  disabled = false;
  /**
   * Display loading indicator
   */
  loading = false;
  /**
   * Rerender after helpers loaded
   */
  private _helpers?: CustomCardHelpers;

  private _path?: string;

  static properties = {
    icon: { attribute: true, type: String },
    label: { attribute: true, type: String },
    disabled: { attribute: true, type: Boolean },
    loading: { attribute: true, type: Boolean },
    _helpers: { state: true },
    _path: { state: true, type: String },
  };

  static styles = styles;

  willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (changedProps.has('icon')) {
      this._path = undefined;
      this._loadIcon();
    }
  }

  firstUpdated(_: PropertyValues): void {
    window.loadCardHelpers().then(helpers => (this._helpers = helpers));
  }

  render(): TemplateResult {
    if (!this._path) {
      return html``;
    }
    if (this.loading) {
      return html` <ha-icon-button .path=${LOADING_PATH} .style=${`animation: 800ms linear 10ms infinite normal none running rotate;`} .disabled=${true}></ha-icon-button>`;
    }

    return html` <ha-icon-button .path=${this._path} .label=${this.label} .disabled=${this.disabled}></ha-icon-button>`;
  }

  private _loadIcon(): void {
    if (!this.icon) {
      return;
    }

    getIconPath(this.icon)
      .then(path => {
        this._path = path;
      })
      .catch(error => {
        console.error(error);
        this._path = DEFAULT_PATH;
      });
  }
}

(window as any).customElements.define('ymp-button', YmpButton);
