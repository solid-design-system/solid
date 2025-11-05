import { test, expect } from '@playwright/test';

test('Tab Group Center Aligned', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tab-group--tab-centered&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Gender" [selected]
        - tab "Age diversity"
        - tab "Education"
        - tab "Background"
      - tabpanel:
        - figure:
          - img "Two men in business attire sitting on a sofa in a modern office, smiling and looking at a laptop screen."
          - text: © Photo by Austin Distel on Unsplash
        - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    `);
});

test('Tab Group with Badge', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tab-group--tab-with-badge&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Notifications 3" [selected]
        - tab "Reminders"
      - tabpanel:
        - heading "Nisi eu excepteur anim esse" [level=3]
        - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    `);
});

test('Tab Group with Icon and Badge', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tab-group--tab-with-icon-badge&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - tablist:
        - tab "Dashboard" [selected]
        - tab "New Notification Files"
        - tab "Notes"
      - tabpanel:
        - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    `);
});
