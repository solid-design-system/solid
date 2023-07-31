import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
// import styles from './badge.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://solid.union-investment.com/[storybook-link]/badge
 * @status stable
 * @since 1.0
 *
 * @slot - The badge's content.
 * @slot overflow-indicator - An indicator for overflowing content.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-badge')
export default class SdBadge extends SolidElement {
  // static styles: CSSResultGroup = styles;

  /** Inverts the button. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** The badge's theme variant. */
  @property({ reflect: true }) variant: 'default' | 'success' | 'error' = 'default';

  /** */
  @property({ type: Boolean, reflect: true }) overflowing = false;

  render() {
    return html`
      <span
        part="main"
        class=${cx(
          `inline-flex items-center justify-center select-none px-1 leading-none whitespace-nowrap rounded-full`,
          {
            /* variants */
            default: !this.inverted ? `text-white bg-primary-500 border-white` : `text-primary bg-white border-primary`,
            success: `text-white bg-success border-white`,
            error: `text-white bg-error border-white`
          }[this.variant],
          {
            /* sizes, fonts */
            sm: 'text-sm h-2',
            md: 'text-sm h-4',
            lg: 'text-sm h-5'
          }[this.size]
        )}
      >
        <slot class=${cx(`w-2 shrink-0`)}></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
