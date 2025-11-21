import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Drawer"
      - region "Label":
        - dialog "Label":
          - text: Header slot
          - button "Close":
            - img "Close":
              - img
          - text: Default slot Footer slot
    `);
});

test('Open', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer--open&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Drawer"
      - region "example":
        - dialog "example":
          - button "Back"
          - button "Close":
            - img "Close":
              - img
          - text: Default slot
          - button "Primary Action"
          - button "Secondary Action"
    `);
});

test('Placement', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer--placement&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Drawer"
      - region "Placement drawer":
        - dialog "Placement drawer":
          - searchbox "Search"
          - button "Search":
            - img "Search":
              - img
          - button "Close":
            - img "Close":
              - img
          - button "Primary Action"
          - button "Secondary Action"
    `);
});

test('No Header', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-drawer--no-header&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Drawer"
      - region "No header drawer":
        - dialog "No header drawer":
          - button "Close":
            - img "Close":
              - img
          - text: Default slot Footer slot
    `);
});
