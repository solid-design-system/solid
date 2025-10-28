import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "orientation":
            - cell
            - cell
            - cell "orientation":
              - code: orientation
          - row "horizontal vertical":
            - cell
            - cell
            - cell "horizontal":
              - code: horizontal
            - cell "vertical":
              - code: vertical
        - rowgroup:
          - row "size lg Group label Group label":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
          - row "md Group label Group label":
            - cell "md":
              - code: md
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
          - row "sm Group label Group label":
            - cell "sm":
              - code: sm
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
    `);
});

test('Disabled x Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--disabled&viewMode=story'
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
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "size lg Group label Group label":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Option 1" [checked] [disabled]
                - radio "Option 2"
                - radio "Option 3"
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Option 1" [checked]
                - radio "Option 2"
                - radio "Option 3"
          - row "md Group label Group label":
            - cell "md":
              - code: md
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Option 1" [checked] [disabled]
                - radio "Option 2"
                - radio "Option 3"
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Option 1" [checked]
                - radio "Option 2"
                - radio "Option 3"
          - row "sm Group label Group label":
            - cell "sm":
              - code: sm
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Option 1" [checked] [disabled]
                - radio "Option 2"
                - radio "Option 3"
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Option 1" [checked]
                - radio "Option 2"
                - radio "Option 3"
    `);
});

test('Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label *":
        - textbox "Group label *"
        - radio "Radio 1"
        - radio "Radio 2"
        - radio "Radio 3"
      - text: Please fill out this field.
      - button "Submit"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-radio-group::part(...){outline: solid 2px red} form-control Group label"':
            - 'cell "sd-radio-group::part(...){outline: solid 2px red}"':
              - code: "sd-radio-group::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
          - row "form-control-label Group label":
            - cell "form-control-label":
              - code: form-control-label
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
          - row "form-control-input Group label":
            - cell "form-control-input":
              - code: form-control-input
            - cell "Group label":
              - radiogroup "Group label":
                - radio "Radio 1" [checked]
                - radio "Radio 2"
                - radio "Radio 3"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup "Group label":
        - radio "Radio 1" [checked]
        - radio "Radio 2"
        - radio "Radio 3"
    `);
});

test('Radio Buttons', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--radio-buttons&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - radiogroup:
        - radio "Label" [checked]
        - radio "Label"
        - radio "Label"
    `);
});

test('Mouseless with Radio Buttons', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-radio-group-screenshots-sd-radio-group--mouseless-with-radio-buttons&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - radiogroup:
      - radio "Label":
        - img "Label"
      - radio "Label" [checked]:
        - img "Label"
      - radio "Label":
        - img "Label"
  `);
});
