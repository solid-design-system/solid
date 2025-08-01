import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-video--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Video with Description":
              - /url: "#video-with-description"
          - listitem:
            - link "Video with Copyright":
              - /url: "#video-with-copyright"
    - heading "Video" [level=1]
    - heading "Video with Description" [level=3]
    - figure "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.":
      - button "Play Video"
      - img "Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
      - text: Your browser does not support the video tag. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Video with Copyright" [level=3]
    - button "Play Video"
    - img "Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
    - text: /Your browser does not support the video tag\\. © Union Investment \\d+/
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

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
      - text: Your browser does not support the video tag. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
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
    - text: /Your browser does not support the video tag\\. © Union Investment \\d+/
  `);
});
