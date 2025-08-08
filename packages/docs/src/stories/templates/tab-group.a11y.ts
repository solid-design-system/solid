import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-tab-group--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Tab Group Center Aligned":
              - /url: "#tab-group-center-aligned"
          - listitem:
            - link "Tab Group with Badge":
              - /url: "#tab-group-with-badge"
          - listitem:
            - link "Tab Group with Icon and Badge":
              - /url: "#tab-group-with-icon-and-badge"
    - heading "Tab Group" [level=1]
    - heading "Tab Group Center Aligned" [level=3]
    - paragraph: "Example of a centered tab group. To implement this sample, adjust the tabs CSS part as follows:"
    - text: "sd-tab-group::part(tabs) { justify-content: center; }"
    - button "Copy"
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
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Tab Group with Badge" [level=3]
    - tablist:
      - tab "Notifications 3" [selected]
      - tab "Reminders"
    - tabpanel:
      - heading "Nisi eu excepteur anim esse" [level=3]
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Tab Group with Icon and Badge" [level=3]
    - tablist:
      - tab "Dashboard" [selected]
      - tab "New Notification Files"
      - tab "Notes"
    - tabpanel:
      - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

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
