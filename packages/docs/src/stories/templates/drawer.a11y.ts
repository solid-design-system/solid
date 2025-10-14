import { test, expect } from '@playwright/test';

test('Tablet Navigation', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-drawer--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Drawer"
      - region "Navigation drawer menu":
        - dialog "Navigation drawer menu":
          - button "Close":
            - img "Close":
              - img
          - navigation "Main":
            - list:
              - listitem:
                - link "Home":
                  - /url: javascript:void(0)
              - listitem:
                - button "About Us":
                  - separator:
                    - separator
              - listitem:
                - link "Markets":
                  - /url: javascript:void(0)
                  - separator:
                    - separator
              - listitem:
                - link "Press service":
                  - /url: javascript:void(0)
                  - separator:
                    - separator
              - listitem:
                - link "Sustainability":
                  - /url: javascript:void(0)
                  - separator:
                    - separator
              - listitem:
                - link "Career":
                  - /url: javascript:void(0)
                  - separator:
                    - separator
            - list:
              - listitem:
                - link "My depot":
                  - /url: javascript:void(0)
              - listitem:
                - link "My application":
                  - /url: javascript:void(0)
                  - separator:
                    - separator
              - listitem:
                - link "Our further appearances":
                  - /url: javascript:void(0)
                  - separator:
                    - separator
    `);
});
