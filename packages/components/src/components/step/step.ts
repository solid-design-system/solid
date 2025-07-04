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
  }

  @watch('notInteractive')
  handleInteractivityChange() {
    if (this.notInteractive) {
      this.current = false;
      this.disabled = false;
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = this.notInteractive ? literal`div` : isLink ? literal`a` : literal`button`;
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabel = this.label ? true : hasLabelSlot;
    const hasDefaultSlot = this.hasSlotController.test('[default]');
    const hasDescription = this.description ? true : hasDefaultSlot;

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
            : 'flex-row gap-4 items-stretch h-full w-min overflow-hidden',
          !this.disabled && !this.current && !this.notInteractive && 'group'
        )}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        <div
          part="circle-and-tail-container"
          class=${cx(
            'flex shrink-0 gap-2',
            this.noTail && 'w-max',
            this.orientation === 'horizontal' ? 'flex-row' : 'flex-col items-stretch',
            this.orientation === 'horizontal'
              ? this.size === 'lg'
                ? 'translateLg'
                : 'translateSm'
              : this.size === 'lg'
                ? 'mt-1'
                : 'mt-3'
          )}
        >

          <${tag}
            part="circle"
            href=${ifDefined(isLink ? this.href : undefined)}
            aria-disabled=${ifDefined(this.disabled || undefined)}
            aria-current=${this.current ? 'step' : undefined}
            aria-labelledby=${ifDefined(this.notInteractive || !hasLabel ? undefined : 'label')}
            aria-describedby=${ifDefined(this.notInteractive || !hasDescription ? undefined : 'description')}
            class=${cx(
              'border rounded-full aspect-square circle flex items-center justify-center shrink-0 font-bold select-none',
              this.disabled
                ? 'focus-visible:outline-none cursor-not-allowed'
                : 'focus-visible:focus-outline group-hover:cursor-pointer',
              this.notInteractive
                ? this.size === 'lg'
                  ? 'not-interactive-lg'
                  : 'w-12'
                : this.size === 'lg'
                  ? 'w-12'
                  : 'w-8',
              this.disabled && 'border-neutral-400 text-neutral-700',
              !this.disabled &&
                !this.current &&
                !this.notInteractive &&
                'border-primary group-hover:bg-primary-100 group-hover:border-primary-500',
              this.notInteractive && 'border-neutral-400',
              this.current && 'bg-accent border-none text-white'
            )}
          >
            <slot
              name="circle-content"
              class=${cx(
                !this.disabled &&
                  !this.current &&
                  !this.notInteractive &&
                  'text-primary group-hover:text-primary-500 group-hover:fill-primary-500',
                this.notInteractive && 'text-primary',
                this.size === 'lg' ? 'text-lg' : 'text-sm'
              )}
            >
              ${
                !this.disabled && !this.current && !this.notInteractive
                  ? html` <sd-icon name="status-check" library="_internal"></sd-icon>`
                  : html`${this.index}`
              }
            </slot>
          </${tag}>
          ${
            this.noTail
              ? ''
              : html`
                  <div
                    part="tail"
                    class=${cx(
                      this.orientation === 'horizontal'
                        ? 'border-t w-full my-auto mr-2'
                        : 'border-l flex-grow flex-shrink-0 basis-auto h-full w-[1px] mx-auto',
                      !this.disabled && !this.current && !this.notInteractive
                        ? ' border-primary group-hover:border-primary-500'
                        : 'border-neutral-400'
                    )}
                  ></div>
                `
          }
        </div>

        <div part="text-container" class=${cx('mt-4 break-words flex flex-col gap-2', this.orientation === 'horizontal' ? 'text-center w-40' : 'w-max text-left', this.disabled && '!text-neutral-700', this.notInteractive ? 'ml-3' : 'mr-4')}>
          <div part="label" id="label" class=${cx('!font-bold sd-paragraph', this.disabled && '!text-neutral-700', !this.disabled && !this.current && !this.notInteractive ? '!text-primary group-hover:!text-primary-500 group-hover:cursor-pointer' : 'text-black')}>
            <slot name="label">${this.label}</slot>
          </div>
          <div part="description" id="description" class=${cx('sd-paragraph sd-paragraph--size-sm', this.disabled && '!text-neutral-700')}>
            ${this.description || html`<slot></slot>`}
          </div>
        </div>
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
