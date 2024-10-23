import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { Wave } from './wave';
import cx from 'classix';
import InteractiveStyles from '../../styles/interactive/interactive.css?inline';
import SolidElement from '../../internal/solid-element';
import type SdDrawer from '../drawer/drawer';

/**
 * @summary Used to play audio files that are part of the page content.
 * @status stable
 * @since 3.19.0
 *
 * @dependency sd-icon
 *
 * @event sd-playback-start - Emitted when the audio playback starts.
 * @event sd-playback-end - Emitted when the audio playback ends.
 * @event sd-playback-pause - Emitted when the audio playback pauses.
 * @event sd-playback-mute - Emitted when the audio is muted.
 * @event sd-playback-unmute - Emitted when the audio is unmuted.
 * @event sd-playback-speed - Emitted when the playback speed is changed.
 * @event sd-transcript-click - Emitted when the transcript button is clicked.
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
 * @csspart volume - The volume button.
 * @csspart progress-slider - The audio progress slider.
 * @csspart timestamps - The audio timestamps.
 */
@customElement('sd-audio')
export default class SdAudio extends SolidElement {
  private readonly localize = new LocalizeController(this);

  private readonly hasSlotController = new HasSlotController(this, 'transcript');

  /** Reverses the order of the audio controls and timestamps */
  @property({ type: Boolean, reflect: true, attribute: 'reversed-layout' }) reversedLayout = false;

  /** Hides the timestamps */
  @property({ type: Boolean, reflect: true, attribute: 'hide-timestamps' }) hideTimestamps = false;

  /** Enables the wave animation */
  @property({ type: Boolean, reflect: true }) animated = false;

  /** Inverts the colors of the component */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** Sets value of the audio element playback rate */
  @property({ type: Number }) speed = 1;

  @state() currentTime: string = this.formatTime(0);

  @state() duration: string = '';

  @state() isPlaying: boolean = false;

  @state() isMuted: boolean = false;

  @state() progress: number = 0;

  @query('[part="progress-slider"]') progressSlider: HTMLInputElement;

  @query('[part="audio-player"]') audioPlayerContainer: HTMLElement;

  @query('sd-drawer') drawer: SdDrawer;

  @query('canvas') canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  waveList: Wave[];

  constructor() {
    super();
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.handleAudioEnd = this.handleAudioEnd.bind(this);
    this.handleAudioProgress = this.handleAudioProgress.bind(this);
    this.handleAudioProgressKeydown = this.handleAudioProgressKeydown.bind(this);
  }

  firstUpdated() {
    if (!this.audioElement) return;

    this.audioElement.addEventListener('timeupdate', this.updateCurrentTime);
    this.audioElement.addEventListener('ended', this.handleAudioEnd);
    this.audioElement.setAttribute('controlsList', 'nodownload');
    this.audioElement.playbackRate = this.speed;

    if (this.animated) {
      this.initAnimation();
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('animated')) {
      const oldValue = changedProperties.get('animated');
      if (!oldValue && this.animated) {
        this.initAnimation();
      } else if (oldValue && !this.animated) {
        this.clear();
      }
    }
  }

  private get audioElement(): HTMLAudioElement | null {
    const slot: HTMLSlotElement = this.shadowRoot!.querySelector('slot')!;

    if (slot?.assignedElements().length > 0) {
      return slot.assignedElements()[0] as HTMLAudioElement;
    }
    return null;
  }

  private setAudioProgress = () => {
    this.progressSlider.max = Math.floor(this.audioElement!.duration).toString();
  };

  private updateCurrentTime() {
    if (!this.audioElement) return;

    const currentTime = this.audioElement.currentTime;
    this.currentTime = this.formatTime(currentTime);
    this.progress = Math.floor(currentTime);

    if (this.progressSlider) {
      this.progressSlider.value = this.progress.toString();
    }
  }

  private updateAudioDuration() {
    if (!this.audioElement) return;

    // If the duration is NaN, wait for it to be available
    if (isNaN(this.audioElement.duration)) {
      setTimeout(() => {
        this.updateAudioDuration();
      }, 100);
      return;
    }

    this.duration = this.formatTime(this.audioElement.duration);
    this.setAudioProgress();
  }

  playAudio() {
    if (!this.audioElement) return;

    this.isPlaying = true;
    this.audioElement.play();
    this.emit('sd-playback-start');

    if (this.animated) {
      this.draw();
    }
  }

  pauseAudio() {
    if (!this.audioElement) return;

    this.isPlaying = false;
    this.audioElement.pause();
    this.emit('sd-playback-pause');

    if (this.animated) {
      this.stopAnimation();
    }
  }

  handleAudioEnd() {
    this.emit('sd-playback-end');
    this.isPlaying = false;
    this.progress = 0;
    this.progressSlider.value = '0';
    this.currentTime = this.formatTime(0);

    if (this.animated) {
      this.stopAnimation();
    }
  }

