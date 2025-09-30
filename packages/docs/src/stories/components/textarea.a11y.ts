import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": Large
      - text: Label
      - textbox "Label": Medium
      - text: Label
      - textbox "Label": Small
    `);
});

test('Rows', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--rows&viewMode=story');
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
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--label&viewMode=story');
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
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--placeholder&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label" [disabled]
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label" [disabled]
    `);
});

test('Read only', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--readonly&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": Read only example Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--help-text&viewMode=story'
  );
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

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Required *
      - textbox "Required *"
    `);
});

test('Valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--valid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": Input text here
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--invalid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: Error text
    `);
});

test('Min Length', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--min-length&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: Please type at least 5 characters
    `);
});

test('Max Length', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea--max-length&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: You are limited to a maximum of 5 characters
    `);
});
