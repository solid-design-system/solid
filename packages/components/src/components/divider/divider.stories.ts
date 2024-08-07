import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-divider');
const { generateTemplate } = storybookTemplate('sd-divider');
const { overrideArgs } = storybookHelpers('sd-divider');

/**
 * Used to separate content or sections from each other and make the content easier to read for the user.
 */

export default {
  title: 'Components/sd-divider',
  tags: ['!dev'],
  component: 'sd-divider',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        sd-divider[orientation='vertical'] {
          height: 120px;
        }
        sd-divider[orientation='horizontal'] {
          width: 120px;
        }
        .size-sm sd-divider[orientation='horizontal'] {
          width: 50px;
        }
        .size-sm sd-divider[orientation='vertical'] {
          height: 50px;
        }
        .size-l sd-divider[orientation='horizontal'] {
          width: 150px;
        }
        .size-l sd-divider[orientation='vertical'] {
          height: 150px;
        }
      </style>
      ${story()}
    `
  ]
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * You can set the component's size with `width` (horizontal) or `height` (vertical) via CSS or inline-styles.
 */
export const Sizes = {
  name: 'Sizes',
  render: () => {
    return html` <div class="flex items-center gap-12">
      <div class="size-sm">
        <sd-divider orientation="horizontal"></sd-divider>
      </div>
      <div class="size-l">
        <sd-divider orientation="horizontal"></sd-divider>
      </div>
      <div class="size-sm">
        <sd-divider orientation="vertical"></sd-divider>
      </div>
      <div class="size-l">
        <sd-divider orientation="vertical"></sd-divider>
      </div>
    </div>`;
  }
};

/**
 * Use the `orientation` attribute to set the axis of a divider.
 */
export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-divider orientation="horizontal"></sd-divider>
      <sd-divider orientation="vertical"></sd-divider>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  name: 'Inverted',
  render: () => {
    return html`
      <div class="flex items-center gap-12">
        <sd-divider orientation="horizontal" inverted></sd-divider>
      </div>
    `;
  },
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: 'rgb(var(--sd-color-primary, 0 53 142))'
        }
      ]
    }
  }
};
