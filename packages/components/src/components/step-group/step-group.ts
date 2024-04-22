import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://solid.union-investment.com/[storybook-link]/tab
 * @status stable
 * @since 2.6.0
 *
 * 
 *  * @slot - Used for grouping steps in the step group. Must be `<sd-step>` elements.
 *
 *

 */
@customElement('sd-step-group')
export default class SdStepGroup extends SolidElement {
  /** The step-groups's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Determines the orientation of the step-group. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div part="base" class=${cx('flex', this.orientation === 'horizontal' ? '' : ' flex-col h-full')}>
        <slot></slot>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        @apply w-max;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step-group': SdStepGroup;
  }
}
