import '../button/button';
import '../icon/icon';
import { animateTo, stopAnimations } from '../../internal/animate';
import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import HeadlineStyles from '../../styles/headline/headline.css?inline';
import Modal from '../../internal/modal';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
 * @documentation https://solid.union-investment.com/[storybook-link]/dialog
 * @status stable
 * @since 1.38.0
 *
 * @dependency sd-button
 * @dependency sd-icon
 *
 * @slot - The dialog's main content.
 * @slot headline - The dialog's headline. Alternatively, you can use the `headline` attribute.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options. * @slot close-button - The dialog's close button. Works best with `<sd-button>` and `<sd-icon>`.
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
  private readonly localize = new LocalizeController(this);
  private modal: Modal;
  private originalTrigger: HTMLElement | null;

  @query('[part="base"]') dialog: HTMLElement;
  @query('[part="panel"]') panel: HTMLElement;
  @query('[part="overlay"]') overlay: HTMLElement;

  /**
   * Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The dialog's headline as displayed in the header. If you need to display HTML, use the `headline` slot instead.
   */
  @property({ reflect: true }) headline = '';

  /**
   * Disables the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the dialog.
   */
  @property({ attribute: 'no-close-button', type: Boolean, reflect: true }) noCloseButton = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.modal = new Modal(this);
  }

  firstUpdated() {
    this.dialog.hidden = !this.open;

    if (this.open) {
      this.addOpenListeners();
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
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

  private addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('sd-show');
      this.addOpenListeners();
      this.originalTrigger = document.activeElement as HTMLElement;
      this.modal.activate();

      lockBodyScrolling(this);

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

      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      this.dialog.hidden = false;

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

      const panelAnimation = getAnimation(this, 'dialog.show', { dir: this.localize.dir() });
      const overlayAnimation = getAnimation(this, 'dialog.overlay.show', { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);

      this.emit('sd-after-show');
    } else {
      // Hide
      this.emit('sd-hide');
      this.removeOpenListeners();
      this.modal.deactivate();

      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, 'dialog.hide', { dir: this.localize.dir() });
      const overlayAnimation = getAnimation(this, 'dialog.overlay.hide', { dir: this.localize.dir() });

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

      this.dialog.hidden = true;

      // Now that the dialog is hidden, restore the overlay and panel for next time
      this.overlay.hidden = false;
      this.panel.hidden = false;

      unlockBodyScrolling(this);

      // Restore focus to the original trigger
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }

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
    return html`
      <div
        part="base"
        class=${cx(
          'flex items-center justify-center fixed inset-0 z-dialog',
          this.hasSlotController.test('footer') && 'dialog--has-footer'
        )}
      >
        <div
          part="overlay"
          class="fixed inset-0 bg-neutral-800 opacity-90"
          @click=${() => this.requestClose('overlay')}
          tabindex="-1"
        ></div>

        <div
          part="panel"
          class=${cx(
            'dialog__panel flex flex-col z-20 bg-white focus:outline-none py-4 sm:py-8 relative gap-6',
            this.open && 'flex opacity-100'
          )}
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? 'false' : 'true'}
          aria-label=${this.headline}
          aria-labelledby="title"
          tabindex="0"
        >
          <header part="header" class="flex flex-grow-0 flex-shrink-0 basis-auto px-6 sm:px-12">
            <h2 part="title" class="dialog__title flex-auto m-0" id="title">
              <slot name="headline">
                ${this.headline.length > 0
                  ? html`<h4 class="sd-headline sd-headline--size-3xl">${this.headline}</h4>`
                  : String.fromCharCode(65279)}
              </slot>
            </h2>

            ${!this.noCloseButton
              ? html`
                  <sd-button
                    part="close-button"
                    variant="tertiary"
                    exportparts="base:close-button__base"
                    class=${cx('dialog__close absolute top-2 right-2')}
                    name="x-lg"
                    @click="${() => this.requestClose('close-button')}"
                    type="button"
                  >
                    <sd-icon name="system/close" library="global-resources" color="currentColor"></sd-icon>
                  </sd-button>
                `
              : ''}
          </header>

          <main class="dialog__body flex-auto flex overflow-auto w-full px-6 sm:px-12">
            <slot part="body"></slot>
          </main>
          <footer
            part="footer"
            class="dialog__footer flex flex-grow-0 flex-shrink-0 basis-auto ml-auto gap-4 px-6 sm:px-12"
          >
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }

  static styles = [
    componentStyles,
    unsafeCSS(HeadlineStyles),
    SolidElement.styles,
    css`
      :host {
        --width: 662px;
      }

      .dialog__panel {
        width: var(--width);
        max-height: 80vh;
      }

      .dialog__body {
        -webkit-overflow-scrolling: touch;
      }

      @media (max-width: 414px) {
        :host {
          --width: 335px;
        }

        .dialog__footer {
          @apply w-full;
        }
      }
    `
  ];
}

setDefaultAnimation('dialog.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('dialog.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('dialog.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('dialog.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('dialog.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-dialog': SdDialog;
  }
}
