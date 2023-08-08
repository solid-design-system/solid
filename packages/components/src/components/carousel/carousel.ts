import '../carousel-item/carousel-item';
import '../icon/icon';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Accordion shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/carousel-item
 * @status stable
 * @since 1.4
 *
 *
 * @slot - The accordion main content.
 *
 * @dependency sd-carousel-item
 * @dependency sd-icon
 */

@customElement('sd-carousel')
export default class SdCarousel extends SolidElement {
  /** Determines the counting system for the carousel. */
  @property({ attribute: 'variant', reflect: true }) variant: 'dot' | 'numeral' = 'numeral';
  /** Inverts the carousel */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** Specifies how many slides should be shown at a given time.  */
  @property({ type: Number, attribute: 'slides-per-page' }) slidesPerPage = 1;

  private handleVariant() {
    if (this.variant === 'dot') {
      return html`<span class="flex items-center justify-center gap-2">
        <span
          class=${cx(
            'h-4 w-4 inline-block border active:bg-accent hover:border-primary-500 rounded-full',
            this.inverted ? 'border-white hover:border-primary-500' : 'border-primary'
          )}
        ></span>
        <span
          class=${cx(
            'h-4 w-4 inline-block border active:bg-accent hover:border-primary-500 rounded-full',
            this.inverted ? 'border-white hover:border-primary-500' : 'border-primary'
          )}
        ></span>
        <span
          class=${cx(
            'h-4 w-4 inline-block border active:bg-accent hover:border-primary-500 rounded-full',
            this.inverted ? 'border-white hover:border-primary-500' : 'border-primary'
          )}
        ></span>
        <span
          class=${cx(
            'h-4 w-4 inline-block border active:bg-accent hover:border-primary-500 rounded-full',
            this.inverted ? 'border-white hover:border-primary-500' : 'border-primary'
          )}
        ></span>
      </span>`;
    } else {
      return html` <span class="flex gap-0.5 ">
        <span class=${cx('w-5 text-center', this.inverted ? 'text-white' : 'text-black')}>1</span>
        <span class=${cx('scale-y-[1.8]', 'text-center', this.inverted ? 'text-white' : 'text-black')}>/</span>
        <span class=${cx('w-5 text-center', this.inverted ? 'text-white' : 'text-black')}>12</span>
      </span>`;
    }
  }

  render() {
    return html`
      <div>
        <div class="mb-6">
          <slot></slot>
        </div>

        <span class=${cx('flex flex-row items-center justify-center gap-6', this.inverted ? 'bg-primary' : '')}>
          <button
            class=${cx(
              'rotate-90',
              this.inverted
                ? 'text-white hover:text-primary-500'
                : 'text-primary hover:text-primary-500 disabled:text-neutral-500 '
            )}
          >
            <sd-icon class="w-6 h-6" library="system" name="chevron-down"></sd-icon>
          </button>

          ${this.handleVariant()}

          <button
            class=${cx(
              'rotate-90',
              this.inverted
                ? 'text-white hover:text-primary-500'
                : 'text-primary  hover:text-primary-500 disabled:text-neutral-500'
            )}
          >
            <sd-icon class="w-6 h-6" library="system" name="chevron-up"></sd-icon>
          </button>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel': SdCarousel;
  }
}
