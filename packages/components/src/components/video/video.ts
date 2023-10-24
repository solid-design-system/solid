import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Used to wrap external video elements (e. g. from Moving Image or bare <video>-Tags) and provide some basic styling for Union Investment.
 * @status stable
 * @since 1.19.0
 *
 * @dependency sd-icon
 *
 * @event sd-play - Event emitted when clicking the `play-icon`. Listen for this event and use it to play the wrapped video.
 *
 * @slot - The default slot used to pass a video player element.
 * @slot play-icon - The video's play icon.
 * @slot poster - Specifies an image to be shown before initial play of the wrapped video. Acts like the `poster` attribute on the native video tag.
 *
 * @csspart base - The component's base wrapper.
 * @csspart play-button - The `<button>` element wrapper around the play-icon slot (full screen to field all click events).
 * @csspart play-button-bg - The `<div>` element wrapper around the play-button that defines the circular background.
 * @csspart overlay - The `<div>` element styled as an absolutely positioned transparent overlay.
 */

@customElement('sd-video')
export default class SdVideo extends SolidElement {
  @query('[part=base]') hostEl: HTMLElement;

  /** Set to `true` to hide the play icon and the overlay. */
  @property({ type: Boolean, reflect: true }) playing = false;

  /** Set to `true` to show a dark overlay. Only used when `playing` is `false`. */
  @property({ type: Boolean, reflect: true }) overlay = false;

  /** Reactive property to trigger breakpoint re-renders. */
  @property({ type: Boolean }) isBelowBreakpoint = false;

  private resizeObserver: ResizeObserver;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'play-icon', 'poster');

  /** Getter for optional poster slot. */
  private get poster(): Element | null {
    const slot: HTMLSlotElement = this.shadowRoot!.querySelector('slot[name=poster]')!;

    if (slot?.assignedElements().length > 0) {
      return slot.assignedElements()[0];
    }
    return null;
  }

  /** Fade out poster after initial play. */
  private fadeoutPoster(): void {
    if (this.poster instanceof HTMLImageElement) {
      this.poster.style.opacity = '0';
    }
  }

  /** Hide poster after initial play & fadeout. */
  private hidePoster() {
    if (this.poster instanceof HTMLImageElement) {
      this.poster.style.display = 'none';
    }
  }

  /** Utility function to group play behaviors. */
  private play() {
    this.emit('sd-play');
    this.playing = true;
    this.fadeoutPoster();
  }

  /** Restrict keydown control to enter and space bar to mimic the native video tag behavior. If a KeyboardEvent is used, refocus on the native video element to give the user seamless keyboard control. */
  private handleKeydown(e: MouseEvent | KeyboardEvent) {
    if (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ' ')) {
      this.play();
      setTimeout(() => {
        this.querySelector('video')?.focus();
      });
    }
  }

  /** Resize the play-button-bg when passing host element width breakpoint 414px. */
  private handleButtonResize() {
    if (this.hostEl.clientWidth <= 414 && !this.isBelowBreakpoint) {
      this.isBelowBreakpoint = true;
    }

    if (this.hostEl.clientWidth > 414 && this.isBelowBreakpoint) {
      this.isBelowBreakpoint = false;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.handleButtonResize());

    this.updateComplete.then(() => {
      this.resizeObserver.observe(this.hostEl);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.hostEl);
  }

  render() {
    return html`
      <div part="base" aria-label="Video Player" class="cursor-pointer">
        <button
          part="play-button"
          aria-label="Play video"
          tabindex="0"
          @click=${this.play}
          @keydown=${this.handleKeydown}
          class=${cx(
            this.playing && 'pointer-events-none',
            'w-full h-full absolute top-0 left-0 z-30 text-primary hover:text-primary-500 sd-interactive sd-interactive--reset focus-visible:focus-outline'
          )}
        >
          <div
            part="play-button-bg"
            class=${cx(
              this.playing ? 'opacity-0' : 'opacity-100',
              this.isBelowBreakpoint ? 'w-[48px] h-[48px]' : 'w-[96px] h-[96px]',
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white bg-opacity-75 rounded-full play-pause-transition'
            )}
          >
            <slot name="play-icon" part="play-icon" class=${cx(this.isBelowBreakpoint ? 'text-[2rem]' : 'text-[4rem]')}>
              <sd-icon id="default-play-icon" library="system" name="start"></sd-icon>
            </slot>
          </div>
        </button>
        ${this.hasSlotController.test('poster')
          ? html`<slot name="poster" role="presentation" @transitionend=${this.hidePoster}></slot>`
          : null}
        <div
          part="overlay"
          id="overlay"
          role="presentation"
          class=${cx(
            this.overlay && !this.playing ? 'opacity-100' : 'opacity-0',
            'bg-[rgba(0,0,0,0.65)] w-full h-full absolute top-0 left-0 pointer-events-none z-20 play-pause-transition'
          )}
        ></div>
        <slot></slot>
      </div>
    `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        position: relative;
        display: inline-block;
        overflow: hidden;
      }

      ::slotted([slot='poster']),
      .play-pause-transition {
        transition: opacity 300ms;
      }

      ::slotted([slot='poster']) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 10;
      }

      #default-play-icon,
      ::slotted([slot='play-icon']) {
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-video': SdVideo;
  }
}
