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
 * @slot children - Slot used to provide nested child navigation elements. If present, a chevron will be shown on the right side.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon-left - The container that wraps the left icon area.
 * @csspart label - The button's label.
 * @csspart icon-right - The container that wraps the right icon area.
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
  @property({ type: Boolean, reflect: true }) current = false;

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

  private handleClick(event: MouseEvent) {
    console.log('handleClick');
    const detailsElementOpen: boolean = this.shadowRoot?.querySelector('details')?.open || false;

    console.log(detailsElementOpen);

    this.emit('sd-toggle-details', { detail: { isOpen: detailsElementOpen } });

    this.detailsOpen = !this.detailsOpen;
  }

  render() {
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
    const horizontalPaddingBottom = this.horizontal ? 'pb-2' : 'pb-3';

    const calculatePaddingX = (): string => {
      if (this.relaxed && this.indented) {
        return 'pl-8 pr-4';
      }

      if (this.relaxed) {
        return 'px-4';
      }

      if (this.indented) {
        return 'pl-4';
      }

      return '';
    };

    const horizontalStyle = this.horizontal
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

    // Conditionally Style Root
    const rootClasses = cx(
      'hover:bg-neutral-200 transition-all relative',
      this.horizontal ? 'border-b-4 px-4' : 'border-l-4 pl-[28px] pr-8',
      this.current ? 'border-accent' : 'border-transparent',
      this.disabled && 'text-neutral-500 border-neutral-500',
      { base: 'text-base', larger: 'text-lg', smaller: 'text-[14px]' }[this.size],
      includeChildren ? '' : 'inline-block w-full'
    );
    const chevronClasses = cx(
      'h-6 w-6',
      includeChildren ? (this.detailsOpen ? 'rotate-180' : 'rotate-0') : 'rotate-[270deg]'
    );

    // Additional Elements
    const chevron = html`<sd-icon
      name="chevron-down"
      library="system"
      color="currentColor"
      class=${chevronClasses}
    ></sd-icon>`;

    const divider = this.divider
      ? html`<sd-divider
          class=${cx(
            'w-[calc(100%-64px)] absolute top-[-1px] left-0',
            this.horizontal ? 'mx-4' : 'mx-8',
            calculatePaddingX()
          )}
        ></sd-divider>`
      : null;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    const root = html`
      ${horizontalStyle}

      <${tag}
      part="base"
      class=${rootClasses}
      @click=${this.handleClick}
      >
        <span class=${cx(
          'relative pt-3 inline-flex justify-between w-full',
          slots['description'] ? horizontalPaddingBottom : 'pb-1',
          calculatePaddingX()
        )}>
          <span>
            <slot name="icon-left" part="icon-left" class=${cx('inline mr-2')}>L</slot>
            <span class=${cx(
              slots['icon-left'] && 'ml-2',
              slots['icon-right'] && 'mr-2'
            )}><slot part="label">Label</slot></span>
            <slot name="icon-right" part="icon-right">R</slot>
          </span>
          <span class="inline-flex items-center">
            <slot name="main" part="main" class=${cx('inline mr-4')}>main</slot>
            ${chevron}
          </span>
        </span>
        <slot name="description" part="description" class=${cx(
          'inline-block w-full bg-primary-100',
          horizontalPaddingBottom,
          calculatePaddingX()
        )}>description</slot>
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */

    return !this.href && slots['children']
      ? html`${divider}
          <details class="w-full relative flex">${root}<slot name="children"></slot></details>`
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
        background-color: lime;
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

      sd-spinner {
        --indicator-color: currentColor;
        --track-color: var(--tw-varcolor-200);
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
    'sd-navigation-item': SdNavigationItem;
  }
}
