import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Filter Tag Group":
              - /url: "#filter-tag-group"
          - listitem:
            - link "Filter Tag Group with Morningstar Rating":
              - /url: "#filter-tag-group-with-morningstar-rating"
          - listitem:
            - link "Filter Tag Group with Risk":
              - /url: "#filter-tag-group-with-risk"
          - listitem:
            - link "Removable Filter Tag Group":
              - /url: "#removable-filter-tag-group"
          - listitem:
            - link "Tag Group with Links":
              - /url: "#tag-group-with-links"
          - listitem:
            - link "Tag Background Options":
              - /url: "#tag-background-options"
    - heading "Tag" [level=1]
    - heading "Filter Tag Group" [level=3]
    - button "All" [pressed]
    - button "Extended Reality"
    - button "Internet of things"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Filter Tag Group with Morningstar Rating" [level=3]
    - button "5 stars" [pressed]
    - button "4 stars"
    - button "3 stars"
    - button "2 stars"
    - button "1 star"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Filter Tag Group with Risk" [level=3]
    - button "Very High Risk" [pressed]
    - button "High Risk"
    - button "Increased Risk"
    - button "Moderated Risk"
    - button "Low Risk"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Removable Filter Tag Group" [level=3]
    - text: Filter 1
    - button "Remove":
      - img "Remove":
        - img
    - text: Filter 2
    - button "Remove":
      - img "Remove":
        - img
    - text: Filter 3
    - button "Remove":
      - img "Remove":
        - img
    - text: Filter 4
    - button "Remove":
      - img "Remove":
        - img
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Tag Group with Links" [level=3]
    - link "Topic 1":
      - /url: "#"
    - link "Topic 2":
      - /url: "#"
    - link "Topic 3":
      - /url: "#"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Tag Background Options" [level=3]
    - list:
      - listitem: white
      - listitem: /neutral-\\d+/
      - listitem: /primary-\\d+/
    - button "Tag"
    - button "Tag"
    - button "Tag"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Filter Tag Group', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--filter-tag-group&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "All" [pressed]
    - button "Extended Reality"
    - button "Internet of things"
  `);
});

test('Filter Tag Group with Morningstar Rating', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--filter-tag-group-morningstar-rating&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "5 stars" [pressed]
    - button "4 stars"
    - button "3 stars"
    - button "2 stars"
    - button "1 star"
  `);
});

test('Filter Tag Group with Risk', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--filter-tag-group-risk&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Very High Risk" [pressed]
    - button "High Risk"
    - button "Increased Risk"
    - button "Moderated Risk"
    - button "Low Risk"
  `);
});

test('Removable Filter Tag Group', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--removable-filter-tag-group&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Filter 1
    - button "Remove":
      - img "Remove":
        - img
    - text: Filter 2
    - button "Remove":
      - img "Remove":
        - img
    - text: Filter 3
    - button "Remove":
      - img "Remove":
        - img
    - text: Filter 4
    - button "Remove":
      - img "Remove":
        - img
  `);
});

test('Tag Group with Links', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--tag-group-links&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - link "Topic 1":
      - /url: "#"
    - link "Topic 2":
      - /url: "#"
    - link "Topic 3":
      - /url: "#"
  `);
});

test('Tag Background Options', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--background-options&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Tag"
    - button "Tag"
    - button "Tag"
  `);
});
