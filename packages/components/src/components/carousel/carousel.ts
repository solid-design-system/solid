import '../icon/icon';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import SolidElement from '../../internal/solid-element';

@customElement('sd-carousel')
export default class SdCarousel extends SolidElement {
  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel': SdCarousel;
  }
}
