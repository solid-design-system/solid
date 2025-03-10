import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',

  autoplay: 'Autoplay',
  audioPlayer: 'Audio-Player',
  carousel: 'Karussell',
  clearEntry: 'Eingabe löschen',
  close: 'Schließen',
  comboboxDefaultPlaceholder: 'Bitte suchen und auswählen',
  copy: 'Kopieren',
  currentValue: 'Aktueller Wert',
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
  openTranscript: 'Abschrift öffnen',
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
  scrollToEnd: 'Zum Ende scrollen',
  search: 'Suchen',
  seekBar: 'Bar suchen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Farbe vom Bildschirm auswählen',
  selectDefaultPlaceholder: 'Bitte auswählen',
  showLess: 'Weniger anzeigen',
  showMore: 'Mehr anzeigen',
  showPassword: 'Passwort anzeigen',
  slideNum: (slide, count) => `Folie ${slide} von ${count}`,
  tagsSelected: 'Optionen ausgewählt',
  toggleColorFormat: 'Farbformat umschalten',
  transcriptIsOpen: 'Abschrift ist offen',
  unmute: 'Unmute'
};

registerTranslation(translation);

export default translation;
