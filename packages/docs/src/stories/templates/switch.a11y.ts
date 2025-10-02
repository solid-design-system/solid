import { test, expect } from '@playwright/test';

test('Switch with Tooltip', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-switch--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Investment product type
      - combobox "Investment product type"
      - button "Investment product type"
      - text: Regional focus
      - combobox "Regional focus"
      - button "Regional focus"
      - text: Recommended investment horizon
      - combobox "Recommended investment horizon"
      - button "Recommended investment horizon"
      - switch /With sustainability strategy \\(\\d+\\)/
      - text: /With sustainability strategy \\(\\d+\\)/
      - switch /Eligible for savings plan \\(\\d+\\)/
      - text: /Eligible for savings plan \\(\\d+\\)/
    `);
});
