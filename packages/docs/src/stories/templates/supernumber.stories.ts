import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Supernumber',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3724-4897&t=ilrs806pHHSfnwKM-4'
    }
  }
};

export const SupernumberSizes = {
  render: () => html`
    <div class="flex flex-col gap-4">
      <section>
        <p class="sd-display">size lg</p>
        <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
          <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>
        </div>
      </section>

      <section>
        <p class="sd-display">size md</p>
        <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
          <div class="text-4xl text-primary leading-[48px]">XXX</div>
        </div>
      </section>

      <section>
        <p class="sd-display">size sm</p>
        <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
          <div class="text-3xl text-primary leading-[38.4px]">XXX</div>
        </div>
      </section>
    </div>
  `
};

export const OverlineSublineDescription = {
  name: 'Supernumber with Overline, Subline and Description',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <p class="sd-paragraph font-bold mb-2">Fixed Income</p>
      <div class="text-[72px] text-primary leading-[86.4px]">176,5</div>
      <p class="sd-paragraph font-bold my-4">Including money market instruments</p>
      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Breakdown of total assets under management by asset class in billion euros, as of 28 June 2024
      </p>
    </div>
  `
};

export const Inverted = {
  name: 'Supernumber Inverted with Overline, Subline and Description',
  render: () => html`
    <div class="sd-container sd-container--variant-primary flex flex-col items-center text-center">
      <p class="sd-paragraph sd-paragraph--inverted font-bold mb-2">Fixed Income</p>
      <div class="text-[72px] text-white leading-[86.4px]">176,5</div>
      <p class="sd-paragraph sd-paragraph--inverted font-bold my-4">Including money market instruments</p>
      <p class="sd-pararaph sd-paragraph--size-sm sd-paragraph--inverted text-base text-center pt-2">
        Breakdown of total assets under management by asset class in billion euros, as of 28 June 2024
      </p>
    </div>
  `
};

/**
 * Use the countUp.js library to animate a number.
 *
 * __Hint:__ Find more information in the [countUp.js documentation](https://github.com/inorganik/CountUp.js?tab=readme-ov-file#usage).
 */

export const SupernumberAnimation = {
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="countup">0</div>
    </div>

    <script type="module">
      import { CountUp } from './countup/countUp.min.js';
      const countup = new CountUp('countup', 500, {
        enableScrollSpy: true,
        duration: 3
      });

      if (!countup.error) {
        countup.start();
      } else {
        console.error(countup.error);
      }
    </script>
  `
};

/**
 * Use the prefix option of countUp.js to add a prefix to the supernumber.
 *
 * __Hint:__ Open the 'show code' section to see the script.
 */
export const SupernumberAnimationPrefix = {
  name: 'Supernumber Animation with Prefix',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="with-prefix">0</div>
      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        We have stood for forward-looking real estate investments and active asset management for more than 55 years. We
        present our approach and our philosophy of investing in real estate to you here.
      </p>
    </div>

    <script type="module">
      import { CountUp } from './countup/countUp.min.js';

      const countup = new CountUp('with-prefix', 1989, {
        enableScrollSpy: true,
        duration: 3,
        prefix: 'Since ',
        separator: ''
      });

      if (!countup.error) {
        countup.start();
      } else {
        console.error(countup.error);
      }
    </script>
  `
};

/**
 * Use the `suffix` option of `countUp.js` to add a suffix to the supernumber.
 *
 * __Hint:__ Open the 'show code' section to see the script.
 */

export const SupernumberAnimationSuffix = {
  name: 'Supernumber Animation with Suffix',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="with-suffix">0</div>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        We have stood for forward-looking real estate investments and active asset management for more than 55 years. We
        present our approach and our philosophy of investing in real estate to you here.
      </p>
    </div>

    <script type="module">
      import { CountUp } from './countup/countUp.min.js';

      const suffixDemo = new CountUp('with-suffix', 55, {
        enableScrollSpy: true,
        duration: 3,
        suffix: ' years'
      });

      if (!suffixDemo.error) {
        suffixDemo.start();
      } else {
        console.error(suffixDemo.error);
      }
    </script>
  `
};

/**
 * Use the `separator` and `decimal` options to format the supernumber according to your i18n needs.
 *
 * __Hint:__ Find advanced options (eg: custom numerals) in the [countUp.js documentation](https://github.com/inorganik/CountUp.js?tab=readme-ov-file#usage).
 */

export const SupernumberSeperatorDecimal = {
  name: 'Supernumber Animation with Separator and Decimal',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="i18n">0</div>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script type="module">
      import { CountUp } from './countup/countUp.min.js';

      const i18nDemo = new CountUp('i18n', 5000.45, {
        enableScrollSpy: true,
        duration: 3,
        decimalPlaces: 2,
        separator: '.',
        decimal: ','
      });

      if (!i18nDemo.error) {
        i18nDemo.start();
      } else {
        console.error(i18nDemo.error);
      }
    </script>
  `
};
