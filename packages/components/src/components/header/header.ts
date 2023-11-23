import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { debounce } from '../../internal/debounce.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import SolidElement from '../../internal/solid-element';
import type { PropertyValues } from 'lit';

/**
 * @summary Header
 * @documentation https://solid.union-investment.com/[storybook-link]/header
 *
 * @status stable
 * @since 1.25.0
 *
 * @slot - The header's default content.
 *
 * @csspart main - The container that wraps the header's content.
 *
 * @cssproperty --sd-header-inner-width - width of the header content
 * @cssproperty --sd-header-inner-max-width - max-width of the header content
 * @cssproperty --sd-header-padding - padding-left and padding-right of the header content
 */
@customElement('sd-header')
export default class SdHeader extends SolidElement {
  /**  Determines whether the header is fixed or not. If the header is fixed at the top of the page, a shadow is shown underneath. */
  @property({ reflect: true, type: Boolean }) fixed = false;

  private refHeaderElement?: HTMLElement;
  private resizeObserver?: ResizeObserver;

  connectedCallback(): void {
    super.connectedCallback();
    this.setCalculatedHeightProperty = this.setCalculatedHeightProperty.bind(this);
    this.addResizeObserver = this.addResizeObserver.bind(this);
  }

  firstUpdated(): void {
    this.toggleHeightCalculation();
  }

  toggleHeightCalculation(): void {
    if (this.fixed) {
      this.setCalculatedHeightProperty();
      this.addResizeObserver();
    } else {
      this.setCalculatedHeightProperty();
      this.resizeObserver?.disconnect();
      this.resizeObserver = undefined;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('fixed')) {
      this.toggleHeightCalculation();
    }
  }

  @debounce(100)
  private onResize(): void {
    if (this.fixed) {
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
    if (this.fixed && this.refHeaderElement) {
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
      <header class="w-full bg-white relative" role="banner" @slotchange=${this.handleSlotChange}>
        <div part="main" class="relative mx-auto my-0 box-border">
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
        display: block;
      }
      :host([fixed]) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }

      :host([fixed]) header::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 8px;
        background: var(--gradient-vertical-black-40-transparent, linear-gradient(0deg, #18181800 50%, #18181866 100%));
      }

      [part='main'] {
        width: var(--sd-header-inner-width);
        max-width: var(--sd-header-inner-max-width);
        padding: var(--sd-header-padding, 12px 16px);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-header': SdHeader;
  }
}
