import { test, expect } from '@playwright/test';

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
