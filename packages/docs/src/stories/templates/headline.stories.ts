import '../../../../components/src/solid-components';
import { html } from 'lit';

export default {
  tags: ['!dev'],
  title: 'Templates/Headline',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=10605-124&t=lVchX51znSU5V9tR-0'
    }
  }
};

export const SemanticHeadlineStructureExampleA = {
  name: 'Semantic Headline Structure – Example A',
  render: () =>
    html`<div>
      <h1 class="sd-headline mt-0 mb-8">
        A prerequisite for functioning capital markets: fundamentally active asset management
      </h1>
      <p class="sd-leadtext mb-24">
        Active and passive management approaches have a valuable but different function in the investment of investment
        funds. Fundamentally active management approaches have the function of efficiently pricing all investments by
        evaluating opportunities and risks.
      </p>

      <div class="sd-prose mb-8">
        <h2 class="sd-headline sd-headline--size-3xl mb-8">Additional income through active asset management</h2>
        <p class="sd-paragraph pb-6 mt-0 mb-8">
          <strong>
            Additional returns, risk management and responsible investing can only be realised through active asset
            management. That is why we are a fundamentally active asset manager.
          </strong>
        </p>

        <h3 class="sd-headline sd-headline--size-xl mb-8 !mt-0">We are a fundamentally active asset manager</h3>
        <p class="sd-paragraph">
          We are convinced that the capital markets do not adequately reflect the current information situation in many
          areas. Behavioural psychological influences in particular distort a fundamentally appropriate price. Strictly
          organised and robustly positioned teams, clearly defined and proven investment philosophies and investment
          processes are the basis for achieving additional returns. To ensure that this is not only possible today, but
          also tomorrow, we are constantly working on the further development of our teams and processes.
        </p>

        <p class="sd-paragraph">
          Additional income through active asset management is at the heart of our mission. Our clients also value our
          long-term partnership-based cooperation, our extensive expertise and experience as a fundamentally active
          asset manager, our direct access to portfolio managers and our high level of expertise in individual solutions
          from a single location.
        </p>
      </div>

      <sd-teaser inset="" breakpoint="538" style="--distribution-media: 20%; --distribution-content: 80%;">
        <div slot="media" class="flex flex-wrap justify-center items-center h-[189px] md:h-full">
          <sd-icon class="text-[96px]" name="content/city-apartment" color="primary"></sd-icon>
        </div>
        <h4 slot="headline" class="sd-headline sd-headline--size-lg">One location</h4>
        <div class="flex flex-col gap-5">
          <p class="sd-paragraph">
            At our location in Frankfurt, we combine the resources of a global manager with the short communication
            channels of a boutique. The resulting close networking, combined with a high level of transparency, ensures
            an intensive exchange of investment-relevant information and a unique investment culture.
          </p>
        </div>
      </sd-teaser>

      <sd-teaser inset="" breakpoint="538" style="--distribution-media: 20%; --distribution-content: 80%;">
        <div slot="media" class="flex flex-wrap justify-center items-center h-[189px] md:h-full">
          <sd-icon class="text-[96px]" name="content/hand-plant" color="primary"></sd-icon>
        </div>
        <h4 slot="headline" class="sd-headline sd-headline--size-lg">Responsible investing</h4>
        <div class="flex flex-col gap-5">
          <p class="sd-paragraph">
            As a trustee, we support measures such as active shareholder engagement, which aims to sustainably increase
            the value of these companies in the long term through personal company visits, speaking engagements and
            voting behaviour at annual general meetings.
          </p>
        </div>
      </sd-teaser>

      <sd-teaser inset="" breakpoint="538" style="--distribution-media: 20%; --distribution-content: 80%;">
        <div slot="media" class="flex flex-wrap justify-center items-center h-[189px] md:h-full">
          <sd-icon class="text-[96px]" name="content/group-speech-bubble" color="primary"></sd-icon>
        </div>
        <h4 slot="headline" class="sd-headline sd-headline--size-lg">Our teams</h4>
        <div class="flex flex-col gap-5">
          <p class="sd-paragraph">
            In sector trios, we analyse companies simultaneously from an owner, creditor and sustainability perspective
            in order to achieve robust analysis results. In this environment, we regularly train the portfolio managers
            of tomorrow so that we can deliver strong results not only today, but also tomorrow.
          </p>
        </div>
      </sd-teaser>
    </div> `
};

