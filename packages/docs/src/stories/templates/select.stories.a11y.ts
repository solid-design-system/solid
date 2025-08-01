import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-select--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
    - heading "Select" [level=1]
    - list:
      - listitem: "Label: Additionally a label can be shown for each option group."
      - listitem:
        - text: "Divider: Use"
        - code: sd-divider
        - text: to group option items visually.
      - listitem: "Accessibility hint: group labels will be neglected by most assistive devices."
    - text: City/Region
    - combobox "City/Region"
    - button "City/Region"
    - text: Country
    - combobox "Country"
    - button "Country"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Grouping Options', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-select--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: City/Region
    - combobox "City/Region"
    - button "City/Region"
    - text: Country
    - combobox "Country"
    - button "Country"
  `);
});
