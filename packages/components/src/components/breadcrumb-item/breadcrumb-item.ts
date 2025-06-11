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
 * @since 1.0
 *
 * @dependency sd-link
 *
 * @slot - The breadcrumb label.
 * @slot icon-left - The icon to display on the left side of the breadcrumb.
 * @slot icon-right - The icon to display on the right side of the breadcrumb.
 *
 * @csspart base - The component's base wrapper.
 * @csspart link - The inner `sd-link` component.
 *
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

  /** Inverts the breadcrumb item. */
  @property({ type: Boolean, reflect: true }) inverted = false;

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
        href=${ifDefined(!this.current ? this.href : undefined)}
        target=${this.target}
        inverted=${ifDefined(this.inverted ? true : undefined)}
        aria-current=${ifDefined(this.current ? 'page' : undefined)}
        standalone
      >
        <div slot="icon-left" class="flex items-center">
          <slot name="icon-left"></slot>
        </div>

        <slot></slot>

        <div slot="icon-right" class="flex items-center">
          <slot name="icon-right"></slot>
        </div>
      </sd-link>
    </li>`;
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

      :host([current]) sd-link::part(label) {
        @apply no-underline;
      }

      sd-link::part(icon-left),
      sd-link::part(icon-right) {
        @apply mr-0 ml-0;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-breadcrumb-item': SdBreadcrumbItem;
  }
}
