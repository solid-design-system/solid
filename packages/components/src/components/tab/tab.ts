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
 * @since 2.1.0
 *
 * @dependency sd-button
 *
 * @slot - The tab's label.
 * @slot left - Optional element (eg. icon) positioned to the left of the label.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-tab')
export default class SdTab extends SolidElement {
  private readonly attrId = ++id;
  private readonly componentId = `sd-tab-${this.attrId}`;

  @query('[part=base]') tab: HTMLElement;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

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
    console.log('called from sd-tab', this.tab);
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
          'inline-flex gap-2 w-20 h-12 px-3 leading-none items-center justify-center whitespace-nowrap select-none cursor-pointer focus-visible:outline-primary hover:bg-neutral-200 -outline-offset-2',
          this.disabled && 'opacity-50 !cursor-not-allowed'
        )}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot name="left" class="pr-2"></slot>
        <slot class=${cx(this.disabled ? 'text-neutral-500' : 'text-primary')}></slot>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        @apply inline-block overflow-hidden;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tab': SdTab;
  }
}
