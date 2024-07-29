import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
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

  @query('[part=base]') tab: HTMLElement;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

  /** When set to container, a border appears around the current tab and tab-panel. */
  @property({ type: String, reflect: true }) variant: 'default' | 'container' = 'default';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Disables the tab and prevents selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
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

    return html`
      <div
        part="base"
        class=${cx(
          'inline-flex min-w-max h-12 px-3 leading-none items-center justify-center whitespace-nowrap select-none cursor-pointer group relative focus-visible:focus-outline outline-2 !-outline-offset-2',
          this.variant === 'container' && ' rounded-[4px_4px_0_0]',
          this.variant === 'container' && this.active && 'tab--active-container-border bg-white',
          this.disabled ? 'opacity-50 !cursor-not-allowed' : 'hover:bg-neutral-200'
        )}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot name="left" class=${cx('pr-2', this.disabled ? 'text-neutral-500' : 'text-primary')}></slot>
        <slot class=${cx(this.disabled ? 'text-neutral-500' : 'text-primary')}></slot>

        <div
          part="active-tab-indicator"
          class=${cx(
            (!this.active || this.disabled) && 'hidden',
            'absolute bottom-0 h-1 bg-accent',
            this.variant === 'default' ? 'w-full' : 'w-3/4 group-hover:w-full transition-all duration-200 ease-in-out'
          )}
        ></div>

        <div
          part="hover-bottom-border"
          class=${cx(
            !this.active &&
              !this.disabled &&
              'absolute w-full h-0.25 bottom-0 border-b border-neutral-400 invisible group-hover:visible'
          )}
        ></div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        @apply box-border block;
      }

      .tab--active-container-border::after {
        content: '';
        @apply absolute w-full h-full border border-neutral-400;
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
