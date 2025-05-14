import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Scrollable is used to indicate there is hidden content to be scrolled.
 * @documentation https://solid.union-investment.com/[storybook-link]/scrollable
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon
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
  @query('[part="button-right"] button') rightButton: HTMLButtonElement | undefined;
  @query('[part="button-left"] button') leftButton: HTMLButtonElement | undefined;
  @query('[part="button-bottom"] button') downButton: HTMLButtonElement | undefined;
  @query('[part="button-top"] button') upButton: HTMLButtonElement | undefined;
  @query('.scroll-container') container: HTMLDivElement;
  @query('#announcement-container') announcementContainer: HTMLDivElement;

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

  private resizeObserver: ResizeObserver;

  connectedCallback() {
    super.connectedCallback();
    this.updateScrollEnabledFlags();

    this.resizeObserver = new ResizeObserver(() => {
      this.handleContainerScroll();
    });

    this.updateComplete.then(() => {
      if (this.container) {
        this.resizeObserver.observe(this.container);
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.container) {
      this.resizeObserver.unobserve(this.container);
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('orientation') || changedProperties.has('buttons') || changedProperties.has('shadows')) {
      this.updateScrollEnabledFlags();
      this.handleContainerScroll();
    }
  }

  private updateScrollEnabledFlags() {
    const dir = this.orientation;
    this.isScrollHorizontalEnabled = dir === 'horizontal' || dir === 'auto';
    this.isScrollVerticalEnabled = dir === 'vertical' || dir === 'auto';
  }

  private get scrollButtons() {
    return {
      left: this.leftButton,
      right: this.rightButton,
      up: this.upButton,
      down: this.downButton
    };
  }

  handleContainerScroll() {
    if (!this.container) {
      return;
    }

    const canScrollLeft = this.container.scrollLeft > 0;
    const canScrollRight = this.container.scrollLeft + this.container.clientWidth < this.container.scrollWidth - 1;
    const canScrollUp = this.container.scrollTop > 0;
    const canScrollDown = this.container.scrollTop + this.container.clientHeight < this.container.scrollHeight - 1;

    const couldScroll = this.canScroll;
    const canScroll = {
      left: this.isScrollHorizontalEnabled && canScrollLeft,
      right: this.isScrollHorizontalEnabled && canScrollRight,
      up: this.isScrollVerticalEnabled && canScrollUp,
      down: this.isScrollVerticalEnabled && canScrollDown
    };

    if ((couldScroll.left && !canScroll.left) || (couldScroll.up && !canScroll.up)) {
      this.dispatchEvent(new CustomEvent('start'));
    }

    if ((couldScroll.right && !canScroll.right) || (couldScroll.down && !canScroll.down)) {
      this.dispatchEvent(new CustomEvent('end'));
    }

    this.canScroll = canScroll;
  }

  handleScroll(direction: 'left' | 'right' | 'up' | 'down', e?: PointerEvent) {
    const amount = ['left', 'up'].includes(direction) ? -this.step : this.step;
    const axis = ['left', 'right'].includes(direction) ? 'horizontal' : 'vertical';
    const towards = ['left', 'up'].includes(direction) ? 'start' : 'end';
    const isKeyboardTriggered = !['mouse', 'touch'].includes(e?.pointerType ?? '');

    const scrollKey = axis === 'horizontal' ? 'left' : 'top';
    this.container?.scrollBy({
      behavior: 'smooth',
      [scrollKey]: amount
    });

    const eventName = `button-${direction}`;
    this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));

    const currentPosition = axis === 'horizontal' ? this.container.scrollLeft : this.container.scrollTop;
    const updatedPosition = currentPosition + amount;

    const limit =
      axis === 'horizontal'
        ? this.container.scrollWidth - this.container.clientWidth
        : this.container.scrollHeight - this.container.clientHeight;

    const reachedStart = towards === 'start' && updatedPosition <= 0;
    const reachedEnd = towards === 'end' && updatedPosition >= limit - 1;

    if (!(reachedStart || reachedEnd)) {
      const announcement = this.localize.term('scrolled');
      this.announcementContainer.textContent =
        this.announcementContainer.textContent === announcement ? `${announcement}\u200B` : announcement;
      return;
    }

    const clickedButton = this.scrollButtons[direction];
    const oppositeButton = {
      left: this.rightButton,
      right: this.leftButton,
      up: this.downButton,
      down: this.upButton
    }[direction];

    const label = reachedStart
      ? `${this.localize.term('scrolled')}. ${this.localize.term('scrollToEnd')}`
      : `${this.localize.term('scrolled')}. ${this.localize.term('scrollToStart')}`;

    oppositeButton?.querySelector('sd-icon')?.setAttribute('label', label);

    if (isKeyboardTriggered) {
      oppositeButton?.focus();
    } else {
      clickedButton?.blur();
    }
  }

  handleButtonBlur(direction: 'left' | 'right' | 'up' | 'down', e: FocusEvent) {
    const scrollTo = ['left', 'up'].includes(direction) ? 'start' : 'end';
    const label = scrollTo === 'start' ? this.localize.term('scrollToStart') : this.localize.term('scrollToEnd');
    const button = e.target as HTMLElement;
    button.querySelector('sd-icon')?.setAttribute('label', label);
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
          this.scrollbars ? 'show-scrollbars' : 'hide-scrollbars',
          this.inset && 'p-4',
          {
            horizontal: 'scroll-horizontal flex-row whitespace-nowrap items-center overflow-x-scroll overflow-y-hidden',
            vertical: 'scroll-vertical justify-items-center overflow-y-scroll overflow-x-hidden',
            auto: 'scroll-auto overflow-auto'
          }[this.orientation]
        )}
        @scroll=${this.handleContainerScroll}
        tabindex="0"
      >
        <div id="announcement-container" role="status" class="sr-only"></div>
        <div part="scroll-content" class="flex-1">
          <slot></slot>
        </div>
      </div>
      ${this.buttons
        ? html`
            ${this.isScrollHorizontalEnabled
              ? html`
                  <div
                    part="button-left"
                    class=${cx(
                      'absolute z-10 flex items-center justify-center top-0 left-0 h-full w-8',
                      !this.canScroll.left && 'opacity-0 pointer-events-none'
                    )}
                  >
                    <button
                      part="button-start"
                      class=${cx(scrollButtonClasses)}
                      aria-hidden=${ifDefined(!this.canScroll.left || undefined)}
                      tabindex=${ifDefined(!this.canScroll.left ? -1 : undefined)}
                      @click=${(e: PointerEvent) => this.handleScroll('left', e)}
                      @blur=${(e: FocusEvent) => this.handleButtonBlur('left', e)}
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
                  <div
                    part="button-right"
                    class=${cx(
                      'absolute z-10 flex items-center justify-center top-0 right-0 h-full w-8',
                      !this.canScroll.right && 'opacity-0 pointer-events-none'
                    )}
                  >
                    <button
                      part="button-end"
                      class=${cx(scrollButtonClasses)}
                      aria-hidden=${ifDefined(!this.canScroll.right || undefined)}
                      tabindex=${ifDefined(!this.canScroll.right ? -1 : undefined)}
                      @click=${(e: PointerEvent) => this.handleScroll('right', e)}
                      @blur=${(e: FocusEvent) => this.handleButtonBlur('right', e)}
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
            ${this.isScrollVerticalEnabled
              ? html`
                  <div
                    part="button-top"
                    class=${cx(
                      'absolute z-10 flex items-center justify-center top-0 left-0 w-full h-8',
                      !this.canScroll.up && 'opacity-0 pointer-events-none'
                    )}
                  >
                    <button
                      part="button-start"
                      class=${cx(scrollButtonClasses)}
                      aria-hidden=${ifDefined(!this.canScroll.up || undefined)}
                      tabindex=${ifDefined(!this.canScroll.up ? -1 : undefined)}
                      @click=${(e: PointerEvent) => this.handleScroll('up', e)}
                      @blur=${(e: FocusEvent) => this.handleButtonBlur('up', e)}
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
                  <div
                    part="button-bottom"
                    class=${cx(
                      'absolute z-10 flex items-center justify-center bottom-0 left-0 w-full h-8',
                      !this.canScroll.down && 'opacity-0 pointer-events-none'
                    )}
                  >
                    <button
                      part="button-end"
                      class=${cx(scrollButtonClasses)}
                      aria-hidden=${ifDefined(!this.canScroll.down || undefined)}
                      tabindex=${ifDefined(!this.canScroll.down ? -1 : undefined)}
                      @click=${(e: PointerEvent) => this.handleScroll('down', e)}
                      @blur=${(e: FocusEvent) => this.handleButtonBlur('down', e)}
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
