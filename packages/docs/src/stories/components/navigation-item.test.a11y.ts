import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Navigation"
    `);
});

test('Variant x Current', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--current&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "vertical":
            - cell
            - cell
            - cell "vertical":
              - code: vertical
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "current true Navigation Navigation":
            - cell "current":
              - code: current
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
          - row "false Navigation Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
    `);
});

test('Variant × Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "Button":
            - cell "Button":
              - code: Button
          - row "vertical":
            - cell
            - cell
            - cell "vertical":
              - code: vertical
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "size md Navigation Navigation":
            - cell "size":
              - code: size
            - cell "md":
              - code: md
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
          - row "lg Navigation Navigation":
            - cell "lg":
              - code: lg
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
          - row "sm Navigation Navigation":
            - cell "sm":
              - code: sm
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
      - table:
        - rowgroup:
          - row "Link (href=\\"https://www.union-investment.de/\\")":
            - cell "Link (href=\\"https://www.union-investment.de/\\")":
              - code: Link (href="https://www.union-investment.de/")
          - row "vertical":
            - cell
            - cell
            - cell "vertical":
              - code: vertical
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "size md Navigation Navigation":
            - cell "size":
              - code: size
            - cell "md":
              - code: md
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
          - row "lg Navigation Navigation":
            - cell "lg":
              - code: lg
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
          - row "sm Navigation Navigation":
            - cell "sm":
              - code: sm
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
      - table:
        - rowgroup:
          - row "Accordion":
            - cell "Accordion":
              - code: Accordion
          - row "vertical":
            - cell
            - cell
            - cell "vertical":
              - code: vertical
          - row "true":
            - cell
            - cell
            - cell "true":
              - code: "true"
        - rowgroup:
          - row "size base":
            - cell "size":
              - code: size
            - cell "base":
              - code: base
            - cell:
              - group: Navigation
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "Horizontal":
            - cell "Horizontal":
              - code: Horizontal
        - rowgroup:
          - row "current true Navigation":
            - cell "current":
              - code: current
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation" [disabled]
          - row "false Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation" [disabled]
      - table:
        - rowgroup:
          - row "Vertical":
            - cell "Vertical":
              - code: Vertical
          - row "chevron":
            - cell
            - cell
            - cell "chevron":
              - code: chevron
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "current true Navigation Navigation":
            - cell "current":
              - code: current
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation" [disabled]:
                - paragraph: Lorem ipsum dolor sit amet.
            - cell "Navigation":
              - button "Navigation" [disabled]:
                - paragraph: Lorem ipsum dolor sit amet.
          - row "false Navigation Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation" [disabled]:
                - paragraph: Lorem ipsum dolor sit amet.
            - cell "Navigation":
              - button "Navigation" [disabled]:
                - paragraph: Lorem ipsum dolor sit amet.
    `);
});

test('Vertical × Current', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--vertical-and-current&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "vertical":
            - cell
            - cell
            - cell "vertical":
              - code: vertical
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "current true Navigation Navigation":
            - cell "current":
              - code: current
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
          - row "false Navigation Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - button "Navigation"
    `);
});

test('Vertical × Link', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--vertical-and-link&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "href":
            - cell
            - cell
            - cell "href":
              - code: href
          - row "#":
            - cell
            - cell
            - cell:
              - code
            - cell "#":
              - code: "#"
        - rowgroup:
          - row "vertical true Navigation Navigation":
            - cell "vertical":
              - code: vertical
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - link "Navigation":
                - /url: "#"
          - row "false Navigation Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation"
            - cell "Navigation":
              - link "Navigation":
                - /url: "#"
    `);
});

test('Chevron', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--chevron&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "Button":
            - cell "Button":
              - code: Button
        - rowgroup:
          - row "chevron true Navigation":
            - cell "chevron":
              - code: chevron
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation"
          - row "false Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation"
      - table:
        - rowgroup:
          - row "Link":
            - cell "Link":
              - code: Link
        - rowgroup:
          - row "chevron true Navigation":
            - cell "chevron":
              - code: chevron
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
          - row "false Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
      - table:
        - rowgroup:
          - row "Accordion":
            - cell "Accordion":
              - code: Accordion
        - rowgroup:
          - row "chevron true":
            - cell "chevron":
              - code: chevron
            - cell "true":
              - code: "true"
            - cell:
              - group: Navigation
          - row "false":
            - cell "false":
              - code: "false"
            - cell:
              - group: Navigation
    `);
});

