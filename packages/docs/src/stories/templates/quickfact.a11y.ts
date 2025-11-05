import { test, expect } from '@playwright/test';

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
