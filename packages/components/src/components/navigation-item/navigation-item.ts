import '../spinner/spinner';
import { css } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flexible button / link component that can be used to quickly build navigations.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-example
 *
 * @event sd-event-name - Emitted as an example.
 *
 * @slot - The navigation item's label.
 * @slot icon-left - A prefix icon or similar element.
 * @slot icon-right - A suffix icon or similar element.
 * @slot main - Main slot used to set additional content like badges. Available for horizontal and vertical orientations.
 * @slot description - *Vertical only: Slot used to provide a description for the navigation item.
 * @slot children - Slot used to provide nested child navigation elements. If provided, details and summary elements will be used. A chevron will be shown on the right side regardless of the chevron property.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon-left - The container that wraps the left icon area.
 * @csspart label - The button's label.
 * @csspart icon-right - The container that wraps the right icon area.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The accordion content.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-navigation-item')
export default class SdNavigationItem extends SolidElement {
  private readonly hasSlotController = new HasSlotController(
    this,
    '[default]',
    'icon-left',
    'icon-right',
    'main',
    'description',
    'children'
  );

  @query('a, button') button: HTMLButtonElement | HTMLLinkElement;
  @queryAssignedElements({ selector: 'sd-icon' }) _iconsInDefaultSlot!: HTMLElement[];

  @state()
  detailsOpen = false;

  /** The navigation item's href target. If provided, the navigation item will use an anchor tag, otherwise it will use a button tag. */
  @property({ reflect: true }) href = '';

  /** Indicates that the navigation item is currently selected. Aria-current should be added if true */
  @property({ type: Boolean, reflect: true })
  current = false;

  /** Disables the navigation item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The navigation item's font size. */
  @property({ reflect: true }) size: 'base' | 'larger' | 'smaller' = 'base';

  /** The navigation item's orientation. If true, properties below this point are not used. */
  @property({ type: Boolean, reflect: true }) horizontal = false;

  /** *Vertical Only: Appends a chevron to the right side of a navigation item. */
  @property({ type: Boolean, reflect: true }) chevron = false;

  /** *Vertical Only: Adds additional padding to navigation item's left side. */
  @property({ type: Boolean, reflect: true }) indented = false;

  /** *Vertical Only: Adds additional padding to navigation item's left and right sides. */
  @property({ type: Boolean, reflect: true }) relaxed = false;

  /** *Vertical Only: Adds additional padding to navigation item's left and right sides. */
  @property({ type: Boolean, reflect: true }) divider = false;

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private isButton() {
    return this.href ? false : true;
  }

