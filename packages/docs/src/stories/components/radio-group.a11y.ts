import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radiogroup "Group label":
          - radio "Radio 1" [checked]
          - radio "Radio 2"
          - radio "Radio 3"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
    `);
});

test('Label', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--label&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
    `);
});

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Required group *":
        - radio "Radio 1"
        - radio "Radio 2"
        - radio "Radio 3"
      - button "Submit"
      - button "Reset"
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label *":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
      - text: Help text attribute
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Disabled group *":
        - radio "Radio 1" [disabled]
        - radio "Radio 2" [disabled]
        - radio "Radio 3" [disabled]
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group--invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Invalid group *":
        - textbox "Invalid group *"
        - radio "Radio 1"
        - radio "Radio 2"
        - radio "Radio 3"
      - text: Please fill in this field.
    `);
});
