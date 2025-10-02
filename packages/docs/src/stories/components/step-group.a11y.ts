import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Label":
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Size Label":
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
      - navigation:
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Orientation Label":
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
      - navigation:
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
    `);
});

test('Horizontal Inline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--horizontal-inline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Orientation Label":
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
    `);
});

test('Active Step', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--active-step&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation:
        - list:
          - listitem:
            - button "Step 1"
            - paragraph: Step 1
          - listitem:
            - button "Step 2"
            - paragraph: Step 2
          - listitem:
            - text: "3"
            - paragraph: Step 3
    `);
});

test('Not Interactive', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--not-interactive&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group:
        - list:
          - listitem: 1 Step 1
          - listitem: 2 Step 2
          - listitem: 3 Step 3
    `);
});

test('Icon', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group--icon&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group:
        - list:
          - listitem: Step 1
          - listitem: Step 2
          - listitem: Step 3
    `);
});
