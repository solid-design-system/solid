import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-link--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Link with Icon":
              - /url: "#link-with-icon"
          - listitem:
            - link "Link List":
              - /url: "#link-list"
          - listitem:
            - link "Anchor Link List":
              - /url: "#anchor-link-list"
    - heading "Link" [level=1]
    - heading "Link with Icon" [level=3]
    - link "Union Investment":
      - /url: http://union-investment.com
    - paragraph:
      - text: While the list above shows standalone links, we now will link to the
      - link "CD Toolbox":
        - /url: https://cd.union-investment.de
      - text: inside a paragraph.
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Link List" [level=3]
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
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Anchor Link List" [level=3]
    - link "Assets under management":
      - /url: "#"
    - link "Protecting is our priority":
      - /url: "#"
    - link "Sustainability":
      - /url: "#"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

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
