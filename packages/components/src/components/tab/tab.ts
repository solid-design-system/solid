import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

let id = 0;

/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://solid.union-investment.com/[storybook-link]/tab
 * @status stable
 * @since 2.6.0
 *
 * @dependency sd-button
 *
 * @slot - The tab's label.
 * @slot left - Optional element (eg. icon) positioned to the left of the label.
 *
 * @csspart base - The component's base wrapper.
 * @csspart active-tab-indicator - The active tab indicator.
 * @csspart hover-bottom-border - The bottom border that appears when the tab is hovered.
 */
@customElement('sd-tab')
export default class SdTab extends SolidElement {
  private readonly attrId = ++id;
  private readonly componentId = `sd-tab-${this.attrId}`;
  private readonly hasSlotController = new HasSlotController(this, 'left');
  public localize = new LocalizeController(this);

  @query('[part=base]') tab: HTMLElement;
  @query('[part=active-tab-indicator]') currentIndicator: HTMLElement;

  /** When set to container, a border appears around the current tab and tab-panel. */
  @property({ type: String, reflect: true }) variant: 'default' | 'container' = 'default';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Disables the tab and prevents selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Styles the tab as if it was disabled and enables aria-disabled */
  @property({ type: Boolean, reflect: true, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ type: String, reflect: true }) panel = '';

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false');
  }

  @watch(['disabled', 'visually-disabled'])
  handleDisabledChange() {
    const isDisabled = this.disabled || this.visuallyDisabled;
    this.setAttribute('aria-disabled', isDisabled ? 'true' : 'false');
  }

  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    const slots = {
      left: this.hasSlotController.test('left')
    };

    return html`
      <div
        part="base"
        class=${cx(
          'inline-flex justify-center min-w-max items-center h-12 px-3 leading-none select-none cursor-pointer group relative',
          'focus-visible:focus-outline outline-2 !-outline-offset-2 ',
          'transition-border duration-1000 ease-in-out',
          this.variant === 'container' && ' rounded-[4px_4px_0_0]',
          this.variant === 'container' && 'tab-container-border bg-white',
          this.variant === 'container' && this.active && 'tab--active-container-border bg-white',
          this.disabled || this.visuallyDisabled ? '!cursor-not-allowed' : 'hover:bg-neutral-200',
          this.active && 'z-20'
        )}
        tabindex=${!this.active || this.disabled ? '-1' : '0'}
      >
        <div
          class="${cx(
            'flex h-full items-center justify-center whitespace-nowrap',
            this.disabled || (this.visuallyDisabled && 'opacity-50 ')
          )}"
        >
          <slot
            name="left"
            class=${cx(
              slots.left && 'block pr-2',
              this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'text-primary'
            )}
          ></slot>
          <slot class=${cx(this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'text-primary')}></slot>

          ${this.variant === 'container'
            ? html`
                <div
                  part="active-tab-indicator"
                  class=${cx(
                    'absolute bottom-0 h-1 bg-accent w-3/4 group-hover:w-full transition-[width] duration-fast ease-in-out',
                    (!this.active || this.disabled) && 'hidden'
                  )}
                ></div>
              `
            : ''}

          <div
            part="hover-bottom-border"
            class=${cx(
              !this.active &&
                !this.disabled &&
                'absolute w-full h-0.25 bottom-0 border-b border-neutral-400 invisible group-hover:visible'
            )}
          ></div>
        </div>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply box-border block;
      }

      .tab-container-border::after {
        content: '';
        @apply absolute w-full h-full border border-transparent;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
      }

      .tab--active-container-border::after {
        content: '';
        @apply absolute w-full h-full border border-neutral-400 transition-[border] duration-fast ease-in-out;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tab': SdTab;
  }
}
