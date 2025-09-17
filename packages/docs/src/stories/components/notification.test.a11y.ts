import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Lorem ipsum dolor sit."
    `);
});

test('Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "variant info Lorem ipsum dolor sit.":
            - cell "variant":
              - code: variant
            - cell "info":
              - code: info
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
          - row "success Lorem ipsum dolor sit.":
            - cell "success":
              - code: success
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
          - row "error Lorem ipsum dolor sit.":
            - cell "error":
              - code: error
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
          - row "warning Lorem ipsum dolor sit.":
            - cell "warning":
              - code: warning
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
    `);
});

test('Closable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--closable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "closable true Lorem ipsum dolor sit.":
            - cell "closable":
              - code: closable
            - cell "true":
              - code: "true"
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "false Lorem ipsum dolor sit.":
            - cell "false":
              - code: "false"
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
    `);
});

test('Duration', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--duration&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "duration Infinity Lorem ipsum dolor sit.":
            - cell "duration":
              - code: duration
            - cell "Infinity":
              - code: "Infinity"
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
          - row /\\d+ Lorem ipsum dolor sit\\./:
            - cell /\\d+/:
              - code: /\\d+/
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
    `);
});

test('Duration Indicator', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--duration-indicator&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "duration-indicator true Lorem ipsum dolor sit.":
            - cell "duration-indicator":
              - code: duration-indicator
            - cell "true":
              - code: "true"
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit."
    `);
});

test('Toast Notification (Default)', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--toast-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Info"
      - button "Success"
      - button "Warning"
      - button "Error"
    `);
});

test('Toast Notification (Bottom Center)', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--toast-bottom-center&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Info"
      - button "Success"
      - button "Warning"
      - button "Error"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-notification::part(...){outline: solid 2px red} base Lorem ipsum dolor sit."':
            - 'cell "sd-notification::part(...){outline: solid 2px red}"':
              - code: "sd-notification::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "icon Lorem ipsum dolor sit.":
            - cell "icon":
              - code: icon
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "content Lorem ipsum dolor sit.":
            - cell "content":
              - code: content
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "message Lorem ipsum dolor sit.":
            - cell "message":
              - code: message
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "duration-indicator__elapsed Lorem ipsum dolor sit.":
            - cell "duration-indicator__elapsed":
              - code: duration-indicator__elapsed
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "duration-indicator__total Lorem ipsum dolor sit.":
            - cell "duration-indicator__total":
              - code: duration-indicator__total
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
          - row "close-button Lorem ipsum dolor sit.":
            - cell "close-button":
              - code: close-button
            - cell "Lorem ipsum dolor sit.":
              - alert "Lorem ipsum dolor sit.":
                - button "Close":
                  - img "Close":
                    - img
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification-screenshots-sd-notification--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Lorem ipsum dolor sit.":
        - button "Close":
          - img "Close":
            - img
    `);
});
