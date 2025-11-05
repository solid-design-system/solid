import { test, expect } from '@playwright/test';

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
