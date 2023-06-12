import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import SolidElement from '../../internal/solid-element';
import styles from './menu-label.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Menu labels are used to describe a group of menu items.
 * @documentation https://solid.union-investment.com/[storybook-link]/menu-label
 * @status stable
 * @since 1.0
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-menu-label')
export default class SdMenuLabel extends SolidElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-menu-label': SdMenuLabel;
  }
}
