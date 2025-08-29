import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - listitem:
        - button "Step name"
        - text: Step name
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "orientation horizontal Step name":
            - cell "orientation":
              - code: orientation
            - cell "horizontal":
              - code: horizontal
            - cell "Step name":
              - listitem:
                - button "Step name"
                - text: Step name
          - row "vertical Step name":
            - cell "vertical":
              - code: vertical
            - cell "Step name":
              - listitem:
                - button "Step name"
                - text: Step name
    `);
});

test('Horizontal Inline', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--horizontal-inline&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: Lorem ipsum est dolor sit amet
      - listitem:
        - button "Step name"
        - text: Step name This description was set using "description" attribute.
    `);
});

test('Waiting', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--waiting&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - listitem: 1 Step name
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - listitem:
        - button "Step name" [disabled]
        - text: Step name
    `);
});

test('Description', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--description&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - listitem:
        - button "Step name"
        - text: Step name Lorem ipsum est dolor sit amet
    `);
});

test('Description and Label (using attributes)', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--description-and-label-using-attributes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - listitem:
        - button "This label was set using the \\"label\\" attribute."
        - text: This label was set using the "label" attribute.
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - 'row "sd-step::part(...){outline: solid 2px red} base Step name Lorem ipsum est dolor sit amet"':
            - 'cell "sd-step::part(...){outline: solid 2px red}"':
              - code: "sd-step::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
          - row "circle-and-tail-container Step name Lorem ipsum est dolor sit amet":
            - cell "circle-and-tail-container":
              - code: circle-and-tail-container
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
          - row "circle Step name Lorem ipsum est dolor sit amet":
            - cell "circle":
              - code: circle
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
          - row "tail Step name Lorem ipsum est dolor sit amet":
            - cell "tail":
              - code: tail
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
          - row "label Step name Lorem ipsum est dolor sit amet":
            - cell "label":
              - code: label
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
          - row "description Step name Lorem ipsum est dolor sit amet":
            - cell "description":
              - code: description
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
          - row "text-container Step name Lorem ipsum est dolor sit amet":
            - cell "text-container":
              - code: text-container
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
    `);
});

test('Slots', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--slots&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "slot=.. default Step name":
            - cell "slot=..":
              - code: slot=..
            - cell "default":
              - code: default
            - cell "Step name":
              - listitem:
                - button "Step name"
                - text: Step name
      - table:
        - rowgroup
        - rowgroup:
          - row "slot=.. label Lorem ipsum est dolor sit amet":
            - cell "slot=..":
              - code: slot=..
            - cell "label":
              - code: label
            - cell "Lorem ipsum est dolor sit amet":
              - listitem:
                - button: "1"
                - text: Lorem ipsum est dolor sit amet
      - table:
        - rowgroup
        - rowgroup:
          - row "slot=.. circle-content Step name Lorem ipsum est dolor sit amet":
            - cell "slot=..":
              - code: slot=..
            - cell "circle-content":
              - code: circle-content
            - cell "Step name Lorem ipsum est dolor sit amet":
              - listitem:
                - button "Step name"
                - text: Step name Lorem ipsum est dolor sit amet
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-screenshots-sd-step--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - listitem:
        - button "Step name"
        - text: Step name
    `);
});
