import '../button/button';
import '../drawer/drawer';
import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { Wave } from './wave';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type SdDrawer from '../drawer/drawer';
import type SdRange from '../range/range';

/**
 * @summary Used to play audio files that are part of the page content.
 * @status stable
 * @since 3.19.0
 *
 * @dependency sd-icon
 * @dependency sd-button
 * @dependency sd-drawer
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
  @property({ type: Number, reflect: true }) speed = 1;

  @state() currentTime: string = this.formatTime(0);

  @state() duration: string = '';

  @state() isPlaying: boolean = false;

  @state() isMuted: boolean = false;

  @state() isTranscriptOpen: boolean = false;

  @state() progress: number = 0;

  @query('[part="progress-slider"]') progressSlider: SdRange;

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
    this.handleTranscriptDrawerToggle = this.handleTranscriptDrawerToggle.bind(this);
  }

  firstUpdated() {
    if (!this.audioElement) return;

    this.audioElement.addEventListener('timeupdate', this.updateCurrentTime);
    this.audioElement.addEventListener('ended', this.handleAudioEnd);
    this.audioElement.setAttribute('controlsList', 'nodownload');
    document.addEventListener('sd-after-hide', this.handleTranscriptDrawerToggle);
    this.audioElement.playbackRate = this.speed;
    this.progressSlider.tooltipFormatter = value => this.localize.term('seconds', Number(value).toFixed(0));

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

  private updateCurrentTime() {
    if (!this.audioElement) return;

    const currentTime = this.audioElement.currentTime;
    this.currentTime = this.formatTime(currentTime);
    this.progress = currentTime;

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
    this.progressSlider.max = this.audioElement.duration;
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
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
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

  private handleTranscriptDrawerToggle() {
    this.isTranscriptOpen = !this.isTranscriptOpen;
  }

  private handleThumbGrab() {
    this.audioElement?.pause();
  }

  private handleThumbRelease() {
    if (this.isPlaying) {
      this.audioElement?.play();
    }
  }

  private showTranscript() {
    this.emit('sd-transcript-click');
    this.drawer.open = true;
    this.handleTranscriptDrawerToggle();
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
    const renderAudioControls = html`<div
      class=${cx(
        'controls grid grid-cols-3 justify-items-center items-center',
        this.reversedLayout ? 'mt-2' : 'mb-2',
        !this.animated && 'relative',
        this.animated && !this.reversedLayout && 'absolute -top-4 left-0 w-full'
      )}
      part="audio-controls"
    >
      <button
        class=${cx(
          'playback-speed justify-self-start text-base font-bold hover:cursor-pointer sd-interactive',
          this.inverted && 'sd-interactive--inverted'
        )}
        aria-label="${this.localize.term('playbackSpeed')} (${this.speed}x)"
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
        title="${this.isPlaying ? this.localize.term('pauseAudio') : this.localize.term('playAudio')}"
        class="mb-4"
      >
        ${this.isPlaying
          ? html` <slot name="pause-icon"><sd-icon class="text-xl" name="pause" library="_internal"></sd-icon></slot>`
          : html` <slot name="play-icon"><sd-icon class="text-xl" name="start" library="_internal"></sd-icon></slot>`}
      </sd-button>

      <div class="flex items-center justify-self-end">
        ${this.hasSlotController.test('transcript')
          ? html`<button
              class=${cx(
                'mr-6 w-6 h-6 hover:cursor-pointer sd-interactive',
                this.inverted && 'sd-interactive--inverted'
              )}
              aria-label=${this.isTranscriptOpen
                ? this.localize.term('transcriptIsOpen')
                : this.localize.term('openTranscript')}
              @click=${this.showTranscript}
              @keydown=${this.showTranscriptKeydown}
              part="transcript"
            >
              <sd-icon class="w-6 h-6" name="transcript" library="_internal"></sd-icon>
            </button>`
          : null}

        <button
          class=${cx('w-6 h-6 hover:cursor-pointer sd-interactive', this.inverted && 'sd-interactive--inverted')}
          part="volume"
          aria-label=${!this.isMuted ? this.localize.term('mute') : this.localize.term('unmute')}
          @click=${this.toggleMute}
          @keydown=${this.toggleMuteKeydown}
        >
          <sd-icon class="w-6 h-6" name=${this.isMuted ? 'mute' : 'volume'} library="_internal"></sd-icon>
        </button>
      </div>
    </div>`;

    const renderTimestamps = html` <div
      class=${cx(
        'w-full flex justify-between px-2',
        this.animated && this.reversedLayout && 'absolute bottom-0 left-0 mb-4'
      )}
      part="timestamps"
    >
      <div class=${cx('current-time text-sm', this.inverted ? 'text-primary-400' : 'text-black')}>
        ${this.currentTime}
      </div>
      <div class=${cx('current-time text-sm', this.inverted ? 'text-primary-400' : 'text-black')}>${this.duration}</div>
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
          ${this.animated ? html`<canvas class="w-full h-16 -mb-2 mx-2"></canvas>` : null}
          ${!this.hideTimestamps && this.animated && this.reversedLayout ? renderTimestamps : null}

          <sd-range
            part="progress-slider"
            no-tooltip
            min="0"
            max="100"
            step="0.001"
            aria-label=${this.localize.term('seekBar')}
            @mousedown=${this.handleThumbGrab}
            @touchstart=${this.handleThumbGrab}
            @mouseup=${this.handleThumbRelease}
            @touchend=${this.handleThumbRelease}
            @sd-input=${this.handleAudioProgress}
            @keydown=${this.handleAudioProgressKeydown}
          ></sd-range>
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

  static styles = [
    ...SolidElement.styles,
    css`
      sd-button::part(base) {
        @apply rounded-full h-12 w-12 flex items-center justify-center;
      }

      sd-button::part(motion-wrapper) {
        @apply rounded-full;
      }

      sd-button::part(label) {
        @apply flex flex-grow-0 items-center;
      }

      :host([inverted]) sd-range::part(thumb) {
        @apply bg-white outline-white;
      }

      :host([animated]) sd-range::part(track) {
        @apply bg-transparent;
      }

      :host([inverted]:not([animated])) sd-range::part(track) {
        /* TODO: Replace by bg-primary-400 */
        @apply bg-primary-300;
      }

      :host([inverted]:not([animated])) sd-range::part(active-track) {
        @apply bg-white;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-audio': SdAudio;
  }
}
