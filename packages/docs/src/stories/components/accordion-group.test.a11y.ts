import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-group-screenshots-sd-accordion-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group: Accordion 1
      - group: Accordion 2
      - group: Accordion 3
    `);
});

test('One accordion open at a time', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-group-screenshots-sd-accordion-group--close-others&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "close-others true":
            - cell "close-others":
              - code: close-others
            - cell "true":
              - code: "true"
            - cell:
              - group: Accordion 1
              - group: Accordion 2
              - group: Accordion 3
          - row "false":
            - cell "false":
              - code: "false"
            - cell:
              - group: Accordion 1
              - group: Accordion 2
              - group: Accordion 3
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-group-screenshots-sd-accordion-group--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-accordion-group::part(...){outline: solid 2px red} base"':
            - 'cell "sd-accordion-group::part(...){outline: solid 2px red}"':
              - code: "sd-accordion-group::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell:
              - group: Accordion 1
              - group: Accordion 2
              - group: Accordion 3
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-group-screenshots-sd-accordion-group--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group:
        - text: Accordion 1
        - region "Accordion 1": Default slot
      - group: Accordion 2
      - group: Accordion 3
    `);
});

test('Samples', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-accordion-group-screenshots-sd-accordion-group--samples&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: white
      - group: Accordion 1
      - group: Accordion 2
      - group: Accordion 3
      - text: /neutral-\\d+/
      - group: Accordion 1
      - group: Accordion 2
      - group: Accordion 3
      - text: /primary-\\d+/
      - group: Accordion 1
      - group: Accordion 2
      - group: Accordion 3
    `);
});
