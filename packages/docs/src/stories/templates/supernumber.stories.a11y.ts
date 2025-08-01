import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-supernumber--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Supernumber Sizes":
              - /url: "#supernumber-sizes"
          - listitem:
            - link "Supernumber with Overline, Subline and Description":
              - /url: "#supernumber-with-overline-subline-and-description"
          - listitem:
            - link "Supernumber Inverted with Overline, Subline and Description":
              - /url: "#supernumber-inverted-with-overline-subline-and-description"
          - listitem:
            - link "Supernumber Animation":
              - /url: "#supernumber-animation"
          - listitem:
            - link "Supernumber Animation with Prefix":
              - /url: "#supernumber-animation-with-prefix"
          - listitem:
            - link "Supernumber Animation with Suffix":
              - /url: "#supernumber-animation-with-suffix"
          - listitem:
            - link "Supernumber Animation with Separator and Decimal":
              - /url: "#supernumber-animation-with-separator-and-decimal"
    - heading "Supernumber" [level=1]
    - heading "Supernumber Sizes" [level=3]
    - paragraph: size lg
    - text: XXX
    - paragraph: size md
    - text: XXX
    - paragraph: size sm
    - text: XXX
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Supernumber with Overline, Subline and Description" [level=3]
    - paragraph: Fixed Income
    - text: /\\d+,\\d+/
    - paragraph: Including money market instruments
    - paragraph: /Breakdown of total assets under management by asset class in billion euros, as of \\d+ June \\d+/
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Supernumber Inverted with Overline, Subline and Description" [level=3]
    - paragraph: Fixed Income
    - text: /\\d+,\\d+/
    - paragraph: Including money market instruments
    - paragraph: /Breakdown of total assets under management by asset class in billion euros, as of \\d+ June \\d+/
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Supernumber Animation" [level=3]
    - paragraph: Use the countUp.js library to animate a number.
    - paragraph:
      - strong: "Hint:"
      - text: Find more information in the
      - link "countUp.js documentation":
        - /url: https://github.com/inorganik/CountUp.js?tab=readme-ov-file#usage
      - text: .
    - text: /\\d+/
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Supernumber Animation with Prefix" [level=3]
    - paragraph: Use the prefix option of countUp.js to add a prefix to the supernumber.
    - paragraph:
      - strong: "Hint:"
      - text: Open the 'show code' section to see the script.
    - text: /Since \\d+/
    - paragraph: /We have stood for forward-looking real estate investments and active asset management for more than \\d+ years\\. We present our approach and our philosophy of investing in real estate to you here\\./
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Supernumber Animation with Suffix" [level=3]
    - paragraph:
      - text: Use the
      - code: suffix
      - text: option of
      - code: countUp.js
      - text: to add a suffix to the supernumber.
    - paragraph:
      - strong: "Hint:"
      - text: Open the 'show code' section to see the script.
    - text: /\\d+ years/
    - paragraph: /We have stood for forward-looking real estate investments and active asset management for more than \\d+ years\\. We present our approach and our philosophy of investing in real estate to you here\\./
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Supernumber Animation with Separator and Decimal" [level=3]
    - paragraph:
      - text: Use the
      - code: separator
      - text: and
      - code: decimal
      - text: options to format the supernumber according to your i18n needs.
    - paragraph:
      - strong: "Hint:"
      - text: "Find advanced options (eg: custom numerals) in the"
      - link "countUp.js documentation":
        - /url: https://github.com/inorganik/CountUp.js?tab=readme-ov-file#usage
      - text: .
    - text: /\\d+\\.\\d+,\\d+/
    - paragraph: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore magna aliquyam erat
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

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
