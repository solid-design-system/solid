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
 * Default: This shows sd-select in its default state.
 */

export const DevDynamic = {
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option><sd-option value="option-4">Option 4</sd-option><sd-option value="option-5">Option 5</sd-option>'
        },
        {
          type: 'attribute',
          name: 'clearable',
          value: true
        },
        {
          type: 'attribute',
          name: 'multiple',
          value: true
        }
      ],
      args
    });
  }
};

/**
 * Dev: Temporary development story
 */

export const Dev = {
  render: () => {
    return html`
      <div class="w-[500px]">
        <sd-select multiple checklist clearable label="Label" help-text="help-text">
          <sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
          <sd-option value="option-4">Option 4</sd-option>
          <sd-option value="option-5">Option 5</sd-option>
        </sd-select>
      </div>
    `;
  }
};
