import '../button/button';
import '../icon/icon';
import { animateTo } from '../../internal/animate';
import { classMap } from 'lit/directives/class-map.js';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';
import type SdButton from '../button/button';

/**
 * //TODO FIX THIS
 * @summary File selectors allow selecting an arbitrary number of files for uploading.
 * @documentation https://solid.union-investment.com/[storybook-link]/file-selector
 * @status experimental
 * @since 6.28.0
 *
 * @dependency sd-button
 * @dependency sd-icon
 *
 * @slot label - The file selector's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the file selector. Alternatively, you can use the `help-text` attribute.
 *
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sd-error - Emitted when multiple files are selected via drag and drop, without the `multiple` property being set.
 * @event sd-focus - Emitted when the control gains focus.
 * @event sd-input - Emitted when the control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-wrapper - The wrapper around the button and text value.
 * @csspart button - The sd-button acting as a file input trigger.
 * @csspart button__base - The sd-button's exported `base` part.
 * @csspart value - The chosen files or placeholder text for the file input.
 * @csspart droparea - The element wrapping the drop zone.
 * @csspart droparea-background - The background of the drop zone.
 * @csspart droparea-icon - The container that wraps the icon for the drop zone.
 * @csspart droparea-value - The text for the drop zone.
 *
 * @cssproperty --sd-form-control-border-radius - The border radius of the file selector.
 * @cssproperty --sd-form-control-color-border - The border color of the file selector.
 *
 * @animation file-selector.iconDrop - The animation to use for the file icon when a file is dropped.
 * @animation file-selector.text.disappear - The disappear animation to use for the file placeholder text when a file is dropped.
 * @animation file-selector.text.appear - The appear animation to use for the file placeholder text when a file is dropped.
 */
