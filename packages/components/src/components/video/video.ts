import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property } from 'lit/decorators.js';
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

  /** True if the contained video is playing. Hides everything when true. */
  @property({ type: Boolean, reflect: true }) playing = false;

  /** Show a darker overlay. */
  @property({ type: Boolean, reflect: true }) overlay = true;

  play() {
    this.emit('sd-play');
  }

  render() {
    return html`
      <div part="base" aria-label="Video Player">
        <slot></slot>
        <div
          role="presentation"
          class=${cx(
            this.overlay && !this.playing ? 'opacity-100' : 'opacity-0',
            'bg-[rgba(0,0,0,0.65)] w-full h-full absolute top-0 left-0 transition-opacity duration-300 pointer-events-none'
          )}
        ></div>
        <button
          aria-label="Play video"
          tabindex="0"
          @click=${this.play}
          class=${cx(
            this.playing ? 'opacity-0' : 'opacity-100',
            'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white bg-opacity-75 rounded-full flex items-center justify-center transition-opacity duration-300'
          )}
        >
          <slot name="play-icon" part="play-icon"></slot>
        </button>
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
