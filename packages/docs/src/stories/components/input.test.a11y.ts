import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Label', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--labels&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Nickname
      - textbox "Nickname"
      - text: How would you like to be called?
    `);
});

test('Placeholders', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--placeholders&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Clearable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--clearable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});

test('Toggle password', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--toggle-password&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Password
      - textbox "Password"
      - button "Show password"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--disabled&viewMode=story'
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
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--readonly&viewMode=story'
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
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--sizes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "size lg Label value Clear entry Help-text":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Label value Clear entry Help-text":
              - textbox "Label": value
              - button "Clear entry"
          - row "md Label value Clear entry Help-text":
            - cell "md":
              - code: md
            - cell "Label value Clear entry Help-text":
              - textbox "Label": value
              - button "Clear entry"
          - row "sm Label value Clear entry Help-text":
            - cell "sm":
              - code: sm
            - cell "Label value Clear entry Help-text":
              - textbox "Label": value
              - button "Clear entry"
    `);
});

test('Style on valid', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--style-on-valid&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "style-on-valid true Label valuee Clear entry Help-text":
            - cell "style-on-valid":
              - code: style-on-valid
            - cell "true":
              - code: "true"
            - cell "Label valuee Clear entry Help-text":
              - textbox "Label": valuee
              - button "Clear entry"
          - row "false Label valuee Clear entry Help-text":
            - cell "false":
              - code: "false"
            - cell "Label valuee Clear entry Help-text":
              - textbox "Label": valuee
              - button "Clear entry"
    `);
});

test('Types', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--types&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Date
      - textbox "Date"
      - text: Value is restricted to date format Date Time
      - textbox "Date Time"
      - text: Value is restricted to datetime format Email
      - textbox "Email"
      - text: Validate with email address format Number
      - spinbutton "Number"
      - text: Value is restricted to numbers Password
      - textbox "Password"
      - button "Show password"
      - text: Use password display format Search
      - searchbox "Search"
      - button "Search":
        - img "Search":
          - img
      - text: Use search format Tel
      - textbox "Tel"
      - text: Shows optimized keyboard on touch devices or similar Text
      - textbox "Text"
      - text: Default type Time
      - textbox "Time"
      - text: Value is restricted to time format URL
      - textbox "URL"
      - text: Validate with url format Spin Buttons
      - spinbutton "Spin Buttons"
    `);
});

test('Validation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--validation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Indicate Valid State
      - textbox "Indicate Valid State"
      - text: Indicate on valid Required *
      - textbox "Required *"
      - text: Input must be filled Pattern *
      - textbox "Pattern *"
      - text: Input must match pattern Min Length *
      - textbox "Min Length *"
      - text: Value must meet minlength Max Length *
      - textbox "Max Length *"
      - text: Value cannot exceed maxlength Min *
      - spinbutton "Min *"
      - text: Numeric value must be greater than min Max *
      - spinbutton "Max *"
      - text: Numeric value must not exceed max Email *
      - textbox "Email *"
      - text: Value must match email address format Date *
      - textbox "Date *"
      - text: Value is restricted to date format Date time *
      - textbox "Date time *"
      - text: Value is restricted to datetime format Time *
      - textbox "Time *"
      - text: Value is restricted to time format URL *
      - textbox "URL *"
      - text: Value must match url format
      - button "Submit"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--slots&viewMode=story'
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
          - row "Y axis Label Value Clear entry Help-text":
            - cell "Y axis"
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
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
          - row "Y axis Label Value Clear entry Help-text":
            - cell "Y axis"
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
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
          - row "Y axis Label Value Clear entry Help-text":
            - cell "Y axis"
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
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
          - row "Y axis Label Value Clear entry Help-text":
            - cell "Y axis"
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
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
          - row "Y axis Label Value Clear entry":
            - cell "Y axis"
            - cell "Label Value Clear entry":
              - textbox "Label": Value
              - button "Clear entry"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-input::part(...){outline: solid 2px red} form-control Label Value Clear entry Help-text"':
            - 'cell "sd-input::part(...){outline: solid 2px red}"':
              - code: "sd-input::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "form-control-label Label Value Clear entry Help-text":
            - cell "form-control-label":
              - code: form-control-label
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "form-control-input Label Value Clear entry Help-text":
            - cell "form-control-input":
              - code: form-control-input
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "form-control-help-text Label Value Clear entry Help-text":
            - cell "form-control-help-text":
              - code: form-control-help-text
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "base Label Value Clear entry Help-text":
            - cell "base":
              - code: base
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "border Label Value Clear entry Help-text":
            - cell "border":
              - code: border
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "input Label Value Clear entry Help-text":
            - cell "input":
              - code: input
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "left Label Value Clear entry Help-text":
            - cell "left":
              - code: left
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "clear-button Label Value Clear entry Help-text":
            - cell "clear-button":
              - code: clear-button
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
          - row "right Label Value Clear entry Help-text":
            - cell "right":
              - code: right
            - cell "Label Value Clear entry Help-text":
              - textbox "Label": Value
              - button "Clear entry"
    `);
});

test('setCustomValidity', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--set-custom-validity&viewMode=story'
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

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-input-screenshots-sd-input--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label
      - textbox "Label"
    `);
});
