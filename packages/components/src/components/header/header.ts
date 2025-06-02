import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { debounce } from '../../internal/debounce.js';
import { property, query } from 'lit/decorators.js';
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

  @query('header') header: HTMLElement;

  private resizeObserver?: ResizeObserver;

  connectedCallback(): void {
    super.connectedCallback();
    this.updateCalculatedHeight = this.updateCalculatedHeight.bind(this);
    this.addResizeObserver = this.addResizeObserver.bind(this);
    window.addEventListener('resize', this.updateCalculatedHeight);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.updateCalculatedHeight);
  }

  firstUpdated(): void {
    this.updateCalculatedHeight();
    this.addResizeObserver();
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('fixed')) {
      this.updateCalculatedHeight();
    }
  }

  private addResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(this.updateCalculatedHeight);

    if (!this.header) {
      return;
    }

    this.resizeObserver.observe(this.header);
  }

  @debounce(100)
  private updateCalculatedHeight(): void {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const windowHeightInRem = window.innerHeight / rem;

    if (this.header && this.fixed && windowHeightInRem >= 32) {
      document.documentElement.style.setProperty('--sd-header-calculated-height', `${this.header.clientHeight}px`);
    } else {
      document.documentElement.style.removeProperty('--sd-header-calculated-height');
    }
  }

  render() {
    return html`
      <header class="w-full bg-white relative" role="banner">
        <div part="main" class="relative mx-auto my-0 box-border">
          <slot></slot>
        </div>
      </header>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block;
      }

      @media (min-height: 32rem) {
        :host([fixed]) {
          padding-bottom: var(--sd-header-calculated-height);

          header {
            @apply fixed w-full left-0 top-0;

            &::after {
              @apply content-[''] absolute left-0 right-0 top-full h-2;
              background: var(
                --gradient-vertical-black-40-transparent,
                linear-gradient(0deg, #18181800 50%, #18181866 100%)
              );
            }
          }
        }
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
