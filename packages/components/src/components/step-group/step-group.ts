import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type SdStep from '../step/step';

/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://solid.union-investment.com/[storybook-link]/tab-group
 * @status stable
 * @since 2.13.0
 *
 * 
 * @slot - Used for grouping steps in the step group. Must be `<sd-step>` elements.
 *
 *

 */
@customElement('sd-step-group')
export default class SdStepGroup extends SolidElement {
  /** The step-group's steps. */
  /** @internal */
  private steps: SdStep[] = [];

  @query('[part=body]') body: HTMLSlotElement;

  /** The step-groups's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Determines the orientation of the step-group. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  connectedCallback() {
    super.connectedCallback();

    this.updateComplete.then(() => {
      this.steps = this.getAllSteps();

      // Remove the tail from the last step
      this.steps[this.steps.length - 1].noTail = true;

      this.setAttributes();
    });
  }

  /** @internal */
  @watch(['size', 'orientation'], { waitUntilFirstUpdate: true })
  setAttributes() {
    this.steps.forEach(step => {
      step.size = this.size;
      step.orientation = this.orientation;
    });
  }

  private getAllSteps() {
    return [...this.body.assignedElements()].filter(el => el.tagName.toLowerCase() === 'sd-step') as [SdStep];
  }

  /**
   * Sets the active step.
   * @param index The index of the step to set as active.
   */
  setActiveStep(index: number) {
    this.steps.forEach((step, i) => {
      step.state = i === index ? 'inProgress' : i < index ? 'finished' : 'waiting';
    });
  }

  render() {
    return html`
      <div part="base" class=${cx('flex', this.orientation === 'vertical' && 'flex-col h-full')}>
        <slot part="body"></slot>
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
