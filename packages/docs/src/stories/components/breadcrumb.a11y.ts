import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-breadcrumb--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Breadcrumbs":
        - button "Truncated breadcrumbs"
        - list:
          - listitem:
            - link "First level":
              - /url: "#"
          - listitem:
            - link "Second level":
              - /url: "#"
          - listitem: Current
    `);
});

test('Truncated', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-breadcrumb--truncated&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Breadcrumbs":
        - button "Truncated breadcrumbs"
        - list:
          - listitem:
            - link "Fourth level":
              - /url: "#"
          - listitem: Current
    `);
});
