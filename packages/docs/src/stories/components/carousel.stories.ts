/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-carousel');
const { overrideArgs } = storybookHelpers('sd-carousel');
const { generateTemplate } = storybookTemplate('sd-carousel');

/**
 * Used to display an arbitrary number of content slides along a horizontal axis.
 *
 * On touch devices, the slides can be moved by swiping.
 *
 * **Accessibility Hints:**
 * - Chevron buttons are still displayed on touch devices to enable alternative interaction that complies with accessibility requirements.
 * - Add the `role="region"` attribute together with an unique `aria-label` whenever the carousel is an important landmark of the page.
 *
 *
 * **Related components**:
 * - [sd-carousel-item](?path=/docs/components-sd-carousel-item--docs)
 *
 * **Related templates**:
 * - [Carousel](?path=/docs/templates-carousel--docs)
 */

export default {
  title: 'Components/sd-carousel',
  tags: ['!dev'],
  component: 'sd-carousel',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-carousel-item><div class="slot slot--border slot--text h-16">Default slot 1</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-16">Default slot 2</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-16">Default slot 3</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-16">Default slot 4</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-16">Default slot 5</div></sd-carousel-item>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2233-2414&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        sd-carousel {
          padding: 0.5px;
        }
      </style>
      ${story()}
    `
  ]
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `variant` attribute to select the pagination format:
 *
 * - `number` (default): can be used for all use cases
 * - `dot`: can only be used for up to 5 items total
 */

export const Variant = {
  render: () => html`
    <div class="flex gap-12">
      <sd-carousel variant="number">
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
      </sd-carousel>

      <sd-carousel variant="dot">
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
      </sd-carousel>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  render: () => html`
    <div class="bg-primary p-8">
      <sd-carousel inverted>
        <sd-carousel-item>
          <div class="slot slot--border slot--text slot--inverted h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text slot--inverted h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text slot--inverted h-16">Default slot 3</div>
        </sd-carousel-item>
      </sd-carousel>
    </div>
  `
};

/**
 * Use the `loop` attribute to enable the looping of your slides.
 */

export const Loop = {
  render: () => html`
    <div>
      <sd-carousel loop>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
      </sd-carousel>
    </div>
  `
};

/**
 * Use the `autoplay` attribute to toggle autoplay. Autoplay is automatically paused when the user interacts with the carousel or when the pause button is clicked.
 *
 * **Disclaimer**: Press the play button to start autoplay. It’s paused in Storybook to prevent screen reader confusion from multiple carousels on the page.
 *
 */

export const Autoplay = {
  render: () => html`
    <div>
      <sd-carousel class="autoplay" autoplay loop>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
      </sd-carousel>
    </div>
    <script type="module">
      const carousel = document.querySelector('.autoplay');
      carousel?.pause();
    </script>
  `
};

/**
 * Use the `slides-per-page` attribute to set the number of slides displayed at once.
 */

export const SlidesPerPage = {
  name: 'Slides per Page',
  render: () => html`
    <div>
      <sd-carousel slides-per-page="2">
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 4</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 5</div>
        </sd-carousel-item>
      </sd-carousel>
    </div>
  `
};

/**
 * Use the `slides-per-move` attribute to configure the number of slides the carousel scrolls through at a time.
 *
 * This is useful when specifying a `slides-per-page` greater than one. By setting `slides-per-move` to the same value as `slides-per-page`, the carousel will advance by one page at a time.
 *
 * __Hints:__
 *
 * - The number of slides should be divisible by the number of `slides-per-page` to maintain consistent scroll behavior.
 * - Variations between `slides-per-move` and `slides-per-page` can lead to unexpected scrolling behavior. Keep your intended UX in mind when adjusting these values.
 */

export const SlidesPerMove = {
  name: 'Slides per Move',
  render: () => html`
    <div>
      <sd-carousel slides-per-page="3" slides-per-move="3">
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 4</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 5</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 6</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 7</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 8</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 9</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 10</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 11</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 12</div>
        </sd-carousel-item>
      </sd-carousel>
    </div>
  `
};
