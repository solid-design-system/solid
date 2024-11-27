import '../../../../components/src/solid-components';

import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-option-group');
const { overrideArgs } = storybookHelpers('sd-option-group');
const { generateTemplate } = storybookTemplate('sd-option-group');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-option-group/Screenshots: sd-option-group',
  tags: ['!autodocs'],
  component: 'sd-option-group',
  args: overrideArgs([
    {
      name: 'default',
      type: 'slot',
      value: `
        <sd-option value="1">Option 1</sd-option>
        <sd-option value="2">Option 2</sd-option>
        <sd-option value="3">Option 3</sd-option>
      `
    },
    {
      name: 'label',
      type: 'attribute',
      value: 'Section 1'
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/W0LTcrsplIFyHJonYNyqsG/Solid-DS-%E2%80%93-Component-Library?m=auto&node-id=29654-2771&t=Do65Udn4cACM7ww3-1'
    }
  }
};

/**
 * Use <sd-option-group> to group listbox items visually.
 */

export const Default = {
  name: 'Default',
  parameters: {
    controls: {
      disable: false
    }
  },
  render: (args: unknown) => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox>
        ${generateTemplate({ args })}
        <sd-option-group>
          <span slot="label">Section 2</span>
          <sd-option value="4">Option 4</sd-option>
        </sd-option-group>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the disabled attribute in the <syn-optgroup> to disable the Section and prevent it from being selected.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox>
        <sd-option-group label="Section 1" disabled>
          <sd-option value="1">Option</sd-option>
          <sd-option value="2">Option</sd-option>
          <sd-option value="3">Option</sd-option>
        </sd-option-group>
      </sd-combobox>
    </div>
  `
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */
export const Slots = {
  name: 'Slots',
  parameters: {
    controls: {
      exclude: ['open-attr']
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    return html`
      ${['default', 'label'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background"><sd-option >Option 1</sd-option><sd-option >Option 2</sd-option></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background h-6 ${
                          slot === 'label' || slot === 'help-text' ? 'w-20' : 'w-6'
                        }"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [{ type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `form-control`,
 `form-control-label`,
 `form-control-input`,
 `form-control-help-text`,
 `combobox`,
 `display-input`,
 `listbox`,
 `tags`,
 `tag`,
 `tag__base`,
 `tag__content`,
 `tag__removable-indicator`,
 `clear-button`, and
 `expand-icon` part selectors to customize the combobox component.
 */

const partsArr = ['base', 'label-container', 'divider', 'options'];

export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: []
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-option-group::part(...){outline: solid 2px red}',
          values: partsArr.map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-option-group::part(${part}){outline: solid 2px red; outline-offset: 2px} ::part(popup__content){overflow-y: visible} ::part(tag__removable-indicator){display: block} ::part(tag__content){display: block}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
        }
      ],
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Disabled, Slots]);
