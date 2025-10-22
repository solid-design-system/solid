import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button-screenshots-sd-radio-button--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - radio "Label" [checked]:
      - img "Label"
  `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button-screenshots-sd-radio-button--size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - row "size lg Label":
          - cell "size":
            - code: size
          - cell "lg":
            - code: lg
          - cell "Label":
            - radio "Label" [checked]:
              - img "Label"
        - row "md Label":
          - cell "md":
            - code: md
          - cell "Label":
            - radio "Label" [checked]:
              - img "Label"
        - row "sm Label":
          - cell "sm":
            - code: sm
          - cell "Label":
            - radio "Label" [checked]:
              - img "Label"
  `);
});

test('Label × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button-screenshots-sd-radio-button--label-and-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - row "size lg Label Label":
          - cell "size":
            - code: size
          - cell "lg":
            - code: lg
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
        - row "md Label Label":
          - cell "md":
            - code: md
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
        - row "sm Label Label":
          - cell "sm":
            - code: sm
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
  `);
});

test('Label only', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button-screenshots-sd-radio-button--label-only&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "size lg Label":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Label":
              - radio "Label" [checked]
          - row "md Label":
            - cell "md":
              - code: md
            - cell "Label":
              - radio "Label" [checked]
          - row "sm Label":
            - cell "sm":
              - code: sm
            - cell "Label":
              - radio "Label" [checked]
    `);
});

test('Disabled × Checked', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button-screenshots-sd-radio-button--disabled-and-checked&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radio "Default"
      - radio "Disabled" [disabled]
      - radio "Checked" [checked]
      - radio "Disabled and checked" [checked] [disabled]
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-button-screenshots-sd-radio-button--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - 'row "sd-radio-button::part(...){outline: solid 2px red,} base Label Label"':
          - 'cell "sd-radio-button::part(...){outline: solid 2px red,}"':
            - code: "sd-radio-button::part(...){outline: solid 2px red,}"
          - cell "base":
            - code: base
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
        - row "button Label Label":
          - cell "button":
            - code: button
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
        - row "button--checked Label Label":
          - cell "button--checked":
            - code: button--checked
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
        - row "icon Label Label":
          - cell "icon":
            - code: icon
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
        - row "label Label Label":
          - cell "label":
            - code: label
          - cell "Label Label":
            - radio "Label Label" [checked]:
              - img "Label"
  `);
});
