import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
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
 *
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sd-clear - Emitted when the clear button is activated.
 * @event sd-focus - Emitted when the control gains focus.
 * @event sd-input - Emitted when the control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
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

  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  @property({ reflect: true }) type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url' = 'text';

  /** The input's size. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  @property() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** The current value of the input, submitted as a name/value pair with form data. */
  @property() value = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /** Placeholder text to show as a hint when the input is empty. */
  @property() placeholder = '';

  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Adds a clear button when the input is not empty. */
  @property({ type: Boolean }) clearable = false;

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the input readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  @property({ attribute: 'password-toggle', type: Boolean }) passwordToggle = false;

  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  @property({ attribute: 'password-visible', type: Boolean }) passwordVisible = false;

  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  @property({ attribute: 'no-spin-buttons', type: Boolean }) noSpinButtons = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number }) maxlength: number;

  /** The input's minimum value. Only applies to date and number input types. */
  @property() min: number | string;

  /** The input's maximum value. Only applies to date and number input types. */
  @property() max: number | string;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The name of the input, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The `title` attribute specifies extra information about an element most often as tooltip text when the mouse moves over the element.
   */
  @property() title = ''; // make reactive to pass through

  /** Makes the input a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** A regular expression pattern to validate input against. */
  @property() pattern: string;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   */
  @property() step: number | 'any';

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
    return this.input?.valueAsNumber ?? parseFloat(this.value);
  }

  set valueAsNumber(newValue: number) {
    // We use an in-memory input instead of the one in the template because the property can be set before render
    const input = document.createElement('input');
    input.type = 'number';
    input.valueAsNumber = newValue;
    this.value = input.value;
  }

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleChange() {
    this.value = this.input.value;
    this.emit('sd-change');
  }

  private handleClearClick(event: MouseEvent) {
    this.value = '';
    this.emit('sd-clear');
    this.emit('sd-input');
    this.emit('sd-change');
    this.input.focus();

    event.stopPropagation();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private handleInput() {
    this.value = this.input.value;
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

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch('step', { waitUntilFirstUpdate: true })
  handleStepChange() {
    // If step changes, the value may become invalid so we need to recheck after the update. We set the new step
    // imperatively so we don't have to wait for the next render to report the updated validity.
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
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
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }

  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
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
      right: this.hasSlotController.test('right')
    };

    // States
    const hasLabel = this.label ? true : !!slots['label'];
    const hasHelpText = this.helpText ? true : !!slots['helpText'];
    const hasClearIcon = this.clearable && !this.readonly && (typeof this.value === 'number' || this.value.length > 0);

    // Hierarchy of input states:
    const inputState = this.disabled
      ? 'disabled'
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
    const textColor = {
      disabled: 'text-neutral-500',
      readonly: 'text-black',
      activeInvalid: 'text-error',
      activeValid: 'text-black',
      active: 'text-black',
      invalid: 'text-error',
      valid: 'text-black',
      default: 'text-black'
    }[inputState];

    const borderColor = {
      disabled: 'border-neutral-500',
      readonly: 'border-neutral-800',
      activeInvalid: 'border-error border-2',
      activeValid: 'border-success border-2',
      active: 'border-primary border-2',
      invalid: 'border-error',
      valid: 'border-success',
      default: 'border-neutral-800'
    }[inputState];

    const iconColor = this.disabled ? 'text-neutral-500' : 'text-primary';
    const iconMarginLeft = { sm: 'ml-1', md: 'ml-2', lg: 'ml-2' }[this.size];
    const iconSize = {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl'
    }[this.size];

    // Render
    return html`
      <div part="form-control" class=${cx(this.disabled && 'pointer-events-none')}>
        <label
          part="form-control-label"
          id="label"
          class=${cx('mb-2', hasLabel ? 'inline-block' : 'hidden', textSize)}
          for="input"
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="relative w-full">
          <div
            part="border"
            class=${cx('absolute w-full h-full pointer-events-none border rounded-default', borderColor)}
          ></div>
          <div
            part="base"
            class=${cx(
              'px-4 flex flex-row items-center rounded-default transition-all',
              // Vertical Padding
              this.size === 'lg' ? 'py-2' : 'py-1',
              // States
              !this.disabled && !this.readonly ? 'hover:bg-neutral-200' : '',
              this.readonly ? 'bg-neutral-100' : 'bg-white',
              textColor
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
                'min-w-0 flex-grow focus:outline-none bg-transparent placeholder-neutral-700',
                this.size === 'sm' ? 'h-6' : 'h-8',
                textSize
              )}
              type=${this.type === 'password' && this.passwordVisible ? 'text' : this.type}
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              name=${ifDefined(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ifDefined(this.placeholder)}
              minlength=${ifDefined(this.minlength)}
              maxlength=${ifDefined(this.maxlength)}
              min=${ifDefined(this.min)}
              max=${ifDefined(this.max)}
              step=${ifDefined(this.step as number)}
              .value=${live(this.value)}
              autocapitalize=${ifDefined(this.type === 'password' ? 'off' : this.autocapitalize)}
              autocomplete=${ifDefined(this.type === 'password' ? 'off' : this.autocomplete)}
              autocorrect=${ifDefined(this.type === 'password' ? 'off' : this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ifDefined(this.pattern)}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${hasClearIcon
              ? html`
                  <button
                    part="clear-button"
                    class=${cx('flex justify-center ', iconMarginLeft)}
                    type="button"
                    aria-label=${this.localize.term('clearEntry')}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sd-icon
                        class=${cx('icon-fill-neutral-800', iconSize)}
                        library="system"
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
                    class="flex items-center"
                    type="button"
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible
                      ? html`
                          <slot name="show-password-icon"
                            ><sd-icon
                              class=${cx(iconColor, iconMarginLeft, iconSize)}
                              library="system"
                              name="eye"
                            ></sd-icon
                          ></slot>
                        `
                      : html`
                          <slot name="hide-password-icon"
                            ><sd-icon
                              class=${cx(iconColor, iconMarginLeft, iconSize)}
                              library="system"
                              name="eye-crossed-out"
                            ></sd-icon
                          ></slot>
                        `}
                  </button>
                `
              : ''}
            ${(this.type === 'date' || this.type === 'datetime-local') && !isFirefox
              ? html`
                  <sd-icon class=${cx(iconColor, iconMarginLeft, iconSize)} library="system" name="calendar"></sd-icon>
                `
              : ''}
            ${this.type === 'time'
              ? html`
                  <sd-icon class=${cx(iconColor, iconMarginLeft, iconSize)} library="system" name="clock"></sd-icon>
                `
              : ''}
            ${this.type === 'search'
              ? html`
                  <button class="flex items-center" type="button" tabindex="-1">
                    <sd-icon
                      class=${cx(iconColor, iconMarginLeft, iconSize)}
                      library="system"
                      name="magnifying-glass"
                    ></sd-icon>
                  </button>
                `
              : ''}
            ${this.showInvalidStyle
              ? html`
                  <sd-icon
                    part="invalid-icon"
                    class=${cx('text-error', iconMarginLeft, iconSize)}
                    library="system"
                    name="risk"
                  ></sd-icon>
                `
              : ''}
            ${this.showValidStyle && this.styleOnValid
              ? html`
                  <sd-icon
                    class=${cx('text-success flex-shrink-0', iconMarginLeft, iconSize)}
                    library="system"
                    name="status-check"
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
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class=${cx('text-sm text-neutral-700', hasHelpText ? 'block' : 'hidden')}
          aria-hidden=${!hasHelpText}
        >
          ${this.helpText}
        </slot>
      </div>
      ${this.formControlController.renderInvalidMessage()}
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        @apply box-border relative inline-block text-left w-full;
      }

      :host([vertical]) {
        @apply block;
      }

      :host([required]) #label::after {
        content: ' *';
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
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-input': SdInput;
  }
}