  private toggleMute(): void {
    if (!this.audioElement) return;

    this.isMuted = !this.isMuted;

    if (this.isMuted) {
      this.emit('sd-playback-mute');
      this.audioElement.muted = true;
    } else {
      this.emit('sd-playback-unmute');
      this.audioElement.muted = false;
    }
  }

  private toggleMuteKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.toggleMute();
    }
  }

  togglePlaybackSpeed(): void {
    if (!this.audioElement) return;

    this.emit('sd-playback-speed');
    this.speed = this.speed === 1.5 ? 1 : this.speed + 0.25;
    this.audioElement.playbackRate = this.speed;
  }

  private togglePlaybackSpeedKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.togglePlaybackSpeed();
    }
  }

  private formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  private handleAudioProgress() {
    if (!this.audioElement) return;

    const newTime = Number(this.progressSlider.value);
    this.audioElement.currentTime = newTime;
    this.progress = newTime;

    this.currentTime = this.formatTime(newTime);
  }

  private handleAudioProgressKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.progressSlider.value = (Number(this.progressSlider.value) + 1).toString();
      this.handleAudioProgress();
    }

    if (event.key === 'ArrowLeft') {
      this.progressSlider.value = (Number(this.progressSlider.value) - 1).toString();
      this.handleAudioProgress();
    }
  }

  private showTranscript() {
    this.emit('sd-transcript-click');
    this.drawer.open = true;
  }

  private showTranscriptKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.showTranscript();
    }
  }

  private rgbToHex(rgbString: string) {
    // extracts the numbers from the rgb string
    const result = rgbString.match(/\d+/g);

    if (result && result.length === 3) {
      const r = parseInt(result[0]);
      const g = parseInt(result[1]);
      const b = parseInt(result[2]);

      // converts rgb value to hex string
      const valueToHex = (value: number) => value.toString(16).padStart(2, '0');

      // builds the hex string
      const hex = `#${valueToHex(r)}${valueToHex(g)}${valueToHex(b)}`.toUpperCase();

      return hex;
    }

    return null;
  }

  private initAnimation() {
    this.context = this.canvas.getContext('2d')!;

    const button = this.audioPlayerContainer.querySelector('.playback-speed')!;
    const computedStyles = window.getComputedStyle(button);
    const color = computedStyles.color;

    let computedColor: string;
    if (this.inverted) {
      computedColor = `#FFFFFF33`;
    } else {
      computedColor = this.rgbToHex(color) + '33';
    }

    this.waveList = [
      new Wave({
        canvas: this.canvas,
        color: computedColor,
        phase: 240,
        shift: 1.5,
        amplitude: 230,
        frequency: 0.012,
        damping: 1
      }),
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
        shift: -1,
        amplitude: 200,
        frequency: 0.018,
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

    if (this.animated) {
      this.drawStillWaves();
    }
  }

  private drawStillWaves() {
    // renders still waves by drawing a single frame without looping
    this.waveList.forEach(wave => {
      wave.redraw();
    });
  }

  private stopAnimation() {
    this.isPlaying = false;
  }

  private clear() {
    if (!this.context || !this.canvas) return;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  async draw() {
    if (!this.isPlaying || !this.animated) return;

    this.clear();

    this.waveList.forEach(wave => {
      wave.redraw();
    });

    await new Promise(resolve => {
      setTimeout(resolve, 1000 / 30);
    });

    await this.draw(); // recursively call draw() to create the animation loop
  }

  render() {
    const progressPercentage = this.audioElement ? (this.progress / this.audioElement.duration) * 100 : 0;

    const renderAudioControls = html`<div
      class=${cx(
        'controls grid grid-cols-3 justify-items-center items-center',
        !this.animated && 'relative',
        this.animated && !this.reversedLayout && 'absolute -top-4 left-0 w-full',
        this.reversedLayout ? 'mt-2' : 'mb-2'
      )}
      part="audio-controls"
    >
      <button
        class=${cx(
          'playback-speed justify-self-start text-base font-bold hover:cursor-pointer sd-interactive',
          this.inverted && 'sd-interactive--inverted'
        )}
        aria-label="${this.localize.term('playbackSpeed')}"
        tabindex="0"
        @click=${this.togglePlaybackSpeed}
        @keydown=${this.togglePlaybackSpeedKeydown}
        part="playback-speed"
      >
        ${this.speed}x
      </button>

      <sd-button
        ?inverted=${this.inverted ? true : false}
        part="play-button"
        size="lg"
        @click=${!this.isPlaying ? this.playAudio : this.pauseAudio}
        aria-label="${this.isPlaying ? this.localize.term('pauseAudio') : this.localize.term('playAudio')}"
      >
        ${this.isPlaying
          ? html` <sd-icon name="pause" library="system"></sd-icon>`
          : html` <sd-icon name="start" library="system"></sd-icon>`}
      </sd-button>

      <div class="flex items-center justify-self-end">
        ${this.hasSlotController.test('transcript')
          ? html`<button
              class=${cx(
                'mr-6 w-6 h-6 hover:cursor-pointer sd-interactive',
                this.inverted && 'sd-interactive--inverted'
              )}
              @click=${this.showTranscript}
              @keydown=${this.showTranscriptKeydown}
              tab-index="0"
            >
              <sd-icon
                class="w-6 h-6"
                name="transcript"
                library="system"
                label=${this.isMuted ? this.localize.term('unmute') : this.localize.term('mute')}
              ></sd-icon>
            </button>`
          : null}

        <button
          class=${cx('w-6 h-6 hover:cursor-pointer sd-interactive', this.inverted && 'sd-interactive--inverted')}
          part="volume"
          aria-label=${this.localize.term('mute')}
          tabindex="0"
          @click=${this.toggleMute}
          @keydown=${this.toggleMuteKeydown}
        >
          <sd-icon class="w-6 h-6" name=${this.isMuted ? 'mute' : 'volume'} library="system"></sd-icon>
        </button>
      </div>
    </div>`;

    const renderTimestamps = html`<div
      class=${cx(
        'w-full flex justify-between',
        this.reversedLayout ? 'mb-2' : 'mt-2',
        this.animated && this.reversedLayout && 'absolute bottom-0 left-0 mb-2',
        this.animated && !this.reversedLayout && 'mt-2'
      )}
      part="timestamps"
    >
      <div class=${cx('current-time text-sm', this.inverted ? 'text-primary-400' : 'text-neutral-700')}>
        ${this.currentTime}
      </div>
      <div class=${cx('current-time text-sm', this.inverted ? 'text-primary-400' : 'text-neutral-700')}>
        ${this.duration}
      </div>
    </div>`;

    return html`
      <div
        class=${cx('w-full flex relative', this.reversedLayout ? 'flex-col-reverse' : 'flex-col')}
        aria-label=${this.localize.term('audioPlayer')}
        part="audio-player"
      >
        <slot @slotchange="${this.updateAudioDuration}"></slot>

        ${!this.animated || (this.animated && this.reversedLayout) ? renderAudioControls : null}

        <div class="relative">
          ${this.animated && !this.reversedLayout ? html`${renderAudioControls}` : null}
          ${this.animated ? html`<canvas class="w-full h-16"></canvas>` : null}
          ${!this.hideTimestamps && this.animated && this.reversedLayout ? renderTimestamps : null}
          <input
            class=${cx(
              'progress-slider bg-primary appearance-none w-full cursor-pointer outline-none h-1 flex items-center sd-interactive',
              this.inverted && 'sd-interactive--inverted'
            )}
            type="range"
            max="100"
            step="0.001"
            value=${this.progress}
            tabindex="0"
            @input=${this.handleAudioProgress}
            @keydown=${this.handleAudioProgressKeydown}
            part="progress-slider"
            style="background: linear-gradient(to right,
              ${this.inverted
              ? 'rgb(var(--sd-color-white, 255 255 255) / 1)'
              : 'rgb(var(--sd-color-primary, 0 53 142) / 1)'} ${progressPercentage}%,
              ${this.animated
              ? 'transparent'
              : this.inverted
                ? 'rgb(var(--sd-color-primary-400, 153 171 208) / 1)'
                : 'rgb(var(--sd-color-grey-400, 195 195 195) / 1)'} ${progressPercentage}%)"
          />
        </div>

        ${this.hasSlotController.test('transcript')
          ? html`<sd-drawer>
              <slot name="transcript"></slot>
            </sd-drawer>`
          : null}
        ${!this.hideTimestamps && (!this.animated || !this.reversedLayout) ? renderTimestamps : null}
      </div>
    `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [
    SolidElement.styles,
    unsafeCSS(InteractiveStyles),
    css`
      .progress-slider:focus-visible {
        @apply outline-none;
      }

      .progress-slider::-webkit-slider-thumb {
        background-color: currentColor;
      }

      .progress-slider::-webkit-slider-thumb {
        @apply appearance-none h-4 w-4 rounded-full border-none transition duration-200 ease-in-out;
      }

      .progress-slider:focus-visible::-webkit-slider-thumb {
        @apply outline outline-offset-2;
      }

      /** Firefox */
      .progress-slider::-moz-range-thumb {
        background-color: currentColor;
      }

      .progress-slider::-moz-range-thumb {
        @apply appearance-none h-4 w-4 rounded-full border-none transition duration-200 ease-in-out;
      }

      .progress-slider:focus-visible::-moz-range-thumb {
        @apply outline outline-offset-2;
      }

      sd-button::part(base) {
        @apply rounded-full h-16 w-16 flex items-center justify-center;
      }

      sd-button::part(label) {
        @apply flex-grow-0;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-audio': SdAudio;
  }
}
