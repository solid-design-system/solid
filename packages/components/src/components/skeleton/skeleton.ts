import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Used as a placeholder preview of the content before the data gets loaded to reduce load-time frustration.
 * @documentation https://solid.union-investment.com/[storybook-link]/skeleton
 * @status stable
 * @since 5.17.0
 * @deprecated Use the `sd-skeleton` CSS style instead. Apply the `sd-skeleton` class directly to your content element (e.g. `<p class="sd-skeleton">text</p>`) and remove it once loading is complete. See: https://solid.union-investment.com/[storybook-link]/styles-sd-skeleton--docs
 *
 * @slot - The skeleton's content. When provided, adapts to the content's dimensions. When empty, displays according to the variant property.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --sd-skeleton-color - The color of the skeleton.
 */
@customElement('sd-skeleton')
export default class SdSkeleton extends SolidElement {
  /** The shape variant when used without slotted content. */
  @property({ type: String, reflect: true }) variant: 'rectangular' | 'circular' = 'rectangular';

  render() {
    return html`
      <div
        part="base"
        aria-hidden="true"
        class=${cx(
          'sd-skeleton-color w-full h-full animate-pulse',
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
