import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type SdStep from '../step/step';

/**
 * @summary Used as navigation bar that guides users through the steps of a process or task.
 * @documentation https://solid.union-investment.com/[storybook-link]/step-group
 * @status stable
 * @since 3.2.0
 *
 *
 * @slot - Used for grouping steps in the step group. Must be `<sd-step>` elements.
 *
 * @csspart base - The component's base wrapper.
 * @csspart body - The container that wraps the steps.
 */
@customElement('sd-step-group')
export default class SdStepGroup extends SolidElement {
  private steps: SdStep[] = [];

  @query('[part=body]') body: HTMLSlotElement;

  /** The step-groups's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Determines the orientation of the step-group. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** The active step in the step-group. */
  @property({ type: Number, reflect: true, attribute: 'active-step' }) activeStep = 0;

  connectedCallback() {
    super.connectedCallback();

    this.updateComplete.then(() => {
      this.steps = this.getAllSteps();

      // Remove the tail from the last step
      this.steps[this.steps.length - 1].noTail = true;

      this.steps.forEach((step, index) => {
        // Initialize the step attributes
        step.index = index + 1;
        step.size = this.size;
        step.orientation = this.orientation;

        // Set the active step on click
        step.addEventListener('click', () => {
          if (step.state === 'finished') {
            this.setActiveStep(index);
          }
        });
      });
    });
  }

  @watch('size', { waitUntilFirstUpdate: true })
  updateSize() {
    this.steps.forEach(step => {
      step.size = this.size;
    });
  }

  @watch('orientation', { waitUntilFirstUpdate: true })
  updateOrientation() {
    this.steps.forEach(step => {
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
    if (index >= 0 && index < this.steps.length) {
      this.activeStep = index;

      this.steps.forEach((step, i) => {
        step.state = i === index ? 'inProgress' : i < index ? 'finished' : 'waiting';
      });
    }
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
