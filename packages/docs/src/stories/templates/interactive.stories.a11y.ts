import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-interactive--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
    - heading "Interactive" [level=1]
    - paragraph:
      - text: Examples of the
      - code: sd-interactive
      - text: "class:"
    - list:
      - listitem: Label only
      - listitem: Icon only
      - listitem: Left icon with label
      - listitem: Label with right icon
    - button "Text"
    - button "Icon only button":
      - img "Icon only button":
        - img
    - button "Text"
    - button "Text"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Examples', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-interactive--examples&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Text"
    - button "Icon only button":
      - img "Icon only button":
        - img
    - button "Text"
    - button "Text"
  `);
});
