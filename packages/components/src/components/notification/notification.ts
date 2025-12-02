import '../button/button';
import '../icon/icon';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate.js';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { kebabToCamelCase, uppercaseFirstLetter } from '../../internal/string';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element.js';

const stacks: Record<string, HTMLElement | null> = {
  'top-right': null,
  'bottom-center': null
};

const loadStacks = () => {
  Object.entries(stacks).forEach(([name]) => {
    const stack: HTMLElement | null = document.querySelector(`#sd-toast-stack--${name}`);

    if (stack) {
      stack.setAttribute('role', 'region');
      stacks[name] = stack;
      return;
    }

    stacks[name] = Object.assign(document.createElement('div'), {
      role: 'region',
      id: `sd-toast-stack--${name}`,
      className: `sd-toast-stack sd-toast-stack--${name}`
    });
  });
};

loadStacks();

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://solid.union-investment.com/[storybook-link]/notification
 * @status stable
 * @since 1.22.0
 *
 * @dependency sd-button
 * @dependency sd-icon
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
 * @csspart wrapper - The container that wraps all the notification elements.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart content - The container that wraps the notifications's main content and the close button.
 * @csspart message - The container that wraps the notifications's main content.
 * @csspart duration-indicator__elapsed - The current duration indicator.
 * @csspart duration-indicator__total - The total duration indicator.
 * @csspart close-button - The close button, an `<sd-icon-button>`.
 *
 * @animation notification.show - The animation to use when showing the sd-notification.
 * @animation notifiation.hide - The animation to use when hiding the sd-notification.
 *
 * @cssproperty --sd-notification--error-color-background - The background color for error notifications.
 * @cssproperty --sd-notification--info-color-background - The background color for info notifications.
 * @cssproperty --sd-notification--success-color-background - The background color for success notifications.
 * @cssproperty --sd-notification--warning-color-background - The background color for warning notifications.
 */

@customElement('sd-notification')
export default class SdNotification extends SolidElement {
  private autoHideTimeout: number;
  public localize = new LocalizeController(this);

  @query('[part~="base"]') base: HTMLElement;
  @query('[part~="wrapper"]') wrapper: HTMLElement;
  @query('[part~="close-button"]') close: HTMLElement;

  /** The sd-notification's theme. */
  @property({ type: String, reflect: true }) variant: 'info' | 'success' | 'error' | 'warning' = 'info';

  /**
   * Indicates whether or not sd-notification is open. You can toggle this attribute to show and hide the notification, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the notifications's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Enables a close button that allows the user to dismiss the notification.
   * It also allows the user to dismiss the notification using the ESC.
   */
  @property({ type: Boolean, reflect: true }) closable = false;

  /**
   * The length of time, in milliseconds, the sd-notification will show before closing itself. If the user interacts with
   * the notification before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the notification will not close on its own.
   */
  @property({ type: Number, reflect: true }) duration = Infinity;

  /** Enables an animation that visualizes the duration of a notification. */
  @property({ type: Boolean, reflect: true, attribute: 'duration-indicator' }) durationIndicator = false;

  /** The position of the toasted sd-notification. */
  @property({ type: String, reflect: true, attribute: 'toast-stack' }) toastStack: 'top-right' | 'bottom-center' =
    'top-right';

  private remainingDuration = this.duration;
  private startTime = Date.now();

