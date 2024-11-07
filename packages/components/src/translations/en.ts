import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  audioPlayer: 'Audio Player',
  clearEntry: 'Clear entry',
  close: 'Close',
  copy: 'Copy',
  numOptionsSelected: num => {
    if (num === 0) return '';
    return `Options Selected (${num})`;
  },
  carousel: 'Carousel',
  currentValue: 'Current value',
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: 'Hide password',
  loading: 'Loading',
  mute: 'Mute',
  nextSlide: 'Next slide',
  pauseAudio: 'Pause Audio',
  playAudio: 'Play Audio',
  playbackSpeed: 'Playback Speed',
  previousSlide: 'Previous slide',
  progress: 'Progress',
  remove: 'Remove',
  resize: 'Resize',
  scrollDown: 'Scroll down',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  scrollUp: 'Scroll up',
  selectAColorFromTheScreen: 'Select a color from the screen',
  selectDefaultPlaceholder: 'Please select',
  showLess: 'Show less',
  showMore: 'Show more',
  showPassword: 'Show password',
  slideNum: num => `Slide ${num}`,
  toggleColorFormat: 'Toggle color format',
  unmute: 'Unmute'
};

registerTranslation(translation);

export default translation;
