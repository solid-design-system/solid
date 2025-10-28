import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Tag"
    `);
});

test('Selected × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--selected-and-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "selected":
            - cell
            - cell
            - cell "selected":
              - code: selected
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "size lg Tag Tag":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Tag":
              - button "Tag"
            - cell "Tag":
              - button "Tag"
          - row "sm Tag Tag":
            - cell "sm":
              - code: sm
            - cell "Tag":
              - button "Tag"
            - cell "Tag":
              - button "Tag"
    `);
});

test('Removable × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--removable-and-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "removable":
            - cell
            - cell
            - cell "removable":
              - code: removable
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "size lg Tag Tag":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Tag":
              - button "Remove":
                - img "Remove":
                  - img
            - cell "Tag":
              - button "Tag"
          - row "sm Tag Tag":
            - cell "sm":
              - code: sm
            - cell "Tag":
              - button "Remove":
                - img "Remove":
                  - img
            - cell "Tag":
              - button "Tag"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "selected":
            - cell
            - cell
            - cell "selected":
              - code: selected
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "removable true Tag Tag":
            - cell "removable":
              - code: removable
            - cell "true":
              - code: "true"
            - cell "Tag":
              - button "Remove" [disabled]:
                - img "Remove":
                  - img
            - cell "Tag":
              - button "Remove" [disabled]:
                - img "Remove":
                  - img
          - row "false Tag Tag":
            - cell "false":
              - code: "false"
            - cell "Tag":
              - button "Tag" [disabled]
            - cell "Tag":
              - button "Tag" [disabled]
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--slots&viewMode=story'
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
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - button "Remove":
                - img "Remove":
                  - img
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "removable-indicator":
            - cell
            - cell "removable-indicator":
              - code: removable-indicator
        - rowgroup:
          - row "Y axis Tag":
            - cell "Y axis"
            - cell "Tag":
              - button "open"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-tag::part(...){outline: solid 2px red} base Tag"':
            - 'cell "sd-tag::part(...){outline: solid 2px red}"':
              - code: "sd-tag::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Tag":
              - button "remove":
                - img "remove":
                  - img
          - row "content Tag":
            - cell "content":
              - code: content
            - cell "Tag":
              - button "remove":
                - img "remove":
                  - img
          - row "removable-indicator Tag":
            - cell "removable-indicator":
              - code: removable-indicator
            - cell "Tag":
              - button "remove":
                - img "remove":
                  - img
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tag-screenshots-sd-tag--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Tag"
    `);
});
