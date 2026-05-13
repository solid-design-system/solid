import '../button/button';
import '../icon/icon';
import { animateTo, stopAnimations } from '../../internal/animate';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Used over other content. It requires an interaction from the user before they can return to whatever is underneath.
 * @documentation https://solid.union-investment.com/[storybook-link]/dialog
 * @status stable
 * @since 1.40.0
 *
 * @dependency sd-button
 * @dependency sd-icon
 *
 * @slot - The dialog's main content.
 * @slot headline - The dialog's headline. Alternatively, you can use the `headline` attribute.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 * @slot close-button - The dialog's close button. Works best with `<sd-button>` and `<sd-icon>`.
 *
 * @event sd-show - Emitted when the dialog opens.
 * @event sd-after-show - Emitted after the dialog opens and all animations are complete.
 * @event sd-hide - Emitted when the dialog closes.
 * @event sd-after-hide - Emitted after the dialog closes and all animations are complete.
 * @event sd-initial-focus - Emitted when the dialog opens and is ready to receive focus. Calling
 *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} sd-request-close - Emitted when the user attempts to
 *   close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's base wrapper.
 * @csspart overlay - The overlay that covers the screen behind the dialog.
 * @csspart panel - The dialog's panel (where the dialog and its content are rendered).
 * @csspart header - The dialog's header. This element wraps the title and header actions.
 * @csspart title - The dialog's title.
 * @csspart close-button - The close button, an `<sd-button>`.
 * @csspart body - The dialog's body.
 * @csspart footer - The dialog's footer.
 *
 * @cssproperty --width - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.
 * @cssproperty --sd-panel-color-border - The border color of the dialog panel.
 * @cssproperty --sd-overlay-color-background - The background color of the dialog overlay.
 *
 * @animation dialog.show - The animation to use when showing the dialog.
 * @animation dialog.hide - The animation to use when hiding the dialog.
 * @animation dialog.denyClose - The animation to use when a request to close the dialog is denied.
 * @animation dialog.overlay.show - The animation to use when showing the dialog's overlay.
 * @animation dialog.overlay.hide - The animation to use when hiding the dialog's overlay.
 */
