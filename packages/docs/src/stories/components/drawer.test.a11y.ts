import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Label":
        - dialog "Label":
          - text: Header slot
          - button "Close":
            - img "Close":
              - img
          - text: Default slot Footer slot
    `);
});

test('Button in Header', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--button-in-header&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Label":
        - dialog "Label":
          - button "Header"
          - button "Close":
            - img "Close":
              - img
          - text: Default slot Footer slot
    `);
});

test('No Header', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--no-header&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Label":
        - dialog "Label":
          - button "Close":
            - img "Close":
              - img
          - text: Default slot Footer slot
    `);
});

test('No Footer', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--no-footer&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Label":
        - dialog "Label":
          - text: Header slot
          - button "Close":
            - img "Close":
              - img
          - text: Default slot
    `);
});

test('Padding', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--padding&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){padding: 0;}"':
            - cell
            - 'cell "sd-drawer::part(...){padding: 0;}"':
              - code: "sd-drawer::part(...){padding: 0;}"
          - row "header":
            - cell
            - cell "header":
              - code: header
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){padding: 0;}"':
            - cell
            - 'cell "sd-drawer::part(...){padding: 0;}"':
              - code: "sd-drawer::part(...){padding: 0;}"
          - row "body":
            - cell
            - cell "body":
              - code: body
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){padding: 0;}"':
            - cell
            - 'cell "sd-drawer::part(...){padding: 0;}"':
              - code: "sd-drawer::part(...){padding: 0;}"
          - row "footer":
            - cell
            - cell "footer":
              - code: footer
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
    `);
});

test('Placement', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--placement&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "placement=... end Label":
            - cell "placement=...":
              - code: placement=...
            - cell "end":
              - code: end
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
          - row "start Label":
            - cell "start":
              - code: start
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
    `);
});

test('Autofocus', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--autofocus&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Drawer"
    `);
});

test('Scrolling', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--scrolling&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Label":
        - dialog "Label":
          - text: Header slot
          - button "Close":
            - img "Close":
              - img
          - status
          - text: Scroll down and give it a try! Footer slot
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--slots&viewMode=story'
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
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "header":
            - cell
            - cell "header":
              - code: header
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "footer":
            - cell
            - cell "footer":
              - code: footer
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "base":
            - cell
            - cell "base":
              - code: base
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "overlay":
            - cell
            - cell "overlay":
              - code: overlay
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "panel":
            - cell
            - cell "panel":
              - code: panel
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "header":
            - cell
            - cell "header":
              - code: header
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "title":
            - cell
            - cell "title":
              - code: title
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "close-button":
            - cell
            - cell "close-button":
              - code: close-button
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "body":
            - cell
            - cell "body":
              - code: body
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
      - table:
        - rowgroup:
          - 'row "sd-drawer::part(...){outline: solid 2px red}"':
            - cell
            - 'cell "sd-drawer::part(...){outline: solid 2px red}"':
              - code: "sd-drawer::part(...){outline: solid 2px red}"
          - row "footer":
            - cell
            - cell "footer":
              - code: footer
        - rowgroup:
          - row "Y axis Label":
            - cell "Y axis"
            - cell "Label":
              - region "Label":
                - dialog "Label":
                  - text: Header slot
                  - button "Close":
                    - img "Close":
                      - img
                  - text: Default slot Footer slot
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer-screenshots-sd-drawer--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Label":
        - dialog "Label":
          - text: Header
          - button "Close":
            - img "Close":
              - img
          - text: Mouseless input example
          - textbox "Mouseless input example"
          - button "Footer"
      - button "Open Drawer"
    `);
});
