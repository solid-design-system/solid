import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import InteractiveStyles from '../../styles/interactive/interactive.css?inline';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Scrollable is used to indicate there is hidden content to be scrolled.
 * @documentation https://solid.union-investment.com/[storybook-link]/scrollable
 * @status stable
 * @since 1.0
 *
 * @event button-end - Emitted when the end button is clicked.
 * @event button-start - Emitted when the start button is clicked.
 * @event end - Emitted when the end of the scrollable is reached.
 * @event start - Emitted when the start of the scrollable is reached.
 *
 * @slot - The scrollable's content.
 * @slot icon - The scrollable's icon.
 *
 * @csspart base - The scrollable's base wrapper.
 * @csspart content - The scrollable's main content.
 * @csspart button-left - The scrollable's left scroll button.
 * @csspart button-right - The scrollable's right scroll button.
 * @csspart button-top - The scrollable's up scroll button.
 * @csspart button-bottom - The scrollable's down scroll button.
 *
 * @cssproperty --gradient - Defines a custom color for the gradient.
 */

@customElement('sd-scrollable')
export default class SdScrollable extends SolidElement {
  /** Defines the scroll orientation */
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Activates scroll buttons */
  @property({ type: Boolean, reflect: true }) buttons = false;

  /** The amount in px to be scrolled when clicking the buttons. */
  @property({ type: Number }) scrollStep: number = 150;

  /** Activates browser scrollbars */
  @property({ type: Boolean, reflect: true }) scrollbars = false;

  /** Activates a shadow as optional visual scroll indicator */
  @property({ type: Boolean, reflect: true }) shadow = false;

  /* Adds inset padding*/
  @property({ type: Boolean, reflect: true }) inset = false;

