import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-step-group--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Non Interactive Step Group":
              - /url: "#non-interactive-step-group"
          - listitem:
            - link "Non-Interactive Step Group with Icon":
              - /url: "#non-interactive-step-group-with-icon"
    - heading "Step Group" [level=1]
    - heading "Non Interactive Step Group" [level=3]
    - paragraph: Example of how to set the active step in a step group.
    - group "Non-Interactive Step Group":
      - list:
        - listitem:
          - text: "1"
          - paragraph: Make an appointment
        - listitem: 2 Select funds for savings plan
        - listitem: 3 Open a securities account
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Non-Interactive Step Group with Icon" [level=3]
    - group "Non-Interactive Step Group with Icon":
      - list:
        - listitem:
          - paragraph: 1. Make an appointment
          - paragraph: Get advice from our partner banks and find the right plan for you.
        - listitem:
          - paragraph: 2. Select funds for savings plan
          - paragraph: Choose the right fund for your plan from a wide range of funds.
        - listitem:
          - paragraph: 3. Open a securities account
          - paragraph: Open your own securities account together with your bank advisor.
    - button "Show code"
    - button "Edit on CodePen"
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
        - listitem: 2 Select funds for savings plan
        - listitem: 3 Open a securities account
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
          - paragraph: 1. Make an appointment
          - paragraph: Get advice from our partner banks and find the right plan for you.
        - listitem:
          - paragraph: 2. Select funds for savings plan
          - paragraph: Choose the right fund for your plan from a wide range of funds.
        - listitem:
          - paragraph: 3. Open a securities account
          - paragraph: Open your own securities account together with your bank advisor.
  `);
});
