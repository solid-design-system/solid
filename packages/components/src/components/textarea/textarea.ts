import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import cx from 'classix';
import formControlStyles from '../../styles/form-control.styles';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';

/**
 * @summary Textareas collect data from the user and allow multiple lines of text.
 * @documentation https://shoelace.style/components/textarea
 * @status stable
 * @since 1.30.0
 *
 * @slot label - The textarea's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sd-focus - Emitted when the control gains focus.
 * @event sd-input - Emitted when the control receives input.
 * @event sd-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart border - The base part's absolutely positioned border. Allows for easy adjustment of border thickness without affecting component dimensions.
 * @csspart textarea - The internal `<textarea>` control.
 */
@customElement('sd-textarea')
export default class SdTextarea extends SolidElement implements SolidFormControl {
  private readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');

  @query('.textarea__control') textarea: HTMLTextAreaElement;

  @state() private hasFocus = false;

  /** An empty title prevents browser validation tooltips from appearing on hover */
  @property() title = ''; // make reactive to pass through

  /** The name of the textarea, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The current value of the textarea, submitted as a name/value pair with form data. */
  @property() value = '';

  /** The textarea's size. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** The textarea's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Placeholder text to show as a hint when the input is empty. */
  @property() placeholder = '';

  /** The number of rows to display by default. */
  @property({ type: Number }) rows = 4;

  /** Disables the textarea. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the textarea readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Makes the textarea a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number }) maxlength: number;

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  @property() autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /** Indicates whether the browser's autocorrect feature is on or off. */
  @property() autocorrect: 'off' | 'on';

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  @property() autocomplete: string;

  /** Indicates that the input should receive focus on page load. */
  @property({ type: Boolean }) autofocus: boolean;

  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  @property() enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /** Enables spell checking on the textarea. */
  @property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: value => (!value || value === 'false' ? false : true),
      toAttribute: value => (value ? 'true' : 'false')
    }
  })
  spellcheck = true;

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  @property() inputmode: 'none' | 'text';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /** Gets the validity state object */
  get validity() {
    return this.textarea.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.textarea.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();

    this.updateComplete.then(() => {
      this.setTextareaHeight();
    });
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleChange() {
    this.value = this.textarea.value;
    this.setTextareaHeight();
    this.emit('sd-change');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private handleInput() {
    this.value = this.textarea.value;
    this.formControlController.updateValidity();
    this.emit('sd-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private setTextareaHeight() {
    (this.textarea.style.height as string | undefined) = undefined;
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch('rows', { waitUntilFirstUpdate: true })
  handleRowsChange() {
    this.setTextareaHeight();
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.setTextareaHeight();
  }

  /** Sets focus on the textarea. */
  focus(options?: FocusOptions) {
    this.textarea.focus(options);
  }

  /** Removes focus from the textarea. */
  blur() {
    this.textarea.blur();
  }

  /** Selects all the text in the textarea. */
  select() {
    this.textarea.select();
  }

  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position?: { top?: number; left?: number }): { top: number; left: number } | undefined {
    if (position) {
      if (typeof position.top === 'number') this.textarea.scrollTop = position.top;
      if (typeof position.left === 'number') this.textarea.scrollLeft = position.left;
      return undefined;
    }

    return {
      top: this.textarea.scrollTop,
      left: this.textarea.scrollTop
    };
  }

  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    this.textarea.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Replaces a range of text with a new string. */
  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: 'select' | 'start' | 'end' | 'preserve'
  ) {
    // @ts-expect-error - start, end, and selectMode are optional
    this.textarea.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.textarea.value) {
      this.value = this.textarea.value;
    }

    if (this.value !== this.textarea.value) {
      this.value = this.textarea.value;
      this.setTextareaHeight();
    }
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.textarea?.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.textarea.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.textarea.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    // Slots
    const slots = {
      label: this.hasSlotController.test('label'),
      helpText: this.hasSlotController.test('help-text')
    };

    // States
    const hasLabel = this.label ? true : !!slots['label'];
    const hasHelpText = this.helpText ? true : !!slots['helpText'];
    const hasValidationAttr = this.required || !!this.minlength || !!this.maxlength;
    const isInvalid = hasValidationAttr && !this.checkValidity();
    const isValid = hasValidationAttr && this.checkValidity();
    // Hierarchy of input states:
    const inputState = this.disabled
      ? 'disabled'
      : this.readonly
        ? 'readonly'
        : this.hasFocus && isInvalid
          ? 'activeInvalid'
          : this.hasFocus && isValid
            ? 'activeValid'
            : this.hasFocus
              ? 'active'
              : isInvalid
                ? 'invalid'
                : isValid
                  ? 'valid'
                  : 'default';

    // Conditional Styles
    const textSize = this.size === 'sm' ? 'text-sm' : 'text-base';

    return html`
      <div
        part="form-control"
        class=${cx(
          'form-control text-left',
          hasLabel && 'form-control--has-label',
          hasHelpText && 'form-control--has-help-text',
          this.disabled && 'cursor-not-allowed'
        )}
      >
        <label
          part="form-control-label"
          id="label"
          class=${cx('form-control-label mb-2', hasLabel ? 'has-label inline-block' : 'hidden', textSize)}
          for="input"
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input relative w-full">
          <div
            part="border"
            class=${cx(
              'absolute w-full h-full pointer-events-none border rounded-default',
              {
                disabled: 'border-neutral-500',
                readonly: 'border-neutral-800',
                activeInvalid: 'border-error border-2',
                activeValid: 'border-success border-2',
                active: 'border-primary border-2',
                invalid: 'border-error',
                valid: 'border-success',
                default: 'border-neutral-800'
              }[inputState]
            )}
          ></div>
          <div
            part="base"
            class=${cx(
              'textarea px-4 flex flex-row items-center rounded-default textarea--resize-none',
              {
                sm: 'textarea-sm py-1',
                md: 'textarea-md py-1',
                lg: 'textarea-lg py-2'
              }[this.size],
              {
                disabled: 'text-neutral-500',
                readonly: 'text-black',
                activeInvalid: 'text-error',
                activeValid: 'text-success',
                active: 'text-black',
                invalid: 'text-error',
                valid: 'text-success',
                default: 'text-black'
              }[inputState],
              !this.disabled && !this.readonly ? 'hover:bg-neutral-200' : '',
              this.readonly && 'bg-neutral-100',
              isInvalid && 'form-control-input--invalid',
              !this.value && 'textarea--empty'
            )}
          >
            <textarea
              part="textarea"
              id="input"
              class=${cx(
                'textarea__control no-scrollbar flex-grow focus:outline-none bg-transparent placeholder-neutral-700"',
                textSize
              )}
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              name=${ifDefined(this.name)}
              .value=${live(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ifDefined(this.placeholder)}
              minlength=${ifDefined(this.minlength)}
              maxlength=${ifDefined(this.maxlength)}
              rows=${ifDefined(this.rows)}
              autocapitalize=${ifDefined(this.autocapitalize)}
              autocorrect=${ifDefined(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${ifDefined(this.spellcheck)}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class=${cx('text-sm text-neutral-700', hasHelpText ? 'block' : 'hidden')}
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    // componentStyles,
    formControlStyles,
    SolidElement.styles,

    css`
      :host {
        display: block;
      }

      :host([required]) #label.has-label::after {
        content: '*';
        margin-left: 2px;
      }

      :host([disabled]) .textarea__control {
        cursor: not-allowed;
      }

      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }

      .textarea--resize-none .textarea__control {
        resize: none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-textarea': SdTextarea;
  }
}
