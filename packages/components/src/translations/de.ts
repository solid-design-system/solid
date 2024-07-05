import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',

  carousel: 'Karussell',
  clearEntry: 'Eingabe löschen',
  close: 'Schließen',
  copy: 'Kopieren',
  numOptionsSelected: num => {
    if (num === 0) return '';
    return `Optionen ausgewählt (${num})`;
  },
  previousSlide: 'Vorherige Folie',
  currentValue: 'Aktueller Wert',
  goToSlide: (slide, count) => `Zu Folie ${slide} von ${count} gehen`,
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  nextSlide: 'Nächste Folie',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Größe ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Farbe vom Bildschirm auswählen',
  selectDefaultPlaceholder: 'Bitte auswählen',
  showPassword: 'Passwort anzeigen',
  slideNum: slide => `Folie ${slide}`,
  toggleColorFormat: 'Farbformat umschalten',
  audioPlayer: 'Audio-Player',
  playAudio: 'Audio abspielen',
  pauseAudio: 'Audio pausieren',
  mute: 'Stummschalten'
};

registerTranslation(translation);

export default translation;
