import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',

  audioPlayer: 'Audio-Player',
  autoplay: 'Autoplay',
  carousel: 'Karussell',
  carouselContainer: count => `Karussell hat ${count} folien`,
  clearEntry: 'Eingabe löschen',
  close: 'Schließen',
  collapseNavigationItem: 'Navigationspunkt reduzieren',
  comboboxDefaultPlaceholder: 'Bitte suchen und auswählen',
  copy: 'Kopieren',
  currentValue: 'Aktueller Wert',
  expandNavigationItem: 'Navigationspunkt erweitern',
  goToSlide: (slide, count) => `Zu Folie ${slide} von ${count} gehen`,
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  mute: 'Stummschalten',
  nextSlide: 'Nächste Folie',
  noResults: 'Keine Ergebnisse gefunden',
  notifications: 'Benachrichtigungen',
  numOptionsSelected: num => {
    if (num === 0) return '';
    return `Optionen ausgewählt (${num})`;
  },
  open: 'Öffnen',
  openTranscript: 'Transkript öffnen',
  optionGroup: 'Optionsgruppe',
  pauseAudio: 'Audio pausieren',
  playAudio: 'Audio abspielen',
  playbackSpeed: 'Wiedergabe Geschwindigkeit',
  playVideo: 'Video abspielen',
  previousSlide: 'Vorherige Folie',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  removed: name => `${name} entfernt`,
  resize: 'Größe ändern',
  scrolled: 'Gescrollt',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  search: 'Suchen',
  seekBar: 'Schieberegler für Suche',
  selectAColorFromTheScreen: 'Farbe vom Bildschirm auswählen',
  selectDefaultPlaceholder: 'Bitte auswählen',
  showLess: 'Weniger anzeigen',
  showMore: 'Mehr anzeigen',
  showPassword: 'Passwort anzeigen',
  slideNum: (slide, count) => `Folie ${slide} von ${count}`,
  tagsSelected: 'Optionen ausgewählt',
  toggleColorFormat: 'Farbformat umschalten',
  transcriptIsOpen: 'Transkript ist offen',
  truncatedBreadcrumbs: 'Abgeschnitten breadcrumbs',
  unmute: 'Unmute'
};

registerTranslation(translation);

export default translation;
