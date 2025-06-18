import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';

/**
 * @summary An individual breadcrumb item for use exclusively within the `sd-breadcrumb`.
 * @status experimental
 * @since 5.7
 *
 * @dependency sd-link
 *
 * @slot - The breadcrumb label.
 *
 * @csspart base - The component's base wrapper.
 *
 */
@customElement('sd-breadcrumb-item')
export default class SdBreadcrumbItem extends SolidElement {
  public localize = new LocalizeController(this);

  @query('[part="base"]') base: HTMLElement;

  /** When not set, the breadcrumb will render as disabled. */
  @property({ type: String, reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /** When set, the attribute `aria-current="page"` will be applied */
  @property({ type: Boolean, reflect: true }) current = false;

  @watch('current')
  handleCurrentChange() {
    if (!this.base || !this.current) return;
    this.base.shadowRoot?.querySelector('a')?.setAttribute('aria-current', 'page');
  }

  connectedCallback(): void {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'listitem');
    }

    super.connectedCallback();
  }

  firstUpdated() {
    requestAnimationFrame(() => this.handleCurrentChange());
  }

  render() {
    return html` <sd-link
      part="base"
      href=${ifDefined(!this.current ? this.href : undefined)}
      target=${this.target}
      standalone
      class="text-nowrap"
    >
      <slot></slot>
    </sd-link>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-flex items-center;
      }

      sd-link::part(base) {
        @apply items-center;
      }

      sd-link::part(icon-left) {
        @apply mr-0 inline-flex;
      }

      sd-link sd-icon {
        @apply m-0;
      }

      :host([current]) sd-link::part(base) {
        @apply text-neutral-700;
      }

      :host([current]) sd-link::part(label) {
        @apply no-underline;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-breadcrumb-item': SdBreadcrumbItem;
  }
}
