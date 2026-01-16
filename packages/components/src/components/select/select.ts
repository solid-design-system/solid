import '../icon/icon';
import '../popup/popup';
import '../tag/tag';
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
import cx from 'classix';

import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';
import type { TemplateResult } from 'lit';
import type SdOption from '../option/option';
import type SdPopup from '../popup/popup';

/**
 * @summary Selects allow you to choose items from a menu of predefined options.
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
 * @slot tooltip - An optional tooltip that helps describe the input. Use this slot with the `sd-tooltip` component.

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
 *
 * @cssproperty --tag-max-width - Set the maximum width of the tags and to show an ellipsis. Defaults to "15ch"
 * @cssproperty --sd-form-control--invalid-color-background - The background color for form controls in invalid state.
 * @cssproperty --sd-form-control-color-text - The text color for form controls.
 */
@customElement('sd-select')
export default class SdSelect extends SolidElement implements SolidFormControl {
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

  /** @internal */
  @state() private deletedTagLabel = '';
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
  @property({ type: String, reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /**
   * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   */
  @property({ type: String, reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  @property({ type: String, reflect: true }) label = '';

  /** Placeholder text to show as a hint when the select is empty. */
  @property({ type: String, reflect: true }) placeholder = '';

  /** Label text shown on tag if max-options-visible is reached. */
  @property({ type: String, attribute: 'max-options-tag-label', reflect: true }) maxOptionsTagLabel = '';

  /** Disables the select control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Styles the select as if it was disabled and enables aria-disabled */
  @property({ type: Boolean, reflect: true, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ type: String, attribute: 'help-text', reflect: true }) helpText = '';

  /**
   * The actual current placement of the select's menu sourced from `sd-popup`.
   * @internal
   */
  @state() currentPlacement = this.placement;

  /** Adds a clear button when the select is not empty. */
  @property({ type: Boolean, reflect: true }) clearable = false;

  /** Allows more than one option to be selected. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /** Uses interactive `sd-tag` elements representing individual options in the display input when `multiple` is `true`. */
  @property({ type: Boolean, reflect: true }) useTags = false;

  /**
   * The maximum number of selected options to show when `multiple` and `useTags` are `true`. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   */
  @property({ attribute: 'max-options-visible', type: Number, reflect: true }) maxOptionsVisible = 3;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The name of the select, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

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

  /** Enables the floating label behavior for the input. */
  @property({ attribute: 'floating-label', type: Boolean, reflect: true }) floatingLabel = false;

  /** Shows success styles if the validity of the input is valid. */
  @property({ type: Boolean, reflect: true, attribute: 'style-on-valid' }) styleOnValid = false;

  /**
   * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean, reflect: true }) hoist = false;

  /**
   * A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   */
  @property() getTag: (option: SdOption, index: number) => TemplateResult | string | HTMLElement = option => {
    return html`
      <sd-tag
        class="relative z-10"
        ?disabled=${this.disabled}
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              removable-indicator:tag__removable-indicator,
            "
        size=${this.size === 'sm' ? 'sm' : 'lg'}
        removable
        @keydown=${(event: KeyboardEvent) => this.handleTagKeyDown(event, option)}
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
    // Because this is a form control, it shouldn't be opened initially
    this.open = false;
  }

  firstUpdated() {
    // Cascade select size to options once connected
    this.applySizeToOptions();
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
      this.combobox.focus({ preventScroll: true });
    }

    // Handle enter and space. When pressing space, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === 'Enter' || (event.key === ' ' && this.typeToSelectString === '')) {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        this.setCurrentOption(this.currentOption || this.getFirstOption(), event);
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
          this.combobox.focus({ preventScroll: true });
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

      this.setCurrentOption(allOptions[newIndex], event);
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

  private handleTagKeyDown(event: KeyboardEvent, option: SdOption) {
    if ((event.key === 'Backspace' || event.key === 'Enter' || event.key === ' ') && this.multiple) {
      event.preventDefault();
      event.stopPropagation();
      const tagParent = (event.currentTarget as HTMLElement)?.parentElement;
      const previousTag = tagParent?.previousElementSibling?.querySelector('sd-tag');
      const nextTag = tagParent?.nextElementSibling?.querySelector('sd-tag');

      this.handleTagRemove(new CustomEvent('sd-remove'), option);
      this.updateComplete.then(() => {
        if (nextTag) {
          nextTag.focus();
        } else if (previousTag) {
          previousTag.focus();
        } else {
          this.focus({ preventScroll: true });
        }
      });
    }
  }

  private handleTagMaxOptionsKeyDown(event: KeyboardEvent) {
    if ((event.key === 'Backspace' || event.key === 'Enter') && this.multiple) {
      event.preventDefault();
      event.stopPropagation();
      this.handleTagRemove(new CustomEvent('sd-remove'), this.selectedOptions[this.selectedOptions.length - 1]);
      this.updateComplete.then(() => {
        const tags = this.shadowRoot?.querySelectorAll('sd-tag');
        if (tags && tags.length > 0) {
          tags?.[tags?.length - 1].focus();
        } else {
          this.focus({ preventScroll: true });
        }
      });
    }
  }

  private handleLabelClick() {
    this.combobox.focus();
  }

  private handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isRemovableIndicator = path.some(el => el instanceof HTMLSlotElement && el.name === 'removable-indicator');

    // Ignore disabled controls and clicks on tags (remove buttons)
    if (this.disabled || isRemovableIndicator || this.visuallyDisabled) {
      return;
    }

    event.preventDefault();
    this.combobox.focus({ preventScroll: true });
    this.open = !this.open;
    this.setCurrentOption(this.currentOption || this.getFirstOption(), event);
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    this.clearSelect();
  }

  private clearSelect() {
    this.setSelectedOptions([]);
    this.combobox.focus({ preventScroll: true });

    // Emit after update
    this.updateComplete.then(() => {
      this.emit('sd-clear');
      this.emit('sd-input');
      this.emit('sd-change');
    });
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
      this.updateComplete.then(() => this.combobox.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('sd-input');
          this.emit('sd-change');
        });
      }

      if (!this.multiple) {
        this.hide();
        this.combobox.focus({ preventScroll: true });
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

  private handleTagRemove(event: CustomEvent, option?: SdOption) {
    event.stopPropagation();
    if (!option) {
      this.clearSelect();
    }
    if (option && !this.disabled) {
      this.toggleOptionSelection(option, false);
      this.deletedTagLabel = this.localize.term('removed', option.textContent);

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
  private setCurrentOption(option: SdOption | null, event?: KeyboardEvent | MouseEvent) {
    const allOptions = this.getAllOptions();

    // Clear selection
    allOptions.forEach(el => {
      el.current = false;
      el.tabIndex = -1;

      if (event?.type === 'keydown' || event?.type === 'mousedown') {
        el.isKeyboardFocus = false;
      }
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }

    if (option && event?.type === 'keydown') {
      option.isKeyboardFocus = true;
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
    if (Array.isArray(option)) {
      this.selectionChanged();
    } else {
      this.selectionChanged(option);
    }
  }

  // Toggles an option's selected state
  private toggleOptionSelection(option: SdOption, force?: boolean) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }

    // Update selection, value, and display label
    if (Array.isArray(option)) {
      this.selectionChanged();
    } else {
      this.selectionChanged(option);
    }
  }

  /**
   * When `multiple` is `true` and `useTags` is `false`, the displayLabel sets the text shown in the display input.
   * We use the localized string "Options Selected (#)" by default.
   */
  private get displayLabel() {
    if (this.multiple) {
      if (this.useTags || this.value.length === 0) {
        return '';
      } else {
        return this.localize.term('numOptionsSelected', this.selectedOptions.length);
      }
    } else {
      return this.selectedOptions[0]?.getTextLabel() ?? '';
    }
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged(option?: SdOption) {
    if (option && this.multiple) {
      if (this.selectedOptions.find(el => el.value === option.value)) {
        this.selectedOptions = this.selectedOptions.filter(el => el.value !== option.value);
      } else {
        this.selectedOptions = [...this.selectedOptions, option];
      }
    } else {
      // Update selected options cache
      this.selectedOptions = this.getAllOptions().filter(el => el.selected);
    }

    // Update the value and display label
    if (this.multiple) {
      this.value = this.selectedOptions.map(el => el.value);
    } else {
      this.value = this.selectedOptions[0]?.value ?? '';
    }

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }

  protected get tags() {
    if (this.selectedOptions.length <= this.maxOptionsVisible) {
      return this.selectedOptions.map((option, index) => {
        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
          const tag = this.getTag(option, index);
          // Wrap so we can handle the remove
          return html` <div @sd-remove=${(e: CustomEvent) => this.handleTagRemove(e, option)}>
            ${typeof tag === 'string' ? unsafeHTML(tag) : tag}
          </div>`;
        }
        return [html``];
      });
    } else {
      return [
        html`
          <sd-tag
            class="z-10"
            ?disabled=${this.disabled}
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              removable-indicator:tag__removable-indicator,
            "
            size=${this.size === 'sm' ? 'sm' : 'lg'}
            removable
            @keydown=${(event: KeyboardEvent) => this.handleTagMaxOptionsKeyDown(event)}
            @sd-remove=${(event: CustomEvent) => this.handleTagRemove(event)}
            >${this.selectedOptions.length} ${this.localize.term('tagsSelected')}</sd-tag
          >
        `
      ];
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
    this.invalidMessage.textContent = (event.target as HTMLInputElement).validationMessage;
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

  @watch(['disabled', 'visually-disabled'], { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the listbox when the control is disabled
    if (this.disabled || this.visuallyDisabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && (!this.disabled || !this.visuallyDisabled)) {
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
    // run only if the value is updated from outside
    if (this.selectedOptions.length === (Array.isArray(this.value) ? this.value.length : 1)) return;
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled || this.visuallyDisabled) {
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
    this.combobox.focus(options);
  }

  /** Removes focus from the control. */
  blur() {
    this.combobox.blur();
  }

  render() {
    // Slots
    const slots = {
      default: this.hasSlotController.test('[default]'),
      label: this.hasSlotController.test('label'),
      clearIcon: this.hasSlotController.test('clear-icon'),
      expandIcon: this.hasSlotController.test('expand-icon'),
      helpText: this.hasSlotController.test('help-text'),
      tooltip: this.hasSlotController.test('tooltip')
    };

    const hasLabel = this.label ? true : !!slots['label'];
    const hasHelpText = this.helpText ? true : !!slots['helpText'];
    const hasClearIcon = this.clearable && !this.disabled;
    const hasTooltip = !!slots['tooltip'];
    const hasValue = this.value !== null && String(this.value).length > 0;
    const isFloatingLabelActive =
      this.floatingLabel && hasLabel && ((this.hasFocus && !this.visuallyDisabled) || this.open || hasValue);

    // Hierarchy of input states:
    const selectState = this.disabled
      ? 'disabled'
      : this.visuallyDisabled && !this.hasFocus
        ? 'visuallyDisabled'
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
    const cursorStyles = this.disabled || this.visuallyDisabled ? 'cursor-not-allowed' : 'cursor-pointer';

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
        <span class="sr-only" aria-live="polite">${this.deletedTagLabel}</span>

        ${(hasLabel && !this.floatingLabel) || hasTooltip
          ? html`<div class="flex items-center gap-1 mb-2">
              <label
                id="label"
                part="form-control-label"
                class=${hasLabel && 'inline-block form-control-color-text'}
                aria-hidden=${hasLabel ? 'false' : 'true'}
                @click=${this.handleLabelClick}
              >
                <slot name="label">${this.label}</slot>
              </label>

              ${slots['tooltip'] ? html`<slot name="tooltip"></slot>` : ''}
            </div>`
          : null}
        <div
          part="form-control-input"
          class=${cx(
            'relative w-full bg-white',
            selectState === 'disabled' ? 'text-neutral-500' : 'form-control-color-text'
          )}
        >
          ${hasLabel && this.floatingLabel
            ? html`
                <label
                  id="label"
                  part="form-control-floating-label"
                  class=${cx(
                    'absolute left-4 z-20 pointer-events-none transition-all duration-200',
                    !isFloatingLabelActive
                      ? 'top-1/2 -translate-y-1/2 text-base'
                      : this.size === 'lg'
                        ? 'top-2 text-xs'
                        : 'top-1 text-xs',
                    isFloatingLabelActive && 'mt-1'
                  )}
                  for="input"
                >
                  <span
                    class=${cx(
                      'leading-none',
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
          <div
            part="border"
            class=${cx(
              'absolute top-0 w-full h-full pointer-events-none border rounded-default z-10 transition-[border] duration-medium ease-in-out',
              {
                disabled: 'border-neutral-500',
                visuallyDisabled: 'border-neutral-500',
                readonly: 'form-control-color-border',
                activeInvalid: 'border-error border-2',
                activeValid: 'border-success border-2',
                active: 'border-primary border-2',
                invalid: 'border-error',
                valid: 'border-success',
                default: 'form-control-color-border'
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
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="
              popup:popup__content,
            "
          >
            <div
              class=${cx(
                'relative w-full h-full grid rounded-default transition-colors hover:duration-fast ease-in-out',
                this.visuallyDisabled || this.disabled ? 'hover:bg-transparent' : 'hover:bg-neutral-200',
                ['invalid', 'activeInvalid'].includes(selectState) && 'form-control--invalid-color-background'
              )}
              slot="anchor"
            >
              <div
                class=${cx(
                  'input-container items-center w-full h-full px-4 flex',
                  {
                    sm: 'py-1',
                    md: 'py-1',
                    lg: 'py-2'
                  }[this.size],
                  verticalPadding
                )}
              >
                <input
                  name=${this.name}
                  form=${this.form}
                  part="display-input"
                  class=${cx(
                    'top-0 left-0 appearance-none outline-none flex-grow bg-transparent flex-1 placeholder:text-neutral-700',
                    cursorStyles,
                    this.multiple && this.useTags && this.value.length > 0 ? 'hidden' : '',
                    this.size === 'sm'
                      ? isFloatingLabelActive
                        ? 'h-4'
                        : 'h-6'
                      : isFloatingLabelActive
                        ? 'h-6'
                        : 'h-8',
                    isFloatingLabelActive && 'leading-none mt-4'
                  )}
                  type="text"
                  .disabled=${this.disabled}
                  placeholder=${!this.floatingLabel || isFloatingLabelActive
                    ? this.placeholder || this.localize.term('selectDefaultPlaceholder')
                    : ''}
                  .value=${this.displayLabel}
                  autocomplete="off"
                  spellcheck="false"
                  autocapitalize="off"
                  readonly
                  aria-controls="listbox"
                  aria-expanded=${this.open ? 'true' : 'false'}
                  aria-haspopup="listbox"
                  aria-labelledby="label"
                  aria-disabled=${this.disabled || this.visuallyDisabled ? 'true' : 'false'}
                  aria-invalid=${this.showInvalidStyle}
                  aria-describedby="help-text invalid-message"
                  role="combobox"
                  tabindex="-1"
                />

                ${this.multiple && this.useTags
                  ? html` <div
                      part="tags"
                      class=${cx('flex-grow flex flex-wrap items-center gap-1', this.floatingLabel && 'pt-6')}
                    >
                      ${this.tags}
                    </div>`
                  : ''}

                <div aria-live="polite" id="control-value" class="absolute top-0 left-0 opacity-0 -z-10">
                  ${this.selectedOptions.map(option => option?.getTextLabel()).join(', ')}
                </div>

                <input
                  class=${cx('value-input absolute top-0 left-0 w-full h-full opacity-0 -z-10', cursorStyles)}
                  type="text"
                  ?disabled=${this.disabled}
                  ?required=${this.required}
                  .value=${Array.isArray(this.value) ? this.value.join(', ') : this.value}
                  tabindex="-1"
                  aria-controls="control-value"
                  aria-hidden="true"
                  @focus=${() => this.focus()}
                  @invalid=${this.handleInvalid}
                />
                ${hasClearIcon
                  ? html`
                      <button
                        part="clear-button"
                        class=${cx(
                          'select__clear flex justify-center',
                          iconMarginLeft,
                          this.value.length > 0 ? 'visible' : 'invisible'
                        )}
                        type="button"
                        aria-label=${this.localize.term('clearEntry')}
                        @mousedown=${this.handleClearMouseDown}
                        @click=${this.handleClearClick}
                        tabindex="-1"
                      >
                        <slot name="clear-icon">
                          <sd-icon
                            class=${cx('text-neutral-700 z-10', iconSize)}
                            library="_internal"
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
                        class=${cx(iconMarginLeft, iconSize, 'text-error')}
                        library="_internal"
                        name="risk"
                      ></sd-icon>
                    `
                  : ''}
                ${this.styleOnValid && this.showValidStyle
                  ? html`
                      <sd-icon
                        part="valid-icon"
                        class=${cx('flex-shrink-0 text-success', iconMarginLeft, iconSize)}
                        library="_internal"
                        name="confirm-circle"
                      ></sd-icon>
                    `
                  : ''}
                <slot
                  name="expand-icon"
                  part="expand-icon"
                  class=${cx(
                    'inline-flex ml-2 items-center transition-transform duration-medium ease-in-out',
                    this.open ? 'rotate-180' : 'rotate-0',
                    this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'text-primary',
                    iconSize
                  )}
                >
                  <sd-icon name="chevron-down" part="chevron" library="_internal" color="currentColor"></sd-icon>
                </slot>
              </div>

              <button
                part="combobox"
                class=${cx(
                  'relative w-full px-4 flex flex-row items-center rounded-default focus-visible:outline-none',
                  cursorStyles,
                  this.open && 'shadow transition-shadow duration-medium ease-in-out',
                  {
                    sm: 'min-h-[32px]',
                    md: 'min-h-[40px]',
                    lg: 'min-h-[48px]'
                  }[this.size]
                )}
                type="button"
                @keydown=${this.handleComboboxKeyDown}
                @mousedown=${this.handleComboboxMouseDown}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                aria-labelledby="label"
              ></button>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-multiselectable=${this.multiple ? 'true' : 'false'}
              aria-labelledby="label"
              part="listbox"
              class=${cx(
                'bg-white px-2 py-3 relative border-primary overflow-y-auto',
                this.open && 'shadow transition-shadow duration-medium ease-in-out',
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
          class="text-sm text-neutral-700 mt-1"
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
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block relative w-auto;
      }

      :host([required]) #label::after {
        content: ' *';
      }

      :host([visually-disabled]) ::placeholder,
      :host([disabled]) ::placeholder {
        @apply text-neutral-500;
      }

      [part='listbox'] {
        max-height: var(--auto-size-available-height, auto);
      }

      .input-container,
      [part='combobox'] {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
      }

      sd-popup::part(popup) {
        @apply z-dropdown;
      }

      sd-tag::part(base) {
        @apply rounded-default px-1;
      }

      sd-tag::part(content) {
        @apply overflow-hidden whitespace-nowrap inline-block text-ellipsis;
        max-width: var(--tag-max-width, 15ch);
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
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('select.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});
declare global {
  interface HTMLElementTagNameMap {
    'sd-select': SdSelect;
  }
}
