import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Dialog',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3268-12022&t=JCsisVFNkWSlhSSN-4'
    }
  },
  decorators: [
    (story: any) => html`
      <style>
        #anchor--templates-dialog--default .innerZoomElementWrapper,
        #anchor--templates-dialog--scrollable .innerZoomElementWrapper,
        #anchor--templates-dialog--prevent-closing .innerZoomElementWrapper {
          min-height: 750px;
        }
      </style>
      ${story()}
    `
  ] as unknown
};

/**
 *
 */
export const Default = {
  name: 'Dialog with Button Group',
  render: () => html`
    <!-- TODO: remove once this bugfix is addressed: https://github.com/solid-design-system/solid/issues/1325 -->
    <style>
      @media (min-width: 414px) {
        sd-dialog::part(footer) {
          width: 100%;
          margin: 0;
        }
      }
    </style>

    <sd-button id="drawer-trigger">Open Dialog</sd-button>
    <sd-dialog id="dialog" open>
      <span slot="headline" class="sd-headline sd-headline--size-3xl">Cancel your subscription?</span>
      <p class="sd-paragraph">Your subscription will be canceled immediately. You can resubscribe at any time.</p>
      <div slot="footer" class="flex flex-col-reverse sm:flex-row justify-end w-full gap-2">
        <sd-button class="w-full sm:w-auto" variant="secondary" size="lg" type="button"> Maybe later </sd-button>
        <sd-button class="w-full sm:w-auto" variant="primary" size="lg" type="button"> Cancel </sd-button>
      </div>
    </sd-dialog>
    <script type="module">
      const dialog = document.getElementById('dialog');
      const buttons = dialog.querySelectorAll('sd-button');
      const trigger = document.getElementById('drawer-trigger');

      trigger.addEventListener('click', () => {
        dialog.show();
      });

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          dialog.hide();
        });
      });
    </script>
  `
};

