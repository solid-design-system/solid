import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option-screenshots-sd-option--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - option "Option"
    `);
});

test('Disabled x Checkbox', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option-screenshots-sd-option--disabled-checkbox&viewMode=story'
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
          - row "checkbox false Option Option":
            - cell "checkbox":
              - code: checkbox
            - cell "false":
              - code: "false"
            - cell "Option":
              - option "Option"
            - cell "Option":
              - option "Option" [disabled]
          - row "true Option Option":
            - cell "true":
              - code: "true"
            - cell "Option":
              - option "Option"
            - cell "Option":
              - option "Option" [disabled]
    `);
});

test('Size x Checkbox', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option-screenshots-sd-option--size-checkbox&viewMode=story'
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
          - row "lg md sm":
            - cell
            - cell
            - cell "lg":
              - code: lg
            - cell "md":
              - code: md
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "checkbox false Option Option Option":
            - cell "checkbox":
              - code: checkbox
            - cell "false":
              - code: "false"
            - cell "Option":
              - option "Option"
            - cell "Option":
              - option "Option"
            - cell "Option":
              - option "Option"
          - row "true Option Option Option":
            - cell "true":
              - code: "true"
            - cell "Option":
              - option "Option"
            - cell "Option":
              - option "Option"
            - cell "Option":
              - option "Option"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option-screenshots-sd-option--slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "default":
            - cell
            - cell "default":
              - code: default
        - rowgroup:
          - row "Y axis Slot":
            - cell "Y axis"
            - cell "Slot":
              - option "Slot"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "left":
            - cell
            - cell "left":
              - code: left
        - rowgroup:
          - row "Y axis Option":
            - cell "Y axis"
            - cell "Option":
              - option "Option"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "right":
            - cell
            - cell "right":
              - code: right
        - rowgroup:
          - row "Y axis Option":
            - cell "Y axis"
            - cell "Option":
              - option "Option"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-option-screenshots-sd-option--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-option::part(...){outline: solid 2px red} base Option"':
            - 'cell "sd-option::part(...){outline: solid 2px red}"':
              - code: "sd-option::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Option":
              - option "Option"
          - row "label Option":
            - cell "label":
              - code: label
            - cell "Option":
              - option "Option"
          - row "left Option":
            - cell "left":
              - code: left
            - cell "Option":
              - option "Option"
          - row "right Option":
            - cell "right":
              - code: right
            - cell "Option":
              - option "Option"
    `);
});
