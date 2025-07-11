import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { args, argTypes, parameters } = storybookDefaults('sd-divider');
const { generateTemplate } = storybookTemplate('sd-divider');

export default {
  title: 'Components/sd-divider',
  tags: ['!dev', 'autodocs'],
  component: 'sd-divider',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2004-3518&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        sd-divider[orientation='vertical'] {
          height: 120px;
        }
        sd-divider[orientation='horizontal'] {
          width: 120px;
        }
      </style>
      ${story()}
    `
  ]
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Set the component's size with width (horizontal) or height (vertical) via CSS or inline-styles.
 */
export const Size = {
  render: () => {
    return html` <div class="flex items-center gap-12">
      <sd-divider orientation="horizontal" style="width: 50px"></sd-divider>
      <sd-divider orientation="horizontal" style="width: 120px"></sd-divider>
      <sd-divider orientation="vertical" style="height: 50px"></sd-divider>
      <sd-divider orientation="vertical" style="height: 120px"></sd-divider>
    </div>`;
  }
};

/**
 * Use the `orientation` attribute to set the axis of a divider:
 *
 * - `horizontal`(default)
 * - `vertical`
 */
export const Orientation = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-divider orientation="horizontal" style="width: 120px"></sd-divider>
      <sd-divider orientation="vertical" style="height: 120px"></sd-divider>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  render: () => {
    return html`
      <div class="flex items-center gap-12 bg-primary p-8">
        <sd-divider orientation="horizontal" style="width: 120px" inverted></sd-divider>
      </div>
    `;
  }
};
