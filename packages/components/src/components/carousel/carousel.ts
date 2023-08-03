import '../icon/icon';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import SolidElement from '../../internal/solid-element';

@customElement('sd-carousel')
export default class SdCarousel extends SolidElement {
  /** Determines the counting system for the carousel. */
  @property({ attribute: 'variant', reflect: true }) variant: 'dot' | 'numeral' = 'numeral';
  /** Inverts the carousel */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** Specifies how many slides should be shown at a given time.  */
  @property({ type: Number, attribute: 'slides-per-page' }) slidesPerPage = 1;

  render() {
    return html`
      <span class="flex flex-row">
        <button class="text-primary rotate-90 hover:text-neutral-500">
          <sd-icon library="system" name="chevron-down"></sd-icon>
        </button>
        <span>
          <span class="h-3 w-3 inline-block bg-accent rounded-full"></span>
        </span>
        <button class="text-primary rotate-90 hover:text-neutral-500">
          <sd-icon library="system" name="chevron-up"></sd-icon>
        </button>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel': SdCarousel;
  }
}
