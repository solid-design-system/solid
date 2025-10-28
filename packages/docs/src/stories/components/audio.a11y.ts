import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
      - text: /\\d+:\\d+ \\d+:\\d+/
    `);
});

test('Animated', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--animated&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
      - text: /\\d+:\\d+ \\d+:\\d+/
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--inverted&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
      - text: /\\d+:\\d+ \\d+:\\d+/
    `);
});

test('Reverse', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--reverse&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
      - text: /\\d+:\\d+ \\d+:\\d+/
    `);
});

test('Speed', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--speed&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1.5x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
      - text: /\\d+:\\d+ \\d+:\\d+/
    `);
});

test('No Timestamps', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--no-timestamps&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
    `);
});

test('Transcript', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-audio--transcript&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Playback Speed (1x)"
      - button
      - button "Open transcript"
      - button "Mute"
      - text: (0 seconds)
      - slider "Seek bar (0 seconds)"
      - text: /\\d+:\\d+ \\d+:\\d+/
    `);
});
