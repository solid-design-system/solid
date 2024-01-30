import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from 'src/styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

let id = 0;

/**
 * @summary Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
 * @documentation https://solid.union-investment.com/[storybook-link]/tab-panel
 * @status stable
 * @since 1.0
 *
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --padding - The tab panel's padding.
 */
@customElement('sd-tab-panel')
export default class SdTabPanel extends SolidElement {
  private readonly attrId = ++id;
  private readonly componentId = `sd-tab-panel-${this.attrId}`;

  /** The tab panel's name. */
  @property({ reflect: true }) name = '';

  /** When true, the tab panel will be shown. */
  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute('role', 'tabpanel');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-hidden', this.active ? 'false' : 'true');
  }

  render() {
    return html` <slot part="base" class=${cx('tab-panel block', this.active && 'tab-panel--active')}></slot> `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        --padding: 0;

        @apply hidden;
      }

      :host([active]) {
        @apply block;
      }

      .tab-panel {
        padding: var(--padding);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tab-panel': SdTabPanel;
  }
}
