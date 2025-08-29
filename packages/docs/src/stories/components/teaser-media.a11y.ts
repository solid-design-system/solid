import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Headline Media Teaser Meta slot Default slot
      - img "Generic alt"
    `);
});

test('Variant', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media--variant&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Headline Media Teaser (white – default)" [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - img "Generic alt"
      - heading "Headline Media Teaser (primary)" [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - img "Generic alt"
      - heading /Headline Media Teaser \\(primary-\\d+\\)/ [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - img "Generic alt"
      - heading /Headline Media Teaser \\(neutral-\\d+\\)/ [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - img "Generic alt"
      - heading "Headline Media Teaser (gradient-dark)" [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - img "Generic alt"
      - heading "Headline Media Teaser (gradient-light)" [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      - img "Generic alt"
    `);
});

test('Default, Media and Headline Slot', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media--default-media-and-headline-slot&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Headline Media Teaser" [level=3]
      - text: Default slot
      - img "Generic alt"
    `);
});

test('Meta Slot', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media--meta-slot&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Headline Media Teaser" [level=3]
      - text: Meta slot
      - img "Generic alt"
    `);
});

test('Expandable Slot', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-teaser-media--expandable-slot&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Headline Media Teaser" [level=3]
      - img "Generic alt"
    `);
});
