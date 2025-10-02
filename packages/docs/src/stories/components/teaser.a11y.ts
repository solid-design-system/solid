import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Always insert one semantically correct heading element here (e. g. <h2>) Meta slot
      - group: Main slot
      - text: Media slot
    `);
});

test('Variant', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--variant&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Teaser with white background" [level=3]
      - group:
        - paragraph: Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
      - heading /Teaser with white background and border neutral-\\d+/ [level=3]
      - group:
        - paragraph: Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
      - heading /Teaser with neutral-\\d+ background/ [level=3]
      - group:
        - paragraph: Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
      - heading /Teaser with primary-\\d+ background/ [level=3]
      - group:
        - paragraph: Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
      - heading "Teaser with primary background" [level=3]
      - group:
        - paragraph: Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
    `);
});

test('Default and Headline Slot', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--default-and-headline-slot&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Lorem ipsum sic semper" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});

test('Media Slot', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--media-slot&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Lorem ipsum sic semper" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});

test('Meta Slot', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--meta-slot&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Lorem ipsum sic semper" [level=3]
      - time: /\\d+\\.\\d+\\.\\d+\\|/
      - text: Author name
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});

test('Inset', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--inset&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Teaser with inset Padding" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});

test('Breakpoint', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--breakpoint&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Horizontal" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
      - heading "Vertical" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});

test('Reverse', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--reverse&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Horizontal" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});

test('Distribution', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser--distribution&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Lorem ipsum sic semper" [level=3]
      - group:
        - paragraph: Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt nulla incididunt.
    `);
});
