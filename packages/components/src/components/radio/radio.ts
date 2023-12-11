import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary A radio allows to select only one value from a set of options. Clicking on an unchecked radio will deselect the other one(s).
 * @documentation https://solid.union-investment.com/[storybook-link]/radio
 * @status stable
 * @since 1.20.0
 *
 * @slot - The radio's label.
 *
 * @event sd-blur - Emitted when the control loses focus.
 * @event sd-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control--unchecked - The radio control when the radio is unchecked.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked - The dot inside the radio component when the radio is checked.
 * @csspart label - The container that wraps the radio's label.
 */
@customElement('sd-radio')
export default class SdRadio extends SolidElement {
  /** A Boolean attribute which, if present, indicates that this radio button is the default check one in the group. */
  @state() checked = false;
  @state() protected hasFocus = false;

  /** The radio's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /**  A Boolean attribute which, if present, marks the radio Button valid or invalid  */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** A Boolean attribute which, if present, disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

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
          'sd-radio group inline-flex items-start items-center text-base leading-normal text-black cursor-pointer align-middle',
          this.disabled && 'hover:cursor-not-allowed',
          {
            /* sizes, fonts */
            sm: 'small-size text-sm',
            lg: 'text-base'
          }[this.size]
        )}
      >
        <span
          part="${`${this.checked ? 'control--checked' : 'control--unchecked'}`}"
          class=${cx(
            'flex-initial shrink-0 relative inline-flex items-center justify-center border rounded-full bg-white h-4 w-4',
            (this.disabled && 'border-neutral-500') ||
              (this.invalid && 'border-error hover:border-error-400 group-hover:border-error-400') ||
              (this.checked && 'border-accent hover:border-accent-550 group-hover:border-accent-550') ||
              'border-neutral-800 hover:bg-neutral-200 group-hover:bg-neutral-200'
          )}
        >
          ${this.checked
            ? html`
                <span
                  part="checked"
                  class=${cx(
                    'rounded-full inline-flex text-white border bg-accent h-2.5 w-2.5',
                    (this.disabled && 'bg-neutral-500') ||
                      (this.invalid && 'bg-error hover:bg-error-400 group-hover:bg-error-400') ||
                      (this.checked && 'bg-accent hover:bg-accent-550 group-hover:bg-accent-550') ||
                      'bg-neutral-800'
                  )}
                ></span>
              `
            : ''}
        </span>

        <slot
          part="label"
          class=${cx(
            'ml-2 select-none inline-block',
            (this.disabled && 'text-neutral-500') || (this.invalid && 'text-error') || 'text-black'
          )}
        >
        </slot>
      </span>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        @apply block;
      }

      :host(:focus-visible) {
        @apply outline-none;
      }

      /* Checked + focus */
      :host(:focus-visible) [part='control--checked'],
      :host(:focus-visible) [part='control--unchecked'] {
        @apply outline outline-2 outline-primary outline-offset-2;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-radio': SdRadio;
  }
}