export const SemanticHeadlineStructureExampleB = {
  name: 'Semantic Headline Structure – Example B',
  render: () =>
    html`<div>
      <section class="grid grid-cols-8 gap-8 pb-8 mb-16">
        <h1 class="sd-headline sd-headline--size-lg m-0 col-span-2">Sustainable Investments</h1>

        <p class="sd-paragraph col-span-6">
          As well as the comprehensive integration of environmental, social and corporate governance (ESG) aspects into
          our investment process, we want to play a role in making our future sustainable by steadily stepping up our
          engagement activities and collaborative work.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="sd-headline mb-8">In the spotlight</h2>
        <div class="flex flex-col gap-8 md:flex-row pb-8">
          <sd-teaser variant="white" breakpoint="9999" class="flex-1 flex flex-col">
            <div slot="media" class="relative">
              <img src="./placeholders/images/architecture.jpg" alt="" class="aspect-4/3 object-cover" />
            </div>
            <h3 slot="headline" class="sd-headline sd-headline--size-lg mb-8">
              Infrastructure sector on course for growth
            </h3>
            <div class="flex flex-col gap-5 mt-4">
              <p>
                To meet the challenges of the future, infrastructure must be expanded globally. Climate protection,
                demographic change, urbanisation and digitalisation - these are four major megatrends and task areas of
                economic transformation.
              </p>
              <div class="flex-none">
                <sd-button href="javascript:void(0)" variant="primary">Read article</sd-button>
              </div>
            </div>
          </sd-teaser>
          <sd-teaser variant="white" breakpoint="9999" class="flex-1 flex flex-col">
            <div slot="media" class="relative">
              <img src="./placeholders/images/family.jpg" alt="" class="aspect-4/3 object-cover" />
            </div>
            <h3 slot="headline" class="sd-headline sd-headline--size-lg mb-8">
              Turn of the times – from a sustainability perspective
            </h3>
            <div class="flex flex-col gap-5 mt-4">
              <p>
                Russia's attack on Ukraine marks a fundamental turning point - many are already talking about a new
                world order. Does the world situation change the view on sustainable investments?
              </p>
              <div class="flex-none">
                <sd-button href="javascript:void(0)" variant="primary">Read article</sd-button>
              </div>
            </div>
          </sd-teaser>
        </div>
      </section>

      <section>
        <h2 class="sd-headline mb-8">Our expertise</h2>
        <p class="sd-paragraph mb-8">
          We started to apply sustainability criteria long before sustainable investing became a widespread trend and we
          have been systematically developing our expertise ever since. In addition, we are promoting the transformation
          towards a more sustainable economy through our engagement activities, our membership in organisations and our
          participation in initiatives.
        </p>
        <div class="flex flex-col gap-8 md:flex-row">
          <sd-teaser variant="white" breakpoint="9999" class="flex-1 flex flex-col">
            <div slot="media" class="relative">
              <img src="./placeholders/images/skyline.jpg" alt="" class="aspect-4/3 object-cover" />
            </div>
            <h3 slot="headline" class="sd-headline sd-headline--size-lg mb-8">Investment Process</h3>
            <div class="flex flex-col gap-5 mt-4">
              <p>
                In-depth fundamental analysis, active portfolio management and consideration of environmental, social
                and governance (ESG) criteria throughout the investment process make it possible to systematically
                exploit market inefficiencies in order to achieve risk-adjusted outperformance for our clients.
              </p>
              <div class="flex-none">
                <sd-button href="javascript:void(0)" variant="primary">To the blog post</sd-button>
              </div>
            </div>
          </sd-teaser>
          <sd-teaser variant="white" breakpoint="9999" class="flex-1 flex flex-col">
            <div slot="media" class="relative">
              <img src="./placeholders/images/collaboration.jpg" alt="" class="aspect-4/3 object-cover" />
            </div>
            <h3 slot="headline" class="sd-headline sd-headline--size-lg mb-8">Engagement</h3>
            <div class="flex flex-col gap-5 mt-4">
              <p>
                As an internationally active shareholder, Union Investment attended a total of 1,756 annual general
                meetings in 33 countries last year. We pursue an engagement strategy that builds on active shareholder
                action and shareholder dialogue to influence corporate policy.
              </p>
              <div class="flex-none">
                <sd-button href="javascript:void(0)" variant="primary">To the blog post</sd-button>
              </div>
            </div>
          </sd-teaser>
        </div>
      </section>
    </div> `
};
