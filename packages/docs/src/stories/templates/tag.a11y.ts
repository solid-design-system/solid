import { test, expect } from '@playwright/test';

test('Filter Tag Group', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--filter-tag-group&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "All (26)" [pressed]
      - button "Funds (16)"
      - button "Sustainability (5)"
      - button "Retirement planing (2)"
      - button "Documents (3)"
    `);
});

test('Filter Tag Group with Morningstar Rating', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--filter-tag-group-morningstar-rating&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: "Find Top-Rated Investments with Morningstar Ratings:"
    - group "Filter by morningstar rating":
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
      - button "Very High" [pressed]
      - button "High"
      - button "Increased"
      - button "Moderate"
      - button "Low"
    `);
});

test('Removable Filter Tag Group', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--removable-filter-tag-group&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: "Active filters:"
    - text: Stocks
    - button "Remove":
      - img "Remove":
        - img
    - text: Bonds
    - button "Remove":
      - img "Remove":
        - img
    - text: Mutual funds
    - button "Remove":
      - img "Remove":
        - img
    - text: ETFs
    - button "Remove":
      - img "Remove":
        - img
    - button "Remove filters"
  `);
});

test('Tag Group with Links', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tag--tag-group-links&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Commercial real estate":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Savings plan rate":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Open-ended real estate funds":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Retirement planning":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
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
