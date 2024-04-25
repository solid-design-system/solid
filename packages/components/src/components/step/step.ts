import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import ParagraphStyles from '../../styles/paragraph/paragraph.css?inline';
import SolidElement from '../../internal/solid-element';
/**
 * @summary Steps are used inside [step groups](/components/step-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://solid.union-investment.com/[storybook-link]/step
 * @status stable
 * @since 2.13.0
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

  /** The step's label. */
  @property() label = '';

  /** The step's description. */
  @property() description = '';

  /** The step's number in a step-group */
  @property({ type: Number }) number = 1;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div
        part="base"
        class=${cx(
          'flex overflow-hidden pt-1',
          this.orientation === 'horizontal' ? ' flex-col w-full' : ' flex-row gap-8 items-stretch h-full w-min',
          this.state === 'waiting' ? '!text-neutral-500 ' : ''
        )}
      >
        <div
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
          <button
            part="circle"
            ?disabled=${this.state === 'waiting'}
            tabindex=${this.state === 'finished' ? '0' : '-1'}
            class=${cx(
              'border rounded-full aspect-square circle flex items-center justify-center shrink-0 font-bold select-none',
              this.state === 'finished' ? 'focus-visible:focus-outline' : 'focus-visible:outline-none',
              this.size === 'lg' ? 'w-12' : 'w-8',
              this.state === 'waiting' && 'border-neutral-500',
              this.state === 'finished' && 'border-primary hover:bg-primary-100 hover:border-primary-500',
              this.state === 'inProgress' && 'bg-accent border-none text-white'
            )}
          >
            ${this.state === 'finished'
              ? html` <sd-icon name="confirm" library="system" color="primary"></sd-icon>`
              : this.number}
          </button>

          ${this.noTail
            ? ''
            : this.orientation === 'horizontal'
              ? html` <sd-divider orientation="horizontal" class="w-full my-auto"></sd-divider> `
              : html`<sd-divider
                  orientation="vertical"
                  class="flex-grow flex-shrink-0 basis-auto h-full w-[1px] mx-auto"
                ></sd-divider> `}
        </div>

        <div class="w-24 text-center mt-4 break-words">
          <div class="!font-bold sd-paragraph">
            ${this.label === '' ? html`<slot name="label"></slot>` : this.label}
          </div>
          <div class="sd-paragraph sd-paragraph--size-sm">
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
