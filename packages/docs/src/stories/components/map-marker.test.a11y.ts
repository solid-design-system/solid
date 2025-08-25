import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-map-marker-screenshots-sd-map-marker--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Label":
        - img
    `);
});

test('Variant Cluster', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-map-marker-screenshots-sd-map-marker--variant-cluster&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "state":
            - cell
            - cell "state":
              - code: state
          - row "default hover":
            - cell
            - cell "default":
              - code: default
            - cell "hover":
              - code: hover
        - rowgroup:
          - row "Y axis 8 8":
            - cell "Y axis"
            - cell "8":
              - button "8":
                - img
            - cell "8":
              - button "8":
                - img
    `);
});

test('Variant Main', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-map-marker-screenshots-sd-map-marker--variant-main&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "state":
            - cell
            - cell "state":
              - code: state
          - row "default hover active":
            - cell
            - cell "default":
              - code: default
            - cell "hover":
              - code: hover
            - cell "active":
              - code: active
        - rowgroup:
          - row "Y axis Label Label Label":
            - cell "Y axis"
            - cell "Label":
              - button "Label":
                - img
            - cell "Label":
              - button "Label":
                - img
            - cell "Label":
              - button "Label":
                - img
    `);
});

test('Variant Place', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-map-marker-screenshots-sd-map-marker--variant-place&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "state":
            - cell
            - cell "state":
              - code: state
          - row "default hover active":
            - cell
            - cell "default":
              - code: default
            - cell "hover":
              - code: hover
            - cell "active":
              - code: active
        - rowgroup:
          - row "Y axis Label Label Label":
            - cell "Y axis"
            - cell "Label":
              - button "Label":
                - img
            - cell "Label":
              - button "Label":
                - img
            - cell "Label":
              - button "Label":
                - img
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-map-marker-screenshots-sd-map-marker--slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Label":
        - img
      - button "Label":
        - img
        - img "Logo"
      - button "Label":
        - img
    `);
});

test('Scale', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-map-marker-screenshots-sd-map-marker--scale&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "marker-scaling":
            - cell
            - cell "marker-scaling":
              - code: marker-scaling
          - 'row "--map-marker-scaling: 1.5 --map-marker-scaling: 2"':
            - cell
            - 'cell "--map-marker-scaling: 1.5"':
              - code: "--map-marker-scaling: 1.5"
            - 'cell "--map-marker-scaling: 2"':
              - code: "--map-marker-scaling: 2"
        - rowgroup:
          - row "Y axis Label Label":
            - cell "Y axis"
            - cell "Label":
              - button "Label":
                - img
            - cell "Label":
              - button "Label":
                - img
    `);
});
