import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-divider-screenshots-sd-divider--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - separator:
        - separator
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-divider-screenshots-sd-divider--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "orientation horizontal":
            - cell "orientation":
              - code: orientation
            - cell "horizontal":
              - code: horizontal
            - cell:
              - separator:
                - separator
          - row "vertical":
            - cell "vertical":
              - code: vertical
            - cell:
              - separator:
                - separator
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-divider-screenshots-sd-divider--inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "inverted true":
            - cell "inverted":
              - code: inverted
            - cell "true":
              - code: "true"
            - cell:
              - separator:
                - separator
          - row "false":
            - cell "false":
              - code: "false"
            - cell:
              - separator:
                - separator
    `);
});

test('Sizes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-divider-screenshots-sd-divider--sizes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell "size":
              - code: size
          - 'row "width: 50px width: 150px height: 50px height: 150px"':
            - cell
            - 'cell "width: 50px"':
              - code: "width: 50px"
            - 'cell "width: 150px"':
              - code: "width: 150px"
            - 'cell "height: 50px"':
              - code: "height: 50px"
            - 'cell "height: 150px"':
              - code: "height: 150px"
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - separator:
                - separator
            - cell:
              - separator:
                - separator
            - cell:
              - separator:
                - separator
            - cell:
              - separator:
                - separator
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-divider-screenshots-sd-divider--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-divider::part(...){outline: solid 2px red} main"':
            - 'cell "sd-divider::part(...){outline: solid 2px red}"':
              - code: "sd-divider::part(...){outline: solid 2px red}"
            - cell "main":
              - code: main
            - cell:
              - separator:
                - separator
    `);
});
