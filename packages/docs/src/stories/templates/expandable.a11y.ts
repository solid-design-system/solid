import { test, expect } from '@playwright/test';

test('Text Styles', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-expandable--text-styles&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Expand for global economic insights"
      - button "Expand for global economic insights"
    `);
});
