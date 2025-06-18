import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
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
@customElement('sd-range-tick')
export default class SdRangeTick extends SolidElement {
  public localize = new LocalizeController(this);

  /**
   * Whether the tick should be shown as a subtick.
   */
  @property({ type: Boolean, reflect: true }) subtick = false;

  render() {
    return html` <div part="base" class=${cx(this.subtick ? 'w-0.25' : 'w-0.5')}>
      <div part="line" class=${cx('bg-neutral-500', this.subtick ? 'h-2' : 'h-[10px]')}></div>
      <div part="label" class="flex items-center justify-center text-center text-nowrap">
        <slot></slot>
      </div>
    </div>`;
  }

  static styles = [...SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-range-tick': SdRangeTick;
  }
}
