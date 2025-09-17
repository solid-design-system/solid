import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - dialog "Headline slot":
        - banner:
          - heading "Headline slot" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main: Default slot
        - contentinfo: Footer slot
    `);
});

test('Open', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog--open&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Dialog"
      - dialog "Lorem ipsum":
        - banner:
          - heading "Lorem ipsum" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        - contentinfo:
          - button "Button"
    `);
});

test('Headline', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog--headline&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Dialog"
      - dialog "Headline":
        - banner:
          - heading "Headline" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        - contentinfo:
          - button "Button"
    `);
});

test('No Close Button', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-dialog--no-close-button&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Dialog"
      - dialog "Headline":
        - banner:
          - heading "Headline" [level=2]
        - main:
          - paragraph: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        - contentinfo:
          - button "Button"
    `);
});
