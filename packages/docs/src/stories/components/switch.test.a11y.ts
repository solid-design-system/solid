import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Default slot"
      - text: Default slot
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell "disabled":
              - code: disabled
          - row "false true":
            - cell
            - cell "false":
              - code: "false"
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "Y axis Default slot Default slot":
            - cell "Y axis"
            - cell "Default slot":
              - switch "Default slot"
            - cell "Default slot":
              - switch "Default slot" [disabled]
    `);
});

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "required true Default slot *":
            - cell "required":
              - code: required
            - cell "true":
              - code: "true"
            - cell "Default slot *":
              - switch "Default slot *"
          - row "false Default slot":
            - cell "false":
              - code: "false"
            - cell "Default slot":
              - switch "Default slot"
    `);
});

test('Checked', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--checked&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell "disabled":
              - code: disabled
          - row "false true":
            - cell
            - cell "false":
              - code: "false"
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "Y axis Default slot Default slot":
            - cell "Y axis"
            - cell "Default slot":
              - switch "Default slot" [checked]
            - cell "Default slot":
              - switch "Default slot" [checked] [disabled]
    `);
});

test('Checked and Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--checked-and-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - switch "Default slot" [checked] [disabled]
      - text: Default slot
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "checked":
            - cell
            - cell "checked":
              - code: checked
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Default slot * Error text Default slot * Error text":
            - cell "Y axis"
            - cell "Default slot * Error text":
              - switch "Default slot *"
            - cell "Default slot * Error text":
              - switch "Default slot *" [checked]
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-switch::part(...){outline: solid 2px red} base Default slot"':
            - 'cell "sd-switch::part(...){outline: solid 2px red}"':
              - code: "sd-switch::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Default slot":
              - switch "Default slot"
          - row "control Default slot":
            - cell "control":
              - code: control
            - cell "Default slot":
              - switch "Default slot"
          - row "control--unchecked Default slot":
            - cell "control--unchecked":
              - code: control--unchecked
            - cell "Default slot":
              - switch "Default slot"
          - row "control--checked Default slot":
            - cell "control--checked":
              - code: control--checked
            - cell "Default slot":
              - switch "Default slot" [checked]
          - row "thumb Default slot":
            - cell "thumb":
              - code: thumb
            - cell "Default slot":
              - switch "Default slot"
          - row "label Default slot":
            - cell "label":
              - code: label
            - cell "Default slot":
              - switch "Default slot"
    `);
});

test('slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-switch-screenshots-sd-switch--slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "slot=... default Default slot":
            - cell "slot=...":
              - code: slot=...
            - cell "default":
              - code: default
            - cell "Default slot":
              - switch "Default slot"
          - row "tooltip Label Tooltip slot":
            - cell "tooltip":
              - code: tooltip
            - cell "Label Tooltip slot":
              - switch "Label"
    `);
});