@customElement('sd-dialog')
export default class SdDialog extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'footer');
  public localize = new LocalizeController(this);

  @query('[part="base"]') dialog: HTMLDialogElement;
  @query('[part="overlay"]') overlay: HTMLElement;
  @query('[part="panel"]') panel: HTMLElement;

  /**
   * Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The dialog's headline as displayed in the header. If you need to display HTML, use the `headline` slot instead.
   */
  @property({ type: String, reflect: true }) headline = '';

  /**
   * This will remove the default close button. Please ensure you provide an easy, accessible way for users to dismiss the dialog.
   */
  @property({ attribute: 'no-close-button', type: Boolean, reflect: true }) noCloseButton = false;

  firstUpdated() {
    this.dialog.addEventListener('cancel', (event: Event) => {
      event.preventDefault();
      this.requestClose('keyboard');
    });

    if (this.open) {
      this.dialog.showModal();
    }
  }

  private get prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private requestClose(source: 'close-button' | 'keyboard' | 'overlay') {
    const sdRequestClose = this.emit('sd-request-close', {
      cancelable: true,
      detail: { source }
    });

    if (sdRequestClose.defaultPrevented) {
      const animation = getAnimation(this, 'dialog.denyClose', { dir: this.localize.dir() });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }

    this.hide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('sd-show');

      // When the dialog is shown, Safari will attempt to set focus on whatever element has autofocus. This can cause
      // the dialogs's animation to jitter (if it starts offscreen), so we'll temporarily remove the attribute, call
      // `focus({ preventScroll: true })` ourselves, and add the attribute back afterwards.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/693
      //
      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      await stopAnimations(this.dialog);
      this.dialog.showModal();

      const overlayShowAnimation = getAnimation(this, 'dialog.overlay.show', { dir: this.localize.dir() });
      animateTo(this.overlay, overlayShowAnimation.keyframes, overlayShowAnimation.options);

      // Set initial focus
      requestAnimationFrame(() => {
        const slInitialFocus = this.emit('sd-initial-focus', { cancelable: true });

        if (!slInitialFocus.defaultPrevented) {
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

      const panelAnimation = this.prefersReducedMotion
        ? getAnimation(this, 'dialog.showReducedMotion', { dir: this.localize.dir() })
        : getAnimation(this, 'dialog.show', { dir: this.localize.dir() });
      await animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');

      await stopAnimations(this.dialog);
      const overlayHideAnimation = getAnimation(this, 'dialog.overlay.hide', { dir: this.localize.dir() });
      animateTo(this.overlay, overlayHideAnimation.keyframes, overlayHideAnimation.options);

      const panelAnimation = this.prefersReducedMotion
        ? getAnimation(this, 'dialog.hideReducedMotion', { dir: this.localize.dir() })
        : getAnimation(this, 'dialog.hide', { dir: this.localize.dir() });

      await animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options);
      this.dialog.close();

      this.emit('sd-after-hide');
    }
  }

  /** Shows the dialog. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the dialog */
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
        part="base"
        class=${cx(
          'flex items-center justify-center p-0 m-auto bg-transparent border-none overflow-visible',
          this.hasSlotController.test('footer') && 'dialog--has-footer'
        )}
      >
        <div part="overlay" class="fixed inset-0" @click=${() => this.requestClose('overlay')}></div>
        <div
          part="panel"
          class=${cx(
            'panel-color-border border flex flex-col z-20 bg-white py-4 sm:py-8 relative gap-6 focus-visible:focus-outline-inverted overflow-y-auto',
            this.open && 'flex opacity-100'
          )}
          aria-label=${ifDefined(this.headline ? this.headline : undefined)}
          aria-labelledby=${ifDefined(!this.headline ? 'title' : undefined)}
          tabindex="0"
        >
          <header part="header" class="flex flex-grow-0 flex-shrink-0 basis-auto px-6 sm:px-10">
            <h2 part="title" class="flex-auto m-0" id="title">
              ${this.headline.length > 0
                ? html`<span class="sd-headline sd-headline--size-3xl leading-tight">${this.headline}</span>`
                : html`<slot name="headline"> </slot>`}
            </h2>

            ${!this.noCloseButton
              ? html`
                  <sd-button
                    part="close-button"
                    variant="tertiary"
                    exportparts="base:close-button__base"
                    class=${cx('absolute top-2 right-2')}
                    name="x-lg"
                    @click="${() => this.requestClose('close-button')}"
                    type="button"
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
          </header>

          <main part="body" class="flex flex-auto overflow-auto w-full px-6 sm:px-10">
            <slot></slot>
          </main>
          <footer part="footer" class="flex flex-grow-0 flex-shrink-0 basis-auto ml-auto gap-4 px-6 sm:px-10">
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
        --width: 662px;
        @apply contents;
      }

      :host(:not([open])) {
        display: none;
      }

      [part='panel'] {
        width: var(--width);
        max-height: 80vh;
      }

      [part='body'] {
        -webkit-overflow-scrolling: touch;
      }

      ::backdrop {
        display: none;
      }

      [part='overlay'] {
        background-color: rgb(var(--sd-overlay-color-background, 5 21 48 / 0.9));
      }

      @media (max-width: 414px) {
        :host {
          --width: 335px;
        }

        [part='body'] {
          min-height: 50px;
        }

        [part='footer'] {
          @apply w-full;
        }
      }
    `
  ];
}

setDefaultAnimation('dialog.show', {
  keyframes: [
    { opacity: 0, transform: 'translate(-50%, 100%)' },
    { opacity: 1, transform: 'translate(0, 0)' }
  ],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('dialog.showReducedMotion', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out', reducedMotion: 'allow' }
});

setDefaultAnimation('dialog.hide', {
  keyframes: [
    { opacity: 1, transform: 'translate(0, 0)' },
    { opacity: 0, transform: 'translate(50%, -100%)' }
  ],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

setDefaultAnimation('dialog.hideReducedMotion', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out', reducedMotion: 'allow' }
});

setDefaultAnimation('dialog.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('dialog.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'linear', reducedMotion: 'allow' }
});

setDefaultAnimation('dialog.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'linear', reducedMotion: 'allow' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-dialog': SdDialog;
  }
}
