import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');
const { overrideArgs } = storybookHelpers('sd-select');

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value:
        '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option><sd-option value="option-4">Option 4</sd-option><sd-option value="option-5">Option 5</sd-option>'
    }
  ]),
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
 * Labels: Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.
 */

export const Labels = {
  parameters: {
    exclude: ['label']
  },
  render: (args: any) => {
    return html`<div class="max-w-[500px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'label',
            value: 'Label'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Dev: Temporary development story
 */

export const Dev = {
  render: (args: any) => {
    return html`<div class="max-w-[500px]">
      ${generateTemplate({
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
          },
          {
            type: 'slot',
            name: 'prefix',
            value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
          }
        ],
        args
      })}
    </div>`;
  }
};
