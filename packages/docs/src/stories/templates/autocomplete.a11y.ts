import { test, expect } from '@playwright/test';

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
