import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Reversed Layout', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--reversed-layout&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Animated', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--animated&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Animated and Reversed Layout', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--animated-and-reversed&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: /\\d+:\\d+ \\(0\\)/
      - slider "Seek bar (0)"
    `);
});

test('Animated and Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--animated-and-inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Hidden Timestamps', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--hidden-timestamps&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--slots&viewMode=story'
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
          - row "Y axis Audio Player":
            - cell "Y axis"
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0 seconds)"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "play-icon":
            - cell
            - cell "play-icon":
              - code: play-icon
        - rowgroup:
          - row "Y axis Audio Player":
            - cell "Y axis"
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "pause-icon":
            - cell
            - cell "pause-icon":
              - code: pause-icon
        - rowgroup:
          - row "Y axis Audio Player":
            - cell "Y axis"
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-audio::part(...){outline: solid 2px red} base Audio Player"':
            - 'cell "sd-audio::part(...){outline: solid 2px red}"':
              - code: "sd-audio::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
          - row "audio-controls Audio Player":
            - cell "audio-controls":
              - code: audio-controls
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
          - row "speed Audio Player":
            - cell "speed":
              - code: speed
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
          - row "play-button Audio Player":
            - cell "play-button":
              - code: play-button
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
          - row "volume Audio Player":
            - cell "volume":
              - code: volume
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
          - row "progress-slider Audio Player":
            - cell "progress-slider":
              - code: progress-slider
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
          - row "timestamps Audio Player":
            - cell "timestamps":
              - code: timestamps
            - cell "Audio Player":
              - button "Playback Speed (1x)"
              - button
              - button "Mute"
              - slider "Seek bar (0)"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Samples: sd-audio with sd-teaser', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--samples-teaser&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" [level=3]
      - text: Meta information
      - group:
        - paragraph: Lorem ipsum dolor sit amet
      - img "A group of people sitting in a coffee shop"
      - button "Playback Speed (1x)"
      - button
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});

test('Samples: sd-audio with sd-headline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio-screenshots-sd-audio--samples-headline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" [level=4]
      - button "Playback Speed (1x)"
      - button
      - button "Mute"
      - text: (0)
      - slider "Seek bar (0)"
      - text: /\\d+:\\d+/
    `);
});
