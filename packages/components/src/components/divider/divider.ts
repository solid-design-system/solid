import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://solid.union-investment.com/[storybook-link]/divider
 * @status stable
 * @since 1.0
 *
 * @cssparts base - The component's base wrapper.
 */
@customElement('sd-divider')
export default class SdDivider extends SolidElement {
  /** Determines the orientation of the divider. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** This inverts the divider. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }

  render() {
    return html`
      <hr
        part="main"
        class=${cx(
          this.inverted ? 'border-primary-400' : 'border-neutral-400',
          this.orientation === 'horizontal' ? 'border-t w-full' : ' border-l h-full'
        )}
      />
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
        @apply m-0;
      }

      :host(sd-divider[orientation='horizontal']) {
        @apply block;
      }

      :host(sd-divider[orientation='vertical']) {
        @apply inline-block;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-divider': SdDivider;
  }
}
