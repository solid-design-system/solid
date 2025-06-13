/**
 *
 * Tranverses up the DOM tree, including Shadow DOM boundaries, to find the closest
 * ancestor element that matches the specified selector.
 *
 * @param element
 * @param selector
 * @returns HTMLElement | null
 */

export function deepClosestElement(element: HTMLElement, selector: string) {
  let current: Element = element;

  while (current) {
    if (current.matches(selector)) {
      return current;
    }

    if (current.parentElement) {
      current = current.parentElement;
    } else if (current.parentNode instanceof ShadowRoot) {
      current = current.parentNode.host;
    } else {
      break;
    }
  }

  return null;
}
