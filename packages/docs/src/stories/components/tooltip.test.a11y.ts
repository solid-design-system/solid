import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tooltip-screenshots-sd-tooltip--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
    `);
});

test('Placement', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tooltip-screenshots-sd-tooltip--placement&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "placement":
            - cell
            - cell "placement":
              - code: placement
          - row "top top-start top-end":
            - cell
            - cell "top":
              - code: top
            - cell "top-start":
              - code: top-start
            - cell "top-end":
              - code: top-end
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell
            - cell
            - cell
      - table:
        - rowgroup:
          - row "placement":
            - cell
            - cell "placement":
              - code: placement
          - row "bottom bottom-start bottom-end":
            - cell
            - cell "bottom":
              - code: bottom
            - cell "bottom-start":
              - code: bottom-start
            - cell "bottom-end":
              - code: bottom-end
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell
            - cell
            - cell
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tooltip-screenshots-sd-tooltip--size&viewMode=story'
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
          - row "lg sm":
            - cell
            - cell "lg":
              - code: lg
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell
            - cell
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tooltip-screenshots-sd-tooltip--disabled&viewMode=story'
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
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell
            - cell
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tooltip-screenshots-sd-tooltip--slots&viewMode=story'
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
          - row "default content":
            - cell
            - cell "default":
              - code: default
            - cell "content":
              - code: content
        - rowgroup:
          - row "Y axis Lorem ipsum Tooltip Lorem ipsum":
            - cell "Y axis"
            - cell "Lorem ipsum":
              - tooltip "Lorem ipsum"
            - cell "Tooltip Lorem ipsum":
              - button "Tooltip" [expanded]:
                - img "Tooltip":
                  - img
              - tooltip "Lorem ipsum"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tooltip-screenshots-sd-tooltip--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
    `);
});
