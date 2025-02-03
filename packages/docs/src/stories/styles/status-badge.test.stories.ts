import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-status-badge');
const { overrideArgs } = storybookHelpers('sd-status-badge');
const { generateTemplate } = storybookTemplate('sd-status-badge');
const { generateScreenshotStory } = storybookUtilities;

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Styles/sd-status-badge/Screenshots: sd-status-badge',
  tags: ['!autodocs'],
  component: 'sd-status-badge',
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=18391-37775&t=LaSTkqB8MKXGCZbc-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Active`
    },
    { type: 'attribute', name: 'class', value: 'sd-status-badge--success' }
  ]),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Variants = {
  name: 'Variants',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-status-badge--variant',
            values: [
              'sd-status-badge--success',
              'sd-status-badge--warning',
              'sd-status-badge--error',
              'sd-status-badge--info'
            ]
          }
        ]
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Variants]);
