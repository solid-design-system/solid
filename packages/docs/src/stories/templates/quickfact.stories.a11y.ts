import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quickfact--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Quickfact with Summary":
              - /url: "#quickfact-with-summary"
          - listitem:
            - link "Quickfact with Description":
              - /url: "#quickfact-with-description"
          - listitem:
            - link "Grouping":
              - /url: "#grouping"
    - heading "Quickfact" [level=1]
    - heading "Quickfact with Summary" [level=3]
    - text: /Over \\d+,\\d+ employees in 9 international locations/
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Quickfact with Description" [level=3]
    - paragraph: Partnership
    - paragraph: "Union Investment is part of the Volksbanken Raiffeisenbanken cooperative financial network. The cooperative model is based on a simple idea: when people join forces, they are much stronger together: \\"What one cannot do alone, many can\\"."
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Grouping" [level=3]
    - paragraph: This sample shows how to group “sd-quickfacts”. Additional JavaScript is used to enable closing all other quickfacts when one is opened and to equalize the height of all summaries in a row. Open the "Show code" section to see the detailed implementation.
    - group:
      - button "Lorem ipsum in medias Con sectetur adipiscing elit magna cum laude perfides":
        - paragraph: Lorem ipsum in medias
    - group:
      - button "Lorem ipsum in medias Con sectetur adipiscing elit magna cum laude perfides":
        - paragraph: Lorem ipsum in medias
    - group:
      - button "Lorem ipsum in medias Con sectetur adipiscing elit magna cum laude perfides":
        - paragraph: Lorem ipsum in medias
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Quickfact with Summary', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quickfact--quickfact-with-summary&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: /Over \\d+,\\d+ employees in 9 international locations/
  `);
});

test('Quickfact with Description', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quickfact--quickfact-with-description&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: Partnership
    - paragraph: "Union Investment is part of the Volksbanken Raiffeisenbanken cooperative financial network. The cooperative model is based on a simple idea: when people join forces, they are much stronger together: \\"What one cannot do alone, many can\\"."
  `);
});

test('Grouping', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quickfact--grouping&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group:
      - button "Lorem ipsum in medias Con sectetur adipiscing elit magna cum laude perfides":
        - paragraph: Lorem ipsum in medias
    - group:
      - button "Lorem ipsum in medias Con sectetur adipiscing elit magna cum laude perfides":
        - paragraph: Lorem ipsum in medias
    - group:
      - button "Lorem ipsum in medias Con sectetur adipiscing elit magna cum laude perfides":
        - paragraph: Lorem ipsum in medias
  `);
});
