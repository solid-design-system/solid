import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-input--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Input with Currency Stepper":
              - /url: "#input-with-currency-stepper"
    - heading "Input" [level=1]
    - heading "Input with Currency Stepper" [level=3]
    - text: Currency stepper
    - spinbutton "Currency stepper"
    - text: EUR
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

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
