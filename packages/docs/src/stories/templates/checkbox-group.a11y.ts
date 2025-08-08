import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-checkbox-group--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Default":
              - /url: "#default"
          - listitem:
            - link "Required Checkbox Group":
              - /url: "#required-checkbox-group"
    - heading "Checkbox Group" [level=1]
    - heading "Default" [level=3]
    - paragraph: Example of a checkbox group with a label and two checked checkboxes.
    - group "Checkbox group label":
      - checkbox "Checkbox 1" [checked]
      - checkbox "Checkbox 2" [checked]
      - checkbox "Checkbox 3"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Required Checkbox Group" [level=3]
    - paragraph: Example of a required checkbox group implementation. Can be used to require the user to select one or more checkboxes from a group.
    - paragraph:
      - strong: "Hints:"
    - list:
      - listitem: Add an * to the label to indicate that the checkbox group is required.
      - listitem: An error message should be displayed if the user attempts to submit the form without selecting any checkboxes.
    - paragraph:
      - strong: "Accessibility hint:"
      - text: Add the
      - code: aria-required
      - text: attribute and set it to true to indicate that the checkbox group is required.
    - group "Required checkbox group*":
      - checkbox "Checkbox 1"
      - checkbox "Checkbox 2"
      - checkbox "Checkbox 3"
    - button "Submit"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-checkbox-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group "Checkbox group label":
      - checkbox "Checkbox 1" [checked]
      - checkbox "Checkbox 2" [checked]
      - checkbox "Checkbox 3"
  `);
});

test('Required Checkbox Group', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-checkbox-group--required-checkbox-group&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group "Required checkbox group*":
      - checkbox "Checkbox 1"
      - checkbox "Checkbox 2"
      - checkbox "Checkbox 3"
    - button "Submit"
  `);
});
