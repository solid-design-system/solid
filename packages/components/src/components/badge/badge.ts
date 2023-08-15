import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://solid.union-investment.com/[storybook-link]/badge
 * @status stable
 * @since 1.5.0
 *
 * @slot - The badge's content.
 * @slot overflow-indicator - Optional: The badge's overflow-indicator.
 *
 * @csspart base - The badge's base wrapper.
 * @csspart content - The badge's main content.
 * @csspart overflow-indicator - The badge's overflow indicator.
 */
@customElement('sd-badge')
export default class SdBadge extends SolidElement {
  /** Inverts the badge. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** The badge's size. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** The badge's theme variant. */
  @property({ reflect: true }) variant: 'default' | 'success' | 'error' = 'default';

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'overflow-indicator');

  render() {
    const slots = {
      'badge-has-default': this.hasSlotController.test('[default]'),
      'badge-has-overflow-indicator': this.hasSlotController.test('overflow-indicator')
    };

    return html`
      <span
        tabindex="0"
        role="status"
        part="base"
        class=${cx(
          `inline-flex items-center justify-center gap-x-[1px] text-center leading-none whitespace-nowrap border rounded-full select-none cursor-[inherit]`,
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
        <span
          part="overflow-indicator"
          class=${cx((!slots['badge-has-overflow-indicator'] || this.size === 'sm') && `hidden`)}
        >
          <slot name="overflow-indicator"></slot>
        </span>
      </span>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
