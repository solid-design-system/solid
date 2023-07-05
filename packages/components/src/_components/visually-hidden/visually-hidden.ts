import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import SolidElement from '../../internal/solid-element';
import styles from './visually-hidden.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://solid.union-investment.com/[storybook-link]/visually-hidden
 * @status stable
 * @since 1.0
 *
 * @slot - The content to be visually hidden.
 */
@customElement('sd-visually-hidden')
export default class SdVisuallyHidden extends SolidElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-visually-hidden': SdVisuallyHidden;
  }
}