test('Separated', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--separated&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "href":
            - cell
            - cell
            - cell "href":
              - code: href
          - row "#":
            - cell
            - cell
            - cell "#":
              - code: "#"
            - cell:
              - code
        - rowgroup:
          - row "separated true Navigation Navigation":
            - cell "separated":
              - code: separated
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - link "Navigation":
                - /url: "#"
              - button "Expand navigation item"
            - cell "Navigation":
              - button "Expand navigation item"
          - row "false Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - link "Navigation":
                - /url: "#"
            - cell:
              - group: Navigation
      - table:
        - rowgroup:
          - row "href":
            - cell
            - cell
            - cell "href":
              - code: href
          - row "#":
            - cell
            - cell
            - cell "#":
              - code: "#"
            - cell:
              - code
        - rowgroup:
          - row "separated true Navigation Navigation":
            - cell "separated":
              - code: separated
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - link "Navigation":
                - /url: "#"
                - paragraph: Lorem ipsum dolor sit amet.
              - button "Expand navigation item"
            - cell "Navigation":
              - paragraph: Lorem ipsum dolor sit amet.
              - button "Expand navigation item"
          - row "false Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - link "Navigation":
                - /url: "#"
                - paragraph: Lorem ipsum dolor sit amet.
            - cell:
              - group:
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
    `);
});

test('Indented × Relaxed', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--indented-relaxed&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "indented":
            - cell
            - cell
            - cell "indented":
              - code: indented
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "relaxed true Navigation Navigation":
            - cell "relaxed":
              - code: relaxed
            - cell "true":
              - code: "true"
            - cell "Navigation":
              - button "Navigation":
                - separator:
                  - separator
            - cell "Navigation":
              - button "Navigation":
                - separator:
                  - separator
          - row "false Navigation Navigation":
            - cell "false":
              - code: "false"
            - cell "Navigation":
              - button "Navigation":
                - separator:
                  - separator
            - cell "Navigation":
              - button "Navigation":
                - separator:
                  - separator
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "default":
            - cell
            - cell "default":
              - code: default
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - button:
                - paragraph: Lorem ipsum dolor sit amet.
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "description":
            - cell
            - cell "description":
              - code: description
        - rowgroup:
          - row "Y axis Navigation":
            - cell "Y axis"
            - cell "Navigation":
              - button "Navigation"
      - table:
        - rowgroup:
          - row "slot=...":
            - cell
            - cell "slot=...":
              - code: slot=...
          - row "children":
            - cell
            - cell "children":
              - code: children
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - group:
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-navigation-item::part(...){outline: solid 2px red} base"':
            - 'cell "sd-navigation-item::part(...){outline: solid 2px red}"':
              - code: "sd-navigation-item::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "content":
            - cell "content":
              - code: content
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "content-area":
            - cell "content-area":
              - code: content-area
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "content-container":
            - cell "content-container":
              - code: content-container
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "chevron":
            - cell "chevron":
              - code: chevron
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "description":
            - cell "description":
              - code: description
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "divider":
            - cell "divider":
              - code: divider
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "current-indicator":
            - cell "current-indicator":
              - code: current-indicator
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
          - row "details":
            - cell "details":
              - code: details
            - cell:
              - group:
                - separator:
                  - separator
                - text: Navigation
                - paragraph: Lorem ipsum dolor sit amet.
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-navigation-item-screenshots-sd-navigation-item--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "Button":
            - cell "Button":
              - code: Button
        - rowgroup:
          - row "Y axis Navigation":
            - cell "Y axis"
            - cell "Navigation":
              - button "Navigation"
      - table:
        - rowgroup:
          - row "Link":
            - cell "Link":
              - code: Link
        - rowgroup:
          - row "Y axis Navigation":
            - cell "Y axis"
            - cell "Navigation":
              - link "Navigation":
                - /url: https://www.union-investment.de/
      - table:
        - rowgroup:
          - row "Accordion":
            - cell "Accordion":
              - code: Accordion
        - rowgroup:
          - row "Y axis":
            - cell "Y axis"
            - cell:
              - group: Navigation
    `);
});
