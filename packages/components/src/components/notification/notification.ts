import { animateTo, stopAnimations } from '../../internal/animate.js';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element.js';

const toastStack = Object.assign(document.createElement('div'), { className: 'sd-toast-stack' });

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://solid.union-investment.com/[storybook-link]/notification
 * @status stable
 * @since 1.20.0
 *
 * @dependency sd-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<sd-icon>`.
 *
 * @event sd-show - Emitted when the alert opens.
 * @event sd-after-show - Emitted after the alert opens and all animations are complete.
 * @event sd-hide - Emitted when the alert closes.
 * @event sd-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an `<sd-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */

@customElement('sd-notification')
export default class SdNotification extends SolidElement {
  private autoHideTimeout: number;
  private readonly localize = new LocalizeController(this);

  @query('[part~="base"]') base: HTMLElement;

  /**
   * Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
   */
  @property({ type: Boolean, reflect: true }) open = true;

  /** Enables a close button that allows the user to dismiss the alert. */
  @property({ type: Boolean, reflect: true }) closable = true;

  /** The alert's theme variant. */
  @property({ reflect: true }) variant: 'info' | 'success' | 'error' | 'warning' = 'info';

  /** Enables a toast notification. */
  @property({ type: Boolean, reflect: true }) toasted = false;

  /** The position of the toasted sd-notification. */
  @property({ reflect: true, attribute: 'toast-stack' }) toastStack: 'top-right' | 'bottom-center' = 'top-right';

  /**
   * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the alert will not close on its own.
   */
  @property({ type: Number }) duration = Infinity;

  /** Enables an animation that visualizes the duration of a notification. */
  @property({ type: Boolean, reflect: true, attribute: 'duration-indicator' }) durationIndicator = false;

  firstUpdated() {
    this.base.hidden = !this.open;
  }

  private restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  private handleCloseClick() {
    this.hide();
  }

  private handleMouseMove() {
    this.restartAutoHide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('sd-show');

      if (this.duration < Infinity) {
        this.restartAutoHide();
      }

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'alert.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');

      clearTimeout(this.autoHideTimeout);

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'alert.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit('sd-after-hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  /** Shows the alert. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the alert */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'sd-after-hide');
  }

  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise<void>(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      toastStack.appendChild(this);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        this.clientWidth;
        this.show();
      });

      this.addEventListener(
        'sd-after-hide',
        () => {
          toastStack.removeChild(this);
          resolve();

          // Remove the toast stack from the DOM when there are no more alerts
          if (toastStack.querySelector('sd-notification') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  render() {
    return html`
      <div
        part="base"
        class=${cx(
          'w-full overflow-hidden flex items-center relative',
          this.toasted && 'shadow-[0px_1px_3px_0px_#515151]',
          this.variant === 'info' && 'bg-info',
          this.variant === 'success' && 'bg-success',
          this.variant === 'warning' && 'bg-warning',
          this.variant === 'error' && 'bg-error'
        )}
        role="alert"
        id="notification"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class=${cx('text-white h-full min-w-min px-3 flex justify-center')}>
          <sd-icon
            name=${this.variant === 'info'
              ? 'info'
              : this.variant === 'success'
              ? 'success'
              : this.variant === 'warning'
              ? 'warning'
              : this.variant === 'error'
              ? 'error'
              : ''}
            library="system"
            class="h-6 w-6"
          ></sd-icon>
        </slot>

        <div
          class=${cx(
            'h-full w-full gap-2 flex items-center justify-stretch bg-white',
            !this.toasted && 'border-solid border-[1px] border-l-0 border-neutral-400',
            this.closable ? 'p-1 pl-3' : 'px-3 py-2'
          )}
        >
          <slot part="message" aria-live="polite"></slot>

          ${this.closable
            ? html`
                <sd-button
                  size="md"
                  variant="tertiary"
                  part="close-button"
                  class="ml-auto flex flex-[0_0_auto] items-center"
                  label=${this.localize.term('close')}
                  @click=${this.handleCloseClick}
                >
                  <sd-icon name="close" library="system" color="currentColor"></sd-icon>
                </sd-button>
              `
            : ''}
        </div>

        ${this.durationIndicator && this.duration !== Infinity
          ? html`
              <div
                part="duration-indicator"
                style=${`animation-duration: ${this.duration}ms`}
                class=${cx(`h-[2px] bottom-0 absolute bg-primary z-10 width-animation`)}
              ></div>
              <div part="duration-indicator" class="w-full h-[2px] bottom-0 absolute bg-neutral-400"></div>
            `
          : ''}
      </div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        display: contents;
      }

      .width-animation {
        width: 0%;
        animation: grow;
        animation-timing-function: linear;
        animation-delay: 0s;
      }

      #notification:hover .width-animation {
        width: 0%;
        animation: none;
      }

      @keyframes grow {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
    `
  ];
}

setDefaultAnimation('alert.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('alert.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-notification': SdNotification;
  }
}
