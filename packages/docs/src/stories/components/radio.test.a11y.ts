import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-screenshots-sd-radio--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radio "Default Slot"
    `);
});

test('Disabled × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-screenshots-sd-radio--disabled-and-size&viewMode=story'
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
          - row "size lg Default Slot Default Slot":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Default Slot":
              - radio "Default Slot"
            - cell "Default Slot":
              - radio "Default Slot" [disabled]
          - row "sm Default Slot Default Slot":
            - cell "sm":
              - code: sm
            - cell "Default Slot":
              - radio "Default Slot"
            - cell "Default Slot":
              - radio "Default Slot" [disabled]
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-screenshots-sd-radio--size&viewMode=story'
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
          - row "lg md sm":
            - cell
            - cell "lg":
              - code: lg
            - cell "md":
              - code: md
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "Y axis Default Slot Default Slot Default Slot":
            - cell "Y axis"
            - cell "Default Slot":
              - radio "Default Slot"
            - cell "Default Slot":
              - radio "Default Slot"
            - cell "Default Slot":
              - radio "Default Slot"
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-screenshots-sd-radio--invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "size lg Default Slot":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Default Slot":
              - radio "Default Slot"
          - row "md Default Slot":
            - cell "md":
              - code: md
            - cell "Default Slot":
              - radio "Default Slot"
          - row "sm Default Slot":
            - cell "sm":
              - code: sm
            - cell "Default Slot":
              - radio "Default Slot"
      - table:
        - rowgroup
        - rowgroup:
          - row "disabled true Default Slot":
            - cell "disabled":
              - code: disabled
            - cell "true":
              - code: "true"
            - cell "Default Slot":
              - radio "Default Slot" [disabled]
          - row "false Default Slot":
            - cell "false":
              - code: "false"
            - cell "Default Slot":
              - radio "Default Slot"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-screenshots-sd-radio--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-radio::part(...){outline: solid 2px red} base"':
            - 'cell "sd-radio::part(...){outline: solid 2px red}"':
              - code: "sd-radio::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell:
              - radiogroup:
                - radio "Default Slot" [checked]
          - row "control--unchecked":
            - cell "control--unchecked":
              - code: control--unchecked
            - cell:
              - radiogroup:
                - radio "Default Slot"
          - row "control--checked":
            - cell "control--checked":
              - code: control--checked
            - cell:
              - radiogroup:
                - radio "Default Slot" [checked]
          - row "checked":
            - cell "checked":
              - code: checked
            - cell:
              - radiogroup:
                - radio "Default Slot" [checked]
          - row "label":
            - cell "label":
              - code: label
            - cell:
              - radiogroup:
                - radio "Default Slot" [checked]
    `);
});
