import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property, state } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Scrollable is used to indicate there is hidden content to be scrolled.
 * @documentation https://solid.union-investment.com/[storybook-link]/scrollable
 * @status stable
 * @since 1.0
 *
 * @slot - The scrollable's content.
 * @slot icon-start - The scrollable's start icon.
 * @slot icon-end - The scrollable's end icon.
 *
 * @event button-left - Emitted when the left button is clicked.
 * @event button-right - Emitted when the right button is clicked.
 * @event button-up - Emitted when the top button is clicked.
 * @event button-down - Emitted when the bottom button is clicked.
 * @event end - Emitted when the end of the scrollable is reached.
 * @event start - Emitted when the start of the scrollable is reached.
 *
 * @csspart base - The scrollable's base wrapper.
 * @csspart scroll-content - The scrollable's content.
 * @csspart button-start - The scrollable's start scroll button.
 * @csspart button-end - The scrollable's end scroll button.
 * @csspart button-left - The scrollable's left scroll button.
 * @csspart button-right - The scrollable's right scroll button.
 * @csspart button-top - The scrollable's top scroll button.
 * @csspart button-bottom - The scrollable's bottom scroll button.
 * @csspart shadow-left - The scrollable's left shadow.
 * @csspart shadow-right - The scrollable's right shadow.
 * @csspart shadow-top - The scrollable's top shadow.
 * @csspart shadow-bottom - The scrollable's bottom shadow.
 *
 * @cssproperty --gradient-color - Defines a custom color for the gradient.
 */

@customElement('sd-scrollable')
export default class SdScrollable extends SolidElement {
  public localize = new LocalizeController(this);

  /** Defines the scroll orientation */
  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' | 'auto' = 'horizontal';

  /** Activates browser scrollbars */
  @property({ type: Boolean, reflect: true }) scrollbars = false;

  /** Activates scroll buttons */
  @property({ type: Boolean, reflect: true }) buttons = false;

  /** Activates a shadow as optional visual scroll indicator */
  @property({ type: Boolean, reflect: true }) shadows = false;

  /** Adds inset padding */
  @property({ type: Boolean, reflect: true }) inset = false;

  /** The amount in px to be scrolled when clicking the buttons. */
  @property({ type: Number, reflect: true }) step = 150;

  @state() private canScroll: Record<'left' | 'right' | 'up' | 'down', boolean> = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  @state() private isScrollHorizontalEnabled: boolean = false;
  @state() private isScrollVerticalEnabled: boolean = false;
  @state() private isKeyboardNavigation: boolean = false;

