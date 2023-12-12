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

const toastStackDefault = Object.assign(document.createElement('div'), {
  className: 'sd-toast-stack sd-toast-stack--top-right'
});
const toastStackBottomCenter = Object.assign(document.createElement('div'), {
  className: 'sd-toast-stack sd-toast-stack--bottom-center'
});

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://solid.union-investment.com/[storybook-link]/notification
 * @status stable
 * @since 1.22.0
 *
 * @dependency sd-button
 *
 * @slot - The sd-notification's main content.
 * @slot icon - An icon to show in the sd-notification. Works best with `<sd-icon>`.
 *
 * @event sd-show - Emitted when the notification opens.
 * @event sd-after-show - Emitted after the notification opens and all animations are complete.
 * @event sd-hide - Emitted when the notification closes.
 * @event sd-after-hide - Emitted after the notification closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart content - The container that wraps the notifications's main content and the close button.
 * @csspart message - The container that wraps the notifications's main content.
 * @csspart duration-indicator__elapsed - The current duration indicator.
 * @csspart duration-indicator__total - The total duration indicator.
 * @csspart close-button - The close button, an `<sd-icon-button>`.
 *
 * @animation notification.show - The animation to use when showing the sd-notification.
 * @animation notifiation.hide - The animation to use when hiding the sd-notification.
 */

@customElement('sd-notification')
export default class SdNotification extends SolidElement {
  private autoHideTimeout: number;
  private readonly localize = new LocalizeController(this);

  @query('[part~="base"]') base: HTMLElement;

  /**
   * Indicates whether or not sd-notification is open. You can toggle this attribute to show and hide the notification, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the notifications's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Enables a close button that allows the user to dismiss the notification. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** The sd-notification's theme. */
  @property({ reflect: true }) variant: 'info' | 'success' | 'error' | 'warning' = 'info';

  /** The position of the toasted sd-notification. */
  @property({ reflect: true, attribute: 'toast-stack' }) toastStack: 'top-right' | 'bottom-center' = 'top-right';

  /**
   * The length of time, in milliseconds, the sd-notification will show before closing itself. If the user interacts with
   * the notification before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the notification will not close on its own.
   */
  @property({ type: Number }) duration = Infinity;

  /** Enables an animation that visualizes the duration of a notification. */
  @property({ type: Boolean, reflect: true, attribute: 'duration-indicator' }) durationIndicator = false;

  private remainingDuration = this.duration;
  private startTime = Date.now();

  firstUpdated() {
    this.base.hidden = !this.open;
  }

  private startAutoHide() {
    clearTimeout(this.autoHideTimeout);
    this.startTime = Date.now();
    this.remainingDuration = this.duration;
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  private onHover() {
    clearTimeout(this.autoHideTimeout);

    if (this.duration < Infinity) {
      this.remainingDuration -= Date.now() - this.startTime;
    }
  }

  private onHoverEnd() {
    this.startTime = Date.now();
    clearTimeout(this.autoHideTimeout);

    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => {
        this.hide();
      }, this.remainingDuration);
    }
  }

  private handleCloseClick() {
    this.hide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('sd-show');

      if (this.duration < Infinity) {
        this.startAutoHide();
      }
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'notification.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');

      clearTimeout(this.autoHideTimeout);

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'notification.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit('sd-after-hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.startAutoHide();
  }

  /** Shows the notification. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the notification */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'sd-after-hide');
  }

  /**
   * Displays the notification as a toast notification. This will move the notification out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the notification, you can reuse it by
   * calling this method again. The returned promise will resolve after the notification is hidden.
   */
  async toast() {
    return new Promise<void>(resolve => {
      const toastStack = this.toastStack === 'bottom-center' ? toastStackBottomCenter : toastStackDefault;

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
        class=${cx('w-full overflow-hidden flex items-stretch relative m-2')}
        role="alert"
        id="notification"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mouseenter=${this.onHover}
        @mouseleave=${this.onHoverEnd}
      >
        <slot
          name="icon"
          part="icon"
          class=${cx(
            'min-w-min flex items-center px-3 justify-center',
            {
              info: 'bg-info',
              success: 'bg-success',
              warning: 'bg-warning',
              error: 'bg-error'
            }[this.variant]
          )}
        >
          <sd-icon
            name=${{
              info: 'info-circle',
              success: 'confirm-circle',
              warning: 'exclamation-circle',
              error: 'warning'
            }[this.variant] || ''}
            library="system"
            class="h-6 w-6 text-white"
          ></sd-icon>
        </slot>

        <div
          part="content"
          class=${cx(
            'h-full w-full p-1 gap-2 flex items-center justify-stretch bg-white',
            'border-solid border-[1px] border-l-0 border-neutral-400'
          )}
        >
          <slot part="message" class="block w-full pl-3 py-2" aria-live="polite"></slot>

          ${this.closable
            ? html`
                <sd-button
                  size="md"
                  variant="tertiary"
                  part="close-button"
                  class="ml-auto flex flex-[0_0_auto] items-stretch"
                  label=${this.localize.term('close')}
                  @click=${this.handleCloseClick}
                >
                  <sd-icon name="close" library="system" color="currentColor"></sd-icon>
                </sd-button>
              `
            : ''}
        </div>

        ${this.durationIndicator
          ? html`
              <div
                part="duration-indicator__elapsed"
                id="duration-indicator__elapsed"
                style=${`animation-duration: ${this.duration}ms`}
                class=${cx(`absolute w-0 h-[2px] bottom-0 bg-primary z-10 animate-grow`)}
              ></div>
              <div part="duration-indicator__total" class="w-full h-[2px] bottom-0 absolute bg-neutral-400"></div>
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
        @apply contents;
      }

      #notification:hover #duration-indicator__elapsed {
        animation-play-state: paused !important;
      }
    `
  ];
}

setDefaultAnimation('notification.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('notification.hide', {
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
