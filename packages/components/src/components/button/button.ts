import '../spinner/spinner';
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { FormControlController, validValidityState } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';

/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://solid.union-investment.com/[storybook-link]/button
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon
 * @dependency sd-spinner
 *
 * @event sd-blur - Emitted when the button loses focus.
 * @event sd-focus - Emitted when the button gains focus.
 * @event sd-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.

 *
 * @slot - The button's label.
 * @slot icon-left - A prefix icon or similar element.
 * @slot icon-right - A suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon-left - The container that wraps the left icon area.
 * @csspart label - The button's label.
 * @csspart icon-right - The container that wraps the right icon area.
 */
@customElement('sd-button')
export default class SdButton extends SolidElement implements SolidFormControl {
  private readonly formControlController = new FormControlController(this, {
    form: input => {
      // Buttons support a form attribute that points to an arbitrary form, so if this attribute it set we need to query
      // the form from the same root using its id
      if (input.hasAttribute('form')) {
        const doc = input.getRootNode() as Document | ShadowRoot;
        const formId = input.getAttribute('form')!;
        return doc.getElementById(formId) as HTMLFormElement;
      }

      // Fall back to the closest containing form
      return input.closest('form');
    }
  });
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'icon-left', 'icon-right');

  @query('a, button') button: HTMLButtonElement | HTMLLinkElement;
  @queryAssignedElements({ selector: 'sd-icon' }) _iconsInDefaultSlot!: HTMLElement[];

  /** @internal */
  @state() protected invalid = false;

  @property({ type: String, reflect: true }) title = ''; // make reactive to pass through

  /** The button's theme variant. */
  @property({ type: String, reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'cta' = 'primary';

  /** Inverts the button. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** The button's size. */
  @property({ type: String, reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Styles the button as if it was disabled and enables aria-disabled */
  @property({ type: Boolean, reflect: true, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /**
   * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   */
  @property({ type: String, reflect: true }) type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   */
  @property({ type: String, reflect: true }) name = '';

  /**
   * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   */
  @property() value = '';

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property({ type: String, reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  @property({ reflect: true }) download?: string;

  /**
   * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
   * value of this attribute must be an id of a form in the same document or shadow root as the button.
   */
  @property({ reflect: true }) form: string;

  /** Used to override the form owner's `action` attribute. */
  @property({ attribute: 'formaction' }) formAction: string;

  /** Used to override the form owner's `enctype` attribute.  */
  @property({ attribute: 'formenctype' })
  formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

  /** Used to override the form owner's `method` attribute.  */
  @property({ attribute: 'formmethod' }) formMethod: 'post' | 'get';

  /** Used to override the form owner's `novalidate` attribute. */
  @property({ attribute: 'formnovalidate', type: Boolean }) formNoValidate: boolean;

  /** Used to override the form owner's `target` attribute. */
  @property({ attribute: 'formtarget' }) formTarget: '_self' | '_blank' | '_parent' | '_top';

  /** Gets the validity state object */
  get validity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).validity;
    }

    return validValidityState;
  }

  /** Gets the validation message */
  get validationMessage() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).validationMessage;
    }

    return '';
  }

  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled || this.loading || this.visuallyDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.type === 'submit') {
      this.formControlController.submit(this);
    }

    if (this.type === 'reset') {
      this.formControlController.reset(this);
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private isButton() {
    return this.href ? false : true;
  }

  private isLink() {
    return this.href ? true : false;
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.isButton()) {
      // Disabled form controls are always valid
      this.formControlController.setValidity(this.disabled);
    }
  }

  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }

  /** Checks for validity but does not show the browser's validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).checkValidity();
    }

    return true;
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).reportValidity();
    }

    return true;
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    if (this.isButton()) {
      (this.button as HTMLButtonElement).setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    const slots = {
      label: this.hasSlotController.test('[default]'),
      'icon-left': this.hasSlotController.test('icon-left'),
      'icon-right': this.hasSlotController.test('icon-right'),
      'icon-only': this._iconsInDefaultSlot.length > 0
    };

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
      part="base"
      class=${cx(
        `group relative z-10 font-md leading-[calc(var(--tw-varspacing)-2px)] no-underline
        w-full h-varspacing whitespace-nowrap align-middle inline-flex items-stretch justify-center
        transition-colors duration-fast ease-in-out rounded-default
        select-none cursor-[inherit]`,
        !this.inverted ? 'focus-visible:focus-outline' : 'focus-visible:focus-outline-inverted',
        this.loading && 'relative cursor-wait',
        (this.disabled || this.visuallyDisabled) && 'cursor-not-allowed',
        slots['icon-only'] && 'px-0 w-varspacing',
        /**
         * Anatomy
         * */
        {
          /* sizes, fonts */
          sm: 'text-sm varspacing-8 px-4',
          md: 'text-base varspacing-10 px-4',
          lg: 'text-base varspacing-12 px-4'
        }[this.size],
        {
          /* variants */
          primary: !this.inverted
            ? `text-white ${
                this.visuallyDisabled
                  ? 'bg-neutral-500 hover:bg-neutral-500'
                  : 'bg-primary hover:text-primary-100 active:text-primary-200'
              }
          disabled:bg-neutral-500`
            : `${
                this.visuallyDisabled
                  ? 'bg-neutral-500 text-white hover:bg-neutral-500 active:bg-neutral-500'
                  : 'text-primary bg-white hover:text-primary-500 active:text-primary-800'
              }
          disabled:bg-neutral-600 disabled:text-white`,
          secondary: !this.inverted
            ? `border ${
                this.visuallyDisabled
                  ? 'text-neutral-500 border-neutral-500 hover:text-neutral-500 hover:border-neutral-500 active:text-neutral-500 active:border-neutral-500'
                  : 'text-primary border-primary hover:text-primary-500 hover:border-primary-500 active:text-primary-800 active:border-primary-800'
              }
          disabled:text-neutral-500 disabled:border-neutral-500`
            : `border ${
                this.visuallyDisabled
                  ? 'text-neutral-600 border-neutral-600 hover:text-neutral-600 hover:border-neutral-600 active:text-neutral-600 active:border-neutral-600'
                  : 'text-white border-white hover:text-primary-100 hover:border-primary-100 active:text-primary-200'
              }
          disabled:text-neutral-600 disabled:border-neutral-600`,
          tertiary: !this.inverted
            ? `${
                this.visuallyDisabled
                  ? 'text-neutral-500 hover:text-neutral-500 active:text-neutral-500'
                  : 'text-primary hover:text-primary-500 active:text-primary-800'
              }
          disabled:text-neutral-500`
            : `${this.visuallyDisabled ? 'text-neutral-600 hover:text-neutral-600 active:text-neutral-600' : 'text-white hover:text-primary-100 active:text-primary-200'}
          disabled:text-neutral-600`,
          cta: `text-white ${this.visuallyDisabled ? 'bg-neutral-500 hover:bg-neutral-500 active:bg-neutral-500' : 'bg-accent-500'}
          ${!this.inverted ? 'disabled:bg-neutral-500' : 'disabled:bg-neutral-600'} disabled:text-white`
        }[this.variant]
      )}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : this.type)}
        title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled || this.visuallyDisabled ? 'true' : 'false'}
        aria-labelledby="content"
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <div class=${cx(
          'absolute inset-0 rounded-default -z-10 overflow-hidden pointer-events-none ',
          (this.disabled || this.visuallyDisabled) && 'hidden'
        )}>
          <div class='absolute inset-0 w-full h-full transition-all duration-fast translate-y-full group-hover:translate-y-0 group-hover:mt-[-22%] mt-[11%]'>
            <div class=${cx(
              'absolute right-0 min-w-full min-h-full aspect-square skew-y-[-11deg] mt-[11%]',
              {
                primary: !this.inverted
                  ? 'bg-primary-500 group-active:bg-primary-800'
                  : 'bg-primary-100 group-active:bg-primary-200',
                secondary: !this.inverted
                  ? 'bg-primary-100 group-active:bg-primary-200'
                  : 'bg-primary-500 group-active:bg-primary-800',
                tertiary: !this.inverted
                  ? 'bg-primary-100 group-active:bg-primary-200'
                  : 'bg-primary-500 group-active:bg-primary-800',
                cta: 'bg-accent-550 group-active:bg-accent-700'
              }[this.variant]
            )}></div>
            <div class=${cx(
              'absolute w-full h-full mt-[22%]',
              {
                primary: !this.inverted
                  ? 'bg-primary-500 group-active:bg-primary-800'
                  : 'bg-primary-100 group-active:bg-primary-200',
                secondary: !this.inverted
                  ? 'bg-primary-100 group-active:bg-primary-200'
                  : 'bg-primary-500 group-active:bg-primary-800',
                tertiary: !this.inverted
                  ? 'bg-primary-100 group-active:bg-primary-200'
                  : 'bg-primary-500 group-active:bg-primary-800',
                cta: 'bg-accent-550 group-active:bg-accent-700'
              }[this.variant]
            )}></div>
          </div>
        </div>

        <slot name="icon-left" part="icon-left" class=${cx(
          'flex flex-auto items-center pointer-events-none',
          slots['icon-only'] && 'hidden',
          this.loading && 'invisible',
          slots['icon-left'] &&
            {
              sm: 'mr-1',
              md: 'mr-2',
              lg: 'mr-2'
            }[this.size]
        )}></slot>
        <slot part="label" id="content" class=${cx(
          'inline-flex items-center justify-center',
          slots['icon-only'] && 'pointer-events-none',
          this.loading && 'invisible'
        )}
        >
        </slot>
        <slot name="icon-right"
          part="icon-right"
          class=${cx(
            'flex flex-auto items-center pointer-events-none',
            this.loading && 'invisible',
            slots['icon-only'] && 'hidden',
            slots['icon-right'] &&
              {
                sm: 'ml-1',
                md: 'ml-2',
                lg: 'ml-2'
              }[this.size]
          )}>
        </slot>
      ${
        this.loading
          ? html`<sd-spinner
              class="${cx('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}"
            ></sd-spinner>`
          : ''
      }
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-block cursor-pointer w-auto relative;
      }

      sd-spinner {
        --indicator-color: currentColor;
        --track-color: var(--tw-varcolor-200);
      }

      /*
    * Badges:
    * Slotted badges are positioned absolutely in the top right corner of the button.
    */

      ::slotted(sd-badge) {
        @apply absolute top-0 right-0 !translate-x-1/2 !-translate-y-1/2 pointer-events-none;
      }

      /**
       * sd-icons should automatically resize correctly based on the button size.
       */

      ::slotted(sd-icon),
      sd-spinner {
        font-size: calc(var(--tw-varspacing) / 2);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-button': SdButton;
  }
}
