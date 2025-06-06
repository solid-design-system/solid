import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { query } from 'lit/decorators.js';
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
  @query('slot') defaultSlot: HTMLSlotElement;

  private get items() {
    return this.querySelectorAll('sd-breadcrumb-item');
  }

  private handleTruncation() {
    const { width: maxWidth } = this.base.getBoundingClientRect();

    let sum = 0;
    Array.from(this.items)
      .reverse()
      .forEach((item, index) => {
        const { width } = item.getBoundingClientRect();

        if (index === 0) {
          sum += width;
          return;
        }

        const overflow = sum + width > maxWidth;
        item.style.position = overflow ? 'absolute' : 'relative';
        item.style.visibility = overflow ? 'hidden' : 'visible';

        if (!overflow) {
          sum += width;
        }
      });
  }

  private handleSlotChange() {
    this.handleTruncation();
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
      <slot @slotchange=${this.handleSlotChange}></slot>
    </nav>`;
  }

  static styles = [
    ...SolidElement.styles,
    // TODO: Replace bg-neutral-300 by bg-neutral-400;
    css`
      :host {
        @apply block relative;
      }

      ::slotted(sd-breadcrumb-item:not(:last-of-type)) {
        @apply after:inline-block after:w-1 after:h-1 after:mx-2 after:rounded-full after:bg-neutral-300;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-breadcrumb': SdBreadcrumb;
  }
}
