import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
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
      <div class=${cx(this.orientation === `horizontal` ? 'w-16' : 'h-16')}>
        <hr
          part="main"
          class=${cx(
            this.inverted ? 'border-neutral-400' : 'border-primary-400',
            this.orientation === 'horizontal' ? 'border-t w-full' : ' border-l w-0 h-full'
          )}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-divider': SdDivider;
  }
}
