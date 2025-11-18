import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--default&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date"
    `);
});

test('Size', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--size&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "size":
            - cell
            - cell "size":
              - code: size
          - row "lg md sm":
            - cell
            - cell "lg":
              - code: lg
            - cell "md":
              - code: md
            - cell "sm":
              - code: sm
        - rowgroup:
          - row "Y axis Date picker Date picker Date picker":
            - cell "Y axis"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
    `);
});

test('Required', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--required&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "required true Date picker":
            - cell "required":
              - code: required
            - cell "true":
              - code: "true"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
          - row "false Date picker":
            - cell "false":
              - code: "false"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
    `);
});

test('Placeholder', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--placeholder&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "range true Date range picker":
            - cell "range":
              - code: range
            - cell "true":
              - code: "true"
            - cell "Date range picker":
              - group "Date range picker":
                - combobox "Select date range"
          - row "false Date picker":
            - cell "false":
              - code: "false"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
    `);
});

test('Disabled', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--disabled&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "disabled true Date picker":
            - cell "disabled":
              - code: disabled
            - cell "true":
              - code: "true"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date" [disabled]
          - row "false Date picker":
            - cell "false":
              - code: "false"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
    `);
});

test('Disabled Weekends', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--disabled-weekends&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup
        - rowgroup:
          - row "disabled-weekends true Date picker":
            - cell "disabled-weekends":
              - code: disabled-weekends
            - cell "true":
              - code: "true"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
          - row "false Date picker":
            - cell "false":
              - code: "false"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
    `);
});

test('Disabled Dates', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--disabled-dates&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - table:
        - rowgroup:
          - row "disabled-dates":
            - cell
            - cell "disabled-dates":
              - code: disabled-dates
          - row /\\d+\\.\\d+\\.\\d+, \\d+\\.\\d+\\.\\d+, \\d+\\.\\d+\\.\\d+ false/:
            - cell
            - cell /\\d+\\.\\d+\\.\\d+, \\d+\\.\\d+\\.\\d+, \\d+\\.\\d+\\.\\d+/:
              - code: /\\d+\\.\\d+\\.\\d+, \\d+\\.\\d+\\.\\d+, \\d+\\.\\d+\\.\\d+/
            - cell "false":
              - code: "false"
        - rowgroup:
          - row "Y axis Date picker Date picker":
            - cell "Y axis"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
            - cell "Date picker":
              - group "Date picker":
                - combobox "Select a date"
    `);
});

test('Mouseless', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--mouseless&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Date picker":
        - combobox "Select a date" [expanded]
        - button "Previous year"
        - button "Previous month"
        - text: /November \\d+/
        - button "Next month"
        - button "Next year"
        - separator:
          - separator
        - text: Use arrow keys to navigate, Enter to select. Page Up/Down changes month. Shift+Page Up/Down changes year
        - grid /November \\d+/:
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - columnheader "Mon"
            - columnheader "Tue"
            - columnheader "Wed"
            - columnheader "Thu"
            - columnheader "Fri"
            - columnheader "Sat"
            - columnheader "Sun"
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - gridcell "Mon"
            - gridcell "Tue"
            - gridcell "Wed"
            - gridcell "Thu"
            - gridcell "Fri"
            - gridcell "Sat"
            - gridcell "Sun"
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - gridcell "Mon"
            - gridcell "Tue"
            - gridcell "Wed"
            - gridcell "Thu"
            - gridcell "Fri"
            - gridcell "Sat"
            - gridcell "Sun"
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - gridcell "Mon"
            - gridcell "Tue"
            - gridcell "Wed"
            - gridcell "Thu"
            - gridcell "Fri"
            - gridcell "Sat"
            - gridcell "Sun"
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - gridcell "Mon"
            - gridcell "Tue"
            - gridcell "Wed"
            - gridcell "Thu"
            - gridcell "Fri"
            - gridcell "Sat"
            - gridcell "Sun"
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - gridcell "Mon"
            - gridcell "Tue"
            - gridcell "Wed"
            - gridcell "Thu"
            - gridcell "Fri"
            - gridcell "Sat"
            - gridcell "Sun"
          - row "Mon Tue Wed Thu Fri Sat Sun":
            - gridcell "Mon"
            - gridcell "Tue"
            - gridcell "Wed"
            - gridcell "Thu"
            - gridcell "Fri"
            - gridcell "Sat"
            - gridcell "Sun"
    `);
});

test('Locale Aware', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=components-sd-datepicker-screenshots-sd-datepicker--locale-aware&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - group "Datumsauswahl":
        - combobox "Select a date"
      - group "Datumsbereichsauswahl":
        - combobox "Select date range": /\\d+\\.\\d+\\.\\d+ – \\d+\\.\\d+\\.\\d+/
    `);
});
