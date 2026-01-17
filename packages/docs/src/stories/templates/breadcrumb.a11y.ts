import { test, expect } from '@playwright/test';

test('Breadcrumb with Header Navigation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-breadcrumb--breadcrumb-with-header-navigation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(``);
});
