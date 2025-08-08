import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link /Header Sample A-\\d+/:
              - /url: "#header-sample-a-01"
          - listitem:
            - link /Header Sample A-\\d+/:
              - /url: "#header-sample-a-02"
          - listitem:
            - link "Header Sample B":
              - /url: "#header-sample-b"
    - heading "Header" [level=1]
    - heading /Header Sample A-\\d+/ [level=3]
    - paragraph:
      - strong: "Accessibility hint:"
      - text: aria-expanded and aria-controls must be set for accessibility purpose.
    - paragraph: When consuming sd-header please ensure that there are no margins applied on the left, right and bottom of the dropdown. The top margin of the dropdown should be kept otherwise the first navigation item is cutted.
    - banner:
      - link "Union Investment Homepage":
        - /url: "#"
        - img "Union Investment Homepage"
      - link "About Us":
        - /url: javascript:void(0)
      - link "Markets":
        - /url: javascript:void(0)
      - link "Sustainability":
        - /url: javascript:void(0)
      - link "Career":
        - /url: javascript:void(0)
      - link "News":
        - /url: javascript:void(0)
        - img "News":
          - img
      - button "Search":
        - img "Search":
          - img
      - link "Portfolio":
        - /url: javascript:void(0)
      - link "Application":
        - /url: javascript:void(0)
    - button "Show code"
    - button "Edit on CodePen"
    - heading /Header Sample A-\\d+/ [level=3]
    - banner:
      - link "Union Investment Homepage":
        - /url: "#"
        - img "Union Investment Homepage"
      - link "Search filter":
        - /url: javascript:void(0)
        - img "Search filter":
          - img
      - link "Language":
        - /url: javascript:void(0)
        - img "Language":
          - img
      - link "News":
        - /url: javascript:void(0)
        - img "News":
          - img
      - button "Search":
        - img "Search":
          - img
      - link "Login":
        - /url: javascript:void(0)
      - link "Competencies":
        - /url: javascript:void(0)
      - link "Capital Market":
        - /url: javascript:void(0)
      - link "Our products":
        - /url: javascript:void(0)
      - link "Reporting":
        - /url: javascript:void(0)
      - link "About us":
        - /url: javascript:void(0)
      - link "Personal area":
        - /url: javascript:void(0)
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Header Sample B" [level=3]
    - banner:
      - link "Union Investment Homepage":
        - /url: "#"
        - img "Union Investment Homepage"
      - text: Partnerlogo
      - link "Starting point":
        - /url: javascript:void(0)
      - link "Point of view":
        - /url: javascript:void(0)
      - link "To the point":
        - /url: javascript:void(0)
      - link "Meeting point":
        - /url: javascript:void(0)
      - link "News":
        - /url: javascript:void(0)
        - img "News":
          - img
      - button "Search":
        - img "Search":
          - img
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Header Sample A-01', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header--sample-a&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - banner:
      - link "Union Investment Homepage":
        - /url: "#"
        - img "Union Investment Homepage"
      - link "About Us":
        - /url: javascript:void(0)
      - link "Markets":
        - /url: javascript:void(0)
      - link "Sustainability":
        - /url: javascript:void(0)
      - link "Career":
        - /url: javascript:void(0)
      - link "News":
        - /url: javascript:void(0)
        - img "News":
          - img
      - button "Search":
        - img "Search":
          - img
      - link "Portfolio":
        - /url: javascript:void(0)
      - link "Application":
        - /url: javascript:void(0)
  `);
});

test('Header Sample A-02', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header--sample-a-02&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - banner:
      - link "Union Investment Homepage":
        - /url: "#"
        - img "Union Investment Homepage"
      - link "Search filter":
        - /url: javascript:void(0)
        - img "Search filter":
          - img
      - link "Language":
        - /url: javascript:void(0)
        - img "Language":
          - img
      - link "News":
        - /url: javascript:void(0)
        - img "News":
          - img
      - button "Search":
        - img "Search":
          - img
      - link "Login":
        - /url: javascript:void(0)
      - link "Competencies":
        - /url: javascript:void(0)
      - link "Capital Market":
        - /url: javascript:void(0)
      - link "Our products":
        - /url: javascript:void(0)
      - link "Reporting":
        - /url: javascript:void(0)
      - link "About us":
        - /url: javascript:void(0)
      - link "Personal area":
        - /url: javascript:void(0)
  `);
});

test('Header Sample B', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header--sample-b&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - banner:
      - link "Union Investment Homepage":
        - /url: "#"
        - img "Union Investment Homepage"
      - text: Partnerlogo
      - link "Starting point":
        - /url: javascript:void(0)
      - link "Point of view":
        - /url: javascript:void(0)
      - link "To the point":
        - /url: javascript:void(0)
      - link "Meeting point":
        - /url: javascript:void(0)
      - link "News":
        - /url: javascript:void(0)
        - img "News":
          - img
      - button "Search":
        - img "Search":
          - img
  `);
});
