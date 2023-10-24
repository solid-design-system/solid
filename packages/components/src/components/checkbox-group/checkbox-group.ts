import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import SolidElement, { SolidFormControl } from '../../internal/solid-element';
import { property, query, state } from 'lit/decorators.js';
import cx from 'classix';
import SdCheckbox from '../checkbox/checkbox';
import { watch } from '../../internal/watch';
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState
} from '../../internal/form';

/**
 * @summary Checkbox groups are used to group multiple [checkbox](/components/checkbox) so they function as a single form control.
 * @documentation https://solid.union-investment.com/[storybook-link]/checkbox-group
 * @status stable
 * @since 1.18.0
 *
 * @slot - The default slot where `<sd-checkbox>` elements are placed.
 * @slot label - The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label`
 * attribute.
 **/

@customElement('sd-checkbox-group')
export default class SdCheckboxGroup extends SolidElement implements SolidFormControl {
  protected readonly formControlController = new FormControlController(this);

  private customValidityMessage = '';
  private validationTimeout: number;

  @query('.checkbox-group__validation-input') validationInput: HTMLInputElement;

  @state() private errorMessage = '';
  @state() defaultValue = '';

  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The checkbox group's error text. Use to display an error message below the component. */
  @property({ attribute: 'error-text' }) errorText = '';

  /** The name of the checkbox group, submitted as a name/value pair with form data. */
  @property() name = 'option';

  /** The current value of the checkbox group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) value = '';

  /** The checkbox group's size. This size will be applied to the label, all child checkboxes. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /**  A Boolean attribute which, if present, marks the checkbox-group valid or invalid  */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Ensures a child checkbox is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * The orientation property determines the alignment of the component's content or elements. It accepts two possible
   * values: 'horizontal' and 'vertical'. The default value is 'vertical'.
   * This property allows you to control the visual layout and arrangement of elements within the component, providing
   * flexibility in how the component is displayed based on your specific design needs.
   */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      this.invalid = true;
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      this.invalid = true;
      return valueMissingValidityState;
    }

    this.invalid = false;
    return validValidityState;
  }

  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }

    return '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private getAllCheckboxes() {
    return [...this.querySelectorAll<SdCheckbox>('sd-checkbox')];
  }

  private handleCheckboxClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest<SdCheckbox>('sd-checkbox')!;
    const checkboxes = this.getAllCheckboxes();
    const oldValue = this.value;

    if (target.disabled) {
      return;
    }

    this.value = [...this.value, ...target.value];
    checkboxes.forEach(checkbox => (checkbox.checked = checkbox === target));

    if (this.value !== oldValue) {
      this.emit('sd-change');
      this.emit('sd-input');
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private async syncCheckboxElements() {
    const checkboxes = this.getAllCheckboxes();

    await Promise.all(
      // Sync the checked state and size
      checkboxes.map(async checkbox => {
        await checkbox.updateComplete;

        checkbox.checked = checkbox.value == this.value;
        checkbox.size = this.size;
        checkbox.invalid = this.invalid;
      })
    );

    if (!checkboxes.some(checkbox => checkbox.checked)) {
      checkboxes[0].tabIndex = 0;
    }
  }

  private syncCheckboxes() {
    if (customElements.get('sd-checkbox')) {
      this.syncCheckboxElements();
      return;
    }

    if (customElements.get('sd-checkbox')) {
      this.syncCheckboxElements();
    } else {
      customElements.whenDefined('sd-checkbox').then(() => this.syncCheckboxes());
    }
  }

  private updateCheckedCheckboxes() {
    const checkboxes = this.getAllCheckboxes();
    checkboxes.forEach(checkbox => (checkbox.checked = checkbox.value === this.value));
    this.formControlController.setValidity(this.validity.valid);
  }

  @watch('size', { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncCheckboxes();
  }

  @watch('value')
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedCheckboxes();
      this.reportValidity();
    }
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  reportValidity(): boolean {
    const isValid = this.validity.valid;

    this.errorMessage = this.customValidityMessage || isValid ? '' : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;

    clearTimeout(this.validationTimeout);

    if (!isValid) {
      // Show the browser's constraint validation message
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => (this.validationInput.hidden = true), 10000) as unknown as number;
    }

    return isValid;
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }

    return true;
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = '') {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    const defaultSlot = html`
      <slot @slotchange=${this.syncCheckboxes} @click=${this.handleCheckboxClick} @keydown=${this.handleKeyDown}></slot>
    `;

    return html`
      <fieldset
        class=${cx(
          {
            /* sizes, fonts */
            sm: 'text-sm',
            lg: 'text-base'
          }[this.size]
        )}
        role="group"
        aria-labelledby="label"
        aria-describedby="error-text"
        aria-errormessage="error-message"
      >
        <legend
          part="form-control-label"
          id="label"
          class="form-control__label mb-2 p-0 font-bold leading-normal text-black"
        >
          <slot name="label">${this.label}</slot>
        </legend>

        <div
          part="form-control-input"
          class=${cx(
            'form-control-input',
            this.invalid && 'form-control-input--invalid text-error',
            {
              vertical: 'form-control-input--vertical flex flex-col',
              horizontal: 'form-control-input--horizontal flex flex-row'
            }[this.orientation]
          )}
        >
          <div class="visually-hidden absolute p-0 overflow-hidden whitespace-nowrap border-0">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="checkbox-group__validation">
              <input
                type="text"
                class="checkbox-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>
          ${defaultSlot}
        </div>

        <div
          part="form-control-error-text"
          id="error-text"
          class=${cx(
            'form-control__error-text mt-2 hidden text-error leading-normal',
            {
              /* sizes, fonts */
              sm: 'text-sm',
              lg: 'text-base'
            }[this.size]
          )}
        >
          <slot name="error-text">${this.errorText}</slot>
        </div>
      </fieldset>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-checkbox-group': SdCheckboxGroup;
  }
}
