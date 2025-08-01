import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-dropdown--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Dropdown with Navigation Items":
              - /url: "#dropdown-with-navigation-items"
    - heading "Dropdown" [level=1]
    - heading "Dropdown with Navigation Items" [level=3]
    - paragraph: This is an example of a dropdown.
    - button "Select a country" [expanded]:
      - img "Select a country":
        - img
    - heading "Please select a country" [level=4]
    - link "Austria":
      - /url: javascript:void(0)
    - link "Denmark":
      - /url: javascript:void(0)
    - link "Finland":
      - /url: javascript:void(0)
    - link "France":
      - /url: javascript:void(0)
    - link "Germany":
      - /url: javascript:void(0)
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-dropdown--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Select a country" [expanded]:
      - img "Select a country":
        - img
    - heading "Please select a country" [level=4]
    - link "Austria":
      - /url: javascript:void(0)
    - link "Denmark":
      - /url: javascript:void(0)
    - link "Finland":
      - /url: javascript:void(0)
    - link "France":
      - /url: javascript:void(0)
    - link "Germany":
      - /url: javascript:void(0)
  `);
});
