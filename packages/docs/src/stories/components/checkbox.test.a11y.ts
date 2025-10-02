import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - checkbox "Default slot"
      - text: Default slot
    `);
});

test('Disabled × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--disabled-and-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell
            - cell "disabled":
              - code: disabled
          - row "false true":
            - cell
            - cell
            - cell "false":
              - code: "false"
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "size lg Default slot Default slot":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Default slot":
              - checkbox "Default slot"
            - cell "Default slot":
              - checkbox "Default slot" [disabled]
          - row "sm Default slot Default slot":
            - cell "sm":
              - code: sm
            - cell "Default slot":
              - checkbox "Default slot"
            - cell "Default slot":
              - checkbox "Default slot" [disabled]
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell "size":
              - code: size
          - row "lg sm":
            - cell
            - cell "lg":
              - code: lg
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "Y axis Default slot Default slot":
            - cell "Y axis"
            - cell "Default slot":
              - checkbox "Default slot"
            - cell "Default slot":
              - checkbox "Default slot"
    `);
});

test('Multiple lines', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--multiple-lines&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell "size":
              - code: size
          - row "lg sm":
            - cell
            - cell "lg":
              - code: lg
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "Y axis Default slot Second line Default slot Second line":
            - cell "Y axis"
            - cell "Default slot Second line":
              - checkbox "Default slot Second line"
            - cell "Default slot Second line":
              - checkbox "Default slot Second line"
    `);
});

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell
            - cell "size":
              - code: size
          - row "lg sm":
            - cell
            - cell
            - cell "lg":
              - code: lg
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "required true Default slot * Default slot *":
            - cell "required":
              - code: required
            - cell "true":
              - code: "true"
            - cell "Default slot *":
              - checkbox "Default slot *"
            - cell "Default slot *":
              - checkbox "Default slot *"
          - row "false Default slot Default slot":
            - cell "false":
              - code: "false"
            - cell "Default slot":
              - checkbox "Default slot"
            - cell "Default slot":
              - checkbox "Default slot"
    `);
});

test('Checked', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--checked&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell
            - cell "disabled":
              - code: disabled
          - row "false true":
            - cell
            - cell
            - cell "false":
              - code: "false"
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "size lg Default slot Default slot":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Default slot":
              - checkbox "Default slot" [checked]
            - cell "Default slot":
              - checkbox "Default slot" [checked] [disabled]
          - row "sm Default slot Default slot":
            - cell "sm":
              - code: sm
            - cell "Default slot":
              - checkbox "Default slot" [checked]
            - cell "Default slot":
              - checkbox "Default slot" [checked] [disabled]
    `);
});

test('Indeterminate', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--indeterminate&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell
            - cell "disabled":
              - code: disabled
          - row "false true":
            - cell
            - cell
            - cell "false":
              - code: "false"
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "size lg Default slot Default slot":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Default slot":
              - checkbox "Default slot" [checked=mixed]
            - cell "Default slot":
              - checkbox "Default slot" [checked=mixed] [disabled]
          - row "sm Default slot Default slot":
            - cell "sm":
              - code: sm
            - cell "Default slot":
              - checkbox "Default slot" [checked=mixed]
            - cell "Default slot":
              - checkbox "Default slot" [checked=mixed] [disabled]
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - checkbox "Default slot *"
      - text: Default slot * Please check this box if you want to proceed.
      - button "Submit"
    `);
});

test('Indeterminate × Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--indeterminate-invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - checkbox "Default slot *" [checked=mixed]
      - text: Default slot * Please check this box if you want to proceed.
      - button "Submit"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-checkbox::part(...){outline: solid 2px red} base Default slot"':
            - 'cell "sd-checkbox::part(...){outline: solid 2px red}"':
              - code: "sd-checkbox::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Default slot":
              - checkbox "Default slot"
          - row "control Default slot":
            - cell "control":
              - code: control
            - cell "Default slot":
              - checkbox "Default slot"
          - row "control--unchecked Default slot":
            - cell "control--unchecked":
              - code: control--unchecked
            - cell "Default slot":
              - checkbox "Default slot"
          - row "control--checked Default slot":
            - cell "control--checked":
              - code: control--checked
            - cell "Default slot":
              - checkbox "Default slot" [checked]
          - row "checked-icon Default slot":
            - cell "checked-icon":
              - code: checked-icon
            - cell "Default slot":
              - checkbox "Default slot" [checked]
          - row "control--indeterminate Default slot":
            - cell "control--indeterminate":
              - code: control--indeterminate
            - cell "Default slot":
              - checkbox "Default slot" [checked=mixed]
          - row "indeterminate-icon Default slot":
            - cell "indeterminate-icon":
              - code: indeterminate-icon
            - cell "Default slot":
              - checkbox "Default slot" [checked=mixed]
          - row "label Default slot":
            - cell "label":
              - code: label
            - cell "Default slot":
              - checkbox "Default slot"
    `);
});

test('setCustomValidity', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-screenshots-sd-checkbox--set-custom-validity&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - checkbox "Checkbox"
      - text: Checkbox This is an initial custom error.
      - button "Submit"
      - button "Set custom error"
      - button "Set success"
      - button "Reset"
    `);
});
