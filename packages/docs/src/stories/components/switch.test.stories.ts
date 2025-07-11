import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-switch');
const { generateTemplate } = storybookTemplate('sd-switch');
const { overrideArgs } = storybookHelpers('sd-switch');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-switch/Screenshots: sd-switch',
  component: 'sd-switch',
  tags: ['!autodocs'],
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default slot' }]),
  argTypes,
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/sFzAnWIy3ck28dF4vv1RnE/Switch?node-id=642%3A1032&mode=dev'
    }
  }
};

/**
 * Default: This shows sd-switch in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the disabled attribute to disable an input switch. Clicks will be suppressed until the disabled state is removed
 */

export const Disabled = {
  name: 'Disabled',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        }
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args
    });
  }
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  name: 'Required',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'required' }
      },
      args
    });
  }
};

/**
 * Use the checked attribute to activate the switch.
 */

export const Checked = {
  name: 'Checked',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        }
      },
      constants: { type: 'attribute', name: 'checked', value: true },
      args
    });
  }
};

/**
 * Test checked and disabled states.
 */

export const CheckedAndDisabled = {
  name: 'Checked and Disabled',
  render: (args: any) => {
    return generateTemplate({
      constants: [
        { type: 'attribute', name: 'checked', value: true },
        { type: 'attribute', name: 'disabled', value: true }
      ],
      args
    });
  }
};

/**
 * Test invalid state inside a form.
 */
export const Invalid = {
  name: 'Invalid',
  render: (args: any) => {
    return html`
      <form id="invalid-form">
        ${generateTemplate({
          axis: {
            x: {
              type: 'attribute',
              name: 'checked',
              values: [true, false]
            }
          },
          constants: { type: 'attribute', name: 'required', value: true },
          args
        })}
      </form>
      <script type="module">
        await customElements.whenDefined('sd-switch');
        const switches = document.querySelectorAll('#invalid-form sd-switch');
        switches.forEach((sdSwitch, index) => {
          sdSwitch.id = 'invalid-switch-' + index;
          sdSwitch.click();
          sdSwitch.reportValidity();
          sdSwitch.setCustomValidity('Error text');
        });
      </script>
    `;
  }
};

/**
 * Use the `base`, `control--unchecked`, `control--checked`, `checked` and `label` part selectors to customize the switch.
 */

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-switch::part(...){outline: solid 2px red}',
          values: ['base', 'control', 'control--unchecked', 'control--checked', 'thumb', 'label'].map(part => {
            return {
              title: part,
              value: `
                <style>
                    #part-${part} sd-switch::part(${part}){outline: solid 2px red};
                    .hidden {display: none}
                </style>

                <div id="part-${part}">${
                  part.includes('control--checked')
                    ? '<sd-switch checked>Default slot</sd-switch>'
                    : '<sd-switch>Default slot</sd-switch>'
                }</div>
                <div class="hidden">%TEMPLATE%</div>
              `
            };
          })
        }
      },
      args
    });
  }
};

export const slots = {
  name: 'slots',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'slot',
          name: 'default',
          title: 'slot=...',
          values: [
            {
              value: `<div class="slot slot--border slot--background slot--text" style="--slot-content: ''; --slot-height: 24px; --slot-width: 24px;">Default slot</div>`,
              title: 'default'
            },
            {
              value: `
                <div>Label</div>
                <div
                  class="slot slot--border slot--background slot--text"
                  slot="tooltip"
                  style="--slot-content: ''; --slot-height: 22px; --slot-width: 82px;"
                >
                  Tooltip slot
                </div>`,
              title: 'tooltip'
            }
          ]
        }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Disabled,
  Required,
  Checked,
  CheckedAndDisabled,
  Invalid,
  slots,
  Parts
]);
