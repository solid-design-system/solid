import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property } from 'lit/decorators.js';
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

  /** When not set, the breadcrumb will render as disabled. */
  @property({ type: String, reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  @property() rel = 'noreferrer noopener';

  render() {
    return html`<div part="base" class="inline-flex items-center text-neutral-400">
      <sd-link href=${this.href} target=${this.target}>
        <slot name="icon-left" slot="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right" slot="icon-right"></slot>
      </sd-link>
    </div>`;
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
