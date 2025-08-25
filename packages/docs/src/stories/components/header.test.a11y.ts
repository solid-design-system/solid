import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner: Default slot
    `);
});

test('Fixed', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--fixed&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner: Default slot
      - text: This element automatically sets its position depending on the height of the header.
    `);
});

test('Sample A', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--sample-a&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Logo":
          - /url: "#"
          - img "Logo"
        - button "Über Uns"
        - button "Märkte"
        - button "Presseservice"
        - button "Nachhaltigkeit"
        - button "Karriere"
        - button "Other locations":
          - img "Other locations":
            - img
        - button "Search":
          - img "Search":
            - img
        - button "Mein Depot"
        - button "Meine Bewerbung"
    `);
});

test('Sample A Tablet', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--sample-a-md&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Logo":
          - /url: "#"
          - img "Logo"
        - button "Über Uns"
        - button "Märkte"
        - button "Presseservice"
        - button "Nachhaltigkeit"
        - button "Karriere"
        - button "Other locations":
          - img "Other locations":
            - img
        - button "Search":
          - img "Search":
            - img
        - button "Mein Depot"
        - button "Meine Bewerbung"
    `);
});

test('Sample A Small Mobile', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--sample-a-sm&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Logo":
          - /url: "#"
          - img "Logo"
        - button "Über Uns"
        - button "Märkte"
        - button "Presseservice"
        - button "Nachhaltigkeit"
        - button "Karriere"
        - button "Other locations":
          - img "Other locations":
            - img
        - button "Search":
          - img "Search":
            - img
        - button "Mein Depot"
        - button "Meine Bewerbung"
    `);
});

test('Sample B', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--sample-b&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Logo":
          - /url: "#"
          - img "Logo"
        - text: Partnerlogo
        - button "Über Uns"
        - button "Märkte"
        - button "Presseservice"
        - button "Nachhaltigkeit"
        - button "Karriere"
        - button "Other Locations":
          - img "Other Locations":
            - img
        - button "Search":
          - img "Search":
            - img
    `);
});

test('Tablet', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--sample-b-md&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Logo":
          - /url: "#"
          - img "Logo"
        - text: Partnerlogo
        - button "Über Uns"
        - button "Märkte"
        - button "Presseservice"
        - button "Nachhaltigkeit"
        - button "Karriere"
        - button "Other Locations":
          - img "Other Locations":
            - img
        - button "Search":
          - img "Search":
            - img
    `);
});

test('Small mobile', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-header-screenshots-sd-header--small-viewport-sample-2&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Logo":
          - /url: "#"
          - img "Logo"
        - text: Partnerlogo
        - button "Über Uns"
        - button "Märkte"
        - button "Presseservice"
        - button "Nachhaltigkeit"
        - button "Karriere"
        - button "Other Locations":
          - img "Other Locations":
            - img
        - button "Search":
          - img "Search":
            - img
    `);
});