@customElement('sd-file-selector')
export default class SdFileSelector extends SolidElement implements SolidFormControl {
  protected readonly formControlController: FormControlController = new FormControlController(this, {
    assumeInteractionOn: ['sd-change'],
    value: (el: SdFileSelector) => el.files
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  public localize = new LocalizeController(this);

  /** @internal */
  @state() private userIsDragging = false;

  /** @internal */
  @state() showInvalidStyle = false;

  /**
   * The selected files as a `FileList` object. The `FileList` behaves like an array, so you can get the number of
   * selected files via its `length` property.
   */
  @property({ type: Object })
  set files(v: FileList | null) {
    if (this.input) {
      this.input.files = v;
    }
  }

  get files() {
    return this.input?.files ?? null;
  }

  /** The name of the file selector, submitted as a name/value pair with form data. */
  @property({ type: String, reflect: true }) name = '';

  /**
   * The value of the file selector contains a string that represents the path of the selected file. If multiple
   * files are selected, the value represents the first file in the list. The only valid value when setting a file
   * input is an empty string.
   */
  @property({ type: String })
  set value(v: string) {
    if (this.input) {
      this.input.value = v;
    }
  }

  get value() {
    return this.input?.value ?? '';
  }

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /** The file selector's size. */
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'lg';

  /** The file selector's label. If you need to display HTML, use the `label` slot instead. */
  @property({ type: String, reflect: true }) label = '';

  /** The file selector's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ type: String, attribute: 'help-text', reflect: true }) helpText = '';

  /** Disables the file selector. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Styles the input as if it was disabled and enables aria-disabled */
  @property({ type: Boolean, reflect: true, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /** Sets the file selector to a readonly state. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Draw the file selector as a drop area. */
  @property({ type: Boolean, reflect: true }) droparea = false;

  /** Comma-separated list of supported file types (e.g. `.jpg,.png,image/*`). */
  @property({ type: String }) accept = '';

  //TODO CHECK THIS
  /**
   * Specifies which camera to use for capture of image or video data. Works only when not using a droparea.
   */
  @property({ type: String }) capture: 'user' | 'environment';

  /** Indicates whether the user can select more than one file. Has no effect if `webkitdirectory` is set. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /**
   * Indicates that the file selector should let the user select directories instead of files. Non-standard, but
   * supported by all major browsers.
   */
  @property({ type: Boolean, reflect: true }) webkitdirectory = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ type: String, reflect: true }) form = '';

  /** Makes the input a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Suppresses the value from being displayed in the file selector. */
  @property({ attribute: 'hide-value', type: Boolean, reflect: true }) hideValue = false;

  @query('.input__control') input: HTMLInputElement;
  @query('.button') button: SdButton;
  @query('.droparea') dropareaWrapper: HTMLDivElement;
  @query('.droparea__icon') dropareaIcon: HTMLSpanElement;
  @query('.input__value') inputChosen: HTMLSpanElement;
  @query('#invalid-message') invalidMessage: HTMLDivElement;

  /** Gets the validity state object. */
  get validity() {
    return this.input.validity;
  }

  /** Gets the validation message. */
  get validationMessage() {
    return this.input.validationMessage;
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled || this.visuallyDisabled);
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  //TODO THIS IS NOT WORKING AS EXPECTED, NEEDS TO BE TESTED
  /** Sets focus on the button or droparea. */
  focus(options?: FocusOptions) {
    if (this.droparea) {
      this.dropareaWrapper?.focus(options);
      return;
    }

    this.button?.focus(options);
  }
  //TODO THIS IS NOT WORKING AS EXPECTED, NEEDS TO BE TESTED
  /** Removes focus from the button or droparea. */
  blur() {
    if (this.droparea) {
      this.dropareaWrapper?.blur();
      return;
    }

    this.button?.blur();
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleFiles(files: FileList | null) {
    if (!files) {
      this.value = '';
      return;
    }
    this.files = files;
  }

  //TODO CHECK WHAT IT DOES
  private async handleTransferItems(items: DataTransferItemList | null): Promise<FileList> {
    if (!items) {
      this.value = '';
      throw new Error('No proper items found');
    }

    const entries = Array.from(items).map(item => item.webkitGetAsEntry());
    const filesPromises = entries.map(entry => this.getFilesFromEntry(entry));
    const filesArray = await Promise.all(filesPromises);
    const files = filesArray.flat();

    const dataTransfer = new DataTransfer();
    files.forEach(f => dataTransfer.items.add(f));
    return dataTransfer.files;
  }
  //TODO CHECK WHAT IT DOES
  private async getFilesFromEntry(entry: FileSystemEntry | null): Promise<File[]> {
    if (!entry) {
      return [];
    }

    if (entry.isFile) {
      return new Promise<File[]>((resolve, reject) => {
        (entry as FileSystemFileEntry).file(file => resolve([file]), reject);
      });
    }

    if (entry.isDirectory) {
      return new Promise<File[]>((resolve, reject) => {
        const dirReader = (entry as FileSystemDirectoryEntry).createReader();
        dirReader.readEntries(nestedEntries => {
          Promise.all(nestedEntries.map(e => this.getFilesFromEntry(e)))
            .then(nested => resolve(nested.flat()))
            .catch(reject);
        });
      });
    }

    return [];
  }

  private handleClick(e: Event) {
    e.preventDefault();
    this.input.click();
  }

  private handleChange(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    this.emit('sd-input');
    this.emit('sd-change');
  }

  private handleDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (this.disabled || this.readonly) return;

    this.userIsDragging = true;
  }

  private handleDragLeave(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (this.disabled || this.readonly) return;

    this.userIsDragging = false;
  }

  private async handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (this.disabled || this.readonly) return;
    if (!e.dataTransfer) return;

    const files = await this.handleTransferItems(e.dataTransfer.items);

    this.userIsDragging = false;

    if (!files) return;

    // webkitdirectory also allows multiple files.
    if (!this.multiple && !this.webkitdirectory && files.length > 1) {
      this.emit('sd-error');
      return;
    }

    const disappearAnimation = getAnimation(this.inputChosen, 'file-selector.text.disappear', {
      dir: this.localize.dir()
    });
    const appearAnimation = getAnimation(this.inputChosen, 'file-selector.text.appear', {
      dir: this.localize.dir()
    });

    if (this.droparea) {
      const dropIconAnimation = getAnimation(this.dropareaIcon, 'file-selector.iconDrop', {
        dir: this.localize.dir()
      });

      animateTo(this.dropareaIcon, dropIconAnimation.keyframes, dropIconAnimation.options);
    }

    await animateTo(this.inputChosen, disappearAnimation.keyframes, disappearAnimation.options);
    this.handleFiles(files);
    await animateTo(this.inputChosen, appearAnimation.keyframes, appearAnimation.options);

    this.input.dispatchEvent(new Event('change'));
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private handleBlur() {
    this.emit('sd-blur');
  }

  private renderValue() {
    let hasFiles = false;
    let fileChosenLabel = this.localize.term('numFilesSelected', 0, this.webkitdirectory);

    if (this.files && this.files.length > 0) {
      hasFiles = true;
      fileChosenLabel =
        this.files.length === 1
          ? this.files[0].name
          : this.localize.term('numFilesSelected', this.files.length, this.webkitdirectory);
    }

    return html`
      <span
        class=${cx(
          'input__value truncate',
          this.hideValue && 'hidden',
          !hasFiles ? 'text-neutral-700' : 'text-black',
          (this.disabled || this.visuallyDisabled) && 'text-neutral-500'
        )}
        part="value"
      >
        ${fileChosenLabel}
      </span>
    `;
  }

  private renderDroparea() {
    return html`
      <div
        class=${cx(
          'droparea',
          this.disabled || this.visuallyDisabled || this.readonly ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
        @click=${this.handleClick}
        @keypress=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        tabindex=${this.disabled ? -1 : 0}
        part="droparea"
      >
        <!-- //TODO CHECK BORDER RADIUS CHECK BACKGROUND COLOR ON userIsDragging (figma is using primary-50 that doesn't exists) -->
        <div
          part="droparea-background"
          class=${cx(
            'droparea__background w-full flex flex-row items-center gap-4 p-6 form-control-border-radius border border-dotted transition-colors ease-in-out duration-medium',
            this.disabled || this.visuallyDisabled
              ? 'border-neutral-500 bg-neutral-100'
              : this.showInvalidStyle
                ? 'border-error'
                : this.userIsDragging
                  ? 'bg-primary-100'
                  : 'form-control-color-border hover:bg-neutral-200'
          )}
        >
          <!-- //TODO CHECK ICON SIZE -->
          <div
            part="droparea-icon"
            class=${cx('droparea__icon inline-flex h-[72px]', this.disabled ? 'text-neutral-500' : 'text-primary')}
          >
            <sd-icon library="_internal" name="upload"></sd-icon>
          </div>
          <!-- //TODO CHECK TITLE COLOR -->
          <p part="droparea-value">
            <span
              class=${cx(
                'block sd-headline sd-headline--size-lg',
                this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'text-primary'
              )}
            >
              ${this.localize.term(
                this.webkitdirectory ? 'folderDragDrop' : this.multiple ? 'fileDragDropMultiple' : 'fileDragDrop'
              )}
            </span>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `;
  }

  private renderButton() {
    let buttonText = this.localize.term('fileButtonText');
    if (this.multiple) buttonText = this.localize.term('fileButtonTextMultiple');
    if (this.webkitdirectory) buttonText = this.localize.term('folderButtonText');

    return html`
      <div part="button-wrapper" class="button__wrapper flex flex-row items-center gap-4">
        <sd-button
          class="button"
          @click=${this.handleClick}
          ?disabled=${this.disabled || this.visuallyDisabled || this.readonly}
          exportparts="base:button__base"
          part="button"
          size=${this.size}
          variant="secondary"
        >
          ${buttonText}
        </sd-button>
        ${this.renderValue()}
      </div>
    `;
  }

  render() {
    const hasLabel = this.label ? true : !!this.hasSlotController.test('label');
    const hasHelpText = this.helpText ? true : !!this.hasSlotController.test('help-text');

    const textSize = { sm: 'text-sm', md: 'text-base', lg: 'text-base' }[this.size];

    return html`
      <div
        class=${classMap({
          'form-control': true,
          'form-control--droparea': this.droparea,
          'form-control--has-help-text': hasHelpText,
          'form-control--has-label': hasLabel,
          'form-control--large': this.size === 'lg',
          'form-control--medium': this.size === 'md',
          'form-control--small': this.size === 'sm',
          'form-control--user-dragging': this.userIsDragging
        })}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
        ${hasLabel
          ? html`
              <label
                aria-hidden=${hasLabel ? 'false' : 'true'}
                class=${cx(
                  'form-control__label inline-block mb-2',
                  textSize,
                  this.disabled ? 'text-neutral-500' : 'form-control-color-text'
                )}
                for="input"
                part="form-control-label"
              >
                <slot name="label">${this.label}</slot>
              </label>
            `
          : null}

        <div class="form-control-input" part="form-control-input">
          ${this.droparea ? this.renderDroparea() : this.renderButton()}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class=${cx(
            'text-sm mt-1',
            hasHelpText ? 'block' : 'hidden',
            this.disabled ? 'text-neutral-500' : 'text-neutral-700'
          )}
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          ${this.helpText}
        </slot>

        <input
          accept=${this.accept}
          aria-describedby="help-text"
          @change=${this.handleChange}
          class="input__control sr-only"
          capture=${ifDefined(this.capture)}
          ?disabled=${this.disabled || this.readonly}
          id="input"
          @invalid=${this.handleInvalid}
          ?multiple=${this.multiple}
          name=${ifDefined(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        />
      </div>
      ${this.formControlController.renderInvalidMessage(this.size)}
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS.
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block w-full;
      }

      :host([required]) .form-control__label::after {
        content: ' *';
      }

      .input__control {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `
  ];
}

setDefaultAnimation('file-selector.iconDrop', {
  keyframes: [{ scale: 1 }, { scale: 0.7 }, { scale: 1 }],
  options: { duration: 600, easing: 'ease-out' }
});

setDefaultAnimation('file-selector.text.disappear', {
  keyframes: [{ opacity: 1 }, { opacity: 0, transform: 'translateY(-40%)' }],
  options: { duration: 300, easing: 'cubic-bezier(0.45, 1.45, 0.8, 1)' }
});

setDefaultAnimation('file-selector.text.appear', {
  keyframes: [{ opacity: 0, transform: 'translateY(40%)' }, { opacity: 1 }],
  options: { duration: 300, easing: 'cubic-bezier(0.45, 1.45, 0.8, 1)' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-file-selector': SdFileSelector;
  }
}
