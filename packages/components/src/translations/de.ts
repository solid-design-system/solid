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
  copy: 'Kopieren',
  numOptionsSelected: num => {
    if (num === 0) return '';
    return `Optionen ausgewählt (${num})`;
  },
  currentValue: 'Aktueller Wert',
  goToSlide: (slide, count) => `Zu Folie ${slide} von ${count} gehen`,
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  mute: 'Stummschalten',
  nextSlide: 'Nächste Folie',
  pauseAudio: 'Audio pausieren',
  playAudio: 'Audio abspielen',
  playbackSpeed: 'Wiedergabe Geschwindigkeit',
  previousSlide: 'Vorherige Folie',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Größe ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Farbe vom Bildschirm auswählen',
  selectDefaultPlaceholder: 'Bitte auswählen',
  tagsSelected: 'Optionen ausgewählt',
  comboboxDefaultPlaceholder: 'Bitte suchen und auswählen',
  noResults: 'Keine Ergebnisse gefunden',
  showLess: 'Weniger anzeigen',
  showMore: 'Mehr anzeigen',
  showPassword: 'Passwort anzeigen',
  slideNum: (slide, count) => `Folie ${slide} von ${count}`,
  toggleColorFormat: 'Farbformat umschalten',
  unmute: 'Unmute'
};

registerTranslation(translation);

export default translation;
