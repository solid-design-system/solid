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
 * @slot overflow-indicator - The badge's overflow-indicator.
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
        part="base"
        class=${cx(
          `inline-flex border items-center justify-center select-none leading-none whitespace-nowrap rounded-full`,
          {
            /* variants */
            default: !this.inverted ? `text-white bg-primary-500 border-white` : `text-primary bg-white border-primary`,
            success: `text-white bg-success border-white`,
            error: `text-white bg-error border-white`
          }[this.variant],
          {
            /* size */
            sm: 'h-2 min-w-[8px]',
            md: 'h-4 px-[4px] min-w-[16px]',
            lg: 'h-5 px-[5px] min-w-[20px]'
          }[this.size],
          {
            /* fonts */
            sm: 'text-[10px]',
            md: 'text-[10px]',
            lg: 'text-[12px]'
          }[this.size]
        )}
      >
        <slot class=${cx(this.size === 'sm' && `hidden`)} part="content"></slot>
        <slot
          name="overflow-indicator"
          class=${cx((!this.overflowing || this.size === 'sm') && `hidden`, `align-baseline`)}
          part="overflow-indicator"
        ></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
