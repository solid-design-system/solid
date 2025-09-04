import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Label', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--label&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Double Knob', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--double-knob&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+ - \\d+\\)/
      - slider /Label \\(\\d+ - \\d+\\) Minimum \\(\\d+\\)/
      - slider /Label \\(\\d+ - \\d+\\) Maximum \\(\\d+\\)/
    `);
});

test('Track-bar', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--track-bar&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Ticks', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--ticks&viewMode=story');
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

test('Tooltip', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--tooltip&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Help Text', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--help-text&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
      - text: Help text
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Disabled \\(\\d+\\)/
      - slider /Disabled \\(\\d+\\)/ [disabled]
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/ [disabled]
      - text: Help text
    `);
});

test('Min, Max and Step', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--min-max-step&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Label \\(\\d+\\)/
      - slider /Label \\(\\d+\\)/
    `);
});

test('Custom Offset', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-range--custom-offset&viewMode=story'
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
