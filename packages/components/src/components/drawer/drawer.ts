import '../button/button';
import '../icon/icon';
import { animateTo, stopAnimations } from '../../internal/animate';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { uppercaseFirstLetter } from '../../internal/string';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Used as a panel that slides out from the side of the screen which contains a set of information or actions.
 * @documentation https://solid.union-investment.com/[storybook-link]/drawer
 * @status stable
 * @since 1.9
 *
 * @dependency sd-button
 *
 * @slot - The drawer's main content.
 * @slot header - The drawer's header, usually a title.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @event sd-show - Emitted when the drawer opens.
 * @event sd-after-show - Emitted after the drawer opens and all animations are complete.
 * @event sd-hide - Emitted when the drawer closes.
 * @event sd-after-hide - Emitted after the drawer closes and all animations are complete.
 * @event sd-initial-focus - Emitted when the drawer opens and is ready to receive focus. Calling
 *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} sd-request-close - Emitted when the user attempts to
 *   close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's base wrapper.
 * @csspart panel - The drawer's panel (where the drawer and its content are rendered).
 * @csspart header - The drawer's header. This element wraps the title and the close-button.
 * @csspart title - The drawer's title.
 * @csspart close-button - The close button, an `<sd-button>`.
 * @csspart body - The drawer's body.
 * @csspart footer - The drawer's footer.
 *
 * @cssproperty --width - The preferred width of the drawer.
 *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.
 * @cssproperty --sd-panel-color-border - The border color of the drawer panel.
 * @cssproperty --sd-overlay-color-background - The background color of the drawer overlay.
 *
 * @csspart overlay - The overlay that covers the screen behind the drawer.
 *
 * @animation drawer.showEnd - The animation to use when showing a drawer with `end` placement.
 * @animation drawer.showStart - The animation to use when showing a drawer with `start` placement.
 * @animation drawer.hideEnd - The animation to use when hiding a drawer with `end` placement.
 * @animation drawer.hideStart - The animation to use when hiding a drawer with `start` placement.
 * @animation drawer.denyClose - The animation to use when a request to close the drawer is denied.
 * @animation drawer.overlay.show - The animation to use when showing the drawer's overlay.
 * @animation drawer.overlay.hide - The animation to use when hiding the drawer's overlay.
 */
