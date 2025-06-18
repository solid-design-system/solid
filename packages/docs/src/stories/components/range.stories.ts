import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-range');
const { generateTemplate } = storybookTemplate('sd-range');
const { overrideArgs } = storybookHelpers('sd-range');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-range',
  component: 'sd-range',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([{ type: 'attribute', name: 'value', value: '25' }]),
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return html` <div style="height: 80px;">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `label` slot or  attribute to define a descriptive label for the range component, helping users understand its purpose.
 * The label is mandatory to ensure accessibility compliance and provide context for screen readers.
 */
export const Label = {
  render: (args: any) => {
    return html` <div style="height: 80px;">
      ${generateTemplate({ args, constants: [{ type: 'attribute', name: 'label', value: 'Label' }] })}
    </div>`;
  }
};

/**
 * Use the `help-text` slot or attribute to provide additional context or instructions.
 */
export const HelpText = {
  render: (args: any) => {
    return html` <div style="height: 80px;">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'help-text', value: 'Help text' }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the `disabled` attribute to disable the range.
 */
export const Disabled = {
  render: (args: any) => {
    return html` <div style="height: 80px;">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Disabled' },
          { type: 'attribute', name: 'disabled', value: true }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the `min` and `max` attributes to define the minimum and maximum values of the range.
 *
 * The `step` attribute sets the interval for adjusting the value, controlling the increment or decrement when the user interacts with the slider.
 */
export const MinMaxStep = {
  name: 'Min, Max and Step',
  render: (args: any) => {
    return html` <div style="height: 80px;">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'min', value: '0' },
          { type: 'attribute', name: 'max', value: '200' },
          { type: 'attribute', name: 'step', value: '25' }
        ]
      })}
    </div>`;
  }
};
