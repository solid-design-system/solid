import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-flipcard--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - img "A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
      - heading "We are invested in over USD 6 Billion of Assets under Management" [level=5]
      - button "Flip to Back":
        - img "Flip to Back":
          - img
      - img "Colleagues in a casual office meeting, smiling and interacting, symbolizing collaboration and the value of office spaces."
      - heading "We promote diversity" [level=2]
      - button "Flip to Back":
        - img "Flip to Back":
          - img
    `);
});
