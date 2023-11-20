import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Dev: Temporary development story
 */

export const Dev = {
  render: (args: any) => {
    return html`
      <div class="w-[300px]">
        <sd-select label="Select one">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
        </sd-select>
      </div>
    `;
  }
};
