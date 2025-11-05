import { test, expect } from '@playwright/test';

test('Examples', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-interactive--examples&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Text"
    - button "Icon only button":
      - img "Icon only button"
    - button "Text"
    - button "Text"
  `);
});
