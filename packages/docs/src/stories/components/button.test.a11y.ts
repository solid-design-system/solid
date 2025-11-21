import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Default"
    `);
});

test('Variant × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--variant-and-size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "primary secondary tertiary cta":
            - cell
            - cell
            - cell "primary":
              - code: primary
            - cell "secondary":
              - code: secondary
            - cell "tertiary":
              - code: tertiary
            - cell "cta":
              - code: cta
        - rowgroup:
          - row "size lg Default Default Default Default":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "md Default Default Default Default":
            - cell "md":
              - code: md
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "sm Default Default Default Default":
            - cell "sm":
              - code: sm
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
    `);
});

test('Variant × Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--variant-and-inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "primary secondary tertiary cta":
            - cell
            - cell
            - cell "primary":
              - code: primary
            - cell "secondary":
              - code: secondary
            - cell "tertiary":
              - code: tertiary
            - cell "cta":
              - code: cta
        - rowgroup:
          - row "inverted false Default Default Default Default":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "true Default Default Default Default":
            - cell "true":
              - code: "true"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
    `);
});

test('Loading', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--loading&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled=false":
            - cell "disabled=false":
              - code: disabled=false
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "primary secondary tertiary cta":
            - cell
            - cell
            - cell "primary":
              - code: primary
            - cell "secondary":
              - code: secondary
            - cell "tertiary":
              - code: tertiary
            - cell "cta":
              - code: cta
        - rowgroup:
          - row "inverted false Loading Loading Loading Loading":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
          - row "true Loading Loading Loading Loading":
            - cell "true":
              - code: "true"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
      - table:
        - rowgroup:
          - row "disabled=false":
            - cell "disabled=false":
              - code: disabled=false
          - row "size":
            - cell
            - cell
            - cell "size":
              - code: size
          - row "lg md sm":
            - cell
            - cell
            - cell "lg":
              - code: lg
            - cell "md":
              - code: md
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "inverted false Loading Loading Loading":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
          - row "true Loading Loading Loading":
            - cell "true":
              - code: "true"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading":
                - progressbar "Loading"
      - table:
        - rowgroup:
          - row "disabled=true":
            - cell "disabled=true":
              - code: disabled=true
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "primary secondary tertiary cta":
            - cell
            - cell
            - cell "primary":
              - code: primary
            - cell "secondary":
              - code: secondary
            - cell "tertiary":
              - code: tertiary
            - cell "cta":
              - code: cta
        - rowgroup:
          - row "inverted false Loading Loading Loading Loading":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
          - row "true Loading Loading Loading Loading":
            - cell "true":
              - code: "true"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
            - cell "Loading":
              - button "Loading" [disabled]:
                - progressbar "Loading"
    `);
});

test('Inverted', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--inverted&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell "variant":
              - code: variant
          - row "primary secondary tertiary cta":
            - cell
            - cell "primary":
              - code: primary
            - cell "secondary":
              - code: secondary
            - cell "tertiary":
              - code: tertiary
            - cell "cta":
              - code: cta
        - rowgroup:
          - row "Y axis Default Default Default Default":
            - cell "Y axis"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
      - table:
        - rowgroup:
          - row "disabled":
            - cell
            - cell "disabled":
              - code: disabled
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Default Default":
            - cell "Y axis"
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default"
      - table:
        - rowgroup:
          - row "loading":
            - cell
            - cell "loading":
              - code: loading
          - row "true false":
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Default Default":
            - cell "Y axis"
            - cell "Default":
              - button "Default":
                - progressbar "Loading"
            - cell "Default":
              - button "Default"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "variant":
            - cell
            - cell
            - cell "variant":
              - code: variant
          - row "primary secondary tertiary cta":
            - cell
            - cell
            - cell "primary":
              - code: primary
            - cell "secondary":
              - code: secondary
            - cell "tertiary":
              - code: tertiary
            - cell "cta":
              - code: cta
        - rowgroup:
          - row "inverted false Default Default Default Default":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
          - row "true Default Default Default Default":
            - cell "true":
              - code: "true"
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell
            - cell "size":
              - code: size
          - row "lg md sm":
            - cell
            - cell
            - cell "lg":
              - code: lg
            - cell "md":
              - code: md
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "inverted false Default Default Default":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
          - row "true Default Default Default":
            - cell "true":
              - code: "true"
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
            - cell "Default":
              - button "Default" [disabled]
      - table:
        - rowgroup:
          - row "loading":
            - cell
            - cell
            - cell "loading":
              - code: loading
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "inverted false Default Default":
            - cell "inverted":
              - code: inverted
            - cell "false":
              - code: "false"
            - cell "Default":
              - button "Default" [disabled]:
                - progressbar "Loading"
            - cell "Default":
              - button "Default" [disabled]
          - row "true Default Default":
            - cell "true":
              - code: "true"
            - cell "Default":
              - button "Default" [disabled]:
                - progressbar "Loading"
            - cell "Default":
              - button "Default" [disabled]
    `);
});

test('Full Width', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--full-width&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "icon-right":
            - cell
            - cell
            - cell "icon-right":
              - code: icon-right
          - row "- system/image":
            - cell
            - cell
            - cell "-":
              - code: "-"
            - cell "system/image":
              - code: system/image
        - rowgroup:
          - row "icon-left - Default Default":
            - cell "icon-left":
              - code: icon-left
            - cell "-":
              - code: "-"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/image Default Default":
            - cell "system/image":
              - code: system/image
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
    `);
});

