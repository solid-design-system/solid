import '../translations/en';
import { LocalizeController as DefaultLocalizationController } from '@shoelace-style/localize'; // Register English as the default/fallback language
import type { Translation as DefaultTranslation } from '@shoelace-style/localize';

// Extend the controller and apply our own translation interface for better typings
export class LocalizeController extends DefaultLocalizationController<Translation> {}

export interface Translation extends DefaultTranslation {
  $code: string; // e.g. en, en-GB
  $name: string; // e.g. English, Español
  $dir: 'ltr' | 'rtl';

  clearEntry: string;
  close: string;
  copy: string;
  numOptionsSelected: (num: number) => string;
  currentValue: string;
  hidePassword: string;
  loading: string;
  progress: string;
  remove: string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  selectAColorFromTheScreen: string;
  showPassword: string;
  toggleColorFormat: string;
}
