/**
 * Shared theme observer.
 *
 * Previously every themed component rendered its own `<sd-theme-listener>`, which created its own `style-observer`
 * as soon as it was connected. Pages rendering hundreds of icons/buttons at once froze for many seconds.
 *
 * This module still uses `style-observer` (https://observe.style), so every element reacts to changes of its own
 * resolved `--sd-theme`, whatever caused them (theme classes, inline styles, stylesheets, media queries, …). This keeps
 * multiple and nested themes on the same page working. The differences are:
 * - One `StyleObserver` instance is shared by all elements.
 * - Shadow hosts are not observed directly. `style-observer` adds a stylesheet to the `adoptedStyleSheets` of every
 *   observed shadow host, which makes the browser reprocess all styles of that component. With hundreds of components
 *   this grows quadratically. Instead, a tiny probe element inside the shadow root is observed. It inherits
 *   `--sd-theme` from its host, so it always resolves the same theme.
 * - Elements are queued and observed in one batch in the next animation frame, not while they are being connected.
 * - Only components that need to react to theme changes subscribe (see `SolidElement.onThemeChange`).
 */
import StyleObserver from 'style-observer';

export type ThemeChangeCallback = (theme: string) => void;

interface Subscription {
  callback: ThemeChangeCallback;
  /** Last theme known before the element was observed, used to report changes that happened in between. */
  theme?: string;
  /** The element that is actually observed: a probe inside the shadow root, or the element itself. */
  target?: Element;
}

const PROPERTY = '--sd-theme';
/** Transitions don't run on elements without a box, so the probe stays rendered but takes no space. */
const PROBE_STYLE = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';

const subscriptions = new Map<Element, Subscription>();
/** Observed target (probe or element) to the subscribed element. */
const owners = new WeakMap<Element, Element>();
/** Elements waiting to be observed in the next batch. */
const pending = new Set<Element>();
/** Last known theme per element, kept after unsubscribing so a moved element can detect a different theme. */
const knownThemes = new WeakMap<Element, string>();
let styleObserver: StyleObserver | undefined;
let scheduledFrame = 0;
let scheduledTimeout = 0;
/** requestAnimationFrame is paused in hidden tabs and offscreen iframes, so a timeout makes sure the batch runs. */
const FALLBACK_DELAY = 100;

function cleanTheme(value: string | undefined): string {
  return (value ?? '').trim().replace(/['"]/g, '');
}

/** Reads the resolved `--sd-theme` of an element without quotes, e.g. `ui-light`. Forces a style read. */
export function readTheme(element: Element): string {
  return cleanTheme(getComputedStyle(element).getPropertyValue(PROPERTY));
}

/** Whether a theme uses the UI motion. An empty theme is the default UI theme. */
export function isUiTheme(theme: string): boolean {
  return theme === '' || theme === 'ui-light' || theme === 'ui-dark';
}

function notify(element: Element, theme: string, previous: string | undefined) {
  knownThemes.set(element, theme);
  if (theme && theme !== previous) subscriptions.get(element)?.callback(theme);
}

function getStyleObserver(): StyleObserver {
  styleObserver ??= new StyleObserver(records => {
    records.forEach(({ target, value, oldValue }) => {
      const element = owners.get(target);
      if (element) notify(element, cleanTheme(value), cleanTheme(oldValue));
    });
  });
  return styleObserver;
}

function getTarget(element: Element): Element {
  const root = element.shadowRoot;
  if (!root) return element;

  const probe = document.createElement('span');
  probe.setAttribute('aria-hidden', 'true');
  probe.style.cssText = PROBE_STYLE;
  root.appendChild(probe);
  return probe;
}

function observePending() {
  cancelAnimationFrame(scheduledFrame);
  clearTimeout(scheduledTimeout);
  scheduledFrame = 0;
  scheduledTimeout = 0;

  const elements = [...pending].filter(element => element.isConnected && subscriptions.has(element));
  pending.clear();
  if (!elements.length) return;

  const targets = elements.map(element => {
    const target = getTarget(element);
    subscriptions.get(element)!.target = target;
    owners.set(target, element);
    return target;
  });
  getStyleObserver().observe(targets, PROPERTY);

  // style-observer doesn't report the initial value. Only elements with a known earlier theme (moved elements or an
  // explicit initial theme) are compared once, so a change that happened while they were queued isn't lost.
  elements.forEach(element => {
    const previous = subscriptions.get(element)!.theme;
    if (previous !== undefined) notify(element, readTheme(element), previous);
  });
}

function scheduleObserve() {
  if (scheduledFrame || scheduledTimeout) return;
  scheduledFrame = requestAnimationFrame(observePending);
  scheduledTimeout = window.setTimeout(observePending, FALLBACK_DELAY);
}

/**
 * Calls `callback` whenever the resolved `--sd-theme` of `element` changes.
 *
 * The element is observed in the next animation frame, batched with all other new subscribers. Changes are reported
 * relative to `initialTheme` if given, otherwise relative to the element's last known theme (e.g. when it was moved
 * in the DOM), otherwise relative to its theme when the batch runs.
 *
 * @returns A function that removes the subscription.
 */
export function observeTheme(element: Element, callback: ThemeChangeCallback, initialTheme?: string): () => void {
  subscriptions.set(element, { callback, theme: initialTheme ?? knownThemes.get(element) });
  pending.add(element);
  scheduleObserve();

  return () => {
    const target = subscriptions.get(element)?.target;
    subscriptions.delete(element);
    pending.delete(element);
    if (!target || !styleObserver) return;

    // Remember the last observed theme, so moving the element into a differently themed area is reported
    const lastValue = styleObserver.elementObservers.get(target)?.properties.get(PROPERTY);
    if (lastValue !== undefined) knownThemes.set(element, cleanTheme(lastValue));
    styleObserver.unobserve(target, PROPERTY);
    owners.delete(target);
    if (target !== element) target.remove();
  };
}
