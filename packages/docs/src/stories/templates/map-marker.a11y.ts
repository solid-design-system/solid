import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-map-marker--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Map Marker with Image":
              - /url: "#map-marker-with-image"
    - heading "Map Marker" [level=1]
    - heading "Map Marker with Image" [level=3]
    - img
    - img "Brand mark of Union Investment"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Map Maker With Images', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-map-marker--map-maker-with-images&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - img
    - img "Brand mark of Union Investment"
  `);
});
