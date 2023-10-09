import '../icon/icon';
import { customElement } from '../../../src/internal/register-custom-element';
import {property, state } from 'lit/decorators.js';
import { html, css } from 'lit';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import cx from 'classix';

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://solid.union-investment.com/[storybook-link]/radio
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon
 *
 * @slot - The radio's label.
 *
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<sd-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */
@customElement('sd-radio')
export default class SdRadio extends SolidElement {
  @state() checked = false;
  @state() protected hasFocus = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

  /** The radio's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.setInitialAttributes();
    this.addEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  private addEventListeners() {
    this.addEventListener('blur', this.handleBlur);
    this.addEventListener('click', this.handleClick);
    this.addEventListener('focus', this.handleFocus);
  }

  private removeEventListeners() {
    this.removeEventListener('blur', this.handleBlur);
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('focus', this.handleFocus);
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private setInitialAttributes() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.setAttribute('tabindex', this.checked ? '0' : '-1');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  render() {
    return html`
      <span
        part="base"
        class=${cx(
          'radio inline-flex items-start font-[var(--sd-input-font-family)] text-[var(--sd-input-font-size-medium)] font-[var(--sd-input-font-family)] text-[var(--sd-input-label-color)] cursor-pointer align-middle',
          this.checked && 'radio--checked',
          this.disabled && 'opacity-50 cursor-not-allowed',
          this.hasFocus && 'radio--focused',
          {
            /* sizes, fonts */
            small: 'radio--small',
            medium: 'radio--medium',
            large: 'radio--large'
          }[this.size]
        )}
      >
        <span
          part="${`control${this.checked ? ' control--checked' : ''}`}"
          class="radio__control relative inline-flex items-center justify-center rounded-circle text-transparent bg-[var(--sd-input-background-color)] h-[var(--toggle-size)] w-[var(--toggle-size)]"
        >
          ${this.checked ? html` <sd-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sd-icon> `
            : ''}
        </span>

        <slot part="label" class="radio__label inline-block text-[var(--sd-input-label-color)] leading-[var(--toggle-size)] ms-"></slot>
      </span>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        display: block;
      }

      :host(:focus-visible) {
        outline: 0;
      }

      .radio--small {
        --toggle-size: var(--sd-toggle-size-small);
        font-size: var(--sd-input-font-size-small);
      }

      .radio--medium {
        --toggle-size: var(--sd-toggle-size-medium);
        font-size: var(--sd-input-font-size-medium);
      }

      .radio--large {
        --toggle-size: var(--sd-toggle-size-large);
        font-size: var(--sd-input-font-size-large);
      }

      .radio__checked-icon {
        display: inline-flex;
        width: var(--toggle-size);
        height: var(--toggle-size);
      }

      .radio__control {
        flex: 0 0 auto;
        border: solid var(--sd-input-border-width) var(--sd-input-border-color);
        transition: var(--sd-transition-fast) border-color, var(--sd-transition-fast) background-color,
          var(--sd-transition-fast) color, var(--sd-transition-fast) box-shadow;
      }

      /* Hover */
      .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
        border-color: var(--sd-input-border-color-hover);
        background-color: var(--sd-input-background-color-hover);
      }

      /* Checked */
      .radio--checked .radio__control {
        color: var(--sd-color-neutral-0);
        border-color: var(--sd-color-primary-600);
        background-color: var(--sd-color-primary-600);
      }

      /* Checked + hover */
      .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
        border-color: var(--sd-color-primary-500);
        background-color: var(--sd-color-primary-500);
      }

      /* Checked + focus */
      :host(:focus-visible) .radio__control {
        outline: var(--sd-focus-ring);
        outline-offset: var(--sd-focus-ring-offset);
      }

      /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
      .radio:not(.radio--checked) svg circle {
        opacity: 0;
      }

      .radio__label {
        margin-inline-start: 0.5em;
        user-select: none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-radio': SdRadio;
  }
}
