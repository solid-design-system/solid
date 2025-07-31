import '../divider/divider';
import '../icon/icon';
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flexible button / link component that can be used to quickly build navigations. Takes one of 3 forms: link (overrides all other if 'href' is provided), button (default), or accordion (if 'children' slot defined).
 * @status stable
 * @since 1.15.0
 *
 * @dependency sd-divider
 * @dependency sd-icon
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
  private readonly localize = new LocalizeController(this);

  @query('a[part="base"], button[part="base"]') button: HTMLButtonElement | HTMLLinkElement | null;
  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /** The navigation item's orientation. If false, properties below this point are not used. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  /** The navigation item's font size. */
  @property({ type: String, reflect: true }) size: 'md' | 'lg' | 'sm' = 'md';

  /** The navigation item's href target. If provided, the navigation item will use an anchor tag otherwise it will use a button tag. The 'children' slot and accordion behavior will be ignored if an 'href' is provided. */
  @property({ reflect: true }) href: string;

  /** Tells the browser where to open the link. Only used when `href` is defined. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is defined. */
  @property({ reflect: true }) download?: string;

  /** Indicates that the navigation item is currently selected. The aria-current attribute is set to "page" on the host if true. */
  @property({ type: Boolean, reflect: true }) current = false;

  /** Disables the navigation item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Appends a chevron to the right side of a navigation item. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) chevron = false;

  /** Adds additional padding to navigation item's left and right sides. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) relaxed = false;

  /** Adds additional padding to navigation item's left and right sides. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) divider = false;

  /** Adds additional padding to navigation item's left side. Only used if `vertical` is true. */
  @property({ type: Boolean, reflect: true }) indented = false;

  /** Reflects HTML details element state and allows control from parent. Only used if `vertical` is true, no `href`is undefined, and `children` is defined. */
  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: Boolean, reflect: true }) separated = false;

  private get isButton(): boolean {
    return !this.href && !this.hasSlotController.test('children');
  }

  private get isLink(): boolean {
    return !!this.href;
  }

  private get isAccordion(): boolean {
    return !this.href && this.hasSlotController.test('children');
  }

  private get isIconOnly(): boolean {
    if (!this.defaultSlot) return false;

    const nodes = this.defaultSlot.assignedNodes({ flatten: true });

    return (
      nodes.length > 0 &&
      nodes.every(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          return !node.textContent?.trim();
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          return element.tagName.toLowerCase() === 'sd-icon';
        }

        return false;
      })
    );
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

  private get calculatePaddingX(): string {
    if (this.relaxed && this.indented) return 'pl-8 pr-4';
    if (this.relaxed) return 'px-4';
    if (this.indented) return 'pl-4';
    return '';
  }

  private get tag() {
    if (this.isAccordion && !this.isLink) {
      return literal`summary`;
    }
    if (this.separated) {
      return literal`div`;
    }
    if (this.isLink) {
      return literal`a`;
    }
    return literal`button`;
  }

  render() {
    const tag = this.tag;
    const isLink = this.isLink;
    const isButton = this.isButton;
    const isAccordion = this.isAccordion;
    const isIconOnly = this.isIconOnly;

    const slots = {
      label: this.hasSlotController.test('[default]'),
      main: this.hasSlotController.test('main'),
      description: this.hasSlotController.test('description'),
      children: this.hasSlotController.test('children')
    };

    const horizontalPadding = this.vertical ? 'py-3' : 'py-2';

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    const root = html`
      <${tag}
        part="base"
        class=${cx(
          'cursor-pointer relative focus-visible:focus-outline',
          { md: 'text-base', lg: 'text-lg', sm: 'text-[14px]' }[this.size],
          this.disabled ? 'text-neutral-500 pointer-events-none' : 'text-primary',
          this.current && 'font-bold',
          isAccordion ? 'flex flex-col' : 'inline-block w-full',
          this.divider && this.vertical && 'mt-0.25',
          !this.vertical && 'inline-flex items-center',
          !this.separated && 'hover:bg-neutral-200 group transition-colors duration-fast ease-in-out min-h-[48px]',
          !this.separated && (isIconOnly && !this.vertical ? 'p-3' : 'px-4'),
          isIconOnly && !this.vertical && 'justify-center aspect-square w-12'
        )}
        aria-current=${ifDefined(this.current ? 'page' : undefined)}
        aria-disabled=${this.disabled}
        ?disabled=${ifDefined(isButton ? this.disabled : undefined)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${isLink ? 'link' : 'button'}
        tabindex=${this.disabled || this.separated ? '-1' : '0'}
        @click=${this.separated ? undefined : isAccordion ? this.handleClickSummary : isButton ? this.handleClickButton : undefined}
      >
        <div
        part="current-indicator"
        class=${cx(
          'absolute bg-accent left-0 pointer-events-none',
          this.vertical
            ? 'w-1 h-[calc(100%-16px)] top-2 group-hover:h-full group-hover:top-0'
            : 'h-1 w-[calc(100%-16px)] bottom-0 left-2 group-hover:w-full group-hover:left-0',
          this.disabled && 'bg-neutral-500'
        )}></div>
        <span
        part="content-area"
        class=${cx(
          'relative inline-flex justify-between items-center',
          isAccordion ? 'grow' : 'w-full',
          slots['description'] && 'pt-3',
          slots['description'] || this.separated ? 'pb-1' : horizontalPadding,
          this.calculatePaddingX
        )}>
          ${
            this.divider && this.vertical
              ? html`<sd-divider
                  part="divider"
                  class=${cx('w-full transition-all absolute -top-0.25 left-0', this.calculatePaddingX)}
                ></sd-divider>`
              : ''
          }
          <span part="content-container" class="inline-flex items-center flex-auto">
            ${
              this.separated
                ? html`<a
                    class=${cx(
                      'mr-4 w-full inline-flex items-center pl-4 cursor-pointer relative focus-visible:focus-outline hover:bg-neutral-200 group transition-colors duration-fast ease-in-out min-h-[48px]',
                      !slots['description'] && 'py-4'
                    )}
                    href=${ifDefined(isLink ? this.href : undefined)}
                    target=${ifDefined(isLink ? this.target : undefined)}
                    download=${ifDefined(isLink ? this.download : undefined)}
                  >
                    <slot part="content" class="inline-flex"></slot>
                  </a>`
                : html`<slot part="content" class="inline-flex"></slot>`
            }
          </span>
          ${
            (this.chevron || slots['children']) && this.vertical
              ? this.separated
                ? html`<button
                    type="button"
                    title=${this.open
                      ? this.localize.term('collapseNavigationItem')
                      : this.localize.term('expandNavigationItem')}
                    class="sd-interactive sd-interactive--reset"
                    @click=${this.handleClickSummary}
                  >
                    <sd-icon
                      name="chevron-down"
                      part="chevron"
                      library="_internal"
                      color="currentColor"
                      class=${cx(
                        'm-4 h-6 w-6 transition-all',
                        isAccordion || this.separated ? (this.open ? 'rotate-180' : 'rotate-0') : 'rotate-[270deg]'
                      )}
                    ></sd-icon>
                  </button>`
                : html` <sd-icon
                    name="chevron-down"
                    part="chevron"
                    library="_internal"
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
                  'inline-block text-sm text-left text-black pb-3',
                  isAccordion || this.separated ? 'grow' : 'w-full',
                  this.separated ? 'px-4' : this.calculatePaddingX
                )}
              ></slot>`
            : ''
        }
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */

    if (isAccordion) {
      return html`<details
        aria-expanded=${this.open}
        part="details"
        id="navigation-item-details"
        ?open=${this.open}
        class="relative"
      >
        ${root}<slot name="children"></slot>
      </details>`;
    }
    if (this.separated) {
      return html`<div part="details" id="navigation-item-details" class="relative flex flex-col">
        ${root}${this.open ? html`<slot name="children"></slot>` : ''}
      </div>`;
    }

    return html`${root}`;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
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

      [part='current-indicator'] {
        @apply scale-0 opacity-0 duration-fast;

        transition:
          width var(--sd-duration-fast) ease-in-out,
          height var(--sd-duration-fast) ease-in-out,
          left var(--sd-duration-fast) ease-in-out,
          top var(--sd-duration-fast) ease-in-out,
          opacity var(--sd-duration-fast) ease-in-out,
          transform var(--sd-duration-fast) ease-in-out var(--sd-duration-fast);
      }

      :host([current]) [part='current-indicator'] {
        @apply opacity-100 scale-100;

        transition:
          width var(--sd-duration-fast) ease-in-out,
          height var(--sd-duration-fast) ease-in-out,
          left var(--sd-duration-fast) ease-in-out,
          top var(--sd-duration-fast) ease-in-out,
          transform var(--sd-duration-fast) ease-in-out;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-navigation-item': SdNavigationItem;
  }
}
