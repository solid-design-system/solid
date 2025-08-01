import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-combobox--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Simple Suggests":
              - /url: "#simple-suggests"
          - listitem:
            - link "Highlight Query":
              - /url: "#highlight-query"
          - listitem:
            - link "Multiple Highlight Query":
              - /url: "#multiple-highlight-query"
          - listitem:
            - link "Grouping Query":
              - /url: "#grouping-query"
    - heading "Combobox" [level=1]
    - heading "Simple Suggests" [level=3]
    - paragraph: A simple suggestions list shows the user a filtered list.
    - text: Funds
    - combobox "Funds"
    - img "Open":
      - img
    - button "Open"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Highlight Query" [level=3]
    - paragraph: "The filtered options shown in the list can be customized by passing a function to the getOption property. Your function can return a string of HTML, a Lit Template, or an HTMLElement. The getOption() function will be called for each option. The first argument is an element and the second argument is the query string. Remember that the options are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own parts and target them with the ::part() selector. Note: Be sure you trust the content you are outputting! Passing unsanitized user input to getOption() can result in XSS vulnerabilities."
    - text: Funds
    - combobox "Funds"
    - img "Open":
      - img
    - button "Open"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Multiple Highlight Query" [level=3]
    - text: Funds
    - combobox "Funds"
    - img "Open":
      - img
    - button "Open"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Grouping Query" [level=3]
    - paragraph: Use <sd-optgroup> to group <sd-option>s visually.
    - text: Group elements
    - combobox "Group elements"
    - img "Open":
      - img
    - button "Open"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Simple Suggests', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-combobox--simple-suggests&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Funds
    - combobox "Funds"
    - img "Open":
      - img
    - button "Open"
  `);
});

test('Highlight Query', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-combobox--highlight-query&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Funds
    - combobox "Funds"
    - img "Open":
      - img
    - button "Open"
  `);
});

test('Multiple Highlight Query', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-combobox--multiple-highlight-query&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Funds
    - combobox "Funds"
    - img "Open":
      - img
    - button "Open"
  `);
});

test('Grouping Query', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-combobox--grouping-query&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Group elements
    - combobox "Group elements"
    - img "Open":
      - img
    - button "Open"
  `);
});
