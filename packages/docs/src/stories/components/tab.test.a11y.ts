import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-screenshots-sd-tab--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tab "Tab"
    `);
});

test('Container x Active', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-screenshots-sd-tab--container-active&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "active":
            - cell
            - cell
            - cell "active":
              - code: active
          - row "false true":
            - cell
            - cell
            - cell "false":
              - code: "false"
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "variant container Tab Tab":
            - cell "variant":
              - code: variant
            - cell "container":
              - code: container
            - cell "Tab":
              - tab "Tab"
            - cell "Tab":
              - tab "Tab" [selected]
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-screenshots-sd-tab--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "disabled true Tab":
            - cell "disabled":
              - code: disabled
            - cell "true":
              - code: "true"
            - cell "Tab":
              - tab "Tab" [disabled]
          - row "false Tab":
            - cell "false":
              - code: "false"
            - cell "Tab":
              - tab "Tab"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-screenshots-sd-tab--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - 'row "sd-tab::part(...){outline: solid 2px red}"':
            - cell
            - cell
            - 'cell "sd-tab::part(...){outline: solid 2px red}"':
              - code: "sd-tab::part(...){outline: solid 2px red}"
          - row "base":
            - cell
            - cell
            - cell "base":
              - code: base
        - rowgroup:
          - row "active false Tab":
            - cell "active":
              - code: active
            - cell "false":
              - code: "false"
            - cell "Tab":
              - tab "Tab"
          - row "true Tab":
            - cell "true":
              - code: "true"
            - cell "Tab":
              - tab "Tab" [selected]
      - table:
        - rowgroup:
          - 'row "sd-tab::part(...){outline: solid 2px red}"':
            - cell
            - cell
            - 'cell "sd-tab::part(...){outline: solid 2px red}"':
              - code: "sd-tab::part(...){outline: solid 2px red}"
          - row "active-tab-indicator":
            - cell
            - cell
            - cell "active-tab-indicator":
              - code: active-tab-indicator
        - rowgroup:
          - row "active false Tab":
            - cell "active":
              - code: active
            - cell "false":
              - code: "false"
            - cell "Tab":
              - tab "Tab"
          - row "true Tab":
            - cell "true":
              - code: "true"
            - cell "Tab":
              - tab "Tab" [selected]
      - table:
        - rowgroup:
          - 'row "sd-tab::part(...){outline: solid 2px red}"':
            - cell
            - cell
            - 'cell "sd-tab::part(...){outline: solid 2px red}"':
              - code: "sd-tab::part(...){outline: solid 2px red}"
          - row "hover-bottom-border":
            - cell
            - cell
            - cell "hover-bottom-border":
              - code: hover-bottom-border
        - rowgroup:
          - row "active false Tab":
            - cell "active":
              - code: active
            - cell "false":
              - code: "false"
            - cell "Tab":
              - tab "Tab"
          - row "true Tab":
            - cell "true":
              - code: "true"
            - cell "Tab":
              - tab "Tab" [selected]
    `);
});

test('Sample: Icon', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-tab-screenshots-sd-tab--sample&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "left":
            - cell
            - cell
            - cell "left":
              - code: left
          - row "sd-icon sd-icon + sd-badge":
            - cell
            - cell
            - cell "sd-icon":
              - code: sd-icon
            - cell "sd-icon + sd-badge":
              - code: sd-icon + sd-badge
        - rowgroup:
          - row "variant default Tab Tab":
            - cell "variant":
              - code: variant
            - cell "default":
              - code: default
            - cell "Tab":
              - tab "Tab" [selected]
            - cell "Tab":
              - tab "Tab" [selected]
          - row "container Tab Tab":
            - cell "container":
              - code: container
            - cell "Tab":
              - tab "Tab" [selected]
            - cell "Tab":
              - tab "Tab" [selected]
    `);
});
