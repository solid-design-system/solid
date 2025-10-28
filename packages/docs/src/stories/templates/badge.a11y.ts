import { test, expect } from '@playwright/test';

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
        - img "Open Notifications"
      - button "Open menu":
        - img "Open menu"
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
