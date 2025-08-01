import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Unclickable Teaser with Button":
              - /url: "#unclickable-teaser-with-button"
          - listitem:
            - link "Clickable Teaser":
              - /url: "#clickable-teaser"
          - listitem:
            - link "Teaser with Icon":
              - /url: "#teaser-with-icon"
          - listitem:
            - link "Teaser with Chip and Flag":
              - /url: "#teaser-with-chip-and-flag"
          - listitem:
            - link /Teaser with \\d+:\\d+ Division/:
              - /url: "#teaser-with-5050-division"
          - listitem:
            - link "Contact Teaser":
              - /url: "#contact-teaser"
    - heading "Teaser" [level=1]
    - heading "Unclickable Teaser with Button" [level=3]
    - paragraph: The teaser itself is not clickable, but links can be placed inside.
    - text: <sd-teaser> <sd-button href="#">Link</sd-button> </<sd-teaser>
    - button "Copy"
    - heading "Expert views" [level=3]
    - group:
      - paragraph: Our experts assess current economic developments and topics for your investment decision. All analyses, white papers and studies can be found here.
      - link "To expert views":
        - /url: javascript:void(0)
    - img "Two professionals reviewing a document together, emphasizing collaboration and expertise."
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Clickable Teaser" [level=3]
    - heading "Union Investment's climate strategy" [level=2]
    - group:
      - paragraph: Climate change is one of the greatest global challenges. Global warming threatens to have a massive impact on human coexistence, the living conditions of each individual and economic development. As an asset manager, Union Investment is facing up to the challenges associated with combating climate change and the sustainable restructuring of the economy.
      - link "Read more about our climate strategy":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Download climate strategy report":
        - /url: https://union-investment.com
    - img "A smiling father with two children outdoors, symbolizing shared values and future growth."
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Teaser with Icon" [level=3]
    - heading /Annual Report \\d+/ [level=3]
    - group:
      - paragraph: /PDF \\(\\d+,\\d+ MB\\)/
      - link "Download Annual Report":
        - /url: javascript:void(0)
    - heading "Subscribe to our newsletter!" [level=3]
    - group:
      - paragraph: "We keep you informed every month about current topics from Union Investment's real estate division: news, studies, stories, transactions, events and editorial articles from our places and spaces magazine. Stay up to date!"
      - link "Click here to register":
        - /url: javascript:void(0)
    - heading "Responsibility" [level=3]
    - group:
      - paragraph: We take responsibility and act responsibly in the sense of our fiduciary mandate towards our investors as well as towards our employees and society.
      - link "Discover our commitment":
        - /url: javascript:void(0)
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Teaser with Chip and Flag" [level=3]
    - heading "Why office space will always be needed" [level=3]
    - text: /\\d+\\.\\d+\\.\\d+\\| Olaf Janßen - Research view/
    - group:
      - paragraph: Since the start of the Covid pandemic, more and more people have been working from home. That raises the question whether demand for office space will be significantly lower in the future.
      - link "Why office space matters":
        - /url: javascript:void(0)
    - img "Colleagues in a casual office meeting, smiling and interacting, symbolizing collaboration and the value of office spaces."
    - text: Remote Work Research
    - 'heading "ECB interest rate cut: a trend reversal on the real estate markets?" [level=3]'
    - group:
      - text: Investment Trends
      - paragraph: "/At the beginning of June this year, the European Central Bank \\\\(ECB\\\\) cut interest rates for the first time in almost five years: by \\\\d+\\\\.\\\\d+ points to \\\\d+\\\\.\\\\d+ per cent\\\\./"
      - link "Impact of ECB rate cut":
        - /url: javascript:void(0)
    - heading /The real estate transaction volume increased by around \\d+% in the office, retail, logistics and hotel asset classes compared to the second quarter of \\d+\\./ [level=3]
    - img "City skyline, highlighting growth in real estate transactions."
    - text: Real Estate Analytics
    - button "Show code"
    - button "Edit on CodePen"
    - heading /Teaser with \\d+:\\d+ Division/ [level=3]
    - heading "“Our real estate funds are well positioned”" [level=3]
    - group:
      - paragraph: The opportunities for asset classes in challenging times are being explored, particularly within the context of open real estate mutual funds.
      - link "Discover our positioning":
        - /url: javascript:void(0)
      - paragraph: /\\d+\\.\\d+\\.\\d+\\| Opinions/
    - img "Two professionals in an office discussing documents, symbolizing expertise in real estate fund management."
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Contact Teaser" [level=3]
    - heading "John Doe" [level=3]
    - group:
      - paragraph: Team Member of SDS
      - link "john.doe@mail.com":
        - /url: "#"
    - img "Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Unclickable Teaser with Button', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--unclickable-teaser-with-button&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Expert views" [level=3]
    - group:
      - paragraph: Our experts assess current economic developments and topics for your investment decision. All analyses, white papers and studies can be found here.
      - link "To expert views":
        - /url: javascript:void(0)
    - img "Two professionals reviewing a document together, emphasizing collaboration and expertise."
  `);
});

test('Clickable Teaser', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--clickable-teaser&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Union Investment's climate strategy" [level=2]
    - group:
      - paragraph: Climate change is one of the greatest global challenges. Global warming threatens to have a massive impact on human coexistence, the living conditions of each individual and economic development. As an asset manager, Union Investment is facing up to the challenges associated with combating climate change and the sustainable restructuring of the economy.
      - link "Read more about our climate strategy":
        - /url: https://solid-design-system.fe.union-investment.de/docs/
      - link "Download climate strategy report":
        - /url: https://union-investment.com
    - img "A smiling father with two children outdoors, symbolizing shared values and future growth."
  `);
});

