import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
      - group "Date picker":
        - combobox "Select a date"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Alignment', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--alignment&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Label', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--label&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - text: Label attribute
        - combobox "Select a date"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Placeholder', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--placeholder&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date" [disabled]
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
        - text: Help text attribute
      - group "Date picker":
        - combobox "Select a date"
        - text: Help text slot
    `);
});

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--valid&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
        - text: /Please enter the date in the format DD[\\d,.]+[bkmBKM]+\\.YYYY/
    `);
});

test('Disabled Weekends', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--disabled-weekends&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Disabled Days', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--disabled-days&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Range', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker--range&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date range picker":
        - combobox "Select date range": /\\d+\\.\\d+\\.\\d+ - \\d+\\.\\d+\\.\\d+/
    `);
});
