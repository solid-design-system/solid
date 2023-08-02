import '../icon/icon';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
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
