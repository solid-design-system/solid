import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media-screenshots-sd-teaser-media--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot
    `);
});

test('Variant', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media-screenshots-sd-teaser-media--variant&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "variant Y axis Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
            - cell "variant":
              - code: variant
            - cell "Y axis"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
          - row "white Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
            - cell "white":
              - code: white
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
          - row /neutral-\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Default slot A skyline of a city by night/:
            - cell /neutral-\\d+/:
              - code: /neutral-\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
          - row "primary Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
            - cell "primary":
              - code: primary
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
          - row /primary-\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Default slot A skyline of a city by night/:
            - cell /primary-\\d+/:
              - code: /primary-\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
          - row "gradient-light Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
            - cell "gradient-light":
              - code: gradient-light
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
          - row "gradient-dark Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
            - cell "gradient-dark":
              - code: gradient-dark
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot A skyline of a city by night":
              - img "A skyline of a city by night"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media-screenshots-sd-teaser-media--slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "default":
            - cell
            - cell "default":
              - code: default
        - rowgroup:
          - row "Y axis Teaser's Headline Teaser's Meta information Test":
            - cell "Y axis"
            - cell "Teaser's Headline Teaser's Meta information Test":
              - img "Test"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "media":
            - cell
            - cell "media":
              - code: media
        - rowgroup:
          - row "Y axis Teaser's Headline Teaser's Meta information Teaser's Main content":
            - cell "Y axis"
            - cell "Teaser's Headline Teaser's Meta information Teaser's Main content"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "meta":
            - cell
            - cell "meta":
              - code: meta
        - rowgroup:
          - row "Y axis Teaser's Headline Teaser's Main content Test":
            - cell "Y axis"
            - cell "Teaser's Headline Teaser's Main content Test":
              - img "Test"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "headline":
            - cell
            - cell "headline":
              - code: headline
        - rowgroup:
          - row "Y axis Teaser's Meta information Teaser's Main content Test":
            - cell "Y axis"
            - cell "Teaser's Meta information Teaser's Main content Test":
              - img "Test"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "expandable":
            - cell
            - cell "expandable":
              - code: expandable
        - rowgroup:
          - row "Y axis Teaser's Headline Teaser's Meta information Teaser's Main content Test":
            - cell "Y axis"
            - cell "Teaser's Headline Teaser's Meta information Teaser's Main content Test":
              - img "Test"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media-screenshots-sd-teaser-media--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-teaser-media::part(...){outline: solid 2px red} base Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"':
            - 'cell "sd-teaser-media::part(...){outline: solid 2px red}"':
              - code: "sd-teaser-media::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
          - row "media Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot":
            - cell "media":
              - code: media
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
          - row "content Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot":
            - cell "content":
              - code: content
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
          - row "meta Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot":
            - cell "meta":
              - code: meta
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
          - row "headline Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot":
            - cell "headline":
              - code: headline
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
          - row "main Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot":
            - cell "main":
              - code: main
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
          - row "expandable Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot":
            - cell "expandable":
              - code: expandable
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Default slot Media slot"
    `);
});

test('Samples: Teaser-Media', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media-screenshots-sd-teaser-media--samples&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Not expandable teaser-media" [level=3]
      - text: /\\d+\\.\\d+\\.\\d+ \\| Author name/
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - link "Link":
        - /url: "#"
      - img "A skyline of a city"
      - heading "Expandable teaser-media" [level=3]
      - text: /\\d+\\.\\d+\\.\\d+ \\| Author name/
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      - link "Link":
        - /url: "#"
      - paragraph: "@Copyright Lorem ipsum"
      - img "A skyline of a city"
    `);
});
