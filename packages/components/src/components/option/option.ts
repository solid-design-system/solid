import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import formControlStyles from '../../styles/form-control.styles';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://solid.union-investment.com/[storybook-link]/option
 * @status stable
 * @since 1.24.0 // TODO UPDATE BEFORE MERGE!!!
 *
 * @dependency sd-icon
 *
 * @slot - The option's label.
 * @slot left - Used to prepend an icon or similar element to the menu item.
 * @slot right - Used to append an icon or similar element to the menu item.
 *
 * @csspart checked-icon - The checked icon, an `<sd-icon>` element.
 * @csspart base - The component's base wrapper.
 * @csspart label - The option's label.
 * @csspart left - The container that wraps the left.
 * @csspart right - The container that wraps the right.
 */
@customElement('sd-option')
export default class SdOption extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'default', 'left', 'right');

  private cachedTextLabel: string;
  // @ts-expect-error - Controller is currently unused
  private readonly localize = new LocalizeController(this);

  @query('[part="base"]') defaultSlot: HTMLSlotElement;

  @state() current = false; // the user has keyed into the option, but hasn't selected it yet (shows a highlight)
  @state() selected = false; // the option is selected and has aria-selected="true"
  @state() hasHover = false; // we need this because Safari doesn't honor :hover styles while dragging

  /**
   * The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   */
  @property({ reflect: true }) value = '';

  /** Draws the option in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'option');
    this.setAttribute('aria-selected', 'false');
  }

  private handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    // When the label changes, emit a slotchange event so parent controls see it
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit('slotchange', { bubbles: true, composed: false, cancelable: false });
    }
  }

  private handleMouseEnter() {
    this.hasHover = true;
  }

  private handleMouseLeave() {
    this.hasHover = false;
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('selected')
  handleSelectedChange() {
    this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
  }

  @watch('value')
  handleValueChange() {
    if (this.value.includes(' ')) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, '_');
    }
  }

  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    return (this.textContent ?? '').trim();
  }

  render() {
    // Slots
    const slots = {
      default: this.hasSlotController.test('default'),
      left: this.hasSlotController.test('left'),
      right: this.hasSlotController.test('right')
    };

    return html`
      <div
        part="base"
        class=${cx(
          'px-2 py-3 flex items-center w-full transition-all',
          this.hasHover && !this.disabled ? 'bg-neutral-200' : '',
          this.disabled ? 'text-neutral-500 cursor-not-allowed' : 'cursor-pointer',
          this.current && 'bg-neutral-200',
          this.selected && 'bg-primary text-white'
        )}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <!-- TODO: substitute sd-checkbox? -->
        <!-- <sd-icon part="checked-icon" class="hidden" name="check" library="system" aria-hidden="true"></sd-icon> -->
        ${slots['left'] ? html`<slot name="left" part="left" class="inline-flex mr-2"></slot>` : ''}
        <slot part="label" class="inline-block flex-grow" @slotchange=${this.handleDefaultSlotChange}></slot>
        ${slots['right'] ? html`<slot name="right" part="right" class="inline-flex ml-2"></slot>` : ''}
      </div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    formControlStyles,
    SolidElement.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
        width: 100%;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-option': SdOption;
  }
}
