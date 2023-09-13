import '../spinner/spinner';
import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flexible button / link component that can be used to quickly build navigations. Takes one of 3 forms: link (overrides all other if 'href' is provided), button (default), or accordion (if 'children' slot present).
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-divider
 *
 * @event sd-show - Emitted when the navigation item has has children, no href, and is clicked while HTML details are hidden.
 * @event sd-hide - Emitted when the navigation item has has children, no href, and is clicked while HTML details are shown.
 *
 * @slot - The navigation item's label.
 * @slot icon-left - A prefix icon or similar element.
 * @slot icon-right - A suffix icon or similar element.
 * @slot main - Main slot used to set additional content like badges. Available for horizontal and vertical orientations.
 * @slot description - *Vertical only: Slot used to provide a description for the navigation item.
 * @slot children - Slot used to provide nested child navigation elements. If provided, details and summary elements will be used. A chevron will be shown on the right side regardless of the chevron property.
 *
 * @csspart divider - The component's optional top divider.
 * @csspart base - The component's base wrapper.
 * @csspart icon-left - The container that wraps the left icon area.
 * @csspart label - The component's label.
 * @csspart icon-right - The container that wraps the right icon area.
 * @csspart main - The container that wraps the main slot area (primarily used for badges).
 * @csspart chevron - The container that wraps the chevron.
 *
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

  /** The navigation item's href target. If provided, the navigation item will use an anchor tag otherwise it will use a button tag. The 'children' slot and accordion behavior will be ignored if an 'href' is provided. */
  @property({ reflect: true }) href = '';

  /** Indicates that the navigation item is currently selected. The aria-current attribute is set to "page" on the host if true. */
  @property({ type: Boolean, reflect: true })
  current = false;

  /** Disables the navigation item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The navigation item's font size. */
  @property({ reflect: true }) size: 'base' | 'larger' | 'smaller' = 'base';

  /** The navigation item's orientation. If true, properties below this point are not used. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  /** *Vertical Only: Appends a chevron to the right side of a navigation item. */
  @property({ type: Boolean, reflect: true }) chevron = false;

  /** *Vertical Only: Adds additional padding to navigation item's left side. */
  @property({ type: Boolean, reflect: true }) indented = false;

  /** *Vertical Only: Adds additional padding to navigation item's left and right sides. */
  @property({ type: Boolean, reflect: true }) relaxed = false;

  /** *Vertical Only: Adds additional padding to navigation item's left and right sides. */
  @property({ type: Boolean, reflect: true }) divider = false;

  /** *Vertical Only if 'children' slot and no 'href': Reflects HTML details element state and allows control from parent. */
  @property({ type: Boolean, reflect: true }) open = false;

  private isButton(): boolean {
    return !this.href && !this.hasSlotController.test('children');
  }

  private isLink(): boolean {
    return !!this.href;
  }

  private isAccordion(): boolean {
    return !this.href && this.hasSlotController.test('children');
  }

  private handleClickButton(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  private handleClickSummary(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.disabled) {
      if (this.open) {
        this.hideDetails();
      } else {
        this.showDetails();
      }
    }
  }

  private hideDetails() {
    this.open = false;
    this.emit('sd-hide', { cancelable: true });
  }

  private showDetails() {
    this.open = true;
    this.emit('sd-show', { cancelable: true });
  }

  private calculatePaddingX(absoluteElement?: boolean): string {
    if (absoluteElement) {
      if (this.relaxed && this.indented) return 'pl-16 pr-12';
      if (this.relaxed) return 'px-12';
      if (this.indented) return 'pl-12 pr-8';
      return 'px-8';
    } else {
      if (this.relaxed && this.indented) return 'pl-8 pr-4';
      if (this.relaxed) return 'px-4';
      if (this.indented) return 'pl-4';
      return '';
    }
  }

  render() {
    const slots = {
      label: this.hasSlotController.test('[default]'),
      main: this.hasSlotController.test('main'),
      description: this.hasSlotController.test('description'),
      children: this.hasSlotController.test('children')
    };
    const tag = this.isLink() ? literal`a` : slots['children'] ? literal`summary` : literal`button`;
    const horizontalPaddingBottom = this.vertical ? 'pb-3' : 'pb-2';

    const divider =
      this.divider && this.vertical
        ? html`<sd-divider
            part="divider"
            class=${cx('w-full transition-all absolute -top-[1px] left-0', this.calculatePaddingX(true))}
          ></sd-divider>`
        : null;

    const mainSlot =
      slots['main'] && this.vertical
        ? html`<slot name="main" part="main" class=${cx('inline-flex justify-center items-center mr-4')}></slot>`
        : null;

    const descriptionSlot =
      slots['description'] && this.vertical
        ? html`<slot
            name="description"
            part="description"
            class=${cx(
              'inline-block text-sm',
              this.isAccordion() ? 'grow' : 'w-full',
              horizontalPaddingBottom,
              this.calculatePaddingX()
            )}
          ></slot>`
        : null;

    const childrenSlot = slots['children'] && this.vertical ? html`<slot name="children"></slot>` : null;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    const root = html`
      <${tag}
        part="base"
        class=${cx(
          'hover:bg-neutral-200 transition-all min-h-[48px] cursor-pointer relative',
          this.vertical ? 'border-l-4 pl-[28px] pr-8' : 'border-b-4 px-4',
          this.current ? 'border-accent' : 'border-transparent',
          this.disabled ? 'text-neutral-500 border-neutral-500 pointer-events-none' : 'text-primary',
          { base: 'text-base', larger: 'text-lg', smaller: 'text-[14px]' }[this.size],
          this.isAccordion() ? 'flex flex-col' : 'inline-block w-full'
        )}
        aria-controls=${ifDefined(this.isAccordion() ? 'navigation-item-details' : undefined)}
        aria-current=${ifDefined(this.current ? 'page' : undefined)}
        aria-disabled=${this.disabled}
        ?disabled=${ifDefined(this.isButton() ? this.disabled : undefined)}
        href=${ifDefined(this.href || undefined)}
        role=${this.isLink() ? 'link' : 'button'}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this.isAccordion() ? this.handleClickSummary : this.isButton() ? this.handleClickButton : undefined}
      >
        ${divider}
        <span class=${cx(
          'relative pt-3 inline-flex justify-between items-center',
          this.isAccordion() ? 'grow' : 'w-full',
          slots['description'] ? 'pb-1' : horizontalPaddingBottom,
          this.calculatePaddingX()
        )}>
          <span class="inline-flex items-center flex-auto">
            <slot part="label" class=${cx('inline', slots['main'] ? 'mr-2' : '')}></slot>
          </span>
          <span class="inline-flex items-center">
            ${mainSlot}
            ${
              (this.chevron || slots['children']) && this.vertical
                ? html`<sd-icon
                    name="chevron-down"
                    part="chevron"
                    library="system"
                    color="currentColor"
                    class=${cx(
                      'h-6 w-6',
                      this.isAccordion() ? (this.open ? 'rotate-180' : 'rotate-0') : 'rotate-[270deg]'
                    )}
                  ></sd-icon>`
                : ''
            }
          </span>
        </span>
        ${descriptionSlot}
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */

    return this.isAccordion()
      ? html`${divider}
          <details id="navigation-item-details" ?open=${this.open} class="relative flex">
            ${root}${childrenSlot}
          </details>`
      : html`${root}`;
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

      details summary::-webkit-details-marker {
        display: none;
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
