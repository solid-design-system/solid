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
 * @slot label - The step's label.
 * @slot - The step's description.


 */
@customElement('sd-step')
export default class SdStep extends SolidElement {
  /** The step's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Determines the orientation of the step. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Determines the state of the step. */
  @property({ reflect: true }) state: 'waiting' | 'finished' | 'inProgress' = 'waiting';

  /** Removes the tail from the step. */
  @property({ reflect: true, type: Boolean, attribute: 'no-tail' }) noTail = false;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div part="base" class="flex flex-col">
        <div class=${cx('flex shrink-0 gap-2', this.size === 'lg' ? 'ml-6' : 'ml-[1.8rem]')}>
          <div
            class=${cx(
              'border border-primary rounded-full aspect-square circle grid place-items-center shrink-0',
              this.size === 'lg' ? 'w-12' : 'w-8'
            )}
            part="circle"
          >
            1
          </div>

          <sd-divider class="w-full my-auto"></sd-divider>
        </div>

        <div class="w-24 text-center mt-4">
          <div class="font-bold text-base"><slot name="label">Step name</slot></div>
          <div class="text-sm"><slot>Lorem ipsum est dolor sit amet</slot></div>
        </div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        @apply w-full;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step': SdStep;
  }
}
