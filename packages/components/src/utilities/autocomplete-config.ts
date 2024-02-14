export function autocompleteConfig({ selector }: { selector: HTMLUnknownElement | string }) {
  return {
    selector: () => {
      const selectorElement = !selector
        ? document.querySelector('#autoComplete')
        : typeof selector === 'string'
          ? document.querySelector(selector)
          : selector;
      return selectorElement.shadowRoot.querySelector('input');
    },
    resultsList: {
      tag: 'sd-popup'
    },
    wrapper: false
  };
}
