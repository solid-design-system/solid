import { customElement, property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import styles from './divider.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://solid.union-investment.com/[storybook-link]/divider
 * @status stable
 * @since 1.0
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */
@customElement('sd-divider')
export default class SdDivider extends SolidElement {
  static styles: CSSResultGroup = styles;

  /** Draws the divider in a vertical orientation. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  @property({ reflect: true }) orientation: 'horizonal' | 'vertical' = 'horizonal';

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }

  @watch('orientation')
  handleVerticalChange() {
    this.setAttribute('aria-orientation', this.orientation === 'horizonal' ? 'vertical' : 'horizontal');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-divider': SdDivider;
  }
}
