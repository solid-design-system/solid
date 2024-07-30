import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { Wave } from './wave';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type SdDrawer from '../drawer/drawer';

/**
 * @summary Short summary of the component's intended use.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-icon
 *
 * @event sd-playback-start - Emitted when the audio playback starts.
 * @event sd-playback-end - Emitted when the audio playback ends.
 * @event sd-playback-mute - Emitted when the audio is muted.
 * @event sd-playback-speed - Emitted when the playback speed is changed.
 * @event sd-transcript-click - Emitted when the transcript icon is clicked.
 *
 * @slot - The default slot.
 * @slot play-icon - The play icon.
 * @slot pause-icon - The pause icon.
 * @slot transcript - The transcript.
 *
 * @csspart base - The component's base wrapper.
 * @csspart audio-controls - The audio controls.
 * @csspart playback-speed - The playback speed.
 * @csspart play-button - The play button.
 * @csspart volume - The volume controls.
 * @csspart seek-slider - The seek slider.
 * @csspart timestamps - The audio timestamps.
 *
 * @cssproperty --example - An example CSS custom property.
 * @cssproperty --bg-primary - The primary background color for the seek and volume sliders.
 * @cssproperty --bg-primary-400 - The primary background color for the seek and volume sliders background.
 * @cssproperty --bg-white - The white background color for the seek and volume sliders when inverted prop is true.
 * @cssproperty --bg-neutral-400 - The neutral background color for the seek and volume sliders when inverted prop is true.
 */
@customElement('sd-audio')
export default class SdAudio extends SolidElement {
  private readonly localize = new LocalizeController(this);

  /** Reverts the order of the audio controls and timestamps */
  @property({ type: Boolean, reflect: true }) reversedLayout = false;

  /** Shows or hides the timestamps */
  @property({ type: Boolean, reflect: true }) hideTimestamps = false;

  /** Enables or disables the wave animation when the audio is playing */
  @property({ type: Boolean, reflect: true }) animated = false;

  //** Inverts the colors of the component elements and adds a bg-primary background to the container */
  @property({ type: Boolean, reflect: true }) inverted = false;

  //** Background variants of the component container */
  @property({ type: String, reflect: true }) variant: 'white' | 'neutral' | 'primary' = 'white';

  //** Sets value of the audio element playback rate */
  @property({ type: Number }) playbackSpeed = 1;

  @state() currentTime: string = this.formatTime(0);

  @state() duration: string = '';

  @state() isPlaying: boolean = false;

  @state() isMuted: boolean = false;

  @state() progress: number = 0;

  @state() volume: number = 1;

  @state() hasTranscript: boolean = false;

  @query('.audio-player__seek-slider') seekSlider: HTMLInputElement;

  @query('.audio-player__volume-slider') volumeSlider: HTMLInputElement;

  @query('.audio-player') audioPlayerContainer: HTMLElement;

  @query('sd-drawer') drawer: SdDrawer;

  @query('canvas') canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  waveList: Wave[];

  constructor() {
    super();
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.handleAudioEnd = this.handleAudioEnd.bind(this);
    this.handleSeekChange = this.handleSeekChange.bind(this);
    this.handleSeekChangeKeydown = this.handleSeekChangeKeydown.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleVolumeChangeKeydown = this.handleVolumeChangeKeydown.bind(this);
    this.updateTranscript = this.updateTranscript.bind(this);
  }

  firstUpdated() {
    if (!this.audioElement) return;

    this.audioElement.addEventListener('timeupdate', this.updateCurrentTime);
    this.audioElement.addEventListener('ended', this.handleAudioEnd);
    this.audioElement.setAttribute('controlsList', 'nodownload');
  }

  private get audioElement(): HTMLAudioElement | null {
    const slot: HTMLSlotElement = this.shadowRoot!.querySelector('slot[name=default]')!;

    if (slot?.assignedElements().length > 0) {
      return slot.assignedElements()[0] as HTMLAudioElement;
    }
    return null;
  }

  private setSeekSlider = () => {
    this.seekSlider.max = Math.floor(this.audioElement!.duration).toString();
  };

  private updateCurrentTime() {
    if (!this.audioElement) return;

    const currentTime = this.audioElement.currentTime;
    this.currentTime = this.formatTime(currentTime);
    this.progress = Math.floor(currentTime);

    if (this.seekSlider) {
      this.seekSlider.value = this.progress.toString();
    }
  }

