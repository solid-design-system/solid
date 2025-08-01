import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-flag--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Background Options":
              - /url: "#background-options"
    - heading "Flag" [level=1]
    - heading "Background Options" [level=3]
    - paragraph: "Recommended combinations:"
    - list:
      - listitem:
        - code: /neutral-\\d+/
        - text: on white background
      - listitem:
        - code: /neutral-\\d+/
        - text: /on neutral-\\d+ background/
      - listitem:
        - code: /neutral-\\d+/
        - text: /on primary-\\d+ background/
      - listitem:
        - code: white
        - text: on primary and image backgrounds
    - text: /neutral-\\d+ neutral-\\d+ neutral-\\d+ white/
    - img "A group of people sitting in a coffee shop"
    - text: white
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Background Options', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-flag--background-options&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: /neutral-\\d+ neutral-\\d+ neutral-\\d+ white/
    - img "A group of people sitting in a coffee shop"
    - text: white
  `);
});
