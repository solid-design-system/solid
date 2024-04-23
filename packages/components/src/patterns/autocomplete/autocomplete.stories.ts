import { html } from 'lit-html';
import { setupAutocomplete as solidAutocomplete } from '../../solid-components';

/**
 * ## [autoComplete.js](https://tarekraafat.github.io/autoComplete.js/#/) Functionality:
 *
 * autoComplete.js is a lightweight and customizable JavaScript library for creating autocomplete functionality in web applications. Its primary functionality includes:
 * 1. **Autocomplete Suggestions**: autoComplete.js provides suggestions as users type into an input field, offering potential matches based on the input.
 * 2. **Keyboard Navigation**: It supports keyboard navigation for users to navigate through autocomplete suggestions using arrow keys or other specified keys.
 * 3. **Customization**: The library allows for extensive customization of the autocomplete behavior and appearance to suit the specific needs of the application. This includes styling options, event handling, and more.
 * 4. **Data Source**: autoComplete.js can fetch suggestions from various data sources, including local arrays, remote APIs, or dynamic data sets.
 * 5. **Accessibility**: The library aims to be accessible, providing keyboard support and other features to ensure users with disabilities can effectively use the autocomplete functionality.
 *
 * ### Defaults:
 * By default, autoComplete.js injects a popup element into the DOM to display autocomplete suggestions below or above the input field, depending on available space. It manages the positioning of this popup relative to the input field and handles interactions with it.
 *
 * ### Available Settings:
 * Some of the settings offered by autoComplete.js include:
 * 1. **Data Source Configuration**: Configuration options to specify the data source for autocomplete suggestions, such as local data arrays or remote APIs.
 * 2. **Appearance Customization**: Settings to customize the appearance of the autocomplete suggestions popup, including styling options for the suggestions and the popup container.
 * 3. **Behavior Customization**: Options to control the behavior of the autocomplete functionality, such as the minimum number of characters required before displaying suggestions, debounce delay for input events, and more.
 * 4. **Event Handling**: autoComplete.js provides event handlers for various interactions, such as selecting a suggestion, navigating through suggestions using the keyboard, or clearing the input field.
 *
 * Overall, autoComplete.js offers a versatile and feature-rich solution for implementing autocomplete functionality in web applications, with customizable settings to tailor the behavior and appearance according to specific requirements.
 *
 * ### How to import using ESM or UMD:
 * #### ESM
 * ```html
 * <script type="module">
 *   import '@tarekraafat/autocomplete.js';
 *
 *   import { setupAutocomplete } from '@solid-design-system/unversioned';
 *
 *   Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
 *     const { config: simpleConfig } = setupAutocomplete('#simple-example');
 *     new autoComplete({
 *       ...simpleConfig,
 *       placeHolder: 'Search',
 *       data
 *     });
 *   });
 * </script>
 * ```
 *
 * #### UMD
 * ```html
 * <script src="https://solid-design-system.fe.union-investment.de/x.x.x/components/umd/solid-components.js"></script>
 * <script>
 *   import '@tarekraafat/autocomplete.js';
 *
 *   const { setupAutocomplete } = window['Solid Components'];
 *
 *  Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
 *     const { config: simpleConfig } = setupAutocomplete('#simple-example');
 *     new autoComplete({
 *       ...simpleConfig,
 *       placeHolder: 'Search',
 *       data
 *     });
 *   });
 * </script>
 * ```
 *
 * ## Why we provide a helper for [autoComplete.js](https://tarekraafat.github.io/autoComplete.js/#/) instead of a custom component :
 *   In the case of the autocomplete feature, we encountered various challenges prompting us to opt for providing a helper for an existing lib, rather than developing a custom solution. This decision was driven by several factors, including:
 *
 *   - **Complexity Reduction**: Writing a custom autocomplete component from scratch can be complex, requiring handling of various edge cases, including keyboard navigation, input validation, and data fetching.
 *   - **Accessibility (a11y)**: autoComplete.js provides robust accessibility features, particularly regarding keyboard navigation. When combined with our components, we can ensure the necessary level of accessibility is maintained across the user interface.
 *   - **Keyboard Handling**: Handling keyboard interactions, such as navigating through autocomplete suggestions using arrow keys or selecting options using the Enter key, can be challenging to implement correctly. However, autoComplete.js offers built-in functionality to manage these interactions seamlessly.
 *   - **Flexibility**: autoComplete.js likely offers a range of customization options, allowing you to tailor the autocomplete behavior and appearance to suit your specific needs.
 *   - **Bundle Size**: Contrary to concerns about increased bundle size, the footprint of autoComplete.js is minimal. It's designed to be lightweight, ensuring that its inclusion does not significantly impact overall bundle size.
 *   - **Design System Consistency**: By using a helper for autoComplete.js within your web component library, you can ensure consistency with your design system.
 *
 *   Therefore, integrating a helper for `autoComplete.js` emerged as the most viable approach to address these concerns effectively.
 */

