import StyleObserver from 'style-observer';
import type { LitElement } from 'lit';

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
      this.callback(theme);
    });

    this.observer.observe(this.host, '--sd-theme');
  }

  disconnect() {
    this.observer?.unobserve(this.host);
  }
}
