import StyleObserver from 'style-observer';
import type { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';

const uiMotionThemeSelector = '.sd-theme-ui-light, .sd-theme-ui-dark';

export class UiMotionController implements ReactiveController {
  host: ReactiveControllerHost & Element;
  hasUiMotion = false;
  private readonly observer = new MutationObserver(() => this.updateMotionTheme());

  constructor(host: ReactiveControllerHost & Element) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    this.updateMotionTheme();
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true
    });
  }

  hostDisconnected() {
    this.observer.disconnect();
  }

  private updateMotionTheme(): void {
    const hasUiMotion = Boolean(this.host.closest(uiMotionThemeSelector));

    if (hasUiMotion !== this.hasUiMotion) {
      this.hasUiMotion = hasUiMotion;
      this.host.requestUpdate();
    }
  }
}

export class ThemeObserver {
  private host: LitElement;
  private observer: StyleObserver;
  private callback: (theme: string) => void;

  constructor(host: LitElement, callback: (theme: string) => void) {
    this.host = host;
    this.callback = callback;
  }

  connect() {
    this.observer = new StyleObserver(records => {
      const theme: string = records?.[0]?.value?.replaceAll(`'`, '');
      if (!theme) return;

      this.callback(theme);
    });

    this.observer.observe(this.host, '--sd-theme');
  }

  disconnect() {
    this.observer?.unobserve(this.host);
  }
}
