import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radio "Radio"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
      - radiogroup:
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
      - radiogroup:
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Disabled radio in group":
        - radio "Radio 1" [checked]
        - radio "Radio 2" [disabled]
        - radio "Radio 3"
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Visually disabled":
        - radio "Radio 1" [checked] [disabled]
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio--invalid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Invalid Group *":
        - textbox "Invalid Group *"
        - radio "Radio 1"
        - radio "Radio 2"
        - radio "Radio 3"
      - text: Please fill out this field.
    `);
});
