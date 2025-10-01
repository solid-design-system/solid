import { test, expect } from '@playwright/test';

test('Dialog with Button Group', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-dialog--default&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Dialog"
      - dialog "Cancel your subscription?":
        - banner:
          - heading "Cancel your subscription?" [level=2]
          - button "Close":
            - img "Close":
              - img
        - main:
          - paragraph: Your subscription will be canceled immediately. You can resubscribe at any time.
        - contentinfo:
          - button "Maybe later"
          - button "Cancel"
    `);
});

test('Dialog with scrollable content', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-dialog--scrollable&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Dialog"
      - dialog "Terms of use":
        - banner:
          - heading "Terms of use" [level=2]
        - main:
          - status
          - heading "Important notices to our investors" [level=3]
          - paragraph: "By accepting this document, you accept the following restrictions as binding on you:"
          - paragraph: This investor information is intended exclusively for professional clients who are already invested in the fund. The contents of this document have been compiled by Union Investment Institutional GmbH with reasonable care and to the best of its knowledge. The presentations and explanations are based on our own assessment at the time this document was prepared and on information from our own or publicly available sources that we believe to be reliable. However, Union Investment has not fully verified the information provided by third parties and can therefore accept no liability for its currency, accuracy or completeness. All index and product names of companies other than Union Investment may be the copyrighted and trademarked products and brands of these companies.
          - paragraph: /This document is intended solely for internal use\\. Therefore, it may not be reproduced, modified, or summarized in whole or in part, redistributed to other persons, or made accessible or published to other persons in any other way\\. No liability is accepted for disadvantages arising directly or indirectly from the distribution, use, modification, and summary of this document or its contents\\. This marketing communication does not constitute an investment recommendation and does not replace individual investment advice from a suitable investment advisor, nor the assessment of individual circumstances by a lawyer or tax advisor\\. Insofar as reference is made to fund units or individual securities, this may constitute an analysis within the meaning of Art\\. \\d+ para\\. 1 Delegated Regulation \\(EU\\) \\d+\\/\\d+\\. If this document is made accessible to an indefinite group of persons, redistributed, published, or modified or summarized contrary to the above provisions, the user of this document may be subject to the provisions of § \\d+ para\\. 1 WpHG in conjunction with Art\\. 3 nos\\. \\d+ and \\d+, Art\\. \\d+ Market Abuse Regulation \\(EU\\) \\(investment recommendation and investment strategy recommendation\\) as well as Art\\. \\d+ paras\\. 1 and 2 of the Delegated Regulation \\(EU\\) \\d+\\/\\d+ on MiFID II \\(financial analysis\\), the requirements for customer information to retail and professional clients \\(Art\\. \\d+ Regulation \\(EU\\) \\d+\\/\\d+\\), and the special provisions issued by the European and national supervisory authorities\\. Information on the performance of funds and the classification into risk classes\\/color schemes of funds and other products of Union Investment is based on past performance and\\/or volatility\\./
          - paragraph: No statement is made about future performance. The foreign currency quota takes into account the entire fund assets, including target fund resolution and cash. The key figures average yield, average coupon, average remaining maturity, average duration, and modified duration are calculated including target fund resolution based on the fixed-income assets and taking into account cash and derivatives. In the calculation of the average remaining maturity, floaters are considered with their final maturity. The average rating is a proprietary calculation by Union Investment (Union Comp Rating) based on the fixed-income assets, taking into account cash and excluding derivatives. All allocation views and the fund structure are based on the target fund-resolved economic holdings of the fund. Hedging positions through derivatives are offset.
          - paragraph: All allocation views are presented excluding cash and foreign and real estate funds. The allocation of the fund structure is based on Union Investment Group’s own asset allocation. The allocations may differ from those in the annual and semi-annual reports. The sector allocation for equities is based on MSCI sectors or for fixed income on Merrill-Lynch sectors of the assets. The distribution yield in % is the “current yield” in the respective fiscal year. The basis for this is the net asset value at the beginning of the respective fiscal year, adjusted for the distribution included in the previous fiscal year.
          - paragraph: The Sustainable Finance Disclosure Regulation (SFDR) regulates disclosure requirements for financial products. Art. 6 products do not take sustainability into account, Art. 8 promotes ecological and social characteristics. Art. 9 products have sustainable investments as their investment objective.
          - paragraph: Any front-end load is fully passed on to the fund’s intermediary. If you subscribe directly with Union Investment, this does not apply.
          - paragraph:
            - text: /Please read the prospectus and the key information document before making a final investment decision\\. These contain detailed product-specific information, particularly on investment objectives, investment principles, opportunities and risks, as well as explanations of the fund’s risk profile\\. These documents, as well as the investment conditions and the annual and semi-annual reports, form the sole binding basis for the purchase of the fund\\. They are available free of charge in German from Union Investment Institutional GmbH, Weißfrauenstraße 7, \\d+ Frankfurt am Main, Tel\\. \\+\\d+ \\d+ \\d+-\\d+, Fax \\+\\d+ \\d+ \\d+-\\d+,/
            - link "institutional@union-investment.de":
              - /url: http://institutional@union-investment.de
            - text: ","
            - link "www.institutional.union-investment.de":
              - /url: http://www.institutional.union-investment.de
            - text: . If the document concerns a sustainable fund, you will find information on the sustainability-relevant aspects of the fund at
            - link "https://ui-link.de/fondspreisseite":
              - /url: https://ui-link.de/fondspreisseite
            - text: .
          - paragraph:
            - text: A summary of your investor rights in German and further information on collective redress mechanisms can be found under “Notices and Complaints” at
            - link "https://ui-link.de/richtlinien":
              - /url: https://ui-link.de/richtlinien
            - text: /\\. The respective fund-issuing company may decide at any time to revoke any arrangements it may have made for the distribution of shares of a fund and\\/or share classes of a fund in a member state other than its home member state, subject to the conditions of Art\\. 93a of Directive \\d+\\/\\d+\\/EC and Art\\. 32a of Directive \\d+\\/\\d+\\/EU\\./
        - contentinfo:
          - button "Exit portal"
          - button "Download PDF"
          - button "Accept terms of use"
    `);
});

test('Prevent Closing', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-dialog--prevent-closing&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - button "Open Dialog"
      - button "Open Timed Dialog"
    `);
});
