import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tab-panel');
const { overrideArgs } = storybookHelpers('sd-tab-panel');
const { generateTemplate } = storybookTemplate('sd-tab-panel');

/**
 * Used inside `sd-tab-group` to display tabbed content.
 *
 * Use the `default` slot to add content.
 *
 * **Related components:**
 * - [sd-tab](?path=/docs/components-sd-tab--docs)
 * - [sd-tab-group](?path=/docs/components-sd-tab-group--docs)
 *
 * **Related templates:**
 * - [Tab](?path=/docs/templates-tab--docs)
 */

export default {
  title: 'Components/sd-tab-panel',
  tags: ['!dev'],
  component: 'sd-tab-panel',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--text slot--border">Default Slot</div>`
    },
    {
      type: 'attribute',
      name: 'active',
      value: true
    },
    {
      type: 'cssProperty',
      name: '--padding',
      value: '24px'
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3239-10447&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `active` attribute to set the state to open.
 */

export const Open = {
  render: () => html`
    <sd-tab-panel active>
      <p class="sd-paragraph">
        Nisi facilis doloremque odit ipsam impedit. Aspernatur maiores expedita. Aut voluptates unde dolores quisquam.
      </p>
    </sd-tab-panel>
  `
};
