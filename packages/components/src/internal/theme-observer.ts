/**
 * Shared theme observer.
 *
 * Previously every themed component rendered its own `<sd-theme-listener>`, which started its own `style-observer`.
 * Each of those wrote and read computed styles when connected, which forces a full style recalculation per element.
 * Pages rendering hundreds of icons/buttons at once froze for many seconds.
 *
 * This module uses a single `MutationObserver` for the whole page instead:
 * - It only reacts to mutations that can change `--sd-theme`: `class`/`style`/`data-*theme*` attributes whose old or
 *   new value mentions "theme" (e.g. `sd-theme-ui-dark`, `sd-custom-theme`, `--sd-theme: 'vb'`), and stylesheets
 *   being added or changed in `<head>`.
 * - Checks are batched into one animation frame, so all subscribers are read after a single style recalculation.
 * - Subscribers are only notified when their own resolved theme actually changed.
 */

export type ThemeChangeCallback = (theme: string) => void;

interface Subscription {
  callback: ThemeChangeCallback;
  /** Last known theme. `undefined` until the first check has established a baseline. */
  theme?: string;
}

const THEME_PATTERN = /theme/i;
const ATTRIBUTE_OPTIONS: MutationObserverInit = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ['class', 'style', 'data-theme', 'data-sd-theme'],
  subtree: true
};

const subscriptions = new Map<Element, Subscription>();
/** Last known theme per element, kept after unsubscribing so a moved element can detect a different theme. */
const knownThemes = new WeakMap<Element, string>();
const observedRoots = new WeakSet<Node>();
let mutationObserver: MutationObserver | undefined;
let scheduledFrame = 0;
let scheduledTimeout = 0;
/** requestAnimationFrame is paused in hidden tabs and offscreen iframes, so a timeout makes sure the check runs. */
const FALLBACK_DELAY = 100;

/** Reads the resolved `--sd-theme` of an element without quotes, e.g. `ui-light`. Forces a style read. */
export function readTheme(element: Element): string {
  return getComputedStyle(element).getPropertyValue('--sd-theme').trim().replace(/['"]/g, '');
}

function checkSubscribers() {
  cancelAnimationFrame(scheduledFrame);
  clearTimeout(scheduledTimeout);
  scheduledFrame = 0;
  scheduledTimeout = 0;

  subscriptions.forEach((subscription, element) => {
    if (!element.isConnected) return;

    const theme = readTheme(element);
    const previous = subscription.theme;
    subscription.theme = theme;
    knownThemes.set(element, theme);

    if (previous !== undefined && theme !== previous && theme) {
      subscription.callback(theme);
    }
  });
}

function scheduleCheck() {
  if (scheduledFrame || scheduledTimeout) return;
  scheduledFrame = requestAnimationFrame(checkSubscribers);
  scheduledTimeout = window.setTimeout(checkSubscribers, FALLBACK_DELAY);
}

function isThemeRelevant(record: MutationRecord): boolean {
  if (record.type !== 'attributes') {
    // Stylesheets added, removed or changed in <head>
    record.addedNodes.forEach(node => {
      if (node instanceof HTMLLinkElement) node.addEventListener('load', scheduleCheck, { once: true });
    });
    return true;
  }

  const target = record.target as Element;
  const value = target.getAttribute(record.attributeName!) ?? '';
  return THEME_PATTERN.test(value) || THEME_PATTERN.test(record.oldValue ?? '');
}

function handleMutations(records: MutationRecord[]) {
  if (records.some(isThemeRelevant)) scheduleCheck();
}

function getMutationObserver(): MutationObserver {
  if (!mutationObserver) {
    mutationObserver = new MutationObserver(handleMutations);
    mutationObserver.observe(document.documentElement, ATTRIBUTE_OPTIONS);
    mutationObserver.observe(document.head, { childList: true, characterData: true, subtree: true });
    observedRoots.add(document);
  }
  return mutationObserver;
}

/**
 * Mutations inside shadow roots are not reported to observers of the document. Themes can be applied on wrappers
 * inside a consumer's shadow root, so we also observe every shadow root between the element and the document.
 * Shadow roots of Solid components themselves are skipped, as they never set a theme.
 */
function observeRootsOf(element: Element, observer: MutationObserver) {
  let root = element.getRootNode();

  while (root instanceof ShadowRoot) {
    if (!observedRoots.has(root) && !root.host.localName.startsWith('sd-')) {
      observer.observe(root, ATTRIBUTE_OPTIONS);
      observedRoots.add(root);
    }
    root = root.host.getRootNode();
  }
}

/**
 * Calls `callback` whenever the resolved `--sd-theme` of `element` changes.
 *
 * The baseline theme is read in the next animation frame (batched with all other subscribers) unless `initialTheme`
 * is given. When an element was observed before (e.g. it was moved in the DOM), its last known theme is the baseline,
 * so moving it into a differently themed wrapper is reported too. Pass `initialTheme` only when changes in the same frame as subscribing must be reported.
 *
 * @returns A function that removes the subscription.
 */
export function observeTheme(element: Element, callback: ThemeChangeCallback, initialTheme?: string): () => void {
  const observer = getMutationObserver();
  observeRootsOf(element, observer);

  subscriptions.set(element, { callback, theme: initialTheme ?? knownThemes.get(element) });
  if (initialTheme === undefined) scheduleCheck();

  return () => {
    subscriptions.delete(element);
  };
}
