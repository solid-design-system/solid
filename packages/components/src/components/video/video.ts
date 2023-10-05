import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Used to wrap external video elements (e. g. from Moving Image or bare <video>-Tags) and provide some basic styling for Union Investment.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-example
 *
 * @event sd-play - Event emitted when the video is played or paused. Detail reflects "playing" property.
 *
 * @slot - The default slot used to pass a video player element.
 * @slot play-icon - The video's play icon.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-video')
export default class SdVideo extends SolidElement {
  private readonly localize = new LocalizeController(this);

  @query('slot') defaultSlot: HTMLSlotElement;

  private videoElement: HTMLVideoElement | null = null;

  /** True if the contained video is playing. Hides everything when true. */
  @property({ type: Boolean, reflect: true }) playing = false;

  /** Show a darker overlay. */
  @property({ type: Boolean, reflect: true }) overlay = false;

  @watch('playing')
  handlePlayingChange() {
    this.emit('sd-play', { detail: { playing: this.playing } });
  }

  handleClickPlayIcon() {
    this.playing = true;
  }

  render() {
    return html`
      <div part="base">
        <slot></slot>
        <div
          @click=${this.handleClickPlayIcon}
          class=${cx(
            this.playing ? 'opacity-0' : 'opacity-100',
            'cursor-pointer absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white bg-opacity-75 rounded-full flex items-center justify-center transition-opacity duration-300'
          )}
        >
          <slot name="play-icon" part="play-icon"></slot>
        </div>
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
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-video': SdVideo;
  }
}
