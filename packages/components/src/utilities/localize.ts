import '../translations/de';
import '../translations/en';
import { LocalizeController as DefaultLocalizationController } from '@shoelace-style/localize';
import type { Translation as DefaultTranslation } from '@shoelace-style/localize'; // Register English as the default/fallback language
import type { ReactiveControllerHost } from 'lit';

/**
 * This controller extends the default localization controller and adds support for instance-specific translations.
 *
 * It works by reactively parsing `data-custom-localization`, which should be a JSON object containing translations.
 * As an alternative, you can also set translations programmatically using the `setCustomLocalization` method.
 */
export class LocalizeController extends DefaultLocalizationController<Translation> {
  private _instanceTranslations: Partial<Translation> | null = null;

  constructor(host: ReactiveControllerHost & HTMLElement) {
    super(host);
  }

  get instanceTranslations(): Partial<Translation> | null {
    return this._instanceTranslations;
  }

  set instanceTranslations(value: Partial<Translation> | null) {
    this._instanceTranslations = value;
    this.host.requestUpdate();
  }

  override hostConnected() {
    super.hostConnected();
    this.setCustomLocalizationFromData();
    new MutationObserver(() => this.setCustomLocalizationFromData()).observe(this.host, {
      attributes: true,
      attributeFilter: ['data-custom-localization']
    });
  }

  override hostDisconnected() {
    super.hostDisconnected();
  }

  private setCustomLocalizationFromData() {
    const dataCustomLocalization = this.host.dataset.customLocalization;
    if (dataCustomLocalization) {
      try {
        this.setCustomLocalization(JSON.parse(dataCustomLocalization) as Partial<Translation>);
      } catch (error) {
        console.error('Error parsing custom-localization attribute:', error);
      }
    }
  }

  override term<K extends keyof Translation>(key: K, ...args: unknown[]): string {
    const term = this.instanceTranslations && this.instanceTranslations[key];
    if (term) {
      if (typeof term === 'function') {
        // @ts-expect-error: TS doesn't like this, but it's fine
        return term(...args);
      }
      return term;
    }

    // @ts-expect-error: TS doesn't like this, but it's fine
    return super.term(key, ...args);
  }

  public setCustomLocalization(customLocalization: Partial<Translation>) {
    this.instanceTranslations = { ...this.instanceTranslations, ...customLocalization };
  }
}

export interface Translation extends DefaultTranslation {
  $code: string; // e.g. en, en-GB
  $name: string; // e.g. English, Español
  $dir: 'ltr' | 'rtl';

  carousel: string;
  clearEntry: string;
  close: string;
  copy: string;
  currentValue: string;
  goToSlide: (slide: number, count: number) => string;
  hidePassword: string;
  loading: string;
  nextSlide: string;
  numOptionsSelected: (num: number) => string;
  previousSlide: string;
  progress: string;
  remove: string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  selectAColorFromTheScreen: string;
  selectDefaultPlaceholder: string;
  showPassword: string;
  slideNum: (slide: number) => string;
  toggleColorFormat: string;
  audioPlayer: string;
  playAudio: string;
  pauseAudio: string;
  mute: string;
  unmute: string;
  showMore: string;
  showLess: string;
  playbackSpeed: string;
}
