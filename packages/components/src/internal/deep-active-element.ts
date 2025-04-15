/**
 * Check if element has a ShadowRoot and recursively check for focused elements inside
 *
 * @param element
 * @returns HTMLElement | null
 */

export function getDeepActiveElement(element: Element | null = document.activeElement): HTMLElement | null {
  if (element?.shadowRoot) {
    const shadowActiveElement = element.shadowRoot.activeElement;
    if (shadowActiveElement) {
      return getDeepActiveElement(shadowActiveElement as HTMLElement);
    }
  }
  return element as HTMLElement;
}
