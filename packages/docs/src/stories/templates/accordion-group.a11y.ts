import { test, expect } from '@playwright/test';

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
