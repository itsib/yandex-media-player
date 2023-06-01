import { c as css, L as LitElement, h as html, t } from './media-player-124bda18.js';

var styles = css`:host {
  --mdc-menu-min-width: 452px;
  --mdc-list-vertical-padding: 0px;
  --mdc-typography-body2-font-size: 13px;
}

.media-player-config {
  padding-right: 20px;
}

@media only screen and (max-width: 1200px) {
  :host {
    --mdc-menu-min-width: 797px;
  }
  .media-player-config {
    margin-bottom: 20px;
    padding-right: 0;
  }
}
@media only screen and (max-width: 850px) {
  :host {
    --mdc-menu-min-width: 469px;
  }
}
@media only screen and (max-width: 560px) {
  :host {
    --mdc-menu-min-width: calc(100vw - 80px);
  }
}
@media only screen and (max-width: 450px) {
  :host {
    --mdc-menu-min-width: calc(100vw - 48px);
  }
}`;

/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param node
 * @param {string} type Name of event type.
 * @param {*=} detail Detail value containing event-specific
 *   payload.
 * @param options
 *           cancelable: (boolean|undefined),
 *           composed: (boolean|undefined) }=}
 *  options Object specifying options.  These may include:
 *  `bubbles` (boolean, defaults to `true`),
 *  `cancelable` (boolean, defaults to false), and
 *  `node` on which to fire the event (HTMLElement, defaults to `this`).
 * @return {Event} The new event that was fired.
 */
function fireEvent(node, type, detail, options) {
    options = options || {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
}

const SCHEMA = [
    {
        name: 'color',
        default: 'accent',
        required: true,
        selector: {
            select: {
                multiple: false,
                custom_value: false,
                mode: 'dropdown',
                options: [
                    { value: 'accent', label: 'options.accent' },
                    { value: 'primary', label: 'options.primary' },
                ],
                translation_key: 'config.color',
            },
        },
    },
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
class MediaPlayerConfig extends LitElement {
    setConfig(config) {
        this.config = config;
    }
    shouldUpdate(changedProps) {
        if (!this.config || !this.hass) {
            return true;
        }
        return changedProps.has('config');
    }
    render() {
        if (!this.hass || !this.config) {
            return html ``;
        }
        return html `
      <slot></slot>
      <div class="media-player-config">
        <ha-form
          .hass="${this.hass}"
          .data="${this.config}"
          .schema="${SCHEMA}"
          .computeLabel="${this._computeLabel}"
          .computeHelper="${this._computeHelper}"
          .localizeValue="${this._localizeValue}"
          @value-changed="${this._valueChanged}"
        >
        </ha-form>
      </div>
    `;
    }
    _computeLabel(schema) {
        return t(`config.${schema.name}.label`);
    }
    _computeHelper(schema) {
        return t(`config.${schema.name}.helper`);
    }
    _localizeValue(key) {
        return t(key);
    }
    _valueChanged(event) {
        fireEvent(this, 'config-changed', { config: event.detail.value });
    }
}
MediaPlayerConfig.styles = styles;
MediaPlayerConfig.properties = {
    hass: {},
    config: { attribute: false },
};
customElements.define('media-player-config', MediaPlayerConfig);

export { MediaPlayerConfig };
