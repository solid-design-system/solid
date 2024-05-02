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
  @property({ reflect: true }) state: 'waiting' | 'finished' | 'inProgress' = 'waiting';

  /** Removes the tail from the step. */
  @property({ reflect: true, type: Boolean, attribute: 'no-tail' }) noTail = false;

  /** The step's label. */
  @property() label = '';

  /** The step's description. */
  @property() description = '';

  /** The step's number in a step-group */
  @property({ type: Number, reflect: true }) number = 1;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  connectedCallback() {
    super.connectedCallback();
  }

  private isLink() {
    return this.href ? true : false;
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
          'flex overflow-hidden pt-1',
          this.orientation === 'horizontal' ? 'flex-col w-full' : 'flex-row gap-8 items-stretch h-full w-min',
          this.state === 'waiting' ? '!text-neutral-500 ' : ''
        )}
      >
        <div
          part="circle-and-tail-container"
          class=${cx(
            'flex shrink-0 gap-4',

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
              this.state === 'waiting' && 'border-neutral-500',
              this.state === 'finished' && 'border-primary hover:bg-primary-100 hover:border-primary-500',
              this.state === 'inProgress' && 'bg-accent border-none text-white'
            )}
          >
            ${
              this.state === 'finished'
                ? html` <sd-icon name="confirm" library="system" color="primary"></sd-icon>`
                : this.number
            }
          </${tag}>

          ${
            this.noTail
              ? ''
              : this.orientation === 'horizontal'
                ? html` <sd-divider part="tail" orientation="horizontal" class="w-full my-auto"></sd-divider> `
                : html`<sd-divider
                    part="tail"
                    orientation="vertical"
                    class="flex-grow flex-shrink-0 basis-auto h-full w-[1px] mx-auto"
                  ></sd-divider> `
          }
        </div>

        <div part="text-container" class="w-24 text-center mt-4 break-words">
          <div part="label" class="!font-bold sd-paragraph">
            ${this.label === '' ? html`<slot name="label"></slot>` : this.label}
          </div>
          <div part="description" class="sd-paragraph sd-paragraph--size-sm">
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
        transform: translateX(20px);
      }

      .translateSm {
        transform: translateX(30px);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-step': SdStep;
  }
}