  get stack(): HTMLElement {
    return stacks[this.toastStack]!;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.stack.parentElement) {
      document.body.append(this.stack);
      this.stack.ariaLabel = this.localize.term('notifications');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.wrapper.hidden = !this.open;
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

  private handleKeyDown(event: KeyboardEvent) {
    if (this.closable && event.key === 'Escape') {
      this.hide();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('sd-show');

      if (this.duration < Infinity) {
        this.startAutoHide();
      }

      await Promise.all([stopAnimations(this.base), stopAnimations(this.wrapper)]);
      this.wrapper.hidden = false;

      const baseAnimation = getAnimation(this, 'notification.show', { dir: this.localize.dir() });
      const wrapperAnimation = getAnimation(
        this,
        `notification.wrapper.show${uppercaseFirstLetter(kebabToCamelCase(this.toastStack))}`,
        { dir: this.localize.dir() }
      );
      await Promise.all([
        animateTo(
          this.base,
          shimKeyframesHeightAuto(baseAnimation.keyframes, this.base.scrollHeight),
          baseAnimation.options
        ),
        animateTo(this.wrapper, wrapperAnimation.keyframes, wrapperAnimation.options)
      ]);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');

      clearTimeout(this.autoHideTimeout);

      await Promise.all([stopAnimations(this.base), stopAnimations(this.wrapper)]);
      const baseAnimation = getAnimation(this, 'notification.hide', { dir: this.localize.dir() });
      const wrapperAnimation = getAnimation(
        this,
        `notification.wrapper.hide${uppercaseFirstLetter(kebabToCamelCase(this.toastStack))}`,
        { dir: this.localize.dir() }
      );
      await Promise.all([
        animateTo(
          this.base,
          shimKeyframesHeightAuto(baseAnimation.keyframes, this.base.scrollHeight),
          baseAnimation.options
        ),
        animateTo(this.wrapper, wrapperAnimation.keyframes, wrapperAnimation.options)
      ]);
      this.wrapper.hidden = true;

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
      if (this.stack.parentElement === null) {
        document.body.append(this.stack);
      }

      this.stack.appendChild(this);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        this.clientWidth;
        this.show();
      });

      this.addEventListener(
        'sd-after-hide',
        () => {
          this.stack.removeChild(this);
          resolve();
        },
        { once: true }
      );
    });
  }

  render() {
    return html`
      <div
        part="base"
        class=${cx('w-full flex items-stretch m-2 focus-visible:focus-outline')}
        id="notification"
        tabindex="0"
        role="alert"
        aria-labelledby="message"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mouseenter=${this.onHover}
        @mouseleave=${this.onHoverEnd}
        @keydown=${this.handleKeyDown}
      >
        <div part="wrapper" class=${cx('w-full h-fit overflow-hidden flex items-stretch relative')}>
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
              library="_internal"
              class="h-6 w-6 text-white"
            ></sd-icon>
          </slot>

          <div
            part="content"
            class=${cx(
              'h-full w-full p-1 gap-2 flex items-center justify-stretch bg-white',
              'border-solid border-[1px] border-l-0 border-neutral-400',
              {
                info: 'sd-notification--info-color-background',
                success: 'sd-notification--success-color-background',
                warning: 'sd-notification--warning-color-background',
                error: 'sd-notification--error-color-background'
              }[this.variant]
            )}
          >
            <slot id="message" part="message" class="block w-full pl-3 py-2"></slot>

            ${this.closable
              ? html`
                  <sd-button
                    size="md"
                    variant="tertiary"
                    part="close-button"
                    class="ml-auto flex flex-[0_0_auto] items-stretch"
                    @click=${this.handleCloseClick}
                  >
                    <sd-icon
                      label=${this.localize.term('close')}
                      name="close"
                      library="_internal"
                      color="currentColor"
                    ></sd-icon>
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
                <div
                  part="duration-indicator__total"
                  class="w-full h-[2px] bottom-0 absolute border border-neutral-400"
                ></div>
              `
            : ''}
        </div>
      </div>
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
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
    { opacity: 0, height: 0 },
    { opacity: 1, height: 'auto' }
  ],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('notification.hide', {
  keyframes: [
    { opacity: 1, height: 'auto' },
    { opacity: 0, height: 0 }
  ],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

setDefaultAnimation('notification.wrapper.showTopRight', {
  keyframes: [{ bottom: '32px' }, { bottom: '0' }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('notification.wrapper.hideTopRight', {
  keyframes: [{ bottom: '0' }, { bottom: '32px' }],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-notification': SdNotification;
  }
}
