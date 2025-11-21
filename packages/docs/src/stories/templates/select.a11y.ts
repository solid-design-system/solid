import { test, expect } from '@playwright/test';

test('Grouping Options', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-select--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: City/Region
      - combobox "City/Region"
      - button "City/Region"
      - text: Country
      - combobox "Country"
      - button "Country"
    `);
});
