import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-spinner-screenshots-sd-spinner--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - progressbar "Loading"
    `);
});

test('Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-spinner-screenshots-sd-spinner--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "color":
            - cell
            - cell "color":
              - code: color
          - row "primary white currentColor":
            - cell
            - cell "primary":
              - code: primary
            - cell "white":
              - code: white
            - cell "currentColor":
              - code: currentColor
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - progressbar "Loading"
            - cell:
              - progressbar "Loading"
            - cell:
              - progressbar "Loading"
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-spinner-screenshots-sd-spinner--size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "individual sizing":
            - cell
            - cell "individual sizing":
              - code: individual sizing
          - 'row "font-size: inherit font-size: 1rem font-size: 2rem font-size: 4rem"':
            - cell
            - 'cell "font-size: inherit"':
              - code: "font-size: inherit"
            - 'cell "font-size: 1rem"':
              - code: "font-size: 1rem"
            - 'cell "font-size: 2rem"':
              - code: "font-size: 2rem"
            - 'cell "font-size: 4rem"':
              - code: "font-size: 4rem"
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - progressbar "Loading"
            - cell:
              - progressbar "Loading"
            - cell:
              - progressbar "Loading"
            - cell:
              - progressbar "Loading"
    `);
});
