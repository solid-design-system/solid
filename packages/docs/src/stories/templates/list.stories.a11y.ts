import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-list--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "List with Bolded Text":
              - /url: "#list-with-bolded-text"
    - heading "List" [level=1]
    - heading "List with Bolded Text" [level=3]
    - list:
      - listitem:
        - text: Unordered bold list
        - list:
          - listitem:
            - text: Unordered normal list
            - list:
              - listitem: Unordered normal list
      - listitem: Unordered bold list
      - listitem: Unordered bold list
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('List With Bolded Text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-list--list-with-bolded-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - list:
      - listitem:
        - text: Unordered bold list
        - list:
          - listitem:
            - text: Unordered normal list
            - list:
              - listitem: Unordered normal list
      - listitem: Unordered bold list
      - listitem: Unordered bold list
  `);
});
