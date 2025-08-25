import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--default&viewMode=story'
  );
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
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--variant&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "variant dot Carousel has 5 slides Previous slide Next slide":
            - cell "variant":
              - code: variant
            - cell "dot":
              - code: dot
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
          - row "number Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "number":
              - code: number
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "dot number":
            - cell
            - cell
            - cell "dot":
              - code: dot
            - cell "number":
              - code: number
        - rowgroup:
          - row "inverted true Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "inverted":
              - code: inverted
            - cell "true":
              - code: "true"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "false Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "false":
              - code: "false"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
    `);
});

test('Loop', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--loop&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "loop true Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "loop":
              - code: loop
            - cell "true":
              - code: "true"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 5": Default slot 5
              - button "Previous slide"
              - button "Next slide"
          - row "false Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "false":
              - code: "false"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
    `);
});

test('Slides Per Page', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--slides-per-page&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "slides-per-page 1 Carousel has 5 slides Previous slide Next slide":
            - cell "slides-per-page":
              - code: slides-per-page
            - cell "1":
              - code: "1"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
          - row "2 Carousel has 5 slides Previous slide Next slide":
            - cell "2":
              - code: "2"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - group "Slide 2": Default slot 2
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 4" [selected]
                - tab "Go to slide 2 of 4"
                - tab "Go to slide 3 of 4"
                - tab "Go to slide 4 of 4"
              - button "Next slide"
          - row "3 Carousel has 5 slides Previous slide Next slide":
            - cell "3":
              - code: "3"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - group "Slide 2": Default slot 2
              - group "Slide 3": Default slot 3
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 3" [selected]
                - tab "Go to slide 2 of 3"
                - tab "Go to slide 3 of 3"
              - button "Next slide"
    `);
});

test('Slides Per Move', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--slides-per-move&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "slides-per-move 2 Carousel has 6 slides Previous slide 1 / 3 Next slide":
            - cell "slides-per-move":
              - code: slides-per-move
            - cell "2":
              - code: "2"
            - cell "Carousel has 6 slides Previous slide 1 / 3 Next slide":
              - group "Slide 5": Default slot 5
              - group "Slide 6": Default slot 6
              - button "Previous slide"
              - button "Next slide"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "dot number":
            - cell
            - cell
            - cell "dot":
              - code: dot
            - cell "number":
              - code: number
        - rowgroup:
          - 'row "sd-carousel::part(...){outline: solid 2px red} base Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide"':
            - 'cell "sd-carousel::part(...){outline: solid 2px red}"':
              - code: "sd-carousel::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "scroll-container Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "scroll-container":
              - code: scroll-container
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "controls Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "controls":
              - code: controls
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "pagination-dot Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "pagination-dot":
              - code: pagination-dot
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "pagination-number Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "pagination-number":
              - code: pagination-number
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "pagination-item Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "pagination-item":
              - code: pagination-item
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "pagination-item--active Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "pagination-item--active":
              - code: pagination-item--active
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "navigation Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "navigation":
              - code: navigation
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "navigation-button Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "navigation-button":
              - code: navigation-button
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "navigation-button--previous Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "navigation-button--previous":
              - code: navigation-button--previous
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "navigation-button--next Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "navigation-button--next":
              - code: navigation-button--next
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
          - row "autoplay-controls Carousel has 5 slides Previous slide Next slide Carousel has 5 slides Previous slide 1 / 5 Next slide":
            - cell "autoplay-controls":
              - code: autoplay-controls
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
            - cell "Carousel has 5 slides Previous slide 1 / 5 Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide" [disabled]
              - button "Next slide"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Slide 1": Default slot 1
      - button "Previous slide" [disabled]
      - text: 1 / 5
      - button "Next slide"
    `);
});

test('Autoplay', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--autoplay&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "autoplay true Carousel has 5 slides Previous slide Next slide Autoplay":
            - cell "autoplay":
              - code: autoplay
            - cell "true":
              - code: "true"
            - cell "Carousel has 5 slides Previous slide Next slide Autoplay":
              - group "Slide 2": Default slot 2
              - button "Previous slide"
              - tablist:
                - tab "Go to slide 1 of 5"
                - tab "Go to slide 2 of 5" [selected]
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
              - button "Autoplay" [pressed]
          - row "false Carousel has 5 slides Previous slide Next slide":
            - cell "false":
              - code: "false"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 5": Default slot 5
              - button "Previous slide"
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
    `);
});

test('Fade', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-carousel-screenshots-sd-carousel--fade&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "fade true Carousel has 5 slides Previous slide Next slide":
            - cell "fade":
              - code: fade
            - cell "true":
              - code: "true"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - group "Slide 2": Default slot 2
              - group "Slide 3": Default slot 3
              - group "Slide 4": Default slot 4
              - group "Slide 5": Default slot 5
              - button "Previous slide"
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
          - row "false Carousel has 5 slides Previous slide Next slide":
            - cell "false":
              - code: "false"
            - cell "Carousel has 5 slides Previous slide Next slide":
              - group "Slide 1": Default slot 1
              - button "Previous slide"
              - tablist:
                - tab "Go to slide 1 of 5" [selected]
                - tab "Go to slide 2 of 5"
                - tab "Go to slide 3 of 5"
                - tab "Go to slide 4 of 5"
                - tab "Go to slide 5 of 5"
              - button "Next slide"
    `);
});
