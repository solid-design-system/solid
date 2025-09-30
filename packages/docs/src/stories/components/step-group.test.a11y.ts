import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation:
        - list:
          - listitem:
            - button "Lorem ipsum dolor sit"
            - paragraph: Lorem ipsum dolor sit
          - listitem:
            - button "Exercitation ullamco laboris"
            - paragraph: Exercitation ullamco laboris
          - listitem:
            - text: "3"
            - paragraph: Reprehenderit qui in e name
    `);
});

test('Orientation', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--orientation&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "orientation horizontal horizontal":
            - cell "orientation":
              - code: orientation
            - cell "horizontal":
              - code: horizontal
            - cell "horizontal":
              - navigation "horizontal":
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
          - row "vertical vertical":
            - cell "vertical":
              - code: vertical
            - cell "vertical":
              - navigation "vertical":
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
    `);
});

test('Not Interactive X Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--not-interactive&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "not-interactive":
            - cell
            - cell
            - cell "not-interactive":
              - code: not-interactive
          - row "true false":
            - cell
            - cell
            - cell "true":
              - code: "true"
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "size lg lg-true lg-undefined":
            - cell "size":
              - code: size
            - cell "lg":
              - code: lg
            - cell "lg-true":
              - group "lg-true":
                - list:
                  - listitem:
                    - text: "1"
                    - paragraph: Lorem ipsum dolor sit
                  - listitem:
                    - text: "2"
                    - paragraph: Exercitation ullamco laboris
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
            - cell "lg-undefined":
              - navigation "lg-undefined":
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
          - row "sm sm-true sm-undefined":
            - cell "sm":
              - code: sm
            - cell "sm-true":
              - group "sm-true":
                - list:
                  - listitem:
                    - text: "1"
                    - paragraph: Lorem ipsum dolor sit
                  - listitem:
                    - text: "2"
                    - paragraph: Exercitation ullamco laboris
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
            - cell "sm-undefined":
              - navigation "sm-undefined":
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
    `);
});

test('Parts', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--parts&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "orientation":
            - cell
            - cell
            - cell "orientation":
              - code: orientation
          - row "horizontal vertical":
            - cell
            - cell
            - cell "horizontal":
              - code: horizontal
            - cell "vertical":
              - code: vertical
        - rowgroup:
          - 'row "sd-step-group::part(...){outline: solid 2px red} base"':
            - 'cell "sd-step-group::part(...){outline: solid 2px red}"':
              - code: "sd-step-group::part(...){outline: solid 2px red}"
            - cell "base":
              - code: base
            - cell:
              - navigation:
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
                    - text: Lorem ipsum est dolor sit amet
            - cell:
              - navigation:
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
                    - text: Lorem ipsum est dolor sit amet
          - row "body":
            - cell "body":
              - code: body
            - cell:
              - navigation:
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
                    - text: Lorem ipsum est dolor sit amet
            - cell:
              - navigation:
                - list:
                  - listitem:
                    - button "Lorem ipsum dolor sit"
                    - paragraph: Lorem ipsum dolor sit
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - button "Exercitation ullamco laboris"
                    - paragraph: Exercitation ullamco laboris
                    - text: Lorem ipsum est dolor sit amet
                  - listitem:
                    - text: "3"
                    - paragraph: Reprehenderit qui in e name
                    - text: Lorem ipsum est dolor sit amet
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation:
        - list:
          - listitem:
            - button "Lorem ipsum dolor sit"
            - paragraph: Lorem ipsum dolor sit
          - listitem:
            - button "Exercitation ullamco laboris"
            - paragraph: Exercitation ullamco laboris
          - listitem:
            - text: "3"
            - paragraph: Reprehenderit qui in e name
    `);
});

test('Sample: Set Active Step', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--set-active-step&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - navigation:
        - list:
          - listitem:
            - button "Lorem ipsum dolor sit"
            - paragraph: Lorem ipsum dolor sit
          - listitem:
            - text: "2"
            - paragraph: Exercitation ullamco laboris
          - listitem:
            - text: "3"
            - paragraph: Reprehenderit qui in e name
      - button "Previous"
      - button "Next"
    `);
});

test('Sample: Not Interactive', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-step-group-screenshots-sd-step-group--sample-not-interactive&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - text: size = 'lg'
      - group:
        - list:
          - listitem:
            - paragraph: Lorem ipsum dolor sit
          - listitem:
            - paragraph: Exercitation ullamco laboris
          - listitem:
            - paragraph: Reprehenderit qui in e name
      - text: size = 'sm'
      - group:
        - list:
          - listitem:
            - paragraph: Lorem ipsum dolor sit
          - listitem:
            - paragraph: Exercitation ullamco laboris
          - listitem:
            - paragraph: Reprehenderit qui in e name
    `);
});
