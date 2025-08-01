import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Input with Tooltip":
              - /url: "#input-with-tooltip"
          - listitem:
            - link "Select with Tooltip":
              - /url: "#select-with-tooltip"
          - listitem:
            - link "Textarea with Tooltip":
              - /url: "#textarea-with-tooltip"
          - listitem:
            - link "Radio Group with Tooltip":
              - /url: "#radio-group-with-tooltip"
          - listitem:
            - link "Checkbox Group with Tooltip":
              - /url: "#checkbox-group-with-tooltip"
          - listitem:
            - link "Tooltip with Bolded Text":
              - /url: "#tooltip-with-bolded-text"
    - heading "Tooltip" [level=1]
    - heading "Input with Tooltip" [level=3]
    - text: Liquid assets
    - textbox "Liquid assets"
    - text: EUR
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Select with Tooltip" [level=3]
    - text: Access role
    - combobox "Access role"
    - button "Access role"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Textarea with Tooltip" [level=3]
    - text: Project description
    - textbox "Project description": A solid design system is more than a collection of components; it’s a living document that aligns teams, maintains consistency, and supports scalability. Here, you can capture the reasoning behind design choices, specific use cases, and any nuances that will aid other team members in understanding how to implement this component effectively.
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Radio Group with Tooltip" [level=3]
    - radiogroup "Choose your subscription plan":
      - radio "Basic plan"
      - radio "Standard plan"
      - radio "Premium plan"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Checkbox Group with Tooltip" [level=3]
    - group "Select your interests":
      - checkbox "Subscribe to our newsletters"
      - text: Subscribe to our newsletters
      - checkbox "Receive our promotions"
      - text: Receive our promotions
      - checkbox "Get our product updates"
      - text: Get our product updates
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Tooltip with Bolded Text" [level=3]
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Input with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--input-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Liquid assets
    - textbox "Liquid assets"
    - text: EUR
  `);
});

test('Select with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--select-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Access role
    - combobox "Access role"
    - button "Access role"
  `);
});

test('Textarea with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--text-area-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Project description
    - textbox "Project description": A solid design system is more than a collection of components; it’s a living document that aligns teams, maintains consistency, and supports scalability. Here, you can capture the reasoning behind design choices, specific use cases, and any nuances that will aid other team members in understanding how to implement this component effectively.
  `);
});

test('Radio Group with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--radio-group-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - radiogroup "Choose your subscription plan":
      - radio "Basic plan"
      - radio "Standard plan"
      - radio "Premium plan"
  `);
});

test('Checkbox Group with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--checkbox-group-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group "Select your interests":
      - checkbox "Subscribe to our newsletters"
      - text: Subscribe to our newsletters
      - checkbox "Receive our promotions"
      - text: Receive our promotions
      - checkbox "Get our product updates"
      - text: Get our product updates
  `);
});

test('Tooltip with Bolded Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tooltip--tooltip-with-bolded-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
  `);
});
