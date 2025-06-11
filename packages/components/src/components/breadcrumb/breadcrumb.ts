import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary A responsive breadcrumb navigation components used to visualize a page's location
 * within the site's hierarchy and provide easy navigation to previous sections.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-dropdown
 * @dependency sd-icon
 *
 * @slot - `<sd-breadcrumb-item> elements to display in the breadcrumb.`
 *
 * @csspart base - The component's base wrapper.
 * @csspart list - The list containing the slotted elements.
 * @csspart truncated - The truncated wrapper.
 * @csspart truncated-dropdown - The truncated dropdown containing the truncated breadcrumbs.
 *
 */
@customElement('sd-breadcrumb')
export default class SdBreadcrumb extends SolidElement {
  public localize = new LocalizeController(this);

  /** Internal resize observer */
  private resizeObserver: ResizeObserver;

  @query('[part="base"]') base: HTMLElement;
  @query('[part="truncated"]') truncated: HTMLElement;
  @query('[part="truncated-dropdown"]') dropdown: HTMLElement;
  @query('slot') defaultSlot: HTMLSlotElement;

  /** Inverts the breadcrumb. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** The breadcrumbs' label. Required for proper accessibility. */
  @property({ type: String, reflect: true }) label = 'Breadcrumbs';

  @state() itemPositionsCached: boolean = false;
  @state() isTruncated: boolean = false;

  private get items() {
    return this.querySelectorAll('sd-breadcrumb-item');
  }

  private cacheItemPositions() {
    this.items.forEach(item => {
      const { width } = item.getBoundingClientRect();
      item.dataset.size = `${width}`;
    });

    this.itemPositionsCached = true;
  }

  private handleTruncation() {
    if (document.documentElement.clientWidth <= 1024) return;

    const { width: parentWidth } = this.base.getBoundingClientRect();
    const { width: truncatedWidth } = this.truncated.getBoundingClientRect();

    if (!this.itemPositionsCached) {
      this.cacheItemPositions();
    }

    this.dropdown.innerHTML = '';
    this.isTruncated = false;
    let sum = 0;

    for (const [index, item] of Array.from(this.items).reverse().entries()) {
      const width = parseFloat(`${item.dataset.size ?? item.getBoundingClientRect().width}`);
      item.hidden = false;

      if (this.isTruncated) {
        const cloned = item.cloneNode(true);
        (cloned as HTMLElement).removeAttribute('inverted');
        this.dropdown.appendChild(cloned);
        item.hidden = true;
        continue;
      }

      if (index === 0) {
        sum += width;
        continue;
      }

      this.isTruncated = sum + width + truncatedWidth > parentWidth;
      if (this.isTruncated) {
        const cloned = item.cloneNode(true);
        (cloned as HTMLElement).removeAttribute('inverted');
        this.dropdown.appendChild(cloned);
        item.hidden = true;
      } else {
        sum += width;
      }
    }
  }

  @watch('inverted')
  handleInvertedChange() {
    this.items.forEach(item => {
      if (this.inverted) {
        item.setAttribute('inverted', '');
      } else {
        item.removeAttribute('inverted');
      }
    });
  }

  handleSlotChange() {
    const icon = document.createElement('sd-icon');
    icon.setAttribute('slot', 'icon-left');
    icon.setAttribute('library', '_internal');
    icon.setAttribute('name', 'chevron-left');
    icon.setAttribute('class', 'text-base me-1 lg:hidden');

    Array.from(this.items).at(-2)?.appendChild(icon);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.handleTruncation());
    this.resizeObserver.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }

  render() {
    /* eslint-disable lit-a11y/list */
    return html` <nav part="base" class="flex items-center pb-1" aria-label=${this.label}>
      <sd-dropdown part="truncated" class=${cx(!this.isTruncated && 'absolute opacity-0 pointer-events-none')}>
        <button
          slot="trigger"
          tabindex=${this.isTruncated ? '0' : '-1'}
          aria-label=${this.localize.term('truncatedBreadcrumbs')}
          aria-expanded="false"
          aria-haspopup="true"
          class=${cx('flex sd-interactive', this.inverted && 'sd-interactive--inverted')}
        >
          [...]
        </button>

        <ol part="truncated-dropdown" class="flex flex-col gap-4 px-2 py-3"></ol>
      </sd-dropdown>

      <ol part="list" class="flex items-center">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </ol>
    </nav>`;
    /* eslint-enable lit-a11y/list */
  }

  static styles = [
    ...SolidElement.styles,
    // TODO: Replace bg-neutral-300 by bg-neutral-400;
    css`
      :host {
        @apply block relative;
      }

      sd-dropdown,
      ::slotted(sd-breadcrumb-item:not(:last-of-type)) {
        @apply after:hidden lg:after:inline-block after:w-1 after:h-1 after:mx-2 after:rounded-full after:bg-neutral-300;
      }

      ::slotted(sd-breadcrumb-item:nth-last-child(2)) {
        @apply flex lg:after:bg-accent;
      }

      sd-dropdown,
      ::slotted(sd-breadcrumb-item) {
        @apply hidden lg:flex items-center;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-breadcrumb': SdBreadcrumb;
  }
}
