import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState
} from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SdButtonGroup from '../../_components/button-group/button-group';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';
import type SdRadio from '../../components/radio/radio';
import type SdRadioButton from '../../_components/radio-button/radio-button';

/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://solid.union-investment.com/[storybook-link]/radio-group
 * @status stable
 * @since 1.20.0
 *
 * @dependency sd-button-group
 *
 * @slot - The default slot where `<sd-radio>` or `<sd-radio-button>` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 *
 * @event sd-change - Emitted when the radio group's selected value changes.
 * @event sd-input - Emitted when the radio group receives user input.
 * @event sd-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and error text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 */

// TODO: integrate these parts into the component when radio-button-group is converted to a solid component: https://github.com/solid-design-system/solid/issues/216
// @csspart button-group - The button group that wraps radio buttons.
// @csspart button-group__base - The button group's `base` part.
@customElement('sd-radio-group')
export default class SdRadioGroup extends SolidElement implements SolidFormControl {
  static dependencies = { 'sd-button-group': SdButtonGroup };

  protected readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, 'label', 'error-text');
  private customValidityMessage = '';
  private validationTimeout: number;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.radio-group__validation-input') validationInput: HTMLInputElement;

  @state() private hasButtonGroup = false;
  @state() defaultValue = '';

  /**  A Boolean attribute which, if present, marks the radio valid or invalid. Please note that 'invalid' can only be used in conjunction with 'this.required'.  */
  @state() private invalid = false;

  /** The radio groups's error text. Use to display an error message below the component. Please note that 'error-text' can only be used in conjunction with 'this.required' and 'this.invalid'.  */
  @state() private errorText = '';

  /**
   * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The name of the radio group, submitted as a name/value pair with form data. */
  @property() name = 'option';

  /** The current value of the radio group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) value = '';

  /** The radio group's size. This size will be applied to the label, all child radios and radio buttons. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Ensures a child radio is checked before allowing the containing form to submit. */
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
      console.log('this.customValidityMessage', this.customValidityMessage);
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      console.log('this.validationInput.validationMessage', this.validationInput);
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

  private getAllRadios() {
    return [...this.querySelectorAll<SdRadio | SdRadioButton>('sd-radio, sd-radio-button')];
  }

  private handleRadioClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest<SdRadio | SdRadioButton>('sd-radio, sd-radio-button')!;
    const radios = this.getAllRadios();
    const oldValue = this.value;

    if (target.disabled) {
      return;
    }

    this.value = target.value;
    radios.forEach(radio => (radio.checked = radio === target));

    if (this.value !== oldValue) {
      this.emit('sd-change');
      this.emit('sd-input');
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
      return;
    }

    const radios = this.getAllRadios().filter(radio => !radio.disabled);
    const checkedRadio = radios.find(radio => radio.checked) ?? radios[0];
    const incr = event.key === ' ' ? 0 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;

    if (index < 0) {
      index = radios.length - 1;
    }

    if (index > radios.length - 1) {
      index = 0;
    }

    this.getAllRadios().forEach(radio => {
      radio.checked = false;

      if (!this.hasButtonGroup) {
        radio.tabIndex = -1;
      }
    });

    this.value = radios[index].value;
    radios[index].checked = true;

    if (!this.hasButtonGroup) {
      radios[index].tabIndex = 0;
      radios[index].focus();
    } else {
      radios[index].shadowRoot!.querySelector('button')!.focus();
    }

    if (this.value !== oldValue) {
      this.emit('sd-change');
      this.emit('sd-input');
    }

    event.preventDefault();
  }

  private handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find(radio => radio.checked);
    const radioToFocus = checked || radios[0];

    // Move focus to the checked radio (or the first one if none are checked) when clicking the label
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private async syncRadioElements() {
    const radios = this.getAllRadios();

    await Promise.all(
      // Sync the checked state and size
      radios.map(async radio => {
        await radio.updateComplete;

        radio.checked = radio.value === this.value;
        radio.size = this.size;
        radio.invalid = this.invalid;
      })
    );

    this.hasButtonGroup = radios.some(radio => radio.tagName.toLowerCase() === 'sd-radio-button');

    if (!radios.some(radio => radio.checked)) {
      if (this.hasButtonGroup) {
        const buttonRadio = radios[0].shadowRoot?.querySelector('button');

        if (buttonRadio) {
          buttonRadio.tabIndex = 0;
        }
      } else {
        radios[0].tabIndex = 0;
      }
    }

    if (this.hasButtonGroup) {
      const buttonGroup = this.shadowRoot?.querySelector('sd-button-group');

      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  }

  private syncRadios() {
    if (customElements.get('sd-radio') && customElements.get('sd-radio-button')) {
      this.syncRadioElements();
      return;
    }

    if (customElements.get('sd-radio')) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined('sd-radio').then(() => this.syncRadios());
    }

    if (customElements.get('sd-radio-button')) {
      this.syncRadioElements();
    } else {
      // Rerun this handler when <sd-radio> or <sd-radio-button> is registered
      customElements.whenDefined('sd-radio-button').then(() => this.syncRadios());
    }
  }

  private updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach(radio => (radio.checked = radio.value === this.value));
    this.formControlController.setValidity(this.validity.valid);
  }

  @watch('size', { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncRadios();
  }

  @watch('invalid', { waitUntilFirstUpdate: true })
  handleInvalidChange() {
    this.syncRadios();
  }

  @watch('value')
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
      this.reportValidity();
    }
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

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  // TODO: https://github.com/solid-design-system/solid/issues/501
  reportValidity(): boolean {
    const isValid = this.validity.valid;

    this.errorText = this.customValidityMessage || isValid ? '' : this.validationInput.validationMessage;
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

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = '') {
    this.customValidityMessage = message;
    this.errorText = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasErrorTextSlot = this.hasSlotController.test('error-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasErrorText = this.errorText ? true : !!hasErrorTextSlot;
    const defaultSlot = html`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;

    return html`
      <fieldset
        part="form-control"
        class=${cx(
          'border-0 p-0 m-0',
          hasErrorText && 'text-error',
          {
            /* sizes, fonts */
            sm: 'text-sm',
            lg: 'text-base'
          }[this.size]
        )}
        role="radiogroup"
        aria-labelledby="label"
        aria-errormessage="error-text"
      >
        <label
          part="form-control-label"
          id="label"
          class=${cx('mb-2 p-0 font-bold leading-normal text-black', hasLabel ? 'has-label flex' : 'hidden')}
          aria-hidden=${!hasLabel}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div
          part="form-control-input"
          class=${cx(
            'form-control-input flex',
            this.invalid && 'form-control-input--invalid text-error',
            {
              vertical: 'flex-col',
              horizontal: 'flex-row'
            }[this.orientation]
          )}
        >
          <div class="sr-only">
            <div id="error-message" aria-live="assertive">${this.errorText}</div>
            <label>
              <input type="text" ?required=${this.required} tabindex="-1" hidden @invalid=${this.handleInvalid} />
            </label>
          </div>
          ${defaultSlot}
        </div>
      </fieldset>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        display: block;
      }

      :host([orientation='vertical']) ::slotted(sd-radio) {
        margin-bottom: 8px;
        display: flex;
      }

      :host([orientation='vertical']) ::slotted(sd-radio:last-of-type) {
        margin-bottom: 0;
      }

      :host([orientation='horizontal']) ::slotted(sd-radio) {
        margin-right: 24px;
      }

      :host([size='sm']):host([orientation='horizontal']) ::slotted(sd-radio) {
        margin-right: 16px;
      }

      :host([orientation='horizontal']) ::slotted(sd-radio:last-of-type) {
        margin-right: 0;
      }

      :host([required]) #label.has-label::after {
        content: '*';
        margin-left: 2px;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-radio-group': SdRadioGroup;
  }
}
