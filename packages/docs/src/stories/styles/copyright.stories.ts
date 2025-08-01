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
      '--copyright': '© Union Investment 2025'
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
 * Use the `sd-copyright--color-*` class for alternative appearances:
 *
 * - white is the default color
 * - `sd-copyright--color-black`
 */
export const Variants = {
  render: () =>
    html` <div class="flex">
      <div class="sd-copyright flex-1" style="--copyright: '© Union Investment 2025';">
        <div class="sd-container sd-container--variant-primary h-full"></div>
      </div>
      <div class="sd-copyright sd-copyright--color-black flex-1" style="--copyright: '© Union Investment 2025';">
        <div class="sd-container sd-container--variant-border-neutral-400 h-full"></div>
      </div>
    </div>`
};

/**
 * Use the `sd-copyright--no-shadow` class to remove the shadow.
 *
 * __Hint:__ the class `sd-copyright--color-black` automaticaly removes the shadow.
 */
export const NoShadow = {
  render: () =>
    html` <div class="flex">
      <div class="sd-copyright sd-copyright--no-shadow flex-1" style="--copyright: '© Union Investment 2025';">
        <div class="sd-container sd-container--variant-primary h-full"></div>
      </div>
      <div class="sd-copyright sd-copyright--color-black flex-1" style="--copyright: '© Union Investment 2025';">
        <div class="sd-container sd-container--variant-border-neutral-400 h-full"></div>
      </div>
    </div>`
};

/**
 * Use the `sd-copyright--orientation-*` classes to set  the axis of a copyright:
 *
 * - horizontal is the default orientation
 * - `sd-copyright--orientation-vertical`
 */
export const Orientation = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-4">
      <div class="sd-copyright max-w-xl" style="--copyright: '© Union Investment 2025';">
        <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover" />
      </div>

      <div
        class="sd-copyright sd-copyright--orientation-vertical max-w-xl"
        style="--copyright: '© Union Investment 2025';"
      >
        <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover" />
      </div>
    </div>`
};

/**
 * Use the `sd-copyright--placement-*` class to set the copyright placement:
 *
 * - bottom is the default placement
 * - `sd-copyright--placement-top`
 *
 */
export const Placement = {
  render: () =>
    html` <style>
        .sd-copyright::after {
          z-index: 10;
        }
      </style>
      <div class="grid grid-cols-2 gap-4">
        <div class="sd-copyright max-w-xl" style="--copyright: '© Union Investment 2025';">
          <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover h-full" />
        </div>

        <div class="sd-copyright sd-copyright--placement-top max-w-xl" style="--copyright: '© Union Investment 2025';">
          <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover h-full" />
        </div>
      </div>`
};
