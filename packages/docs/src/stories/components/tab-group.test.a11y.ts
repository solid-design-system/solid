import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
    `);
});

test('Tab Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--tab-variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "sd-tab[variant=\\"...\\"] default":
            - cell "sd-tab[variant=\\"...\\"]":
              - code: sd-tab[variant="..."]
            - cell "default":
              - code: default
            - cell:
              - tablist:
                - tab "Tab 1" [selected]
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
              - tabpanel: Tab panel 1
          - row "container":
            - cell "container":
              - code: container
            - cell:
              - tablist:
                - tab "Tab 1" [selected]
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
              - tabpanel: Tab panel 1
    `);
});

test('Scrollable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--scrollable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "default default":
            - cell "default":
              - code: default
            - cell "default":
              - code: default
            - cell:
              - tablist:
                - tab "Tab 1" [selected]
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
              - tabpanel: Tab panel 1
          - row "container":
            - cell "container":
              - code: container
            - cell:
              - tablist:
                - tab "Tab 1" [selected]
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
              - tabpanel: Tab panel 1
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "base":
            - cell
            - cell "base":
              - code: base
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1" [selected]
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
              - tabpanel: Tab panel 1
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "nav":
            - cell
            - cell "nav":
              - code: nav
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1" [selected]
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
              - tabpanel: Tab panel 1
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "tabs":
            - cell
            - cell "tabs":
              - code: tabs
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1"
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "separation":
            - cell
            - cell "separation":
              - code: separation
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1"
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "body":
            - cell
            - cell "body":
              - code: body
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1"
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "scroll-button--start":
            - cell
            - cell "scroll-button--start":
              - code: scroll-button--start
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1"
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
      - table:
        - rowgroup:
          - 'row "sd-tab-group::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-tab-group::part(...){outline: solid 2px red}"':
              - code: "sd-tab-group::part(...){outline: solid 2px red}"
          - row "scroll-button--end":
            - cell
            - cell "scroll-button--end":
              - code: scroll-button--end
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - tablist:
                - tab "Tab 1"
                - tab "Tab 2"
                - tab "Tab 3"
                - tab "Tab 4"
                - tab "Tab 5"
                - tab "Tab 6"
                - tab "Tab 7"
                - tab "Tab 8"
                - tab "Tab 9"
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
                - tab /Tab \\d+/
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
        - tab "Tab 6"
        - tab "Tab 7"
        - tab "Tab 8"
        - tab "Tab 9"
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
        - tab /Tab \\d+/
      - tabpanel: Tab panel 1
    `);
});

test('Sample: Centered', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--sample-centered&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Default Variant
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3" [disabled]
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
      - text: Container Variant
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3" [disabled]
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
    `);
});

test('Sample: No Line', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--sample-no-line&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
    `);
});

test('Sample: Bold', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--sample-bold&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Default Variant
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
      - text: Container Variant
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3" [disabled]
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
    `);
});

test('Sample: Deep Link', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--sample-deep-link&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
        - tab "Tab 4"
        - tab "Tab 5"
      - tabpanel: Tab panel 1
      - button "Open Panel 5"
    `);
});

test('Sample: With Links', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-group-screenshots-sd-tab-group--sample-with-links&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Tab 1" [selected]
        - tab "Tab 2"
        - tab "Tab 3"
      - tabpanel:
        - list:
          - listitem:
            - link "Union Investment":
              - /url: https://union-investment.com
          - listitem:
            - link "Solid Design System":
              - /url: https://solid-design-system.fe.union-investment.de/docs/
    `);
});
