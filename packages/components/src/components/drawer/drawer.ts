import '../button/button';
import '../icon/icon';
import { animateTo, stopAnimations } from '../../internal/animate';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll';
import { uppercaseFirstLetter } from '../../internal/string';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import Modal from '../../internal/modal';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Drawers slide in from a container to expose additional options and information.
 * @documentation https://solid.union-investment.com/[storybook-link]/drawer
 * @status stable
 * @since 1.6
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
 * @csspart overlay - The overlay that covers the screen behind the drawer.
 * @csspart panel - The drawer's panel (where the drawer and its content are rendered).
 * @csspart header - The drawer's header. This element wraps the title and the close-button.
 * @csspart title - The drawer's title.
 * @csspart close-button - The close button, an `<sd-button>`.
 * @csspart body - The drawer's body.
 * @csspart footer - The drawer's footer.
 *
 * @cssproperty --width - The preferred width of the drawer.
 *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.
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
  private readonly localize = new LocalizeController(this);
  private modal = new Modal(this);
  private originalTrigger: HTMLElement | null;

  @query('[part=base]') drawer: HTMLElement;
  @query('[part=panel]') panel: HTMLElement;
  @query('[part=overlay]') overlay: HTMLElement;

  /**
   * Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @property({ attribute: 'label', reflect: true }) label = '';

  /** The direction from which the drawer will open. */
  @property({ reflect: true }) placement: 'end' | 'start' = 'end';

  /**
   * By default, the drawer slides out of its containing block (the viewport). Contained is a hidden feature used only for testing purposes. Please do not use it in production as it will likely change.
   */
  @property({ type: Boolean, reflect: true }) contained = false;

  /**
   * Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.
   */
  @property({ attribute: 'no-header', type: Boolean }) noHeader = false;

  firstUpdated() {
    this.drawer.hidden = !this.open;

    if (this.open) {
      this.addOpenListeners();

      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
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

  private addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  };

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('sd-show');
      this.addOpenListeners();
      this.originalTrigger = document.activeElement as HTMLElement;

      // Lock body scrolling only if the drawer isn't contained
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }

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

      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;

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
        }
      });

      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, 'drawer.overlay.show', { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');
      this.removeOpenListeners();

      if (!this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }

      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, 'drawer.overlay.hide', { dir: this.localize.dir() });

      // Animate the overlay and the panel at the same time. Because animation durations might be different, we need to
      // hide each one individually when the animation finishes, otherwise the first one that finishes will reappear
      // unexpectedly. We'll unhide them after all animations have completed.
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);

      this.drawer.hidden = true;

      // Now that the dialog is hidden, restore the overlay and panel for next time
      this.overlay.hidden = false;
      this.panel.hidden = false;

      // Restore focus to the original trigger
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }

      this.emit('sd-after-hide');
    }
  }

  @watch('contained', { waitUntilFirstUpdate: true })
  handleNoModalChange() {
    if (this.open && !this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }

    if (this.open && this.contained) {
      this.modal.deactivate();
      unlockBodyScrolling(this);
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
    return html`
      <div
        part="base"
        class=${cx(
          'top-0 start-0 w-full h-full pointer-events-none overflow-hidden',
          this.contained ? 'absolute' : 'fixed'
        )}
      >
        <div
          part="overlay"
          class=${cx(
            'block top-0 left-0 right-0 bottom-0 bg-neutral-800/75 pointer-events-auto',
            this.contained ? 'absolute' : 'fixed'
          )}
          @click=${() => this.requestClose('overlay')}
          tabindex="-1"
        ></div>

        <div
          part="panel"
          class=${cx(
            'absolute flex flex-col z-10 max-w-full max-h-full bg-white shadow-lg overflow-auto pointer-events-auto focus:outline-none',
            {
              end: 'top-0 end-0 bottom-auto start-auto w-[--width] h-full',
              start: 'top-0 end-auto bottom-auto start-0 w-[--width] h-full'
            }[this.placement]
          )}
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? 'false' : 'true'}
          aria-label=${this.label}
          aria-labelledby=${ifDefined(!this.noHeader ? 'title' : undefined)}
          tabindex="0"
        >
          ${!this.noHeader
            ? html`
                <header
                  part="header"
                  class="flex justify-between py-2 px-4 items-center flex-shrink-0"
                  style="min-height: 56px;"
                >
                  <div part="title">
                    <slot name="header" part="title" class="flex-auto text-xl m-0" id="title"> </slot>
                  </div>
                  <div class="shrink-0 flex flex-wrap justify-end gap-1 ml-4 absolute top-2 right-2">
                    <sd-button
                      variant="tertiary"
                      size="lg"
                      part="close-button"
                      @click=${() => this.requestClose('close-button')}
                      ><sd-icon name="close" library="system"></sd-icon
                    ></sd-button>
                  </div>
                </header>
              `
            : ''}
          <div part="body" class="flex-auto block px-4">
            <slot></slot>
          </div>
          <footer part="footer" class=${cx(this.hasSlotController.test('footer') ? 'text-left p-4' : 'hidden')}>
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      ${componentStyles}
      :host {
        --width: 25rem;

        display: contents;
      }

      :host([contained]) {
        z-index: initial;
      }

      :host(:not([contained])) {
        z-index: var(--sd-z-index-drawer);
      }

      [part='body'] {
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
      }

      [part='body']::-webkit-scrollbar {
        width: 0;
        height: 0;
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
  options: { duration: 250, easing: 'ease' }
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
  options: { duration: 250, easing: 'ease' }
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
  options: { duration: 250, easing: 'ease' }
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
  options: { duration: 250, easing: 'ease' }
});

// Deny close
setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});

// Overlay
setDefaultAnimation('drawer.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('drawer.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-drawer': SdDrawer;
  }
}
