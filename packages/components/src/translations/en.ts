import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  audioPlayer: 'Audio Player',
  autoplay: 'Autoplay',
  carousel: 'Carousel',
  clearEntry: 'Clear entry',
  close: 'Close',
  collapseNavigationItem: 'Collapse navigation item',
  comboboxDefaultPlaceholder: 'Please search and select',
  copy: 'Copy',
  currentValue: 'Current value',
  expandNavigationItem: 'Expand navigation item',
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: 'Hide password',
  loading: 'Loading',
  mute: 'Mute',
  nextSlide: 'Next slide',
  noResults: 'No results found',
  notifications: 'Notifications',
  numOptionsSelected: num => {
    if (num === 0) return '';
    return `Options Selected (${num})`;
  },
  openTranscript: 'Open transcript',
  optionGroup: 'Option Group',
  pauseAudio: 'Pause Audio',
  playAudio: 'Play Audio',
  playbackSpeed: 'Playback Speed',
  playVideo: 'Play Video',
  previousSlide: 'Previous slide',
  progress: 'Progress',
  remove: 'Remove',
  removed: name => `${name} removed`,
  resize: 'Resize',
  scrolled: 'Scrolled',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  search: 'Search',
  seekBar: 'Seek bar',
  selectAColorFromTheScreen: 'Select a color from the screen',
  selectDefaultPlaceholder: 'Please select',
  showLess: 'Show less',
  showMore: 'Show more',
  showPassword: 'Show password',
  slideNum: num => `Slide ${num}`,
  tagsSelected: 'Options selected',
  toggleColorFormat: 'Toggle color format',
  transcriptIsOpen: 'Transcript is open',
  unmute: 'Unmute'
};

registerTranslation(translation);

export default translation;
