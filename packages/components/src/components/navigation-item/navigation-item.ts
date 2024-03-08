import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flexible button / link component that can be used to quickly build navigations. Takes one of 3 forms: link (overrides all other if 'href' is provided), button (default), or accordion (if 'children' slot defined).
 * @status stable
 * @since 1.15.0
 *
 * @dependency sd-divider
 *
 * @event sd-show - Emitted when the navigation item has has children, no href, and is clicked while HTML details are hidden.
 * @event sd-hide - Emitted when the navigation item has has children, no href, and is clicked while HTML details are shown.
 *
 * @slot - The navigation item's label.
 * @slot description - *Vertical only: Slot used to provide a description for the navigation item.
 * @slot children - Slot used to provide nested child navigation elements. If provided, details and summary elements will be used. A chevron will be shown on the right side regardless of the chevron property.
 *
 * @csspart base - The component's base wrapper including children.
 * @csspart content-wrapper - The component's content wrapper.
 * @csspart content - The component's content excluding children.
 * @csspart chevron - The container that wraps the chevron.
 * @csspart description - The component's description area below its main content.
 * @csspart divider - The component's optional top divider.
 *
 */
@customElement('sd-navigation-item')
export default class SdNavigationItem extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'description', 'children');

  /** The navigation item's href target. If provided, the navigation item will use an anchor tag otherwise it will use a button tag. The 'children' slot and accordion behavior will be ignored if an 'href' is provided. */
  @property({ reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is defined. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is defined. */
  @property() download?: string;

  /** Indicates that the navigation item is currently selected. The aria-current attribute is set to "page" on the host if true. */
  @property({ type: Boolean, reflect: true }) current = false;

  /** Disables the navigation item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The navigation item's font size. */
  @property({ reflect: true }) size: 'base' | 'lg' | 'sm' = 'base';

  /** The navigation item's orientation. If false, properties below this point are not used. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  /** Appends a chevron to the right side of a navigation item. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) chevron = false;

  /** Adds additional padding to navigation item's left side. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) indented = false;

  /** Adds additional padding to navigation item's left and right sides. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) relaxed = false;

  /** Adds additional padding to navigation item's left and right sides. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) divider = false;

  /** Reflects HTML details element state and allows control from parent. Only used if `vertical` is true, no `href`is undefined, and `children` is defined. */
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

  private calculatePaddingX(): string {
    if (this.relaxed && this.indented) return 'pl-8 pr-4';
    if (this.relaxed) return 'px-4';
    if (this.indented) return 'pl-4';
    return '';
  }

  render() {
    const isLink = this.isLink();
    const isButton = this.isButton();
    const isAccordion = this.isAccordion();

    const slots = {
      label: this.hasSlotController.test('[default]'),
      main: this.hasSlotController.test('main'),
      description: this.hasSlotController.test('description'),
      children: this.hasSlotController.test('children')
    };
    const tag = isLink ? literal`a` : isAccordion ? literal`summary` : literal`button`;
    const horizontalPaddingBottom = this.vertical ? 'pb-3' : 'pb-2';

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    const root = html`
      <${tag}
        part="base"
        class=${cx(
          'px-4 hover:bg-neutral-200 group transition-all min-h-[48px] cursor-pointer relative focus-visible:focus-outline',
          { base: 'text-base', lg: 'text-lg', sm: 'text-[14px]' }[this.size],
          this.disabled ? 'text-neutral-500 pointer-events-none' : 'text-primary',
          isAccordion ? 'flex flex-col' : 'inline-block w-full',
          this.divider && this.vertical && 'mt-[1px]'
        )}
        aria-controls=${ifDefined(isAccordion ? 'navigation-item-details' : undefined)}
        aria-current=${ifDefined(this.current ? 'page' : undefined)}
        aria-disabled=${this.disabled}
        ?disabled=${ifDefined(isButton ? this.disabled : undefined)}
        href=${ifDefined(this.href || undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${isLink ? 'link' : 'button'}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${isAccordion ? this.handleClickSummary : isButton ? this.handleClickButton : undefined}
      >
        <div
        part="current-indicator"
        class=${cx(
          'absolute left-0 pointer-events-none transition-all duration-150',
          this.vertical ? 'w-1 h-[calc(100%-8px)] top-1 group-hover:h-full group-hover:top-0' : 'h-1 w-full bottom-0',
          this.current ? 'bg-accent' : 'bg-transparent',
          this.disabled && 'bg-neutral-500'
        )}></div>
        <span
        part="content-area"
        class=${cx(
          'relative pt-3 inline-flex justify-between items-center',
          isAccordion ? 'grow' : 'w-full',
          slots['description'] ? 'pb-1' : horizontalPaddingBottom,
          this.calculatePaddingX()
        )}>
          ${
            this.divider && this.vertical
              ? html`<sd-divider
                  part="divider"
                  class=${cx('w-full transition-all absolute -top-[1px] left-0', this.calculatePaddingX())}
                ></sd-divider>`
              : ''
          }
          <span part="content-container" class="inline-flex items-center flex-auto">
            <slot part="content" class='inline'></slot>
          </span>
          ${
            (this.chevron || slots['children']) && this.vertical
              ? html`<sd-icon
                  name="chevron-down"
                  part="chevron"
                  library="system"
                  color="currentColor"
                  class=${cx(
                    'h-6 w-6 ml-2 transition-all',
                    isAccordion ? (this.open ? 'rotate-180' : 'rotate-0') : 'rotate-[270deg]'
                  )}
                ></sd-icon>`
              : ''
          }
        </span>
        ${
          slots['description'] && this.vertical
            ? html`<slot
                name="description"
                part="description"
                class=${cx(
                  'inline-block text-sm text-left text-black',
                  isAccordion ? 'grow' : 'w-full',
                  horizontalPaddingBottom,
                  this.calculatePaddingX()
                )}
              ></slot>`
            : ''
        }
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */

    return isAccordion
      ? html`<details part="details" id="navigation-item-details" ?open=${this.open} class="relative flex">
          ${root}<slot name="children"></slot>
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
        @apply inline-block relative box-border;
      }

      :host([vertical]) {
        @apply block;
      }

      details summary::-webkit-details-marker {
        @apply hidden;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-navigation-item': SdNavigationItem;
  }
}
