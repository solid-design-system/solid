import { test, expect } from '@playwright/test';

test('Datepicker with a Selected Date and Unavailable Weekends', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-datepicker--unavailable-weekends&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - text: Appointment
        - combobox "Select a date"
    `);
});

test('Datepicker with a Selected Date and Unavailable Dates', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-datepicker--unavailable-dates&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - text: Appointment
        - combobox "Select a date"
    `);
});

test('Datepicker with a Selected Range', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-datepicker--selected-range&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date range picker":
        - combobox "Select date range": /\\d+\\.\\d+\\.\\d+ - \\d+\\.\\d+\\.\\d+/
    `);
});
