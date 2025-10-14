import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - paragraph: Scroll and give it a try!
      - paragraph: This is a long scrollable content.
      - paragraph: It contains multiple paragraphs and lines.
      - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
      - paragraph: The scrollable component will display shadows and buttons based on the props.
      - paragraph: Customize the content and attributes as needed.
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - button "Tag 1"
      - button "Tag 2"
      - button "Tag 3"
      - button "Tag 4"
      - button "Tag 5"
      - button "Tag 6"
      - status
      - paragraph: "/Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep connection to youth culture, at 1 Lovejoy Wharf in Boston\\\\. The contract for around \\\\d+,\\\\d+ sqm of state-of-the-art office space was renewed long-term\\\\. The building has been part of the UniImmo: Global open-ended real estate fund portfolio since \\\\d+ and is the global headquarters of the lifestyle brand, which has been part of NIKE, Inc\\\\. since \\\\d+\\\\./"
    `);
});

test('Browser Scrollbar', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--scrollbar&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - paragraph: "/Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep connection to youth culture, at 1 Lovejoy Wharf in Boston\\\\. The contract for around \\\\d+,\\\\d+ sqm of state-of-the-art office space was renewed long-term\\\\. The building has been part of the UniImmo: Global open-ended real estate fund portfolio since \\\\d+ and is the global headquarters of the lifestyle brand, which has been part of NIKE, Inc\\\\. since \\\\d+\\\\./"
      - button "Scroll to end":
        - img "Scroll to end":
          - img
    `);
});

test('Buttons', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--buttons&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - paragraph: "/Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep connection to youth culture, at 1 Lovejoy Wharf in Boston\\\\. The contract for around \\\\d+,\\\\d+ sqm of state-of-the-art office space was renewed long-term\\\\. The building has been part of the UniImmo: Global open-ended real estate fund portfolio since \\\\d+ and is the global headquarters of the lifestyle brand, which has been part of NIKE, Inc\\\\. since \\\\d+\\\\./"
      - button "Scroll to end":
        - img "Scroll to end":
          - img
    `);
});

test('Shadows', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--shadows&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - paragraph: "/Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep connection to youth culture, at 1 Lovejoy Wharf in Boston\\\\. The contract for around \\\\d+,\\\\d+ sqm of state-of-the-art office space was renewed long-term\\\\. The building has been part of the UniImmo: Global open-ended real estate fund portfolio since \\\\d+ and is the global headquarters of the lifestyle brand, which has been part of NIKE, Inc\\\\. since \\\\d+\\\\./"
    `);
});

test('Inset', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--inset&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - paragraph: "/Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep connection to youth culture, at 1 Lovejoy Wharf in Boston\\\\. The contract for around \\\\d+,\\\\d+ sqm of state-of-the-art office space was renewed long-term\\\\. The building has been part of the UniImmo: Global open-ended real estate fund portfolio since \\\\d+ and is the global headquarters of the lifestyle brand, which has been part of NIKE, Inc\\\\. since \\\\d+\\\\./"
    `);
});

test('Step', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable--step&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - status
      - paragraph: "/Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep connection to youth culture, at 1 Lovejoy Wharf in Boston\\\\. The contract for around \\\\d+,\\\\d+ sqm of state-of-the-art office space was renewed long-term\\\\. The building has been part of the UniImmo: Global open-ended real estate fund portfolio since \\\\d+ and is the global headquarters of the lifestyle brand, which has been part of NIKE, Inc\\\\. since \\\\d+\\\\./"
      - button "Scroll to end":
        - img "Scroll to end":
          - img
    `);
});
