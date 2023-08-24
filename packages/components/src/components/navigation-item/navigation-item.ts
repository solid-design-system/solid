import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import { watch } from '../../internal/watch';
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
@customElement('sd-navigation-item')
export default class SdNavigationItem extends SolidElement {
  private readonly localize = new LocalizeController(this);

  /** An example attribute. */
  @property() attr = 'example';

  @watch('someProperty')
  doSomething() {
    // Example event
    this.emit('sd-event-name');
  }

  render() {
    return html` <slot></slot> `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-navigation-item': SdNavigationItem;
  }
}
