import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: Label
      - textbox "Label"
      - text: Label
      - textbox "Label"
    `);
});

test('Label', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--label&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label attribute
      - textbox "Label attribute"
      - text: Label slot
      - textbox "Label slot"
    `);
});

test('Placeholder', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--placeholder&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Value', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--value&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": Value example
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label" [disabled]: Disabled
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label" [disabled]: Visually disabled
    `);
});

test('Read Only', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--read-only&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": Read only example
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--help-text&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: Help text attribute Label
      - textbox "Label"
      - text: Help text slot
    `);
});

test('Clearable', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--clearable&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Clearable
      - textbox "Clearable": Input text
      - button "Clear entry"
    `);
});

test('Icon', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--icon&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Label
    - img "landscape"
    - textbox "Label"
    - text: Label
    - textbox "Label"
    - img "landscape"
  `);
});

test('Toggle Password', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--toggle-password&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Toggle password
      - textbox "Toggle password"
      - button "Show password"
    `);
});

test('Type', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--type&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Text (default)
      - textbox "Text (default)"
      - text: Default type Search
      - searchbox "Search"
      - button "Search":
        - img "Search":
          - img
      - text: Use search format Date
      - textbox "Date": /\\d+-\\d+-\\d+/
      - text: Value is restricted to date format Date time
      - textbox "Date time": /\\d+-\\d+-01T10:\\d+/
      - text: Value is restricted to datetime format Time
      - textbox "Time": /\\d+:\\d+/
      - text: Value is restricted to time format Number
      - spinbutton "Number"
      - text: Value is restricted to numbers Email
      - textbox "Email"
      - text: Validate with email address format Tel
      - textbox "Tel"
      - text: Shows optimized keyboard on touch devices or similar Password
      - textbox "Password": 8SyW4jNDdrIDe2L
      - button "Show password"
      - text: Use password display format Password
      - textbox "Password": 8SyW4jNDdrIDe2L
      - button "Hide password"
      - text: Use password display format URL
      - textbox "URL"
      - text: Validate with url format
    `);
});

test('Required', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--required&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label *
      - textbox "Label *"
    `);
});

test('Valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--valid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": Input text here
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--invalid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: Error text
    `);
});

test('Pattern', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--pattern&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Pattern *
      - textbox "Pattern *"
      - text: "Required pattern is [A-Za-z]{3,}"
    `);
});

test('Min Length', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--min-length&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Minlength *
      - textbox "Minlength *"
      - text: 5 is the minimum allowed characters
    `);
});

test('Max Length', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--max-length&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Maxlength *
      - textbox "Maxlength *"
      - text: /\\d+ is the maximum allowed characters/
    `);
});

test('Min', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--min&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Min *
      - spinbutton "Min *"
      - text: /Minimum value is \\d+/
    `);
});

test('Max', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--max&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Max *
      - spinbutton "Max *"
      - text: /Maximum value is \\d+/
    `);
});

test('Spin Buttons', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input--spin-buttons&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Spin buttons
      - spinbutton "Spin buttons"
      - text: /Min value is 0 and Max value is \\d+/
    `);
});
