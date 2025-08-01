import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-brandshape--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
    - heading "Brandshape" [level=1]
    - paragraph:
      - text: Example of a brandshape with the variant
      - code: border-primary
      - text: .
    - img
    - 'heading "Exclusion criteria: Ensure minimum standards, avoid controversies" [level=4]'
    - paragraph: In this approach, single or multiple criteria are defined that exclude investment in certain companies, industries or countries. The individual criteria can be determined individually within the SIRIS platform, such as the exclusion of companies that generate more than 5 per cent of their turnover from gambling. The exclusion criteria are additionally reviewed in a two-stage research process.
    - img
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Brandshape', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-brandshape--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - img
    - 'heading "Exclusion criteria: Ensure minimum standards, avoid controversies" [level=4]'
    - paragraph: In this approach, single or multiple criteria are defined that exclude investment in certain companies, industries or countries. The individual criteria can be determined individually within the SIRIS platform, such as the exclusion of companies that generate more than 5 per cent of their turnover from gambling. The exclusion criteria are additionally reviewed in a two-stage research process.
    - img
  `);
});
