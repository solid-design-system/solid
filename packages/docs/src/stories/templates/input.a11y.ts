import { test, expect } from '@playwright/test';

test('Input With Currency Stepper', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-input--input-with-currency-stepper&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Currency stepper
      - spinbutton "Currency stepper"
      - text: EUR
    `);
});
