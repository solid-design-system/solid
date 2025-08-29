import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - img "Generic Alt"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - img "Generic Alt"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Aspect Ratios', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard--aspect-ratios&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Placement', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard--placement&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Flip Direction', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard--flip-direction&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});