export default {
  title: 'Pattern/autocomplete',
  component: 'Autocomplete',
  parameters: {
    docs: { story: { inline: false, height: '400px' } },
    chromatic: { disableSnapshot: true },
    excludeStories: /.Simple$/
  }
};

const mock = {
  src: [
    'PrivatFonds: Kontrolliert pro',
    'PrivatFonds: Nachhaltig',
    'UniAusschüttung A',
    'UniAusschüttung -net- A',
    'UniCommodities',
    'UniDividendenAss A',
    'UniDividendenAss -net- A',
    'UniDynamicFonds: Europa A',
    'UniDynamicFonds: Europa -net- A',
    'UniDynamicFonds: Global A',
    'UniDynamicFonds: Global -net- A',
    'UniEuropa A',
    'UniEuropa -net-',
    'UniEuroRenta Corporates A',
    'UniEuroRenta Real Zins A',
    'UniEuroRenta Real Zins -net- A',
    'UniFavorit: Aktien',
    'UniFavorit: Aktien Europa A',
    'UniFavorit: Aktien Europa -net- A',
    'UniFavorit: Aktien -net-',
    'UniGlobal',
    'UniGlobal Dividende A',
    'UniGlobal Dividende -net- A',
    'UniGlobal II A',
    'UniGlobal -net-',
    'UniGlobal Vorsorge',
    'UniIndustrie 4.0 A',
    'UniIndustrie 4.0 -net- A',
    'UniKlassikMix',
    'UniMarktführer A',
    'UniMarktführer -net- A',
    'UniMultiAsset: Chance III',
    'UniNachhaltig Aktien Deutschland',
    'UniNachhaltig Aktien Deutschland -net-',
    'UniNachhaltig Aktien Europa',
    'UniNachhaltig Aktien Europa -net-',
    'UniNachhaltig Aktien Global',
    'UniNachhaltig Aktien Global -net-',
    'UniNachhaltig Aktien Infrastruktur',
    'UniNachhaltig Aktien Infrastruktur -net-',
    'UniNordamerika',
    'UniRak',
    'UniRak Nachhaltig A',
    'UniRak Nachhaltig Konservativ A',
    'UniRak Nachhaltig Konservativ -net- A',
    'UniRak Nachhaltig -net- A',
    'UniRak -net-',
    'UniReserve: Euro-Corporates',
    'UniSector: BasicIndustries A',
    'UniSector: BioPharma A',
    'UniSector: HighTech A',
    'UniSelection: Global I',
    'UniStrategie: Ausgewogen',
    'UniStrategie: Offensiv',
    'UniStruktur',
    'UniThemen Aktien A',
    'UniThemen Aktien -net- A',
    'UniThemen Defensiv A',
    'UniValueFonds: Europa A',
    'UniValueFonds: Europa -net- A',
    'UniValueFonds: Global A',
    'UniValueFonds: Global -net- A',
    'UniZukunft Klima A',
    'UniZukunft Klima -net- A',
    'UniZukunft Welt A',
    'UniZukunft Welt -net- A',
    'Uni21.Jahrhundert -net-',
    'BBBank Dynamik Union',
    'BBBank Kontinuität Union',
    'BBBank Wachstum Union',
    'FVB-Aktienfonds Nachhaltig',
    'Invest Global',
    'LIGA-Pax-Aktien-Union',
    'Nachhaltig Global Mittelhessen',
    'Profi-Balance',
    'SpardaRentenPlus A',
    'Volksbank Bielefeld-Gütersloh NachhaltigkeitsInvest',
    'VR Bank Rhein-Neckar Union Balance Invest',
    'VR Sachsen Global Union',
    'VR Westmünsterland Aktiv Nachhaltig',
    'Werte Fonds Münsterland Klima'
  ].sort()
};

