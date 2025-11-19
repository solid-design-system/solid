import { test, expect } from '@playwright/test';

test('Accordion Group with Skeleton', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-skeleton--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group: Shareholder structure
      - group: Cooperative financial network
    `);
});
