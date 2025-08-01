import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-radio-button-group--docs&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
    - heading "Radio Button Group" [level=1]
    - radiogroup:
      - radio "List" [checked]
      - radio "Map"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-radio-button-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - radiogroup:
      - radio "List" [checked]
      - radio "Map"
  `);
});
