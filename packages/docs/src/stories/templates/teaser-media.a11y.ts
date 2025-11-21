import { test, expect } from '@playwright/test';

test('Teaser Media with Link', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser-media--teaser-media-with-link&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Market turnaround in sight" [level=3]
      - text: /August \\d+\\| Olaf Janßen/
      - paragraph: After a long wait for good news, real estate investors are now seeing the first signs of a recovery on the European commercial real estate markets.
      - link "Research view":
        - /url: "#"
      - img "Close-up of hands stacking coins into small piles on a table, suggesting financial planning or saving."
      - heading "Your contact person" [level=3]
      - paragraph: If you have any questions or would like to obtain further information, please find your dedicated contact below.
      - link "Feel free to contact us":
        - /url: "#"
      - img "Two professionals representing accessible customer support."
      - heading "USA or Europe? It depends on the mix" [level=3]
      - paragraph: "A positive growth environment, the tech boom and government investment incentives show this: The USA is ahead of the eurozone in many respects. Moritz Bauer, Head of Investment Strategy at Union Investment, explains why investors should nevertheless also keep an eye on European investments."
      - text: /\\d+\\.\\d+\\.\\d+/
      - link "Read now":
        - /url: "#"
      - img "A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
    `);
});

test('Teaser Media Overrides', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser-media--teaser-media-overrides&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Gender" [level=3]
      - img "Diverse group of individuals in a casual meeting setting, emphasizing gender equality and collaboration."
    `);
});

test('Teaser Media with Copyright', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser-media--teaser-media-with-copyright&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Headline Media Teaser" [level=3]
      - text: /Lorem ipsum dolor sit amet, consectetur adipiscing elit\\. © Union Investment \\d+/
      - heading "Headline Media Teaser" [level=3]
      - text: /Lorem ipsum dolor sit amet, consectetur adipiscing elit\\. © Union Investment \\d+/
    `);
});
