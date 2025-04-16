import '../icon/icon';
import { animateTo, parseDuration, stopAnimations } from '../../internal/animate';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import cx from 'classix';
// eslint-disable-next-line
import SdPopup from '../popup/popup';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Tooltips display additional information based on a specific action.
 * @documentation https://solid.union-investment.com/[storybook-link]/tooltip
 * @status stable
 * @since 1.23.0
 *
 * @dependency sd-popup
 * @dependency sd-icon
 *
 * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
 * @slot anchor - Slot to change the default trigger icon. The default icon is an info circle.
 * @slot content - The content to render in the tooltip. Alternatively, you can use the `content` attribute.
 *
 * @event sd-show - Emitted when the tooltip begins to show.
 * @event sd-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event sd-hide - Emitted when the tooltip begins to hide.
 * @event sd-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<sd-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
 * @csspart body - The tooltip's body where its content is rendered.
 *
 * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.
 * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.
 *
 * @animation tooltip.show - The animation to use when showing the tooltip.
 * @animation tooltip.hide - The animation to use when hiding the tooltip.
 */
@customElement('sd-tooltip')
export default class SdTooltip extends SolidElement {
  private hoverTimeout: number;

  private interactionType: 'keyboard' | 'mouse' | undefined;

  public localize = new LocalizeController(this);

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('#tooltip') body: HTMLElement;
  @query('sd-popup') popup: SdPopup;

  /** Sets the size of the default trigger icon. */
  @property({ type: String, reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** The tooltip's content. If you need to display HTML, use the `content` slot instead. */
  @property({ type: String, reflect: true }) content = '';

  /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   */
  @property({ type: String, reflect: true }) placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end' = 'top';

  /** Disables the tooltip so it won't show when triggered. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   */
  @property({ type: String, reflect: true }) trigger = 'click focus';

  /**
   * Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
   * scenarios.
   */
  @property({ type: Boolean, reflect: true }) hoist = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    document.addEventListener('mousedown', this.handleMouseInteraction);
    document.addEventListener('keydown', this.handleKeyboardInteraction);

    this.updateComplete.then(() => {
      this.addEventListener('blur', this.handleBlur, true);
      this.addEventListener('focus', this.handleFocus, true);
      this.addEventListener('click', this.handleClick);
      this.addEventListener('keydown', this.handleKeyDown);
      this.addEventListener('mouseover', this.handleMouseOver);
      this.addEventListener('mouseout', this.handleMouseOut);
    });
  }

  firstUpdated() {
    this.body.hidden = !this.open;

    if (this.hasCustomTrigger) {
      this.formatDefaultSlot(this.defaultSlot);
    }

    // If the tooltip is visible on init, update its position
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('blur', this.handleBlur, true);
    this.removeEventListener('focus', this.handleFocus, true);
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeEventListener('mouseover', this.handleMouseOver);
    this.removeEventListener('mouseout', this.handleMouseOut);
    document.removeEventListener('mousedown', this.handleMouseInteraction);
    document.removeEventListener('keydown', this.handleKeyboardInteraction);
  }

  private get hasCustomTrigger() {
    return !!this.querySelector('*');
  }

  // removes empty text nodes from the default slot
  private formatDefaultSlot(slot: HTMLSlotElement) {
    const nodes = slot.assignedNodes({ flatten: true });
    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && !node?.textContent?.trim()) {
        node?.parentNode?.removeChild(node);
      }
    });
  }

  private handleMouseInteraction = () => {
    this.interactionType = 'mouse';
  };

  private handleKeyboardInteraction = () => {
    this.interactionType = 'keyboard';
  };

  private handleBlur() {
    if (this.hasTrigger('focus')) {
      this.hide();
    }
  }

  private handleClick() {
    if (this.hasTrigger('click')) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  private handleFocus() {
    if (this.hasTrigger('focus')) {
      if (this.interactionType === 'keyboard') {
        this.show();
      }
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Pressing escape when the target element has focus should dismiss the tooltip
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.hide();
    }
  }

  private handleMouseOver() {
    if (this.hasTrigger('hover')) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue('--show-delay'));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.show(), delay);
    }
  }

  private handleMouseOut() {
    if (this.hasTrigger('hover')) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue('--hide-delay'));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
    }
  }

  private hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(' ');
    return triggers.includes(triggerType);
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled) {
        return;
      }
      // Show
      this.emit('sd-show');

      await stopAnimations(this.body);
      this.body.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, 'tooltip.show', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');

      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, 'tooltip.hide', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.active = false;
      this.body.hidden = true;

      this.emit('sd-after-hide');
    }
  }

  @watch(['content', 'hoist', 'placement'])
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }

  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return undefined;
    }
    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;

    if (this.trigger === 'click') {
      this.focus();
    } else {
      this.blur();
    }

    return waitForEvent(this, 'sd-after-hide');
  }

  render() {
    const isStart = this.placement.endsWith('-start');
    const isEnd = this.placement.endsWith('-end');

    return html`
      <sd-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${cx(this.open && 'tooltip--open')}
        placement=${this.placement}
        distance="10"
        skidding=${{ start: 2, end: -2, default: 0 }[isStart ? 'start' : isEnd ? 'end' : 'default'] *
        (this.size === 'sm' ? -1 : 1)}
        strategy=${this.hoist ? 'fixed' : 'absolute'}
        flip
        shift
        arrow
        auto-size="vertical"
        arrow-padding="0"
      >
        ${this.hasCustomTrigger
          ? html` <slot slot="anchor"></slot>`
          : html`<button
              slot="anchor"
              aria-describedby="tooltip"
              class=${cx('flex sd-interactive rounded-full', this.size === 'lg' ? 'text-xl' : 'text-base')}
              ?disabled=${this.disabled}
              aria-expanded=${this.open}
              aria-controls="tooltip"
            >
              <sd-icon
                library="system"
                name="info-circle"
                label="Tooltip"
                class=${cx(this.disabled && 'sd-interactive--disabled')}
              ></sd-icon>
            </button>`}
        <slot
          name="content"
          part="body"
          id="tooltip"
          class=" bg-primary text-white py-3 px-4 block rounded-none text-sm text-left"
          role="tooltip"
          aria-label="Tooltip"
          aria-live=${this.open ? 'polite' : 'off'}
        >
          ${this.content}
        </slot>
      </sd-popup>
    `;
  }
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --hide-delay: 0ms;
        --show-delay: 150ms;
        @apply contents;
      }

      sd-popup {
        --arrow-color: rgb(var(--sd-color-primary, 0 53 142) / 1);
        --arrow-size: 10px;
      }

      sd-popup::part(popup) {
        @apply pointer-events-none z-10 shadow;
      }

      sd-popup::part(arrow) {
        --tw-shadow: var(--sd-shadow, 0px 1px 3px 0px rgb(81 81 81 / 75%));
        --tw-shadow-colored: 0px 1px 3px 0px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }

      sd-popup[placement^='top']::part(popup) {
        @apply origin-bottom;
      }

      sd-popup[placement^='bottom']::part(popup) {
        @apply origin-top;
      }

      #tooltip {
        max-width: var(--max-width);
      }

      ::slotted([slot='content']) {
        @apply overflow-auto;
        max-width: var(--auto-size-available-width) !important;
        max-height: var(--auto-size-available-height) !important;
      }
    `
  ];
}

setDefaultAnimation('tooltip.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: 'ease' }
});

setDefaultAnimation('tooltip.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-tooltip': SdTooltip;
  }
}
