import '../../components/divider/divider';
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
 * Used to highlight and convey important key figures. The component consists of overline, number, subline and description. Supernumber is used as a subcomponent inside ui-container.
 */

export const Default = {
  parameters: {
    docs: { story: { inline: false, height: '350px' } }
  },
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="countup">0</div>
      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script>
      const demo = new countUp.CountUp('countup', 500, { enableScrollSpy: true, duration: 3 });

      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    </script>
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

      <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script>
      let demo1 = new countUp.CountUp('with-prefix', 1989, {
        enableScrollSpy: true,
        duration: 3,
        prefix: 'Since ',
        separator: ''
      });

      if (!demo1.error) {
        demo1.start();
      } else {
        console.error(demo1.error);
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

      <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script>
      let demo2 = new countUp.CountUp('with-suffix', 1989, {
        enableScrollSpy: true,
        duration: 3,
        suffix: ' years',
        separator: ''
      });

      if (!demo2.error) {
        demo2.start();
      } else {
        console.error(demo2.error);
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

          <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>

          <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
          <script>
            let demo3 = new countUp.CountUp('lg', 200, {
              enableScrollSpy: true,
              duration: 3
            });

            if (!demo3.error) {
              demo3.start();
            } else {
              console.error(demo3.error);
            }
          </script>
        </div>
      </section>

      <sd-divider orientation="horizontal"></sd-divider>

      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center">
          <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
          <div class="text-4xl text-primary" id="md">0</div>
          <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

          <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>

          <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
          <script>
            let demo4 = new countUp.CountUp('md', 200, {
              enableScrollSpy: true,
              duration: 3
            });

            if (!demo4.error) {
              demo4.start();
            } else {
              console.error(demo4.error);
            }
          </script>
        </div>
      </section>

      <section>
        <div class="sd-container sd-container--variant-white flex flex-col items-center">
          <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
          <div class="text-3xl text-primary" id="sm">0</div>
          <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

          <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et
            dolore magna aliquyam erat
          </p>

          <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
          <script>
            let demo5 = new countUp.CountUp('sm', 200, {
              enableScrollSpy: true,
              duration: 3
            });

            if (!demo5.error) {
              demo5.start();
            } else {
              console.error(demo5.error);
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

      <p class="sd-pararaph sd-paragraph--size-sm sd-paragraph--inverted text-center  pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script>
      const demoInverted = new countUp.CountUp('invertedDemo', 500, { enableScrollSpy: true, duration: 3 });

      if (!demoInverted.error) {
        demoInverted.start();
      } else {
        console.error(demoInverted.error);
      }
    </script>
  `
};

/**
 * Use the `numerals` option to display the supernumber in a different numeral system depending on your i18n needs.
 */

export const Internationalization = {
  render: () => html`
    <div class="sd-container sd-container--variant-white flex flex-col items-center">
      <p class="sd-paragraph font-bold mb-2">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="i18n">0</div>
      <p class="sd-paragraph font-bold my-4">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-center  pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script>
      const i18nDemo = new countUp.CountUp('i18n', 500, {
        enableScrollSpy: true,
        duration: 3,
        numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
      });

      if (!i18nDemo.error) {
        i18nDemo.start();
      } else {
        console.error(i18nDemo.error);
      }
    </script>
  `
};
