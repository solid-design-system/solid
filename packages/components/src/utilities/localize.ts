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

  audioPlayer: string;
  autoplay: string;
  carousel: string;
  carouselContainer: (count: number) => string;
  clearEntry: string;
  close: string;
  collapseNavigationItem: string;
  comboboxDefaultPlaceholder: string;
  copy: string;
  currentValue: string;
  expandNavigationItem: string;
  goToSlide: (slide: number, count: number) => string;
  hidePassword: string;
  loading: string;
  mute: string;
  nextSlide: string;
  noResults: string;
  notifications: string;
  numOptionsSelected: (num: number) => string;
  openTranscript: string;
  optionGroup: string;
  pauseAudio: string;
  playAudio: string;
  playbackSpeed: string;
  playVideo: string;
  previousSlide: string;
  progress: string;
  remove: string;
  removed: (name: string) => string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  search: string;
  seekBar: string;
  selectAColorFromTheScreen: string;
  selectDefaultPlaceholder: string;
  showLess: string;
  showMore: string;
  showPassword: string;
  slideNum: (slide: number, count: number) => string;
  tagsSelected: string;
  toggleColorFormat: string;
  transcriptIsOpen: string;
  unmute: string;
}
