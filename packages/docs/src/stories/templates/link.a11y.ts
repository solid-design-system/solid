import { test, expect } from '@playwright/test';

test('Link with Icon', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-link--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Union Investment":
        - /url: http://union-investment.com
      - paragraph:
        - text: While the list above shows standalone links, we now will link to the
        - link "CD Toolbox":
          - /url: https://cd.union-investment.de
        - text: inside a paragraph.
    `);
});

test('Link List', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-link--link-list&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - list:
        - listitem:
          - link "About us":
            - /url: https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs
        - listitem:
          - link "Our funds at a glance":
            - /url: https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs
        - listitem:
          - link "Sustainable investments":
            - /url: https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs
        - listitem:
          - link "Latest expert views and analyses":
            - /url: https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs
    `);
});

test('Anchor Link List', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-link--anchor-link-list&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Assets under management":
        - /url: "#"
      - link "Protecting is our priority":
        - /url: "#"
      - link "Sustainability":
        - /url: "#"
    `);
});