export const Scrollable = {
  name: 'Dialog with scrollable content',
  render: () => html`
    <style>
      sd-button::part(icon-left) {
        justify-content: end;
      }
    </style>

    <sd-button id="scrollable-drawer-trigger">Open Dialog</sd-button>

    <sd-dialog id="scrollable-dialog" open no-close-button>
      <span slot="headline" class="sd-headline sd-headline--size-3xl">Terms of use</span>
      <sd-scrollable orientation="vertical" step="150" shadows>
        <div class="items-start justify-start h-[300px] lg:h-[454px] space-y-5">
          <h3 class="sd-headline sd-headline--size-lg">Important notices to our investors</h3>
          <p class="sd-paragraph">
            By accepting this document, you accept the following restrictions as binding on you:
          </p>
          <p class="sd-paragraph">
            This investor information is intended exclusively for professional clients who are already invested in the
            fund. The contents of this document have been compiled by Union Investment Institutional GmbH with
            reasonable care and to the best of its knowledge. The presentations and explanations are based on our own
            assessment at the time this document was prepared and on information from our own or publicly available
            sources that we believe to be reliable. However, Union Investment has not fully verified the information
            provided by third parties and can therefore accept no liability for its currency, accuracy or completeness.
            All index and product names of companies other than Union Investment may be the copyrighted and trademarked
            products and brands of these companies.
          </p>
          <p class="sd-paragraph">
            This document is intended solely for internal use. Therefore, it may not be reproduced, modified, or
            summarized in whole or in part, redistributed to other persons, or made accessible or published to other
            persons in any other way. No liability is accepted for disadvantages arising directly or indirectly from the
            distribution, use, modification, and summary of this document or its contents. This marketing communication
            does not constitute an investment recommendation and does not replace individual investment advice from a
            suitable investment advisor, nor the assessment of individual circumstances by a lawyer or tax advisor.
            Insofar as reference is made to fund units or individual securities, this may constitute an analysis within
            the meaning of Art. 36 para. 1 Delegated Regulation (EU) 2017/565. If this document is made accessible to an
            indefinite group of persons, redistributed, published, or modified or summarized contrary to the above
            provisions, the user of this document may be subject to the provisions of § 85 para. 1 WpHG in conjunction
            with Art. 3 nos. 34 and 35, Art. 20 Market Abuse Regulation (EU) (investment recommendation and investment
            strategy recommendation) as well as Art. 36 paras. 1 and 2 of the Delegated Regulation (EU) 2017/565 on
            MiFID II (financial analysis), the requirements for customer information to retail and professional clients
            (Art. 44 Regulation (EU) 2017/565), and the special provisions issued by the European and national
            supervisory authorities. Information on the performance of funds and the classification into risk
            classes/color schemes of funds and other products of Union Investment is based on past performance and/or
            volatility.
          </p>
          <p class="sd-paragraph">
            No statement is made about future performance. The foreign currency quota takes into account the entire fund
            assets, including target fund resolution and cash. The key figures average yield, average coupon, average
            remaining maturity, average duration, and modified duration are calculated including target fund resolution
            based on the fixed-income assets and taking into account cash and derivatives. In the calculation of the
            average remaining maturity, floaters are considered with their final maturity. The average rating is a
            proprietary calculation by Union Investment (Union Comp Rating) based on the fixed-income assets, taking
            into account cash and excluding derivatives. All allocation views and the fund structure are based on the
            target fund-resolved economic holdings of the fund. Hedging positions through derivatives are offset.
          </p>
          <p class="sd-paragraph">
            All allocation views are presented excluding cash and foreign and real estate funds. The allocation of the
            fund structure is based on Union Investment Group’s own asset allocation. The allocations may differ from
            those in the annual and semi-annual reports. The sector allocation for equities is based on MSCI sectors or
            for fixed income on Merrill-Lynch sectors of the assets. The distribution yield in % is the “current yield”
            in the respective fiscal year. The basis for this is the net asset value at the beginning of the respective
            fiscal year, adjusted for the distribution included in the previous fiscal year.
          </p>
          <p class="sd-paragraph">
            The Sustainable Finance Disclosure Regulation (SFDR) regulates disclosure requirements for financial
            products. Art. 6 products do not take sustainability into account, Art. 8 promotes ecological and social
            characteristics. Art. 9 products have sustainable investments as their investment objective.
          </p>
          <p class="sd-paragraph">
            Any front-end load is fully passed on to the fund’s intermediary. If you subscribe directly with Union
            Investment, this does not apply.
          </p>
          <p class="sd-paragraph">
            Please read the prospectus and the key information document before making a final investment decision. These
            contain detailed product-specific information, particularly on investment objectives, investment principles,
            opportunities and risks, as well as explanations of the fund’s risk profile. These documents, as well as the
            investment conditions and the annual and semi-annual reports, form the sole binding basis for the purchase
            of the fund. They are available free of charge in German from Union Investment Institutional GmbH,
            Weißfrauenstraße 7, 60311 Frankfurt am Main, Tel. +49 69 2567-7652, Fax +49 69 2567-1010,
            <sd-link href="http://institutional@union-investment.de">institutional@union-investment.de</sd-link>,
            <sd-link href="http://www.institutional.union-investment.de">www.institutional.union-investment.de</sd-link
            >. If the document concerns a sustainable fund, you will find information on the sustainability-relevant
            aspects of the fund at
            <sd-link href="https://ui-link.de/fondspreisseite">https://ui-link.de/fondspreisseite</sd-link>.
          </p>
          <p class="sd-paragraph">
            A summary of your investor rights in German and further information on collective redress mechanisms can be
            found under “Notices and Complaints” at
            <sd-link href="https://ui-link.de/richtlinien">https://ui-link.de/richtlinien</sd-link>. The respective
            fund-issuing company may decide at any time to revoke any arrangements it may have made for the distribution
            of shares of a fund and/or share classes of a fund in a member state other than its home member state,
            subject to the conditions of Art. 93a of Directive 2009/65/EC and Art. 32a of Directive 2011/61/EU.
          </p>
        </div>
      </sd-scrollable>
      <div slot="footer" class="flex flex-col-reverse md:flex-row justify-end w-full gap-2">
        <sd-button class="close-dialog" variant="secondary" size="lg" type="button" aria-label="Close">
          <sd-icon name="system/log-out" slot="icon-left"></sd-icon>
          Exit portal
        </sd-button>
        <sd-button class="download" variant="secondary" size="lg" type="button">
          <sd-icon name="system/download" slot="icon-left"></sd-icon>
          Download PDF
        </sd-button>
        <sd-button class="close-dialog" variant="primary" size="lg" type="button"> Accept terms of use </sd-button>
      </div>
    </sd-dialog>

    <script type="module">
      const dialog = document.getElementById('scrollable-dialog');
      const buttons = dialog.querySelectorAll('.close-dialog');
      const download = dialog.querySelector('.download');
      const trigger = document.getElementById('scrollable-drawer-trigger');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          dialog.hide();
        });
      });

      download.addEventListener('click', () => {
        alert('Download PDF');
      });

      trigger.addEventListener('click', () => {
        dialog.show();
      });
    </script>
  `
};

