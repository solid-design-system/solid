import { test, expect } from '@playwright/test';

test('Interest Calculator', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-range--interest-calculator&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - alert "The information displayed in the content bellow is only for demo purposes."
      - paragraph: Your final amount with 1.5% return
      - paragraph: /\\d+\\.\\d+,\\d+ EUR/
      - paragraph: Low return
      - paragraph: High return
      - text: (1.5%)
      - slider "Low return High return (1.5%)"
      - text: 0% 2% 4% 6%
      - paragraph: Less risk
      - paragraph: More risk
      - paragraph: /With a monthly savings rate of \\d+ euros and a one-time deposit of \\d+,\\d+ euros, you will save a total of \\d+\\.\\d+,\\d+ euros over the next \\d+ years\\. With a 1\\.5% return, your final amount would be approximately \\d+\\.\\d+,\\d+ euros\\. Try out how you can increase your final amount with a higher rate of return\\./
    `);
});
