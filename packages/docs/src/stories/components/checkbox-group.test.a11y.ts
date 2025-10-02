import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group-screenshots-sd-checkbox-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group-screenshots-sd-checkbox-group--orientation&viewMode=story'
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
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
          - row "md Group label Group label":
            - cell "md":
              - code: md
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
          - row "sm Group label Group label":
            - cell "sm":
              - code: sm
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
    `);
});

test('Disabled x Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group-screenshots-sd-checkbox-group--disabled&viewMode=story'
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
              - group "Group label":
                - checkbox "Option 1" [disabled]
                - checkbox "Option 2"
                - checkbox "Option 3"
            - cell "Group label":
              - group "Group label":
                - checkbox "Option 1"
                - checkbox "Option 2"
                - checkbox "Option 3"
          - row "md Group label Group label":
            - cell "md":
              - code: md
            - cell "Group label":
              - group "Group label":
                - checkbox "Option 1" [disabled]
                - checkbox "Option 2"
                - checkbox "Option 3"
            - cell "Group label":
              - group "Group label":
                - checkbox "Option 1"
                - checkbox "Option 2"
                - checkbox "Option 3"
          - row "sm Group label Group label":
            - cell "sm":
              - code: sm
            - cell "Group label":
              - group "Group label":
                - checkbox "Option 1" [disabled]
                - checkbox "Option 2"
                - checkbox "Option 3"
            - cell "Group label":
              - group "Group label":
                - checkbox "Option 1"
                - checkbox "Option 2"
                - checkbox "Option 3"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group-screenshots-sd-checkbox-group--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-checkbox-group::part(...){outline: solid 2px red} form-control Group label"':
            - 'cell "sd-checkbox-group::part(...){outline: solid 2px red}"':
              - code: "sd-checkbox-group::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
          - row "form-control-label Group label":
            - cell "form-control-label":
              - code: form-control-label
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
          - row "form-control-input Group label":
            - cell "form-control-input":
              - code: form-control-input
            - cell "Group label":
              - group "Group label":
                - checkbox "Checkbox 1"
                - checkbox "Checkbox 2"
                - checkbox "Checkbox 3"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-checkbox-group-screenshots-sd-checkbox-group--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Group label":
        - checkbox "Checkbox 1"
        - checkbox "Checkbox 2"
        - checkbox "Checkbox 3"
    `);
});
