import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-media--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
    - heading "Media" [level=1]
    - paragraph:
      - code: Copyright
      - text: can be shown at the bottom of the default slot.
    - figure:
      - img "A generic placeholder jpg"
      - text: /© Union Investment \\d+/
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Copyright', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-media--copyright&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - figure:
      - img "A generic placeholder jpg"
      - text: /© Union Investment \\d+/
  `);
});
