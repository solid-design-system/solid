import { animateTo, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from '../../internal/register-custom-element';
import { defaultOptionRenderer, type OptionRenderer } from './option-renderer.js';
import { defaultValue } from '../../internal/default-value.js';
import { filterOnlyOptgroups, getAllOptions, getAssignedElementsForSlot, normalizeString } from './utils.js';
import { FormControlController } from '../../internal/form.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query, state } from 'lit/decorators.js';
import { scrollIntoView } from '../../internal/scroll.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import customStyles from './combobox.custom.styles.js';
import SdIcon from '../icon/icon';
import SdPopup from '../popup/popup';
import SolidElement from '../../internal/solid-element';
import styles from './combobox.styles.js';
import type { CloseWatcher } from 'src/declaration.js';
import type { CSSResultGroup } from 'lit';
import type { SolidFormControl } from '../../internal/solid-element';
import type SdOptgroup from '../optgroup/optgroup.js';
import type SdOption from '../option/option';

/**
 * @summary Comboboxes allow you to choose items from a menu of predefined options.
 * @documentation https://solid.union-investment.com/[storybook-link]/combobox
 * @status development
 *
 * @dependency sd-icon
 * @dependency sd-popup
 *
 * @slot - The listbox options. Must be `<sd-option>` elements.
 *    You can use `<sd-optgroup>`'s to group items visually.
 * @slot label - The combobox's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed.
 *    Rotates on open and close.
 * @slot help-text - Text that describes how to use the combobox.
 *    Alternatively, you can use the `help-text` attribute.
 *
 * @event sd-change - Emitted when the control's value changes.
 * @event sd-clear - Emitted when the control's value is cleared.
 * @event sd-input - Emitted when the control receives input.
 * @event sd-focus - Emitted when the control gains focus.
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-show - Emitted when the combobox's menu opens.
 * @event sd-after-show - Emitted after the combobox's menu opens and all animations are complete.
 * @event sd-hide - Emitted when the combobox's menu closes.
 * @event sd-after-hide - Emitted after the combobox's menu closes and all animations are complete.
 * @event sd-invalid - Emitted when the form control has been checked for validity
 *    and its constraints aren't satisfied.
 * @event sd-error - Emitted when the combobox menu fails to open.
 *
 * @csspart form-control - The form control that wraps the label, combobox, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The combobox's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label,
 *     an `<input>` element.
 * @csspart listbox - The listbox container where the options are slotted
 *   and the filtered options list exists.
 * @csspart filtered-listbox - The container that wraps the filtered options.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 *
 * @animation combobox.show - The animation to use when showing the combobox.
 * @animation combobox.hide - The animation to use when hiding the combobox.
 */

@customElement('sd-combobox')
export default class SdCombobox extends SolidElement implements SolidFormControl {
  static styles: CSSResultGroup = [componentStyles, SolidElement.styles, styles, customStyles];

  static dependencies = {
    'sd-icon': SdIcon,
    'sd-popup': SdPopup
  };

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['sd-blur', 'sd-input']
  });

  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');

  private readonly localize = new LocalizeController(this);

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  private closeWatcher: CloseWatcher | null;

  /** The last value of a sd-option, that was selected by click or via keyboard navigation */
  private lastOptionValue = '';

  @query('.combobox') popup: SdPopup;

  @query('.combobox__inputs') combobox: HTMLSlotElement;

  @query('.combobox__display-input') displayInput: HTMLInputElement;

  @query('.combobox__value-input') valueInput: HTMLInputElement;

  @query('.combobox__listbox') listbox: HTMLSlotElement;

  @query('.listbox__options') filteredWrapper: HTMLSlotElement;

  @query('slot:not([name])') private defaultSlot: HTMLSlotElement;

  @state() private hasFocus = false;

  @state() displayLabel = '';

  @state() selectedOption: SdOption | undefined;

  @state() filteredOptions: (SdOption | SdOptgroup | undefined)[] = [];

  /** The name of the combobox, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The current value of the combobox, submitted as a name/value pair with form data.
   */
  @property() value = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /** The combobox's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Placeholder text to show as a hint when the combobox is empty. */
  @property() placeholder = '';

  /** Disables the combobox control. */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /** Adds a clear button when the combobox is not empty. */
  @property({ type: Boolean }) clearable = false;

  /**
   * Indicates whether or not the combobox is open.
   * You can toggle this attribute to show and hide the listbox, or you can use the `show()`
   * and `hide()` methods and this attribute will reflect the combobox's open state.
   */
  @property({ reflect: true, type: Boolean }) open = false;

  /**
   * Enable this option to prevent the listbox from being clipped,
   * when the component is placed inside a container with `overflow: auto|scroll`.
   * Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** The combobox's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /**
   * The preferred placement of the combobox's menu.
   * Note that the actual placement may vary as needed to keep the listbox inside of the viewport.
   */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /** The combobox's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element.
   * This attribute allows you to place the form control outside of a form and associate it
   * with the form that has this `id`.
   * The form must be in the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The combobox's required attribute. */
  @property({ reflect: true, type: Boolean }) required = false;

  /**
   * A function that customizes the rendered option. The first argument is the option, the second
   * is the query string, which is typed into the combobox.
   * The function should return either a Lit TemplateResult or a string containing trusted HTML
   * to render in the shown list of filtered options.
   * If the query string should be highlighted use the `highlightOptionRenderer` function.
   */
  @property() getOption: OptionRenderer = defaultOptionRenderer;

  /**
   * A function used to filter options in the combobox component.
   * The default filter method is a case- and diacritic-insensitive string comparison.
   *
   * @param option - The option to be filtered.
   * @param queryString - The query string used for filtering.
   * @returns A boolean indicating whether the option should be included in the filtered results.
   */
  // eslint-disable-next-line class-methods-use-this
  @property() filter: (option: SdOption, queryString: string) => boolean = (option, queryStr) => {
    const normalizedOption = normalizeString(option.getTextLabel());
    const normalizedQuery = normalizeString(queryStr);
    return normalizedOption.includes(normalizedQuery);
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
    // initially set the displayLabel if the value was set via property initially
    this.displayLabel = this.value;
    this.formControlController.updateValidity();
  }

  protected get options() {
    const renderOption = (option: SdOption) => {
      const queryString = this.displayInput.value;
      const optionHtml = this.getOption(option, queryString);
      return html`${typeof optionHtml === 'string' ? unsafeHTML(optionHtml) : optionHtml}`;
    };

    return this.filteredOptions.map((item: SdOption | SdOptgroup) => {
      if (item.tagName.toLowerCase() === 'sd-optgroup') {
        Array.from(item.children).forEach((option: HTMLElement) => {
          if (option.tagName.toLowerCase() === 'sd-option') {
            // @todo: What was the intention of this?
            // renderOption does nothing with the group itself
            renderOption(option as SdOption);
          }
        });

        return item;
      }
      return renderOption(item as SdOption);
    });
  }

  private addOpenListeners() {
    //
    // Listen on the root node instead of the document in case the elements are inside a shadow root
    //
    document.addEventListener('focusin', this.handleDocumentFocusIn);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);

    // If the component is rendered in a shadow root,
    // we need to attach the focusin listener there too
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener('focusin', this.handleDocumentFocusIn);
    }

    if ('CloseWatcher' in window) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      this.closeWatcher?.destroy();
      // @ts-expect-error Check later
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
      this.closeWatcher = new CloseWatcher();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // @ts-expect-error Check later
      this.closeWatcher.onclose = () => {
        if (this.open) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      };
    }
  }

  private removeOpenListeners() {
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);

    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener('focusin', this.handleDocumentFocusIn);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    this.closeWatcher?.destroy();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleDocumentFocusIn = (event: KeyboardEvent) => {
    // Close when focusing out of the combobox
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.hide();
    }
  };

  /* eslint-disable @typescript-eslint/no-floating-promises */
  // eslint-disable-next-line complexity
  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest('.combobox__clear') !== null;

    if (isClearButton) {
      return;
    }

    // Close when pressing escape and open / clear input if not open
    if (event.key === 'Escape') {
      if (this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      } else if (!this.open) {
        this.clearCombobox();
      }
    }

    // Handle enter.
    if (event.key === 'Enter') {
      const currentOption = this.getCurrentOption();

      // Pressing enter when focused on an input should submit the form like a native input, but
      // we wait a tick before submitting to allow users to cancel the keydown event if they need to
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (!this.open && !hasModifier) {
        setTimeout(() => {
          if (!event.defaultPrevented) {
            this.formControlController.submit();
          }
        });
        return;
      }

      if (!this.open || currentOption?.disabled) {
        return;
      }

      // Update the value based on the current selection and close it
      if (currentOption) {
        const oldValue = this.lastOptionValue;
        this.setSelectedOption(currentOption);

        if (this.value !== oldValue) {
          // Emit after updating
          this.updateComplete.then(() => {
            this.emit('sd-input');
            this.emit('sd-change');
          });
        }
      }

      this.hide();
      this.displayInput.focus({ preventScroll: true });
      return;
    }

    // Navigate options
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      // Prevent scrolling
      event.preventDefault();
      event.stopPropagation();
      // Open it
      if (!this.open) {
        this.show();
      }

      this.selectNextOption(event.key === 'ArrowDown');
    }

    // Move cursor
    if (['Home', 'End'].includes(event.key)) {
      // Prevent scrolling
      event.preventDefault();
      event.stopPropagation();
      if (event.key === 'Home') {
        this.displayInput.setSelectionRange(0, 0);
      } else if (event.key === 'End') {
        this.displayInput.setSelectionRange(this.displayInput.value.length, this.displayInput.value.length);
      }
    }
  };
  /* eslint-enable @typescript-eslint/no-floating-promises */

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the combobox
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.hide();
    }
  };

  private handleLabelClick() {
    this.displayInput.focus();
  }

  private handleComboboxMouseDown() {
    // Ignore disabled controls
    if (this.disabled) {
      return;
    }

    const toggleListboxOpen = () => (this.open ? this.hide() : this.show());

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    toggleListboxOpen().then(() => {
      setTimeout(() => this.displayInput.focus({ preventScroll: true }));
    });
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      return;
    }

    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();
    this.clearCombobox();
  }

  private clearCombobox() {
    if (this.value !== '') {
      this.value = '';
      this.displayInput.value = '';
      this.lastOptionValue = '';
      this.setSelectedOption(undefined);
      this.displayInput.focus({ preventScroll: true });

      // Emit after update
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.updateComplete.then(() => {
        this.emit('sd-clear');
        this.emit('sd-input');
        this.emit('sd-change');
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private preventLoosingFocus(event: MouseEvent) {
    // Don't lose focus of the input or propagate events
    event.stopPropagation();
    event.preventDefault();
  }

  /* eslint-disable @typescript-eslint/no-floating-promises */
  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('sd-option');
    const oldValue = this.lastOptionValue;
    if (option && !option.disabled) {
      this.setSelectedOption(option);

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('sd-input');
          this.emit('sd-change');
        });
      }

      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }
  }
  /* eslint-enable @typescript-eslint/no-floating-promises */

  /**
   * Selects the following or previous option.
   *
   * @param isNext - A boolean indicating whether to select the following option (true)
   *                 or the previous option (false).
   */
  private selectNextOption(isNext: boolean) {
    const filteredOptions = this.getAllFilteredOptions();

    if (filteredOptions.length === 0) {
      return;
    }

    const currentOption = this.getCurrentOption();
    // @ts-expect-error Check later
    const currentIndex = filteredOptions.indexOf(currentOption);
    let newIndex = Math.max(0, currentIndex);

    if (isNext) {
      const nextIndex = currentIndex + 1;
      newIndex = nextIndex > filteredOptions.length - 1 ? 0 : nextIndex;
    } else {
      const previousIndex = currentIndex - 1;
      newIndex = previousIndex < 0 ? filteredOptions.length - 1 : previousIndex;
    }
    this.setCurrentOption(filteredOptions[newIndex]);
    // @ts-expect-error Check later
    scrollIntoView(this.getCurrentOption(), this.listbox, 'vertical', 'auto');
  }

  private getAllFilteredOptions() {
    return [...this.filteredWrapper.querySelectorAll<SdOption>('sd-option')];
  }

  private getCurrentOption() {
    return this.getAllFilteredOptions().find(option => option.current);
  }

  // Sets the current option, which is the option the user is currently interacting with
  // (e.g. via keyboard). Only one option may be "current" at a time.
  private setCurrentOption(option: SdOption | null) {
    const allOptions = this.getAllFilteredOptions();

    // Clear selection
    this.displayInput.removeAttribute('aria-activedescendant');

    allOptions.forEach(el => {
      // eslint-disable-next-line no-param-reassign
      el.current = false;
      el.setAttribute('aria-selected', 'false');
    });

    // Select the target option
    if (option) {
      // eslint-disable-next-line no-param-reassign
      option.current = true;
      option.setAttribute('aria-selected', 'true');
      this.displayInput.setAttribute('aria-activedescendant', option.id);
    }
  }

  /**
   * Updates the selected options cache, the current value, and the display value
   */
  private setSelectedOption(option: SdOption | undefined) {
    this.selectedOption = option;

    // Check if the selected option has a value,
    // if not take the text content of the option otherwise the input text
    const optionValue = this.selectedOption?.value || this.selectedOption?.getTextLabel();

    if (option) {
      this.lastOptionValue = optionValue || '';
    }

    // Update the value
    this.value = optionValue ?? this.displayInput.value;

    // Update validity and display label
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.updateComplete.then(() => {
      this.displayLabel = this.selectedOption?.getTextLabel() ?? this.displayInput.value;
      this.formControlController.updateValidity();
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  @watch('filter', { waitUntilFirstUpdate: true })
  handleFilterChange() {
    this.createComboboxOptionsFromQuery(this.value);
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);

    // Close the listbox when the control is disabled
    if (this.disabled) {
      this.open = false;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.handleOpenChange();
    }
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    // set the display label here in case of the value was set via property only
    this.displayLabel = this.value;
    this.createComboboxOptionsFromQuery(this.value);
    this.setCurrentOption(null);
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      if (this.filteredOptions.length === 0) {
        // Don't open the listbox if there are no options
        this.open = false;
        this.emit('sd-error');
        return;
      }

      // Show
      this.emit('sd-show');
      this.addOpenListeners();

      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;

      const { keyframes, options } = getAnimation(this, 'combobox.show', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);

      this.emit('sd-after-show');
      return;
    }

    this.setCurrentOption(null);
    this.displayInput.removeAttribute('aria-activedescendant');
    // Hide
    this.emit('sd-hide');
    this.removeOpenListeners();

    await stopAnimations(this);
    const { keyframes, options } = getAnimation(this, 'combobox.hide', { dir: this.localize.dir() });
    await animateTo(this.popup.popup, keyframes, options);
    this.listbox.hidden = true;
    this.popup.active = false;

    this.emit('sd-after-hide');
  }

  /**
   * Shows the listbox. If it is not possible to open the listbox, because there are no
   * appropriate filtered options, a sd-error is emitted and the listbox stays closed.
   */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return Promise.race([waitForEvent(this, 'sd-after-show'), waitForEvent(this, 'sd-error')]);
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

  /**
   * Checks for validity but does not show a validation message.
   * Returns `true` when valid and `false` when invalid.
   */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
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

  private createComboboxOptionsFromQuery(queryString: string) {
    const optgroups: SdOptgroup[] = [];

    this.filteredOptions = this.getSlottedOptions()
      .filter(option => this.filter(option, queryString) || queryString === '')
      .map(option => {
        const clonedOption = option.cloneNode(true) as SdOption;

        // Check if the option has a sd-optgroup as parent
        const hasOptgroup = option.parentElement?.tagName.toLowerCase() === 'sd-optgroup';
        if (!hasOptgroup) {
          return clonedOption;
        }

        const optgroup = option.parentElement as SdOptgroup;
        const filteredOptgroup = optgroups.find(el => el.id === optgroup.id);

        // Check if the optgroup was already added to the filteredOptions.
        // It should only be added once!
        if (filteredOptgroup) {
          filteredOptgroup?.appendChild(clonedOption);
          return undefined;
        }

        const clonedOptgroup = optgroup.cloneNode() as SdOptgroup;
        clonedOptgroup.appendChild(clonedOption);
        optgroups.push(clonedOptgroup);
        return clonedOptgroup;
      })
      // we need to remove the undefined values here
      .filter(Boolean);
  }

  private async handleInput() {
    const inputValue = this.displayInput.value;
    this.value = inputValue;
    await this.updateComplete;
    this.open = this.filteredWrapper.children.length > 0;
    this.setSelectedOption(undefined);

    this.formControlController.updateValidity();
    this.emit('sd-input');
  }

  private handleChange() {
    // Only update the value and emit the event, if the change event occurred by
    // the user typing something in and removing focus of the combobox
    if (!this.selectedOption) {
      this.value = this.displayInput.value;
      // Update validity
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
      this.emit('sd-change');
    }
  }

  private getSlottedOptions() {
    return getAllOptions(getAssignedElementsForSlot(this.defaultSlot)).flat();
  }

  private getSlottedOptGroups(): SdOptgroup[] {
    return filterOnlyOptgroups(getAssignedElementsForSlot(this.defaultSlot));
  }

  /* eslint-disable no-param-reassign, @typescript-eslint/no-floating-promises */
  private handleDefaultSlotChange() {
    // Rerun this handler when <sd-option> is registered
    if (!customElements.get('sd-option')) {
      customElements.whenDefined('sd-option').then(() => this.handleDefaultSlotChange());
      return;
    }

    const slottedOptions = this.getSlottedOptions();
    const slottedOptgroups = this.getSlottedOptGroups();
    slottedOptions.forEach((option, index) => {
      option.id = option.id || `sd-combobox-option-${index}`;
    });

    slottedOptgroups.forEach((optgroup, index) => {
      optgroup.id = optgroup.id || `sd-combobox-optgroup-${index}`;
    });

    this.createComboboxOptionsFromQuery(this.value);

    if (this.hasFocus && this.value.length > 0 && !this.open) {
      this.show();
    }
  }
  /* eslint-enable no-param-reassign, @typescript-eslint/no-floating-promises */

  /* eslint-disable @typescript-eslint/unbound-method */
  // eslint-disable-next-line complexity
  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;

    return html`
      <div
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--has-help-text': hasHelpText,
          'form-control--has-label': hasLabel,
          'form-control--large': this.size === 'large',
          'form-control--medium': this.size === 'medium',
          'form-control--small': this.size === 'small'
        })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sd-popup
            class=${classMap({
              combobox: true,
              'combobox--bottom': this.placement === 'bottom',
              'combobox--disabled': this.disabled,
              'combobox--focused': this.hasFocus,
              'combobox--large': this.size === 'large',
              'combobox--medium': this.size === 'medium',
              'combobox--open': this.open,
              'combobox--placeholder-visible': isPlaceholderVisible,
              'combobox--small': this.size === 'small',
              'combobox--standard': true,
              'combobox--top': this.placement === 'top'
            })}
            placement=${this.placement}
            strategy=${this.hoist ? 'fixed' : 'absolute'}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox__inputs"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="combobox__prefix"></slot>

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
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
                aria-autocomplete="list"
                aria-owns="listbox"
                @input=${this.handleInput}
                @change=${this.handleChange}
              />

              <input
                class="combobox__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon
                ? html`
                    <button
                      part="clear-button"
                      class="combobox__clear"
                      type="button"
                      aria-label=${this.localize.term('clearEntry')}
                      @mousedown=${this.preventLoosingFocus}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sd-icon name="x-circle-fill" library="system"></sd-icon>
                      </slot>
                    </button>
                  `
                : ''}

              <slot name="suffix" part="suffix" class="combobox__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="combobox__expand-icon">
                <sd-icon library="system" name="chevron-down"></sd-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-labelledby="label"
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">${this.options}</div>
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </sd-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
  /* eslint-enable @typescript-eslint/unbound-method */
}

setDefaultAnimation('combobox.show', {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: 'ease' }
});

setDefaultAnimation('combobox.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-combobox': SdCombobox;
  }
}