  @state() private canScroll: Record<'left' | 'right' | 'up' | 'down', boolean> = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  private resizeObserver: ResizeObserver;
  private scrollContainer: HTMLElement | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.updateScrollIndicatorVisibility();
    });

    this.updateComplete.then(() => {
      this.scrollContainer = this.renderRoot.querySelector('.scroll-container');
      if (this.scrollContainer) {
        this.resizeObserver.observe(this.scrollContainer);
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.scrollContainer) {
      this.resizeObserver.unobserve(this.scrollContainer);
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('buttons') || changedProperties.has('shadow') || changedProperties.has('orientation')) {
      this.updateScrollIndicatorVisibility();
    }
  }

  private get container(): HTMLElement | null {
    return this.renderRoot.querySelector('.scroll-container');
  }

  updateScrollIndicatorVisibility() {
    const container = this.container;
    if (container) {
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 1;
      const canScrollUp = container.scrollTop > 0;
      const canScrollDown = container.scrollTop + container.clientHeight < container.scrollHeight - 1;

      this.canScroll = {
        left: canScrollLeft,
        right: canScrollRight,
        up: canScrollUp,
        down: canScrollDown
      };

      if (canScrollLeft || canScrollUp) {
        this.dispatchEvent(new CustomEvent('start'));
      }
      if (canScrollRight || canScrollDown) {
        this.dispatchEvent(new CustomEvent('end'));
      }
    }
  }

  handleScroll(direction: 'left' | 'right' | 'up' | 'down') {
    if (this.scrollContainer) {
      const isHorizontal = this.orientation === 'horizontal';
      const scrollAmount = direction === 'left' || direction === 'up' ? -this.scrollStep : this.scrollStep;
      const scrollOptions: ScrollToOptions = {
        behavior: 'smooth',
        [isHorizontal ? 'left' : 'top']: scrollAmount
      };
      this.scrollContainer.scrollBy(scrollOptions);
      this.dispatchEvent(new CustomEvent(`button-${direction}`));
    }
  }

  renderIcon(direction: 'up' | 'down') {
    const iconName = direction === 'up' ? 'chevron-down' : 'chevron-up';
    const rotationClass = this.orientation === 'horizontal' ? 'rotate-[90deg]' : '';
    return html`
      <slot name="icon">
        <sd-icon library="system" name=${iconName} class=${rotationClass}></sd-icon>
      </slot>
    `;
  }

  render() {
    const isHorizontal = this.orientation === 'horizontal';
    const showButtonStart = this.buttons && (isHorizontal ? this.canScroll.left : this.canScroll.up);
    const showButtonEnd = this.buttons && (isHorizontal ? this.canScroll.right : this.canScroll.down);
    const showShadowStart = this.shadow && (isHorizontal ? this.canScroll.left : this.canScroll.up);
    const showShadowEnd = this.shadow && (isHorizontal ? this.canScroll.right : this.canScroll.down);

    return html`
      <div
        part="base"
        class=${cx(
          'scroll-container',
          isHorizontal ? 'horizontal-scroll' : 'vertical-scroll',
          this.scrollbars ? 'show-scrollbars' : 'hide-scrollbars',
          this.inset ? 'p-4' : ''
        )}
        @scroll=${this.updateScrollIndicatorVisibility}
      >
        <slot></slot>
      </div>
      ${showButtonStart
        ? html`
            <div
              part="button-start-container"
              class=${cx('scroll-button-container', isHorizontal ? 'button-left' : 'button-up')}
            >
              <button
                part="button-start"
                class=${cx('scroll-button sd-interactive rounded-md flex')}
                @click=${() => this.handleScroll(isHorizontal ? 'left' : 'up')}
              >
                ${this.renderIcon(isHorizontal ? 'up' : 'down')}
              </button>
            </div>
          `
        : null}
      ${showButtonEnd
        ? html`
            <div
              part="button-end-container"
              class=${cx('scroll-button-container', isHorizontal ? 'button-right' : 'button-down')}
            >
              <button
                part="button-end"
                class=${cx('scroll-button sd-interactive rounded-md flex')}
                @click=${() => this.handleScroll(isHorizontal ? 'right' : 'down')}
              >
                ${this.renderIcon(isHorizontal ? 'down' : 'up')}
              </button>
            </div>
          `
        : null}
      ${showShadowStart
        ? html`<div part="shadow-start" class=${cx('scroll-shadow', isHorizontal ? 'left' : 'up')}></div>`
        : null}
      ${showShadowEnd
        ? html`<div part="shadow-end" class=${cx('scroll-shadow', isHorizontal ? 'right' : 'down')}></div>`
        : null}
    `;
  }

  static styles = [
    SolidElement.styles,
    unsafeCSS(InteractiveStyles),
    componentStyles,
    css`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        --gradient: rgba(255, 255, 255, 0) 0%, #fff 80%, #fff 100%;
      }

      .scroll-container {
        overflow-x: auto;
        overflow-y: auto;
        width: 100%;
        height: 100%;
      }

      .horizontal-scroll {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        display: flex;
        align-items: center;
      }

      .vertical-scroll {
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        justify-items: center;
      }

      .hide-scrollbars {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
        &::-webkit-scrollbar {
          width: 0;
          height: 0;
          background: transparent; /* Chrome/Safari/Webkit */
        }
      }

      /* Default state: scrollbar is transparent */
      .scroll-container::-webkit-scrollbar-thumb {
        background: transparent;
      }

      /* On hover: apply custom styles to the scrollbar thumb */
      .scroll-container:hover::-webkit-scrollbar-thumb {
        background: var(--background-neutral-400, #c3c3c3);
        border-radius: 2px;
      }

      /* Apply width and height to the scrollbar itself */
      :host([orientation='vertical']) .scroll-container::-webkit-scrollbar {
        width: 4px;
      }

      :host([orientation='horizontal']) .scroll-container::-webkit-scrollbar {
        height: 4px;
      }

      /* Apply specific dimensions to the scrollbar thumb */
      :host([orientation='vertical']) .scroll-container:hover::-webkit-scrollbar-thumb {
        height: 24px;
      }

      :host([orientation='horizontal']) .scroll-container:hover::-webkit-scrollbar-thumb {
        width: 24px;
      }
      .scroll-button-container {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .button-left {
        top: 0;
        left: 0;
        height: 100%;
        width: 48px;
        background: linear-gradient(270deg, var(--gradient));
      }

      .button-right {
        top: 0;
        right: 0;
        height: 100%;
        width: 48px;
        background: linear-gradient(90deg, var(--gradient));
      }

      .button-up {
        top: 0;
        left: 0;
        width: 100%;
        height: 48px; /* Adjust the height as needed */
        background: linear-gradient(0deg, var(--gradient));
      }

      .button-down {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px; /* Adjust the height as needed */
        background: linear-gradient(180deg, var(--gradient));
      }

      .scroll-button {
        position: relative;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
      }

      .scroll-button[part='button-start'] {
        justify-content: flex-start;
      }

      .scroll-button[part='button-end'] {
        justify-content: flex-end;
      }

      .scroll-shadow {
        position: absolute;
        z-index: 1;
        pointer-events: none;
      }

      .scroll-shadow.left {
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: linear-gradient(270deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .scroll-shadow.right {
        top: 0;
        right: 0;
        width: 6px;
        height: 100%;
        background: linear-gradient(90deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .scroll-shadow.up {
        top: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: linear-gradient(0deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .scroll-shadow.down {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: linear-gradient(180deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .sd-icon--up {
        align-self: flex-start;
      }

      .sd-icon--down {
        align-self: flex-end;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-scrollable': SdScrollable;
  }
}
