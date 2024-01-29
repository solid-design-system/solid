import '../icon/icon';
import { customElement } from '../../../src/internal/register-custom-element';
import {property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import styles from './animated-image.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 * @documentation https://solid.union-investment.com/[storybook-link]/animated-image
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon
 *
 * @event sd-load - Emitted when the image loads successfully.
 * @event sd-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<sd-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<sd-icon>`.
 *
 * @part - control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
@customElement('sd-animated-image')
export default class SdAnimatedImage extends SolidElement {
  static styles: CSSResultGroup = styles;

  @query('.animated-image__animated') animatedImage: HTMLImageElement;

  @state() protected frozenFrame: string;
  @state() protected isLoaded = false;

  /** The path to the image to load. */
  @property() src: string;

  /** A description of the image used by assistive devices. */
  @property() alt: string;

  /** Plays the animation. When this attribute is remove, the animation will pause. */
  @property({ type: Boolean, reflect: true }) play: boolean;

  private handleClick() {
    this.play = !this.play;
  }

  private handleLoad() {
    const canvas = document.createElement('canvas');
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d')!.drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL('image/gif');

    if (!this.isLoaded) {
      this.emit('sd-load');
      this.isLoaded = true;
    }
  }

  private handleError() {
    this.emit('sd-error');
  }

  @watch('play', { waitUntilFirstUpdate: true })
  handlePlayChange() {
    // When the animation starts playing, reset the src so it plays from the beginning. Since the src is cached, this
    // won't trigger another request.
    if (this.play) {
      this.animatedImage.src = '';
      this.animatedImage.src = this.src;
    }
  }

  @watch('src')
  handleSrcChange() {
    this.isLoaded = false;
  }

  render() {
    return html`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? 'false' : 'true'}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded
        ? html`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? 'true' : 'false'}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sd-icon name="play-fill" library="system"></sd-icon></slot>
                <slot name="pause-icon"><sd-icon name="pause-fill" library="system"></sd-icon></slot>
              </div>
            `
        : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-animated-image': SdAnimatedImage;
  }
}
