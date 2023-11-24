import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Radio buttons allow the user to select a single option from a group using a button-like control.
 * @documentation https://solid.union-investment.com/[storybook-link]/radio-button
 * @status stable
 * @since 1.0
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

  /**
   * @internal The radio button's checked state. This is exposed as an "internal" attribute so we can reflect it, making
   * it easier to style in button groups.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

  /** Disables the radio button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The radio button's size. */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'lg';

  /** Shows or hides the label */
  @property({ type: Boolean }) showLabel = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'presentation');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleClick(e: MouseEvent) {
    if (this.disabled) {
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

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
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
    const buttonSizeClass = `${this.size}-${this.showLabel ? 'label' : 'no-label'}`;

    return html`
      <div part="base" role="presentation" class="relative">
        <button
          part="${`button${this.checked ? ' button--checked' : ''}`}"
          role="radio"
          aria-checked="${this.checked}"
          class="${cx(
            'relative text-center border rounded-md transition-all ease-in-out duration-100 items-center justify-center focus-visible:focus-outline',
            this.size === 'sm' ? 'text-sm' : 'text-base',
            this.checked && !this.disabled
              ? 'bg-primary border-primary text-white hover:bg-primary-500'
              : this.disabled && !this.checked
                ? 'border-neutral-500 text-neutral-500 hover:cursor-not-allowed'
                : this.disabled && this.checked
                  ? 'bg-neutral-500 text-white hover:cursor-not-allowed'
                  : 'bg-white text-primary border-primary hover:bg-primary-100 hover:border-primary-500 hover:text-primary-500 cursor-pointer',
            this.showLabel && 'px-4',
            this.hasFocus && 'focused-class',
            this.hasSlotController.test('[default]') && 'button--has-label',
            this.hasSlotController.test('icon') && 'button--has-icon flex gap-2',
            buttonSizeClass
          )}"
          aria-disabled=${this.disabled}
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
              this.hasSlotController.test('icon') && 'inline-flex relative items-center',
              this.size === 'sm' && 'text-base',
              this.size === 'md' && 'text-lg',
              this.size === 'lg' && 'text-xl'
            )}"
          ></slot>
          ${this.showLabel
            ? html`<slot part="label" class="button__label inline-flex relative items-center"></slot>`
            : null}
        </button>
      </div>
    `;
  }
  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        display: block;
        width: min-content;
      }

      /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons. We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
      .hidden-input {
        all: unset;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        outline: dotted 1px red;
        opacity: 0;
        z-index: -1;
      }

      .lg-label {
        height: 48px;
      }

      .lg-no-label {
        height: 48px;
        width: 48px;
      }

      .md-label {
        height: 40px;
      }

      .md-no-label {
        height: 40px;
        width: 40px;
      }

      .sm-label {
        height: 32px;
      }

      .sm-no-label {
        height: 32px;
        width: 32px;
      }

      :host(.sd-button-group__button--first:not(.sd-button-group__button--last)) button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
      }

      :host(.sd-button-group__button--inner) button {
        border-radius: 0;
      }

      :host(.sd-button-group__button--last:not(.sd-button-group__button--first)) button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
      }

      /* All except the first */
      :host(.sd-button-group__button:not(.sd-button-group__button--first)) {
        margin-inline-start: -1px;
      }

      /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
      :host(.sd-button-group__button--hover) {
        z-index: 1;
      }

      /* Focus and checked are always on top */
      :host(.sd-button-group__button--focus),
      :host(.sd-button-group__button[checked]) {
        z-index: 2;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-radio-button': SdRadioButton;
  }
}
