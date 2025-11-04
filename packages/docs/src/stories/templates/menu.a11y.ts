import { test, expect } from '@playwright/test';

test('Menu with Checkmarks, Grouping and Submenu', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-menu--menu-with-checkmarks&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Menu"
    `);
});

test('Menu with Checkmarks and Icons', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-menu--menu-with-checkmarks-and-icons&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Icon only" [expanded]:
      - img "Icon only"
    - menu:
      - menuitemcheckbox "Menu item"
      - menuitemcheckbox "Menu item" [checked]
      - menuitemcheckbox "Menu item"
  `);
});
