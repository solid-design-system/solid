import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Radio buttons allow the user to select a single option from a group using a button-like control.
 * @documentation https://solid.union-investment.com/[storybook-link]/radio-button
 * @status stable
 * @since 1.36.0
 *
 * @slot - The radio button's label.
 * @slot icon - A presentational icon.
 *
 * @event sd-blur - Emitted when the button loses focus.
 * @event sd-focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal `<button>` element.
 * @csspart button--checked - The internal button element when the radio button is checked.
 * @csspart icon - The container that wraps the icon.
 * @csspart label - The container that wraps the radio button's label.
 */
@customElement('sd-radio-button')
export default class SdRadioButton extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'icon');

  @query('.button') input: HTMLInputElement;
  @query('.hidden-input') hiddenInput: HTMLInputElement;

  @state() protected hasFocus = false;

  /** The radio button's size. */
  @property({ type: String, reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** Disables the radio button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Styles the radio-button as if it was disabled and enables aria-disabled */
  @property({ type: Boolean, reflect: true, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /**
   * @internal The radio button's checked state. This is exposed as an "internal" attribute so we can reflect it, making
   * it easier to style in button groups.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'presentation');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleClick(e: MouseEvent) {
    if (this.disabled || this.visuallyDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.checked = true;
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  @watch(['disabled', 'visually-disabled'], { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    const isDisabled = this.disabled || this.visuallyDisabled;
    this.setAttribute('aria-disabled', isDisabled ? 'true' : 'false');
  }

  /** Sets focus on the radio button. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the radio button. */
  blur() {
    this.input.blur();
  }

  render() {
    const hasDefaultSlot = this.hasSlotController.test('[default]');
    const hasIconSlot = this.hasSlotController.test('icon');
    const buttonSizeClass = `${this.size}-${hasDefaultSlot ? 'label' : 'no-label'}`;

    return html`
      <div part="base" role="presentation" class="relative">
        <button
          part="${`button${this.checked ? ' button--checked' : ''}`}"
          role="radio"
          aria-checked="${this.checked}"
          class="${cx(
            'relative text-center rounded-full transition-all ease-in-out duration-100 items-center justify-center focus-visible:focus-outline',
            this.size === 'sm' ? 'text-sm' : 'text-base',
            this.checked && !this.disabled && !this.visuallyDisabled
              ? 'bg-primary text-white hover:bg-primary-500'
              : (this.disabled || this.visuallyDisabled) && !this.checked
                ? 'text-neutral-500 hover:cursor-not-allowed'
                : (this.disabled || this.visuallyDisabled) && this.checked
                  ? 'text-neutral-500 hover:cursor-not-allowed '
                  : 'bg-transparent text-primary border-primary hover:text-primary-500 cursor-pointer',
            hasDefaultSlot &&
              {
                sm: 'px-3',
                md: 'px-4',
                lg: 'px-5'
              }[this.size],
            this.hasFocus && 'focused-class',
            hasDefaultSlot && 'button--has-label',
            hasIconSlot && 'button--has-icon flex gap-2',
            buttonSizeClass
          )}"
          aria-disabled=${this.disabled || this.visuallyDisabled}
          type="button"
          value=${ifDefined(this.value)}
          tabindex="${this.checked ? '0' : '-1'}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot
            name="icon"
            part="icon"
            class="${cx(
              hasIconSlot && 'inline-flex relative items-center',
              {
                sm: 'text-base',
                md: 'text-lg',
                lg: 'text-xl'
              }[this.size]
            )}"
            ?hidden=${!hasIconSlot}
          ></slot>
          ${hasDefaultSlot
            ? html`<slot part="label" class="button__label inline-flex relative items-center whitespace-nowrap"></slot>`
            : null}
        </button>
      </div>
    `;
  }
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block w-min;
      }

      /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons. We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
      .hidden-input {
        all: unset;
        @apply absolute inset-0 outline-dotted outline-1 outline-error opacity-0 -z-10;
      }

      .lg-label {
        @apply h-12;
      }

      .lg-no-label {
        @apply h-12 px-5;
      }

      .md-label {
        @apply h-10;
      }

      .md-no-label {
        @apply h-10 px-4;
      }

      .sm-label {
        @apply h-8;
      }

      .sm-no-label {
        @apply h-8 px-3;
      }

      /* All except the first */
      :host([size='lg'].sd-button-group__button:not(.sd-button-group__button--first)) {
        @apply -ms-3;
      }

      /* All except the first */
      :host([size='md'].sd-button-group__button:not(.sd-button-group__button--first)) {
        @apply -ms-2;
      }

      /* All except the first */
      :host([size='sm'].sd-button-group__button:not(.sd-button-group__button--first)) {
        @apply -ms-1;
      }

      :host(.sd-button-group__button--hover) {
        @apply z-20;
      }

      :host(.sd-button-group__button--focus),
      :host(.sd-button-group__button[checked]) {
        @apply z-10;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-radio-button': SdRadioButton;
  }
}
