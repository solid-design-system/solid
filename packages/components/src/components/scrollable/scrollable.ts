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
 * @slot icon-start - The scrollable's start icon.
 * @slot icon-end - The scrollable's end icon.
 *
 * @csspart base - The scrollable's base wrapper.
 * @csspart content - The scrollable's main content.
 * @csspart button-start - The scrollable's start scroll button.
 * @csspart button-end - The scrollable's end scroll button.
 * @csspart shadow-start - The scrollable's start shadow.
 * @csspart shadow-end - The scrollable's end shadow.
 *
 * @cssproperty --gradient-color - Defines a custom color for the gradient.
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
          this.scrollbars ? 'show-scrollbars' : 'hide-scrollbars'
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
                class=${cx('scroll-button sd-interactive rounded-md flex text-lg')}
                @click=${() => this.handleScroll(isHorizontal ? 'left' : 'up')}
              >
                <slot name="icon-start">
                  <sd-icon
                    library="system"
                    name="chevron-up"
                    class=${cx(isHorizontal ? 'rotate-[-90deg]' : '')}
                  ></sd-icon>
                </slot>
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
                class=${cx('scroll-button sd-interactive rounded-md flex text-lg')}
                @click=${() => this.handleScroll(isHorizontal ? 'right' : 'down')}
              >
                <slot name="icon-end">
                  <sd-icon
                    library="system"
                    name="chevron-down"
                    class=${cx(isHorizontal ? 'rotate-[-90deg]' : '')}
                  ></sd-icon>
                </slot>
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
        --gradient-color: rgba(255, 255, 255, 0);
        --gradient: var(--gradient-color) 0%, #fff 80%, #fff 100%;

        @apply flex relative overflow-hidden;
      }

      .scroll-container {
        @apply overflow-x-auto overflow-y-auto w-full h-full;
      }

      .horizontal-scroll {
        @apply overflow-x-scroll overflow-y-hidden whitespace-nowrap flex items-center;
      }

      .vertical-scroll {
        @apply overflow-y-scroll overflow-x-hidden flex justify-items-center;
      }

      [part='scroll-container'] .hide-scrollbars {
        /* Hide scrollbar in Firefox */
        scrollbar-width: none;
      }

      /* Hide scrollbar in Chrome/Safari */
      [part='scroll-container'] .hide-scrollbars::-webkit-scrollbar {
        @apply w-0 h-0 bg-transparent;
      }

      .hide-scrollbars {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
        &::-webkit-scrollbar {
          @apply w-0 h-0 bg-transparent;
        }
      }

      /* Default state: scrollbar is transparent */
      .scroll-container::-webkit-scrollbar-thumb {
        @apply bg-transparent;
      }

      /* On hover: apply custom styles to the scrollbar thumb */
      .scroll-container:hover::-webkit-scrollbar-thumb {
        background: var(--background-neutral-400, #c3c3c3);
        border-radius: 2px;
      }

      /* Apply width and height to the scrollbar itself */
      :host([orientation='vertical']) .scroll-container::-webkit-scrollbar {
        @apply w-1;
      }

      :host([orientation='horizontal']) .scroll-container::-webkit-scrollbar {
        @apply h-1;
      }

      /* Apply specific dimensions to the scrollbar thumb */
      :host([orientation='vertical']) .scroll-container:hover::-webkit-scrollbar-thumb {
        @apply h-6;
      }

      :host([orientation='horizontal']) .scroll-container:hover::-webkit-scrollbar-thumb {
        @apply w-6;
      }
      .scroll-button-container {
        @apply absolute z-10 flex items-center justify-center;
      }

      .button-left {
        @apply top-0 left-0 h-full w-12;
        background: linear-gradient(270deg, var(--gradient));
      }

      .button-right {
        @apply top-0 right-0 h-full w-12;
        background: linear-gradient(90deg, var(--gradient));
      }

      .button-up {
        @apply top-0 left-0 w-full h-12;
        background: linear-gradient(0deg, var(--gradient));
      }

      .button-down {
        @apply bottom-0 left-0 w-full h-12;
        background: linear-gradient(180deg, var(--gradient));
      }

      .scroll-button {
        @apply relative p-0 border-0 bg-transparent cursor-pointer w-10 h-10 flex items-center justify-center;
      }

      .scroll-shadow {
        @apply absolute z-10 pointer-events-none;
      }

      .scroll-shadow.left {
        @apply top-0 left-0 w-[6px] h-full;
        background: linear-gradient(270deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .scroll-shadow.right {
        @apply top-0 right-0 w-[6px] h-full;
        background: linear-gradient(90deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .scroll-shadow.up {
        @apply top-0 left-0 w-full h-[6px];
        background: linear-gradient(0deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .scroll-shadow.down {
        @apply bottom-0 left-0 w-full h-[6px];
        background: linear-gradient(180deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .sd-icon--up {
        @apply self-start;
      }

      .sd-icon--down {
        @apply self-end;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-scrollable': SdScrollable;
  }
}
