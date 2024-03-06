import '../../solid-components';
import { html } from 'lit-html';

export default {
  title: 'Pattern/supernumber',
  component: 'Supernumber',
  parameters: {
    docs: { story: { inline: false, height: '275px' } },
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
  render: () => html`
    <div class="flex flex-col items-center mx-auto">
      <p class="sd-paragraph font-bold">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="countup">XXXX</div>
      <p class="sd-paragraph font-bold">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-center w-1/2">
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
 * Used to highlight and convey important key figures. The component consists of overline, number, subline and description. Supernumber is used as a subcomponent inside ui-container.
 */

export const Prefix = {
  render: () => html`
    <div class="flex flex-col items-center mx-auto">
      <p class="sd-paragraph font-bold">Nisi eu excepteur anim esse</p>
      <div class="text-[72px] text-primary" id="with-prefix">XXXX</div>
      <p class="sd-paragraph font-bold">Nisi eu excepteur anim esse</p>

      <p class="sd-pararaph sd-paragraph--size-sm text-center w-1/2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
        magna aliquyam erat
      </p>
    </div>

    <script src="https://inorganik.github.io/countUp.js/dist/countUp.umd.js"></script>
    <script>
      const demo = new countUp.CountUp('with-prefix', 1989, { enableScrollSpy: true, duration: 3, prefix: 'Since ' });

      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    </script>
  `
};
