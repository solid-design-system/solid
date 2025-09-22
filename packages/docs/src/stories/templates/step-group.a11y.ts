import { test, expect } from '@playwright/test';

test('Step Group Horizontal Inline with Label for current step only', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-step-group--horizontal-inline-with-label-step-group&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation "Account":
        - list:
          - listitem:
            - button "Account"
            - text: Account
          - listitem: "2"
          - listitem: "3"
      - navigation "Payment":
        - list:
          - listitem:
            - button "Step 1"
          - listitem:
            - button "Payment"
            - text: Payment
          - listitem: "3"
      - navigation "Confirmation":
        - list:
          - listitem:
            - button "Step 1"
          - listitem:
            - button "Step 2"
          - listitem:
            - button "Confirmation"
            - text: Confirmation
    `);
});

test('Non Interactive Step Group', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-step-group--non-interactive-step-group&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Non-Interactive Step Group":
        - list:
          - listitem:
            - text: "1"
            - paragraph: Make an appointment
          - listitem: 2 Select funds for saving plan
          - listitem: 3 Open a new account
          - listitem: 4 Provide documents
    `);
});

test('Non-Interactive Step Group with Icon', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-step-group--non-interactive-step-group-with-icon&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Non-Interactive Step Group with Icon":
        - list:
          - listitem:
            - text: Book appointment
            - paragraph: Get advice from our partner banks and find the right plan for you.
          - listitem:
            - text: Select fund
            - paragraph: Choose the right fund for your plan from a wide range of funds.
          - listitem:
            - text: Security account
            - paragraph: Open your own securities account together with your bank advisor.
    `);
});
