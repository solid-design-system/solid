export function autocompleteConfig({ selector }: { selector: HTMLUnknownElement | string }) {
  const sdInput = !selector
    ? document.querySelector('#autoComplete')
    : typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;

  const input = sdInput!.shadowRoot!.querySelector('input');

  /* Helper to use PostCSS and Syntax highlighting */
  const css = (string: TemplateStringsArray) => string[0];

  /** Setup elements and styles for autocomplete.js */
  input.addEventListener('init', (e: Event) => {
    const popup = sdInput.shadowRoot?.querySelector('sd-popup');
    if (popup) {
      popup.setAttribute('active', 'true');
      popup.placement = 'bottom-start';
      popup.anchor = sdInput;
      popup.sync = 'width';
    }
    const styles = css`
      sd-popup {
        &::part(popup) {
          @apply overflow-y-scroll z-dropdown border-2 border-t-0 border-primary bg-white rounded-b-default shadow px-2 py-3;
        }
        li {
          @apply hover:bg-neutral-100 transition-all;
          list-style-type: '';
          mark {
            @apply font-bold bg-transparent;
          }

          /* This recreates the styles of sd-option if the element doesn't contain a sd-option */
          &:not(:has(sd-option)) {
            @apply px-4 py-3 text-base cursor-pointer text-black;
            &:hover {
              @apply bg-neutral-200;
            }
          }

          &[aria-selected='true'] {
            @apply bg-neutral-200;
          }
        }
      }
    `;
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(styles);
    sdInput.shadowRoot.adoptedStyleSheets = [...sdInput.shadowRoot.adoptedStyleSheets, styleSheet];
  });

  /** Bind the value to `sd-input` */
  input.addEventListener('selection', (e: CustomEvent) => {
    sdInput.value = event.detail.selection.value;
  });

  /** Open and close events to add styles to the input */
  input.addEventListener('open', () => {
    sdInput.shadowRoot?.querySelector('[part="border"]')?.classList.add('rounded-b-none');
    sdInput.shadowRoot?.querySelector('[part="form-control"]')?.classList.add('z-50');
  });

  input.addEventListener('close', () => {
    sdInput.shadowRoot?.querySelector('[part="border"]')?.classList.remove('rounded-b-none');
    sdInput.shadowRoot?.querySelector('[part="form-control"]')?.classList.remove('z-50');
  });

  return {
    selector: () => {
      return input;
    },
    resultsList: {
      tag: 'sd-popup'
    },
    wrapper: false
  };
}