/**
 *  This shows ways to prevent closing `sd-dialog`. This is useful for instances when data loss will occur.
 *
 *  To keep the dialog open in such cases, cancel the `sd-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user’s attention to it.
 *  Use `event.detail.source` to specify a closing trigger.
 */
export const PreventClosing = {
  name: 'Prevent Closing',
  render: () => {
    return html`
      <div style="height: 40vh;">
        <div class="flex gap-2">
          <sd-button id="open-dialog">Open Dialog</sd-button>
          <sd-button id="open-timed-dialog">Open Timed Dialog</sd-button>
        </div>

        <sd-dialog id="default-dialog">
          <p class="sd-paragraph">This dialog will not close when you click on the overlay.</p>
          <span slot="headline" class="sd-headline sd-headline--size-3xl">Dialog</span>
          <sd-button slot="footer" class="w-full" id="close-button">Close</sd-button>
        </sd-dialog>

        <script>
          // Prevent closing the dialog when clicking on the overlay
          const openDialogButton = document.querySelector('#open-dialog');
          const defaultDialog = document.querySelector('#default-dialog');

          const closeButton = document.querySelector('#close-button');

          closeButton.addEventListener('click', () => defaultDialog.hide());
          openDialogButton.addEventListener('click', () => defaultDialog.show());

          defaultDialog.addEventListener('sd-request-close', event => {
            if (event.detail.source === 'overlay') {
              event.preventDefault();
            }
          });
        </script>

        <sd-dialog id="timed" headline="Timed Dialog" no-close-button>
          <div id="countdown">Closable in 5 seconds...</div>
          <sd-button slot="footer" class="w-full" id="timed-close-button" visually-disabled>
            Close <span id="close-countdown" class="sr-only">. Closable in 5 seconds...</span>
          </sd-button>
        </sd-dialog>

        <script>
          // Prevent closing the dialog for a certain amount of time
          const openTimedDialogButton = document.querySelector('#open-timed-dialog');
          const countdownElement = document.querySelector('#countdown');
          const closeCountdownElement = document.querySelector('#close-countdown');
          const timedCloseButton = document.querySelector('#timed-close-button');

          const timedDialog = document.querySelector('#timed');
          let canCloseTimedDialog = false;

          timedCloseButton.addEventListener('click', () => timedDialog.hide());

          openTimedDialogButton.addEventListener('click', () => {
            timedCloseButton.visuallyDisabled = true;
            timedDialog.show();
            canCloseTimedDialog = false;
            let counter = 5;
            countdownElement.textContent = 'Closable in ' + counter + ' seconds...';
            closeCountdownElement.textContent = '. ' + countdownElement.textContent;

            const interval = setInterval(() => {
              counter--;
              /**
               * NOTE: The closeCountdownElement is not updated every second to avoid
               * disrupting screen readers when announcing the current text.
               */
              countdownElement.textContent = 'Closable in ' + counter + ' seconds...';

              if (counter <= 0) {
                clearInterval(interval);
                canCloseTimedDialog = true;
                timedCloseButton.visuallyDisabled = false;
                countdownElement.textContent = 'You can now close the dialog.';
                closeCountdownElement.textContent = '. You can now close the dialog.';
              }
            }, 1000);
          });

          timedDialog.addEventListener('sd-request-close', event => {
            if (!canCloseTimedDialog) {
              event.preventDefault();
            }
          });
        </script>
      </div>
    `;
  }
};
