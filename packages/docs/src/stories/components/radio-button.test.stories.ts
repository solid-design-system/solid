import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');
const { generateScreenshotStory } = storybookUtilities;

/**
 * The `sd-radio-button` is a type of a radio-group-item similar to `sd-radio` which can be slotted insde of an `sd-radio-group`.  Radio button provides a button-style control for users to select one option from a group. Unlike `sd-radio`, `sd-radio-button` does not have an invalid state and should always have a pre-selected option (default value).
 */

export default {
  title: 'Components/sd-radio-button/Screenshots: sd-radio-button',
  tags: ['!autodocs', 'skip-a11y-test'],
  component: 'sd-radio-button',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'icon',
      value: '<sd-icon name="system/image" slot="icon"></sd-icon>'
    }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-radio-button in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input radio. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  name: 'Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the show-label attribute to show the label of the radio button.
 */

export const LabelAndSize = {
  name: 'Label × Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      args,
      constants: [{ type: 'slot', name: 'default', value: '<div>Label</div>' }]
    });
  }
};

/**
 * Label only
 */

export const LabelOnly = {
  name: 'Label only',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      constants: [
        { type: 'slot', name: 'default', value: '<div>Label</div>' },
        {
          type: 'slot',
          name: 'icon',
          value: ''
        }
      ],
      args
    });
  }
};

/**
 * Use the disabled attribute to disable an input radio. Clicks will be suppressed until the disabled state is removed. `Checked` is an "internal" attribute but is shown here as an example of all possible combinations.
 */

export const DisabledAndChecked = {
  name: 'Disabled × Checked',
  render: () => {
    return html`
      <div class="flex flex-col gap-4 w-[260px] p-4">
        <sd-radio-button showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot>Default</slot>
        </sd-radio-button>
        <sd-radio-button disabled showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot>Disabled</slot>
        </sd-radio-button>
        <sd-radio-button checked showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot>Checked</slot>
        </sd-radio-button>
        <sd-radio-button checked disabled showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot class="whitespace-nowrap">Disabled and Checked</slot>
        </sd-radio-button>
      </div>
    `;
  }
};

/**
 * Use the `base`, `button`, `button--checked`, `icon` and `label` part selectors to customize the radio-button.
 */
export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio-button::part(...){outline: solid 2px red,}',
          values: ['base', 'button', 'button--checked', 'icon', 'label'].map(part => {
            return {
              title: part,
              value: `
              <style>#part-${part} sd-radio-button::part(${part}){outline: solid 2px red}</style>
              <div id="part-${part}">
                %TEMPLATE%
                ${
                  part === 'button--checked'
                    ? `<script>document.querySelector("#part-${part} sd-radio-button").checked = true;</script>`
                    : ''
                }
              </div>
            `
            };
          })
        }
      },
      args,
      constants: [{ type: 'slot', name: 'default', value: '<div>Label</div>' }]
    });
  }
};

export const Combination = generateScreenshotStory([Default, Size, LabelAndSize, LabelOnly, DisabledAndChecked, Parts]);
