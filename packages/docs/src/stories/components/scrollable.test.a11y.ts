import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--default&viewMode=story'
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

test('Auto Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--auto-orientation&viewMode=story'
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
      - paragraph: Here’s another line to keep things flowing.
      - paragraph: Another one couldn't hurt, right?
      - paragraph: We’re adding more content to ensure you can scroll in both directions.
      - paragraph: These lines are here to make the scrollable component more useful for testing.
      - button "Scroll to end":
        - img "Scroll to end":
          - img
      - button "Scroll to end":
        - img "Scroll to end":
          - img
    `);
});

test('Button With Gradient', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--button-with-gradient&viewMode=story'
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
      - button "Scroll to end":
        - img "Scroll to end":
          - img
    `);
});

test('Shadow', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--shadow&viewMode=story'
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

test('Scrollbar', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--scrollbar&viewMode=story'
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

test('Custom Icon', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--custom-icon&viewMode=story'
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
      - button "End":
        - img "End":
          - img
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-scrollable::part(...){outline: solid 2px red} base Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end"':
            - 'cell "sd-scrollable::part(...){outline: solid 2px red}"':
              - code: "sd-scrollable::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "scroll-content Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "scroll-content":
              - code: scroll-content
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "button-start Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "button-start":
              - code: button-start
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "button-end Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "button-end":
              - code: button-end
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "button-right Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "button-right":
              - code: button-right
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "button-left Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "button-left":
              - code: button-left
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "button-top Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "button-top":
              - code: button-top
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "button-bottom Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "button-bottom":
              - code: button-bottom
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "shadow-right Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "shadow-right":
              - code: shadow-right
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "shadow-left Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "shadow-left":
              - code: shadow-left
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "shadow-top Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
            - cell "shadow-top":
              - code: shadow-top
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scroll to end":
                - img "Scroll to end":
                  - img
          - row "shadow-bottom Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scrolled. Scroll to end":
            - cell "shadow-bottom":
              - code: shadow-bottom
            - cell "Scroll and give it a try! This is a long scrollable content. It contains multiple paragraphs and lines. The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically. The scrollable component will display shadows and buttons based on the props. Customize the content and attributes as needed. Scrolled. Scroll to end":
              - status
              - paragraph: Scroll and give it a try!
              - paragraph: This is a long scrollable content.
              - paragraph: It contains multiple paragraphs and lines.
              - paragraph: The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.
              - paragraph: The scrollable component will display shadows and buttons based on the props.
              - paragraph: Customize the content and attributes as needed.
              - button "Scrolled. Scroll to end":
                - img "Scrolled. Scroll to end":
                  - img
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-scrollable-screenshots-sd-scrollable--mouseless&viewMode=story'
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
      - button "Scroll to end":
        - img "Scroll to end":
          - img
    `);
});
