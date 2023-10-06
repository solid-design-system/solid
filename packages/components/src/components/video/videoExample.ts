import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query, state } from 'lit/decorators.js';
import SolidElement from '../../internal/solid-element';

@customElement('sd-video-example')
export default class SdVideoExample extends SolidElement {
  constructor() {
    super();
    this.addEventListener('sd-play', this.handleSdPlay);
  }

  @property({ type: Boolean, reflect: true }) overlay = true;

  @query('video') video: HTMLVideoElement;

  @state()
  playing = false;

  pause() {
    this.playing = false;
  }

  play() {
    this.playing = true;
  }

  handleSdPlay() {
    this.play();
    this.video.play();
  }

  render() {
    return html`
      <div>
        <sd-video ?playing=${this.playing} ?overlay=${this.overlay}>
          <video @play="${this.play}" @pause="${this.pause}" controls>
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <sd-icon
            library="global-resources"
            name="system/start"
            slot="play-icon"
            color="primary"
            style="font-size: 64px; transform: translateX(5px);"
          ></sd-icon>
        </sd-video>
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
    'sd-video-example': SdVideoExample;
  }
}
