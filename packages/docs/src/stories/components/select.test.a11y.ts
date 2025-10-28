import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Size x Multiple', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--size-multiple&viewMode=story'
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
          - row "useTags false Label Options selected (4) Option 1, Option 2, Option 3, Option 4 Label Options selected (4) Option 1, Option 2, Option 3, Option 4 Label Options selected (4) Option 1, Option 2, Option 3, Option 4":
            - cell "useTags":
              - code: useTags
            - cell "false":
              - code: "false"
            - cell "Label Options selected (4) Option 1, Option 2, Option 3, Option 4":
              - combobox "Label": Options selected (4)
              - button "Label"
            - cell "Label Options selected (4) Option 1, Option 2, Option 3, Option 4":
              - combobox "Label": Options selected (4)
              - button "Label"
            - cell "Label Options selected (4) Option 1, Option 2, Option 3, Option 4":
              - combobox "Label": Options selected (4)
              - button "Label"
          - row "true Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Label 4 Options selected Option 1, Option 2, Option 3, Option 4":
            - cell "true":
              - code: "true"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Label"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Label"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Label"
    `);
});

test('Disabled x Multiple', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--disabled-multiple&viewMode=story'
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
          - row "useTags false Label Options selected (4) Option 1, Option 2, Option 3, Option 4 Clear entry Label Options selected (4) Option 1, Option 2, Option 3, Option 4":
            - cell "useTags":
              - code: useTags
            - cell "false":
              - code: "false"
            - cell "Label Options selected (4) Option 1, Option 2, Option 3, Option 4 Clear entry":
              - combobox "Label": Options selected (4)
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (4) Option 1, Option 2, Option 3, Option 4":
              - combobox "Label" [disabled]: Options selected (4)
              - button "Label"
          - row "true Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Clear entry Label 4 Options selected Option 1, Option 2, Option 3, Option 4":
            - cell "true":
              - code: "true"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Clear entry":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4":
              - button "Remove" [disabled]:
                - img "Remove":
                  - img
              - button "Label"
    `);
});

test('Valid x Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--valid-invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "value":
            - cell
            - cell
            - cell "value":
              - code: value
          - row "option-1 option-2":
            - cell
            - cell
            - cell "option-1 option-2":
              - code: option-1 option-2
            - cell:
              - code
        - rowgroup:
          - row "useTags false Label * Options selected (2) Option 1, Option 2 Label * Please fill out this field.":
            - cell "useTags":
              - code: useTags
            - cell "false":
              - code: "false"
            - cell "Label * Options selected (2) Option 1, Option 2":
              - combobox "Label *": Options selected (2)
              - button "Label *"
            - cell "Label * Please fill out this field.":
              - combobox "Label *"
              - button "Label *"
          - row "true Label * Option 1 Option 2 Option 1, Option 2 Label * Please fill out this field.":
            - cell "true":
              - code: "true"
            - cell "Label * Option 1 Option 2 Option 1, Option 2":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Label *"
            - cell "Label * Please fill out this field.":
              - combobox "Label *"
              - button "Label *"
    `);
});

test('Border visibility', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--border-visibility&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--slots&viewMode=story'
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
          - row "Y axis Label Help-text":
            - cell "Y axis"
            - cell "Label Help-text":
              - combobox "Label"
              - button "Label"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "label":
            - cell
            - cell "label":
              - code: label
        - rowgroup:
          - row "Y axis Label Help-text":
            - cell "Y axis"
            - cell "Label Help-text":
              - combobox "Label"
              - button "Label"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "clear-icon":
            - cell
            - cell "clear-icon":
              - code: clear-icon
        - rowgroup:
          - row "Y axis Label Help-text":
            - cell "Y axis"
            - cell "Label Help-text":
              - combobox "Label"
              - button "Label"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "expand-icon":
            - cell
            - cell "expand-icon":
              - code: expand-icon
        - rowgroup:
          - row "Y axis Label Help-text":
            - cell "Y axis"
            - cell "Label Help-text":
              - combobox "Label"
              - button "Label"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "help-text":
            - cell
            - cell "help-text":
              - code: help-text
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - combobox "Label"
              - button "Label"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "useTags":
            - cell
            - cell
            - cell "useTags":
              - code: useTags
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - 'row "sd-select::part(...){outline: solid 2px red} form-control Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text"':
            - 'cell "sd-select::part(...){outline: solid 2px red}"':
              - code: "sd-select::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "form-control-label Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "form-control-label":
              - code: form-control-label
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "form-control-input Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "form-control-input":
              - code: form-control-input
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "form-control-help-text Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "form-control-help-text":
              - code: form-control-help-text
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "combobox Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "combobox":
              - code: combobox
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "display-input Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "display-input":
              - code: display-input
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "listbox Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "listbox":
              - code: listbox
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "tags Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "tags":
              - code: tags
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "tag Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "tag":
              - code: tag
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "tag__base Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "tag__base":
              - code: tag__base
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "tag__content Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "tag__content":
              - code: tag__content
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "tag__removable-indicator Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "tag__removable-indicator":
              - code: tag__removable-indicator
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "clear-button Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "clear-button":
              - code: clear-button
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
          - row "expand-icon Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
            - cell "expand-icon":
              - code: expand-icon
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - button "Clear entry"
              - button "Label"
            - cell "Label Options selected (2) Option 1, Option 2 Clear entry Help-text":
              - combobox "Label": Options selected (2)
              - button "Clear entry"
              - button "Label"
    `);
});

test('Style on valid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--style-on-valid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "style-on-valid":
            - cell
            - cell "style-on-valid":
              - code: style-on-valid
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Label Option 1 Option 1 Label Option 1 Option 1":
            - cell "Y axis"
            - cell "Label Option 1 Option 1":
              - combobox "Label": Option 1
              - button "Label"
            - cell "Label Option 1 Option 1":
              - combobox "Label": Option 1
              - button "Label"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Default
      - combobox "Default"
      - button "Default"
      - text: Multiple
      - combobox "Multiple"
      - button "Multiple"
      - text: Multiple w/ tags
      - combobox "Multiple w/ tags"
      - button "Multiple w/ tags"
    `);
});

test('Sample: Grouping options', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--sample-grouping-options&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
    `);
});

test('Sample: Form', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--sample-form&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Required *
      - combobox "Required *"
      - button "Required *"
      - text: Required multiple *
      - combobox "Required multiple *"
      - button "Required multiple *"
      - text: Required multiple w/ tags *
      - combobox "Required multiple w/ tags *"
      - button "Required multiple w/ tags *"
      - button "Submit"
    `);
});

test('setCustomValidity', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--set-custom-validity&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - button "Label"
      - text: This is an initial custom error.
      - button "Submit"
      - button "Set custom error"
      - button "Set success"
      - button "Reset"
    `);
});

test('Sample: Solid form', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-select-screenshots-sd-select--solid-form&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Solid Form" [level=1]
      - checkbox "Field 1 *"
      - text: Field 1 * Field 2 *
      - textbox "Field 2 *"
      - text: Field 3 *
      - combobox "Field 3 *"
      - button "Field 3 *"
      - radiogroup "Field 4 *":
        - radio "Option 1"
        - radio "Option 2"
        - radio "Option 3"
      - radiogroup "Field 5 *":
        - radio "Option 1" [checked]
        - radio "Option 2"
        - radio "Option 3"
      - switch "Field 6 *"
      - text: Field 6 * Field 7 *
      - textbox "Field 7 *"
      - button "Submit"
      - button "Reset"
    `);
});
