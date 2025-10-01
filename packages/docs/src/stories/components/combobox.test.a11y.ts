import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Size x Multiple', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--size-multiple&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "size lg Label Option 1 Option 2 Option 1, Option 2 Open Open":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Label Option 1 Option 2 Option 1, Option 2 Open Open":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
          - row "md Label Option 1 Option 2 Option 1, Option 2 Open Open":
            - cell "md":
              - code: md
            - cell "Label Option 1 Option 2 Option 1, Option 2 Open Open":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
          - row "sm Label Option 1 Option 2 Option 1, Option 2 Open Open":
            - cell "sm":
              - code: sm
            - cell "Label Option 1 Option 2 Option 1, Option 2 Open Open":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
    `);
});

test('Disabled x Multiple', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--disabled-multiple&viewMode=story'
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
          - row "Y axis Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Clear entry Open Open Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Open Open":
            - cell "Y axis"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Clear entry Open Open":
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - img "Open":
                - img
              - button "Open"
            - cell "Label 4 Options selected Option 1, Option 2, Option 3, Option 4 Open Open":
              - button "Remove" [disabled]:
                - img "Remove":
                  - img
              - combobox "Label" [disabled]
              - img "Open":
                - img
              - button "Open"
    `);
});

test('Valid x Invalid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--valid-invalid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "value":
            - cell
            - cell "value":
              - code: value
          - row "option-1 option-2":
            - cell
            - cell "option-1 option-2":
              - code: option-1 option-2
            - cell:
              - code
        - rowgroup:
          - row "Y axis Label * Option 1 Option 2 Option 1, Option 2 Open Open Label * Open Open Please fill out this field.":
            - cell "Y axis"
            - cell "Label * Option 1 Option 2 Option 1, Option 2 Open Open":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label *"
              - img "Open":
                - img
              - button "Open"
            - cell "Label * Open Open Please fill out this field.":
              - combobox "Label *"
              - img "Open":
                - img
              - button "Open"
    `);
});

test('Border visibility', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--border-visibility&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--slots&viewMode=story'
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
          - row "Y axis Label Open Open Help-text":
            - cell "Y axis"
            - cell "Label Open Open Help-text":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
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
          - row "Y axis Label Open Open Help-text":
            - cell "Y axis"
            - cell "Label Open Open Help-text":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
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
          - row "Y axis Label Open Open Help-text":
            - cell "Y axis"
            - cell "Label Open Open Help-text":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
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
          - row "Y axis Label Open Open Help-text":
            - cell "Y axis"
            - cell "Label Open Open Help-text":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
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
          - row "Y axis Label Open Open Help-text":
            - cell "Y axis"
            - cell "Label Open Open Help-text":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
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
          - row "Y axis Label Open Help-text":
            - cell "Y axis"
            - cell "Label Open Help-text":
              - combobox "Label"
              - button "Open"
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
          - row "Y axis Label Open Open":
            - cell "Y axis"
            - cell "Label Open Open":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-combobox::part(...){outline: solid 2px red} form-control Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text"':
            - 'cell "sd-combobox::part(...){outline: solid 2px red}"':
              - code: "sd-combobox::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "form-control-label Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "form-control-label":
              - code: form-control-label
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "form-control-input Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "form-control-input":
              - code: form-control-input
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "form-control-help-text Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "form-control-help-text":
              - code: form-control-help-text
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "combobox Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "combobox":
              - code: combobox
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "display-input Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "display-input":
              - code: display-input
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "listbox Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "listbox":
              - code: listbox
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "tags Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "tags":
              - code: tags
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "tag Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "tag":
              - code: tag
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "tag__base Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "tag__base":
              - code: tag__base
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "tag__content Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "tag__content":
              - code: tag__content
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "tag__removable-indicator Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "tag__removable-indicator":
              - code: tag__removable-indicator
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "clear-button Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "clear-button":
              - code: clear-button
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "expand-icon Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "expand-icon":
              - code: expand-icon
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "left Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "left":
              - code: left
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
          - row "right Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
            - cell "right":
              - code: right
            - cell "Label Option 1 Option 2 Option 1, Option 2 Clear entry Open Help-text":
              - button "Remove":
                - img "Remove":
                  - img
              - button "Remove":
                - img "Remove":
                  - img
              - combobox "Label"
              - button "Clear entry"
              - button "Open"
    `);
});

test('Focus', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--focus&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Style on valid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--style-on-valid&viewMode=story'
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
          - row "Y axis Label Option 1 Open Open Label Option 1 Open Open":
            - cell "Y axis"
            - cell "Label Option 1 Open Open":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
            - cell "Label Option 1 Open Open":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
    `);
});

test('Tags', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--tags&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label Option 1
      - button "Remove":
        - img "Remove":
          - img
      - text: Option 2
      - button "Remove":
        - img "Remove":
          - img
      - combobox "Label"
      - text: Option 1, Option 2
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Simple suggests', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--simple-suggests&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Preferred color
      - combobox "Preferred color" [expanded]
      - img "Open":
        - img
      - button "Open"
      - listbox "Preferred color" [expanded]:
        - option "Green"
        - option "Grey"
        - option "Light Green"
    `);
});

test('Not found message', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--not-found-message&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Preferred Color
      - combobox "Preferred Color" [expanded]
      - img "Open":
        - img
      - button "Open"
      - listbox "Preferred Color" [expanded]
    `);
});

test('Highlight Query', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--highlight-query&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Preferred color
      - combobox "Preferred color" [expanded]
      - img "Open":
        - img
      - button "Open"
      - listbox "Preferred color" [expanded]:
        - option "Green":
          - mark: Gre
        - option "Grey":
          - mark: Gre
        - option "Light Green":
          - mark: Gre
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Default
      - combobox "Default"
      - img "Open":
        - img
      - button "Open"
      - text: Multiple
      - combobox "Multiple"
      - img "Open":
        - img
      - button "Open"
      - text: Multiple w/ tags
      - combobox "Multiple w/ tags"
      - img "Open":
        - img
      - button "Open"
    `);
});

test('Sample: Grouping options and sizes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--sample-grouping-options&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "size lg Label Open Open":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Label Open Open":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
          - row "md Label Open Open":
            - cell "md":
              - code: md
            - cell "Label Open Open":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
          - row "sm Label Open Open":
            - cell "sm":
              - code: sm
            - cell "Label Open Open":
              - combobox "Label"
              - img "Open":
                - img
              - button "Open"
    `);
});

test('Sample: Form', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--sample-form&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Required *
      - combobox "Required *"
      - img "Open":
        - img
      - button "Open"
      - text: Required multiple *
      - combobox "Required multiple *"
      - img "Open":
        - img
      - button "Open"
      - text: Required multiple w/ tags *
      - combobox "Required multiple w/ tags *"
      - img "Open":
        - img
      - button "Open"
      - button "Submit"
    `);
});

test('Sample: Solid form', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--solid-form&viewMode=story'
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
      - img "Open":
        - img
      - button "Open"
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

test('Set custom validity', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-combobox-screenshots-sd-combobox--set-custom-validity&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - combobox "Label"
      - img "Open":
        - img
      - button "Open"
      - text: This is an initial custom error.
      - button "Submit"
      - button "Set custom error"
      - button "Set success"
      - button "Reset"
    `);
});
