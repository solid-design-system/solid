import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radio "Radio Button" [checked]
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Large" [checked]
        - radio "Large"
        - radio "Large"
      - radiogroup:
        - radio "Medium" [checked]
        - radio "Medium"
        - radio "Medium"
      - radiogroup:
        - radio "Small" [checked]
        - radio "Small"
        - radio "Small"
    `);
});

test('Checked', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--checked&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Label" [checked]
        - radio "Label"
        - radio "Label"
    `);
});

test('Label', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--label&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Label" [checked]
        - radio "Label"
        - radio "Label"
    `);
});

test('Icon', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--icon&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "landscape" [checked]:
          - img "landscape":
            - img
        - radio "landscape":
          - img "landscape":
            - img
        - radio "landscape":
          - img "landscape":
            - img
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Label" [checked]
        - radio "Disabled" [disabled]
        - radio "Label"
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Label" [checked]
        - radio "Visually disabled" [disabled]
        - radio "Label"
    `);
});