@customElement('sd-drawer')
export default class SdDrawer extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'footer');
  public localize = new LocalizeController(this);

  @query('[part=base]') drawer: HTMLDialogElement;
  @query('[part=overlay]') overlay: HTMLElement;
  @query('[part=panel]') panel: HTMLElement;
  @query('[part=close-button]') closeButton: HTMLElement;

  /**
   * Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @property({ type: String, attribute: 'label', reflect: true }) label = '';

  /** The direction from which the drawer will open. */
  @property({ type: String, reflect: true }) placement: 'end' | 'start' = 'end';

  /**
   * Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.
   */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  firstUpdated() {
    this.drawer.addEventListener('cancel', (event: Event) => {
      event.preventDefault();
      this.requestClose('keyboard');
    });

    if (this.open) {
      this.drawer.showModal();
    }
  }

  private requestClose(source: 'close-button' | 'keyboard' | 'overlay') {
    const slRequestClose = this.emit('sd-request-close', {
      cancelable: true,
      detail: { source }
    });

    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this, 'drawer.denyClose', { dir: this.localize.dir() });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }

    this.hide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    const closeButtonBase = this.closeButton.shadowRoot?.querySelector('[part="base"]');

    if (this.open) {
      // Show
      this.emit('sd-show');

      // When the drawer is shown, Safari will attempt to set focus on whatever element has autofocus. This causes the
      // drawer's animation to jitter, so we'll temporarily remove the attribute, call `focus({ preventScroll: true })`
      // ourselves, and add the attribute back afterwards.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/693
      //
      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      await stopAnimations(this.drawer);
      this.drawer.showModal();
      this.drawer.removeAttribute('inert');

      const overlayShowAnimation = getAnimation(this, 'drawer.overlay.show', { dir: this.localize.dir() });
      animateTo(this.overlay, overlayShowAnimation.keyframes, overlayShowAnimation.options);

      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      await animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options);

      //Update ARIA attributes to close button
      closeButtonBase?.setAttribute('aria-controls', 'drawer');
      closeButtonBase?.setAttribute('aria-expanded', 'true');

      // Set initial focus
      requestAnimationFrame(() => {
        const sdInitialFocus = this.emit('sd-initial-focus', { cancelable: true });

        if (!sdInitialFocus.defaultPrevented) {
          // Set focus to the autofocus target and restore the attribute
          if (autoFocusTarget) {
            (autoFocusTarget as HTMLInputElement).focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }

        // Restore the autofocus attribute
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute('autofocus', '');
        } else {
          this.closeButton.focus();
        }
      });

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');

      await stopAnimations(this.drawer);
      const overlayHideAnimation = getAnimation(this, 'drawer.overlay.hide', { dir: this.localize.dir() });
      animateTo(this.overlay, overlayHideAnimation.keyframes, overlayHideAnimation.options);

      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });

      await animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options);
      this.drawer.close();
      this.drawer.setAttribute('inert', '');

      //Add a11y attributes to close button
      closeButtonBase?.setAttribute('aria-expanded', 'false');

      this.emit('sd-after-hide');
    }
  }

  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the drawer */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'sd-after-hide');
  }

  render() {
    /* eslint-disable lit-a11y/click-events-have-key-events */
    return html`
      <dialog
        id="drawer"
        part="base"
        class="top-0 start-0 w-full h-full p-0 bg-transparent border-none max-w-none max-h-none"
        aria-label=${this.label}
      >
        <div part="overlay" class="fixed inset-0" @click=${() => this.requestClose('overlay')}></div>
        <div
          part="panel"
          class=${cx(
            'absolute flex flex-col gap-4 z-10 max-w-full max-h-full bg-white shadow-lg overflow-auto pointer-events-auto focus:outline-none',
            {
              end: 'top-0 end-0 bottom-auto start-auto w-[var(--width)] h-full',
              start: 'top-0 end-auto bottom-auto start-0 w-[var(--width)] h-full'
            }[this.placement]
          )}
          aria-label=${this.label}
          tabindex="0"
        >
          ${!this.noHeader
            ? html`
                <header
                  part="header"
                  class="flex justify-between py-2 px-4 items-center flex-shrink-0"
                  style="min-height: 64px;"
                >
                  <div part="title">
                    <slot name="header" part="title" class="flex-auto text-xl m-0" id="title"> </slot>
                  </div>
                  <div class="shrink-0 flex flex-wrap justify-end gap-1 ms-4 absolute top-2 end-2">
                    <sd-button
                      variant="tertiary"
                      size="lg"
                      part="close-button"
                      @click=${() => this.requestClose('close-button')}
                    >
                      <sd-icon label=${this.localize.term('close')} name="close" library="_internal"></sd-icon>
                    </sd-button>
                  </div>
                </header>
              `
            : html` <sd-button
                variant="tertiary"
                size="lg"
                part="close-button"
                @click=${() => this.requestClose('close-button')}
                class="absolute top-2 end-2 z-10"
                ><sd-icon label=${this.localize.term('close')} name="close" library="_internal"></sd-icon
              ></sd-button>`}
          <div part="body" class="flex-auto block px-4 focus-visible:focus-outline !-outline-offset-2" tabindex="0">
            <slot></slot>
          </div>
          <footer part="footer" class=${cx(this.hasSlotController.test('footer') ? 'text-left p-4' : 'hidden')}>
            <slot name="footer"></slot>
          </footer>
        </div>
      </dialog>
    `;
    /* eslint-enable lit-a11y/click-events-have-key-events */
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --width: 25rem;
        @apply contents;
      }

      [part='body'] {
        -webkit-overflow-scrolling: touch;
        @apply overflow-y-scroll;
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          @apply w-0 h-0;
        }
      }

      :host [part='panel'] {
        outline: 1px solid rgb(var(--sd-panel-color-border, transparent));
      }

      ::backdrop {
        display: none;
      }

      [part='overlay'] {
        background-color: rgb(var(--sd-overlay-color-background, 5 21 48 / 0.9));
      }
    `
  ];
}

// Start
setDefaultAnimation('drawer.showStart', {
  keyframes: [
    { opacity: 0, translate: '-100%' },
    { opacity: 1, translate: '0' }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: '100%' },
    { opacity: 1, translate: '0' }
  ],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('drawer.hideStart', {
  keyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '-100%' }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '100%' }
  ],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

// End
setDefaultAnimation('drawer.showEnd', {
  keyframes: [
    { opacity: 0, translate: '100%' },
    { opacity: 1, translate: '0' }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: '-100%' },
    { opacity: 1, translate: '0' }
  ],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('drawer.hideEnd', {
  keyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '100%' }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '-100%' }
  ],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

// Deny close
setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

// Overlay
setDefaultAnimation('drawer.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'linear' }
});

setDefaultAnimation('drawer.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'linear' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-drawer': SdDrawer;
  }
}
