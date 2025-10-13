import { test, expect } from '@playwright/test';

test('Supernumber Sizes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--supernumber-sizes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: size lg
      - text: XXX
      - paragraph: size md
      - text: XXX
      - paragraph: size sm
      - text: XXX
    `);
});

test('Supernumber with Overline, Subline and Description', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--overline-subline-description&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Fixed Income
      - text: /\\d+,\\d+/
      - paragraph: Including money market instruments
      - paragraph: /Breakdown of total assets under management by asset class in billion euros, as of \\d+ June \\d+/
    `);
});

test('Supernumber Inverted with Overline, Subline and Description', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--inverted&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Fixed Income
      - text: /\\d+,\\d+/
      - paragraph: Including money market instruments
      - paragraph: /Breakdown of total assets under management by asset class in billion euros, as of \\d+ June \\d+/
    `);
});

test('Supernumber Animation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--supernumber-animation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /\\d+/
    `);
});

test('Supernumber Animation with Prefix', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--supernumber-animation-prefix&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /Since \\d+/
      - paragraph: /We have stood for forward-looking real estate investments and active asset management for more than \\d+ years\\. We present our approach and our philosophy of investing in real estate to you here\\./
    `);
});

test('Supernumber Animation with Suffix', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--supernumber-animation-suffix&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /\\d+ years/
      - paragraph: /We have stood for forward-looking real estate investments and active asset management for more than \\d+ years\\. We present our approach and our philosophy of investing in real estate to you here\\./
    `);
});

test('Supernumber Animation with Separator and Decimal', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--supernumber-seperator-decimal&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: /\\d+\\.\\d+,\\d+/
      - paragraph: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore magna aliquyam erat
    `);
});
