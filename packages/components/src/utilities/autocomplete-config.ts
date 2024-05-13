/**
 * This function is a helper to quickly setup autocomplete.js for Solid components.
 * Besides some needed defaults it adds additional styles and event listeners.
 * @param selector - The selector to get the input element from the ShadowDOM, defaults to '#autoComplete'.
 * @returns The configuration object for autocomplete.js.
 */
export function setupAutocomplete(
  selector: HTMLUnknownElement | string = '#autoComplete',
  { setValueOnSelection, scrollSelectionIntoView } = {
    setValueOnSelection: true,
    scrollSelectionIntoView: true
  }
) {
  // @ts-expect-error - We expect the input to be found
  const sdInput: HTMLInputElement = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector;

  const input = sdInput.shadowRoot!.querySelector('input')!;

  /* Helper to use PostCSS and Syntax highlighting */
  const css = (string: TemplateStringsArray) => string[0];

  /** Setup elements and styles for autocomplete.js */
  input.addEventListener('init', () => {
    const ul = sdInput.shadowRoot?.querySelector('ul');
    ul?.setAttribute('part', 'listbox');
    const popup = document.createElement('sd-popup');
    popup.appendChild(ul!);
    sdInput.shadowRoot?.appendChild(popup);
    popup?.setAttribute('exportparts', 'popup__content');
    if (popup) {
      popup.active = false;
      popup.autoSize = 'vertical';
      popup.autoSizePadding = 16;
      popup.placement = 'bottom-start';
      popup.anchor = sdInput!;
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
    sdInput.shadowRoot!.adoptedStyleSheets = [...sdInput.shadowRoot!.adoptedStyleSheets, styleSheet];
  });

  if (setValueOnSelection) {
    /** Bind the value to `sd-input` */
    input.addEventListener('selection', (event: CustomEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      sdInput.value = event?.detail?.selection.value as string;
    });
  }

  /** Open and close events to add styles to the input */
  input.addEventListener('open', () => {
    sdInput.shadowRoot?.querySelector('sd-popup')?.setAttribute('active', 'true');
    sdInput.shadowRoot?.querySelector('[part="border"]')?.classList.add('rounded-b-none');
    sdInput.shadowRoot?.querySelector('[part="form-control"]')?.classList.add('z-50');
  });

  input.addEventListener('close', () => {
    sdInput.shadowRoot?.querySelector('sd-popup')?.removeAttribute('active');
    sdInput.shadowRoot?.querySelector('[part="border"]')?.classList.remove('rounded-b-none');
    sdInput.shadowRoot?.querySelector('[part="form-control"]')?.classList.remove('z-50');
  });

  /** Selected elements should also be in view */
  if (scrollSelectionIntoView) {
    input.addEventListener('navigate', () => {
      // get element which has currently aria-selected
      const selected = sdInput.shadowRoot!.querySelector('[aria-selected="true"]');
      selected?.scrollIntoView({ block: 'nearest' });
    });
  }

  return {
    config: {
      selector: () => {
        // For correct handling we need the input element inside the ShadowDOM
        // Because of A11y this leads to the fact, that we need to push the popup into the ShadowDOM as well
        // Unfortunately this hinders people to style things just from outside with their own stylesheets
        // Experiments using resultsList.destination as destination and the whole sd-input as selector failed
        // Maybe there could be a fix in the future for that
        return input;
      },
      resultsList: {
        tag: 'ul'
      },
      wrapper: false
    }
  };
}
