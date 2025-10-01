import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img
      - text: Default slot
      - img
    `);
});

test('Shapes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--shapes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "shapes [\\"top\\", \\"middle\\", \\"bottom\\"] Default slot":
            - cell "shapes":
              - code: shapes
            - cell "[\\"top\\", \\"middle\\", \\"bottom\\"]":
              - code: "[\\"top\\", \\"middle\\", \\"bottom\\"]"
            - cell "Default slot":
              - img
              - img
          - row "[\\"top\\", \\"middle\\"] Default slot":
            - cell "[\\"top\\", \\"middle\\"]":
              - code: "[\\"top\\", \\"middle\\"]"
            - cell "Default slot":
              - img
          - row "[\\"middle\\", \\"bottom\\"] Default slot":
            - cell "[\\"middle\\", \\"bottom\\"]":
              - code: "[\\"middle\\", \\"bottom\\"]"
            - cell "Default slot":
              - img
          - row "[\\"top\\"]":
            - cell "[\\"top\\"]":
              - code: "[\\"top\\"]"
            - cell:
              - img
    `);
});

test('Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row /variant neutral-\\d+ Default slot/:
            - cell "variant":
              - code: variant
            - cell /neutral-\\d+/:
              - code: /neutral-\\d+/
            - cell "Default slot":
              - img
              - img
          - row "primary Default slot":
            - cell "primary":
              - code: primary
            - cell "Default slot":
              - img
              - img
          - row "white Default slot":
            - cell "white":
              - code: white
            - cell "Default slot":
              - img
              - img
          - row "border-primary Default slot":
            - cell "border-primary":
              - code: border-primary
            - cell "Default slot":
              - img
              - img
          - row "border-white Default slot":
            - cell "border-white":
              - code: border-white
            - cell "Default slot":
              - img
              - img
          - row "image Generic":
            - cell "image":
              - code: image
            - cell "Generic":
              - img "Generic"
              - img
              - img
    `);
});

test('Breakpoints', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--breakpoints&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "query width = ... ≤ 414px Default slot":
            - cell "query width = ...":
              - code: query width = ...
            - cell "≤ 414px":
              - code: ≤ 414px
            - cell "Default slot":
              - img
              - img
          - row "> 414px Default slot":
            - cell "> 414px":
              - code: "> 414px"
            - cell "Default slot":
              - img
              - img
          - row "> 640px Default slot":
            - cell "> 640px":
              - code: "> 640px"
            - cell "Default slot":
              - img
              - img
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-brandshape::part(...){outline: solid 2px red} base Default slot"':
            - 'cell "sd-brandshape::part(...){outline: solid 2px red}"':
              - code: "sd-brandshape::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Default slot":
              - img
              - img
          - row "content Default slot":
            - cell "content":
              - code: content
            - cell "Default slot":
              - img
              - img
          - row "shape-top Default slot":
            - cell "shape-top":
              - code: shape-top
            - cell "Default slot":
              - img
              - img
          - row "shape-middle Default slot":
            - cell "shape-middle":
              - code: shape-middle
            - cell "Default slot":
              - img
              - img
          - row "shape-bottom Default slot":
            - cell "shape-bottom":
              - code: shape-bottom
            - cell "Default slot":
              - img
              - img
    `);
});

test('Sample: Positioning Image Variant', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--sample&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img "collaboration"
      - img
      - img
    `);
});

test('Image', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-brandshape-screenshots-sd-brandshape--image&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
      - img "Generic"
      - img
      - img
    `);
});
