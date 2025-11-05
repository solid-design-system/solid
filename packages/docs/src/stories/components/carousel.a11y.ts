import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - button "Previous slide" [disabled]
      - text: 1 / 5
      - button "Next slide"
    `);
});

test('Variant', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--variant&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - button "Previous slide" [disabled]
      - text: 1 / 3
      - button "Next slide"
      - group "Slide 1": Default slot 1
      - button "Previous slide" [disabled]
      - tablist:
        - tab "Go to slide 1 of 3" [selected]
        - tab "Go to slide 2 of 3"
        - tab "Go to slide 3 of 3"
      - button "Next slide"
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - button "Previous slide" [disabled]
      - text: 1 / 3
      - button "Next slide"
    `);
});

test('Loop', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--loop&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - button "Previous slide"
      - text: 1 / 3
      - button "Next slide"
    `);
});

test('Autoplay', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--autoplay&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - button "Previous slide"
      - text: 1 / 3
      - button "Next slide"
      - button "Autoplay"
    `);
});

test('Slides per Page', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--slides-per-page&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - group "Slide 2": Default slot 2
      - button "Previous slide" [disabled]
      - text: 1 / 4
      - button "Next slide"
    `);
});

test('Slides per Move', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--slides-per-move&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - group "Slide 2": Default slot 2
      - group "Slide 3": Default slot 3
      - button "Previous slide" [disabled]
      - text: 1 / 4
      - button "Next slide"
    `);
});

test('Fade', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel--fade&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - group "Slide 2": Default slot 2
      - group "Slide 3": Default slot 3
      - button "Previous slide"
      - text: 1 / 3
      - button "Next slide"
    `);
});
