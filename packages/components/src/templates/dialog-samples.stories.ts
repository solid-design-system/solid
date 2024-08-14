import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Dialog samples',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

/**
 * TODO: Add description and adjust story height.
 *
 * ```
 * ```
 */

export const Default = {
  name: 'Dialog with accordion',
  render: () => html`
    <style>
      sd-dialog::part(footer) {
        margin-left: 0;
      }
    </style>
    <div class="min-h-[100vh]">
      <sd-dialog id="dialog" open>
        <h4 slot="headline" class="sd-headline sd-headline--size-3xl">Terms of Use</h4>
        <div class="flex flex-col gap-4">
          <p class="sd-paragraph">By accepting the Terms of Use, you agree to be bound by the following limitations.</p>
          <sd-accordion-group close-others>
            <sd-accordion open summary="Terms of Use Fund Overview">
              <div class="space-y-5">
                <h4 class="sd-headline sd-headline--size-base">Binding restrictions and notices on use</h4>
                <p class="sd-paragraph">
                  The monthly reports and fact sheets on the fund price list are intended exclusively for professional
                  clients and suitable counterparties. The contents of these documents were compiled by Union Investment
                  Institutional GmbH with appropriate care and to the best of its knowledge. The representations and
                  explanations are based on our own assessment at the time these documents were created as well as on
                  information from our own or publicly available sources that are believed to be reliable. However,
                  Union Investment has not fully checked the information provided by third parties and can therefore
                  assume no liability for its timeliness, accuracy or completeness. All index or product names of
                  companies other than Union Investment may be copyrighted and trademarked products and brands of these
                  companies.
                </p>
                <p class="sd-paragraph">
                  Please note that monthly reports are not prepared with the focus on fulfilling our investors'
                  regulatory purposes. Reports for regulatory purposes can be found under the Regulatory section.
                </p>
                <h4 class="sd-headline sd-headline--size-base">
                  Restrictions and disclaimers for the use of documents
                </h4>
                <p class="sd-paragraph">
                  All documents are for informational purposes only and are intended for internal use only. They may
                  therefore not be reproduced, changed or summarized in whole or in part, redistributed to other people,
                  or made accessible or published to other people in any other way. No liability is assumed for any
                  disadvantages that arise directly or indirectly from the distribution, use or modification and
                  combination of these documents or their content. They do not constitute an investment recommendation
                  and do not replace individual investment advice from a suitable investment advisor, nor the assessment
                  of individual circumstances by a lawyer or tax advisor. These documents only contain promotional
                  statements and product information about funds from the Union Investment Group regarding individual
                  financial instruments and are therefore not a financial analysis. If, contrary to the aforementioned
                  provisions, these documents are made accessible to an undetermined group of people, are redistributed,
                  published or changed or summarized in any other way, the user of the documents may comply with the
                  provisions of Section 85 Para. 1 WpHG in conjunction with. V. m. Art. 3 Numbers 34 and 35, Art. 20
                  Market Abuse Regulation (EU) (investment recommendation and investment strategy recommendation) as
                  well as Art. 36 Para. 1 and Para. 2 of the Delegated Regulation (EU) 2017/565 on MiFID II (financial
                  analysis) and are subject to the special regulations issued by the European and national supervisory
                  authorities.
                </p>
                <p class="sd-paragraph">
                  Information on the performance of funds and the classification into risk classes/color system of funds
                  and other Union Investment products are based on past performance and/or volatility. This does not
                  make any statement about future performance.
                </p>
                <h4 class="sd-headline sd-headline--size-base">
                  Detailed information and sources of supply for Union Investment funds
                </h4>
                <p class="sd-paragraph">
                  For detailed product-specific information and information on the opportunities and risks of the Union
                  Investment funds mentioned, please refer to the current sales prospectuses, the investment conditions,
                  the basic information sheets and the annual and semi-annual reports, which you can download free of
                  charge in German Union Investment Institutional GmbH, Weißfrauenstraße 7, 60311 Frankfurt am Main,
                  telephone +49 69 2567-7652, fax +49 69 2567-1010, institutional@union-investment.de,
                  https://institutional.union-investment.de, receive. These documents form the only binding basis for
                  the purchase. You can find a summary of your investor rights in German and further information on
                  collective redress instruments under “Notices and Complaints”. Union Investment Institutional GmbH may
                  decide at any time to revise any arrangements it may have made for the distribution of shares of a
                  fund and/or share classes of a fund in a Member State other than its home Member State, under the
                  conditions of Article 93a of Directive 2009/65/ EC and Article 32a of Directive 2011/61/EU.
                </p>
                <p class="sd-paragraph">
                  The status of all information, representations and explanations are stated on the documents.
                </p>

                <div class="flex justify-end">
                  <sd-button variant="secondary" size="lg" type="button">
                    Download PDF
                    <sd-icon library="global-resources" name="system/download" slot="icon-left"></sd-icon>
                  </sd-button>
                </div>
              </div>
            </sd-accordion>
            <sd-accordion summary="Terms of Use VAG Reporting">
              <div class="slot slot--border slot--text h-16">Default slot</div>
            </sd-accordion>
            <sd-accordion summary="Terms of use CRR and sustainability reporting">
              <div class="slot slot--border slot--text h-16">Default slot</div>
            </sd-accordion>
          </sd-accordion-group>
        </div>

        <div slot="footer" class="flex flex-col w-full space-y-5">
          <sd-button variant="primary" size="lg" type="button"> Accept terms of use </sd-button>
          <sd-button variant="secondary" size="lg" type="button"> Download terms of use as PDF </sd-button>
          <sd-button variant="secondary" size="lg" type="button"> Exit IK portal </sd-button>
          <p class="sd-paragraph text-center">
            If you have any questions or concerns, <sd-link href="#">contact us</sd-link>.
          </p>
        </div>
      </sd-dialog>
    </div>
  `
};
