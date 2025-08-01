import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-accordion-group--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Accordion Group with White Background":
              - /url: "#accordion-group-with-white-background"
          - listitem:
            - link /Accordion Group with Neutral-\\d+ Background/:
              - /url: "#accordion-group-with-neutral-100-background"
          - listitem:
            - link /Accordion Group with Primary-\\d+ Background/:
              - /url: "#accordion-group-with-primary-100-background"
    - heading "Accordion Group" [level=1]
    - paragraph: Examples of the sd-accordion-group component in different backgrounds.
    - heading "Accordion Group with White Background" [level=3]
    - group: Shareholder structure
    - group: Cooperative financial network
    - group: Investment philosophy
    - button "Show code"
    - button "Edit on CodePen"
    - heading /Accordion Group with Neutral-\\d+ Background/ [level=3]
    - group: Shareholder structure
    - group: Cooperative financial network
    - group: Investment philosophy
    - button "Show code"
    - button "Edit on CodePen"
    - heading /Accordion Group with Primary-\\d+ Background/ [level=3]
    - group: Shareholder structure
    - group: Cooperative financial network
    - group: Investment philosophy
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Accordion Group with White Background', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-accordion-group--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group: Shareholder structure
    - group: Cooperative financial network
    - group: Investment philosophy
  `);
});

test('Accordion Group with Neutral-100 Background', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-accordion-group--neutral-background&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group: Shareholder structure
    - group: Cooperative financial network
    - group: Investment philosophy
  `);
});

test('Accordion Group with Primary-100 Background', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-accordion-group--primary-background&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - group: Shareholder structure
    - group: Cooperative financial network
    - group: Investment philosophy
  `);
});
