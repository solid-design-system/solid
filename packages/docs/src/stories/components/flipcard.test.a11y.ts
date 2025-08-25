import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Variants', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--variants&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "front-variant primary Front slot Flip to Back":
            - cell "front-variant":
              - code: front-variant
            - cell "primary":
              - code: primary
            - cell "Front slot Flip to Back":
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row /primary-\\d+ Front slot Flip to Back/:
            - cell /primary-\\d+/:
              - code: /primary-\\d+/
            - cell "Front slot Flip to Back":
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "gradient-light Generic Front slot Flip to Back":
            - cell "gradient-light":
              - code: gradient-light
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "gradient-dark Generic Front slot Flip to Back":
            - cell "gradient-dark":
              - code: gradient-dark
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
    `);
});

test('Flip Direction', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--flip-direction&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "flip-direction":
            - cell
            - cell "flip-direction":
              - code: flip-direction
          - row "horizontal vertical":
            - cell
            - cell "horizontal":
              - code: horizontal
            - cell "vertical":
              - code: vertical
        - rowgroup:
          - row "Y axis Front slot Flip to Back Front slot Flip to Back":
            - cell "Y axis"
            - cell "Front slot Flip to Back":
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
            - cell "Front slot Flip to Back":
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--slots&viewMode=story'
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
          - row "front":
            - cell
            - cell "front":
              - code: front
        - rowgroup:
          - row "Y axis Generic Flip to Back":
            - cell "Y axis"
            - cell "Generic Flip to Back":
              - img "Generic"
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "back":
            - cell
            - cell "back":
              - code: back
        - rowgroup:
          - row "Y axis Generic Front slot Flip to Back":
            - cell "Y axis"
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "front-media":
            - cell
            - cell "front-media":
              - code: front-media
        - rowgroup:
          - row "Y axis Generic Front slot Flip to Back":
            - cell "Y axis"
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
      - table:
        - rowgroup:
          - row "slot=..":
            - cell
            - cell "slot=..":
              - code: slot=..
          - row "back-media":
            - cell
            - cell "back-media":
              - code: back-media
        - rowgroup:
          - row "Y axis Generic Front slot Flip to Back":
            - cell "Y axis"
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-flipcard::part(...){outline: solid 2px red} base Generic Front slot Flip to Back"':
            - 'cell "sd-flipcard::part(...){outline: solid 2px red}"':
              - code: "sd-flipcard::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "front Generic Front slot Flip to Back":
            - cell "front":
              - code: front
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "back Generic Front slot Flip to Back":
            - cell "back":
              - code: back
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "front-button Generic Front slot Flip to Back":
            - cell "front-button":
              - code: front-button
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "back-button Generic Front slot Flip to Back":
            - cell "back-button":
              - code: back-button
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "front-slot-container Generic Front slot Flip to Back":
            - cell "front-slot-container":
              - code: front-slot-container
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "back-slot-container Generic Front slot Flip to Back":
            - cell "back-slot-container":
              - code: back-slot-container
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "front-media Generic Front slot Flip to Back":
            - cell "front-media":
              - code: front-media
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "back-media Generic Front slot Flip to Back":
            - cell "back-media":
              - code: back-media
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "front-secondary-gradient Generic Front slot Flip to Back":
            - cell "front-secondary-gradient":
              - code: front-secondary-gradient
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
          - row "back-secondary-gradient Generic Front slot Flip to Back":
            - cell "back-secondary-gradient":
              - code: back-secondary-gradient
            - cell "Generic Front slot Flip to Back":
              - img "Generic"
              - paragraph: Front slot
              - button "Flip to Back":
                - img "Flip to Back":
                  - img
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - paragraph: Front slot
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Sample: Custom Content', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--sample&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Nisi eu excepteur anim esse" [level=4]
      - paragraph: Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});

test('Sample: Aspect Ratio', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-flipcard-screenshots-sd-flipcard--aspect-ratio&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "Nisi eu excepteur anim esse" [level=4]
      - paragraph: Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});
