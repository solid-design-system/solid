import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
/**
 * @summary Steps are used inside [step groups](/components/step-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://solid.union-investment.com/[storybook-link]/step
 * @status stable
 * @since 2.6.0
 *
 *
 *

 */
@customElement('sd-step')
export default class SdStep extends SolidElement {
  /** The step's size. */
  @property({ reflect: true }) size: 'lg' | 'md' = 'lg';

  /** Determines the orientation of the step. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Determines the state of the step. */
  @property({ reflect: true }) state: 'waiting' | 'finished' | 'inProgress' = 'waiting';

  /** Removes the tail from the step. */
  @property({ reflect: true, type: Boolean, attribute: 'no-tail' }) noTail = false;

  /**
   * You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @property({ attribute: 'label', reflect: true }) label = '';

  @property({ attribute: 'description', reflect: true }) description = '';

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div
        part="base"
        class=${cx('border border-primary rounded-full aspect-square', this.size === 'lg' ? 'w-12' : 'w-8')}
      >
        <slot name="label"></slot>
        <slot></slot>
      </div>
    `;
  }

  static styles = [SolidElement.styles, componentStyles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step': SdStep;
  }
}