  private updateDuration() {
    if (!this.audioElement) return;

    // If the duration is NaN, wait for it to be available
    if (isNaN(this.audioElement.duration)) {
      setTimeout(() => {
        this.updateDuration();
      }, 100);
      return;
    }

    this.duration = this.formatTime(this.audioElement.duration);
    this.setSeekSlider();
  }

  private handleAudioEnd() {
    this.emit('sd-playback-end');
    this.isPlaying = false;
    this.progress = 0;
    this.seekSlider.value = '0';
    this.currentTime = this.formatTime(0);
    if (this.animated) {
      this.stopAnimation();
    }
  }

  private togglePlay() {
    if (!this.audioElement) return;

    this.emit('sd-playback-start');
    this.isPlaying = !this.isPlaying;

    if (this.animated && this.isPlaying) {
      this.initAnimation();
    }

    if (this.animated && !this.isPlaying) {
      this.stopAnimation();
    }
  }

  private muteAudio(): void {
    this.emit('sd-playback-mute');
    this.isMuted = !this.isMuted;
  }

  private muteAudioKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.emit('sd-playback-mute');
      this.isMuted = !this.isMuted;
    }
  }

  private togglePlaybackSpeed(): void {
    this.emit('sd-playback-speed');
  }

  private togglePlaybackSpeedKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.emit('sd-playback-speed');
    }
  }

  private formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  private handleSeekChange() {
    if (!this.audioElement) return;

    const newTime = Number(this.seekSlider.value);
    this.audioElement.currentTime = newTime;
    this.progress = newTime;

    this.currentTime = this.formatTime(newTime);
  }

  private handleSeekChangeKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.seekSlider.value = (Number(this.seekSlider.value) + 1).toString();
      this.handleSeekChange();
    }

    if (event.key === 'ArrowLeft') {
      this.seekSlider.value = (Number(this.seekSlider.value) - 1).toString();
      this.handleSeekChange();
    }
  }

  private handleVolumeChange() {
    if (!this.audioElement) return;

    this.volume = Number(this.volumeSlider.value) / 100;
    this.audioElement.volume = this.volume;
    this.updateVolumeSliderStyle();

    if (this.volumeSlider.value === '0') {
      this.isMuted = true;
    } else {
      this.isMuted = false;
    }
  }

  private handleVolumeChangeKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.volumeSlider.value = (Number(this.volumeSlider.value) + 1).toString();
      this.handleVolumeChange();
    }

    if (event.key === 'ArrowLeft') {
      this.volumeSlider.value = (Number(this.volumeSlider.value) - 1).toString();
      this.handleVolumeChange();
    }
  }

  private updateVolumeSliderStyle() {
    const volumePercentage = this.volume * 100;
    this.volumeSlider.style.background = `linear-gradient(to right,
      ${this.inverted ? 'var(--bg-white)' : 'var(--bg-primary)'} ${volumePercentage}%,
      ${this.inverted ? 'var(--bg-primary-400)' : 'var(--bg-neutral-400)'} ${volumePercentage}%)`;
  }

  private updateTranscript() {
    this.hasTranscript = true;
  }

  private showTranscript() {
    this.emit('sd-transcript-click');
    this.drawer.open = true;
  }

  private showTranscriptKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.showTranscript();
    }
  }

  initAnimation() {
    this.context = this.canvas.getContext('2d')!;
    const computedStyle = window.getComputedStyle(this.audioPlayerContainer);

    let computedColor: string;
    if (this.inverted) {
      computedColor = `${computedStyle.getPropertyValue('--bg-white')}1`;
    } else {
      computedColor = `${computedStyle.getPropertyValue('--bg-primary')}66`;
    }

    this.waveList = [
      new Wave({
        canvas: this.canvas,
        color: computedColor,
        phase: 180,
        shift: 2.5,
        amplitude: 250,
        frequency: 0.005,
        damping: 1
      }),
      new Wave({
        canvas: this.canvas,
        color: computedColor,
        phase: 180,
        shift: -2.5,
        amplitude: 250,
        frequency: 0.005,
        damping: 1
      }),
      new Wave({
        canvas: this.canvas,
        color: computedColor,
        phase: 180,
        shift: -1.5,
        amplitude: 200,
        frequency: 0.01,
        damping: 1
      }),
      new Wave({
        canvas: this.canvas,
        color: computedColor,
        phase: 180,
        shift: 1.5,
        amplitude: 150,
        frequency: 0.01,
        damping: 1
      })
    ];
    this.draw();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  async draw() {
    this.clear();

    this.waveList.forEach(wave => {
      wave.redraw();
    });

    await new Promise(resolve => {
      setTimeout(resolve, 1000 / 30);
    });
    await this.draw();
  }

  stopAnimation() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.waveList = [];
  }

  render() {
    const progressPercentage = this.audioElement ? (this.progress / this.audioElement.duration) * 100 : 0;

    const renderAudioControls = html`<div
      class=${cx(
        'audio-player__controls grid grid-cols-3 justify-items-center items-center',
        !this.animated && 'relative',
        this.animated && !this.reversedLayout && 'absolute top-0 left-0 w-full',
        this.reversedLayout ? 'mt-2' : 'mb-2'
      )}
      part="audio-controls"
    >
      <div
        class=${cx(
          'audio-player__playback-speed justify-self-start text-base font-bold hover:cursor-pointer hover:text-primary-500',
          this.inverted ? 'text-white focus-visible:focus-outline-inverted' : 'text-primary focus-visible:focus-outline'
        )}
        tabindex="0"
        @click=${this.togglePlaybackSpeed}
        @keydown=${this.togglePlaybackSpeedKeydown}
        part="playback-speed"
      >
        ${this.playbackSpeed}x
      </div>

      <button
        class=${cx(
          'flex justify-center items-center p-4 rounded-full cursor-pointer hover:cursor-pointer hover:bg-primary-500',
          this.inverted ? 'bg-white focus-visible:focus-outline-inverted' : 'bg-primary focus-visible:focus-outline'
        )}
        @click=${this.togglePlay}
        aria-label="${this.isPlaying ? this.localize.term('pauseAudio') : this.localize.term('playAudio')}"
        tabindex="0"
        part="play-button"
      >
        ${this.isPlaying
          ? html`<slot name="pause-icon">
              <sd-icon
                name="pause"
                library="system"
                class=${cx('w-6 h-6', this.inverted ? 'text-primary' : 'text-white')}
              ></sd-icon>
            </slot>`
          : html`<slot name="play-icon">
              <sd-icon
                name="start"
                library="system"
                class=${cx('w-6 h-6', this.inverted ? 'text-primary' : 'text-white')}
              ></sd-icon>
            </slot>`}
      </button>

      <div class="flex items-center justify-self-end">
        ${this.hasTranscript
          ? html` <sd-icon
              name="transcript"
              library="system"
              class=${cx(
                'mr-6 w-6 h-6 hover:cursor-pointer hover:text-primary-500',
                this.inverted
                  ? 'text-white focus-visible:focus-outline-inverted'
                  : 'text-primary focus-visible:focus-outline'
              )}
              tabindex="0"
              @click=${this.showTranscript}
              @keydown=${this.showTranscriptKeydown}
            ></sd-icon>`
          : null}

        <div class="audio-player__volume-container flex items-center" part="volume">
          <sd-icon
            class=${cx(
              'audio-player__volume-icon w-6 h-6 hover:cursor-pointer focus:mr-2 hover:text-primary-500',
              this.inverted
                ? 'text-white focus-visible:focus-outline-inverted'
                : 'text-primary focus-visible:focus-outline'
            )}
            name=${this.isMuted ? 'mute' : 'volume'}
            library="system"
            aria-label=${this.localize.term('mute')}
            tabindex="-1"
            @click=${this.muteAudio}
            @keydown=${this.muteAudioKeydown}
          ></sd-icon>
          <!-- TODO: replace with sd-range once it's implemented -->
          <input
            class=${cx(
              'audio-player__volume-slider appearance-none cursor-pointer outline-none h-1 w-0 overflow-hidden',
              this.inverted ? 'bg-white' : 'bg-primary'
            )}
            type="range"
            max="100"
            value=${this.volume * 100}
            tabindex="0"
            label="Volume"
            @click=${this.handleVolumeChange}
            @keydown=${this.handleVolumeChangeKeydown}
          />
        </div>
      </div>
    </div>`;

    const renderTimestamps = html`<div
      class=${cx(
        'w-full flex justify-between',
        this.reversedLayout ? 'mb-2' : 'mt-2',
        this.animated && this.reversedLayout && 'absolute bottom-0 left-0 mb-2',
        this.animated && !this.reversedLayout && 'mt-2 oi'
      )}
      part="timestamps"
    >
      <div class=${cx('audio-player__current-time time', this.inverted ? 'text-primary-400' : 'text-neutral-700')}>
        ${this.currentTime}
      </div>
      <div class=${cx('audio-player__current-time time', this.inverted ? 'text-primary-400' : 'text-neutral-700')}>
        ${this.duration}
      </div>
    </div>`;

    return html`
      <div
        class=${cx(
          'audio-player w-full flex p-12 relative',
          this.reversedLayout ? 'flex-col-reverse' : 'flex-col',
          this.inverted
            ? 'bg-primary'
            : {
                /* variants */
                white: 'bg-white',
                neutral: 'bg-neutral-100',
                primary: 'bg-primary-100'
              }[this.variant]
        )}
        aria-label=${this.localize.term('audioPlayer')}
        part="base"
      >
        <slot name="default" @slotchange="${this.updateDuration}"></slot>

        ${!this.animated || (this.animated && this.reversedLayout) ? renderAudioControls : null}

        <div class="relative">
          ${this.animated && !this.reversedLayout ? html`${renderAudioControls}` : null}
          ${this.animated ? html`<canvas class="w-full h-16"></canvas>` : null}
          ${!this.hideTimestamps && this.animated && this.reversedLayout ? renderTimestamps : null}
          <!-- TODO: replace with sd-range once it's implemented -->
          <input
            class=${cx(
              'audio-player__seek-slider bg-primary appearance-none w-full cursor-pointer outline-none h-1 flex items-center'
            )}
            type="range"
            max="100"
            step="0.001"
            value=${this.progress}
            tabindex="0"
            @input=${this.handleSeekChange}
            @keydown=${this.handleSeekChangeKeydown}
            part="seek-slider"
            style="background: linear-gradient(to right,
              ${this.inverted ? 'var(--bg-white)' : 'var(--bg-primary)'} ${progressPercentage}%,
              ${this.animated
              ? 'transparent'
              : this.inverted
                ? 'var(--bg-primary-400)'
                : 'var(--bg-neutral-400)'} ${progressPercentage}%)"
          />
        </div>

        <slot name="transcript" @slotchange="${this.updateTranscript}">
          <sd-drawer>
            <slot></slot>
          </sd-drawer>
        </slot>

        ${!this.hideTimestamps && (!this.animated || !this.reversedLayout) ? renderTimestamps : null}
      </div>
    `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        --bg-primary: #00358e;
        --bg-primary-400: #99abd0;
        --bg-white: #fff;
        --bg-neutral-400: #c3c3c3;
      }

      :host([inverted]) {
        .audio-player__seek-slider::-webkit-slider-thumb,
        .audio-player__volume-slider::-webkit-slider-thumb {
          @apply bg-white;
        }

        .audio-player__volume-slider:focus-within::-webkit-slider-thumb {
          @apply outline-white;
        }

        .audio-player__seek-slider:focus::-webkit-slider-thumb {
          @apply outline-white;
        }
      }

      .time {
        font-size: 14px;
      }

      .audio-player__volume-container:hover .audio-player__volume-icon {
        @apply mr-2;
      }

      .audio-player__seek-slider::-webkit-slider-thumb {
        @apply appearance-none bg-primary h-4 w-4 rounded-full border-none transition duration-200 ease-in-out;
      }

      .audio-player__seek-slider:focus::-webkit-slider-thumb {
        @apply outline outline-primary outline-offset-2;
      }

      .audio-player__seek-slider::-moz-range-thumb {
        @apply appearance-none bg-primary h-4 w-4 rounded-full border-none transition duration-200 ease-in-out;
      }

      .audio-player__volume-container:hover .audio-player__volume-slider,
      .audio-player__volume-container:focus-within .audio-player__volume-slider {
        @apply w-[100px] overflow-visible;
      }

      .audio-player__volume-slider {
        transition-property: width;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0, 0, 0.5, 1);
      }

      .audio-player__volume-slider::-webkit-slider-thumb {
        @apply appearance-none bg-primary h-4 w-4 rounded-full border-none transition duration-200 ease-in-out;
      }

      .audio-player__volume-slider:focus::-webkit-slider-thumb {
        @apply outline outline-primary outline-offset-2;
      }

      .audio-player__volume-slider::-moz-range-thumb {
        @apply appearance-none bg-primary h-4 w-4 rounded-full border-none transition duration-200 ease-in-out;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-audio': SdAudio;
  }
}
