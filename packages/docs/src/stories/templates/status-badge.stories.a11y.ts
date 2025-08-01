import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-status-badge--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Status Badge with Custom Icon":
              - /url: "#status-badge-with-custom-icon"
          - listitem:
            - link "Status Badge with Chip":
              - /url: "#status-badge-with-chip"
    - heading "Status Badge" [level=1]
    - heading "Status Badge with Custom Icon" [level=3]
    - paragraph:
      - text: The icons used in this component, should be exclusively from the
      - code: sd-status-assets
      - link "icon library":
        - /url: "?path=/story/components-sd-icon-default--status-library"
      - text: .
    - text: Available Identified Active Approved Issue Degraded Back soon Maintenance Attention Canceled Unavailable Don't disturb Status Info Investigating Unknown
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Status Badge with Chip" [level=3]
    - heading "Max Mustermann" [level=2]
    - text: Available Authorized for telephone information
    - button "Edit"
    - paragraph: Master data
    - text: /Intermediary VR-Bank Musterstadt eG Geno ID YC12345 Branch number \\d+ – GST Musterstadt Consultant number \\d+ \\d+ A – Service-Kunden E-Mail max\\.mustermann@union-investment\\.de Telephone \\+\\d+ \\(0\\) \\d+ \\d+ \\d+ \\d+/
    - heading "Jane Doe" [level=2]
    - text: Be right back Not authorized for telephone information
    - button "Edit"
    - paragraph: Master data
    - text: /Intermediary VR-Bank Gotham City eG Geno ID YC67891 Branch number \\d+ – GST Gotham City Consultant number \\d+ \\d+ B – Service-Kunden E-Mail jane\\.doe@union-investment\\.de Telephone \\+\\d+ \\(0\\) \\d+ \\d+ \\d+ \\d+/
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Status Badge with Custom Icon', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-status-badge--status-badge-with-custom-icon&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - text: Available Identified Active Approved Issue Degraded Back soon Maintenance Attention Canceled Unavailable Don't disturb Status Info Investigating Unknown
  `);
});

test('Status Badge with Chip', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-status-badge--status-badge-with-chip&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Max Mustermann" [level=2]
    - text: Available Authorized for telephone information
    - button "Edit"
    - paragraph: Master data
    - text: /Intermediary VR-Bank Musterstadt eG Geno ID YC12345 Branch number \\d+ – GST Musterstadt Consultant number \\d+ \\d+ A – Service-Kunden E-Mail max\\.mustermann@union-investment\\.de Telephone \\+\\d+ \\(0\\) \\d+ \\d+ \\d+ \\d+/
    - heading "Jane Doe" [level=2]
    - text: Be right back Not authorized for telephone information
    - button "Edit"
    - paragraph: Master data
    - text: /Intermediary VR-Bank Gotham City eG Geno ID YC67891 Branch number \\d+ – GST Gotham City Consultant number \\d+ \\d+ B – Service-Kunden E-Mail jane\\.doe@union-investment\\.de Telephone \\+\\d+ \\(0\\) \\d+ \\d+ \\d+ \\d+/
  `);
});
