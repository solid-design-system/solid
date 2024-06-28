import '../icon/icon';
import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import DisplayStyles from '../../styles/display/display.css?inline';
import LeadtextStyles from '../../styles/leadtext/leadtext.css?inline';
import ParagraphStyles from '../../styles/paragraph/paragraph.css?inline';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://solid.union-investment.com/[storybook-link]/quickfact
 * @status stable
 * @since 3.8.0
 *
 * @dependency sd-icon
 *
 * @slot - This element has a slot for additional content.
 * @slot icon - The quickfact's icon. Only content-icons should be used here.
 *
 * @cssparts base - The component's base wrapper.
 * @cssparts icon-button - The button that toggles the quickfact.
 */
@customElement('sd-quickfact')
export default class SdQuickfact extends SolidElement {
  @query('[part~="base"]') base: HTMLBodyElement;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /**
   * Indicates whether or not the quickfact is open. You can toggle this attribute to show and hide content inside the quickfact, or you can use the `show()` and `hide()` methods and this attribute will reflect the quickfact's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * Boolean keeping track of the autoplay pause/play button
   * @internal
   */
  @state() defaultSlotIsFilled = false;

  public show() {
    this.open = true;
    this.base.setAttribute('open', '');
  }

  public hide() {
    this.open = false;
    this.base.removeAttribute('open');
  }

  render() {
    return html`
      <details
        part="base"
        class="flex items-center"
        ?open=${this.open}
        @toggle=${(e: ToggleEvent) => {
          // Update the 'open' property based on the 'open' attribute of the <details> element
          this.open = e.newState === 'open' ? true : false;
        }}
      >
        <summary class="flex flex-row sm:flex-col gap-4 items-center text-center">
          <slot name="icon"
            ><sd-icon class="h-12 w-12 sm:h-24 sm:w-24" name="content/image" color="primary"></sd-icon
          ></slot>

          <div class="flex flex-col sm:gap-4 text-left sm:text-center">
            <p class="text-base font-normal leading-normal text-black sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
            <div class="text-base font-normal leading-normal text-black sm:text-xl">Con sectetur adipiscing elit</div>
          </div>

          <button
            part="icon-button"
            class=${(cx('h-6 w-6 grid place-items-center'), !this.defaultSlotIsFilled && 'hidden')}
            @click=${() => {
              this.open = !this.open;
            }}
          >
            <slot name="next-icon">
              <sd-icon
                class=${cx('h-6 w-6 grid place-items-center transition-transform', this.open && 'rotate-180')}
                library="system"
                name="chevron-down"
              ></sd-icon>
            </slot>
          </button>
        </summary>
        <slot
          @slotchange=${() => {
            this.defaultSlotIsFilled = this.defaultSlot.assignedElements().length > 0;
          }}
        ></slot>
      </details>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    unsafeCSS(LeadtextStyles),
    unsafeCSS(DisplayStyles),
    unsafeCSS(ParagraphStyles),
    css`
      :host {
        --name: '';
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-quickfact': SdQuickfact;
  }
}
