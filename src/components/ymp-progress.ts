import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './ymp-progress.scss';
import { getProgress } from '../utils/get-progress';

declare global {
  interface HTMLElementTagNameMap {
    'ymp-progress': YmpProgress;
  }
}

export class YmpProgress extends LitElement {
  /**
   * Media duration in seconds
   */
  duration?: number;
  /**
   * Media current position in seconds
   */
  _position = 0;
  /**
   * Disable progress bar
   */
  disabled?: boolean;
  /**
   * Inner position state
   */
  _innerPosition = 0;
  /**
   * Lock position update
   */
  _lock = false;

  static styles = styles;

  static properties = {
    duration: { attribute: true, type: Number },
    position: { attribute: 'position', type: Number },
    disabled: { attribute: 'disabled', reflect: true, type: Boolean },
    _position: { state: true, type: Number },
    _innerPosition: { state: true, type: Number },
    _lock: { state: true, type: Boolean },
  };

  willUpdate(changedProps: PropertyValues) {
    super.willUpdate(changedProps);

    if (changedProps.has('_position')) {
      const unlockPositions = [this._innerPosition, this._innerPosition - 1, this._innerPosition + 1];
      if (this._lock && unlockPositions.includes(this._position)) {
        this._lock = false;
      } else if (!this._lock && this._position !== this._innerPosition) {
        this._innerPosition = this._position;
      }
    }
  }

  render(): TemplateResult {
    return html`
      <div class="durations">
        <div class="duration">${this._positionTime()}</div>
        <div class="duration">${this._remainedTime()} ${this._durationTime()}</div>
      </div>
      <div class="progress-bar" @click="${this._handleSeek}">
        <div class="bar" .style="${`width: ${this._barWidthPercent()}%`}"></div>
        <div class="bar-background"></div>
      </div>
    `;
  }

  get position(): number {
    return this._position;
  }

  set position(value: number | undefined) {
    this._position = value ? Math.floor(value) : 0;
  }

  private _barWidthPercent(): number | undefined {
    if (this._innerPosition === undefined || this.duration === undefined) {
      return undefined;
    }
    return Math.round((this._innerPosition / this.duration) * 10000) / 100;
  }

  private _positionTime(): TemplateResult {
    return this._innerPosition === undefined ? html`` : html`<span>${getProgress(this._innerPosition)}</span>`;
  }

  private _durationTime(): TemplateResult {
    return this.duration === undefined ? html`` : html`<span>${getProgress(this.duration)}</span>`;
  }

  private _remainedTime(): TemplateResult {
    if (this._innerPosition === undefined || this.duration === undefined) {
      return html``;
    }
    const remained = this._innerPosition - this.duration;
    return html`
      <span class="pale">-${getProgress(remained)}</span>
      <span class="pale">&nbsp;|&nbsp;</span>
    `;
  }

  private _handleSeek(event: PointerEvent): void {
    event.stopPropagation();

    if (this.duration === undefined || !this.clientWidth) {
      return;
    }

    const progress = event.offsetX / this.clientWidth;
    this._lock = true;
    this._innerPosition = Math.floor(this.duration * progress);

    const options = {
      detail: { seek: this._innerPosition },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('seek', options));
  }
}

(window as any).customElements.define('ymp-progress', YmpProgress);
