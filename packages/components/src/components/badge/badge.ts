import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
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
 * @csspart content - The component's main content.
 * @csspart overflow-indicator - The component's overflow indicator.
 */
@customElement('sd-badge')
export default class SdBadge extends SolidElement {
  // static styles: CSSResultGroup = styles;

  /** Inverts the badge. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** The badge's size. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** The badge's theme variant. */
  @property({ reflect: true }) variant: 'default' | 'success' | 'error' = 'default';

  /** Toggles the overflow indicator */
  @property({ type: Boolean, reflect: true }) overflowing = false;

  render() {
    return html`
      <span
        tabindex="0"
        role="status"
        part="base"
        class=${cx(
          `inline-flex items-center justify-center align-middle leading-normal whitespace-nowrap border rounded-full select-none font-semibold cursor-[inherit]`,
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
        <span part="content" class=${cx(this.size === 'sm' && `hidden`)}>
          <slot></slot>
        </span>
        <span part="overflow-indicator" class=${cx((!this.overflowing || this.size === 'sm') && `hidden`)}
          ><slot name="overflow-indicator"></slot
        ></span>
      </span>
    `;
  }
  // <slot name="overflow-indicator"></slot>
  firstUpdated() {
    if (!this.querySelector(`*[slot='overflow-indicator']`)) {
      //render(html`<span slot="overflow-indicator" aria-hidden="true">+</span>`, this);
    }
  }

  updated(changedProperties: Map<string, string | boolean>) {
    if (changedProperties.size > 0 && changedProperties.has('overflowing')) {
      //this.querySelector(`*[slot='overflow-indicator']`)?.setAttribute('aria-hidden', (!this.overflowing).toString());
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
