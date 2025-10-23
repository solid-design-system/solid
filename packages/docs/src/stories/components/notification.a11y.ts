import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Default slot"
    `);
});

test('Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Info Lorem ipsum dolor sit"
      - alert "Success Lorem ipsum dolor sit"
      - alert "Error Lorem ipsum dolor sit"
      - alert "Warning Lorem ipsum dolor sit"
    `);
});

test('Open', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--open&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Lorem ipsum dolor sit"
    `);
});

test('Closable', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--closable&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Lorem ipsum dolor sit":
        - button "Close":
          - img "Close":
            - img
    `);
});

test('Duration', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--duration&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Notification will stay open (Infinity)"
      - alert "Notification will self close after 5 seconds"
    `);
});

test('Duration Indicator', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--duration-indicator&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "Notification will self close after 5 seconds"
    `);
});

test('Toast Notification', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--toast-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Info"
      - button "Success"
      - button "Warning"
      - button "Error"
    `);
});

test(' ', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-notification--toast-bottom-center&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Info"
      - button "Success"
      - button "Warning"
      - button "Error"
    `);
});
