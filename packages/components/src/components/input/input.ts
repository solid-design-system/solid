import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { LocalizeController } from '../../utilities/localize';
import { longPress } from '../../internal/longpress.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';

//
// It's currently impossible to hide Firefox's built-in clear icon when using <input type="date|time">, so we need this
// check to apply a clip-path to hide it. I know, I know…user agent sniffing is nasty but, if it fails, we only see a
// redundant clear icon so nothing important is breaking. The benefits outweigh the costs for this one. See the
// discussion at: https://github.com/shoelace-style/shoelace/pull/794
//
// Also note that we do the Chromium check first to prevent Chrome from logging a console notice as described here:
// https://github.com/shoelace-style/shoelace/issues/855
//
const isChromium = navigator.userAgentData?.brands.some(b => b.brand.includes('Chromium'));
const isFirefox = isChromium ? false : navigator.userAgent.includes('Firefox');

/**
 * @summary Inputs collect data from the user.
 * @documentation https://solid.union-investment.com/[storybook-link]/input
 * @status stable
 * @since 1.24.0
 *
 * @dependency sd-icon
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot left - Used to prepend a presentational icon or similar element to the input.
 * @slot right - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 * @slot tooltip - An optional tooltip that helps describe the input. Use this slot with the `sd-tooltip` component.
 *
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sd-clear - Emitted when the clear button is activated.
 * @event sd-focus - Emitted when the control gains focus.
 * @event sd-input - Emitted when the control receives input.
 * @event sd-search - Emitted when the search button is activated.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart form-control-floating-label - The floating label text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart border - The base part's absolutely positioned border. Allows for easy adjustment of border thickness without affecting component dimensions.
 * @csspart input - The internal `<input>` control.
 * @csspart left - The container that wraps the left.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart right - The container that wraps the right.
 * @csspart invalid-icon - The invalid icon.
 * @csspart valid-icon - The valid icon.
 * @csspart invalid-message - The invalid message.
 *
 * @cssproperty --sd-form-control--invalid-color-background - The background color for form controls in invalid state.
 * @cssproperty --sd-form-control-color-text - The text color for form controls.
 * @cssproperty --sd-form-control--filled__floating-label-color-text - The floating label text color when active.
 * @cssproperty --sd-form-control-color-border - The color border for form controls.
 * @cssproperty --sd-form-control-color-icon - The icon color for form controls.
 */

@customElement('sd-input')
export default class SdInput extends SolidElement implements SolidFormControl {
  protected readonly formControlController: FormControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(
    this,
    'help-text',
    'label',
    'left',
    'right',
    'message',
    'placeholder'
  );
  public localize = new LocalizeController(this);

  @query('#input') input: HTMLInputElement;
  @query('#invalid-message') invalidMessage: HTMLDivElement;

  /** @internal */
  @state() hasFocus = false;
  /**
   * Indicates whether or not the user input is valid after the user has interacted with the component. These states are activated when the attribute "data-user-valid" or "data-user-invalid" are set on the component via the form controller. They are different than the native input validity state which is always either `true` or `false`.
   * @internal
   */
  @state() showValidStyle = false;

  /** @internal */
  @state() showInvalidStyle = false;

  /** @internal */
  @state() isClickableIconFocused = false;

  /** @internal - Display value for formatted-number type */
  @state() _displayValue = '';

  /** @internal - Flag to prevent re-parsing after step operations */
  private _steppingFormatted = false;

  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  @property({ type: String, reflect: true }) type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'formatted-number'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url' = 'text';

  /** The input's size. */
  @property({ type: String, reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  @property({ type: String, reflect: true }) inputmode:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';

  /** The current value of the input, submitted as a name/value pair with form data. */
  @property() value = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /** Placeholder text to show as a hint when the input is empty. */
  @property({ type: String, reflect: true }) placeholder = '';

  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  @property({ type: String, reflect: true }) label = '';

  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ type: String, attribute: 'help-text', reflect: true }) helpText = '';

