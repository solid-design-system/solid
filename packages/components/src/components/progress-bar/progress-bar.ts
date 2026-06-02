import { css, html, nothing } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { HasSlotController } from '../../internal/slot.js';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Progress bars are used to visualize the completion state of a process.
 * @status stable
 * @since 6.20
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 *
 * @csspart base - The component's base wrapper.
 * @csspart value-right - Value's on the right side of the indicator.
 * @csspart value-bottom - Value's on the bottom of the indicator.
 * @csspart label - The label element.
 *
 * @cssproperty --height - Use this property to set the height of the progress-bar.
 * @cssproperty --gap-color - Use this property to set the color of the gap between the progress indicator and the progress bar (needs to be rgba).
 * @cssproperty --sd-progress-bar__slide-bar--inverted-color-background - The background color of the progress bar when the `inverted` attribute is set.
 * @cssproperty --sd-progress-bar__slide-bar-color-background - The background color of the progress bar.
 * @cssproperty --sd-progress-bar--active--inverted-color-background - The color of the progress indicator when the `inverted` attribute is set.
 */
@customElement('sd-progress-bar')
export default class SdProgressBar extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'label');

  /** The current progress value. */
  @property({ type: Number, reflect: true }) value = 0;

  /** The maximum progress value. */
  @property({ type: Number, reflect: true }) max = 100;

  /** Draws the progress bar in loading mode. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** The progress bar's label. If you need to display HTML, use the `label` slot instead. */
  @property({ type: String, reflect: true }) label = '';

  /** Displays the progress value on the right side of the indicator. */
  @property({ type: Boolean, reflect: true, attribute: 'value-right' }) valueRight = false;

  /** Displays the progress value on the bottom of the indicator. */
  @property({ type: Boolean, reflect: true, attribute: 'value-bottom' }) valueBottom = false;

  /** Inverts the progress bar's colors. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  public localize = new LocalizeController(this);

  private get safeMax() {
    return this.max > 0 ? this.max : 100;
  }

  private get clampedValue() {
    return Math.min(Math.max(this.value, 0), this.safeMax);
  }

  private get percentage() {
    return (this.clampedValue / this.safeMax) * 100;
  }

  render() {
    const slots = { label: this.hasSlotController.test('label') };
    const hasLabel = this.label ? true : !!slots['label'];

    return html`
      <div class="flex flex-col gap-1">
        ${hasLabel
          ? html`<div class="flex items-center">
              <label
                part="label"
                id="label"
                class=${cx(hasLabel ? 'inline-block text-sm' : 'hidden', this.inverted ? 'text-white' : 'text-black')}
                for="base"
                aria-hidden=${hasLabel ? 'false' : 'true'}
              >
                <slot name="label">${this.label}</slot>
              </label>
            </div>`
          : undefined}

        <div class="flex items-center gap-2">
          <progress
            part="base"
            id="base"
            class=${cx(
              'progress-bar w-full block',
              this.loading && 'loading',
              this.inverted
                ? 'sd-progress-bar__slide-bar--inverted-color-background'
                : 'sd-progress-bar__slide-bar-color-background'
            )}
            max=${this.safeMax}
            value=${this.loading ? nothing : this.clampedValue}
            aria-label=${ifDefined(!hasLabel ? this.label || this.localize.term('progress') : undefined)}
            aria-labelledby=${ifDefined(hasLabel ? 'label' : undefined)}
            aria-valuetext=${ifDefined(this.loading ? this.localize.term('loading') : undefined)}
          ></progress>

          ${this.valueRight
            ? html`<span part="value-right" class=${cx('text-xs', this.inverted ? 'text-white' : 'text-neutral-700')}
                >${this.percentage}%</span
              >`
            : undefined}
        </div>

        ${this.valueBottom
          ? html`<span
              part="value-bottom"
              class=${cx('text-xs text-left', this.inverted ? 'text-white' : 'text-neutral-700')}
              >${this.percentage}%</span
            >`
          : undefined}
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block w-full;
        --gap-color: rgba(var(--sd-color-background-white));
      }

      .progress-bar {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        height: var(--height, 0.125rem); /* 2px */
      }

      .progress-bar::-webkit-progress-bar {
        background-color: rgba(var(--sd-progress-bar__slide-bar-color-background));
      }

      :host([inverted]) {
        --gap-color: rgba(var(--sd-color-background-primary));
        .progress-bar::-webkit-progress-bar {
          background-color: rgba(var(--sd-progress-bar__slide-bar--inverted-color-background));
        }

        progress::-moz-progress-bar {
          background-color: rgba(var(--sd-progress-bar--active--inverted-color-background));
          border-right: 2px solid var(--gap-color);
        }

        .progress-bar::-webkit-progress-value {
          background-color: rgba(var(--sd-progress-bar--active--inverted-color-background));
          border-right: 2px solid var(--gap-color);
        }

        .progress-bar.loading::-webkit-progress-value {
          border-left: 2px solid var(--gap-color);
        }
      }

      progress::-moz-progress-bar {
        @apply bg-accent;
        border-right: 2px solid var(--gap-color);
      }

      .progress-bar::-webkit-progress-value {
        @apply bg-accent;
        border-right: 2px solid var(--gap-color);
      }

      .progress-bar.loading::-webkit-progress-value {
        width: 25% !important;
        animation: progress-loading 1.25s ease-in-out infinite alternate;
        border-left: 2px solid var(--gap-color);
      }

      .progress-bar.loading::-moz-progress-bar {
        width: 25% !important;
        animation: progress-loading 1.25s ease-in-out infinite alternate;
        border-left: 2px solid var(--gap-color);
      }

      @keyframes progress-loading {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(300%);
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
