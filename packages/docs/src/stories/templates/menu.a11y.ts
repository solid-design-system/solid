import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-menu--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Menu with Checkmarks, Grouping and Submenu":
              - /url: "#menu-with-checkmarks-grouping-and-submenu"
          - listitem:
            - link "Menu with Checkmarks and Icons":
              - /url: "#menu-with-checkmarks-and-icons"
    - heading "Menu" [level=1]
    - heading "Menu with Checkmarks, Grouping and Submenu" [level=3]
    - button "Menu"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Menu with Checkmarks and Icons" [level=3]
    - button "Icon only" [expanded]:
      - img "Icon only":
        - img
    - menu:
      - menuitemcheckbox "Menu item"
      - menuitemcheckbox "Menu item" [checked]
      - menuitemcheckbox "Menu item"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

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
      - img "Icon only":
        - img
    - menu:
      - menuitemcheckbox "Menu item"
      - menuitemcheckbox "Menu item" [checked]
      - menuitemcheckbox "Menu item"
  `);
});
