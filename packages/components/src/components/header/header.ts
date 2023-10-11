import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Header
 * @documentation https://solid.union-investment.com/[storybook-link]/header
 * @status stable
 * @since 1.0
 */
@customElement('sd-header')
export class SdHeader extends SolidElement {
  @property({ reflect: true }) fixed = false;

  private refHeaderElement?: HTMLElement;
  private resizeObserver?: ResizeObserver;

  connectedCallback() {
    super.connectedCallback();
    this.setBodySpacing = this.setBodySpacing.bind(this);
    this.addResizeObserver = this.addResizeObserver.bind(this);
  }

  firstUpdated() {
    this.setBodySpacing();
    this.addResizeObserver();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
  }

  private addResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      this.setBodySpacing();
    });

    if (this.refHeaderElement) {
      this.resizeObserver.observe(this.refHeaderElement);
    }
  }

  private setBodySpacing() {
    if (this.refHeaderElement) {
      document.body.style.paddingTop = `${this.refHeaderElement.clientHeight}px`;
    }
  }

  render() {
    return html`
      <header
        class="header"
        role="banner"
        @slotchange=${(event: Event) => {
          const slot = event.target as HTMLSlotElement;
          const assignedElements = slot.assignedElements();
          if (assignedElements.length > 0) {
            this.refHeaderElement = assignedElements[0] as HTMLElement;
            this.setBodySpacing();
            this.addResizeObserver();
          }
        }}
      >
        <div class="content">
          <slot></slot>
        </div>
      </header>
    `;
  }
  static styles = css`
    :host {
      display: block;
      background-color: #f5f5f5;
      padding: 16px;
    }

    h1 {
      margin: 0;
      font-size: 24px;
      color: #333;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-header': SdHeader;
  }
}