/**
  This is the most basic example of the autoComplete.js library. It demonstrates how to set up the library with a simple input field and a list of data.
  The search data is mocked and passed to the autoComplete instance, you can search for the following terms: Aktien, Nachhaltig, Union, Europa, ...

  > Notice: This example is not working, check it out the one on top of this page.
 */
export const Simple = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: () => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="simple-example" type="search"><b slot="label">Simple</b></sd-input>
      <script type="module">
        import './autocomplete/autoComplete.min.js';

        // preview-ignore:start
        const setupAutocomplete = ${setupAutocomplete};
        const data = ${JSON.stringify(data)};
        // preview-ignore:end

        Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
          /* Simple example */
          const { config: simpleConfig } = setupAutocomplete('#simple-example');
          new autoComplete({
            ...simpleConfig,
            placeHolder: 'Find funds...',
            data
          });
        });
      </script>
    `;
  }
};

/**
  This is an example of how to customize the resultsList. It demonstrates how to change the resultItem to a custom element.
  The search data is mocked and passed to the autoComplete instance, you can search for the following terms: Aktien, Nachhaltig, Union, Europa, ...
 */
export const TeaserResultItem = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: () => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="teaser-result-item" type="search"><b slot="label">Teaser result item</b></sd-input>
      <script type="module">
        import './autocomplete/autoComplete.min.js';

        // preview-ignore:start
        const setupAutocomplete = ${setupAutocomplete};
        const data = ${JSON.stringify(data)};
        // preview-ignore:end

        Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
          /* Simple example */
          const { config: simpleConfig } = setupAutocomplete('#teaser-result-item');
          new autoComplete({
            ...simpleConfig,
            placeHolder: 'Find funds...',
            resultsList: {
              tag: 'sd-popup',
              maxResults: 3
            },
            resultItem: {
              tag: 'sd-teaser',
              element: (item, data) => {
                let headline = document.createElement('h3');
                item.setAttribute('variant', 'white border-neutral-400');
                item.innerHTML = 'Lorem ipsum';
                headline.setAttribute('slot', 'headline');
                headline.innerHTML = data.match;
                item.appendChild(headline);
              }
            },
            data
          });
        });
      </script>
    `;
  }
};

/**
  This is e slightly more advanced example of the autoComplete.js library. It demonstrates how to highlight the query string in the results.
 */
export const HighlightQuery = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: () => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="highlight-example" type="search"><b slot="label">Highlight query</b></sd-input>
      <script type="module">
        import './autocomplete/autoComplete.min.js';

        // preview-ignore:start
        const setupAutocomplete = ${setupAutocomplete};
        const data = ${JSON.stringify(data)};
        // preview-ignore:end

        Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
          /* Highlighting */
          const { config: highlightConfig } = setupAutocomplete('#highlight-example');
          new autoComplete({
            ...highlightConfig,
            // API Basic Configuration Object
            placeHolder: 'Find funds...',
            data,
            resultItem: {
              highlight: true
            }
          });
        });
      </script>
    `;
  }
};

/**
  This example has the approach to show all the results when the input field is focused and filters the results as the user provides input.
 */
export const OpenOnClick = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: () => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="show-all-on-click-example" type="search"><b slot="label">Show all items on click</b></sd-input>
      <script type="module">
        import './autocomplete/autoComplete.min.js';

        // preview-ignore:start
        const setupAutocomplete = ${setupAutocomplete};
        const data = ${JSON.stringify(data)};
        // preview-ignore:end

        Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
          /** Show all on click */
          const { config: showAllOnClickConfig } = setupAutocomplete('#show-all-on-click-example');
          const showAllOnClickExample = new autoComplete({
            ...showAllOnClickConfig,
            threshold: 0,
            placeHolder: 'Find funds...',
            data,
            resultsList: {
              ...showAllOnClickConfig.resultsList,
              maxResults: undefined
            },
            events: {
              input: {
                focus(event) {
                  showAllOnClickExample.start();
                }
              }
            },
            resultItem: {
              highlight: true
            }
          });
        });
      </script>
    `;
  }
};

/**
  This example demonstrates how to group elements in the results list by their first character. Also the searched term is highlighted in the results.
 */
