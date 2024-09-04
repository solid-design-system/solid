import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-mark');
const { overrideArgs } = storybookHelpers('sd-mark');
const { generateTemplate } = storybookTemplate('sd-mark');

/**
 * Used to highlight text sections in the accent color.
 *
 * Use the `<mark>` html element with the class `sd-mark` for regular fonts-sizes at 24px and above, and use bold fonts at 18.67px.
 */

export default {
  title: 'Styles/sd-mark',
  tags: ['!dev'],
  component: 'sd-mark',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<mark class="%CLASSES%">%SLOT%</mark>' },
      args
    });
  }
};

/**
 * Use with other elements such as `sd-display` or `sd-leadtext`.
 */

export const Examples = {
  render: () => html`
    <p class="sd-display">
      Lorem
      <mark class="sd-mark">Ipsum</mark>
    </p>

    <p class="sd-leadtext">
      Lorem
      <mark class="sd-mark">Ipsum</mark>
    </p>
  `
};
