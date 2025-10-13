import { test, expect } from '@playwright/test';

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
