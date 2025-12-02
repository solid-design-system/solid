import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Ticks visually improve positioning on range sliders.
 * @status experimental
 * @since 5.9
 *
 * @slot - The tick's label
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The component's label.
 * @csspart line - The component's tick line.
 *
 * @cssproperty --sd-range-scale-ticks-color-text - The text color for range scale ticks.
 *
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
      <div part="line" class=${cx(this.subtick ? 'h-2' : 'h-[10px]')}></div>
      <div
        part="label"
        class="flex items-center justify-center text-center text-nowrap text-sm sd-range-scale-ticks-color-text"
      >
        <slot></slot>
      </div>
    </div>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      [part='line'] {
        background-color: rgba(var(--sd-color-border-neutral-400, rgba(var(--sd-color-neutral-400))));
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-range-tick': SdRangeTick;
  }
}
