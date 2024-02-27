import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import componentStyles from '../../styles/component.styles';
import SolidElement from '../../internal/solid-element.js';

/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 * @documentation https://solid.union-investment.com/[storybook-link]/carousel
 *
 * @since 1.12.0
 * @status stable
 *
 * @slot - The carousel item's content.
 *
 *
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
    return html` <slot></slot> `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        aspect-ratio: var(--aspect-ratio);
        scroll-snap-align: start;
        scroll-snap-stop: always;
        @apply flex flex-col items-center justify-center w-full h-full;
      }

      ::slotted(img) {
        @apply w-full h-full object-cover;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel-item': SdCarouselItem;
  }
}