export const GroupElements = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: () => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="group-elements" type="search"><b slot="label">Group elements</b></sd-input>
      <script type="module">
        import './autocomplete/autoComplete.min.js';

        // preview-ignore:start
        const setupAutocomplete = ${setupAutocomplete};
        const data = ${JSON.stringify(data)};
        // preview-ignore:end

        Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
          /** Group elements by their first character */
          const { config: groupElementsConfig } = setupAutocomplete('#group-elements');
          const groupElementsAutocomplete = new autoComplete({
            ...groupElementsConfig,
            placeHolder: 'Find funds...',
            data: {
              src: data.src,
              filter: list => {
                // Step 1: Add grouping information to the elements
                let currentHeadline = '';
                let showDivider = false;
                // Here group elements by their first character
                list.forEach(item => {
                  let firstChar = item.value[0].toUpperCase();
                  if (firstChar !== currentHeadline) {
                    // Add headline information to the element
                    item.headline = firstChar;
                    item.divider = showDivider;
                    currentHeadline = firstChar;
                    // Show divider for all but the first headline
                    showDivider = true;
                  }
                });
                return list;
              }
            },
            resultsList: {
              ...groupElementsConfig.resultsList,
              // unlimited elements
              maxResults: undefined
            },
            resultItem: {
              highlight: true,
              element: (item, data) => {
                // Step 2: Render the elements with the headline information
                if (data.divider) {
                  // Add a divider before the element
                  const divider = document.createElement('sd-divider');
                  item.parentNode.insertBefore(divider, item);
                }
                if (data.headline) {
                  // Add a headline before the element
                  const headline = document.createElement('h3');
                  headline.innerHTML = data.headline;
                  // Warning: The following classes need to be available in ShadowDOM
                  headline.classList.add('px-4', 'py-2', 'font-bold', 'text-neutral-900', 'text-lg');
                  item.parentNode.insertBefore(headline, item);
                }
                item.innerHTML = data.match;
              }
            }
          });
        });
      </script>
    `;
  }
};

export const SuggestionContainerHeight = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: () => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="show-all-on-click-example" type="search"><b slot="label">Show all items on click</b></sd-input>
      <script type="module">
        import './autocomplete/autoComplete.min.js';

        // preview-ignore:start
        const setupAutocomplete = ${setupAutocomplete};
        const data = ${JSON.stringify(data)};
        // preview-ignore:end

        Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
          /** Show all on click */
          const { config: showAllOnClickConfig } = setupAutocomplete('#show-all-on-click-example');
          const showAllOnClickExample = new autoComplete({
            ...showAllOnClickConfig,
            threshold: 0,
            placeHolder: 'Find funds...',
            data,
            resultsList: {
              ...showAllOnClickConfig.resultsList,
              maxResults: undefined
            },
            events: {
              input: {
                focus(event) {
                  showAllOnClickExample.start();
                }
              }
            },
            resultItem: {
              highlight: true
            }
          });
        });
      </script>
    `;
  }
};

/**
 * This example demonstrates how to fetch results asynchronously from a remote server or API.
 * TODO - docs: 📚 add async autocomplete sample #980
 *
 * export const Async = {
 *   parameters: {
 *     controls: {
 *       exclude: ['autocomplete']
 *     }
 *   },
 *   render: () => {
 *     const setupAutocomplete = solidAutocomplete;
 *     const data = mock;
 *     return html`
 *       <sd-input id="async-example" type="search"><b slot="label">Async result fetch</b></sd-input>
 *       <script type="module">
 *         import './autocomplete/autoComplete.min.js';
 *
 *         // preview-ignore:start
 *         const setupAutocomplete = ${setupAutocomplete};
 *         const data = ${JSON.stringify(data)};
 *         // preview-ignore:end
 *
 *         Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
 *           // Simple example
 *           const { config: simpleConfig } = setupAutocomplete('#async-example');
 *
 *           new autoComplete({
 *             ...simpleConfig,
 *             data: {
 *               src: async query => {
 *                 await new Promise(resolve => setTimeout(resolve, 1000));
 *                 return data.src.map(item => ({ item }));
 *               },
 *               keys: ['item']
 *             }
 *           });
 *         });
 *       </script>
 *     `;
 *   }
 * };
 */
