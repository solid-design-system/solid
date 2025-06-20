import { arraysDiffer, getNormalizedValueFromClientX, numericSort } from './utils';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query, queryAll } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { PropertyValues } from 'lit';
import type { SdTooltip } from 'src/solid-components';
import type { SolidFormControl } from '../../internal/solid-element';

/**
 * @summary Short summary of the component's intended use.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-tooltip
 *
 * @event sd-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-range')
export default class SdRange extends SolidElement implements SolidFormControl {
  protected readonly formControlController: FormControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, 'label', 'help-text');
  public localize = new LocalizeController(this);

  @query('#input') input: HTMLInputElement;

  @query('[part="active-track"]') activeTrack: HTMLDivElement;

  @query('[part="input-wrapper"]') inputWrapper: HTMLDivElement;

  @queryAll('[part="thumb"]') thumbs: NodeListOf<HTMLDivElement>;

  /**
   * A function used to format the tooltip's value.
   * The value of the thumb is passed as the only argument.
   * The function should return a string to display in the tooltip.
   */
  @property({ attribute: false }) tooltipFormatter: (value: number) => string;

  /** The name of the range, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The range's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** The range's help text. If you need to display HTML, use the help-text slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The minimum acceptable value of the range. */
  @property({ type: Number, reflect: true }) min = 0;

  /** The maximum acceptable value of the range. */
  @property({ type: Number, reflect: true }) max = 100;

  /** The interval at which the range will increase and decrease. */
  @property({ type: Number }) step = 1;

  /** Disables the range. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Disables the range. */
  @property({ attribute: 'no-track-bar', type: Boolean, reflect: true }) noTrackBar = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /** The current values of the input (in ascending order) as a string of space separated values */
  @property({ type: String })
  set value(value: string | null) {
    this._value = value ? value.split(' ').map(Number).sort(numericSort) : [];
  }

  get value() {
    return this._value.slice().sort(numericSort).join(' ');
  }

  /** Gets or sets the current values of the range as an array of numbers */
  set valueAsArray(value: readonly number[] | null) {
    const oldValue = this._value;
    this._value = Array.isArray(value) ? value.slice().sort(numericSort) : value || [];
    if (arraysDiffer(oldValue, this._value)) {
      this.requestUpdate('value', oldValue.join(' '));
    }
  }

  get valueAsArray() {
    return [...this._value].sort(numericSort);
  }

  private _value: readonly number[] = [0];

  private _rangeValues = new Map<number, number>();

  private _lastChangeValue: number[] = [];

  private _hasFocus = false;

  get rtl() {
    return this.localize.dir() === 'rtl';
  }

  constructor() {
    super();
    this.tooltipFormatter = this.localize.number.bind(this.localize);
  }

  firstUpdated() {
    this.formControlController.updateValidity();
    this._lastChangeValue = Array.from(this._value);
  }

  protected willUpdate(changedProperties: PropertyValues): void {
    super.willUpdate(changedProperties);

    /**
     * When the proposed min is bigger than the max value,
     * we need to swap the values to make sure the min is always smaller than the max
     * @example <sd-range min="50" max="10"> becomes <sd-range min="10" max="50">
     */
    if (this.min > this.max) {
      [this.min, this.max] = [this.max, this.min];
    }

    if (this.step > this.max - this.min) {
      this.step = this.max - this.min;
    }

    if (this.step <= 0) {
      this.step = 1;
    }

    const adjustedValue = this._value.map(value => {
      if (value <= this.min) return this.min;
      if (value >= this.max) return this.max;
      const nextValue = this.min + this.step * Math.round((value - this.min) / this.step);
      if (nextValue > this.max) return this.max;
      return nextValue;
    });

    if (arraysDiffer(this._value, adjustedValue)) {
      this._value = adjustedValue;
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    for (const thumb of this.thumbs) {
      const rangeId = +thumb.dataset.rangeId!;
      if (!this._rangeValues.has(rangeId)) continue;
      this.moveThumb(thumb, this._rangeValues.get(rangeId)!);
    }

    this.updateActiveTrack();
  }

  override focus(options?: FocusOptions) {
    const firstThumb = this.thumbs.item(0);
    if (firstThumb) {
      firstThumb.focus(options);
    } else {
      super.focus(options);
    }
  }

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input?.checkValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    this.formControlController.fakeUserInteraction();
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  private updateTooltip(thumb: HTMLDivElement) {
    const rangeId = +thumb.dataset.rangeId!;
    if (!this._rangeValues.has(rangeId)) return;
    const value = this._rangeValues.get(rangeId)!;
    const tooltip = thumb.parentElement as SdTooltip;
    tooltip.content = this.tooltipFormatter(value);
  }

  private updateActiveTrack() {
    const { activeTrack } = this;
    if (!activeTrack) return;

    // Special case: User set min and max to the same values.
    // To not show the active track in this case.
    if (this.min === this.max) {
      activeTrack.style.insetInlineStart = '0%';
      activeTrack.style.insetInlineEnd = '0%';
      return;
    }

    // If there is only one thumb, the active track should start at the beginning
    // and end at the thumb
    if (this._value.length === 1) {
      const start = getComputedStyle(this).getPropertyValue('--track-active-offset') || '0%';
      const end = (100 * (this._value[0] - this.min)) / (this.max - this.min);

      activeTrack.style.insetInlineStart = `min(${start}, ${end}%)`;
      activeTrack.style.insetInlineEnd = `min(calc(100% - ${start}), calc(100% - ${end}%))`;

      return;
    }

    // The render order of the thumbs is not guaranteed to be the same as the value order.
    const sortedValues = this._value.slice().sort(numericSort);

    // Multi thumb: Place the active track between the first and last thumb
    const start = (100 * (sortedValues[0] - this.min)) / (this.max - this.min);
    const end = (100 * (sortedValues[sortedValues.length - 1] - this.min)) / (this.max - this.min);

    activeTrack.style.insetInlineStart = `${start}%`;
    activeTrack.style.insetInlineEnd = `calc(100% - ${end}%)`;
  }

  private moveThumb(thumb: HTMLDivElement, value: number) {
    thumb.setAttribute('aria-valuenow', value.toString());
    thumb.setAttribute('aria-valuetext', this.tooltipFormatter(value));
    const pos = (value - this.min) / (this.max - this.min);
    thumb.style.insetInlineStart = `calc(${100 * pos}% - var(--half-thumb-size))`;
    this.updateTooltip(thumb);
  }

  /**
   * Get the boundaries of a given thumb
   * @param thumb The thumb element that was moved
   * @param value The current value of a thumb
   * @returns An object containing information about the current boundaries
   */
  private movementBoundariesForThumb(thumb: HTMLDivElement, value: number) {
    // If we are in restrict mode, we should not move the thumb
    // if it is smaller than the previous thumb or larger than the next thumb
    const values = this.valueAsArray!;
    const thumbs = Array.from(this.thumbs);
    const thumbIndex = thumbs.indexOf(thumb);

    // Get the previous and next thumb and see what are our valid ranges
    const prevValue = values[thumbIndex - 1] || this.min;
    const nextValue = values[thumbIndex + 1] || this.max;

    const isRestricted = value < prevValue || value > nextValue;
    const finalValue = Math.max(prevValue, Math.min(nextValue, value));

    return {
      finalValue,
      isRestricted,
      nextValue,
      prevValue
    };
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private onClickTrack(event: PointerEvent, focusThumb = true) {
    if (this.disabled) return;
    const { clientX } = event;

    const thumbs = Array.from(this.thumbs);
    const pos = getNormalizedValueFromClientX(this.inputWrapper, clientX);
    const unit = this.step / (this.max - this.min);
    const nextValue = this.min + this.step * Math.round(pos / unit);

    // Get the thumb that is placed closest to the click position
    const thumb = thumbs.reduce((prev, curr) => {
      const currValue = this._rangeValues.get(+curr.dataset.rangeId!)!;
      const prevValue = this._rangeValues.get(+prev.dataset.rangeId!)!;

      const currDiff = Math.abs(currValue - nextValue);
      const prevDiff = Math.abs(prevValue - nextValue);

      if (currDiff === prevDiff) {
        // If the difference is the same, we use the thumb which has the correct order.
        // left track click --> prev, right track click --> curr
        return currValue < nextValue ? curr : prev;
      }

      return currDiff < prevDiff ? curr : prev;
    });

    const rangeId = +thumb.dataset.rangeId!;

    if (!rangeId) return;

    this._rangeValues.set(rangeId, nextValue);
    this.moveThumb(thumb, nextValue);

    const prevValue = this._value;
    this._value = Array.from(this._rangeValues.values());
    this.updateActiveTrack();

    if (arraysDiffer(prevValue, this._value)) {
      this._lastChangeValue = Array.from(this._value);
      this.emit('syn-input');
      this.emit('syn-change');
    }

    const newEvent = new PointerEvent('pointerdown', event);
    if (focusThumb) {
      if (thumb.dispatchEvent(newEvent)) {
        this.updateTooltip(thumb);
      }
    }
  }

  /**
   * Special method for handling clicks on track items
   * When clicking track items, we do not want the thumb to have focus
   */
  private onClickTrackItem(event: PointerEvent) {
    this.onClickTrack(event, false);
  }

  private onClickThumb(event: PointerEvent) {
    if (this.disabled) return;

    const thumb = event.target as HTMLDivElement;
    this.updateTooltip(thumb);

    if (thumb.dataset.pointerId) {
      thumb.releasePointerCapture(+thumb.dataset.pointerId);
    }

    thumb.dataset.pointerId = event.pointerId.toString();
    thumb.setPointerCapture(event.pointerId);
    thumb.classList.add('grabbed');

    // await (thumb.parentElement as SdTooltip).show();
  }

  private onDragThumb(event: PointerEvent) {
    if (this.disabled) return;

    const thumb = event.target as HTMLDivElement;
    const rangeId = +thumb.dataset.rangeId!;
    if (!this._rangeValues.has(rangeId)) return;

    const pointerId = thumb.dataset.pointerId ? +thumb.dataset.pointerId : null;
    if (pointerId !== event.pointerId) return;

    const pos = getNormalizedValueFromClientX(this.inputWrapper, event.clientX);
    const unit = this.step / (this.max - this.min);
    let value = this.min + this.step * Math.round(pos / unit);

    const sdMove = this.emit('sd-move', {
      cancelable: true,
      detail: {
        element: thumb,
        value
      }
    });

    if (sdMove.defaultPrevented) {
      return;
    }

    const movementData = this.movementBoundariesForThumb(thumb, value);
    if (movementData.isRestricted) {
      value = movementData.finalValue;
      thumb.style.zIndex = (3 + this.thumbs.length).toFixed(0);
    } else {
      thumb.style.zIndex = '3';
    }

    this._rangeValues.set(rangeId, value);
    this.moveThumb(thumb, value);

    const prevValue = this._value;
    this._value = Array.from(this._rangeValues.values());
    this.updateActiveTrack();

    if (arraysDiffer(prevValue, this._value)) {
      this.emit('sd-input');
    }
  }

  private onReleaseThumb(event: PointerEvent) {
    const thumb = event.target as HTMLDivElement;
    if (!thumb.dataset.pointerId || event.pointerId !== +thumb.dataset.pointerId) return;

    thumb.classList.remove('grabbed');
    thumb.releasePointerCapture(event.pointerId);
    delete thumb.dataset.pointerId;

    if (arraysDiffer(this._lastChangeValue, this._value)) {
      this._lastChangeValue = Array.from(this._value);
      this.emit('sd-change');
    }

    // await (thumb.parentElement as SynTooltip).hide();
  }

  private onKeyPress(event: KeyboardEvent) {
    const thumb = event.target as HTMLDivElement;
    const rangeId = +thumb.dataset.rangeId!;

    const currentValue = this._rangeValues.get(rangeId);
    if (currentValue === undefined) return;

    let value = currentValue;

    switch (event.key) {
      case 'ArrowUp':
      case 'Up':
        value = Math.min(currentValue + this.step, this.max);
        break;
      case 'ArrowDown':
      case 'Down':
        value = Math.max(currentValue - this.step, this.min);
        break;
      case 'ArrowLeft':
      case 'Left':
        value = this.rtl ? Math.min(currentValue + this.step, this.max) : Math.max(currentValue - this.step, this.min);
        break;
      case 'ArrowRight':
      case 'Right':
        value = this.rtl ? Math.max(currentValue - this.step, this.min) : Math.min(currentValue + this.step, this.max);
        break;
      case 'PageUp':
        value = Math.min(currentValue + (this.max - this.min) / 5, this.max);
        break;
      case 'PageDown':
        value = Math.max(currentValue - (this.max - this.min) / 5, this.min);
        break;
      case 'Home':
        value = this.min;
        break;
      case 'End':
        value = this.max;
        break;
      default:
        return;
    }

    if (value !== currentValue) {
      // Make sure the user is able to intercept movement
      const sdMove = this.emit('sd-move', {
        cancelable: true,
        detail: {
          element: thumb,
          value
        }
      });

      if (sdMove.defaultPrevented) {
        return;
      }

      const movementData = this.movementBoundariesForThumb(thumb, value);
      if (movementData.isRestricted) {
        value = movementData.finalValue;
      }

      this.moveThumb(thumb, value);

      this._rangeValues.set(rangeId, value);
      this._value = Array.from(this._rangeValues.values());

      this.updateActiveTrack();
      this.updateTooltip(thumb);

      this._lastChangeValue = Array.from(this._value);
      this.emit('sd-input');
      this.emit('sd-change');
    }

    event.stopPropagation();
    event.preventDefault();
  }

  private onBlur(event: FocusEvent) {
    if (event.relatedTarget && this.shadowRoot?.contains(event.relatedTarget as Node)) return;
    this.emit('sd-blur');
    this._hasFocus = false;
  }

  private onFocusThumb(event: FocusEvent) {
    if (this.disabled) return;
    if (!this._hasFocus) {
      this._hasFocus = true;
      this.emit('sd-focus');
    }
    const thumb = event.target as HTMLDivElement;
    if (!thumb?.dataset?.rangeId) return;
    this.updateTooltip(thumb);
  }

  private renderThumbs(hasLabel: boolean) {
    // Aria special handling:
    // 1. When there is only one label: Use the provided label as the aria-label for the thumb
    // 2. When we have multiple label: Set the label for the first and last item to itself
    const isMultiple = this._value.length > 1;

    this._rangeValues.clear();
    return this._value.map((value, index) => {
      const rangeId = index + 1;
      this._rangeValues.set(rangeId, value);

      const id = `thumb-${rangeId}`;

      const ariaLabel = '';
      let ariaLabeledBy = '';

      if (!isMultiple) {
        ariaLabeledBy = hasLabel ? 'label aria-label-hidden' : '';
      } else {
        ariaLabeledBy = hasLabel ? `label aria-label-hidden ${id}` : `aria-label-hidden ${id}`;

        // if (index === 0) {
        //   ariaLabel = `${this.localize.term('rangeMin')} (${this.tooltipFormatter(value)})`;
        // } else if (index === this._value.length - 1) {
        //   ariaLabel = `${this.localize.term('rangeMax')} (${this.tooltipFormatter(value)})`;
        // } else {
        //   ariaLabel = this.tooltipFormatter(value);
        // }
      }

      return html`
        <sd-tooltip hoist trigger="click hover focus" disabled=${ifDefined(this.disabled ? true : undefined)}>
          <div
            id=${id}
            part="thumb"
            role="slider"
            tabindex="${this.disabled ? -1 : 0}"
            aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
            aria-labelledby=${ariaLabeledBy}
            aria-label=${ariaLabel}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${value}"
            aria-valuetext="${this.tooltipFormatter(value)}"
            data-range-id="${rangeId}"
            @pointerdown=${this.onClickThumb}
            @pointermove=${this.onDragThumb}
            @pointerup=${this.onReleaseThumb}
            @pointercancel=${this.onReleaseThumb}
            @pointerleave=${this.onReleaseThumb}
            @keydown=${this.onKeyPress}
            @focus=${this.onFocusThumb}
          ></div>
        </sd-tooltip>
      `;
    });
  }

  render() {
    const slots = {
      label: this.hasSlotController.test('label'),
      helpText: this.hasSlotController.test('help-text')
    };

    const hasLabel = !!(this.label || slots['label']);
    const hasHelpText = !!(this.helpText || slots['helpText']);

    return html`<div part="form-control" @focusout=${this.onBlur} class="flex flex-col">
      ${hasLabel
        ? html`<div class="flex items-center gap-1">
            <label
              id="label"
              for="input"
              part="form-control-label"
              aria-hidden=${hasLabel ? 'false' : 'true'}
              class=${cx(hasLabel ? 'inline-block' : 'hidden')}
              @click=${this.focus}
            >
              <slot name="label">${this.label}</slot>
            </label>
          </div>`
        : null}

      <div part="base" class="inline-flex w-full">
        <div part="input-wrapper" class="relative flex-1 mx-2 mb-3">
          <input id="input" tabindex="-1" hidden @invalid=${this.handleInvalid} />

          <div
            part="track-wrapper"
            role="presentation"
            @pointerdown=${this.onClickTrack}
            class="relative cursor-pointer"
          >
            <div part="track-click-helper"></div>
            <div part="track" class="bg-neutral-500"></div>
            <div part="active-track" hidden=${ifDefined(this.noTrackBar ? true : undefined)}></div>
          </div>

          ${this.renderThumbs(hasLabel)}

          <div class="-mt-[10px]" part="scale-ticks" @pointerdown=${this.onClickTrackItem} role="presentation">
            <slot name="scale-ticks"></slot>
          </div>
        </div>
      </div>

      <slot
        name="help-text"
        part="form-control-help-text"
        id="help-text"
        class=${cx('text-sm text-neutral-700 mt-2', hasHelpText ? 'block' : 'hidden')}
        aria-hidden=${!hasHelpText}
      >
        ${this.helpText}
      </slot>
    </div>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --thumb-size: 16px;
        --track-height: 4px;
        --full-thumb-size: var(--thumb-size);

        /*
        * There are multiple places where we need the half width of the thumb
        * This is needed for example to position the knob on the track or
        * provide the spacing to the left and right for the track to make it stand "over"
        */
        --half-thumb-size: calc(var(--full-thumb-size) / 2);
      }

      [part='track'] {
        height: var(--track-height);
        margin: calc((var(--full-thumb-size) - var(--track-height)) / 2) 0;
      }

      [part='active-track'] {
        @apply bg-primary absolute top-0;

        height: var(--track-height);
      }

      [part='track-click-helper'] {
        @apply absolute;

        inset: calc(var(--half-thumb-size) * -1) 0;
      }

      [part='thumb'] {
        @apply bg-primary cursor-pointer rounded-full absolute top-0 after:-inset-2 hover:cursor-grab focus-visible:focus-outline;

        height: var(--full-thumb-size);
        width: var(--full-thumb-size);
      }

      :host([disabled]) {
        [part='thumb'],
        [part='active-track'] {
          @apply bg-neutral-500;
        }
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-range': SdRange;
  }
}
