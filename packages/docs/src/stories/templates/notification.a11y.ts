import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-notification--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Info Notification":
              - /url: "#info-notification"
          - listitem:
            - link "Info Toast Notification":
              - /url: "#info-toast-notification"
          - listitem:
            - link "Success Notification":
              - /url: "#success-notification"
          - listitem:
            - link "Error Notification":
              - /url: "#error--notification"
          - listitem:
            - link "Warning Notification":
              - /url: "#warning-notification"
    - heading "Notification" [level=1]
    - heading "Info Notification" [level=3]
    - code
    - alert "Editing is restricted Request to edit":
      - button "Request to edit"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Info Toast Notification" [level=3]
    - button "Show toast"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Success Notification" [level=3]
    - alert "Congratulations You have successfully subscribed.":
      - paragraph: You have successfully subscribed.
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Error Notification" [level=3]
    - alert "A problem occurred while submitting your data. More information":
      - paragraph:
        - text: A problem occurred while submitting your data.
        - link "More information":
          - /url: "#"
      - button "Close":
        - img "Close":
          - img
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Warning Notification" [level=3]
    - alert "Update information You have 7 days left to update your billing information. More information":
      - paragraph: You have 7 days left to update your billing information.
      - button "More information"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Info Notification', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-notification--info-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - alert "Editing is restricted Request to edit":
      - button "Request to edit"
  `);
});

test('Info Toast Notification', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-notification--info-toast-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Show toast"
  `);
});

test('Success Notification', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-notification--success-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - alert "Congratulations You have successfully subscribed.":
      - paragraph: You have successfully subscribed.
  `);
});

test('Error  Notification', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-notification--error-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - alert "A problem occurred while submitting your data. More information":
      - paragraph:
        - text: A problem occurred while submitting your data.
        - link "More information":
          - /url: "#"
      - button "Close":
        - img "Close":
          - img
  `);
});

test('Warning Notification', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-notification--warning-notification&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - alert "Update information You have 7 days left to update your billing information. More information":
      - paragraph: You have 7 days left to update your billing information.
      - button "More information"
  `);
});
