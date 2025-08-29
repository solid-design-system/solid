import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-screenshots-sd-menu--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menu:
        - menuitem "Menu item 1"
        - menuitem "Menu item 2"
        - menuitem "Menu item 3"
    `);
});

test('Icon Indent', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-screenshots-sd-menu--icon-indent&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menu:
        - menuitem "Menu item 1"
        - menuitem "Menu item 2"
        - menuitem "Menu item 3"
    `);
});

test('Checkmark', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-screenshots-sd-menu--checkmark&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menu:
        - menuitemcheckbox "Menu item 1" [checked]
        - menuitemcheckbox "Menu item 2" [checked]
        - menuitemcheckbox "Menu item 3"
    `);
});

test('Submenu', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-screenshots-sd-menu--submenu&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menu:
        - menuitem "Menu item 1"
        - menuitem "Menu item 2"
        - menuitem "Menu item 3":
          - menu:
            - menuitem "Submenu item 1"
            - menuitem "Submenu item 2"
            - menuitem "Submenu item 3"
    `);
});

test('Grouping', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-screenshots-sd-menu--grouping&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menu:
        - menuitem "Menu item 1"
        - menuitem "Menu item 2"
        - separator:
          - separator
        - menuitem "Menu item 3"
        - menuitem "Menu item 4"
        - separator:
          - separator
        - menuitem "Menu item 5"
        - menuitem "Menu item 6"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu-screenshots-sd-menu--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - menu:
        - menuitem "Menu item 1"
        - menuitem "Disabled menu item 2" [disabled]
        - menuitem "Menu item 3"
    `);
});
