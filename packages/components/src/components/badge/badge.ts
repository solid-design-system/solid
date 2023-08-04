import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
// import styles from './badge.styles';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://solid.union-investment.com/[storybook-link]/badge
 * @status stable
 * @since 1.0
 *
 * @slot - The badge's content.

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
        tabindex="0"
        part="base"
        class=${cx(
          `inline-flex items-center justify-center align-middle leading-none whitespace-nowrap border rounded-full`,
          {
            /* variants */
            default: !this.inverted ? `text-white bg-primary-500 border-white` : `text-primary bg-white border-primary`,
            success: `text-white bg-[#367B28] border-white`,
            error: `text-white bg-error border-white`
          }[this.variant],
          {
            /* size and fonts*/
            sm: 'h-2 min-w-[8px] text-[10px]',
            md: 'h-4 px-[4px] min-w-[16px] text-[10px]',
            lg: 'h-5 px-[5px] min-w-[20px] text-[12px]'
          }[this.size]
        )}
      >
        <span part="content" class=${cx(this.size === 'sm' && `hidden`, `leading-normal`)}>
          <slot></slot>
        </span>
        <span part="overflow-indicator" class=${cx((!this.overflowing || this.size === 'sm') && `hidden`)}> + </span>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
