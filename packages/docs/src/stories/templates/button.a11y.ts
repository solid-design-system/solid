import { test, expect } from '@playwright/test';

test('Button Group Horizontal', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--button-group-horizontal&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Maybe later"
      - button "Cancel subscription"
      - button "Exit portal"
      - button "Download PDF"
      - button "Accept terms of use"
      - button "PIF"
      - button "Add to watchlist"
      - button "Compare funds"
      - button "More actions"
    `);
});

test('Button Group Vertical displayed in two lines', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--button-group-vertical&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open your first investment account"
      - button "Get personalized advice from our experts"
    `);
});

test('Button Group Vertical Full Width', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--button-group-vertical-full-width&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Start investment"
      - button "Download report"
      - button "Add to watchlist"
    `);
});

test('Inclusive Disabled Button with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--inclusive-disabled-button-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Fields marked with * are required.
      - text: Your message *
      - textbox "Your message *"
      - button "Send" [disabled]
    `);
});
