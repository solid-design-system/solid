import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img
      - text: Default slot
      - img
    `);
});

test('Variant', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape--variant&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img
      - text: Default slot
      - img
      - img
      - text: Default slot
      - img
      - img
      - text: Default slot
      - img
      - img
      - img
      - img
      - text: Default slot
      - img
      - img
      - text: Default slot
      - img
    `);
});

test('Shapes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape--shapes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img
      - text: Default slot
      - img
      - img
      - img
      - text: Default slot Default slot
      - img
    `);
});

test('Image Translation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape--image-translate-y&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img "Modern, waved architecture with blue sky in background"
      - img
      - img
    `);
});
