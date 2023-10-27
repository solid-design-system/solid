import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
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
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://solid.union-investment.com/[storybook-link]/checkbox
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon
 *
 * @slot - The checkbox's label.
 *
 * @event sd-blur - Emitted when the checkbox loses focus.
 * @event sd-change - Emitted when the checked state changes.
 * @event sd-focus - Emitted when the checkbox gains focus.
 * @event sd-input - Emitted when the checkbox receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<sd-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<sd-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 */
@customElement('sd-checkbox')
export default class SdCheckbox extends SolidElement implements SolidFormControl {
  private readonly formControlController = new FormControlController(this, {
    value: (control: SdCheckbox) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: SdCheckbox) => control.defaultChecked,
    setValue: (control: SdCheckbox, checked: boolean) => (control.checked = checked)
  });

  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private hasFocus = false;

  @property() title = ''; // make reactive to pass through

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  @property() value: string;

  /** The checkbox's size. */
  @property({ reflect: true }) size: 'sm' | 'lg' = 'lg';

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**  A Boolean attribute which, if present, marks the radio valid or invalid  */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue('checked') defaultChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Makes the checkbox a required field. */
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
    this.indeterminate = false;
    this.emit('sd-change');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleInput() {
    this.emit('sd-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch(['checked', 'indeterminate'], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
    this.formControlController.updateValidity();
  }

  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }

  /** Sets focus on the checkbox. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
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
          'sd-checkbox group inline-flex items-start leading-normal text-black cursor-pointer',
          this.checked && 'checkbox--checked',
          this.disabled && 'hover:cursor-not-allowed',
          this.hasFocus && 'checkbox--focused',
          {
            /* sizes, fonts */
            sm: 'text-sm',
            lg: 'text-base'
          }[this.size]
        )}
      >
        <input
          class="checkbox__input absolute opacity-0 p-0 m-0 pointer-events-none"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .indeterminate=${live(this.indeterminate)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control ${this.checked ? ' control--checked' : 'control--unchecked'}${this.indeterminate
            ? ' control--indeterminate'
            : ''}"
          class=${cx(
            `checkbox__control relative inline-flex items-center justify-center border rounded-sm h-4 w-4 ${
              (this.size === 'sm' && 'mt-[2px]') || (this.size === 'lg' && 'mt-[3px]')
            }`,
            (this.disabled && 'border-neutral-500') ||
              (this.invalid &&
                `border-error hover:border-error-400 ${this.checked && 'bg-error group-hover:bg-error-400'}`) ||
              ((this.checked || this.indeterminate) &&
                'border-accent hover:border-accent-550 group-hover:border-accent-550 bg-accent group-hover:bg-accent-550') ||
              'border-neutral-800 hover:bg-neutral-200 group-hover:bg-neutral-200 bg-white'
          )}
        >
          ${this.checked
            ? html`
                <sd-icon
                  part="checked-icon"
                  class="checkbox__checked-icon text-white"
                  library="system"
                  name="status-hook"
                ></sd-icon>
              `
            : ''}
          ${!this.checked && this.indeterminate
            ? html`
                <sd-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon text-white"
                  library="system"
                  name="status-minus"
                ></sd-icon>
              `
            : ''}
        </span>
        <span
          part="label"
          class=${cx(
            'checkbox__label select-none inline-block ml-2 text-[var(--sd-input-label-color)]',
            (this.disabled && 'text-neutral-500') || (this.invalid && 'text-error') || 'text-neutral-800'
          )}
        >
          <slot></slot>
        </span>
      </label>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: block;
        text-align: left;
      }

      :host(:focus-visible) {
        outline: 0;
      }

      :host([required]) .checkbox__label::after {
        content: ' *';
      }

      .checkbox__control {
        flex: 0 0 auto;
      }

      /* Checked + focus */
      .checkbox__input:focus-visible ~ .checkbox__control {
        outline: 2px solid #00358e;
        outline-offset: 2px;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-checkbox': SdCheckbox;
  }
}
