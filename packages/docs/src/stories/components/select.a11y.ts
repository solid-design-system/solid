import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
      - text: Label
      - combobox "Label"
      - button "Label"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Placement', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--placement&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Label', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--label&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label attribute
      - combobox "Label attribute"
      - button "Label attribute"
      - text: Label slot
      - combobox "Label slot"
      - button "Label slot"
    `);
});

test('Placeholder', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--placeholder&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label" [disabled]
      - button "Label"
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label" [disabled]
      - button "Label"
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--help-text&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
      - text: Help text attribute Label
      - combobox "Label"
      - button "Label"
      - text: Help text slot
    `);
});

test('Clearable', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--clearable&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label": Option 1
      - text: Option 1
      - button "Clear entry"
      - button "Label"
    `);
});

test('Multiple', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--multiple&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label": Options selected (2)
      - text: Option 1, Option 2
      - button "Label"
    `);
});

test('Use Tags', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--use-tags&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label Option 1
      - button "Remove":
        - img "Remove":
          - img
      - text: Option 2
      - button "Remove":
        - img "Remove":
          - img
      - text: Option 1, Option 2
      - button "Label"
    `);
});

test('Max Options Visible', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--max-options-visible&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label 3 Options selected
      - button "Remove":
        - img "Remove":
          - img
      - text: Option 1, Option 2, Option 3
      - button "Label"
    `);
});

test('Required', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--required&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Required *
      - combobox "Required *"
      - button "Required *"
    `);
});

test('Valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--valid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label": Option 1
      - text: Option 1
      - button "Label"
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select--invalid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label *
      - combobox "Label *"
      - button "Label *"
      - text: Error text
    `);
});