  /** Adds a clear button when the input is not empty. */
  @property({ type: Boolean, reflect: true }) clearable = false;

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Styles the input as if it was disabled and enables aria-disabled */
  @property({ type: Boolean, reflect: true, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /** Makes the input readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  @property({ attribute: 'password-toggle', type: Boolean, reflect: true }) passwordToggle = false;

  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  @property({ attribute: 'password-visible', type: Boolean, reflect: true }) passwordVisible = false;

  /** Hides the browser's built-in increment/decrement spin buttons for number inputs and displays custom buttons. */
  @property({ attribute: 'spin-buttons', type: Boolean, reflect: true }) spinButtons = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number, reflect: true }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number, reflect: true }) maxlength: number;

  /** The input's minimum value. Only applies to date and number input types. */
  @property({ reflect: true }) min: number | string;

  /** The input's maximum value. Only applies to date and number input types. */
  @property({ reflect: true }) max: number | string;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ type: String, reflect: true }) form = '';

  /** The name of the input, submitted as a name/value pair with form data. */
  @property({ type: String, reflect: true }) name = '';

  /**
   * The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
   */
  @property({ type: String, reflect: true }) title = ''; // make reactive to pass through

  /** Makes the input a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Enables the floating label behavior for the input. */
  @property({ attribute: 'floating-label', type: Boolean, reflect: true }) floatingLabel = false;

  /** A regular expression pattern to validate input against. */
  @property() pattern: string;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   */
  @property({ reflect: true }) step: number | 'any';

  /**
   * Options for formatting numbers in the `formatted-number` type using Intl.NumberFormatOptions.
   * This can be set as a property or as a JSON attribute (number-format-options).
   * Examples: { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true }
   */
  @property({
    type: Object,
    converter: {
      fromAttribute: (value: string) => {
        try {
          return value ? (JSON.parse(value) as Intl.NumberFormatOptions) : undefined;
        } catch {
          console.error('Invalid number-format-options JSON:', value);
          return undefined;
        }
      },
      toAttribute: (value: Intl.NumberFormatOptions | undefined) => {
        return value ? JSON.stringify(value) : null;
      }
    },
    attribute: 'number-format-options'
  })
  numberFormatOptions: Intl.NumberFormatOptions | undefined;

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  @property({ type: String, reflect: true }) autocapitalize:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';

  @property({ type: String, reflect: true }) autocorrect: 'off' | 'on';

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  @property({ reflect: true }) autocomplete: string;

  /** Indicates that the input should receive focus on page load. */
  @property({ type: Boolean, reflect: true }) autofocus: boolean;

  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  @property({ type: String, reflect: true }) enterkeyhint:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';

  /** Shows success styles if the validity of the input is valid. */
  @property({ type: Boolean, reflect: true, attribute: 'style-on-valid' }) styleOnValid = false;

  /** Enables spell checking on the input. */
  @property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: value => (!value || value === 'false' ? false : true),
      toAttribute: value => (value ? 'true' : 'false')
    }
  })
  spellcheck = true;

  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. */
  get valueAsDate() {
    return this.input?.valueAsDate ?? null;
  }

  set valueAsDate(newValue: Date | null) {
    // We use an in-memory input instead of the one in the template because the property can be set before render
    const input = document.createElement('input');
    input.type = 'date';
    input.valueAsDate = newValue;
    this.value = input.value;
  }

  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    if (this.type === 'formatted-number') {
      return parseFloat(this.value);
    }
    return this.input?.valueAsNumber ?? parseFloat(this.value);
  }

  set valueAsNumber(newValue: number) {
    if (this.type === 'formatted-number') {
      this.value = String(newValue);
      this.updateFormattedNumberDisplay();
    } else {
      // We use an in-memory input instead of the one in the template because the property can be set before render
      const input = document.createElement('input');
      input.type = 'number';
      input.valueAsNumber = newValue;
      this.value = input.value;
    }
  }

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  // ============================================================================
  // Number Formatting Utility Methods (for formatted-number type)
  // ============================================================================

  /** Returns the decimal separator character for the current locale. */
  private getDecimalSeparator(locale: string): string {
    const parts = new Intl.NumberFormat(locale).formatToParts(1.1);
    return parts.find(p => p.type === 'decimal')?.value ?? '.';
  }

  /** Returns the group (thousands) separator character for the current locale. */
  private getGroupSeparator(locale: string): string {
    const parts = new Intl.NumberFormat(locale).formatToParts(11111);
    return parts.find(p => p.type === 'group')?.value ?? ',';
  }

  /**
   * Parses a locale-formatted number string into a numeric value.
   * Strips all non-numeric characters (currency symbols, percent signs, etc.),
   * removes group separators, replaces locale decimal separator with '.', then parseFloat.
   * For percent style: divides by 100 to reverse Intl.NumberFormat's multiplication.
   */
  private parseLocalizedNumber(input: string, locale: string): number {
    if (!input || input.trim() === '') return NaN;
    const decimalSep = this.getDecimalSeparator(locale);
    const groupSep = this.getGroupSeparator(locale);

    // Escape special regex characters in separators
    const escDecimalSep = decimalSep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escGroupSep = groupSep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Strip everything except digits, decimal sep, group sep, minus, and period/comma
    // This removes currency symbols ($, €, £), percent signs (%), currency codes (USD), etc.
    const allowedCharsPattern = new RegExp(`[^0-9${escDecimalSep}${escGroupSep}\\-]`, 'g');
    const stripped = input.replace(allowedCharsPattern, '').trim();

    // Now normalize: remove group separators, replace decimal sep with '.'
    const normalized = stripped.replace(new RegExp(escGroupSep, 'g'), '').replace(decimalSep, '.');
    let result = parseFloat(normalized);

    // For percent style, Intl.NumberFormat multiplies by 100 for display.
    // Reverse that: divide by 100 to get back to the raw fraction.
    if (!isNaN(result) && this.numberFormatOptions?.style === 'percent') {
      result /= 100;
    }

    return result;
  }

  /** Formats a number using Intl.NumberFormat for the given locale and options. */
  private formatNumber(value: number, locale: string, options?: Intl.NumberFormatOptions): string {
    if (isNaN(value)) return '';
    return new Intl.NumberFormat(locale, options).format(value);
  }

  /** Updates the display value for formatted-number type by reformatting the raw value. */
  private updateFormattedNumberDisplay(): void {
    if (this.type !== 'formatted-number') return;
    const numValue = parseFloat(this.value);
    if (this.value === '' || isNaN(numValue)) {
      this._displayValue = this.value;
    } else {
      this._displayValue = this.formatNumber(numValue, this.localize.lang(), this.numberFormatOptions);
    }
  }

  /**
   * Validates the value for formatted-number type against min/max/step constraints.
   * Sets custom validity messages when validation fails.
   */
  private validateFormattedNumber(): void {
    if (this.type !== 'formatted-number' || !this.input) return;

    // Empty value — let required handle it
    if (this.value === '') {
      this.input.setCustomValidity('');
      return;
    }

    const numValue = parseFloat(this.value);

    if (isNaN(numValue)) {
      this.input.setCustomValidity(this.localize.term('invalidNumber'));
      return;
    }

    // Min check
    if (this.min !== undefined && this.min !== null) {
      const min = typeof this.min === 'string' ? parseFloat(this.min) : this.min;
      if (numValue < min) {
        this.input.setCustomValidity(`${this.localize.term('minimum')}: ${min}`);
        return;
      }
    }

    // Max check
    if (this.max !== undefined && this.max !== null) {
      const max = typeof this.max === 'string' ? parseFloat(this.max) : this.max;
      if (numValue > max) {
        this.input.setCustomValidity(`${this.localize.term('maximum')}: ${max}`);
        return;
      }
    }

    // Step check (with floating-point tolerance)
    if (this.step && this.step !== 'any') {
      const step = Number(this.step);
      const min =
        this.min !== undefined && this.min !== null
          ? typeof this.min === 'string'
            ? parseFloat(this.min)
            : this.min
          : 0;
      const remainder = Math.abs((numValue - min) % step);
      if (remainder > 1e-10 && Math.abs(remainder - step) > 1e-10) {
        this.input.setCustomValidity(`Value must be a multiple of ${step}`);
        return;
      }
    }

    this.input.setCustomValidity('');
  }

  /**
   * Commits the formatted-number value: parses the current display input,
   * updates the raw value, reformats the display, and validates.
   * Called on blur and change events.
   */
  private commitFormattedNumberValue(): void {
    if (this.type !== 'formatted-number') return;

    const displayVal = this.input?.value ?? this._displayValue;

    if (displayVal.trim() === '') {
      this.value = '';
      this._displayValue = '';
    } else {
      const parsed = this.parseLocalizedNumber(displayVal, this.localize.lang());
      if (!isNaN(parsed)) {
        this.value = String(parsed);
      }
    }
    this.updateFormattedNumberDisplay();
    this.validateFormattedNumber();
    this.formControlController.updateValidity();
  }

  firstUpdated() {
    if (this.type === 'formatted-number') {
      this.updateFormattedNumberDisplay();
      this.validateFormattedNumber();
    }
    this.formControlController.updateValidity();
  }

  private handleBlur() {
    this.hasFocus = false;
    if (this.type === 'formatted-number') {
      // Commit: parse the user's locale input and update the raw value
      this.commitFormattedNumberValue();
    }
    this.emit('sd-blur');
  }

  private handleChange() {
    if (this.type === 'formatted-number') {
      // After stepping, value is already set — skip re-parsing the stale DOM input
      if (!this._steppingFormatted) {
        this.commitFormattedNumberValue();
      }
      this._steppingFormatted = false;
    } else {
      this.value = this.input.value;
    }
    this.formControlController.updateValidity();
    this.emit('sd-change');
  }

  private handleClearClick(event: MouseEvent) {
    this.value = '';
    if (this.type === 'formatted-number') {
      this._displayValue = '';
    }
    this.emit('sd-clear');
    this.emit('sd-input');
    this.emit('sd-change');
    this.input.focus();

    event.stopPropagation();
  }

  private handleSearchClick(event: MouseEvent) {
    this.emit('sd-search');
    event.stopPropagation();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private handleInput() {
    if (this.visuallyDisabled) {
      this.input.value = this.type === 'formatted-number' ? this._displayValue : this.value;
      return;
    }

    if (this.type === 'formatted-number') {
      // Only track the display value while the user is typing.
      // Do NOT update this.value — that happens on blur/change/enter.
      this._displayValue = this.input.value;
    } else {
      this.value = this.input.value;
    }

    this.formControlController.updateValidity();
    this.emit('sd-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
    this.invalidMessage.textContent = (event.target as HTMLInputElement).validationMessage;
  }

  private handleKeyDown(event: KeyboardEvent) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    // Arrow Up/Down stepping for formatted-number type
    if (this.type === 'formatted-number' && !hasModifier && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
      event.preventDefault();
      if (event.key === 'ArrowUp' && !this.isIncrementDisabled()) {
        this.stepUp();
      } else if (event.key === 'ArrowDown' && !this.isDecrementDisabled()) {
        this.stepDown();
      }
      this.validateFormattedNumber();
      this.formControlController.updateValidity();
      this.emit('sd-input');
      this.emit('sd-change');
      return;
    }

    // Pressing enter when focused on an input should submit the form like a native input, but we wait a tick before
    // submitting to allow users to cancel the keydown event if they need to
    if (event.key === 'Enter' && !hasModifier) {
      setTimeout(() => {
        //
        // When using an Input Method Editor (IME), pressing enter will cause the form to submit unexpectedly. One way
        // to check for this is to look at event.isComposing, which will be true when the IME is open.
        //
        // See https://github.com/shoelace-style/shoelace/pull/988
        //
        if (!event.defaultPrevented && !event.isComposing) {
          this.formControlController.submit();
        }
      });
    }
  }

  private handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }

  private handleClickableIconFocusIn() {
    this.isClickableIconFocused = true;
  }

  private handleClickableIconFocusOut() {
    this.isClickableIconFocused = false;
  }

  private isDecrementDisabled() {
    if (this.disabled || this.readonly) {
      return true;
    }

    if (this.min === undefined || this.min === null) {
      return false;
    }

    const min = typeof this.min === 'string' ? parseFloat(this.min) : this.min;
    return this.valueAsNumber <= min;
  }

  private isIncrementDisabled() {
    if (this.disabled || this.readonly) {
      return true;
    }

    if (this.max === undefined || this.max === null) {
      return false;
    }

    const max = typeof this.max === 'string' ? parseFloat(this.max) : this.max;
    return this.valueAsNumber >= max;
  }

  private handleStep() {
    if (this.type === 'formatted-number') {
      // For formatted-number, value is already set by stepUp/stepDown.
      // Set flag so handleChange (called by longPress end) won't re-parse stale DOM.
      this._steppingFormatted = true;
      this.validateFormattedNumber();
      this.formControlController.updateValidity();
      this.emit('sd-input');
    } else {
      this.handleInput();
    }
    this.input.focus();
  }

  private handleStepUp() {
    this.stepUp();
    this.handleStep();
  }

  private handleStepDown() {
    this.stepDown();
    this.handleStep();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch('step', { waitUntilFirstUpdate: true })
  handleStepChange() {
    if (this.type === 'formatted-number') {
      this.validateFormattedNumber();
      this.formControlController.updateValidity();
      return;
    }
    // If step changes, the value may become invalid so we need to recheck after the update. We set the new step
    // imperatively so we don't have to wait for the next render to report the updated validity.
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    if (this.type === 'formatted-number') {
      this.validateFormattedNumber();
      this.updateFormattedNumberDisplay();
    }
    this.formControlController.updateValidity();
  }

  @watch(['size', 'floatingLabel'])
  handleSizeChange() {
    this.size = this.floatingLabel && this.size === 'sm' ? 'md' : this.size;
  }

  @watch('lang')
  handleLangChange() {
    if (this.type === 'formatted-number') {
      this.updateFormattedNumberDisplay();
    }
  }

  @watch('numberFormatOptions')
  handleNumberFormatOptionsChange() {
    if (this.type === 'formatted-number') {
      this.updateFormattedNumberDisplay();
    }
  }

  /** Sets focus on the input. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }

  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }

  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Replaces a range of text with a new string. */
  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: 'select' | 'start' | 'end' | 'preserve'
  ) {
    // @ts-expect-error - start, end, and selectMode are optional
    this.input.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }

  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ('showPicker' in HTMLInputElement.prototype) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      (this.input as any).showPicker();
    }
  }

  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    if (this.type === 'formatted-number') {
      const step = this.step && this.step !== 'any' ? Number(this.step) : 1;
      let newValue = (isNaN(this.valueAsNumber) ? 0 : this.valueAsNumber) + step;
      if (this.max !== undefined && this.max !== null) {
        const max = typeof this.max === 'string' ? parseFloat(this.max) : this.max;
        newValue = Math.min(newValue, max);
      }
      this.value = String(newValue);
      this.updateFormattedNumberDisplay();
    } else {
      this.input.stepUp();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
  }

  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    if (this.type === 'formatted-number') {
      const step = this.step && this.step !== 'any' ? Number(this.step) : 1;
      let newValue = (isNaN(this.valueAsNumber) ? 0 : this.valueAsNumber) - step;
      if (this.min !== undefined && this.min !== null) {
        const min = typeof this.min === 'string' ? parseFloat(this.min) : this.min;
        newValue = Math.max(newValue, min);
      }
      this.value = String(newValue);
      this.updateFormattedNumberDisplay();
    } else {
      this.input.stepDown();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input?.checkValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    this.formControlController.fakeUserInteraction();
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    // Slots
    const slots = {
      label: this.hasSlotController.test('label'),
      helpText: this.hasSlotController.test('help-text'),
      description: this.hasSlotController.test('description'),
      left: this.hasSlotController.test('left'),
      right: this.hasSlotController.test('right'),
      tooltip: this.hasSlotController.test('tooltip')
    };

    // States
    const hasLabel = this.label ? true : !!slots['label'];
    const hasHelpText = this.helpText ? true : !!slots['helpText'];
    const hasClearIcon = this.clearable && !this.readonly && (typeof this.value === 'number' || this.value.length > 0);
    const hasTooltip = !!slots['tooltip'];
    const hasIconLeft = slots['left'];
    const hasValue = this.value !== null && String(this.value).length > 0;
    const isFloatingLabelActive =
      this.floatingLabel && hasLabel && (this.hasFocus || hasValue || this.isClickableIconFocused);

    // Hierarchy of input states:
    const inputState = this.disabled
      ? 'disabled'
      : this.visuallyDisabled && !this.hasFocus
        ? 'visuallyDisabled'
        : this.readonly
          ? 'readonly'
          : this.hasFocus && this.showInvalidStyle
            ? 'activeInvalid'
            : this.hasFocus && this.styleOnValid && this.showValidStyle
              ? 'activeValid'
              : this.hasFocus
                ? 'active'
                : this.showInvalidStyle
                  ? 'invalid'
                  : this.styleOnValid && this.showValidStyle
                    ? 'valid'
                    : 'default';

    // Conditional Styles
    const textSize = this.size === 'sm' ? 'text-sm' : 'text-base';

    const borderColor = {
      disabled: 'border-neutral-500',
      visuallyDisabled: 'border-neutral-500',
      readonly: 'form-control-color-border',
      activeInvalid: 'border-error border-2',
      activeValid: 'border-success border-2',
      active: 'border-primary border-2',
      invalid: 'border-error',
      valid: 'border-success',
      default: 'form-control-color-border'
    }[inputState];

    const iconColor = this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'form-control-color-icon';
    const iconMarginLeft = { sm: 'ml-1', md: 'ml-2', lg: 'ml-2' }[this.size];
    const iconSize = {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl'
    }[this.size];
    const verticalPadding =
      this.size === 'lg'
        ? !this.floatingLabel
          ? 'py-2'
          : isFloatingLabelActive
            ? 'py-3'
            : 'py-4'
        : !this.floatingLabel
          ? 'py-1'
          : isFloatingLabelActive
            ? 'py-2'
            : 'py-3';
    const floatingLabelHorizontalAlignmentWithIconLeft = { sm: 'left-[36px]', md: 'left-[44px]', lg: 'left-12' }[
      this.size
    ];
    // Render
    return html`
      <div part="form-control" class=${cx((this.disabled || this.visuallyDisabled) && 'cursor-not-allowed')}>
        ${(hasLabel || hasTooltip) && !this.floatingLabel
          ? html`<div class="flex items-center gap-1 mb-2">
              <label
                part="form-control-label"
                id="label"
                class=${cx(hasLabel ? 'inline-block form-control-color-text' : 'hidden', textSize)}
                for="input"
                aria-hidden=${hasLabel ? 'false' : 'true'}
              >
                <slot name="label">${this.label}</slot>
              </label>

              ${slots['tooltip'] ? html`<slot name="tooltip"></slot>` : ''}
            </div>`
          : null}
        <div
          part="form-control-input"
          class=${cx(
            'relative w-full',
            this.disabled && 'pointer-events-none',
            this.visuallyDisabled && 'cursor-not-allowed'
          )}
        >
          <div
            part="border"
            class=${cx(
              'absolute w-full h-full pointer-events-none border rounded-default transition-[border] ease-in-out duration-medium hover:duration-fast',
              borderColor
            )}
          ></div>
          <div
            part="base"
            class=${cx(
              'px-4 flex flex-row items-center rounded-default transition-colors ease-in-out duration-medium hover:duration-fast',
              this.floatingLabel && 'has-floating-label',
              // States
              !this.disabled && !this.readonly && !this.visuallyDisabled ? 'hover:bg-neutral-200' : '',
              this.readonly ? 'bg-neutral-100' : 'bg-white',
              ['disabled', 'visuallyDisabled'].includes(inputState) ? 'text-neutral-500' : 'form-control-color-text',
              ['invalid', 'activeInvalid'].includes(inputState) && 'form-control--invalid-color-background',
              verticalPadding
            )}
          >
            ${slots['left']
              ? html`<slot
                  name="left"
                  part="left"
                  class=${cx('inline-flex', this.size === 'sm' ? 'mr-1' : 'mr-2', iconColor, iconSize)}
                ></slot>`
              : ''}
            <input
              part="input"
              id="input"
              class=${cx(
                'min-w-0 flex-grow focus:outline-none bg-transparent',
                this.visuallyDisabled || this.disabled
                  ? 'placeholder:text-neutral-500 cursor-not-allowed'
                  : 'placeholder:text-neutral-700',
                this.size === 'sm' ? (isFloatingLabelActive ? 'h-4' : 'h-6') : isFloatingLabelActive ? 'h-6' : 'h-8',
                textSize,
                isFloatingLabelActive && 'leading-none mt-4'
              )}
              type=${this.type === 'password' && this.passwordVisible
                ? 'text'
                : this.type === 'formatted-number'
                  ? 'text'
                  : this.type}
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              name=${ifDefined(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${!this.floatingLabel || isFloatingLabelActive ? ifDefined(this.placeholder) : ''}
              minlength=${ifDefined(this.minlength)}
              maxlength=${ifDefined(this.maxlength)}
              min=${ifDefined(this.type === 'formatted-number' ? undefined : this.min)}
              max=${ifDefined(this.type === 'formatted-number' ? undefined : this.max)}
              step=${ifDefined(this.type === 'formatted-number' ? undefined : (this.step as number))}
              .value=${live(this.type === 'formatted-number' ? this._displayValue : this.value)}
              autocapitalize=${ifDefined(this.type === 'password' ? 'off' : this.autocapitalize)}
              autocomplete=${
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ifDefined(this.autocomplete as any)
              }
              autocorrect=${ifDefined(this.type === 'password' ? 'off' : this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ifDefined(this.pattern)}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.type === 'formatted-number' ? this.inputmode || 'decimal' : this.inputmode)}
              aria-describedby="help-text invalid-message"
              aria-disabled=${this.visuallyDisabled || this.disabled ? 'true' : 'false'}
              aria-invalid=${this.showInvalidStyle}
              aria-valuenow=${ifDefined(
                this.type === 'formatted-number' && this.spinButtons && this.value ? this.value : undefined
              )}
              aria-valuemin=${ifDefined(
                this.type === 'formatted-number' && this.spinButtons && this.min !== null ? String(this.min) : undefined
              )}
              aria-valuemax=${ifDefined(
                this.type === 'formatted-number' && this.spinButtons && this.max !== null ? String(this.max) : undefined
              )}
              role=${ifDefined(this.type === 'formatted-number' && this.spinButtons ? 'spinbutton' : undefined)}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${hasLabel && this.floatingLabel
              ? html`
                  <label
                    part="form-control-floating-label"
                    class=${cx(
                      'pointer-events-none absolute',
                      hasIconLeft ? floatingLabelHorizontalAlignmentWithIconLeft : 'left-4',
                      !this.readonly && 'transition-all duration-medium ease-out',
                      !isFloatingLabelActive || (!hasValue && (this.readonly || this.visuallyDisabled))
                        ? 'top-1/2 -translate-y-1/2'
                        : this.size === 'lg'
                          ? 'top-2'
                          : 'top-1'
                    )}
                    for="input"
                    aria-hidden=${hasLabel ? 'false' : 'true'}
                  >
                    <span
                      id="floating-label"
                      class=${cx(
                        'pointer-events-none leading-none',
                        !this.readonly && 'transition-all duration-medium ease-out',
                        !isFloatingLabelActive || (!hasValue && (this.readonly || this.visuallyDisabled))
                          ? textSize
                          : 'text-xs',
                        (this.visuallyDisabled || this.disabled) && 'text-neutral-500',
                        isFloatingLabelActive &&
                          !this.visuallyDisabled &&
                          !this.disabled &&
                          'form-control--filled__floating-label-color-text'
                      )}
                    >
                      ${this.label}
                    </span>
                  </label>
                `
              : null}
            ${hasClearIcon
              ? html`
                  <button
                    part="clear-button"
                    class=${cx('flex justify-center', iconMarginLeft)}
                    type="button"
                    aria-label=${this.localize.term('clearEntry')}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sd-icon
                        class=${cx(
                          this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'text-neutral-700',
                          iconSize
                        )}
                        library="_internal"
                        name="closing-round"
                      ></sd-icon>
                    </slot>
                  </button>
                `
              : ''}
            ${this.passwordToggle && this.type === 'password'
              ? html`
                  <button
                    aria-label=${this.localize.term(this.passwordVisible ? 'hidePassword' : 'showPassword')}
                    part="password-toggle-button"
                    class=${cx(
                      'flex items-center sd-interactive',
                      iconMarginLeft,
                      this.floatingLabel && !isFloatingLabelActive && 'hide-password-toggle'
                    )}
                    type="button"
                    @click=${this.handlePasswordToggle}
                    @mousedown=${this.handleClickableIconFocusIn}
                    @focus=${() => this.handleClickableIconFocusIn()}
                    @blur=${this.handleClickableIconFocusOut}
                  >
                    ${this.passwordVisible
                      ? html`
                          <slot name="show-password-icon"
                            ><sd-icon class=${cx(iconColor, iconSize)} library="_internal" name="eye"></sd-icon
                          ></slot>
                        `
                      : html`
                          <slot name="hide-password-icon"
                            ><sd-icon
                              class=${cx(iconColor, iconSize)}
                              library="_internal"
                              name="eye-crossed-out"
                            ></sd-icon
                          ></slot>
                        `}
                  </button>
                `
              : ''}
            ${(this.type === 'date' || this.type === 'datetime-local') && !isFirefox
              ? html`
                  <sd-icon
                    class=${cx(iconColor, iconMarginLeft, iconSize)}
                    library="_internal"
                    name="calendar"
                  ></sd-icon>
                `
              : ''}
            ${this.type === 'time'
              ? html`
                  <sd-icon class=${cx(iconColor, iconMarginLeft, iconSize)} library="_internal" name="clock"></sd-icon>
                `
              : ''}
            ${this.type === 'search'
              ? html`
                  <button
                    class=${cx('flex items-center sd-interactive', iconMarginLeft)}
                    type="button"
                    @click=${this.handleSearchClick}
                  >
                    <sd-icon
                      class=${cx(iconColor, iconSize)}
                      library="_internal"
                      name="magnifying-glass"
                      label=${this.localize.term('search')}
                    ></sd-icon>
                  </button>
                `
              : ''}
            ${this.showInvalidStyle
              ? html`
                  <sd-icon
                    part="invalid-icon"
                    class=${cx('text-error', iconMarginLeft, iconSize)}
                    library="_internal"
                    name="risk"
                  ></sd-icon>
                `
              : ''}
            ${this.showValidStyle && this.styleOnValid
              ? html`
                  <sd-icon
                    class=${cx('text-success flex-shrink-0', iconMarginLeft, iconSize)}
                    library="_internal"
                    name="confirm-circle"
                    part="valid-icon"
                  ></sd-icon>
                `
              : ''}
            ${slots['right']
              ? html`<slot
                  name="right"
                  part="right"
                  class=${cx('inline-flex', iconColor, iconMarginLeft, iconSize)}
                ></slot>`
              : ''}
            ${(this.type === 'number' || this.type === 'formatted-number') && this.spinButtons
              ? html`
                  <div part="stepper" class="flex items-center">
                    <button
                      part="decrement-number-stepper"
                      class="stepper-button flex"
                      type="button"
                      ?disabled=${this.isDecrementDisabled()}
                      aria-hidden="true"
                      ${longPress({ start: () => this.handleStepDown(), end: () => this.handleChange() })}
                      tabindex="-1"
                      @mousedown=${this.handleClickableIconFocusIn}
                      @focus=${() => this.handleClickableIconFocusIn()}
                      @blur=${this.handleClickableIconFocusOut}
                    >
                      <slot name="decrement-number-stepper">
                        <sd-icon
                          library="_internal"
                          name="minus-circle"
                          label="Decrease value"
                          class=${cx(iconColor, iconMarginLeft, iconSize)}
                        ></sd-icon>
                      </slot>
                    </button>

                    <button
                      part="increment-number-stepper"
                      class="stepper-button flex"
                      type="button"
                      ?disabled=${this.isIncrementDisabled()}
                      aria-hidden="true"
                      ${longPress({ start: () => this.handleStepUp(), end: () => this.handleChange() })}
                      tabindex="-1"
                    >
                      <slot name="increment-number-stepper">
                        <sd-icon
                          library="_internal"
                          name="plus-circle"
                          label="Decrease value"
                          class=${cx(iconColor, iconMarginLeft, iconSize)}
                        ></sd-icon>
                      </slot>
                    </button>
                  </div>
                `
              : ''}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class=${cx('text-sm text-neutral-700 mt-1', hasHelpText && !this.showInvalidStyle ? 'block' : 'hidden')}
          aria-hidden=${!hasHelpText || this.showInvalidStyle}
        >
          ${this.helpText}
        </slot>
      </div>
      ${this.formControlController.renderInvalidMessage(this.size)}
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply box-border relative inline-block text-left w-full;
      }

      :host([vertical]) {
        @apply block;
      }

      :host([required]) :is(#label, #floating-label)::after {
        content: ' *';
      }

      :host([visually-disabled]) input {
        caret-color: transparent;
      }

      details summary::-webkit-details-marker {
        display: none;
      }

      /* Hides browser stepper for number type. Necessary for "Stepper Sample". */
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }

      /* Hides clock icon for time type. */
      input[type='time']::-webkit-calendar-picker-indicator {
        background: none;
        display: none;
        -webkit-appearance: none;
      }

      details summary::-webkit-details-marker,
      /* Hides cross icon for search type. */
      input[type='search']::-webkit-search-decoration,
      input[type='search']::-webkit-search-cancel-button,
      input[type='search']::-webkit-search-results-button,
      input[type='search']::-webkit-search-results-decoration,
      /* Hides calendar picker for date type. Does not work in Firefox! */
      input[type='date']::-webkit-calendar-picker-indicator,
      /* Hides calendar picker for datetime-local type. Does not work in Firefox! */
      input[type='datetime-local']::-webkit-calendar-picker-indicator {
        @apply hidden;
      }

      .stepper-button[disabled] sd-icon {
        @apply text-neutral-500;
      }

      .hide-password-toggle {
        display: none;
      }

      .has-floating-label input[type='date']:not(.has-value),
      .has-floating-label input[type='time']:not(.has-value),
      .has-floating-label input[type='datetime-local']:not(.has-value) {
        color: transparent;
      }
      .has-floating-label input[type='date']:focus,
      .has-floating-label input[type='time']:focus,
      .has-floating-label input[type='datetime-local']:focus {
        color: inherit;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-input': SdInput;
  }
}