test('Teaser with Icon', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--teaser-with-icon&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading /Annual Report \\d+/ [level=3]
    - group:
      - paragraph: /PDF \\(\\d+,\\d+ MB\\)/
      - link "Download Annual Report":
        - /url: javascript:void(0)
    - heading "Subscribe to our newsletter!" [level=3]
    - group:
      - paragraph: "We keep you informed every month about current topics from Union Investment's real estate division: news, studies, stories, transactions, events and editorial articles from our places and spaces magazine. Stay up to date!"
      - link "Click here to register":
        - /url: javascript:void(0)
    - heading "Responsibility" [level=3]
    - group:
      - paragraph: We take responsibility and act responsibly in the sense of our fiduciary mandate towards our investors as well as towards our employees and society.
      - link "Discover our commitment":
        - /url: javascript:void(0)
  `);
});

test('Teaser with Chip and Flag', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--teaser-with-chip-and-flag&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Why office space will always be needed" [level=3]
    - text: /\\d+\\.\\d+\\.\\d+\\| Olaf Janßen - Research view/
    - group:
      - paragraph: Since the start of the Covid pandemic, more and more people have been working from home. That raises the question whether demand for office space will be significantly lower in the future.
      - link "Why office space matters":
        - /url: javascript:void(0)
    - img "Colleagues in a casual office meeting, smiling and interacting, symbolizing collaboration and the value of office spaces."
    - text: Remote Work Research
    - 'heading "ECB interest rate cut: a trend reversal on the real estate markets?" [level=3]'
    - group:
      - text: Investment Trends
      - paragraph: "/At the beginning of June this year, the European Central Bank \\\\(ECB\\\\) cut interest rates for the first time in almost five years: by \\\\d+\\\\.\\\\d+ points to \\\\d+\\\\.\\\\d+ per cent\\\\./"
      - link "Impact of ECB rate cut":
        - /url: javascript:void(0)
    - heading /The real estate transaction volume increased by around \\d+% in the office, retail, logistics and hotel asset classes compared to the second quarter of \\d+\\./ [level=3]
    - img "City skyline, highlighting growth in real estate transactions."
    - text: Real Estate Analytics
  `);
});

test('Teaser with 50:50 Division', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--teaser-with-division&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "“Our real estate funds are well positioned”" [level=3]
    - group:
      - paragraph: The opportunities for asset classes in challenging times are being explored, particularly within the context of open real estate mutual funds.
      - link "Discover our positioning":
        - /url: javascript:void(0)
      - paragraph: /\\d+\\.\\d+\\.\\d+\\| Opinions/
    - img "Two professionals in an office discussing documents, symbolizing expertise in real estate fund management."
  `);
});

test('Contact Teaser', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-teaser--contact-teaser&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "John Doe" [level=3]
    - group:
      - paragraph: Team Member of SDS
      - link "john.doe@mail.com":
        - /url: "#"
    - img "Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
  `);
});