test('Icon Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--icon-slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size=\\"lg\\"":
            - cell "size=\\"lg\\"":
              - code: size="lg"
          - row "icon-right":
            - cell
            - cell
            - cell "icon-right":
              - code: icon-right
          - row "– system/image system/more-functions system/minus":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "system/image":
              - code: system/image
            - cell "system/more-functions":
              - code: system/more-functions
            - cell "system/minus":
              - code: system/minus
        - rowgroup:
          - row "icon-left – Default Default Default Default":
            - cell "icon-left":
              - code: icon-left
            - cell "–":
              - code: –
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/image Default Default Default Default":
            - cell "system/image":
              - code: system/image
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/more-functions Default Default Default Default":
            - cell "system/more-functions":
              - code: system/more-functions
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/minus Default Default Default Default":
            - cell "system/minus":
              - code: system/minus
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
      - table:
        - rowgroup:
          - row "size=\\"md\\"":
            - cell "size=\\"md\\"":
              - code: size="md"
          - row "icon-right":
            - cell
            - cell
            - cell "icon-right":
              - code: icon-right
          - row "– system/image system/more-functions system/minus":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "system/image":
              - code: system/image
            - cell "system/more-functions":
              - code: system/more-functions
            - cell "system/minus":
              - code: system/minus
        - rowgroup:
          - row "icon-left – Default Default Default Default":
            - cell "icon-left":
              - code: icon-left
            - cell "–":
              - code: –
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/image Default Default Default Default":
            - cell "system/image":
              - code: system/image
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/more-functions Default Default Default Default":
            - cell "system/more-functions":
              - code: system/more-functions
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/minus Default Default Default Default":
            - cell "system/minus":
              - code: system/minus
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
      - table:
        - rowgroup:
          - row "size=\\"sm\\"":
            - cell "size=\\"sm\\"":
              - code: size="sm"
          - row "icon-right":
            - cell
            - cell
            - cell "icon-right":
              - code: icon-right
          - row "– system/image system/more-functions system/minus":
            - cell
            - cell
            - cell "–":
              - code: –
            - cell "system/image":
              - code: system/image
            - cell "system/more-functions":
              - code: system/more-functions
            - cell "system/minus":
              - code: system/minus
        - rowgroup:
          - row "icon-left – Default Default Default Default":
            - cell "icon-left":
              - code: icon-left
            - cell "–":
              - code: –
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/image Default Default Default Default":
            - cell "system/image":
              - code: system/image
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/more-functions Default Default Default Default":
            - cell "system/more-functions":
              - code: system/more-functions
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
          - row "system/minus Default Default Default Default":
            - cell "system/minus":
              - code: system/minus
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
            - cell "Default":
              - button "Default"
    `);
});

test('Icon Only', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--icon-only&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - table:
      - rowgroup:
        - row "size":
          - cell
          - cell "size":
            - code: size
        - row "lg md sm":
          - cell
          - cell "lg":
            - code: lg
          - cell "md":
            - code: md
          - cell "sm":
            - code: sm
      - rowgroup:
        - row "Y axis Icon Button Icon Button Icon Button":
          - cell "Y axis"
          - cell "Icon Button":
            - button "Icon Button":
              - img "Icon Button"
          - cell "Icon Button":
            - button "Icon Button":
              - img "Icon Button"
          - cell "Icon Button":
            - button "Icon Button":
              - img "Icon Button"
  `);
});

test('Multiline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--multiline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell
            - cell "size":
              - code: size
          - row "lg md sm":
            - cell
            - cell
            - cell "lg":
              - code: lg
            - cell "md":
              - code: md
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "icon-right - Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.":
            - cell "icon-right":
              - code: icon-right
            - cell "-":
              - code: "-"
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
          - row "icon-right Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.":
            - cell "icon-right":
              - code: icon-right
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
          - row "icon-left Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.":
            - cell "icon-left":
              - code: icon-left
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
          - row "both Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.":
            - cell "both":
              - code: both
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
            - cell "Lorem ipsum dolor sit amet.":
              - button "Lorem ipsum dolor sit amet."
    `);
});

test('Parts (Debug)', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-button::part(...){outline: solid 2px red} base Default"':
            - 'cell "sd-button::part(...){outline: solid 2px red}"':
              - code: "sd-button::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Default":
              - button "Default"
          - row "label Default":
            - cell "label":
              - code: label
            - cell "Default":
              - button "Default"
          - row "icon-left Default":
            - cell "icon-left":
              - code: icon-left
            - cell "Default":
              - button "Default"
          - row "icon-right Default":
            - cell "icon-right":
              - code: icon-right
            - cell "Default":
              - button "Default"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-button-screenshots-sd-button--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Default"
    `);
});
