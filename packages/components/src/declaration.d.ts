declare module '*.css' {
  const styles: string;
  export default styles;
}

declare namespace Chai {
  interface Assertion {
    // chai-a11y-axe returns a promise-like object and should be awaited but the types are incorrect
    // eslint-disable-next-line @typescript-eslint/ban-types
    accessible: (options?: Object) => PromiseLike<Assertion>;
  }
}

interface HTMLInputElement {
  showPicker: () => void;
}

// for css styles

type StyleStatus = 'experimental' | 'stable' | 'deprecated';

export interface StyleAttribute {
  name: string;
  description: string;
  /**
   * If you don't set options, the attribute will be rendered as a boolean attribute.
   */
  options?: string[];
}

export interface Style {
  styleName: string;
  summary: string;
  status: StyleStatus;
  since: string;
  attributes: StyleAttribute[];
}

/* eslint-disable */
interface CloseWatcher extends EventTarget {
  new (options?: CloseWatcherOptions): CloseWatcher;
  requestClose(): void;
  close(): void;
  destroy(): void;

  oncancel: (event: Event) => void | null;
  onclose: (event: Event) => void | null;
}

interface CloseWatcherOptions {
  signal: AbortSignal;
}
