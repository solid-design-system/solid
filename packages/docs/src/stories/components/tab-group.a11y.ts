import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
    `);
});

test('Activation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group--activation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Auto provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Manual provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    `);
});

test('Scrollable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group--scrollable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
        - tab "Tab 6"
        - tab "Tab 7"
        - tab "Tab 8"
        - tab "Tab 9"
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
      - tabpanel: Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    `);
});
