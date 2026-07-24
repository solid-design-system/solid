import { css, html, nothing } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { HasSlotController } from '../../internal/slot.js';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Used to visually represent the progression of an activity.
 * @status stable
 * @since 6.23
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 *
 * @csspart base - The component's base wrapper.
 * @csspart value-right - Value's on the right side of the indicator.
 * @csspart value-bottom - Value's on the bottom of the indicator.
 * @csspart label - The label element.
 * @csspart bar - The progress bar's container.
 *
 * @cssproperty --height - Use this property to set the height of the progress-bar.
 * @cssproperty --sd-progress-bar__slide-bar--inverted-color-background - The background color of the progress bar when the `inverted` attribute is set.
 * @cssproperty --sd-progress-bar__slide-bar-color-background - The background color of the progress bar.
 * @cssproperty --sd-progress-bar--active--inverted-color-background - The color of the progress indicator when the `inverted` attribute is set.
 */
@customElement('sd-progress-bar')
export default class SdProgressBar extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'label');

  /** The current progress value. */
  @property({ type: Number, reflect: true }) value: number | null = null;

  /** The maximum progress value. */
  @property({ type: Number, reflect: true }) max = 100;

  /** The progress bar's label. If you need to display HTML, use the `label` slot instead. */
  @property({ type: String, reflect: true }) label = '';

  /** Displays the progress value on the right side of the indicator. */
  @property({ type: String, reflect: true, attribute: 'value-position' }) valuePosition: 'right' | 'bottom' | null =
    null;

  /** Inverts the progress bar's colors. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** Shows the label visually. */
  @property({ type: Boolean, reflect: true, attribute: 'show-label' }) showLabel = false;

  /**
   * A function used to format the progress-bar's value.
   * The value of the progress-bar is passed as the only argument.
   * The function should return a string to display in the value-position part.
   */
  @property({ attribute: false }) valueFormatter: (value: number) => string;

  public localize = new LocalizeController(this);

  private get safeMax() {
    return this.max > 0 ? this.max : 100;
  }

  private get clampedValue() {
    return Math.min(Math.max(this.value ?? 0, 0), this.safeMax);
  }

  private get percentage() {
    return (this.clampedValue / this.safeMax) * 100;
  }

  private get isLoading() {
    return this.value === undefined || this.value === null || isNaN(this.value);
  }

  private get showValue() {
    return !this.isLoading && (this.valuePosition === 'right' || this.valuePosition === 'bottom');
  }

  constructor() {
    super();
    this.valueFormatter = this.localize.number.bind(this.localize);
  }

  render() {
    const slots = { label: this.hasSlotController.test('label') };
    const hasLabel = this.label ? true : !!slots['label'];

    return html`
      <div part="base" class="text-start" aria-hidden=${!hasLabel}>
        ${hasLabel
          ? html`<label
              part="label"
              id="label"
              class=${cx('text-base', !this.showLabel && 'sr-only', this.inverted ? 'text-white' : 'text-black')}
              aria-hidden=${hasLabel ? 'false' : 'true'}
            >
              <slot name="label">${this.label}</slot>
            </label>`
          : nothing}
        <div
          class=${cx(
            this.valuePosition === 'right'
              ? 'flex flex-row items-center gap-2 -mt-1'
              : this.valuePosition === 'bottom'
                ? 'flex flex-col gap-1 mt-1'
                : 'mt-1'
          )}
        >
          <div
            part="bar"
            id="bar"
            class=${cx('w-full h-[var(--height,0.125rem)]', this.isLoading ? 'relative ' : 'flex')}
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax=${this.safeMax}
            aria-valuenow=${ifDefined(this.isLoading ? undefined : this.valueFormatter(this.clampedValue))}
            aria-valuetext=${ifDefined(
              this.isLoading ? this.localize.term('loading') : this.valueFormatter(this.clampedValue)
            )}
            aria-label=${ifDefined(!hasLabel ? this.label || this.localize.term('progress') : undefined)}
            aria-labelledby=${ifDefined(hasLabel ? 'label' : this.label)}
            style=${`--percentage: ${this.percentage}%;`}
          >
            ${this.isLoading
              ? html`
                  <div
                    part="track"
                    class=${cx(
                      'absolute top-0 left-0 h-full progress-bar__track--loading-left',
                      this.inverted
                        ? 'sd-progress-bar__slide-bar--inverted-color-background'
                        : 'sd-progress-bar__slide-bar-color-background'
                    )}
                  ></div>
                  <div
                    part="track"
                    class=${cx(
                      'absolute top-0 right-0 h-full progress-bar__track--loading-right',
                      this.inverted
                        ? 'sd-progress-bar__slide-bar--inverted-color-background'
                        : 'sd-progress-bar__slide-bar-color-background'
                    )}
                  ></div>
                  <div
                    part="indicator"
                    class=${cx(
                      'absolute top-0 h-full progress-bar__indicator--loading',
                      this.inverted ? 'sd-progress-bar--active--inverted-color-background' : 'bg-accent'
                    )}
                  ></div>
                `
              : html`
                  <div
                    part="indicator"
                    class=${cx(
                      'w-[var(--percentage)]',
                      this.inverted ? 'sd-progress-bar--active--inverted-color-background' : 'bg-accent'
                    )}
                  ></div>
                  ${this.value && this.value > 0 && this.value < this.safeMax
                    ? html`<div class="w-0.5 shrink-0"></div>`
                    : nothing}
                  <div
                    part="track"
                    class=${cx(
                      'flex-1',
                      this.inverted
                        ? 'sd-progress-bar__slide-bar--inverted-color-background'
                        : 'sd-progress-bar__slide-bar-color-background'
                    )}
                  ></div>
                `}
          </div>
          ${this.showValue
            ? html`<span
                class=${cx(
                  'text-neutral-700 text-xs w-shrink-0',
                  this.inverted ? 'text-white' : 'text-neutral-700',
                  this.valuePosition === 'bottom' ? 'text-start' : 'text-center',
                  this.valuePosition === 'right' && 'whitespace-nowrap'
                )}
                part="value-${this.valuePosition}"
                >${this.valueFormatter(this.clampedValue)}</span
              >`
            : nothing}
        </div>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block w-full;
      }

      .progress-bar__indicator--loading {
        width: 25%;
        animation: progress-loading-indicator 1.25s ease-in-out infinite alternate;
      }

      .progress-bar__track--loading-left {
        animation: progress-loading-track-left 1.25s ease-in-out infinite alternate;
      }

      .progress-bar__track--loading-right {
        animation: progress-loading-track-right 1.25s ease-in-out infinite alternate;
      }

      @keyframes progress-loading-indicator {
        0% {
          left: 0;
        }

        100% {
          left: 75%;
        }
      }

      @keyframes progress-loading-track-left {
        0% {
          width: 0;
        }

        100% {
          width: calc(75% - 0.25rem);
        }
      }

      @keyframes progress-loading-track-right {
        0% {
          width: calc(75% - 0.25rem);
        }

        100% {
          width: 0;
        }
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-progress-bar': SdProgressBar;
  }
}
