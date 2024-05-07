import { css, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import ParagraphStyles from '../../styles/paragraph/paragraph.css?inline';
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
  /** The step's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Determines the orientation of the step. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Determines the state of the step. */
  @property({ reflect: true }) state: 'waiting' | 'inProgress' | 'finished' = 'waiting';

  /** Removes the tail from the step. */
  @property({ reflect: true, type: Boolean, attribute: 'no-tail' }) noTail = false;

  /** The step's label overwriting the `label` slot. Use the `label` slot for complex label content. */
  @property() label = '';

  /** The step's description overwriting the `description` slot. Use the `description` slot for complex description content. */
  @property() description = '';

  /** The step's number in a step-group */
  @property({ type: Number, reflect: true, attribute: 'step-index' }) StepIndex = 1;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

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

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <div
        part="base"
        class=${cx(
          'flex pt-1',
          this.orientation === 'horizontal'
            ? 'flex-col w-full'
            : 'flex-row gap-4 items-stretch h-full w-min overflow-hidden',
          this.state === 'waiting' ? '!text-neutral-500 ' : '',
          this.state === 'finished' && 'group'
        )}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        <div
          part="circle-and-tail-container"
          class=${cx(
            'flex shrink-0 gap-2',

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
            ?disabled=${this.state !== 'finished'}
            tabindex=${this.state === 'finished' ? '0' : '-1'}
            href=${ifDefined(isLink ? this.href : undefined)}
            aria-label=${this.state === 'finished' && 'Step completed'}
            class=${cx(
              'border rounded-full aspect-square circle flex items-center justify-center shrink-0 font-bold select-none',
              this.state === 'finished' ? 'focus-visible:focus-outline' : 'focus-visible:outline-none',
              this.size === 'lg' ? 'w-12' : 'w-8',
              this.state === 'waiting' && 'border-neutral-400',
              this.state === 'finished' && 'border-primary group-hover:bg-primary-100 group-hover:border-primary-500',
              this.state === 'inProgress' && 'bg-accent border-none text-white'
            )}
          >
            ${
              this.state === 'finished'
                ? html` <sd-icon
                    name="status-hook"
                    library="system"
                    class=${cx('text-primary group-hover:text-primary-500', this.size === 'lg' ? 'text-lg' : 'text-sm')}
                  ></sd-icon>`
                : this.StepIndex
            }
          </${tag}>

          ${
            this.noTail
              ? ''
              : this.orientation === 'horizontal'
                ? html`
                    <sd-divider
                      part="tail"
                      orientation="horizontal"
                      class=${cx('w-full my-auto mr-2', this.state === 'finished' && 'tail-to-primary')}
                    ></sd-divider>
                  `
                : html`<sd-divider
                    part="tail"
                    orientation="vertical"
                    class=${cx(
                      'flex-grow flex-shrink-0 basis-auto h-full w-[1px] mx-auto',
                      this.state === 'finished' && 'tail-to-primary'
                    )}
                  ></sd-divider> `
          }
        </div>

        <div part="text-container" class=${cx('w-24 mt-4 break-words flex flex-col gap-2', this.orientation === 'horizontal' ? 'text-center' : 'text-left', this.state === 'waiting' && '!text-neutral-500')}>
          <div part="label" class=${cx('!font-bold sd-paragraph', this.state === 'waiting' && '!text-neutral-500', this.state === 'finished' && '!text-primary group-hover:!text-primary-500')}>
            ${this.label === '' ? html`<slot name="label"></slot>` : this.label}
          </div>
          <div part="description" class=${cx('sd-paragraph sd-paragraph--size-sm', this.state === 'waiting' && '!text-neutral-500')}>
            ${this.description === '' ? html`<slot></slot>` : this.description}
          </div>
        </div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    unsafeCSS(ParagraphStyles),

    css`
      :host {
        @apply flex-1;
      }

      [part='base']:not(:has(sd-divider)) {
        @apply h-max;
      }

      :host([no-tail]) {
        @apply flex-grow-0;
      }

      .translateLg {
        transform: translateX(24px);
      }

      .translateSm {
        transform: translateX(32px);
      }

      .tail-to-primary::part(main) {
        @apply !border-primary group-hover:!border-primary-500;
      }

      sd-divider::part(main) {
        @apply !border-neutral-400;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step': SdStep;
  }
}
