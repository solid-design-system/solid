import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Menu" [expanded]
      - menu:
        - menuitem "Menu item 1"
        - menuitem "Menu item 2"
        - menuitem "Menu item 3"
    `);
});

test('Icon', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu--icon&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Icon only":
        - img "Icon only":
          - img
    `);
});

test('Checkmark', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu--checkmark&viewMode=story');
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
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu--submenu&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Menu"
    `);
});

test('Grouping', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu--grouping&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Menu"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-menu--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Menu"
    `);
});
