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
 * @since 1.22.0
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
  private readonly formControlController: FormControlController = new FormControlController(this, {
    value: (control: SdCheckbox) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: SdCheckbox) => control.defaultChecked,
    setValue: (control: SdCheckbox, checked: boolean) => (control.checked = checked)
  });

  @query('input[type="checkbox"]') input: HTMLInputElement;
  @query('#invalid-message') invalidMessage: HTMLDivElement;

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

  /**
   * Indicates whether or not the user input is valid after the user has interacted with the component. These states are activated when the attribute "data-user-valid" or "data-user-invalid" are set on the component via the form controller. They are different than the native input validity state which is always either `true` or `false`.
   * @internal
   */
  @state() showInvalidStyle = false;

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
    this.formControlController.fakeUserInteraction();
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
    // Hierarchy of checkbox states:
    const checkboxState =
      this.disabled && this.indeterminate
        ? 'disabledIndeterminate'
        : this.disabled && this.checked
          ? 'disabledChecked'
          : this.disabled
            ? 'disabled'
            : this.showInvalidStyle && this.indeterminate
              ? 'invalidIndeterminate'
              : this.showInvalidStyle
                ? 'invalid'
                : this.checked || this.indeterminate
                  ? 'filled'
                  : 'default';

    return html`
      <label
        part="base"
        class=${cx(
          'sd-checkbox group flex items-start text-base leading-normal text-black cursor-pointer',
          this.disabled && 'hover:cursor-not-allowed',
          {
            /* sizes, fonts */
            sm: 'text-sm',
            lg: 'text-base'
          }[this.size]
        )}
      >
        <input
          class="peer absolute opacity-0 p-0 m-0 pointer-events-none"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .indeterminate=${live(this.indeterminate)}
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
          part="control ${this.checked ? ' control--checked' : 'control--unchecked'} ${this.indeterminate
            ? ' control--indeterminate'
            : ''}"
          class=${cx(
            `relative flex flex-shrink-0 items-center justify-center border rounded-sm h-4 w-4
            peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2
            peer-focus-visible:outline-primary`,
            {
              sm: 'mt-[2px]',
              lg: 'mt-[3px]'
            }[this.size],
            {
              disabledIndeterminate: 'border-neutral-500 bg-neutral-500',
              disabledChecked: 'border-neutral-500 bg-neutral-500',
              disabled: 'border-neutral-500',
              invalidIndeterminate: 'border-error bg-error group-hover:bg-error-400',
              invalid: 'border-error group-hover:bg-neutral-200',
              filled:
                'border-accent hover:border-accent-550 group-hover:border-accent-550 bg-accent group-hover:bg-accent-550',
              default: 'border-neutral-800 hover:bg-neutral-200 group-hover:bg-neutral-200 bg-white'
            }[checkboxState]
          )}
        >
          ${this.checked
            ? html`
                <sd-icon part="checked-icon" class="text-white w-3 h-3" library="system" name="status-check"></sd-icon>
              `
            : ''}
          ${!this.checked && this.indeterminate
            ? html`
                <sd-icon
                  part="indeterminate-icon"
                  class="text-white w-3 h-3"
                  library="system"
                  name="status-minus"
                ></sd-icon>
              `
            : ''}
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
        @apply outline-0;
      }

      :host([required]) #label::after {
        content: ' *';
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-checkbox': SdCheckbox;
  }
}
