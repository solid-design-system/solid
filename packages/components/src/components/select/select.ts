import { animateTo, stopAnimations } from '../../internal/animate.js';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { scrollIntoView } from '../../internal/scroll.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SdIcon from '../icon/icon';
import SdPopup from '../popup/popup';
import SdTag from '../tag/tag';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';
import type { TemplateResult } from 'lit';
import type SdOption from '../option/option';

/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://shoelace.style/components/select
 * @status stable
 * @since 1.30.0
 *
 * @dependency sd-icon
 * @dependency sd-popup
 * @dependency sd-tag
 *
 * @slot - The listbox options. Must be `<sd-option>` elements. You can use `<sd-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.

 *
 * @event sd-change - Emitted when the control's value changes.
 * @event sd-clear - Emitted when the control's value is cleared.
 * @event sd-input - Emitted when the control receives input.
 * @event sd-focus - Emitted when the control gains focus.
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-show - Emitted when the select's menu opens.
 * @event sd-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event sd-hide - Emitted when the select's menu closes.
 * @event sd-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event sd-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the combobox, clear icon, and expand button.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__removable-indicator - The tag's remove button.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
@customElement('sd-select')
export default class SdSelect extends SolidElement implements SolidFormControl {
  static dependencies = {
    'sd-icon': SdIcon,
    'sd-popup': SdPopup,
    'sd-tag': SdTag
  };

  private readonly formControlController: FormControlController = new FormControlController(this, {
    assumeInteractionOn: ['sd-blur', 'sd-input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  public localize = new LocalizeController(this);
  private typeToSelectString = '';
  private typeToSelectTimeout: number;

  @queryAssignedElements({ selector: 'sd-option' }) _optionsInDefaultSlot!: SdOption[];

  @query('sd-popup') popup: SdPopup;
  @query('[part="combobox"]') combobox: HTMLSlotElement;
  @query('[part="display-input"]') displayInput: HTMLInputElement;
  @query('.value-input') valueInput: HTMLInputElement;
  @query('[part="listbox"]') listbox: HTMLSlotElement;
  @query('#invalid-message') invalidMessage: HTMLDivElement;

  /** @internal*/
  @state() hasHover = false; // we need this because Safari doesn't honor :hover styles while dragging
  /** When `multiple` is `true` and `useTags` is `false`, the displayLabel sets the text shown in the display input. We use the localized string "Options Selected (#)" by default.
   * @internal
   */
  @state() private displayLabel = '';
  /** @internal */
  @state() hasFocus = false;
  /** @internal */
  @state() currentOption: SdOption;
  /** @internal */
  @state() selectedOptions: SdOption[] = [];
  /**
   * Indicates whether or not the user input is valid after the user has interacted with the component. These states are activated when the attribute "data-user-valid" or "data-user-invalid" are set on the component via the form controller. They are different than the native input validity state which is always either `true` or `false`.
   * @internal
   */
  @state() showValidStyle = false;
  /** @internal */
  @state() showInvalidStyle = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue: string | string[] = '';

  /**
   * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The select's size. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** Placeholder text to show as a hint when the select is empty. */
  @property() placeholder = this.localize.term('selectDefaultPlaceholder');

  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /**
   * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /**
   * The actual current placement of the select's menu sourced from `sd-popup`.
   * @internal
   */
  @state() currentPlacement = this.placement;

  /** Adds a clear button when the select is not empty. */
  @property({ type: Boolean }) clearable = false;

  /** Disables the select control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Allows more than one option to be selected. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /** Uses interactive `sd-tag` elements representing individual options in the display input when `multiple` is `true`. */
  @property({ type: Boolean, reflect: true }) useTags = false;

  /**
   * The maximum number of selected options to show when `multiple` and `useTags` are `true`. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   */
  @property({ attribute: 'max-options-visible', type: Number }) maxOptionsVisible = 3;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The name of the select, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value attribute will be a space-delimited list of values based on the options selected, and the value property will
   * be an array. **For this reason, values must not contain spaces.**
   */
  @property({
    converter: {
      fromAttribute: (value: string) => value.split(' '),
      toAttribute: (value: string[]) => value.join(' ')
    }
  })
  value: string | string[] = '';

  /** The select's required attribute. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Shows success styles if the validity of the input is valid. */
  @property({ type: Boolean, reflect: true, attribute: 'style-on-valid' }) styleOnValid = false;

  /**
   * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /**
   * A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   */
  @property() getTag: (option: SdOption, index: number) => TemplateResult | string | HTMLElement = option => {
    return html`
      <sd-tag
        ?disabled=${this.disabled}
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              removable-indicator:tag__removable-indicator,
            "
        size=${this.size === 'sm' ? 'sm' : 'lg'}
        removable
        @sd-remove=${(event: CustomEvent) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </sd-tag>
    `;
  };

  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();

    // Cascade select size to options once connected
    this.applySizeToOptions();

    // Because this is a form control, it shouldn't be opened initially
    this.open = false;
  }

  private addOpenListeners() {
    document.addEventListener('focusin', this.handleDocumentFocusIn);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit('sd-focus');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleDocumentFocusIn = (event: KeyboardEvent) => {
    // Close when focusing out of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest('.select__clear') !== null;
    const isIconButton = target.closest('sd-icon-button') !== null;

    // Ignore presses when the target is an icon button (e.g. the remove button in <sd-tag>)
    if (isClearButton || isIconButton) {
      return;
    }

    // Close when pressing escape
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }

    // Handle enter and space. When pressing space, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === 'Enter' || (event.key === ' ' && this.typeToSelectString === '')) {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        return;
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.currentOption.disabled) {
        if (this.multiple) {
          this.toggleOptionSelection(this.currentOption);
        } else {
          this.setSelectedOptions(this.currentOption);
        }

        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('sd-input');
          this.emit('sd-change');
        });

        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }

      return;
    }

    // Navigate options
    if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const allOptions = this.getAllOptions();
      const currentIndex = allOptions.indexOf(this.currentOption);
      let newIndex = Math.max(0, currentIndex);

      // Prevent scrolling
      event.preventDefault();

      // Open it
      if (!this.open) {
        this.show();

        // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
        // opens for the first time
        if (this.currentOption) {
          return;
        }
      }

      if (event.key === 'ArrowDown') {
        newIndex = currentIndex + 1;
        if (newIndex > allOptions.length - 1) newIndex = 0;
      } else if (event.key === 'ArrowUp') {
        newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = allOptions.length - 1;
      } else if (event.key === 'Home') {
        newIndex = 0;
      } else if (event.key === 'End') {
        newIndex = allOptions.length - 1;
      }

      this.setCurrentOption(allOptions[newIndex]);
    }

    // All other "printable" keys trigger type to select
    if (event.key.length === 1 || event.key === 'Backspace') {
      const allOptions = this.getAllOptions();

      // Don't block important key combos like CMD+R
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      // Open, unless the key that triggered is backspace
      if (!this.open) {
        if (event.key === 'Backspace') {
          return;
        }

        this.show();
      }

      event.stopPropagation();
      event.preventDefault();

      clearTimeout(this.typeToSelectTimeout);
      this.typeToSelectTimeout = window.setTimeout(() => (this.typeToSelectString = ''), 1000);

      if (event.key === 'Backspace') {
        this.typeToSelectString = this.typeToSelectString.slice(0, -1);
      } else {
        this.typeToSelectString += event.key.toLowerCase();
      }

      for (const option of allOptions) {
        const label = option.getTextLabel().toLowerCase();

        if (label.startsWith(this.typeToSelectString)) {
          this.setCurrentOption(option);
          break;
        }
      }
    }
  };

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleLabelClick() {
    this.displayInput.focus();
  }

  private handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isRemovableIndicator = path.some(el => el instanceof HTMLSlotElement && el.name === 'removable-indicator');

    // Ignore disabled controls and clicks on tags (remove buttons)
    if (this.disabled || isRemovableIndicator) {
      return;
    }

    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.value !== '') {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });

      // Emit after update
      this.updateComplete.then(() => {
        this.emit('sd-clear');
        this.emit('sd-input');
        this.emit('sd-change');
      });
    }
  }

  private handleClearMouseDown(event: MouseEvent) {
    // Don't lose focus or propagate events when clicking the clear button
    event.stopPropagation();
    event.preventDefault();
  }

  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('sd-option');
    const oldValue = this.value;

    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('sd-input');
          this.emit('sd-change');
        });
      }

      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }

  private handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values: string[] = [];

    // Check for duplicate values in menu items
    if (customElements.get('sd-option')) {
      allOptions.forEach(option => {
        if (this.multiple) {
          option.checkbox = true;
        }
        values.push(option.value);
      });

      // Select only the options that match the new value
      this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
    } else {
      // Rerun this handler when <sd-option> is registered
      customElements.whenDefined('sd-option').then(() => this.handleDefaultSlotChange());
    }
  }

  private handleTagRemove(event: CustomEvent, option: SdOption) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggleOptionSelection(option, false);

      // Emit after updating
      this.updateComplete.then(() => {
        this.emit('sd-input');
        this.emit('sd-change');
      });
    }
  }

  // Gets an array of all <sd-option> elements
  private getAllOptions() {
    return [...this.querySelectorAll<SdOption>('sd-option')];
  }

  // Gets the first <sd-option> element
  private getFirstOption() {
    return this.querySelector<SdOption>('sd-option');
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option: SdOption | null) {
    const allOptions = this.getAllOptions();

    // Clear selection
    allOptions.forEach(el => {
      el.current = false;
      el.tabIndex = -1;
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(option: SdOption | SdOption[]) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];

    // Clear existing selection
    allOptions.forEach(el => (el.selected = false));

    // Set the new selection
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach(el => (el.selected = true));
    }

    // Update selection, value, and display label
    this.selectionChanged();
  }

  // Toggles an option's selected state
  private toggleOptionSelection(option: SdOption, force?: boolean) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }

    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllOptions().filter(el => el.selected);

    // Update the value and display label
    if (this.multiple) {
      this.value = this.selectedOptions.map(el => el.value);

      if (this.useTags || this.value.length === 0) {
        // When no items are selected, keep the value empty so the placeholder shows
        this.displayLabel = '';
      } else {
        this.displayLabel = this.localize.term('numOptionsSelected', this.selectedOptions.length);
      }
    } else {
      this.value = this.selectedOptions[0]?.value ?? '';
      this.displayLabel = this.selectedOptions[0]?.getTextLabel() ?? '';
    }

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }

  protected get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        // Wrap so we can handle the remove
        return html`<div @sd-remove=${(e: CustomEvent) => this.handleTagRemove(e, option)}>
          ${typeof tag === 'string' ? unsafeHTML(tag) : tag}
        </div>`;
      } else if (index === this.maxOptionsVisible) {
        // Hit tag limit
        return html`<sd-tag size=${this.size === 'sm' ? 'sm' : 'lg'} ?disabled=${this.disabled}
          >+${this.selectedOptions.length - index}</sd-tag
        >`;
      }
      return html``;
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
    this.invalidMessage.textContent = (event.target as HTMLInputElement).validationMessage;
  }

  private handleMouseEnter() {
    this.hasHover = true;
  }

  private handleMouseLeave() {
    this.hasHover = false;
  }

  /** Receives incoming event detail from sd-popup and updates local state for conditional styling. */
  private handleCurrentPlacement(e: CustomEvent<'top' | 'bottom'>) {
    const incomingPlacement = e.detail;

    if (incomingPlacement) {
      this.currentPlacement = incomingPlacement;
    }
  }

  @watch('useTags', { waitUntilFirstUpdate: true })
  handleUseTagsChange() {
    const allOptions = this.getAllOptions();

    // Mutate all sd-option checkbox attributes based on useTags state
    if (customElements.get('sd-option')) {
      allOptions.forEach(option => {
        option.checkbox = this.multiple;
      });
    }
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the listbox when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      // Reset the current option
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());

      // Show
      this.emit('sd-show');
      this.addOpenListeners();

      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;

      // Select the appropriate option based on value after the listbox opens
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });

      const { keyframes, options } = getAnimation(this, 'select.show', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);

      // Make sure the current option is scrolled into view (required for Safari)
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, 'vertical', 'auto');
      }

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'select.hide', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;

      this.emit('sd-after-hide');
    }
  }

  @watch('size', { waitUntilFirstUpdate: true })
  applySizeToOptions() {
    this._optionsInDefaultSlot.forEach(option => {
      option.size = this.size;
    });
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'sd-after-hide');
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput?.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    this.formControlController.fakeUserInteraction();
    return this.valueInput.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    this.displayInput.focus(options);
  }

  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }

  render() {
    // Slots
    const slots = {
      default: this.hasSlotController.test('[default]'),
      label: this.hasSlotController.test('label'),
      clearIcon: this.hasSlotController.test('clear-icon'),
      expandIcon: this.hasSlotController.test('expand-icon'),
      helpText: this.hasSlotController.test('help-text')
    };

    const hasLabel = this.label ? true : !!slots['label'];
    const hasHelpText = this.helpText ? true : !!slots['helpText'];
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;

    // Hierarchy of input states:
    const selectState = this.disabled
      ? 'disabled'
      : this.hasFocus && this.showInvalidStyle
        ? 'activeInvalid'
        : this.hasFocus && this.styleOnValid && this.showValidStyle
          ? 'activeValid'
          : this.hasFocus || this.open
            ? 'active'
            : this.showInvalidStyle
              ? 'invalid'
              : this.styleOnValid && this.showValidStyle
                ? 'valid'
                : 'default';

    // Conditional Styles
    const cursorStyles = this.disabled ? 'cursor-not-allowed' : 'cursor-pointer';

    const iconMarginLeft = { sm: 'ml-1', md: 'ml-2', lg: 'ml-2' }[this.size];
    const iconSize = {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl'
    }[this.size];

    // Template
    return html`
      <div
        part="form-control"
        class=${cx(
          'relative text-left',
          cursorStyles,
          this.size === 'sm' ? 'text-sm' : 'text-base',

          this.open && 'z-50'
        )}
      >
        <label
          id="label"
          part="form-control-label"
          class=${hasLabel && 'inline-block mb-2'}
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div
          part="form-control-input"
          class=${cx('relative w-full bg-white', selectState === 'disabled' ? 'text-neutral-500' : 'text-black')}
        >
          <div
            part="border"
            class=${cx(
              'absolute top-0 w-full h-full pointer-events-none border rounded-default',
              this.hasHover && 'bg-neutral-200',
              {
                disabled: 'border-neutral-500',
                readonly: 'border-neutral-800',
                activeInvalid: 'border-error border-2',
                activeValid: 'border-success border-2',
                active: 'border-primary border-2',
                invalid: 'border-error',
                valid: 'border-success',
                default: 'border-neutral-800'
              }[selectState],
              this.open &&
                (this.currentPlacement === 'bottom'
                  ? 'rounded-bl-none rounded-br-none'
                  : 'rounded-tl-none rounded-tr-none')
            )}
          ></div>
          <sd-popup
            @sd-current-placement=${this.handleCurrentPlacement}
            class=${cx(
              'inline-flex relative w-full',
              this.currentPlacement === 'bottom' ? 'origin-top' : 'origin-bottom'
            )}
            placement=${this.placement}
            strategy=${this.hoist ? 'fixed' : 'absolute'}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="
              popup:popup__content,
            "
          >
            <div
              part="combobox"
              class=${cx(
                'relative w-full px-4 flex flex-row items-center rounded-default',
                this.open && 'shadow',
                {
                  sm: 'py-1 min-h-[32px]',
                  md: 'py-1 min-h-[40px]',
                  lg: 'py-2 min-h-[48px]'
                }[this.size]
              )}
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @mouseenter=${this.handleMouseEnter}
              @mouseleave=${this.handleMouseLeave}
            >
              <input
                name=${this.name}
                form=${this.form}
                part="display-input"
                class=${cx(
                  'appearance-none outline-none flex-grow bg-transparent w-full',
                  cursorStyles,
                  this.multiple && this.useTags && this.value.length > 0 ? 'hidden' : ''
                )}
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? 'true' : 'false'}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? 'true' : 'false'}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple && this.useTags
                ? html`<div part="tags" class="flex-grow flex flex-wrap items-center gap-1">${this.tags}</div>`
                : ''}

              <input
                class=${cx('value-input absolute top-0 left-0 w-full h-full opacity-0 -z-10', cursorStyles)}
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(', ') : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />
              ${hasClearIcon
                ? html`
                    <button
                      part="clear-button"
                      class=${cx('select__clear flex justify-center', iconMarginLeft)}
                      type="button"
                      aria-label=${this.localize.term('clearEntry')}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sd-icon
                          class=${cx('text-icon-fill-neutral-800', iconSize)}
                          library="system"
                          name="closing-round"
                        ></sd-icon>
                      </slot>
                    </button>
                  `
                : ''}
              ${this.showInvalidStyle
                ? html`
                    <sd-icon
                      part="invalid-icon"
                      class=${cx(iconMarginLeft, iconSize)}
                      library="system"
                      name="risk"
                    ></sd-icon>
                  `
                : ''}
              ${this.styleOnValid && this.showValidStyle
                ? html`
                    <sd-icon
                      part="valid-icon"
                      class=${cx('flex-shrink-0', iconMarginLeft, iconSize)}
                      library="system"
                      name="status-check"
                    ></sd-icon>
                  `
                : ''}

              <slot
                name="expand-icon"
                part="expand-icon"
                class=${cx(
                  'inline-flex ml-2 transition-all',
                  this.open ? 'rotate-180' : 'rotate-0',
                  this.disabled ? 'text-neutral-500' : 'text-primary',
                  iconSize
                )}
              >
                <sd-icon name="chevron-down" part="chevron" library="system" color="currentColor"></sd-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-multiselectable=${this.multiple ? 'true' : 'false'}
              aria-labelledby="label"
              part="listbox"
              class=${cx(
                'bg-white px-2 py-3 relative border-primary',
                this.open && 'shadow',
                this.currentPlacement === 'bottom'
                  ? 'border-r-2 border-b-2 border-l-2 rounded-br-default rounded-bl-default'
                  : 'border-r-2 border-t-2 border-l-2 rounded-tr-default rounded-tl-default'
              )}
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sd-popup>
        </div>

        <div
          class="text-sm text-neutral-700"
          part="form-control-help-text"
          id="help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
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
        @apply block relative w-full;
      }

      :host([required]) #label::after {
        content: ' *';
      }

      sd-popup::part(popup) {
        @apply overflow-y-scroll z-dropdown;
      }

      sd-tag::part(base) {
        @apply rounded-default px-1;
      }

      sd-tag[size='lg']::part(base) {
        @apply px-2;
      }

      sd-tag[disabled='false']::part(base):hover {
        @apply bg-primary-100;
      }
    `
  ];
}

setDefaultAnimation('select.show', {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: 'ease' }
});

setDefaultAnimation('select.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-select': SdSelect;
  }
}