  private resizeObserver: ResizeObserver;
  private scrollContainer: HTMLElement | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.updateScrollEnabledFlags();

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
    if (changedProperties.has('orientation') || changedProperties.has('buttons') || changedProperties.has('shadows')) {
      this.updateScrollEnabledFlags();
      this.updateScrollIndicatorVisibility();
    }
  }

  private updateScrollEnabledFlags() {
    const dir = this.orientation;
    this.isScrollHorizontalEnabled = dir === 'horizontal' || dir === 'auto';
    this.isScrollVerticalEnabled = dir === 'vertical' || dir === 'auto';
  }

  private get container(): HTMLElement | null {
    return this.renderRoot.querySelector('.scroll-container');
  }

  updateScrollIndicatorVisibility() {
    const container = this.container;
    if (!container) {
      return;
    }

    const canScrollLeft = this.isScrollHorizontalEnabled && container.scrollLeft > 0;
    const canScrollRight =
      this.isScrollHorizontalEnabled && container.scrollLeft + container.clientWidth < container.scrollWidth - 1;
    const canScrollUp = this.isScrollVerticalEnabled && container.scrollTop > 0;
    const canScrollDown =
      this.isScrollVerticalEnabled && container.scrollTop + container.clientHeight < container.scrollHeight - 1;

    const startButton = this.renderRoot.querySelector('[part="button-start"]');
    const endButton = this.renderRoot.querySelector('[part="button-end"]');

    this.canScroll = {
      left: this.isKeyboardNavigation ? this.isScrollHorizontalEnabled : canScrollLeft,
      right: this.isKeyboardNavigation ? this.isScrollHorizontalEnabled : canScrollRight,
      up: this.isKeyboardNavigation ? this.isScrollVerticalEnabled : canScrollUp,
      down: this.isKeyboardNavigation ? this.isScrollVerticalEnabled : canScrollDown
    };

    const startEventTriggered = canScrollLeft || canScrollUp;
    const endEventTriggered = canScrollRight || canScrollDown;

    if (startEventTriggered) {
      this.dispatchEvent(new CustomEvent('start'));
    }
    if (endEventTriggered) {
      this.dispatchEvent(new CustomEvent('end'));
    }

    if (this.isKeyboardNavigation) {
      if (startButton) {
        (startButton as HTMLElement).hidden = !startEventTriggered;
      }
      if (startButton && startEventTriggered && !(canScrollDown || canScrollRight)) {
        (startButton as HTMLElement).focus();
      }

      if (endButton) {
        (endButton as HTMLElement).hidden = !endEventTriggered;
      }
      if (endButton && endEventTriggered && !(canScrollUp || canScrollLeft)) {
        (endButton as HTMLElement).focus();
      }
    }
  }

  handleScroll(direction: 'left' | 'right' | 'up' | 'down', event?: PointerEvent) {
    const scrollAmount = direction === 'left' || direction === 'up' ? -this.step : this.step;
    const scrollDirection = direction === 'left' || direction === 'right' ? 'left' : 'top';

    this.isKeyboardNavigation = event?.pointerType !== 'mouse';

    const scrollOptions: ScrollToOptions = {
      behavior: 'smooth'
    };
    scrollOptions[scrollDirection] = scrollAmount;

    this.scrollContainer?.scrollBy(scrollOptions);

    // Dispatching custom event
    const eventName = `button-${direction}`;
    this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));
  }

  render() {
    const scrollButtonClasses =
      'relative p-0 border-0 bg-transparent cursor-pointer w-5 h-5 flex items-center justify-center sd-interactive rounded-md flex text-lg';
    const scrollShadowClasses = 'scroll-shadow absolute z-10 pointer-events-none';

    return html`
      <div
        part="base"
        class=${cx(
          'scroll-container flex overflow-hidden flex-1',
          this.orientation === 'horizontal' &&
            'scroll-horizontal flex-row whitespace-nowrap items-center overflow-x-scroll overflow-y-hidden',
          this.orientation === 'vertical' && 'scroll-vertical justify-items-center overflow-y-scroll overflow-x-hidden',
          this.orientation === 'auto' && 'scroll-auto overflow-auto',
          this.scrollbars ? 'show-scrollbars' : 'hide-scrollbars',
          this.inset ? 'p-4' : ''
        )}
        @scroll=${this.updateScrollIndicatorVisibility}
        tabindex="0"
      >
        <div part="scroll-content" class="flex-1">
          <slot></slot>
        </div>
      </div>
      ${this.buttons
        ? html`
            ${this.isScrollHorizontalEnabled
              ? html`
                  ${this.canScroll.left
                    ? html`
                        <div
                          part="button-left"
                          class="absolute z-10 flex items-center justify-center top-0 left-0 h-full w-8"
                        >
                          <button
                            part="button-start"
                            class=${cx(scrollButtonClasses)}
                            @click=${(e: PointerEvent) => this.handleScroll('left', e)}
                          >
                            <slot name="icon-start">
                              <sd-icon
                                library="system"
                                name="chevron-up"
                                class="rotate-[-90deg]"
                                label=${this.localize.term('scrollToStart')}
                              ></sd-icon>
                            </slot>
                          </button>
                        </div>
                      `
                    : null}
                  ${this.canScroll.right
                    ? html`
                        <div
                          part="button-right"
                          class="absolute z-10 flex items-center justify-center top-0 right-0 h-full w-8"
                        >
                          <button
                            part="button-end"
                            class=${cx(scrollButtonClasses)}
                            @click=${(e: PointerEvent) => this.handleScroll('right', e)}
                          >
                            <slot name="icon-end">
                              <sd-icon
                                library="system"
                                name="chevron-down"
                                class="rotate-[-90deg]"
                                label=${this.localize.term('scrollToEnd')}
                              ></sd-icon>
                            </slot>
                          </button>
                        </div>
                      `
                    : null}
                `
              : null}
            ${this.isScrollVerticalEnabled
              ? html`
                  ${this.canScroll.up
                    ? html`
                        <div
                          part="button-top"
                          class="absolute z-10 flex items-center justify-center top-0 left-0 w-full h-8"
                        >
                          <button
                            part="button-start"
                            class=${cx(scrollButtonClasses)}
                            @click=${(e: PointerEvent) => this.handleScroll('up', e)}
                          >
                            <slot name="icon-start">
                              <sd-icon
                                library="system"
                                name="chevron-up"
                                label=${this.localize.term('scrollToStart')}
                              ></sd-icon>
                            </slot>
                          </button>
                        </div>
                      `
                    : null}
                  ${this.canScroll.down
                    ? html`
                        <div
                          part="button-bottom"
                          class="absolute z-10 flex items-center justify-center bottom-0 left-0 w-full h-8"
                        >
                          <button
                            part="button-end"
                            class=${cx(scrollButtonClasses)}
                            @click=${(e: PointerEvent) => this.handleScroll('down', e)}
                          >
                            <slot name="icon-end">
                              <sd-icon
                                library="system"
                                name="chevron-down"
                                label=${this.localize.term('scrollToEnd')}
                              ></sd-icon>
                            </slot>
                          </button>
                        </div>
                      `
                    : null}
                `
              : null}
          `
        : null}
      ${this.shadows
        ? html`
            ${this.isScrollHorizontalEnabled
              ? html`
                  ${this.canScroll.left
                    ? html`<div
                        part="shadow-left"
                        class="${scrollShadowClasses} left top-0 left-0 w-[6px] h-full"
                      ></div>`
                    : null}
                  ${this.canScroll.right
                    ? html`<div
                        part="shadow-right"
                        class="${scrollShadowClasses} right top-0 right-0 w-[6px] h-full"
                      ></div>`
                    : null}
                `
              : null}
            ${this.isScrollVerticalEnabled
              ? html`
                  ${this.canScroll.up
                    ? html`<div part="shadow-top" class="${scrollShadowClasses} top top-0 left-0 w-full h-[6px]"></div>`
                    : null}
                  ${this.canScroll.down
                    ? html`<div
                        part="shadow-bottom"
                        class="${scrollShadowClasses} bottom bottom-0 left-0 w-full h-[6px]"
                      ></div>`
                    : null}
                `
              : null}
          `
        : null}
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --gradient-color: rgba(255, 255, 255, 0);
        --gradient: var(--gradient-color) 0%, #fff 80%, #fff 100%;

        @apply flex relative overflow-hidden;
      }

      .hide-scrollbars {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
      }

      .hide-scrollbars::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }

      /* Default state: scrollbar is transparent */
      .scroll-container::-webkit-scrollbar-thumb {
        @apply bg-transparent;
      }

      /* On hover: apply custom styles to the scrollbar thumb */
      .scroll-container:hover::-webkit-scrollbar-thumb {
        background: var(--background-neutral-400, #c3c3c3);
        @apply rounded-sm;
      }

      /* Apply width and height to the scrollbar itself */
      .scroll-container::-webkit-scrollbar {
        @apply w-1 h-1;
      }

      .scroll-auto {
        overflow: auto;
      }

      [part='button-left'] {
        background: linear-gradient(270deg, var(--gradient));
      }

      [part='button-right'] {
        background: linear-gradient(90deg, var(--gradient));
      }

      [part='button-top'] {
        background: linear-gradient(0deg, var(--gradient));
      }

      [part='button-bottom'] {
        background: linear-gradient(180deg, var(--gradient));
      }

      [part='shadow-left'] {
        background: linear-gradient(270deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      [part='shadow-right'] {
        background: linear-gradient(90deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      [part='shadow-top'] {
        background: linear-gradient(0deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      [part='shadow-bottom'] {
        background: linear-gradient(180deg, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.4) 100%);
      }

      .sd-icon--top {
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
