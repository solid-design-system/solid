import { html } from 'lit-html';
import { setupAutocomplete as solidAutocomplete } from '../../solid-components';

export default {
  title: 'Pattern/autocomplete',
  component: 'Autocomplete',
  parameters: {
    docs: { story: { inline: true, height: '400px' } },
    chromatic: { disableSnapshot: true }
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

export const Simple = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: (args: any) => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="simple-example" type="search"><b slot="label">Simple</b></sd-input>
      <script type="module">
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

export const HighlightQuery = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: (args: any) => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="highlight-example" type="search"><b slot="label">Highlight query</b></sd-input>
      <script type="module">
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

export const OpenOnClick = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: (args: any) => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="show-all-on-click-example" type="search"><b slot="label">Show all items on click</b></sd-input>
      <script type="module">
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

export const GroupElements = {
  parameters: {
    controls: {
      exclude: ['autocomplete']
    }
  },
  render: (args: any) => {
    const setupAutocomplete = solidAutocomplete;
    const data = mock;
    return html`
      <sd-input id="group-elements" type="search"><b slot="label">Group elements</b></sd-input>
      <script type="module">
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
