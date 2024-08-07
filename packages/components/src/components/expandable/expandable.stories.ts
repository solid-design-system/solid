import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-expandable');
const { overrideArgs } = storybookHelpers('sd-expandable');
const { generateTemplate } = storybookTemplate('sd-expandable');

export default {
  title: 'Components/sd-expandable',
  component: 'sd-expandable',
  tags: ['!dev'],
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Expandable shows a brief summary and expands to show additional content.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the inverted attribute to make an expandable with inverted colors.
 */
export const Inverted = {
  name: 'Inverted',
  render: () => {
    return html` <sd-expandable inverted="">
      <div class="slot slot--border slot--text h-16">Default slot</div>
    </sd-expandable>`;
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
