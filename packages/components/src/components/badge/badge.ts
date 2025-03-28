import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
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
  @property({ reflect: true }) variant: 'blue' | 'green' | 'red' = 'blue';

  /** Inverts the badge. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  render() {
    return html`
      <span
        role="status"
        part="base"
        aria-labelledby="content"
        class=${cx(
          'inline-flex items-center justify-center gap-x-[1px] text-center font-bold whitespace-nowrap border rounded-full select-none cursor-[inherit]',
          {
            /* variants */
            blue: !this.inverted
              ? 'text-white bg-primary-500 border-white'
              : 'text-primary bg-primary-100 border-primary',
            green: !this.inverted ? 'text-white bg-success border-white' : 'text-white bg-success border-primary',
            red: !this.inverted ? 'text-white bg-error border-white' : 'text-white bg-error border-primary'
          }[this.variant]
        )}
      >
        <span id="content" part="content" class=${cx(this.size === 'sm' && 'sr-only')}>
          <slot></slot>
        </span>
      </span>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-flex items-center justify-center;
      }

      :host([size='md']) {
        @apply h-4 min-w-4;
        font-size: 0.625rem;
      }

      :host([size='lg']) {
        @apply h-5 min-w-5;
        font-size: 0.75rem;
      }

      :host([size='sm'])::part(base) {
        @apply h-2 min-w-2;
      }

      :host([size='md'])::part(base) {
        @apply px-1;
      }

      :host([size='lg'])::part(base) {
        padding-left: 0.313rem;
        padding-right: 0.313rem;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
