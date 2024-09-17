import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';

/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://solid.union-investment.com/[storybook-link]/switch
 * @status stable
 * @since 1.26.0
 *
 *
 * @slot - The switch's label.
 *
 * @event sd-blur - Emitted when the switch loses focus.
 * @event sd-change - Emitted when the checked state changes.
 * @event sd-focus - Emitted when the switch gains focus.
 * @event sd-input - Emitted when the switch receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the switch's state.
 * @csspart control--checked - Matches the control part when the switch is on.
 * @csspart control--unchecked - Matches the control part when the switch is off.
 * @csspart thumb - The circle that marks the switch's state.
 * @csspart label - The container that wraps the switch's label.
 */
@customElement('sd-switch')
export default class SdSwitch extends SolidElement implements SolidFormControl {
  private readonly formControlController: FormControlController = new FormControlController(this, {
    value: (control: SdSwitch) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: SdSwitch) => control.defaultChecked,
    setValue: (control: SdSwitch, checked: boolean) => (control.checked = checked)
  });

  @query('input') input: HTMLInputElement;
  @query('#invalid-message') invalidMessage: HTMLDivElement;

  /**
   * Indicates whether or not the user input is valid after the user has interacted with the component. These states are activated when the attribute "data-user-valid" or "data-user-invalid" are set on the component via the form controller. They are different than the native input validity state which is always either `true` or `false`.
   * @internal
   */
  @state() showInvalidStyle = false;

  /** The title of the switch adds a tooltip with title text. */
  @property() title = ''; // make reactive to pass through

  /** The name of the switch, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The current value of the switch, submitted as a name/value pair with form data. */
  @property() value: string;

  /** Disables the switch. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the switch in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue('checked') defaultChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Makes the switch a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleClick() {
    this.checked = !this.checked;
    this.emit('sd-change');
  }

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleInput() {
    this.emit('sd-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
    this.invalidMessage.textContent = (event.target as HTMLInputElement).validationMessage;
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch(['checked'], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.formControlController.updateValidity();
  }

  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /** Sets focus on the switch. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }

  /** Checks for validity but does not show a validation message. Returns true when valid and false when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows a validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    return html`
      <label
        part="base"
        class=${cx(
          'group flex items-center text-base leading-normal text-black cursor-pointer',
          this.disabled && 'hover:cursor-not-allowed'
        )}
      >
        <input
          id="input"
          class="peer absolute opacity-0 p-0 m-0 pointer-events-none"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          id="control"
          part="control ${this.checked ? ' control--checked' : 'control--unchecked'}"
          class=${cx(
            `relative flex flex-initial items-center justify-center border rounded-full h-4 w-8 transition-colors ease duration-100
            peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2
            peer-focus-visible:outline-primary`,
            this.disabled && this.checked
              ? 'border-neutral-500 bg-neutral-500'
              : this.disabled
                ? 'border-neutral-500'
                : this.showInvalidStyle
                  ? 'border-error bg-error hover:bg-error-400'
                  : this.checked
                    ? 'border-accent bg-accent hover:bg-accent-550 group-hover:bg-accent-550'
                    : 'border-neutral-800 bg-white hover:bg-neutral-200 group-hover:bg-neutral-200'
          )}
        >
          <span
            id="thumb"
            part="thumb"
            class=${cx(
              'w-2.5 h-2.5 rounded-full transition-transform ease-in-out duration-200',
              this.disabled && this.checked
                ? 'bg-white'
                : this.disabled
                  ? '-translate-x-2 bg-neutral-500'
                  : this.showInvalidStyle
                    ? 'bg-white -translate-x-2'
                    : this.checked
                      ? 'translate-x-2 bg-white'
                      : 'bg-neutral-800 -translate-x-2'
            )}
          ></span>
        </span>
        <span
          part="label"
          id="label"
          class=${cx(
            'select-none inline-block ml-2',
            this.disabled ? 'text-neutral-500' : this.showInvalidStyle ? 'text-error' : 'text-black'
          )}
        >
          <slot></slot>
        </span>
      </label>
      ${this.formControlController.renderInvalidMessage()}
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        @apply block w-max;
      }

      :host(:focus-visible) {
        @apply outline-none;
      }

      :host([required]) #label::after {
        content: ' *';
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-switch': SdSwitch;
  }
}
