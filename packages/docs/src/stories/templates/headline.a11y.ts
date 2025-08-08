import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-headline--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Semantic Headline Structure – Example A":
              - /url: "#semantic-headline-structure--example-a"
          - listitem:
            - link "Semantic Headline Structure – Example B":
              - /url: "#semantic-headline-structure--example-b"
    - heading "Headline" [level=1]
    - heading "Semantic Headline Structure – Example A" [level=3]
    - 'heading "A prerequisite for functioning capital markets: fundamentally active asset management" [level=1]'
    - paragraph: Active and passive management approaches have a valuable but different function in the investment of investment funds. Fundamentally active management approaches have the function of efficiently pricing all investments by evaluating opportunities and risks.
    - heading "Additional income through active asset management" [level=2]
    - paragraph:
      - strong: Additional returns, risk management and responsible investing can only be realised through active asset management. That is why we are a fundamentally active asset manager.
    - heading "We are a fundamentally active asset manager" [level=3]
    - paragraph: We are convinced that the capital markets do not adequately reflect the current information situation in many areas. Behavioural psychological influences in particular distort a fundamentally appropriate price. Strictly organised and robustly positioned teams, clearly defined and proven investment philosophies and investment processes are the basis for achieving additional returns. To ensure that this is not only possible today, but also tomorrow, we are constantly working on the further development of our teams and processes.
    - paragraph: Additional income through active asset management is at the heart of our mission. Our clients also value our long-term partnership-based cooperation, our extensive expertise and experience as a fundamentally active asset manager, our direct access to portfolio managers and our high level of expertise in individual solutions from a single location.
    - heading "Empowering Sustainable Growth" [level=3]
    - heading "One location" [level=4]
    - group:
      - paragraph: At our location in Frankfurt, we combine the resources of a global manager with the short communication channels of a boutique. The resulting close networking, combined with a high level of transparency, ensures an intensive exchange of investment-relevant information and a unique investment culture.
    - heading "Responsible investing" [level=4]
    - group:
      - paragraph: As a trustee, we support measures such as active shareholder engagement, which aims to sustainably increase the value of these companies in the long term through personal company visits, speaking engagements and voting behaviour at annual general meetings.
    - heading "Our teams" [level=4]
    - group:
      - paragraph: In sector trios, we analyse companies simultaneously from an owner, creditor and sustainability perspective in order to achieve robust analysis results. In this environment, we regularly train the portfolio managers of tomorrow so that we can deliver strong results not only today, but also tomorrow.
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Semantic Headline Structure – Example B" [level=3]
    - heading "Sustainable Investments" [level=1]
    - paragraph: As well as the comprehensive integration of environmental, social and corporate governance (ESG) aspects into our investment process, we want to play a role in making our future sustainable by steadily stepping up our engagement activities and collaborative work.
    - heading "In the spotlight" [level=2]
    - heading "Infrastructure sector on course for growth" [level=3]
    - group:
      - paragraph: To meet the challenges of the future, infrastructure must be expanded globally. Climate protection, demographic change, urbanisation and digitalisation - these are four major megatrends and task areas of economic transformation.
      - link "Read article":
        - /url: javascript:void(0)
    - heading "Turn of the times – from a sustainability perspective" [level=3]
    - group:
      - paragraph: Russia's attack on Ukraine marks a fundamental turning point - many are already talking about a new world order. Does the world situation change the view on sustainable investments?
      - link "Read article":
        - /url: javascript:void(0)
    - heading "Our expertise" [level=2]
    - paragraph: We started to apply sustainability criteria long before sustainable investing became a widespread trend and we have been systematically developing our expertise ever since. In addition, we are promoting the transformation towards a more sustainable economy through our engagement activities, our membership in organisations and our participation in initiatives.
    - heading "Investment Process" [level=3]
    - group:
      - paragraph: In-depth fundamental analysis, active portfolio management and consideration of environmental, social and governance (ESG) criteria throughout the investment process make it possible to systematically exploit market inefficiencies in order to achieve risk-adjusted outperformance for our clients.
      - link "To the blog post":
        - /url: javascript:void(0)
    - heading "Engagement" [level=3]
    - group:
      - paragraph: /As an internationally active shareholder, Union Investment attended a total of \\d+,\\d+ annual general meetings in \\d+ countries last year\\. We pursue an engagement strategy that builds on active shareholder action and shareholder dialogue to influence corporate policy\\./
      - link "To the blog post":
        - /url: javascript:void(0)
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Semantic Headline Structure – Example A', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-headline--semantic-headline-structure-example-a&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - 'heading "A prerequisite for functioning capital markets: fundamentally active asset management" [level=1]'
    - paragraph: Active and passive management approaches have a valuable but different function in the investment of investment funds. Fundamentally active management approaches have the function of efficiently pricing all investments by evaluating opportunities and risks.
    - heading "Additional income through active asset management" [level=2]
    - paragraph:
      - strong: Additional returns, risk management and responsible investing can only be realised through active asset management. That is why we are a fundamentally active asset manager.
    - heading "We are a fundamentally active asset manager" [level=3]
    - paragraph: We are convinced that the capital markets do not adequately reflect the current information situation in many areas. Behavioural psychological influences in particular distort a fundamentally appropriate price. Strictly organised and robustly positioned teams, clearly defined and proven investment philosophies and investment processes are the basis for achieving additional returns. To ensure that this is not only possible today, but also tomorrow, we are constantly working on the further development of our teams and processes.
    - paragraph: Additional income through active asset management is at the heart of our mission. Our clients also value our long-term partnership-based cooperation, our extensive expertise and experience as a fundamentally active asset manager, our direct access to portfolio managers and our high level of expertise in individual solutions from a single location.
    - heading "Empowering Sustainable Growth" [level=3]
    - heading "One location" [level=4]
    - group:
      - paragraph: At our location in Frankfurt, we combine the resources of a global manager with the short communication channels of a boutique. The resulting close networking, combined with a high level of transparency, ensures an intensive exchange of investment-relevant information and a unique investment culture.
    - heading "Responsible investing" [level=4]
    - group:
      - paragraph: As a trustee, we support measures such as active shareholder engagement, which aims to sustainably increase the value of these companies in the long term through personal company visits, speaking engagements and voting behaviour at annual general meetings.
    - heading "Our teams" [level=4]
    - group:
      - paragraph: In sector trios, we analyse companies simultaneously from an owner, creditor and sustainability perspective in order to achieve robust analysis results. In this environment, we regularly train the portfolio managers of tomorrow so that we can deliver strong results not only today, but also tomorrow.
  `);
});

test('Semantic Headline Structure – Example B', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-headline--semantic-headline-structure-example-b&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Sustainable Investments" [level=1]
    - paragraph: As well as the comprehensive integration of environmental, social and corporate governance (ESG) aspects into our investment process, we want to play a role in making our future sustainable by steadily stepping up our engagement activities and collaborative work.
    - heading "In the spotlight" [level=2]
    - heading "Infrastructure sector on course for growth" [level=3]
    - group:
      - paragraph: To meet the challenges of the future, infrastructure must be expanded globally. Climate protection, demographic change, urbanisation and digitalisation - these are four major megatrends and task areas of economic transformation.
      - link "Read article":
        - /url: javascript:void(0)
    - heading "Turn of the times – from a sustainability perspective" [level=3]
    - group:
      - paragraph: Russia's attack on Ukraine marks a fundamental turning point - many are already talking about a new world order. Does the world situation change the view on sustainable investments?
      - link "Read article":
        - /url: javascript:void(0)
    - heading "Our expertise" [level=2]
    - paragraph: We started to apply sustainability criteria long before sustainable investing became a widespread trend and we have been systematically developing our expertise ever since. In addition, we are promoting the transformation towards a more sustainable economy through our engagement activities, our membership in organisations and our participation in initiatives.
    - heading "Investment Process" [level=3]
    - group:
      - paragraph: In-depth fundamental analysis, active portfolio management and consideration of environmental, social and governance (ESG) criteria throughout the investment process make it possible to systematically exploit market inefficiencies in order to achieve risk-adjusted outperformance for our clients.
      - link "To the blog post":
        - /url: javascript:void(0)
    - heading "Engagement" [level=3]
    - group:
      - paragraph: /As an internationally active shareholder, Union Investment attended a total of \\d+,\\d+ annual general meetings in \\d+ countries last year\\. We pursue an engagement strategy that builds on active shareholder action and shareholder dialogue to influence corporate policy\\./
      - link "To the blog post":
        - /url: javascript:void(0)
  `);
});
