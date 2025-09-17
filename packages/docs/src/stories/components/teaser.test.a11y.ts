import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Always insert one semantically correct heading element here (e. g. <h2>) Meta slot
      - group: Main slot
      - text: Media slot
    `);
});

test('Variant x Inset', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--variant-and-inset&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "inset":
            - cell
            - cell
            - cell "inset":
              - code: inset
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "variant Y axis Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "variant":
              - code: variant
            - cell "Y axis"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "white Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "white":
              - code: white
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row /white border-neutral-\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot/:
            - cell /white border-neutral-\\d+/:
              - code: /white border-neutral-\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row /neutral-\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot/:
            - cell /neutral-\\d+/:
              - code: /neutral-\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "primary Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "primary":
              - code: primary
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row /primary-\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot/:
            - cell /primary-\\d+/:
              - code: /primary-\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
    `);
});

test('Inset x Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--inset-and-orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "breakpoint":
            - cell
            - cell
            - cell "breakpoint":
              - code: breakpoint
          - row /breakpoint = 0 breakpoint = \\d+/:
            - cell
            - cell
            - cell "breakpoint = 0":
              - code: breakpoint = 0
            - cell /breakpoint = \\d+/:
              - code: /breakpoint = \\d+/
        - rowgroup:
          - row "inset true Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "inset":
              - code: inset
            - cell "true":
              - code: "true"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "false Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "false":
              - code: "false"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
    `);
});

test('Empty Meta Slot', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--no-meta&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "breakpoint":
            - cell
            - cell
            - cell "breakpoint":
              - code: breakpoint
          - row /breakpoint = 0 breakpoint = \\d+/:
            - cell
            - cell
            - cell "breakpoint = 0":
              - code: breakpoint = 0
            - cell /breakpoint = \\d+/:
              - code: /breakpoint = \\d+/
        - rowgroup:
          - row "inset true Always insert one semantically correct heading element here (e. g. <h2>) Media slot Always insert one semantically correct heading element here (e. g. <h2>) Media slot":
            - cell "inset":
              - code: inset
            - cell "true":
              - code: "true"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Media slot":
              - group: Main slot
          - row "false Always insert one semantically correct heading element here (e. g. <h2>) Media slot Always insert one semantically correct heading element here (e. g. <h2>) Media slot":
            - cell "false":
              - code: "false"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Media slot":
              - group: Main slot
    `);
});

test('Media and Content Distribution', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--distribution-ratio&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row /media and content distribution --distribution-media: \\d+%, --distribution-content: \\d+% Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot/':
            - cell "media and content distribution":
              - code: media and content distribution
            - 'cell /--distribution-media: \\d+%, --distribution-content: \\d+%/':
              - code: "/--distribution-media: \\\\d+%, --distribution-content: \\\\d+%/"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - 'row "--distribution-media: 200px, sd-teaser::part(media){flex-shrink: 0;} Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot"':
            - 'cell "--distribution-media: 200px, sd-teaser::part(media){flex-shrink: 0;}"':
              - code: "--distribution-media: 200px, sd-teaser::part(media){flex-shrink: 0;}"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
    `);
});

test('Breakpoint', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--breakpoint&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "breakpoint 0 Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "breakpoint":
              - code: breakpoint
            - cell "0":
              - code: "0"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row /\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot/:
            - cell /\\d+/:
              - code: /\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row /\\d+ Always insert one semantically correct heading element here \\(e\\. g\\. <h2>\\) Meta slot Media slot/:
            - cell /\\d+/:
              - code: /\\d+/
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
    `);
});

