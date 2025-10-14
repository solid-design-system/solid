import { test, expect } from '@playwright/test';

test('Headline with Mark', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-mark--headline-with-mark&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Real estate investments in the Americas" [level=4]:
        - mark: in the Americas
      - heading "Real estate investments in the Americas" [level=4]:
        - mark: in the Americas
      - heading "Real estate investments in the Americas" [level=4]:
        - mark: in the Americas
      - heading "Real estate investments in the Americas" [level=4]:
        - mark: in the Americas
    `);
});

test('Display with Mark', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-mark--display-with-mark&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph:
        - mark: Union Investment
        - text: at a glance
    `);
});
