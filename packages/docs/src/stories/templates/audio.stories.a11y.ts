import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-audio--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "sd-audio with text":
              - /url: "#sd-audio-with-text"
          - listitem:
            - link "sd-audio with sd-headline":
              - /url: "#sd-audio-with-sd-headline"
          - listitem:
            - link "sd-audio with sd-teaser":
              - /url: "#sd-audio-with-sd-teaser"
          - listitem:
            - link "sd-audio animated":
              - /url: "#sd-audio-animated"
    - heading "Audio" [level=1]
    - heading "sd-audio with text" [level=3]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    - paragraph: Lorem ipsum sic semeper
    - button "Playback Speed (1x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - text: /\\d+:\\d+ \\d+:\\d+/
    - button "Show code"
    - button "Edit on CodePen"
    - heading "sd-audio with sd-headline" [level=3]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    - button "Playback Speed (1x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - text: /\\d+:\\d+ \\d+:\\d+/
    - button "Show code"
    - button "Edit on CodePen"
    - heading "sd-audio with sd-teaser" [level=3]
    - heading "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" [level=3]
    - text: Meta information
    - group:
      - paragraph: Lorem ipsum dolor sit amet
    - img "Example of a teaser"
    - button "Playback Speed (1.5x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "sd-audio animated" [level=3]
    - button "Playback Speed (1x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - paragraph: “Lorem ipsum dolor sit amet, conseincididunt”
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('sd-audio with text', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-audio--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    - paragraph: Lorem ipsum sic semeper
    - button "Playback Speed (1x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - text: /\\d+:\\d+ \\d+:\\d+/
  `);
});

test('sd-audio with sd-headline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-audio--audio-with-headline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    - button "Playback Speed (1x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - text: /\\d+:\\d+ \\d+:\\d+/
  `);
});

test('sd-audio with sd-teaser', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-audio--audio-with-teaser&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" [level=3]
    - text: Meta information
    - group:
      - paragraph: Lorem ipsum dolor sit amet
    - img "Example of a teaser"
    - button "Playback Speed (1.5x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
  `);
});

test('sd-audio animated', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-audio--audio-animated&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Playback Speed (1x)"
    - button
    - button "Mute"
    - text: (0 seconds)
    - slider "Seek bar (0 seconds)"
    - paragraph: “Lorem ipsum dolor sit amet, conseincididunt”
  `);
});
