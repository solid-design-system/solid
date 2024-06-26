import '../icon/icon';
import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
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
 * @dependency sd-icon
 *
 * @slot - This element has a slot for additional content.
 * @slot icon - The quickfact's icon. Only content-icons should be used here.
 *
 * @cssparts base - The component's base wrapper.
 */
@customElement('sd-quickfact')
export default class SdQuickfact extends SolidElement {
  /**
   * Indicates whether or not the quickfact is open. You can toggle this attribute to show and hide content inside the quickfact, or you can use the `show()` and `hide()` methods and this attribute will reflect the quickfact's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <details class="flex items-center">
        <summary class="flex flex-row lg:flex-col gap-4 items-center text-center">
          <slot name="icon"><sd-icon class="h-24 w-24" name="content/image" color="primary"></sd-icon></slot>

          <div class="flex flex-col gap-4">
            <p class="sd-display sd-display--size-4xl">Lorem Ipsum</p>
            <div class="sd-leadtext">Con sectetur adipiscing elit</div>
          </div>
        </summary>
        <slot></slot>
      </details>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    unsafeCSS(LeadtextStyles),
    unsafeCSS(DisplayStyles),
    css`
      :host {
        --name: '';
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-quickfact': SdQuickfact;
  }
}
