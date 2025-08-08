import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Button Group Horizontal":
              - /url: "#button-group-horizontal"
          - listitem:
            - link "Button Group Vertical displayed in two lines":
              - /url: "#button-group-vertical-displayed-in-two-lines"
          - listitem:
            - link "Button Group Vertical Full Width":
              - /url: "#button-group-vertical-full-width"
          - listitem:
            - link "Inclusive Disabled Button with Tooltip":
              - /url: "#inclusive-disabled-button-with-tooltip"
    - heading "Button" [level=1]
    - heading "Button Group Horizontal" [level=3]
    - button "Maybe later"
    - button "Cancel subscription"
    - button "Exit portal"
    - button "Download PDF"
    - button "Accept terms of use"
    - button "PIF"
    - button "Add to watchlist"
    - button "Compare funds"
    - button "More actions"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Button Group Vertical displayed in two lines" [level=3]
    - paragraph: Primary action is stacked on top.
    - button "Open your first investment account"
    - button "Get personalized advice from our experts"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Button Group Vertical Full Width" [level=3]
    - paragraph: Primary action is stacked on top.
    - button "Start investment"
    - button "Download report"
    - button "Add to watchlist"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Inclusive Disabled Button with Tooltip" [level=3]
    - paragraph:
      - strong: "Accessibility:"
    - list:
      - listitem: Move away from disabling buttons if possible.
      - listitem: Rely on default values to keep the button enabled by default.
      - listitem: Prefer validating on submit and guide users directly to errors with sensible error messages.
      - listitem: Use live validation only for fields like email or password to meet specific formatting requirements in real-time.
    - paragraph: If you need to use disabled buttons, consider ways to make them focusable and useful by also making them more inclusive and providing a way out for customers.
    - paragraph:
      - strong: "Suggestion:"
    - list:
      - listitem:
        - text: Use
        - code: visually-disabled
        - text: attribute and tooltip.
    - paragraph: Fields marked with * are required.
    - text: Your message *
    - textbox "Your message *"
    - button "Send" [disabled]
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Button Group Horizontal', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--button-group-horizontal&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Maybe later"
    - button "Cancel subscription"
    - button "Exit portal"
    - button "Download PDF"
    - button "Accept terms of use"
    - button "PIF"
    - button "Add to watchlist"
    - button "Compare funds"
    - button "More actions"
  `);
});

test('Button Group Vertical displayed in two lines', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--button-group-vertical&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Open your first investment account"
    - button "Get personalized advice from our experts"
  `);
});

test('Button Group Vertical Full Width', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--button-group-vertical-full-width&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - button "Start investment"
    - button "Download report"
    - button "Add to watchlist"
  `);
});

test('Inclusive Disabled Button with Tooltip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-button--inclusive-disabled-button-with-tooltip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: Fields marked with * are required.
    - text: Your message *
    - textbox "Your message *"
    - button "Send" [disabled]
  `);
});
