import '../../../../components/src/solid-components';
import { html, render } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');
const { generateTemplate } = storybookTemplate('sd-copyright');

/**
 * Used to be displayed at the bottom of an image for example.
 *
 * Use the `--copyright` CSS property and the class `sd-copyright` in the parent of any element to set a copyright text.
 *
 * ** Related template:**
 * - [Media with Copyright](?path=/docs/templates-media--docs#copyright)
 * - [Video with Copyright](?path=/docs/templates-video--docs#video%20element%20with%20copyright)
 * - [Teaser Media with Copyright](?path=/docs/templates-teaser-media--docs#teaser%20media%20with%20copyright)
 */
export default {
  title: 'Styles/sd-copyright',
  tags: ['!dev'],
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
      value: `<div class="sd-container sd-container--variant-white"/></div>`
    },
    {
      '--copyright': '© 2024 Solid Design System'
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
 * Use the `sd-copyright--color-black` for alternative appearances.
 *
 * **Accessibility Hint:** Do not use it on media.
 */
export const Variants = {
  render: () =>
    html`<div class="flex flex-row">
      <div class="sd-copyright max-w-xl w-1/2" style="--copyright: '© 2024 Solid Design System';">
        <div class="sd-container sd-container--variant-primary"></div>
      </div>
      <div
        class="sd-copyright sd-copyright--color-black max-w-xl w-1/2"
        style="--copyright: '© 2024 Solid Design System';"
      >
        <div class="sd-container"></div>
      </div>
    </div>`
};

/**
 * Use the `sd-copyright--no-shadow` class to remove the shadow to the text.
 */
export const NoShadow = {
  render: () =>
    html` <div
      class="sd-copyright sd-copyright--no-shadow max-w-xl"
      style="--copyright: '© 2024 Solid Design System';"
    >
      <div class="sd-container sd-container--variant-primary"></div>
    </div>`
};

/**
 * Use the `sd-copyright--orientation-vertical` class to set the orientation to vertical.
 */
export const Orientation = {
  render: () =>
    html`<div class="flex flex-col">
      <div class="sd-copyright sd-copyright max-w-xl" style="--copyright: '© 2024 Solid Design System';">
        <div class="sd-container sd-container--variant-white"></div>
      </div>
      <div
        class="sd-copyright sd-copyright--orientation-vertical max-w-xl aspect-video"
        style="--copyright: '© 2024 Solid Design System';"
      >
        <div class="sd-container sd-container--variant-white"></div>
      </div>
    </div>`
};

/**
 * Use the `sd-copyright--placement-top` class to set the copyright placement.
 *
 * **Accessibility Hint:** Use when copyright is displayed in a video.
 */
export const Placement = {
  render: () =>
    html` <div
      class="sd-copyright sd-copyright--placement-top max-w-xl"
      style="--copyright: '© 2024 Solid Design System';"
    >
      <div class="sd-container sd-container--variant-primary"></div>
    </div>`
};
