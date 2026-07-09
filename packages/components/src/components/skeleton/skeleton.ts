import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Skeleton loaders are used as placeholder previews of content before data gets loaded.
 * @documentation https://solid.union-investment.com/[storybook-link]/skeleton
 * @status deprecated
 * @since 5.17.0
 *
 * @deprecated Use the `sd-skeleton` CSS class instead. Apply it directly to the element you want to show as a skeleton and remove it once content is loaded. See the Styles/sd-skeleton documentation.
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

  connectedCallback() {
    super.connectedCallback();
    console.warn(
      '<sd-skeleton> is deprecated. Use the `sd-skeleton` CSS class directly on the target element instead. See the Styles/sd-skeleton documentation.'
    );
  }

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
