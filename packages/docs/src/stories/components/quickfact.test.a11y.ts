import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - img "Icon"
    - paragraph: Lorem Ipsum
    - text: Con sectetur adipiscing elit
  `);
});

test('States', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--states&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - row "open true":
          - cell "open":
            - code: open
          - cell "true":
            - code: "true"
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "false":
          - cell "false":
            - code: "false"
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit":
                - img "Icon"
                - paragraph: Lorem Ipsum
  `);
});

test('Expandable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--expandable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - row "expandable true":
          - cell "expandable":
            - code: expandable
          - cell "true":
            - code: "true"
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit":
                - img "Icon"
                - paragraph: Lorem Ipsum
        - row "false Icon Lorem Ipsum Con sectetur adipiscing elit":
          - cell "false":
            - code: "false"
          - cell "Icon Lorem Ipsum Con sectetur adipiscing elit":
            - img "Icon"
            - paragraph: Lorem Ipsum
  `);
});

test('Mobile', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--mobile&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group:
      - button "Icon Lorem Ipsum Con sectetur adipiscing elit":
        - img "Icon"
        - paragraph: Lorem Ipsum
  `);
});

test('Summary Length', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--summary-length&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - row "summary short Icon Lorem ipsum.":
          - cell "summary":
            - code: summary
          - cell "short":
            - code: short
          - cell "Icon Lorem ipsum.":
            - img "Icon"
        - row "long Icon Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.":
          - cell "long":
            - code: long
          - cell "Icon Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.":
            - img "Icon"
  `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--slots&viewMode=story'
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
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
    - table:
      - rowgroup:
        - row "slot=...":
          - cell
          - cell "slot=...":
            - code: slot=...
        - row "summary":
          - cell
          - cell "summary":
            - code: summary
      - rowgroup:
        - row "Y axis":
          - cell "Y axis"
          - cell:
            - group:
              - button "Icon":
                - img "Icon"
    - table:
      - rowgroup:
        - row "slot=...":
          - cell
          - cell "slot=...":
            - code: slot=...
        - row "expand-icon":
          - cell
          - cell "expand-icon":
            - code: expand-icon
      - rowgroup:
        - row "Y axis":
          - cell "Y axis"
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit":
                - img "Icon"
                - paragraph: Lorem Ipsum
    - table:
      - rowgroup:
        - row "slot=...":
          - cell
          - cell "slot=...":
            - code: slot=...
        - row "collapse-icon":
          - cell
          - cell "collapse-icon":
            - code: collapse-icon
      - rowgroup:
        - row "Y axis":
          - cell "Y axis"
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
  `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup
      - rowgroup:
        - 'row "sd-quickfact::part(...){outline: solid 2px red} base"':
          - 'cell "sd-quickfact::part(...){outline: solid 2px red}"':
            - code: "sd-quickfact::part(...){outline: solid 2px red}"
          - cell "base":
            - code: base
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "header":
          - cell "header":
            - code: header
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "summary":
          - cell "summary":
            - code: summary
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "summary-icon":
          - cell "summary-icon":
            - code: summary-icon
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "summary-border":
          - cell "summary-border":
            - code: summary-border
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "content":
          - cell "content":
            - code: content
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
        - row "content__slot":
          - cell "content__slot":
            - code: content__slot
          - cell:
            - group:
              - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
                - img "Icon"
                - paragraph: Lorem Ipsum
              - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
  `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group:
      - button "Icon Lorem Ipsum Con sectetur adipiscing elit" [expanded]:
        - img "Icon"
        - paragraph: Lorem Ipsum
      - region "Icon Lorem Ipsum Con sectetur adipiscing elit"
  `);
});

test('Sample: Grouping', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-quickfact-screenshots-sd-quickfact--sample&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group:
        - button "Sed do eiusmod Con sectetur adipiscing elit":
          - paragraph: Sed do eiusmod
      - group:
        - button "Lorem Ipsum Con sectetur":
          - paragraph: Lorem Ipsum
      - group:
        - button "Lorem Ipsum Ut enim ad":
          - paragraph: Lorem Ipsum
      - group:
        - button "Ut labore et Con sectetur":
          - paragraph: Ut labore et
    `);
});
