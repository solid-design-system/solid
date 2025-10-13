import { test, expect } from '@playwright/test';

test('Header Variant A-01 with different Header Navigation Templates', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header-navigation--horizontal&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Union Investment Homepage":
          - /url: "#"
          - img "Union Investment Homepage"
        - navigation "Main":
          - list:
            - listitem:
              - button "Funds & Depot"
            - listitem:
              - button "About Us"
            - listitem:
              - link "Savings":
                - /url: javascript:void(0)
            - listitem:
              - button "Investing"
            - listitem:
              - button "Our Services"
        - navigation "Service":
          - list:
            - listitem:
              - link "Login":
                - /url: javascript:void(0)
            - listitem:
              - link "Website":
                - /url: javascript:void(0)
                - img "Website":
                  - img
            - listitem:
              - link "Search":
                - /url: javascript:void(0)
                - img "Search":
                  - img
      - main
    `);
});

test('Header Sample A-01', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header-navigation--sample-a&viewMode=story'
  );
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
        - link "Press Service":
          - /url: javascript:void(0)
        - link "Sustainability":
          - /url: javascript:void(0)
        - link "News":
          - /url: javascript:void(0)
          - img "News":
            - img
        - button "Search":
          - img "Search":
            - img
        - link "My account":
          - /url: javascript:void(0)
        - link "My application":
          - /url: javascript:void(0)
    `);
});

test('Header Variant A-02 (with overrides) with Header Navigation Template', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header-navigation--vertical&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Union Investment Homepage":
          - /url: "#"
          - img "Union Investment Homepage"
        - navigation "Service":
          - list:
            - listitem:
              - button "Client Service":
                - img "Client Service":
                  - img
            - listitem:
              - button "Cart":
                - img "Cart":
                  - img
            - listitem:
              - button "Account":
                - img "Account":
                  - img
      - navigation "Main":
        - list:
          - listitem:
            - link "Home":
              - /url: javascript:void(0)
          - listitem:
            - link "Investment news":
              - /url: javascript:void(0)
          - listitem:
            - button "Investment funds"
          - listitem:
            - link "Management":
              - /url: javascript:void(0)
          - listitem:
            - link "Market analysis":
              - /url: javascript:void(0)
          - listitem:
            - link "Qualification":
              - /url: javascript:void(0)
          - listitem:
            - link "Consulting support":
              - /url: javascript:void(0)
      - navigation "Actions":
        - link "Document upload":
          - /url: javascript:void(0)
        - link "Bank order":
          - /url: javascript:void(0)
      - main
    `);
});

test('Header Sample A-02', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header-navigation--sample-a-02&viewMode=story'
  );
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
        - link "Sign in":
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
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-header-navigation--sample-b&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - banner:
        - link "Union Investment Homepage":
          - /url: "#"
          - img "Union Investment Homepage"
        - text: Partnerlogo
        - link "Home":
          - /url: javascript:void(0)
        - link "Perspective":
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
