import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-optgroup-screenshots-sd-optgroup--default&viewMode=story'
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

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-optgroup-screenshots-sd-optgroup--disabled&viewMode=story'
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
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-optgroup-screenshots-sd-optgroup--slots&viewMode=story'
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
          - row "Y axis Section 1":
            - cell "Y axis"
            - cell "Section 1":
              - group "Section 1":
                - separator:
                  - separator
                - listbox "Option Group":
                  - option "Option 1"
                  - option "Option 2"
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
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - group "Label":
                - separator:
                  - separator
                - listbox "Option Group":
                  - option "Option 1"
                  - option "Option 2"
                  - option "Option 3"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-optgroup-screenshots-sd-optgroup--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-optgroup::part(...){outline: solid 2px red} base Section 1"':
            - 'cell "sd-optgroup::part(...){outline: solid 2px red}"':
              - code: "sd-optgroup::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Section 1":
              - group "Section 1":
                - separator:
                  - separator
                - listbox "Option Group":
                  - option "Option 1"
                  - option "Option 2"
                  - option "Option 3"
          - row "label-container Section 1":
            - cell "label-container":
              - code: label-container
            - cell "Section 1":
              - group "Section 1":
                - separator:
                  - separator
                - listbox "Option Group":
                  - option "Option 1"
                  - option "Option 2"
                  - option "Option 3"
          - row "divider Section 1":
            - cell "divider":
              - code: divider
            - cell "Section 1":
              - group "Section 1":
                - separator:
                  - separator
                - listbox "Option Group":
                  - option "Option 1"
                  - option "Option 2"
                  - option "Option 3"
          - row "options Section 1":
            - cell "options":
              - code: options
            - cell "Section 1":
              - group "Section 1":
                - separator:
                  - separator
                - listbox "Option Group":
                  - option "Option 1"
                  - option "Option 2"
                  - option "Option 3"
    `);
});
