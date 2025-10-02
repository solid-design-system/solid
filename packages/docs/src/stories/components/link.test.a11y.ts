import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Link":
        - /url: "#"
    `);
});

test('Disabled × Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--inverted-and-disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "href":
            - cell
            - cell
            - cell "href":
              - code: href
          - row "#link –":
            - cell
            - cell
            - cell "#link":
              - code: "#link"
            - cell "–":
              - code: –
        - rowgroup:
          - row "inverted false Link Link":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Link":
              - link "Link":
                - /url: "#link"
            - cell "Link"
          - row "true Link Link":
            - cell "true":
              - code: "true"
            - cell "Link":
              - link "Link":
                - /url: "#link"
            - cell "Link"
    `);
});

test('Bold', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--bold-in-main-slot&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "main-slot":
            - cell
            - cell "main-slot":
              - code: main-slot
          - row "Link <b>Link</b>":
            - cell
            - cell "Link":
              - code: Link
            - cell "<b>Link</b>":
              - code: <b>Link</b>
        - rowgroup:
          - row "Y axis Link Link":
            - cell "Y axis"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
    `);
});

test('Size × Icon Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--size-and-icon-slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "standalone=\\"false\\"":
            - cell "standalone=\\"false\\"":
              - code: standalone="false"
          - row "slot=\\"icon-...\\"":
            - cell
            - cell
            - cell "slot=\\"icon-...\\"":
              - code: slot="icon-..."
          - row "– left right":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "left":
              - code: left
            - cell "right":
              - code: right
        - rowgroup:
          - row "size inherit Link Link Link":
            - cell "size":
              - code: size
            - cell "inherit":
              - code: inherit
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "lg Link Link Link":
            - cell "lg":
              - code: lg
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "sm Link Link Link":
            - cell "sm":
              - code: sm
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
      - table:
        - rowgroup:
          - row "standalone=\\"true\\"":
            - cell "standalone=\\"true\\"":
              - code: standalone="true"
          - row "slot=\\"icon-...\\"":
            - cell
            - cell
            - cell "slot=\\"icon-...\\"":
              - code: slot="icon-..."
          - row "– left right":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "left":
              - code: left
            - cell "right":
              - code: right
        - rowgroup:
          - row "size inherit Link Link Link":
            - cell "size":
              - code: size
            - cell "inherit":
              - code: inherit
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "lg Link Link Link":
            - cell "lg":
              - code: lg
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "sm Link Link Link":
            - cell "sm":
              - code: sm
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
    `);
});

test('Inverted × Icon Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--inverted-and-icon-slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "slot=\\"icon-...\\"":
            - cell
            - cell
            - cell "slot=\\"icon-...\\"":
              - code: slot="icon-..."
          - row "– left right":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "left":
              - code: left
            - cell "right":
              - code: right
        - rowgroup:
          - row "inverted false Link Link Link":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "true Link Link Link":
            - cell "true":
              - code: "true"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
            - cell "Link":
              - link "Link":
                - /url: "#"
    `);
});

test('Standalone × Icon Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--standalone-and-icon-slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "example without surrounding content":
            - cell "example without surrounding content":
              - code: example without surrounding content
          - row "icon-...":
            - cell
            - cell
            - cell "icon-...":
              - code: icon-...
          - row "– left right":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "left":
              - code: left
            - cell "right":
              - code: right
        - rowgroup:
          - row "standalone false Magna ex ex elit cupidatat non esse. Magna ex ex elit cupidatat non esse. Magna ex ex elit cupidatat non esse.":
            - cell "standalone":
              - code: standalone
            - cell "false":
              - code: "false"
            - cell "Magna ex ex elit cupidatat non esse.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Magna ex ex elit cupidatat non esse.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Magna ex ex elit cupidatat non esse.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
          - row "true Magna ex ex elit cupidatat non esse. Magna ex ex elit cupidatat non esse. Magna ex ex elit cupidatat non esse.":
            - cell "true":
              - code: "true"
            - cell "Magna ex ex elit cupidatat non esse.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Magna ex ex elit cupidatat non esse.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Magna ex ex elit cupidatat non esse.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
      - table:
        - rowgroup:
          - row "example with surrounding content":
            - cell "example with surrounding content":
              - code: example with surrounding content
          - row "icon-...":
            - cell
            - cell
            - cell "icon-...":
              - code: icon-...
          - row "– left right":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "left":
              - code: left
            - cell "right":
              - code: right
        - rowgroup:
          - row "standalone false Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur. Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur. Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
            - cell "standalone":
              - code: standalone
            - cell "false":
              - code: "false"
            - cell "Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
          - row "true Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur. Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur. Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
            - cell "true":
              - code: "true"
            - cell "Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
            - cell "Qui do. Magna ex ex elit cupidatat non esse. Eiusmod minim excepteur.":
              - link "Magna ex ex elit cupidatat non esse.":
                - /url: "#"
    `);
});

test('Icon Alignment', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--icon-alignment&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-link::part(base){align-items: ...;} start In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate."':
            - 'cell "sd-link::part(base){align-items: ...;}"':
              - code: "sd-link::part(base){align-items: ...;}"
            - cell "start":
              - code: start
            - cell "In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
              - link "In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
                - /url: "#"
          - row "center In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
            - cell "center":
              - code: center
            - cell "In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
              - link "In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
                - /url: "#"
          - row "end In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
            - cell "end":
              - code: end
            - cell "In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
              - link "In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.":
                - /url: "#"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-link::part(...){outline: solid 2px red} base Link"':
            - 'cell "sd-link::part(...){outline: solid 2px red}"':
              - code: "sd-link::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "label Link":
            - cell "label":
              - code: label
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "icon-left Link":
            - cell "icon-left":
              - code: icon-left
            - cell "Link":
              - link "Link":
                - /url: "#"
          - row "icon-right Link":
            - cell "icon-right":
              - code: icon-right
            - cell "Link":
              - link "Link":
                - /url: "#"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-link-screenshots-sd-link--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - link "Link":
        - /url: "#"
    `);
});
