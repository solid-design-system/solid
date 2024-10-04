import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from 'src/styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://solid.union-investment.com/[storybook-link]/badge
 * @status stable
 * @since 1.6.0
 *
 * @slot - The badge's content.
 *
 * @csspart base - The badge's base wrapper.
 * @csspart content - The badge's main content.
 */
@customElement('sd-badge')
export default class SdBadge extends SolidElement {
  /** The badge's size. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** The badge's variant. */
  @property({ reflect: true }) variant: 'default' | 'success' | 'error' = 'default';

  /** Inverts the badge. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  render() {
    return html`
      <span
        tabindex="0"
        role="status"
        part="base"
        class=${cx(
          'inline-flex items-center justify-center gap-x-[1px] text-center leading-none whitespace-nowrap border rounded-full select-none cursor-[inherit]',
          {
            /* variants */
            default: !this.inverted ? 'text-white bg-primary-500 border-white' : 'text-primary bg-white border-primary',
            success: !this.inverted ? 'text-white bg-success border-white' : 'text-white bg-success border-primary',
            error: !this.inverted ? 'text-white bg-error border-white' : 'text-white bg-error border-primary'
          }[this.variant],
          {
            /* size and fonts*/
            sm: 'h-2 min-w-[8px] text-[10px]',
            md: 'h-4 px-[4px] min-w-[16px] text-[10px]',
            lg: 'h-5 px-[5px] min-w-[20px] text-[12px]'
          }[this.size]
        )}
      >
        <span part="content" class=${cx(this.size === 'sm' && 'hidden')}>
          <slot></slot>
        </span>
      </span>
    `;
  }

  static styles = [
    componentStyles,
    css`
      :host {
        @apply inline-flex items-center justify-center;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
