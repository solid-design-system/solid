import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-chip--docs&viewMode=story');
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
    - heading "Chip" [level=1]
    - heading "Background Options" [level=3]
    - paragraph: "Recommended combinations:"
    - list:
      - listitem:
        - code: /primary-\\d+/
        - text: on white background
      - listitem:
        - code: /primary-\\d+/
        - text: /on primary-\\d+ background/
      - listitem:
        - code: /primary-\\d+/
        - text: on primary background
      - listitem:
        - code: white
        - text: on image background
    - text: /primary-\\d+ primary-\\d+ primary-\\d+/
    - img "A group of people sitting in a coffee shop"
    - text: white
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Background Options', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-chip--background-options&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: /primary-\\d+ primary-\\d+ primary-\\d+/
    - img "A group of people sitting in a coffee shop"
    - text: white
  `);
});
