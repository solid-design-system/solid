import '../icon/icon';
import '../spinner/spinner';
import { customElement, property, query, state } from 'lit/decorators.js';
import { css } from 'lit';
import { FormControlController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';
import cx from 'classix';

/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://solid.union-investment.com/[storybook-link]/button
 * @status stable
 * @since 2.0
 *
 * @dependency sd-icon
 * @dependency sd-spinner
 *
 * @event sd-blur - Emitted when the button loses focus.
 * @event sd-focus - Emitted when the button gains focus.
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
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
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  @query('a, button') button: HTMLButtonElement | HTMLLinkElement;

  @state() invalid = false;
  @property() title = ''; // make reactive to pass through

  /** The button's theme variant. */
  @property({ reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'cta' = 'primary';

  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /**
   * Draws a circular icon button. When this attribute is present, the button expects a single `<sd-icon>` in the
   * default slot.
   */
  @property({ type: Boolean, reflect: true }) circle = false;

  /**
   * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   */
  @property() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   */
  @property() name = '';

  /**
   * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   */
  @property() value = '';

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  @property() download?: string;

  /**
   * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
   * value of this attribute must be an id of a form in the same document or shadow root as the button.
   */
  @property() form: string;

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
  @property({ attribute: 'formtarget' }) formTarget: '_self' | '_blank' | '_parent' | '_top' | string;

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
    if (this.disabled || this.loading) {
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

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).checkValidity();
    }

    return true;
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
      prefix: this.hasSlotController.test('prefix'),
      suffix: this.hasSlotController.test('suffix')
    };

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag} part="base" class=${cx(
      'focus:focus-outline font-medium h-varspacing leading-[calc(var(--tw-varspacing)-2px)] border inline-flex items-stretch justify-center w-full font-semibold font-sans no-underline select-none whitespace-nowrap align-middle duration-50 transition-colors duration-200 ease-in-out cursor-[inherit]',
      this.loading && 'relative cursor-wait',
      this.disabled && 'cursor-not-allowed',
      this.circle && 'px-0 w-varspacing',
      /**
       * Anatomy
       * */
      this.circle ? 'rounded-full' : 'rounded-md',
      {
        /* sizes, fonts */
        small: 'text-sm varspacing-8 px-4',
        medium: 'text-base varspacing-10 px-4',
        large: 'text-base varspacing-12 px-4',
      }[this.size],
      {
        /* variants */
        primary: 'text-white bg-primary border-transparent hover:bg-primary-500 hover:text-primary-100 active:bg-primary-800 active:text-primary-200 disabled:bg-neutral-500',
        secondary: 'text-primary bg-white border-primary hover:text-primary-500 hover:bg-primary-100 hover:border-primary-500 active:text-primary-800 active:bg-primary-200 active:border-primary-800 disabled:text-neutral-500 disabled:border-neutral-500',
        tertiary: 'text-primary bg-white border-transparent hover:text-primary-500 hover:bg-primary-100 active:text-primary-800 active:bg-primary-200 disabled:text-neutral-500',
        cta: 'text-white bg-accent border-transparent hover:bg-accent-300 active:bg-accent-500 disabled:bg-neutral-500',
      }[this.variant],
    )
      }
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
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class=${cx(
        'flex flex-auto items-center pointer-events-none',
        this.circle && 'hidden',
        this.loading && 'invisible',
        slots.prefix && (this.size === 'small' ? 'mr-1' : 'mr-2')
      )}></slot>
        <slot part="label" class=${cx(
        'inline-block',
        this.loading && 'invisible',
      )
      }></slot>
        <slot name="suffix"
          part="suffix"
          class=${cx(
        'flex flex-auto items-center pointer-events-none',
        this.loading && 'invisible',
        this.circle && 'hidden',
        slots.suffix && (this.size === 'small' ? 'ml-1' : 'ml-2')
      )}>
        </slot>
      ${this.loading
        ? html`<sd-spinner
          class="absolute text-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          size="small"
          variant=${this.disabled ? 'disabled' : this.variant}
        ></sd-spinner>`
        : ''}
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }



  /**
   * Inherits Tailwindclasses and includes additional styling.
  */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
        width: auto;
        cursor: pointer;
      }

    [part="label"]::slotted(sd-icon) {
      vertical-align: -2px;
    }

    sd-spinner{
      --indicator-color: currentColor;
      --track-color: var(--tw-varcolor-200);
    }


    /*
    * Badges:
    * Slotted badges are positioned absolutely in the top right corner of the button.
    */

    ::slotted(sd-badge) {
      position: absolute;
      top: 0;
      right: 0;
      translate: 50% -50%;
      pointer-events: none;
    }

    /*
    * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
    * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
    * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
    * buttons and we style them here instead.
    */

    :host(.sd-button-group__button--first:not(.sd-button-group__button--last)) .button {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    :host(.sd-button-group__button--inner) .button {
      border-radius: 0;
    }

    :host(.sd-button-group__button--last:not(.sd-button-group__button--first)) .button {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }

    /* All except the first */
    :host(.sd-button-group__button:not(.sd-button-group__button--first)) {
      margin-inline-start: calc(-1 * var(--sd-input-border-width));
    }

    /* Add a visual separator between solid buttons */
    :host(
        .sd-button-group__button:not(
            .sd-button-group__button--first,
            .sd-button-group__button--radio,
            [variant='default']
          ):not(:hover)
      )
      .button:after {
      content: '';
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      bottom: 0;
      border-left: solid 1px rgb(128 128 128 / 33%);
      mix-blend-mode: multiply;
    }

    /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
    :host(.sd-button-group__button--hover) {
      z-index: 1;
    }

    /* Focus and checked are always on top */
    :host(.sd-button-group__button--focus),
    :host(.sd-button-group__button[checked]) {
      z-index: 2;
    }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-button': SdButton;
  }
}
