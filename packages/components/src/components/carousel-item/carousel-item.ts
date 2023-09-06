import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import SolidElement from '../../internal/solid-element.js';

/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 * @documentation https://solid.union-investment.com/[storybook-link]/carousel
 *
 * @since 2.0
 * @status experimental
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
    css`
      ${componentStyles}
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        aspect-ratio: var(--aspect-ratio);
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }

      ::slotted(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel-item': SdCarouselItem;
  }
}
