import { test, expect } from '@playwright/test';

test('simple-table', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-table--simple-table&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(``);
});

test('simple-table-with-vertical-dividers', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-table--simple-table-vertical-dividers&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(``);
});
