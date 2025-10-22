import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
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
@customElement('sd-skeleton')
export default class SdSkeleton extends SolidElement {
  // public localize = new LocalizeController(this);

  /** An example attribute. */
  @property({ type: String, reflect: true }) variant: 'rectangular' | 'circular' = 'rectangular';

  render() {
    return html`
      <div
        part="base"
        class=${cx(
          'bg-neutral-200 w-full h-full',
          {
            rectangular: 'rounded-sm',
            circular: 'rounded-full inline-block'
          }[this.variant]
        )}
      ></div>
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-skeleton': SdSkeleton;
  }
}
