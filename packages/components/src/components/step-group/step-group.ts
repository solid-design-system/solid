import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
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
 *

 */
@customElement('sd-step-group')
export default class SdStepGroup extends SolidElement {
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div part="base" class=${cx('flex gap-4 w-full')}>
        <slot></slot>
      </div>
    `;
  }

  static styles = [SolidElement.styles, componentStyles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step-group': SdStepGroup;
  }
}
