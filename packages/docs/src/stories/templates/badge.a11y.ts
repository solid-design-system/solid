import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-badge--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Button with badge":
              - /url: "#button-with-badge"
          - listitem:
            - link "Navigation Item with Badge":
              - /url: "#navigation-item-with-badge"
          - listitem:
            - link "Interactive Increment":
              - /url: "#interactive-increment"
    - heading "Badge" [level=1]
    - heading "Button with badge" [level=3]
    - paragraph: "Examples of sd-button working with sd-badge:"
    - status:
      - button /\\d+ Requests/
    - status:
      - button /\\+\\d+ News/
    - button "4 Calls":
      - status: 4 Calls
    - button "5 Notifications":
      - status: 5 Notifications
    - button "User Notifications Available":
      - status: User Notifications Available
    - status:
      - button /\\d+ Requests/
    - status:
      - button /\\+\\d+ News/
    - button "4 Calls":
      - status: 4 Calls
    - button "5 Notifications":
      - status: 5 Notifications
    - button "User Notifications Available":
      - status: User Notifications Available
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Navigation Item with Badge" [level=3]
    - paragraph: "Example of sd-navigation-item working with sd-badge:"
    - banner:
      - link "Logo":
        - /url: "#"
        - img "Logo"
      - button /Open Notifications \\+\\d+ Notifications/:
        - img "Open Notifications":
          - img
      - button "Open menu":
        - img "Open menu":
          - img
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Interactive Increment" [level=3]
    - button "5 Notifications":
      - status: 5 Notifications
    - button "Increment"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Button with badge', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-badge--button-with-badge&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - status:
      - button /\\d+ Requests/
    - status:
      - button /\\+\\d+ News/
    - button "4 Calls":
      - status: 4 Calls
    - button "5 Notifications":
      - status: 5 Notifications
    - button "User Notifications Available":
      - status: User Notifications Available
    - status:
      - button /\\d+ Requests/
    - status:
      - button /\\+\\d+ News/
    - button "4 Calls":
      - status: 4 Calls
    - button "5 Notifications":
      - status: 5 Notifications
    - button "User Notifications Available":
      - status: User Notifications Available
  `);
});

test('Navigation Item with Badge', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-badge--navigation-item-with-badge&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - banner:
      - link "Logo":
        - /url: "#"
        - img "Logo"
      - button /Open Notifications \\+\\d+ Notifications/:
        - img "Open Notifications":
          - img
      - button "Open menu":
        - img "Open menu":
          - img
  `);
});

test('Interactive Increment', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-badge--interactive-increment&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "5 Notifications":
      - status: 5 Notifications
    - button "Increment"
  `);
});
