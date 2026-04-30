---
name: autocomplete
title: Autocomplete
components:
  - sd-divider
  - sd-input
  - sd-popup
version: 1.0.0
---

## Template: Simple

```html
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
```

## Template: Highlight Query

```html
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
```

## Template: Open On Click

```html
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
```

## Template: Group Elements

```html
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
            headline.classList.add('px-4', 'py-2', 'font-bold', 'text-neutral-900', 'text-base');
            item.parentNode.insertBefore(headline, item);
          }
          item.innerHTML = data.match;
        }
      }
    });
  });
</script>
```

## Template: Suggestion Container Height

```html
<sd-input id="container-height" type="search"><b slot="label">Max-height for list</b></sd-input>
<style>
  sd-input#container-height::part(listbox) {
    max-height: 110px;
  }
</style>
<script type="module">
  import './autocomplete/autoComplete.min.js';

  // preview-ignore:start
  const setupAutocomplete = ${setupAutocomplete};
  const data = ${JSON.stringify(data)};
  // preview-ignore:end

  Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
    /** Show all on click */
    const { config: showAllOnClickConfig } = setupAutocomplete('#container-height');
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
```
