import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-item-screenshots-sd-menu-item--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menuitem "Menu item 1"
    `);
});

test('Icon Indent', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-item-screenshots-sd-menu-item--icon-indent&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menuitem "Menu item 1"
    `);
});

test('Checked', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-item-screenshots-sd-menu-item--checked&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "checked":
            - cell
            - cell
            - cell "checked":
              - code: checked
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "type checkbox Menu item 1 Menu item 1":
            - cell "type":
              - code: type
            - cell "checkbox":
              - code: checkbox
            - cell "Menu item 1":
              - menuitemcheckbox "Menu item 1" [checked]
            - cell "Menu item 1":
              - menuitemcheckbox "Menu item 1"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-item-screenshots-sd-menu-item--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell "disabled":
              - code: disabled
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Menu item 1 Menu item 1":
            - cell "Y axis"
            - cell "Menu item 1":
              - menuitem "Menu item 1" [disabled]
            - cell "Menu item 1":
              - menuitem "Menu item 1"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-item-screenshots-sd-menu-item--slots&viewMode=story'
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
          - row "icon-indent":
            - cell
            - cell "icon-indent":
              - code: icon-indent
        - rowgroup:
          - row "Y axis Menu Item 1":
            - cell "Y axis"
            - cell "Menu Item 1":
              - menuitem "Menu Item 1"
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
          - row "Y axis Slot":
            - cell "Y axis"
            - cell "Slot":
              - menuitem "Slot"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "submenu":
            - cell
            - cell "submenu":
              - code: submenu
        - rowgroup:
          - row "Y axis Menu Item 1":
            - cell "Y axis"
            - cell "Menu Item 1":
              - menuitem "Menu Item 1"
    `);
});
