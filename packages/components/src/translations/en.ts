import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  clearEntry: 'Clear entry',
  close: 'Close',
  copy: 'Copy',
  numOptionsSelected: num => {
    if (num === 0) return '';
    return `Options Selected (${num})`;
  },
  currentValue: 'Current value',
  hidePassword: 'Hide password',
  loading: 'Loading',
  progress: 'Progress',
  remove: 'Remove',
  resize: 'Resize',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  selectAColorFromTheScreen: 'Select a color from the screen',
  selectDefaultPlaceholder: 'Please select',
  showPassword: 'Show password',
  toggleColorFormat: 'Toggle color format',
  carousel: 'Carousel',
  nextSlide: 'Next slide',
  previousSlide: 'Previous slide',
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  slideNum: num => `Slide ${num}`,
  audioPlayer: 'Audio Player',
  playAudio: 'Play Audio',
  pauseAudio: 'Pause Audio',
  mute: 'Mute',
  unmute: 'Unmute',
  showMore: 'Show more',
  showLess: 'Show less',
  playbackSpeed: 'Playback Speed'
};

registerTranslation(translation);

export default translation;
