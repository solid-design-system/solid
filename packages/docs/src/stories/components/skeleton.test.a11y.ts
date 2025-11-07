import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-skeleton-screenshots-sd-skeleton--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
    `);
});

test('Variant', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-skeleton-screenshots-sd-skeleton--variant&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell "variant":
              - code: variant
          - row "rectangular circular":
            - cell
            - cell "rectangular":
              - code: rectangular
            - cell "circular":
              - code: circular
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell
            - cell
    `);
});

test('Wrapping Content', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-skeleton-screenshots-sd-skeleton--wrapping-content&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
    `);
});
