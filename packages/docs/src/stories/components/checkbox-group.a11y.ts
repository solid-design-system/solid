import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group--size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
    `);
});

test('Label', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group--label&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group--help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
      - text: Help text
    `);
});
