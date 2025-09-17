import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-icon-screenshots-sd-icon--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
    `);
});

test('Library: default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-icon-screenshots-sd-icon--library-default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "color":
            - cell
            - cell
            - cell "color":
              - code: color
          - row "currentColor primary white":
            - cell
            - cell
            - cell "currentColor":
              - code: currentColor
            - cell "primary":
              - code: primary
            - cell "white":
              - code: white
        - rowgroup:
          - row "name content/image":
            - cell "name":
              - code: name
            - cell "content/image":
              - code: content/image
            - cell
            - cell
            - cell
          - row "union-investment/content/image":
            - cell "union-investment/content/image":
              - code: union-investment/content/image
            - cell
            - cell
            - cell
          - row "system/image":
            - cell "system/image":
              - code: system/image
            - cell
            - cell
            - cell
          - row "union-investment/system/image":
            - cell "union-investment/system/image":
              - code: union-investment/system/image
            - cell
            - cell
            - cell
    `);
});

test('Library: internal', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-icon-screenshots-sd-icon--library-internal&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "color":
            - cell
            - cell
            - cell "color":
              - code: color
          - row "currentColor primary white":
            - cell
            - cell
            - cell "currentColor":
              - code: currentColor
            - cell "primary":
              - code: primary
            - cell "white":
              - code: white
        - rowgroup:
          - row "name calendar":
            - cell "name":
              - code: name
            - cell "calendar":
              - code: calendar
            - cell
            - cell
            - cell
          - row "chevron-down":
            - cell "chevron-down":
              - code: chevron-down
            - cell
            - cell
            - cell
          - row "chevron-up":
            - cell "chevron-up":
              - code: chevron-up
            - cell
            - cell
            - cell
          - row "chevron-right":
            - cell "chevron-right":
              - code: chevron-right
            - cell
            - cell
            - cell
          - row "chevron-left":
            - cell "chevron-left":
              - code: chevron-left
            - cell
            - cell
            - cell
          - row "clock":
            - cell "clock":
              - code: clock
            - cell
            - cell
            - cell
          - row "close":
            - cell "close":
              - code: close
            - cell
            - cell
            - cell
          - row "closing-round":
            - cell "closing-round":
              - code: closing-round
            - cell
            - cell
            - cell
          - row "eye":
            - cell "eye":
              - code: eye
            - cell
            - cell
            - cell
          - row "eye-crossed-out":
            - cell "eye-crossed-out":
              - code: eye-crossed-out
            - cell
            - cell
            - cell
          - row "info-circle":
            - cell "info-circle":
              - code: info-circle
            - cell
            - cell
            - cell
          - row "status-check":
            - cell "status-check":
              - code: status-check
            - cell
            - cell
            - cell
          - row "status-minus":
            - cell "status-minus":
              - code: status-minus
            - cell
            - cell
            - cell
          - row "pause":
            - cell "pause":
              - code: pause
            - cell
            - cell
            - cell
          - row "risk":
            - cell "risk":
              - code: risk
            - cell
            - cell
            - cell
          - row "start":
            - cell "start":
              - code: start
            - cell
            - cell
            - cell
          - row "confirm-circle":
            - cell "confirm-circle":
              - code: confirm-circle
            - cell
            - cell
            - cell
          - row "warning":
            - cell "warning":
              - code: warning
            - cell
            - cell
            - cell
          - row "exclamation-circle":
            - cell "exclamation-circle":
              - code: exclamation-circle
            - cell
            - cell
            - cell
          - row "magnifying-glass":
            - cell "magnifying-glass":
              - code: magnifying-glass
            - cell
            - cell
            - cell
          - row "transcript":
            - cell "transcript":
              - code: transcript
            - cell
            - cell
            - cell
          - row "mute":
            - cell "mute":
              - code: mute
            - cell
            - cell
            - cell
          - row "volume":
            - cell "volume":
              - code: volume
            - cell
            - cell
            - cell
          - row "reload":
            - cell "reload":
              - code: reload
            - cell
            - cell
            - cell
    `);
});

test('Library: status assets', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-icon-screenshots-sd-icon--status-library&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "color":
            - cell
            - cell
            - cell "color":
              - code: color
          - row "currentColor primary white":
            - cell
            - cell
            - cell "currentColor":
              - code: currentColor
            - cell "primary":
              - code: primary
            - cell "white":
              - code: white
        - rowgroup:
          - row "name status-check":
            - cell "name":
              - code: name
            - cell "status-check":
              - code: status-check
            - cell
            - cell
            - cell
          - row "status-exclamation":
            - cell "status-exclamation":
              - code: status-exclamation
            - cell
            - cell
            - cell
          - row "status-close":
            - cell "status-close":
              - code: status-close
            - cell
            - cell
            - cell
          - row "status-info":
            - cell "status-info":
              - code: status-info
            - cell
            - cell
            - cell
          - row "status-clock":
            - cell "status-clock":
              - code: status-clock
            - cell
            - cell
            - cell
          - row "status-minus":
            - cell "status-minus":
              - code: status-minus
            - cell
            - cell
            - cell
          - row "status-questionmark":
            - cell "status-questionmark":
              - code: status-questionmark
            - cell
            - cell
            - cell
    `);
});
