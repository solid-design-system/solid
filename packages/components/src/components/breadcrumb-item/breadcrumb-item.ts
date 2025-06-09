import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { watch } from 'src/internal/watch';
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
 * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If
 * you want to change it for all items in the group, set the separator on `<sd-breadcrumb>` instead.
 *
 * @csspart base - The component's base wrapper.
 * @csspart separator - The container that wraps the separator.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-breadcrumb-item')
export default class SdBreadcrumbItem extends SolidElement {
  public localize = new LocalizeController(this);

  @query('[part="link"]') link: HTMLElement;

  /** When not set, the breadcrumb will render as disabled. */
  @property({ type: String, reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /** When set, the attribute `aria-current="page"` will be applied */
  @property({ type: Boolean, reflect: true }) current = false;

  @watch('current')
  handleCurrentChange() {
    if (!this.link || !this.current) return;
    this.link.shadowRoot?.querySelector('a')?.setAttribute('aria-current', 'page');
  }

  firstUpdated() {
    requestAnimationFrame(() => this.handleCurrentChange());
  }

  render() {
    return html`<li part="base" class="inline-flex items-center text-neutral-400 text-nowrap">
      <sd-link
        part="link"
        href=${this.href}
        target=${this.target}
        aria-current=${ifDefined(this.current ? 'page' : undefined)}
      >
        <slot name="icon-left" slot="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right" slot="icon-right"></slot>
      </sd-link>
    </li>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-flex items-center;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-breadcrumb-item': SdBreadcrumbItem;
  }
}
