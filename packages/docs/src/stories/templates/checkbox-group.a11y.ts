import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-checkbox-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Checkbox group label":
        - checkbox "Checkbox 1" [checked]
        - checkbox "Checkbox 2" [checked]
        - checkbox "Checkbox 3"
    `);
});

test('Required Checkbox Group', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-checkbox-group--required-checkbox-group&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Required checkbox group*":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
      - button "Submit"
    `);
});
