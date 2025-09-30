import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Link":
        - /url: "#"
    `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Inherit":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Large":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Small":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
    `);
});

test('As link', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--as-link&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Link":
        - /url: https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs
      - link "New Window":
        - /url: https://union-investment.com
      - link "Download":
        - /url: ./placeholders/src/images/collaboration.jpg
    `);
});

test('Icon', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--icon&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Icon Left":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Icon Right":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
    `);
});

test('Standalone', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--standalone&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - list:
        - listitem:
          - link "Union Investment":
            - /url: http://union-investment.com
        - listitem:
          - link "Solid Design System":
            - /url: https://solid-design-system.fe.union-investment.de/docs/
      - paragraph:
        - text: While the list above shows standalone links, we now will link to the
        - link "CD Toolbox":
          - /url: https://cd.union-investment.de
        - text: inside a paragraph.
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--disabled&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Disabled
    `);
});

test('Visually Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--visually-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Visually Disabled" [disabled]:
        - /url: https://solid-design-system.fe.union-investment.de/docs/
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link--inverted&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Inverted":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
    `);
});
