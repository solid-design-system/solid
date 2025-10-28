import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": value
      - text: Help-text
    `);
});

test('Placeholders', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--placeholders&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
      - text: Help-text
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label" [disabled]: value
      - text: Help-text
    `);
});

test('Readonly', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--readonly&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": value
      - text: Help-text
    `);
});

test('Sizes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--sizes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "size lg Label value Help-text":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "md Label value Help-text":
            - cell "md":
              - code: md
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "sm Label value Help-text":
            - cell "sm":
              - code: sm
            - cell "Label value Help-text":
              - textbox "Label": value
    `);
});

test('Style on valid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--style-on-valid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "style-on-valid true Label value Help-text":
            - cell "style-on-valid":
              - code: style-on-valid
            - cell "true":
              - code: "true"
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "false Label value Help-text":
            - cell "false":
              - code: "false"
            - cell "Label value Help-text":
              - textbox "Label": value
    `);
});

test('Validation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--validation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Required *
      - textbox "Required *"
      - text: textarea must be filled Min Length *
      - textbox "Min Length *"
      - text: value must meet minlength Max Length *
      - textbox "Max Length *"
      - text: value cannot exceed maxlength
      - button "Submit"
    `);
});

test('setCustomValidity', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--set-custom-validity&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Input
      - textbox "Input"
      - text: This is an initial custom error.
      - button "Submit"
      - button "Set custom error"
      - button "Set success"
      - button "Reset"
    `);
});

test('Scrollable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--scrollable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amete
    `);
});

test('Responsive Height', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--responsive-height&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": value
      - text: Help-text
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--slots&viewMode=story'
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
          - row "label":
            - cell
            - cell "label":
              - code: label
        - rowgroup:
          - row "Y axis Label value Help-text":
            - cell "Y axis"
            - cell "Label value Help-text":
              - textbox "Label": value
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
          - row "Y axis Label value":
            - cell "Y axis"
            - cell "Label value":
              - textbox "Label": value
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-textarea::part(...){outline: solid 2px red} form-control Label value Help-text"':
            - 'cell "sd-textarea::part(...){outline: solid 2px red}"':
              - code: "sd-textarea::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "form-control-label Label value Help-text":
            - cell "form-control-label":
              - code: form-control-label
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "form-control-input Label value Help-text":
            - cell "form-control-input":
              - code: form-control-input
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "form-control-help-text Label value Help-text":
            - cell "form-control-help-text":
              - code: form-control-help-text
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "base Label value Help-text":
            - cell "base":
              - code: base
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "border Label value Help-text":
            - cell "border":
              - code: border
            - cell "Label value Help-text":
              - textbox "Label": value
          - row "textarea Label value Help-text":
            - cell "textarea":
              - code: textarea
            - cell "Label value Help-text":
              - textbox "Label": value
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-textarea-screenshots-sd-textarea--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label": value
      - text: Help-text
    `);
});
