import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-drawer--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Tablet Navigation":
              - /url: "#tablet-navigation"
    - heading "Drawer" [level=1]
    - heading "Tablet Navigation" [level=3]
    - paragraph: When consuming sd-header please ensure that there are no margins applied on the left, right and bottom of the dropdown. The top margin of the dropdown should be kept otherwise the first navigation item is cutted.
    - button "Open Drawer"
    - region "First drawer":
      - dialog "First drawer":
        - button "Close":
          - img "Close":
            - img
        - navigation "Primary":
          - button "Home"
          - button "About Us":
            - separator:
              - separator
          - button "Markets":
            - separator:
              - separator
          - button "Press service":
            - separator:
              - separator
          - button "Sustainability":
            - separator:
              - separator
          - button "Career":
            - separator:
              - separator
        - navigation "Secondary":
          - button "My depot"
          - button "My application":
            - separator:
              - separator
          - button "Our further appearances":
            - separator:
              - separator
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Tablet Navigation', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-drawer--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Open Drawer"
    - region "First drawer":
      - dialog "First drawer":
        - button "Close":
          - img "Close":
            - img
        - navigation "Primary":
          - button "Home"
          - button "About Us":
            - separator:
              - separator
          - button "Markets":
            - separator:
              - separator
          - button "Press service":
            - separator:
              - separator
          - button "Sustainability":
            - separator:
              - separator
          - button "Career":
            - separator:
              - separator
        - navigation "Secondary":
          - button "My depot"
          - button "My application":
            - separator:
              - separator
          - button "Our further appearances":
            - separator:
              - separator
  `);
});
