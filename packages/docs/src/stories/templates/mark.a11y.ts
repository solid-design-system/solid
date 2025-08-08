import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-mark--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Headline with Mark":
              - /url: "#headline-with-mark"
          - listitem:
            - link "Display with Mark":
              - /url: "#display-with-mark"
    - heading "Mark" [level=1]
    - paragraph:
      - strong: "Accessibility Hint:"
      - text: /For the green accent color in the mark, ensure a minimum font size of \\d+\\.\\d+ pixels when bolded and \\d+ pixels when in regular weight\\./
    - heading "Headline with Mark" [level=3]
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Display with Mark" [level=3]
    - paragraph:
      - mark: Union Investment
      - text: at a glance
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Headline with Mark', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-mark--headline-with-mark&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
    - heading "Real estate investments in the Americas" [level=4]:
      - mark: in the Americas
  `);
});

test('Display with Mark', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-mark--display-with-mark&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph:
      - mark: Union Investment
      - text: at a glance
  `);
});
