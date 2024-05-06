import '../../solid-components';
import { html } from 'lit-html';

export default {
  title: 'Pattern/supernumber',
  component: 'Supernumber',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?type=design&node-id=1663-16481&mode=design&t=4Vn3XDKjLjm0AT1X-0'
    }
  }
};

/**
 * Used to highlight and convey important key figures. The pattern consists of overline, number, subline and description. Supernumber is used as a subcomponent inside sd-container.
 *
 * Supernumbers are preferably entered in the form of numbers, but can also be entered in the form of text in order to fulfill certain use cases.
 */

export const Default = {
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>
    </div>
  `
};

/**
 * The supernumber can be displayed with description. The description is displayed below the number, or (if exists) suffix.
 */

export const Description = {
  name: 'Description (optional)',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>
      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>
  `
};

/**
 * The supernumber can be displayed with a prefix. The overline is displayed above the number.
 */

export const Overline = {
  name: 'Overline (optional)',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>
    </div>
  `
};

/**
 * The supernumber can be displayed with a subline. The subline is displayed below the number.
 */

export const Subline = {
  name: 'Subline (optional)',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>
      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>
    </div>
  `
};

/**
 * This is a sample of the supernumber with an overline, subline & description.
 */

export const PrefixSuffix = {
  name: 'Overline, Subline & Description (optional)',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>

      <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>

      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>
  `
};

/**
 * The supernumber can be displayed in three different sizes: `lg`, `md` and `sm`. The size is determined by the font size of the number. As a general guideline, use `md` when the pattern is smaller than 400px. Use `sm` when the pattern is smaller than 300px.
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col items-center gap-4">
      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
          <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>

          <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>
        </div>
      </section>

      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
          <div class="text-4xl text-primary leading-[48px]">XXX</div>

          <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>
        </div>
      </section>

      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
          <div class="text-3xl text-primary leading-[38.4px]">XXX</div>

          <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>
        </div>
      </section>
    </div>
  `
};

/**
 * The supernumber can be displayed as an inverted variant.
 */

export const Inverted = {
  render: () => html`
    <div class="sd-container sd-container--variant-primary flex flex-col items-center text-center">
      <div class="text-[72px] text-white leading-[86.4px]">XXX</div>

      <p class="sd-pararaph sd-paragraph--size-sm sd-paragraph--inverted text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>
  `
};

/**
 * This is a sample of how countUp.js can be used to animate the number. You can find more information about the library in the [countUp.js documentation](https://github.com/inorganik/CountUp.js).
 */

export const Animation = {
  name: 'Sample: Animation',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="countup">0</div>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
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
 * Use the `prefix` option of `countUp.js` to add a prefix to the supernumber. Open the 'show code' section to see the script.
 */

export const AnimationPrefix = {
  name: 'Sample: Animation Prefix (optional)',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="with-prefix">0</div>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
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
 * Use the `suffix` option of `countUp.js` to add a suffix to the supernumber. Open the 'show code' section to see the script.
 */

export const AnimationSuffix = {
  name: 'Sample: Animation Suffix (optional)',
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]" id="with-suffix">0</div>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script type="module">
      import { CountUp } from './countup/countUp.min.js';

      const suffixDemo = new CountUp('with-suffix', 500, {
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
 * Use the `separator` and `decimal` options to format the supernumber according to your i18n needs. You can find advanced options (eg: custom numerals) in the [countUp.js documentation](https://github.com/inorganik/CountUp.js?tab=readme-ov-file#usage).
 */

export const AnimationInternationalization = {
  name: 'Sample: Animation Internationalization',
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
