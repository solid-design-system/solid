import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');
const { generateTemplate } = storybookTemplate('sd-copyright');

export default {
  title: 'Styles/sd-copyright',
  tags: ['!dev', 'autodocs'],
  component: 'sd-copyright',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2113-30804&t=yS054qhxgjorbMDv-4'
    }
  },
  args: overrideArgs(
    {
      type: 'slot',
      name: 'default',
      value: `<img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover"/>`
    },
    {
      '--copyright': '© Union Investment 2024'
    }
  ),
  argTypes
};

export const Default = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};

/**
 * Use the `sd-copyright` class for alternative appearances:
 *
 * - white is the default color
 * - `sd-copyright--color-black`
 */
export const Variants = {
  render: () =>
    html` <div class="sd-copyright sd-copyright--color-black max-w-xl" style="--copyright: '© Union Investment 2024';">
      <div class="sd-container sd-container--variant-border-neutral-400 h-full"></div>
    </div>`
};

/**
 * Use the `sd-copyright--no-shadow` class to remove the shadow.
 */
export const NoShadow = {
  render: () =>
    html` <div class="sd-copyright sd-copyright--no-shadow max-w-xl" style="--copyright: '© Union Investment 2024';">
      <div class="sd-container sd-container--variant-primary"></div>
    </div>`
};

/**
 * Use the `sd-copyright` classes to set  the axis of a copyright:
 *
 * - horizontal is the default orientation
 * - `sd-copyright--orientation-vertical`
 */
export const Orientation = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-4">
      <div class="sd-copyright max-w-xl" style="--copyright: '© Union Investment 2024';">
        <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover" />
      </div>

      <div
        class="sd-copyright sd-copyright--orientation-vertical max-w-xl"
        style="--copyright: '© Union Investment 2024';"
      >
        <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover" />
      </div>
    </div>`
};

/**
 * Use the `sd-copyright` class to set the copyright placement:
 *
 * - bottom is the default placement
 * - `sd-copyright--placement-top`
 *
 * **Accessibility Hint:** To ensure accessibility use the top placement when display in a video.
 */
export const Placement = {
  render: () =>
    html` <style>
        .sd-copyright::after {
          z-index: 10;
        }
      </style>
      <div class="grid grid-cols-2 gap-4">
        <div class="sd-copyright max-w-xl" style="--copyright: '© Union Investment 2024';">
          <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover h-full" />
        </div>
        <div class="sd-copyright sd-copyright--placement-top" style="--copyright:'© Union Investment 2024'">
          <sd-video class="h-full">
            <video controls="" class="aspect-video">
              <source src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.webm" type="video/webm" />
              <track
                label="English"
                kind="subtitles"
                srclang="en"
                src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.vtt"
                default=""
              />
              Your browser does not support the video tag.
            </video>
            <img
              slot="poster"
              alt="Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
              class="aspect-video object-cover h-full"
              src="./placeholders/images/union-investment.png"
            />
          </sd-video>
        </div>
      </div>`
};
