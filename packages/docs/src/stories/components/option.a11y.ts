import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - option "Option"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Large
      - combobox "Large"
      - button "Large"
      - text: Medium
      - combobox "Medium"
      - button "Medium"
      - text: Small
      - combobox "Small"
      - button "Small"
    `);
});

test('Checkbox', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option--checkbox&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Checkbox
      - combobox "Checkbox"
      - button "Checkbox"
    `);
});

test('Selected', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option--selected&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Selected option
      - combobox "Selected option"
      - button "Selected option"
      - text: Multiple selected option
      - combobox "Multiple selected option"
      - button "Multiple selected option"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Disabled options
      - combobox "Disabled options"
      - button "Disabled options"
      - text: Disabled checkbox options
      - combobox "Disabled checkbox options"
      - button "Disabled checkbox options"
    `);
});
