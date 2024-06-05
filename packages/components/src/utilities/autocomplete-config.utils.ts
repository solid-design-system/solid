/**
 * Verifies the element is an `sd-SOMETHING` element and returns it.
 * 
 * @param T - i.e. `SdInput`, `SdButton`, `SdAccordionGroup`, etc.
 * @param name - i.e. `input`, `button`, `accordion-group`, etc.
 * @param elementOrSelector - element reference or string to be used for `document.querySelector()`
 * 
 * @throws Error if the provided element or selector does not resolve to an `sd-SOMETHING` element.
 * 
 * @remarks For brevity, comments assume `name === 'input'` and `T === SdInput`. 
 */
export const getAndVerifySdElement = <T extends HTMLElement>(name:string, elementOrSelector: HTMLUnknownElement | string) : T => {
  const candidate: HTMLUnknownElement | null = typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector;
  
  // Verify `candidate` resolves to `sd-input` or `sd-1-2-3-input`.
  // Avoid using `candidate instanceof SdInput` as this would check against _this package's_ `SdInput` class, returning `false` if `sd-input` was imported from somewhere else (i.e. CDN, another bundle)
  const tagStartsWithSD = candidate?.tagName.startsWith('SD-');
  const tagEndsWithName = candidate?.tagName.endsWith(`-${name.toUpperCase()}`);
  if (!tagStartsWithSD || !tagEndsWithName) {
    throw new Error(`The provided element or selector "${JSON.stringify(elementOrSelector)}" does not resolve to an sd-${name} element.`);
  }
  // We're now reasonably certain that we're dealing with an `sd-input`
  return candidate as T;
};

export const getAndVerifyShadowRoot = (element: HTMLElement) : ShadowRoot => {
  if (!element.shadowRoot) {
    throw new Error(`The provided element does not have a shadowRoot.`);
  }
  return element.shadowRoot;
};
