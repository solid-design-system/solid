import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Switch"
      - text: Switch
    `);
});

test('Checked', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch--checked&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Checked" [checked]
      - text: Checked
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Disabled" [disabled]
      - text: Disabled
    `);
});

test('Required', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch--required&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Required *"
      - text: Required *
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch--invalid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Invalid *"
      - text: Invalid * Error-text
    `);
});