  private isLink() {
    return this.href ? true : false;
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

  private setAriaCurrent() {
    if (this.current) {
      this.setAttribute('aria-current', 'page');
    } else {
      this.removeAttribute('aria-current');
    }
  }

  private handleClick(event: MouseEvent) {
    console.log('handleClick');
    const detailsElementOpen: boolean = this.shadowRoot?.querySelector('details')?.open || false;

    console.log(detailsElementOpen);

    this.emit('sd-toggle-details', { detail: { isOpen: detailsElementOpen } });

    this.detailsOpen = !this.detailsOpen;
  }

  private calculatePaddingX(): string {
    if (this.horizontal) return '';
    if (this.relaxed && this.indented) return 'pl-8 pr-4';
    if (this.relaxed) return 'px-4';
    if (this.indented) return 'pl-4';
    return '';
  }

  render() {
    // TODO: where is best to implement this logic?
    this.setAriaCurrent();

    const slots = {
      label: this.hasSlotController.test('[default]'),
      'icon-left': this.hasSlotController.test('icon-left'),
      'icon-right': this.hasSlotController.test('icon-right'),
      'icon-only': this._iconsInDefaultSlot.length > 0,
      main: this.hasSlotController.test('main'),
      description: this.hasSlotController.test('description'),
      children: this.hasSlotController.test('children')
    };
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : slots['children'] ? literal`summary` : literal`button`;
    const includeChildren = !this.href && slots['children'];

    // styles
    const horizontalPaddingBottom = this.horizontal ? 'pb-2' : 'pb-3';
    const hostDisplayStyle = this.horizontal
      ? html`<style>
          :host {
            display: inline-block;
          }
        </style>`
      : html`<style>
          :host {
            display: block;
          }
        </style>`;

    // conditional elements
    const chevron =
      (this.chevron || slots['children']) && !this.horizontal
        ? html`<sd-icon
            name="chevron-down"
            part="chevron"
            library="system"
            color="currentColor"
            class=${cx('h-6 w-6', includeChildren ? (this.detailsOpen ? 'rotate-180' : 'rotate-0') : 'rotate-[270deg]')}
          ></sd-icon>`
        : null;

    const divider =
      this.divider && !this.horizontal
        ? html`<sd-divider
            part="divider"
            class=${cx(
              'w-[calc(100%-64px)] absolute top-[-1px] left-0',
              this.horizontal ? 'mx-4' : 'mx-8',
              this.calculatePaddingX()
            )}
          ></sd-divider>`
        : null;

    const iconLeftSlot = slots['icon-left']
      ? html`<slot name="icon-left" part="icon-left" class="inline-flex justify-center items-center mr-2"></slot>`
      : null;

    const iconRightSlot = slots['icon-right']
      ? html`<slot name="icon-right" part="icon-right" class="inline-flex justify-center items-center mr-2"></slot>`
      : null;

    const mainSlot =
      slots['main'] && !this.horizontal ? html`<slot name="main" part="main" class=${cx('inline mr-4')}></slot>` : null;

    const descriptionSlot =
      slots['description'] && !this.horizontal
        ? html`<slot
            name="description"
            part="description"
            class=${cx(
              'inline-block text-black text-sm',
              includeChildren ? 'grow' : 'w-full',
              horizontalPaddingBottom,
              this.calculatePaddingX()
            )}
          ></slot>`
        : null;

    const childrenSlot = slots['children'] && !this.horizontal ? html`<slot name="children"></slot>` : null;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    const root = html`
      ${hostDisplayStyle}

      <${tag}
        part="base"
        class=${cx(
          'hover:bg-neutral-200 transition-all min-h-[48px] cursor-pointer relative',
          this.horizontal ? 'border-b-4 px-4' : 'border-l-4 pl-[28px] pr-8',
          this.current ? 'border-accent' : 'border-transparent',
          this.disabled ? 'text-neutral-500 border-neutral-500 pointer-events-none' : 'text-primary',
          { base: 'text-base', larger: 'text-lg', smaller: 'text-[14px]' }[this.size],
          includeChildren ? 'flex flex-col' : 'inline-block w-full'
        )}
        @click=${!isLink ? this.handleClick : null}
        ${isLink ? literal`href=` : literal``}${this.href} 
      >
        <span class=${cx(
          'relative pt-3 inline-flex justify-between items-center',
          includeChildren ? 'grow' : 'w-full',
          slots['description'] ? 'pb-1' : horizontalPaddingBottom,
          this.calculatePaddingX()
        )}>
          <span class="inline-flex items-center justify-center">
            ${iconLeftSlot}
            <slot part="label" class=${cx('inline', slots['icon-right'] || slots['main'] ? 'mr-2' : '')}></slot>
            ${iconRightSlot}
          </span>
          <span class="inline-flex items-center">
            ${mainSlot}
            ${chevron}
          </span>
        </span>
        ${descriptionSlot}
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */

    return includeChildren
      ? html`${divider}
          <details class="relative flex max-w-[100%]">${root}${childrenSlot}</details>`
      : html`${divider}${root}`;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,

    css`
      :host {
        box-sizing: border-box;
        position: relative;
      }

      :host > * {
        text-align: left;
      }

      summary {
        display: inline;
        list-style: none;
        cursor: pointer;
      }

      ::slotted(sd-icon) {
        /* TODO: calculate 1.5 times font size? */
        font-size: calc(var(--tw-varspacing));
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-navigation-item': SdNavigationItem;
  }
}
