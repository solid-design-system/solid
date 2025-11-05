import { test, expect } from '@playwright/test';

test('Video with Description', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-video--video-with-description&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - figure "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.":
        - button "Play Video"
        - img "Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
    `);
});

test('Video with Copyright', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-video--video-with-copyright&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Play Video"
      - img "Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
      - text: /© Union Investment \\d+/
    `);
});
