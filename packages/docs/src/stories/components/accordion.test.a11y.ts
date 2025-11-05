import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-screenshots-sd-accordion--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group: Accordion
    `);
});

test('States', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-screenshots-sd-accordion--states&viewMode=story'
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
                - text: Accordion
                - region "Accordion": Default slot
          - row "false":
            - cell "false":
              - code: "false"
            - cell:
              - group: Accordion
    `);
});

test('Summary Length', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-screenshots-sd-accordion--summary-length&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "summary short":
            - cell "summary":
              - code: summary
            - cell "short":
              - code: short
            - cell:
              - group: Lorem ipsum.
          - row "long":
            - cell "long":
              - code: long
            - cell:
              - group: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-screenshots-sd-accordion--slots&viewMode=story'
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
                - text: Accordion
                - region "Accordion": Default slot
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
              - group
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
              - group: Accordion
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
                - text: Accordion
                - region "Accordion Default Slot"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-screenshots-sd-accordion--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-accordion::part(...){outline: solid 2px red} base"':
            - 'cell "sd-accordion::part(...){outline: solid 2px red}"':
              - code: "sd-accordion::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
          - row "header":
            - cell "header":
              - code: header
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
          - row "summary":
            - cell "summary":
              - code: summary
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
          - row "summary-icon":
            - cell "summary-icon":
              - code: summary-icon
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
          - row "summary-border":
            - cell "summary-border":
              - code: summary-border
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
          - row "content":
            - cell "content":
              - code: content
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
          - row "content__slot":
            - cell "content__slot":
              - code: content__slot
            - cell:
              - group:
                - text: Accordion
                - region "Accordion": Default slot
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-screenshots-sd-accordion--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group:
        - text: Accordion
        - region "Accordion": Default slot
    `);
});
