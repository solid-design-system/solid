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
 * @prop --sd-header-inner-width: width of the header content
 * @prop --sd-header-inner-max-width: max-width of the header content
 * @prop --sd-header-padding-top: padding-top of the header content
 * @prop --sd-header-padding-bottom: padding-bottom of the header content
 * @prop --sd-header-padding-x: padding left and right of the header content
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
        class="header w-screen bg-white relative"
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
      z-index: var(--component-ui-header-fixed-z-index, #{$z-index-header});
      position: absolute;
      top: 0;
      left: 0;
    }

    .header {
      box-shadow: 0 2px 3px rgba($ui-dark, 0.45);
    }

    .content {
      position: relative;
      margin: 0 auto;
      width: var(--sd-header-inner-width, calc(100vw - 2 * var(--sd-header-x-padding, #{$outer-padding})));
      max-width: var(--sd-header-inner-max-width);
      padding-top: var(--sd-header-padding-top, var(--sd-header-y-padding, 16px));
      padding-right: var(--sd-header-padding-x, #{$outer-padding});
      padding-bottom: var(--sd-header-padding-bottom, var(--sd-header-y-padding, 0));
      padding-left: var(--sd-header-padding-x, #{$outer-padding});
    }

    :host([fixed]) {
      position: fixed;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-header': SdHeader;
  }
}
