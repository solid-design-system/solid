import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Placement', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--placement&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Label', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--label&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label attribute
      - combobox "Label attribute"
      - img "Open":
        - img
      - button "Open"
      - text: Label slot
      - combobox "Label slot"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Placeholder', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--placeholder&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label" [disabled]
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label" [disabled]
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
      - text: Help text attribute Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
      - text: Help text slot
    `);
});

test('Focus', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--focus&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Suggestion Container Height', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--suggestion-container-height&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Preferred color
      - combobox "Preferred color"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Clearable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--clearable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - text: Option 1
      - button "Clear entry"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Icons', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--icons&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Search"
      - button "Open"
    `);
});

test('Search', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--search&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Search":
        - img "Search":
          - img
    `);
});

test('Multiple', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--multiple&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Funds name BBBank Dynamik Union
      - button "Remove":
        - img "Remove":
          - img
      - text: BBBank Kontinuität Union
      - button "Remove":
        - img "Remove":
          - img
      - combobox "Funds name"
      - text: BBBank Dynamik Union, BBBank Kontinuität Union
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Max Options Visible', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--max-options-visible&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Funds name 3 Options selected
      - button "Remove":
        - img "Remove":
          - img
      - combobox "Funds name"
      - text: BBBank Dynamik Union, BBBank Kontinuität Union, BBBank Nachhaltigkeit Union
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Required *
      - combobox "Required *"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--valid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - text: Option 1
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--invalid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label *
      - combobox "Label *"
      - img "Open":
        - img
      - button "Open"
      - text: Error text
    `);
});

test('Async Options', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--async-options&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Async options
      - combobox "Async options"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Custom Filter', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox--custom-filter&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Custom filter
      - combobox "Custom filter"
      - img "Open":
        - img
      - button "Open"
    `);
});
