import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-pagination--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Pagination Number":
              - /url: "#pagination-number"
          - listitem:
            - link "Pagination Number with Buttons":
              - /url: "#pagination-number-with-buttons"
          - listitem:
            - link "Pagination Simple":
              - /url: "#pagination-simple"
    - heading "Pagination" [level=1]
    - heading "Pagination Number" [level=3]
    - navigation "Pagination":
      - list:
        - listitem
        - listitem: "1"
        - listitem:
          - link "2":
            - /url: /?page=2
        - listitem:
          - link "3":
            - /url: /?page=3
        - listitem:
          - link "4":
            - /url: /?page=4
        - listitem:
          - link "5":
            - /url: /?page=5
        - listitem: ...
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem:
          - link /\\d+/:
            - /url: /?page=20
        - listitem:
          - link "Go to next page":
            - /url: /?page=2
            - img "Go to next page":
              - img
      - paragraph: "Current page: 1"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Pagination Number with Buttons" [level=3]
    - navigation "Pagination":
      - list:
        - listitem
        - listitem:
          - button "1"
        - listitem:
          - button "2"
        - listitem:
          - button "3"
        - listitem:
          - button "4"
        - listitem:
          - button "5"
        - listitem: ...
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem:
          - button /\\d+/
        - listitem:
          - button "Go to next page":
            - img "Go to next page":
              - img
      - paragraph: "Current page: 1"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Pagination Simple" [level=3]
    - navigation "Simple pagination":
      - list:
        - listitem
        - listitem: 1 /
        - listitem: /\\d+/
        - listitem:
          - link "Go to next page":
            - /url: /?page=2
            - img "Go to next page":
              - img
      - paragraph: "Current page: 1"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Pagination Number', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-pagination--number&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - navigation "Pagination":
      - list:
        - listitem
        - listitem: "1"
        - listitem:
          - link "2":
            - /url: /?page=2
        - listitem:
          - link "3":
            - /url: /?page=3
        - listitem:
          - link "4":
            - /url: /?page=4
        - listitem:
          - link "5":
            - /url: /?page=5
        - listitem: ...
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem:
          - link /\\d+/:
            - /url: /?page=20
        - listitem:
          - link "Go to next page":
            - /url: /?page=2
            - img "Go to next page":
              - img
      - paragraph: "Current page: 1"
  `);
});

test('Pagination Number with Buttons', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-pagination--number-with-buttons&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - navigation "Pagination":
      - list:
        - listitem
        - listitem:
          - button "1"
        - listitem:
          - button "2"
        - listitem:
          - button "3"
        - listitem:
          - button "4"
        - listitem:
          - button "5"
        - listitem: ...
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem
        - listitem:
          - button /\\d+/
        - listitem:
          - button "Go to next page":
            - img "Go to next page":
              - img
      - paragraph: "Current page: 1"
  `);
});

test('Pagination Simple', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-pagination--simple&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - navigation "Simple pagination":
      - list:
        - listitem
        - listitem: 1 /
        - listitem: /\\d+/
        - listitem:
          - link "Go to next page":
            - /url: /?page=2
            - img "Go to next page":
              - img
      - paragraph: "Current page: 1"
  `);
});
