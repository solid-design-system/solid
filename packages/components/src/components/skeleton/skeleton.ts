import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Skeleton loaders are used as placeholder previews of content before data gets loaded.
 * @documentation https://solid.union-investment.com/[storybook-link]/skeleton
 * @status stable
 * @since 3.0
 *
 * @slot - The skeleton's content. When provided, adapts to the content's dimensions. When empty, displays according to the variant property.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-skeleton')
export default class SdSkeleton extends SolidElement {
  /** The shape variant when used without slotted content. */
  @property({ type: String, reflect: true }) variant: 'rectangular' | 'circular' = 'rectangular';

  render() {
    return html`
      <div
        part="base"
        class=${cx(
          'bg-neutral-200 w-full h-full animate-pulse',
          {
            rectangular: 'rounded-sm',
            circular: 'rounded-full inline-block'
          }[this.variant]
        )}
      >
        <slot></slot>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block;
      }

      ::slotted(*) {
        @apply invisible;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-skeleton': SdSkeleton;
  }
}
