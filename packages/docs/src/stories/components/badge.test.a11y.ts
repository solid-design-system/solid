import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-badge-screenshots-sd-badge--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: "8"
    `);
});

test('Variant × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-badge-screenshots-sd-badge--variant-and-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "blue green red":
            - cell
            - cell
            - cell "blue":
              - code: blue
            - cell "green":
              - code: green
            - cell "red":
              - code: red
        - rowgroup:
          - row "size lg 8 8 8":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "8"
            - cell "8"
            - cell "8"
          - row "md 8 8 8":
            - cell "md":
              - code: md
            - cell "8"
            - cell "8"
            - cell "8"
          - row "sm 8 8 8":
            - cell "sm":
              - code: sm
            - cell "8"
            - cell "8"
            - cell "8"
    `);
});

test('Variant × Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-badge-screenshots-sd-badge--variant-and-inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "blue green red":
            - cell
            - cell
            - cell "blue":
              - code: blue
            - cell "green":
              - code: green
            - cell "red":
              - code: red
        - rowgroup:
          - row "inverted false 8 8 8":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "8"
            - cell "8"
            - cell "8"
          - row "true 8 8 8":
            - cell "true":
              - code: "true"
            - cell "8"
            - cell "8"
            - cell "8"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-badge-screenshots-sd-badge--slots&viewMode=story'
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
          - row "Y axis 8":
            - cell "Y axis"
            - cell "8"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-badge-screenshots-sd-badge--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-badge::part(...){outline: solid 1.5px red} base 8"':
            - 'cell "sd-badge::part(...){outline: solid 1.5px red}"':
              - code: "sd-badge::part(...){outline: solid 1.5px red}"
            - cell "base":
              - code: base
            - cell "8"
          - row "content 8":
            - cell "content":
              - code: content
            - cell "8"
    `);
});
