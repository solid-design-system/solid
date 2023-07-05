import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import SolidElement from '../../internal/solid-element';
import styles from './badge.styles';
import type { CSSResultGroup } from 'lit';

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
  static styles: CSSResultGroup = styles;

  /** The badge's theme variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
      badge: true,
      'badge--primary': this.variant === 'primary',
      'badge--success': this.variant === 'success',
      'badge--neutral': this.variant === 'neutral',
      'badge--warning': this.variant === 'warning',
      'badge--danger': this.variant === 'danger',
      'badge--pill': this.pill,
      'badge--pulse': this.pulse
    })}
        role="status"
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-badge': SdBadge;
  }
}
