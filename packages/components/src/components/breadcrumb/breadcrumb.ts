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

  @query('slot') defaultSlot: HTMLSlotElement;

  render() {
    return html` <nav class="flex items-center flex-wrap"><slot></slot></nav>`;
  }

  static styles = [
    ...SolidElement.styles,
    // TODO: Replace bg-neutral-300 by bg-neutral-400;
    css`
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
