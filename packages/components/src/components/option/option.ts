import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://solid.union-investment.com/[storybook-link]/option
 * @status stable
 * @since 1.30.0
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

  @query('[part="base"]') defaultSlot: HTMLSlotElement;

  /**
   * the user has keyed into the option, but hasn't selected it yet (shows a highlight)
   * @internal
   */
  @state() current = false;
  /**
   * the option is selected and has aria-selected="true"
   * @internal
   */
  @state() selected = false;
  /**
   *  we need this because Safari doesn't honor :hover styles while dragging
   * @internal
   */
  @state() hasHover = false;

  /** The option's size is inherited automatically from the `size` attribute of the parent `sd-select`. */
  @property({ reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** Prefixes a styled checkbox to the option. Enabled automatically in `sd-select` when attribute `checklist` is set to `true`. */
  @property({ type: Boolean, reflect: true }) checkbox = false;

  /** Draws the option in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   */
  @property({ reflect: true }) value = '';

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
          'px-4 flex items-center w-full transition-all text-left text-base relative text-black',
          {
            sm: 'text-sm py-1',
            md: 'text-base py-2',
            lg: 'text-base py-3'
          }[this.size],
          this.disabled ? 'text-neutral-500 cursor-not-allowed' : 'cursor-pointer',
          this.hasHover && !this.disabled ? 'bg-neutral-200' : '',
          this.current && 'bg-neutral-200'
        )}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <span
          class=${cx(
            'absolute w-full left-0 top-0 pointer-events-none transition-all duration-150 border-l-4 h-[calc(100%-8px)]',
            this.selected && !this.checkbox ? 'border-accent' : 'border-transparent',
            this.disabled && 'border-neutral-500 top-1',
            !this.disabled && this.hasHover ? 'h-full top-0' : 'top-1'
          )}
        ></span>
        ${this.checkbox
          ? html`<span
              id="control"
              part="control ${this.selected ? ' control--checked' : 'control--unchecked'}"
              class=${cx(
                'relative flex flex-initial items-center justify-center border rounded-sm h-4 w-4 mr-2',
                this.disabled ? 'border-neutral-500' : this.selected ? 'bg-accent border-accent' : 'border-neutral-800'
              )}
            >
              ${this.selected
                ? html`
                    <sd-icon
                      part="checked-icon"
                      class="text-white w-3 h-3"
                      library="system"
                      name="status-hook"
                    ></sd-icon>
                  `
                : ''}
            </span>`
          : ''}
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
    SolidElement.styles,
    css`
      :host {
        @apply block relative w-full !outline-none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-option': SdOption;
  }
}
