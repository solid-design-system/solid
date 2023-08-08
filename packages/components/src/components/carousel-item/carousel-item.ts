import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from 'src/styles/component.styles';
import SolidElement from '../../internal/solid-element';

/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 * @documentation https://solid.union-investment.com/[storybook-link]/carousel-item
 * @status stable
 * @since 1.4
 *
 *
 * @slot - The carousel item's content.
 */

@customElement('sd-carousel-item')
export default class SdCarouselItem extends SolidElement {
  static isCarouselItem(node: Node) {
    return node instanceof Element && node.getAttribute('aria-roledescription') === 'slide';
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  render() {
    return html`
      <div class="flex flex-col items-center justify-center w-full h-max snap-start snap-always">
        <slot class="object-cover w-full h-full"></slot>
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
