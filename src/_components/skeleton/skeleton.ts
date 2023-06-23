import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import SolidElement from '../../internal/solid-element';
import styles from './skeleton.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Skeletons are used to provide a visual representation of where content will eventually be drawn.
 * @documentation https://solid.union-investment.com/[storybook-link]/skeleton
 * @status stable
 * @since 1.0
 *
 * @csspart base - The component's base wrapper.
 * @csspart indicator - The skeleton's indicator which is responsible for its color and animation.
 *
 * @cssproperty --border-radius - The skeleton's border radius.
 * @cssproperty --color - The color of the skeleton.
 * @cssproperty --sheen-color - The sheen color when the skeleton is in its loading state.
 */
@customElement('sd-skeleton')
export default class SdSkeleton extends SolidElement {
  static styles: CSSResultGroup = styles;

  /** Determines which effect the skeleton will use. */
  @property() effect: 'pulse' | 'sheen' | 'none' = 'none';

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      skeleton: true,
      'skeleton--pulse': this.effect === 'pulse',
      'skeleton--sheen': this.effect === 'sheen'
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-skeleton': SdSkeleton;
  }
}
