import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { debounce } from '../../internal/debounce.js';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Header
 * @documentation https://solid.union-investment.com/[storybook-link]/header
 * 
 * @status stable
 * @since 1.0
 * 
 * @slot - The header's default content.
 * 
 * @csspart main - The container that wraps the header's content.
 * 
 * @cssproperty --sd-header-inner-width - width of the header content
 * @cssproperty --sd-header-inner-max-width - max-width of the header content
 * @cssproperty --sd-header-padding-top - padding-top of the header content
 * @cssproperty --sd-header-padding-bottom - padding-bottom of the header content
 * @cssproperty --sd-header-x-padding - padding left and right of the header content
 * @cssproperty --sd-header-y-padding - padding top and bottom of the header content
 * @cssproperty --sd-header-height - height of the header
 */
@customElement('sd-header')
export default class SdHeader extends SolidElement {
  @property({ reflect: true, type: Boolean }) fixed = false;
  @property({ attribute: 'auto-spacing', reflect: true, type: Boolean }) autoSpacing = true;

  private refHeaderElement?: HTMLElement;
  private resizeObserver?: ResizeObserver;

  connectedCallback(): void {
    super.connectedCallback();
    this.setBodySpacing = this.setBodySpacing.bind(this);
    this.addResizeObserver = this.addResizeObserver.bind(this);
  }

  firstUpdated(): void {
    this.setBodySpacing();
    this.addResizeObserver();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
  }

  @debounce(100)
  private onResize(): void {
    this.setBodySpacing();
  }

  private addResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.onResize();
    });

    if (this.refHeaderElement) {
      this.resizeObserver.observe(this.refHeaderElement);
    }
  }

  private setBodySpacing(): void {
    if (this.refHeaderElement && this.autoSpacing) {
      document.body.style.setProperty('--sd-header--height', `${this.refHeaderElement.clientHeight}px`);
    }
  }

  render() {
    return html`
      <header
        class=${cx('w-screen bg-white',this.fixed ? 'fixed top-0 left-0 shadow ' : 'absolute')}
        role="banner"
        style=${this.fixed ? 'position: fixed; top: 0; left: 0;' : ''}
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
        <div part="main">
          <slot></slot>
        </div>
      </header>
    `;
  }

  static styles = css`

    :host {
      display: block;
    }

    .fixed {
      box-shadow: 0 4px 2px -2px gray;
    }

    [part='main'] {
      position: relative;
      margin: 0 auto;
      width: var(--sd-header-inner-width, calc(100vw - 2 * var(--sd-header-x-padding, 16px)));
      max-width: var(--sd-header-inner-max-width);
      padding-top: var(--sd-header-padding-top, var(--sd-header-y-padding, 16px));
      padding-right: var(--sd-header-x-padding, 16px);
      padding-bottom: var(--sd-header-padding-bottom, var(--sd-header-y-padding, 16px));
      padding-left: var(--sd-header-x-padding, 16px);
      box-sizing: border-box;
    }

    body {
      padding-top: var(--sd-header--height);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-header': SdHeader;
  }
}
