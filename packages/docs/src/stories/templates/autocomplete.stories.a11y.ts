import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-autocomplete--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Defaults:":
              - /url: "#defaults"
          - listitem:
            - link "Available Settings:":
              - /url: "#available-settings"
          - listitem:
            - link "How to import using ESM or UMD:":
              - /url: "#how-to-import-using-esm-or-umd"
          - listitem:
            - link "Simple":
              - /url: "#simple"
          - listitem:
            - link "Highlight Query":
              - /url: "#highlight-query"
          - listitem:
            - link "Open On Click":
              - /url: "#open-on-click"
          - listitem:
            - link "Group Elements":
              - /url: "#group-elements"
          - listitem:
            - link "Suggestion Container Height":
              - /url: "#suggestion-container-height"
    - heading "Autocomplete" [level=1]
    - blockquote:
      - paragraph:
        - strong: The support of autocomplete.js is deprecated and will be removed completely in one of the next two major versions of Solid.
    - heading "autoComplete.js Functionality:" [level=2]:
      - link "autoComplete.js":
        - /url: https://tarekraafat.github.io/autoComplete.js/#/
    - paragraph: "autoComplete.js is a lightweight and customizable JavaScript library for creating autocomplete functionality in web applications. Its primary functionality includes:"
    - list:
      - listitem:
        - strong: Autocomplete Suggestions
        - text: ": autoComplete.js provides suggestions as users type into an input field, offering potential matches based on the input."
      - listitem:
        - strong: Keyboard Navigation
        - text: ": It supports keyboard navigation for users to navigate through autocomplete suggestions using arrow keys or other specified keys."
      - listitem:
        - strong: Customization
        - text: ": The library allows for extensive customization of the autocomplete behavior and appearance to suit the specific needs of the application. This includes styling options, event handling, and more."
      - listitem:
        - strong: Data Source
        - text: ": autoComplete.js can fetch suggestions from various data sources, including local arrays, remote APIs, or dynamic data sets."
      - listitem:
        - strong: Accessibility
        - text: ": The library aims to be accessible, providing keyboard support and other features to ensure users with disabilities can effectively use the autocomplete functionality."
    - heading "Defaults:" [level=3]
    - paragraph: By default, autoComplete.js injects a popup element into the DOM to display autocomplete suggestions below or above the input field, depending on available space. It manages the positioning of this popup relative to the input field and handles interactions with it.
    - heading "Available Settings:" [level=3]
    - paragraph: "Some of the settings offered by autoComplete.js include:"
    - list:
      - listitem:
        - strong: Data Source Configuration
        - text: ": Configuration options to specify the data source for autocomplete suggestions, such as local data arrays or remote APIs."
      - listitem:
        - strong: Appearance Customization
        - text: ": Settings to customize the appearance of the autocomplete suggestions popup, including styling options for the suggestions and the popup container."
      - listitem:
        - strong: Behavior Customization
        - text: ": Options to control the behavior of the autocomplete functionality, such as the minimum number of characters required before displaying suggestions, debounce delay for input events, and more."
      - listitem:
        - strong: Event Handling
        - text: ": autoComplete.js provides event handlers for various interactions, such as selecting a suggestion, navigating through suggestions using the keyboard, or clearing the input field."
    - paragraph: Overall, autoComplete.js offers a versatile and feature-rich solution for implementing autocomplete functionality in web applications, with customizable settings to tailor the behavior and appearance according to specific requirements.
    - heading "How to import using ESM or UMD:" [level=3]
    - heading "ESM" [level=4]
    - text: "<script type=\\"module\\"> import '@tarekraafat/autocomplete.js'; import { setupAutocomplete } from '@solid-design-system/unversioned-utilities/autocomplete-config'; Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => { const { config: simpleConfig } = setupAutocomplete('#simple-example'); new autoComplete({ ...simpleConfig, placeHolder: 'Search', data }); }); </script>"
    - button "Copy"
    - heading "UMD" [level=4]
    - text: "<script src=\\"https://solid-design-system.fe.union-investment.de/x.x.x/components/umd/solid-components.js\\"></script> <script> import '@tarekraafat/autocomplete.js'; const { setupAutocomplete } = window['SolidComponents']; Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => { const { config: simpleConfig } = setupAutocomplete('#simple-example'); new autoComplete({ ...simpleConfig, placeHolder: 'Search', data }); }); </script>"
    - button "Copy"
    - heading "Why we provide a helper for autoComplete.js instead of a custom component :" [level=2]:
      - link "autoComplete.js":
        - /url: https://tarekraafat.github.io/autoComplete.js/#/
    - paragraph: "In the case of the autocomplete feature, we encountered various challenges prompting us to opt for providing a helper for an existing lib, rather than developing a custom solution. This decision was driven by several factors, including:"
    - list:
      - listitem:
        - strong: Complexity Reduction
        - text: ": Writing a custom autocomplete component from scratch can be complex, requiring handling of various edge cases, including keyboard navigation, input validation, and data fetching."
      - listitem:
        - strong: Accessibility (a11y)
        - text: ": autoComplete.js provides robust accessibility features, particularly regarding keyboard navigation. When combined with our components, we can ensure the necessary level of accessibility is maintained across the user interface."
      - listitem:
        - strong: Keyboard Handling
        - text: ": Handling keyboard interactions, such as navigating through autocomplete suggestions using arrow keys or selecting options using the Enter key, can be challenging to implement correctly. However, autoComplete.js offers built-in functionality to manage these interactions seamlessly."
      - listitem:
        - strong: Flexibility
        - text: ": autoComplete.js likely offers a range of customization options, allowing you to tailor the autocomplete behavior and appearance to suit your specific needs."
      - listitem:
        - strong: Bundle Size
        - text: ": Contrary to concerns about increased bundle size, the footprint of autoComplete.js is minimal. It's designed to be lightweight, ensuring that its inclusion does not significantly impact overall bundle size."
      - listitem:
        - paragraph:
          - strong: Design System Consistency
          - text: ": By using a helper for autoComplete.js within your web component library, you can ensure consistency with your design system."
        - paragraph:
          - text: Therefore, integrating a helper for
          - code: autoComplete.js
          - text: emerged as the most viable approach to address these concerns effectively.
    - iframe
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Simple" [level=3]
    - paragraph: "This is the most basic example of the autoComplete.js library. It demonstrates how to set up the library with a simple input field and a list of data. The search data is mocked and passed to the autoComplete instance, you can search for the following terms: Aktien, Nachhaltig, Union, Europa, ..."
    - iframe
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Highlight Query" [level=3]
    - paragraph: This is e slightly more advanced example of the autoComplete.js library. It demonstrates how to highlight the query string in the results.
    - iframe
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Open On Click" [level=3]
    - paragraph: This example has the approach to show all the results when the input field is focused and filters the results as the user provides input.
    - iframe
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Group Elements" [level=3]
    - paragraph: This example demonstrates how to group elements in the results list by their first character. Also the searched term is highlighted in the results.
    - iframe
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Suggestion Container Height" [level=3]
    - paragraph:
      - text: This example demonstrates how to customize the appearance of the autocomplete suggestions popup by setting a custom
      - code: max-height
      - text: . There are two additional parts added (
      - code: listbox
      - text: ","
      - code: popup
      - text: ) and you can use the first one to set the
      - code: max-height
      - text: .
    - iframe
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Simple', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-autocomplete--simple&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Simple
    - combobox "Simple"
    - button "Search":
      - img "Search":
        - img
  `);
});

test('Highlight Query', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-autocomplete--highlight-query&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Highlight query
    - combobox "Highlight query"
    - button "Search":
      - img "Search":
        - img
  `);
});

test('Open On Click', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-autocomplete--open-on-click&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Show all items on click
    - combobox "Show all items on click"
    - button "Search":
      - img "Search":
        - img
  `);
});

test('Group Elements', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-autocomplete--group-elements&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Group elements
    - combobox "Group elements"
    - button "Search":
      - img "Search":
        - img
  `);
});

test('Suggestion Container Height', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-autocomplete--suggestion-container-height&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Max-height for list
    - combobox "Max-height for list"
    - button "Search":
      - img "Search":
        - img
  `);
});
