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
    if (num === 0) return 'No options selected';
    if (num === 1) return '1 option selected';
    return `${num} options selected`;
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
  showPassword: 'Show password',
  toggleColorFormat: 'Toggle color format',
  carousel: 'Carousel',
  nextSlide: 'Next slide',
  previousSlide: 'Previous slide',
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  slideNum: num => `Slide ${num}`
};

registerTranslation(translation);

export default translation;
