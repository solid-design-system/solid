import '../icon/icon';
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
/**
 * @summary Steps are used inside [step groups](/components/step-group) to guide users through the steps of a process or task..
 * @documentation https://solid.union-investment.com/[storybook-link]/step
 * @status stable
 * @since 3.2.0
 *
 * @dependency sd-icon
 * @dependency sd-divider
 *
 * @slot - The step's description.
 * @slot label - The step's label.
 * @slot index - The step's index.
 * @slot circle-content - The content inside a step circle. This could be an icon or a number.
 *
 * @event sd-blur - Emitted when the button loses focus.
 * @event sd-focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart circle-and-tail-container - The container that wraps the step's circle and tail.
 * @csspart circle - The circle that marks the step's state.
 * @csspart tail - The step's tail.
 * @csspart text-container - The container that wraps the step's label and description.
 * @csspart label - The step's label.
 * @csspart description - The step's description.
 */
@customElement('sd-step')
export default class SdStep extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'label', '[default]');

  /** The step's size. */
  @property({ type: String, reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Determines the orientation of the step. */
  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Enables the horizontal inline variant for more compact layout. */
  @property({ type: Boolean, reflect: true, attribute: 'horizontal-inline' }) horizontalInline = false;

  /** Sets the step to a waiting state. */
  @property({ type: Boolean, reflect: true }) waiting = false;

  /** Sets the step to a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Sets the step to an active state. */
  @property({ type: Boolean, reflect: true }) current = false;

  /** Removes the tail from the step. */
  @property({ reflect: true, type: Boolean, attribute: 'no-tail' }) noTail = false;

  /** Determines if the step is not interactive. */
  @property({ type: Boolean, reflect: true, attribute: 'not-interactive' }) notInteractive = false;

  /** The step's label overwriting the `label` slot. Use the `label` slot for complex label content. */
  @property({ type: String, reflect: true }) label = '';

  /** The step's description overwriting the `description` slot. Use the `description` slot for complex description content. */
  @property({ type: String, reflect: true }) description = '';

  /** The step's number in a step-group */
  @property({ type: Number, reflect: true, attribute: 'index' }) index = 1;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property({ type: String, reflect: true }) href = '';

  connectedCallback() {
    super.connectedCallback();
  }

  private isLink() {
    return this.href ? true : false;
  }

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  @watch('current')
  handleCurrentChange() {
    if (this.current) {
      this.disabled = false;
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled) {
      this.current = false;
    }
    const waitingAttr = this.getAttribute('waiting');
    if (waitingAttr === null) {
      this.waiting = false;
    }
  }

  @watch('waiting')
  handleWaitingChange() {
    if (this.waiting) {
      this.current = false;
      this.disabled = false;
    }
  }

  @watch('notInteractive')
  handleInteractivityChange() {
    if (this.notInteractive) {
      this.current = false;
      this.disabled = false;
      this.waiting = false;
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = this.notInteractive || this.waiting ? literal`div` : isLink ? literal`a` : literal`button`;
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabel = this.label ? true : hasLabelSlot;
    const hasDefaultSlot = this.hasSlotController.test('[default]');
    const hasDescription = this.description ? true : hasDefaultSlot;
    const isHorizontalInline = this.horizontalInline && this.orientation === 'horizontal';

    const circleAndTailContainerClasses = cx(
      'flex shrink-0 gap-2',
      this.noTail && !isHorizontalInline && 'w-max',
      this.orientation === 'horizontal' ? 'flex-row' : 'flex-col items-stretch',
      isHorizontalInline && 'items-start',
      this.orientation === 'horizontal' && !this.horizontalInline
        ? this.size === 'lg'
          ? 'translateLg'
          : 'translateSm'
        : this.size === 'lg'
          ? 'mt-1'
          : 'mt-3'
    );

    const circleButtonClasses = cx(
      'border rounded-full aspect-square circle flex items-center justify-center shrink-0 font-bold select-none',
      this.disabled || this.waiting
        ? 'focus-visible:outline-none cursor-not-allowed'
        : 'focus-visible:focus-outline hover:cursor-pointer',
      this.notInteractive ? (this.size === 'lg' ? 'not-interactive-lg' : 'w-12') : this.size === 'lg' ? 'w-12' : 'w-8',
      this.disabled && 'border-neutral-500 text-neutral-500',
      this.waiting && 'border-neutral-400 text-neutral-700',
      !this.disabled &&
        !this.current &&
        !this.notInteractive &&
        !this.waiting &&
        'border-primary hover:bg-primary-100 hover:border-primary-500',
      this.notInteractive && 'border-neutral-400',
      this.current && 'bg-accent border-none text-white'
    );

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <div
        role="listitem"
        part="base"
        class=${cx(
          'flex pt-1',
          this.orientation === 'horizontal'
            ? 'flex-col w-full'
            : 'flex-row gap-4 items-stretch h-full w-full overflow-hidden',
          !this.disabled && !this.current && !this.notInteractive && !this.waiting && 'group'
        )}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        <div
          part="circle-and-tail-container"
          class=${circleAndTailContainerClasses}
        >
          <${tag}
            part="circle"
            href=${ifDefined(isLink ? this.href : undefined)}
            aria-disabled=${ifDefined(this.disabled || this.waiting || undefined)}
            aria-current=${this.current ? 'step' : undefined}
            aria-labelledby=${ifDefined(this.notInteractive || this.waiting || !hasLabel ? undefined : 'label')}
            aria-describedby=${ifDefined(this.notInteractive || this.waiting || !hasDescription ? undefined : 'description')}
            class=${circleButtonClasses}
          >
            <slot
              name="circle-content"
              class=${cx(
                'text-lg',
                !this.disabled &&
                  !this.current &&
                  !this.notInteractive &&
                  !this.waiting &&
                  'text-primary hover:text-primary-500 hover:fill-primary-500',
                this.notInteractive && 'text-primary'
              )}
            >
              ${
                !this.disabled && !this.current && !this.notInteractive && !this.waiting
                  ? html` <sd-icon
                      name="status-check"
                      library="_internal"
                      class="${cx(this.size === 'sm' && 'text-sm')}"
                    ></sd-icon>`
                  : html`${this.index}`
              }
            </slot>
          </${tag}>

          ${
            isHorizontalInline
              ? html`
                  <div class=${cx('flex flex-col gap-1 flex-1')}>
                    <div
                      class=${cx(
                        'flex w-full',
                        hasLabel && 'gap-2',
                        this.size === 'sm' && !hasDescription ? 'mt-1' : 'mt-3'
                      )}
                    >
                      ${hasLabel
                        ? html`
                            <div
                              part="label"
                              id="label"
                              class=${cx(
                                '!font-bold sd-paragraph whitespace-nowrap',
                                this.disabled && '!text-neutral-500',
                                this.waiting && '!text-neutral-700',
                                !this.disabled && !this.current && !this.notInteractive && !this.waiting
                                  ? '!text-primary'
                                  : 'text-black'
                              )}
                            >
                              <slot name="label">${this.label}</slot>
                            </div>
                          `
                        : ''}
                      ${this.noTail
                        ? html`<div class="flex-1"></div>`
                        : html`
                            <div
                              part="tail"
                              class=${cx(
                                'border-t flex-1 mr-2 mt-3',
                                !this.disabled && !this.current && !this.notInteractive && !this.waiting
                                  ? 'border-primary'
                                  : 'border-neutral-500'
                              )}
                            ></div>
                          `}
                    </div>
                    <div
                      part="description"
                      id="description"
                      class=${cx(
                        'sd-paragraph sd-paragraph--size-sm break-words',
                        hasDescription ? 'flex-1 pr-4' : 'w-0 h-0 overflow-hidden',
                        this.disabled && '!text-neutral-700',
                        this.waiting && '!text-neutral-700'
                      )}
                    >
                      ${hasDescription ? this.description || html`<slot></slot>` : ''}
                    </div>
                  </div>
                `
              : this.noTail
                ? ''
                : html`
                    <div
                      part="tail"
                      class=${cx(
                        this.orientation === 'horizontal'
                          ? 'border-t w-full my-auto mr-2'
                          : 'border-l flex-grow flex-shrink-0 basis-auto h-full w-[1px] mx-auto',
                        !this.disabled && !this.current && !this.notInteractive && !this.waiting
                          ? 'border-primary'
                          : 'border-neutral-400'
                      )}
                    ></div>
                  `
          }
        </div>
        ${
          !isHorizontalInline
            ? html`
                <div
                  part="text-container"
                  class=${cx(
                    'mt-4 break-words flex flex-col gap-2',
                    this.orientation === 'horizontal' ? 'text-center w-40' : 'text-left',
                    this.disabled && '!text-neutral-500',
                    this.waiting && '!text-neutral-700',
                    this.notInteractive ? 'ml-2' : 'mr-4'
                  )}
                >
                  <div
                    part="label"
                    id="label"
                    class=${cx(
                      '!font-bold sd-paragraph',
                      this.disabled && '!text-neutral-500',
                      this.waiting && '!text-neutral-700',
                      !this.disabled && !this.current && !this.notInteractive && !this.waiting
                        ? '!text-primary'
                        : 'text-black'
                    )}
                  >
                    <slot name="label">${this.label}</slot>
                  </div>
                  <div
                    part="description"
                    id="description"
                    class=${cx(
                      'sd-paragraph sd-paragraph--size-sm',
                      this.disabled && '!text-neutral-700',
                      this.waiting && '!text-neutral-700'
                    )}
                  >
                    ${this.description || html`<slot></slot>`}
                  </div>
                </div>
              `
            : ''
        }
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply flex-1;
      }

      :host([no-tail]) {
        @apply flex-grow-0;
      }

      :host([horizontal-inline]) {
        @apply flex-1 min-w-0;
      }

      :host([horizontal-inline][no-tail]) {
        @apply flex-1;
      }

      .translateLg {
        transform: translateX(3.438rem);
      }

      .translateSm {
        transform: translateX(4rem);
      }

      .not-interactive-lg {
        @apply w-[4.5rem];
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step': SdStep;
  }
}
