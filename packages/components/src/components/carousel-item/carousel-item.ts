import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from 'src/styles/component.styles';
import SolidElement from '../../internal/solid-element';

@customElement('sd-carousel-item')
export default class SdCarouselItem extends SolidElement {
  render() {
    return html`
      <div class="flex items-center justify-center flex-col w-full h-max snap-start snap-always">
        <slot class="w-full h-full object-cover"></slot>
      </div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        aspect-ratio: inherit;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel-item': SdCarouselItem;
  }
}
