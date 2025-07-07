import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { getTextContent, HasSlotController } from '../../internal/slot';
import { property, query } from 'lit/decorators.js';
import { SubmenuController } from './submenu-controller';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Menu items provide options for the user to pick from in a menu.
 * @status experimental
 * @since 5.9.0
 *
 * @dependency sd-icon
 * @dependency sd-popup
 *
 * @slot - The menu item's label.
 * @slot icon-indent - Used to prepend an icon or similar element to the menu item.
 * @slot submenu - Used to denote a nested menu.
 *
 * @csspart base - The component's base wrapper.
 * @csspart checked-icon - The icon shown when the menu item is checked.
 * @csspart icon-indent - The icon shown when the menu item has an indent.
 * @csspart label - The menu item's label.
 * @csspart submenu-icon - The icon shown when the menu item has a submenu.
 *
 * @cssproperty --submenu-offset - The offset of the submenu from the parent menu item.
 */
@customElement('sd-menu-item')
export default class SdMenuItem extends SolidElement {
  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('part="base"') menuItem: HTMLElement;

  /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
  @property() type: 'normal' | 'checkbox' = 'normal';

  /** Draws the item in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Draws the menu item in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property() value = '';

  @property({ type: Boolean, reflect: true }) chevron = false;

  private readonly hasSlotController = new HasSlotController(this, 'submenu');
  private submenuController: SubmenuController = new SubmenuController(this, this.hasSlotController);

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleHostClick);
    this.addEventListener('mouseover', this.handleMouseOver);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
    this.removeEventListener('mouseover', this.handleMouseOver);
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

  private handleHostClick = (event: MouseEvent) => {
    // Prevent the click event from being emitted when the button is disabled
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  private handleMouseOver = (event: MouseEvent) => {
    this.focus();
    event.stopPropagation();
  };

  @watch('checked')
  handleCheckedChange() {
    // For proper accessibility, users have to use type="checkbox" to use the checked attribute
    if (this.checked && this.type !== 'checkbox') {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }

    // Only checkbox types can receive the aria-checked attribute
    if (this.type === 'checkbox') {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    } else {
      this.removeAttribute('aria-checked');
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
  }

  @watch('type')
  handleTypeChange() {
    if (this.type === 'checkbox') {
      this.setAttribute('role', 'menuitemcheckbox');
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    } else {
      this.setAttribute('role', 'menuitem');
      this.removeAttribute('aria-checked');
    }
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel(): string {
    return getTextContent(this.defaultSlot);
  }

  isSubmenu() {
    return this.hasSlotController.test('submenu');
  }

  render() {
    const isSubmenuExpanded = this.submenuController.isExpanded();

    const slots = {
      label: this.hasSlotController.test('[default]'),
      iconIndent: this.hasSlotController.test('icon-indent')
    };

    return html`<div
      id="anchor"
      part="base"
      class=${cx(
        'relative flex items-stretch whitespace-nowrap py-3 px-4 no-wrap',
        this.disabled
          ? 'outline-none cursor-not-allowed text-neutral-500 hover:bg-transparent'
          : 'cursor-pointer text-primary hover:bg-neutral-200',
        this.isSubmenu() && isSubmenuExpanded && 'submenu-expanded'
      )}
      .disabled=${this.disabled}
      ?aria-haspopup="${this.isSubmenu()}"
      ?aria-expanded="${isSubmenuExpanded ? true : false}"
    >
      ${this.type === 'checkbox'
        ? html` <span
            part="checked-icon"
            class=${cx(
              'flex items-center justify-center grow-0 shrink-0 basis-auto',
              this.checked ? 'visible' : 'invisible'
            )}
          >
            <sd-icon name="status-check" library="sd-status-assets" aria-hidden="true"></sd-icon>
          </span>`
        : ''}
      ${slots.iconIndent
        ? html`<slot
            name="icon-indent"
            part="icon-indent"
            class="flex items-center grow-0 shrink-0 basis-auto mr-2"
          ></slot>`
        : ''}

      <slot
        part="label"
        class="inline-flex grow shrink basis-auto text-ellipsis overflow-hidden"
        @slotchange=${this.handleDefaultSlotChange}
      ></slot>

      ${this.chevron || this.isSubmenu()
        ? html`<span part="submenu-icon" class="flex items-center justify-center grow-0 shrink-0 basis-auto ml-3">
            <sd-icon name="chevron-right" library="_internal" aria-hidden="true" class="h-6 w-6"></sd-icon>
          </span>`
        : ''}
      ${this.submenuController.renderSubmenu()}
    </div>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --submenu-offset: -6px;
        @apply block;
      }

      :host(:focus-visible) {
        @apply outline-none;
      }

      ::slotted(sd-icon) {
        @apply w-6 h-6;
      }

      [part='checked-icon'] {
        @apply mr-3;
      }

      .submenu-expanded::after {
        @apply content-[''] fixed z-[calc(var(z-dropdown)-1)] top-0 right-0 bottom-0 left-0;
        clip-path: polygon(
          var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
          var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
          var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
        );
      }

      :host(:hover:not([aria-disabled='true'], :focus-visible)) [part='base'] {
        @apply bg-neutral-200 outline-none;
      }

      :host(:focus-visible:not([aria-disabled='true'])) [part='base'] {
        @apply focus-outline outline-offset-[-2px];
      }

      :host(:hover) [part='base'] {
        @apply outline-none;
      }

      sd-popup::part(popup) {
        @apply z-dropdown bg-white;
        margin-left: var(--submenu-offset);
      }

      ::slotted(sd-menu) {
        max-width: var(--auto-size-available-width) !important;
        max-height: var(--auto-size-available-height) !important;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-menu-item': SdMenuItem;
  }
}
