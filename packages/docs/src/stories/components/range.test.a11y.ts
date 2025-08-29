import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Label', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--label&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Double Knob', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--double-knob&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+ - \\d+\\)/
      - slider /Label \\(\\d+ - \\d+\\) Minimum \\(\\d+\\)/
      - slider /Label \\(\\d+ - \\d+\\) Maximum \\(\\d+\\)/
    `);
});

test('No Track-bar', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--no-trackbar&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
      - text: Help text
    `);
});

test('Ticks', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--ticks&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Label (3)
      - slider "Label (3)"
      - text: 0 1 2 3 4 5 6 7 8 9 Label (3)
      - slider "Label (3)"
      - text: 0 3 6 9
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Disabled \\(\\d+\\)/
      - slider /Disabled \\(\\d+\\)/ [disabled]
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/ [disabled]
      - text: Help text
      - tooltip "Visually disabled":
        - paragraph: Visually disabled
    `);
});

test('Custom Offset', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--custom-offset&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
      - text: /Label \\(-\\d+\\)/
      - slider /Label \\(-\\d+\\)/
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range-screenshots-sd-range--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row /sd-range::part\\(\\.\\.\\.\\)\\{outline: solid 2px red\\} form-control Label \\(\\d+\\)/':
            - 'cell "sd-range::part(...){outline: solid 2px red}"':
              - code: "sd-range::part(...){outline: solid 2px red}"
            - cell "form-control":
              - code: form-control
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /form-control-label Label \\(\\d+\\)/:
            - cell "form-control-label":
              - code: form-control-label
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /form-control-help-text Label \\(\\d+\\)/:
            - cell "form-control-help-text":
              - code: form-control-help-text
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /base Label \\(\\d+\\)/:
            - cell "base":
              - code: base
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /input-wrapper Label \\(\\d+\\)/:
            - cell "input-wrapper":
              - code: input-wrapper
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /track-wrapper Label \\(\\d+\\)/:
            - cell "track-wrapper":
              - code: track-wrapper
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /track-click-helper Label \\(\\d+\\)/:
            - cell "track-click-helper":
              - code: track-click-helper
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /track Label \\(\\d+\\)/:
            - cell "track":
              - code: track
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /active-track Label \\(\\d+\\)/:
            - cell "active-track":
              - code: active-track
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
          - row /scale-ticks Label \\(\\d+\\)/:
            - cell "scale-ticks":
              - code: scale-ticks
            - cell /Label \\(\\d+\\)/:
              - slider /Label \\(\\d+\\)/
    `);
});
