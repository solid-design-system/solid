/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-carousel');
const { overrideArgs } = storybookHelpers('sd-carousel');
const { generateTemplate } = storybookTemplate('sd-carousel');

/**
 * Carousels display an arbitrary number of content slides along a horizontal axis.
 *
 * **Related templates**:
 * - [Carousel with Images](?path=/docs/templates-carousel-with-images--docs)
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
  parameters: { ...parameters },
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

/**
 * This shows sd-carousel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `variant` attribute to select the pagination format.
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="flex gap-12">
      <div>
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
        <sd-carousel>
      </div>
      <div>
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
        <sd-carousel>
      </div>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  name: 'Inverted',
  render: () => html`
    <div class="bg-primary p-8">
      <sd-carousel inverted>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
      <sd-carousel>
    </div>
  `
};

/**
 * Use the `loop` attribute to enable/disable the looping of your slides.
 */

export const Loop = {
  name: 'Loop',
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
      <sd-carousel>
    </div>
  `
};

/**
 * Use the `autoplay` attribute to toggle autoplay.
 */

export const Autoplay = {
  name: 'Autoplay',
  render: () => html`
    <div>
      <sd-carousel autoplay>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 1</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 2</div>
        </sd-carousel-item>
        <sd-carousel-item>
          <div class="slot slot--border slot--text h-16">Default slot 3</div>
        </sd-carousel-item>
      <sd-carousel>
    </div>
  `
};

/**
 * Use the `slides-per-page` attribute to set the number of slides that would be shown at a given time.
 */

export const SlidesPerPage = {
  name: 'Slides Per Page',
  render: () => html`
    <div>
      <sd-carousel slides-per-page='2' variant="dot">
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
      <sd-carousel>
    </div>
  `
};

/**
 * Use `slides-per-move` to set how many slides the carousel advances when scrolling. This is useful when specifying a `slides-per-page` greater than one. By setting `slides-per-move` to the same value as `slides-per-page`, the carousel will advance by one page at a time.<br>
 * <b>Note:</b><br>
 * <li> The number of slides should be divisible by the number of `slides-per-page` to maintain consistent scroll behavior.</li>
 * <li>Variations between `slides-per-move` and `slides-per-page` can lead to unexpected scrolling behavior. Keep your intended UX in mind when adjusting these values.</li>
 */

export const SlidesPerMove = {
  name: 'Slides Per Move',
  render: () => html`
    <div>
      <sd-carousel slides-per-page="2" slides-per-move='2' variant="dot">
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
      <sd-carousel>
    </div>
  `
};
