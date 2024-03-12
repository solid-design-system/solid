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
 * Used to highlight and convey important key figures. The component consists of overline, number, subline and description. Supernumber is used as a subcomponent inside sd-container.
 * countUp.js is used to animate the number. You can find more information about the library in the [countUp.js documentation](https://github.com/inorganik/CountUp.js)
 */

export const Default = {
  parameters: {
    docs: { story: { inline: false, height: '350px' } }
  },
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center">
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
 * Use the `prefix` option to add a prefix to the supernumber.
 */

export const Prefix = {
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="with-prefix">0</div>
      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script type="module">
      const prefixDemo = new countUp.CountUp('with-prefix', 1989, {
        enableScrollSpy: true,
        duration: 3,
        prefix: 'Since ',
        separator: ''
      });

      if (!prefixDemo.error) {
        prefixDemo.start();
      } else {
        console.error(prefixDemo.error);
      }
    </script>
  `
};

/**
 * Use the `suffix` option to add a suffix to the supernumber.
 */

export const Suffix = {
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="with-suffix">0</div>
      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script type="module">
      const suffixDemo = new countUp.CountUp('with-suffix', 500, {
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
 * The supernumber can be displayed in three different sizes: `lg`, `md` and `sm`. The size is determined by the font size of the number.
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col items-center gap-4">
      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center">
          <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
          <div class="text-[72px] text-primary" id="lg">0</div>
          <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

          <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>

          <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
          <script type="module">
            const lgDemo = new countUp.CountUp('lg', 200, {
              enableScrollSpy: true,
              duration: 3
            });

            if (!lgDemo.error) {
              lgDemo.start();
            } else {
              console.error(lgDemo.error);
            }
          </script>
        </div>
      </section>

      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center">
          <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
          <div class="text-4xl text-primary" id="md">0</div>
          <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

          <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>

          <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
          <script type="module">
            const mdDemo = new countUp.CountUp('md', 200, {
              enableScrollSpy: true,
              duration: 3
            });

            if (!mdDemo.error) {
              mdDemo.start();
            } else {
              console.error(mdDemo.error);
            }
          </script>
        </div>
      </section>

      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center">
          <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
          <div class="text-3xl text-primary" id="sm">0</div>
          <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

          <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>

          <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
          <script type="module">
            const smDemo = new countUp.CountUp('sm', 200, {
              enableScrollSpy: true,
              duration: 3
            });

            if (!smDemo.error) {
              smDemo.start();
            } else {
              console.error(smDemo.error);
            }
          </script>
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
    <div class="sd-container sd-container--variant-primary flex flex-col items-center">
      <p class="sd-paragraph sd-paragraph--inverted font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-white" id="invertedDemo">0</div>
      <p class="sd-paragraph sd-paragraph--inverted font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm sd-paragraph--inverted text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script type="module">
      const invertedDemo = new countUp.CountUp('invertedDemo', 500, { enableScrollSpy: true, duration: 3 });

      if (!invertedDemo.error) {
        invertedDemo.start();
      } else {
        console.error(invertedDemo.error);
      }
    </script>
  `
};

/**
 * Use the `separator` and `decimal` options to format the supernumber according to your i18n needs. You can find advanced options (eg: custom numerals) in the [countUp.js documentation](https://github.com/inorganik/CountUp.js?tab=readme-ov-file#usage).
 */

export const Internationalization = {
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="i18n">0</div>
      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script type="module">
      const i18nDemo = new countUp.CountUp('i18n', 5000.45, {
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