test('Headline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--headline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "headline h1 h1 Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "h1":
              - code: h1
            - cell "h1 Meta slot Media slot":
              - heading "h1" [level=1]
              - group: Main slot
          - row "h1 + sd-link h1 + sd-link Meta slot Media slot":
            - cell "h1 + sd-link":
              - code: h1 + sd-link
            - cell "h1 + sd-link Meta slot Media slot":
              - heading "h1 + sd-link" [level=1]:
                - link "h1 + sd-link":
                  - /url: "#"
              - group: Main slot
      - table:
        - rowgroup
        - rowgroup:
          - row "headline h2 h2 Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "h2":
              - code: h2
            - cell "h2 Meta slot Media slot":
              - heading "h2" [level=2]
              - group: Main slot
          - row "h2 + sd-link h2 + sd-link Meta slot Media slot":
            - cell "h2 + sd-link":
              - code: h2 + sd-link
            - cell "h2 + sd-link Meta slot Media slot":
              - heading "h2 + sd-link" [level=2]:
                - link "h2 + sd-link":
                  - /url: "#"
              - group: Main slot
      - table:
        - rowgroup
        - rowgroup:
          - row "headline h3 h3 Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "h3":
              - code: h3
            - cell "h3 Meta slot Media slot":
              - heading "h3" [level=3]
              - group: Main slot
          - row "h3 + sd-link h3 + sd-link Meta slot Media slot":
            - cell "h3 + sd-link":
              - code: h3 + sd-link
            - cell "h3 + sd-link Meta slot Media slot":
              - heading "h3 + sd-link" [level=3]:
                - link "h3 + sd-link":
                  - /url: "#"
              - group: Main slot
      - table:
        - rowgroup
        - rowgroup:
          - row "headline h4 h4 Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "h4":
              - code: h4
            - cell "h4 Meta slot Media slot":
              - heading "h4" [level=4]
              - group: Main slot
          - row "h4 + sd-link h4 + sd-link Meta slot Media slot":
            - cell "h4 + sd-link":
              - code: h4 + sd-link
            - cell "h4 + sd-link Meta slot Media slot":
              - heading "h4 + sd-link" [level=4]:
                - link "h4 + sd-link":
                  - /url: "#"
              - group: Main slot
      - table:
        - rowgroup
        - rowgroup:
          - row "headline h5 h5 Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "h5":
              - code: h5
            - cell "h5 Meta slot Media slot":
              - heading "h5" [level=5]
              - group: Main slot
          - row "h5 + sd-link h5 + sd-link Meta slot Media slot":
            - cell "h5 + sd-link":
              - code: h5 + sd-link
            - cell "h5 + sd-link Meta slot Media slot":
              - heading "h5 + sd-link" [level=5]:
                - link "h5 + sd-link":
                  - /url: "#"
              - group: Main slot
      - table:
        - rowgroup
        - rowgroup:
          - row "headline h6 h6 Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "h6":
              - code: h6
            - cell "h6 Meta slot Media slot":
              - heading "h6" [level=6]
              - group: Main slot
          - row "h6 + sd-link h6 + sd-link Meta slot Media slot":
            - cell "h6 + sd-link":
              - code: h6 + sd-link
            - cell "h6 + sd-link Meta slot Media slot":
              - heading "h6 + sd-link" [level=6]:
                - link "h6 + sd-link":
                  - /url: "#"
              - group: Main slot
    `);
});

test('Reversed layout x Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--reversed-layout-and-orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "breakpoint":
            - cell
            - cell
            - cell "breakpoint":
              - code: breakpoint
          - row /breakpoint = 0 breakpoint = \\d+/:
            - cell
            - cell
            - cell "breakpoint = 0":
              - code: breakpoint = 0
            - cell /breakpoint = \\d+/:
              - code: /breakpoint = \\d+/
        - rowgroup:
          - row "reversed-layout true Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "reversed-layout":
              - code: reversed-layout
            - cell "true":
              - code: "true"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "false Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "false":
              - code: "false"
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--slots&viewMode=story'
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
              - heading "Teaser's Headline" [level=2]
              - paragraph: Teaser's Meta information
              - group
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
          - row "Y axis Teaser's Headline Teaser's Meta information":
            - cell "Y axis"
            - cell "Teaser's Headline Teaser's Meta information":
              - heading "Teaser's Headline" [level=2]
              - paragraph: Teaser's Meta information
              - group:
                - paragraph: Teaser's Main content
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
          - row "Y axis Teaser's Headline Test":
            - cell "Y axis"
            - cell "Teaser's Headline Test":
              - heading "Teaser's Headline" [level=2]
              - group:
                - paragraph: Teaser's Main content
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
          - row "Y axis Teaser's Meta information Test":
            - cell "Y axis"
            - cell "Teaser's Meta information Test":
              - paragraph: Teaser's Meta information
              - group:
                - paragraph: Teaser's Main content
              - img "Test"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-screenshots-sd-teaser--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-teaser::part(...){outline: solid 2px red} base Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot"':
            - 'cell "sd-teaser::part(...){outline: solid 2px red}"':
              - code: "sd-teaser::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "media Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "media":
              - code: media
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "content Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "content":
              - code: content
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "meta Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "meta":
              - code: meta
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "headline Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "headline":
              - code: headline
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
          - row "main Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
            - cell "main":
              - code: main
            - cell "Always insert one semantically correct heading element here (e. g. <h2>) Meta slot Media slot":
              - group: Main slot
    `);
});
