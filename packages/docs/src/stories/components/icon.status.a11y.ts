import { test, expect } from '@playwright/test';

test('sd-status-assets', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-icon-status-assets--sd-status-assets&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "color":
            - cell
            - cell
            - cell "color":
              - code: color
          - row "currentColor primary white":
            - cell
            - cell
            - cell "currentColor":
              - code: currentColor
            - cell "primary":
              - code: primary
            - cell "white":
              - code: white
        - rowgroup:
          - row "name status-check":
            - cell "name":
              - code: name
            - cell "status-check":
              - code: status-check
            - cell
            - cell
            - cell
          - row "status-exclamation":
            - cell "status-exclamation":
              - code: status-exclamation
            - cell
            - cell
            - cell
          - row "status-close":
            - cell "status-close":
              - code: status-close
            - cell
            - cell
            - cell
          - row "status-info":
            - cell "status-info":
              - code: status-info
            - cell
            - cell
            - cell
          - row "status-clock":
            - cell "status-clock":
              - code: status-clock
            - cell
            - cell
            - cell
          - row "status-minus":
            - cell "status-minus":
              - code: status-minus
            - cell
            - cell
            - cell
          - row "status-questionmark":
            - cell "status-questionmark":
              - code: status-questionmark
            - cell
            - cell
            - cell
    `);
});
