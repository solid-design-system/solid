import { test, expect } from '@playwright/test';

test('Carousel with Images', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-carousel--carousel-with-images&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Carousel with images":
        - group "Slide 1":
          - img "Modern, waved architecture with blue sky in background"
        - group "Slide 2":
          - img "A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
        - group "Slide 3":
          - img "Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
        - button "Previous slide" [disabled]
        - button "Next slide"
    `);
});

test('Loop and Autoplay', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-carousel--loop-and-autoplay&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - region "Carousel in loop and autoplay":
        - group "Slide 2":
          - img "A couple of friends sitting and laughing together on a bed with a dog."
        - button "Previous slide"
        - button "Next slide"
        - button "Autoplay" [pressed]
    `);
});
