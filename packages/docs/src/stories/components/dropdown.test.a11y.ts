import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Trigger" [expanded]
    `);
});

test('Rounded', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--rounded&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "rounded":
            - cell
            - cell "rounded":
              - code: rounded
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
    `);
});

test('No Auto Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--no-auto-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "no-auto-size":
            - cell
            - cell "no-auto-size":
              - code: no-auto-size
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Trigger Scroll down ⬇️ Trigger Scroll down ⬇️":
            - cell "Y axis"
            - cell "Trigger Scroll down ⬇️":
              - button "Trigger" [expanded]
            - cell "Trigger Scroll down ⬇️":
              - button "Trigger" [expanded]
    `);
});

test('No Flip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--no-flip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "no-flip":
            - cell
            - cell "no-flip":
              - code: no-flip
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
    `);
});

test('Placement', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--placement&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "placement":
            - cell
            - cell "placement":
              - code: placement
          - row "top top-start top-end":
            - cell
            - cell "top":
              - code: top
            - cell "top-start":
              - code: top-start
            - cell "top-end":
              - code: top-end
        - rowgroup:
          - row "Y axis Trigger Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
      - table:
        - rowgroup:
          - row "placement":
            - cell
            - cell "placement":
              - code: placement
          - row "bottom bottom-start bottom-end":
            - cell
            - cell "bottom":
              - code: bottom
            - cell "bottom-start":
              - code: bottom-start
            - cell "bottom-end":
              - code: bottom-end
        - rowgroup:
          - row "Y axis Trigger Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
      - table:
        - rowgroup:
          - row "placement":
            - cell
            - cell "placement":
              - code: placement
          - row "left left-start left-end":
            - cell
            - cell "left":
              - code: left
            - cell "left-start":
              - code: left-start
            - cell "left-end":
              - code: left-end
        - rowgroup:
          - row "Y axis Trigger Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
      - table:
        - rowgroup:
          - row "placement":
            - cell
            - cell "placement":
              - code: placement
          - row "right right-start right-end":
            - cell
            - cell "right":
              - code: right
            - cell "right-start":
              - code: right-start
            - cell "right-end":
              - code: right-end
        - rowgroup:
          - row "Y axis Trigger Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
    `);
});

test('Distance', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--distance&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "distance":
            - cell
            - cell
            - cell "distance":
              - code: distance
          - row /\\(default\\) 0 \\d+/:
            - cell
            - cell
            - cell "(default)":
              - code: (default)
            - cell "0":
              - code: "0"
            - cell /\\d+/:
              - code: /\\d+/
        - rowgroup:
          - row "rounded true Trigger Trigger Trigger":
            - cell "rounded":
              - code: rounded
            - cell "true":
              - code: "true"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
          - row "false Trigger Trigger Trigger":
            - cell "false":
              - code: "false"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
    `);
});

test('Skidding', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--skidding&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "skidding":
            - cell
            - cell
            - cell "skidding":
              - code: skidding
          - row /0 -\\d+ \\d+/:
            - cell
            - cell
            - cell "0":
              - code: "0"
            - cell /-\\d+/:
              - code: /-\\d+/
            - cell /\\d+/:
              - code: /\\d+/
        - rowgroup:
          - row "placement bottom Trigger Trigger Trigger":
            - cell "placement":
              - code: placement
            - cell "bottom":
              - code: bottom
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
          - row "right Trigger Trigger Trigger":
            - cell "right":
              - code: right
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--slots&viewMode=story'
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
          - row "default trigger":
            - cell
            - cell "default":
              - code: default
            - cell "trigger":
              - code: trigger
        - rowgroup:
          - row "Y axis Trigger Trigger":
            - cell "Y axis"
            - cell "Trigger":
              - button "Trigger" [expanded]
            - cell "Trigger":
              - button "Trigger" [expanded]
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dropdown-screenshots-sd-dropdown--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Trigger" [expanded]
      - link "Link 1":
        - /url: "#"
      - link "Link 2":
        - /url: "#"
      - link "Link 3":
        - /url: "#"
    `);
});
