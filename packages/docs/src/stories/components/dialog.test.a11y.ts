import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog-screenshots-sd-dialog--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Lorem Ipsum":
        - banner:
          - heading "Lorem Ipsum" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.
        - contentinfo:
          - button "Button"
    `);
});

test('No Close Button', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog-screenshots-sd-dialog--no-close-button&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Lorem Ipsum":
        - banner:
          - heading "Lorem Ipsum" [level=2]
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.
        - contentinfo:
          - button "Close"
    `);
});

test('Scrolling', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog-screenshots-sd-dialog--scrolling&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Lorem Ipsum":
        - banner:
          - heading "Lorem Ipsum" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - status
          - text: Scroll down and give it a try!
        - contentinfo:
          - button "Button"
    `);
});

test('Sample: Extended Footer', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog-screenshots-sd-dialog--extended-footer&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Lorem Ipsum":
        - banner:
          - heading "Lorem Ipsum" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.
        - contentinfo:
          - button "Button"
          - button "Button"
    `);
});

test('Sample: Small Headline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog-screenshots-sd-dialog--small-headline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Lorem Ipsum":
        - banner:
          - heading "Lorem Ipsum" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.
        - contentinfo:
          - button "Button"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog-screenshots-sd-dialog--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Lorem Ipsum":
        - banner:
          - heading "Lorem Ipsum" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.
        - contentinfo:
          - button "Button"
    `);
});
