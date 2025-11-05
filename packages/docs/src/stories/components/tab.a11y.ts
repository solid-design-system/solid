import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tab "Tab"
    `);
});

test('Variant', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab--variant&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Default 1" [selected]
        - tab "Default 2"
        - tab "Default 3"
      - tabpanel: Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
      - tablist:
        - tab "Container 1" [selected]
        - tab "Container 2"
        - tab "Container 3"
      - tabpanel: Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    `);
});

test('Active', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab--active&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Default 1"
        - tab "Default 2" [selected]
        - tab "Default 3"
      - tabpanel: Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - tablist:
        - tab "Container 1"
        - tab "Container 2" [selected]
        - tab "Container 3"
      - tabpanel: Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Label" [selected]
        - tab "Disabled" [disabled]
        - tab "Label"
      - tabpanel: Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Label" [selected]
        - tab "Visually disabled" [disabled]
        - tab "Label"
      - tabpanel: Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    `);
});

test('Icon', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab--icon&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Label 1" [selected]
        - tab "Label 2"
        - tab "Label 3"
      - tabpanel: Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    `);
});
