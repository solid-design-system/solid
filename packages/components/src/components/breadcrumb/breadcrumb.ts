import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { query, state } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Short summary of the component's intended use.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-example
 *
 * @event sd-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-breadcrumb')
export default class SdBreadcrumb extends SolidElement {
  public localize = new LocalizeController(this);

  /**
   * Internal resize observer
   */
  private resizeObserver: ResizeObserver;

  @query('[part="base"]') base: HTMLElement;
  @query('[part="truncated"]') truncated: HTMLElement;

  @query('slot') defaultSlot: HTMLSlotElement;

  @state() itemPositionsCached: boolean = false;
  @state() truncatedItemsCount: number = 0;

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
    const { width: parentWidth } = this.base.getBoundingClientRect();
    const { width: truncatedWidth } = this.truncated.getBoundingClientRect();

    if (!this.itemPositionsCached) {
      this.cacheItemPositions();
    }

    let sum = 0;
    this.truncatedItemsCount = 0;

    Array.from(this.items)
      .reverse()
      .forEach((item, index) => {
        const width = parseFloat(item.dataset.size ?? `${item.getBoundingClientRect().width}`);

        if (index === 0) {
          sum += width;
          return;
        }

        const isOverflowing = sum + width + truncatedWidth > parentWidth;
        if (isOverflowing) {
          this.truncatedItemsCount++;
          item.setAttribute('slot', 'truncated');
        } else {
          sum += width;
          item.removeAttribute('slot');
        }
      });
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
    return html` <nav part="base" class="flex items-center">
      <sd-dropdown part="truncated" class=${cx(this.truncatedItemsCount === 0 && 'hidden')}>
        <button slot="trigger" class="flex sd-interactive">[...]</button>

        <div>
          <slot name="truncated"></slot>
        </div>
      </sd-dropdown>
      <slot></slot>
    </nav>`;
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
        @apply flex items-center after:inline-block after:w-1 after:h-1 after:mx-2 after:rounded-full after:bg-neutral-300;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-breadcrumb': SdBreadcrumb;
  }
}
