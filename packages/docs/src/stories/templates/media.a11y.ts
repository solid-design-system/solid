import { test, expect } from '@playwright/test';

test('Copyright', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-media--copyright&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - figure:
        - img "A generic placeholder jpg"
        - text: /© Union Investment \\d+/
    `);
});
