import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query, state } from 'lit/decorators.js';
import { waitForEvent } from 'src/internal/event';
import { watch } from 'src/internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
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
 * @slot summary - The quickfact's summary.
 * @slot expand-icon - The icon that indicates the quickfact is closed.
 * @slot collapse-icon - The icon that indicates the quickfact is open.
 *
 * @event sd-show - Emitted when the quickfact opens.
 * @event sd-after-show - Emitted after the quickfact opens and all animations are complete.
 * @event sd-hide - Emitted when the quickfact closes.
 * @event sd-after-hide - Emitted after the quickfact closes and all animations are complete.
 *
 * @csspart base - The base container of the quickfact.
 * @csspart summary-container - The container of the quickfact's summary.
 * @csspart button - The button that toggles the quickfact's open state.
 * @csspart content - The quickfact's content.
 *
 * @cssproperty --name - The description of the quickfact.
 *
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
   * Boolean keeping track of whether the default slot is filled or not.
   * @internal
   */
  @state() defaultSlotIsFilled = false;

  async show() {
    this.open = true;
    this.base.setAttribute('open', '');
    return waitForEvent(this, 'sd-after-show');
  }

  async hide() {
    this.open = false;
    this.base.removeAttribute('open');
    return waitForEvent(this, 'sd-after-hide');
  }

  @watch('open', { waitUntilFirstUpdate: true })
  handleOpenChange() {
    if (this.open) {
      this.emit('sd-show');
      this.show();
      this.emit('sd-after-show');
    } else {
      this.emit('sd-hide');
      this.hide();
      this.emit('sd-after-hide');
    }
  }

  render() {
    return html`
      <details
        part="base"
        class="flex items-center focus-visible:focus-outline"
        ?open=${this.open}
        @toggle=${(e: ToggleEvent) => {
          // Update the 'open' property based on the 'open' attribute of the <details> element
          this.open = e.newState === 'open' ? true : false;
        }}
      >
        <summary part="summary-container" class="flex flex-row sm:flex-col gap-4 mb-3 sm:mb-8 items-center text-center">
          <slot name="icon"
            ><sd-icon class="h-12 w-12 sm:h-24 sm:w-24" name="content/image" color="primary"></sd-icon
          ></slot>

          <slot
            class=${cx(
              'flex flex-col sm:gap-4 text-left sm:text-center',
              this.defaultSlotIsFilled ? 'text-primary' : 'text-black'
            )}
            name="summary"
          >
          </slot>

          <button
            part="button"
            class=${cx(
              'ml-auto self-start sm:mx-auto text-primary transition-transform duration-300 ease-in-out focus-visible:focus-outline',
              !this.defaultSlotIsFilled && 'hidden',
              this.open && 'rotate-180'
            )}
            @click=${() => {
              this.open = !this.open;
            }}
          >
            <slot name="expand-icon">
              <sd-icon
                class=${cx(
                  'h-6 w-6 sm:h-12 sm:w-12 grid place-items-center transition-transform',
                  this.open && 'hidden'
                )}
                library="system"
                name="chevron-down"
              ></sd-icon>
            </slot>
            <slot name="collapse-icon">
              <sd-icon
                class=${cx(
                  'h-6 w-6 sm:h-12 sm:w-12 grid place-items-center transition-transform',
                  !this.open && 'hidden'
                )}
                library="system"
                name="chevron-down"
              ></sd-icon>
            </slot>
          </button>
        </summary>
        <div part="content">
          <slot
            @slotchange=${() => {
              this.defaultSlotIsFilled = this.defaultSlot.assignedElements().length > 0;
            }}
          ></slot>
        </div>
      </details>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        --name: '';
        @apply focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-quickfact': SdQuickfact;
  }
}
