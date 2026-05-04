import { test, expect } from '@playwright/test';

test('Radio Group with Help text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-radio-group--radio-group-with-help-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Greeting *":
        - radio "Mr." [checked]
        - radio "Ms."
        - radio "Non-binary"
    `);
});

test('Radio Group with Error text', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-radio-group--radio-group-with-error-text&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "What is your role/function? *":
        - radio "Advisor in service"
        - radio "Customer advisor"
        - radio "Securities specialist/Wealth advisor"
        - radio "Online branch employee"
        - radio "Other"
    `);
});
