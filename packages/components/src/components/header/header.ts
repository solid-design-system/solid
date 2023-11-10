import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { debounce } from '../../internal/debounce.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { PropertyValues } from 'lit';

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
 * @cssproperty --sd-header-padding-x - padding-left and padding-right of the header content
 */
@customElement('sd-header')
export default class SdHeader extends SolidElement {
  /**  Determines whether the header is fixed or not. If the header is fixed at the top of the page, a shadow is shown underneath. */
  @property({ reflect: true, type: Boolean }) fixed = false;

  /** Determines whether automatic spacing is applied above the body content. If true, the body's top padding is set to the header's height, preventing overlap. */
  @property({ attribute: 'auto-spacing', reflect: true, type: Boolean }) autoSpacing = false;

  private refHeaderElement?: HTMLElement;
  private resizeObserver?: ResizeObserver;

  connectedCallback(): void {
    super.connectedCallback();
    this.setCalculatedHeightProperty = this.setCalculatedHeightProperty.bind(this);
    this.addResizeObserver = this.addResizeObserver.bind(this);
  }

  firstUpdated(): void {
    this.setCalculatedHeightProperty();
    this.addResizeObserver();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('autoSpacing')) {
      this.setCalculatedHeightProperty();
      if (this.autoSpacing) {
        this.addResizeObserver();
      } else if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = undefined;
      }
    }
  }

  @debounce(100)
  private onResize(): void {
    if (this.autoSpacing) {
      this.setCalculatedHeightProperty();
    }
  }

  private addResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.onResize();
    });

    if (this.refHeaderElement) {
      this.resizeObserver.observe(this.refHeaderElement);
    }
  }

  private setCalculatedHeightProperty(): void {
    if (this.autoSpacing && this.refHeaderElement) {
      document.documentElement.style.setProperty(
        '--sd-header-calculated-height',
        `${this.refHeaderElement.clientHeight}px`
      );
    } else {
      document.documentElement.style.removeProperty('--sd-header-calculated-height');
    }
  }

  render() {
    return html`
      <header
        class=${cx('w-screen bg-white relative', this.fixed && 'fixed-shadow w-screen')}
        role="banner"
        @slotchange=${this.handleSlotChange}
      >
        <div part="main" class="relative">
          <slot></slot>
        </div>
      </header>
    `;
  }

  private handleSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    if (slot.assignedElements().length > 0) {
      this.refHeaderElement = event.currentTarget as HTMLElement;
      this.setCalculatedHeightProperty();
    }
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        display: flex;
        align-items: center;
        z-index: 65536;
        position: absolute;
        top: 0;
        left: 0;
      }

      :host([fixed]) {
        position: fixed;
      }

      .fixed-shadow::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 8px;
        background: var(--gradient-vertical-black-40-transparent, linear-gradient(0deg, #18181800 50%, #18181866 100%));
      }

      [part='main'] {
        margin: 0 auto;
        width: var(--sd-header-inner-width);
        max-width: var(--sd-header-inner-max-width);
        padding: var(--sd-header-padding, 12px 16px);
        box-sizing: border-box;
      }

      body {
        padding-top: var(--sd-header--height);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-header': SdHeader;
  }
}
