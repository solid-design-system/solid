import StyleObserver from 'style-observer';
import type { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';

const uiMotionThemeSelector = '.sd-theme-ui-light, .sd-theme-ui-dark';
const uiMotionDataThemes = new Set(['sd-theme-ui-light', 'sd-theme-ui-dark']);

/**
 * Like `Element.closest()` but traverses up through Shadow DOM boundaries by
 * jumping to the shadow root's host when the light-DOM tree is exhausted.
 */
function closestThroughShadow(start: Element, selector: string): Element | null {
  let node: Element | null = start;
  while (node) {
    const match = node.closest?.(selector);
    if (match) return match;
    const root = node.getRootNode() as ShadowRoot | Document;
    node = (root as ShadowRoot).host ?? null;
  }
  return null;
}

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
      attributeFilter: ['class', 'data-sd-theme'],
      subtree: true,
      childList: true
    });
  }

  hostDisconnected() {
    this.observer.disconnect();
  }

  private updateMotionTheme(): void {
    const hasThemeAncestor = Boolean(closestThroughShadow(this.host, uiMotionThemeSelector));
    const documentTheme = document.documentElement.dataset.sdTheme;
    const hasUiMotion = hasThemeAncestor || (!!documentTheme && uiMotionDataThemes.has(documentTheme));

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
