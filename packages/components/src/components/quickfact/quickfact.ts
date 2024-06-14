import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
// import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
// import cx from 'classix';
import DisplayStyles from '../../styles/display/display.css?inline';
import LeadtextStyles from '../../styles/leadtext/leadtext.css?inline';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://solid.union-investment.com/[storybook-link]/quickfact
 * @status stable
 * @since 3.8.0
 *
 * @slot - This element has a slot for additional content.
 *
 * @cssparts base - The component's base wrapper.
 */
@customElement('sd-quickfact')
export default class SdQuickfact extends SolidElement {
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <details class="flex items-center">
        <summary class="flex flex-col items-center text-center">
          <sd-icon class="h-24 w-24" name="content/image" color="primary"></sd-icon>
          <p class="sd-display sd-display--size-4xl">Lorem Ipsum</p>
          <div class="sd-leadtext sd-leadtext--size-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </summary>
        <slot></slot>
      </details>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [componentStyles, SolidElement.styles, unsafeCSS(LeadtextStyles), unsafeCSS(DisplayStyles), css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-quickfact': SdQuickfact;
  }
}
