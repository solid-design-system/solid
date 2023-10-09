import '../icon-button/icon-button';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from '../../../src/internal/register-custom-element';
import {property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import styles from './tab.styles';
import type { CSSResultGroup } from 'lit';

let id = 0;

/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://solid.union-investment.com/[storybook-link]/tab
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon-button
 *
 * @slot - The tab's label.
 *
 * @event sd-close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart close-button - The close button, an `<sd-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 */
@customElement('sd-tab')
export default class SdTab extends SolidElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  private readonly attrId = ++id;
  private readonly componentId = `sd-tab-${this.attrId}`;

  @query('.tab') tab: HTMLElement;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Makes the tab closable and shows a close button. */
  @property({ type: Boolean }) closable = false;

  /** Disables the tab and prevents selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  private handleCloseClick() {
    this.emit('sd-close');
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
        class=${classMap({
      tab: true,
      'tab--active': this.active,
      'tab--closable': this.closable,
      'tab--disabled': this.disabled
    })}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot></slot>
        ${this.closable
        ? html`
              <sd-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term('close')}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sd-icon-button>
            `
        : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tab': SdTab;
  }
}
