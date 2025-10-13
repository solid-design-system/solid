import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-expandable-screenshots-sd-expandable--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Show more"
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-expandable-screenshots-sd-expandable--inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "inverted true Show more":
            - cell "inverted":
              - code: inverted
            - cell "true":
              - code: "true"
            - cell "Show more":
              - button "Show more"
          - row "false Show more":
            - cell "false":
              - code: "false"
            - cell "Show more":
              - button "Show more"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-expandable-screenshots-sd-expandable--slots&viewMode=story'
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
          - row "Y axis Show more":
            - cell "Y axis"
            - cell "Show more":
              - button "Show more"
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
          - row "Y axis expand-icon Show more":
            - cell "Y axis"
            - cell "expand-icon Show more":
              - button "expand-icon Show more"
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
          - row "Y axis Show more":
            - cell "Y axis"
            - cell "Show more":
              - button "Show more"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "toggle-open":
            - cell
            - cell "toggle-open":
              - code: toggle-open
        - rowgroup:
          - row "Y axis Show more":
            - cell "Y axis"
            - cell "Show more":
              - button "Show more"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "toggle-closed":
            - cell
            - cell "toggle-closed":
              - code: toggle-closed
        - rowgroup:
          - row "Y axis toggle-closed":
            - cell "Y axis"
            - cell "toggle-closed":
              - button "toggle-closed"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-expandable-screenshots-sd-expandable--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-expandable::part(...){outline: solid 2px red} base Show more"':
            - 'cell "sd-expandable::part(...){outline: solid 2px red}"':
              - code: "sd-expandable::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Show more":
              - button "Show more"
          - row "content Show more":
            - cell "content":
              - code: content
            - cell "Show more":
              - button "Show more"
          - row "toggle Show more":
            - cell "toggle":
              - code: toggle
            - cell "Show more":
              - button "Show more"
          - row "toggle-icon Show more":
            - cell "toggle-icon":
              - code: toggle-icon
            - cell "Show more":
              - button "Show more"
          - row "summary Show more":
            - cell "summary":
              - code: summary
            - cell "Show more":
              - button "Show more"
          - row "details Show more":
            - cell "details":
              - code: details
            - cell "Show more":
              - button "Show more"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-expandable-screenshots-sd-expandable--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Show less" [expanded]
      - group: Default slot
    `);
});

test('Samples', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-expandable-screenshots-sd-expandable--samples&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Background white
      - button "Show more"
      - text: /Background neutral-\\d+/
      - button "Show more"
      - text: /Background primary-\\d+/
      - button "Show more"
      - text: Background primary, inverted
      - button "Show more"
      - text: Lead Text Example
      - button "Show more"
      - text: Paragraph Example
      - button "Show more"
    `);
});
