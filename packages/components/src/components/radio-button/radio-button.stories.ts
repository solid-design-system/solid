import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

/**
 * Used to switch between different options or views by selecting one option from a group.
 *
 * Similar to `sd-radio`, it has to be slotted inside of an `sd-radio-group`. It does not have an invalid state and should always have a pre-selected option (default value).
 *
 * **Related components:**
 * - [sd-radio](?path=/docs/components-sd-radio--default--docs)
 * - [sd-radio-group](?path=/docs/components-sd-radio-group--default--docs)
 *
 * **Related templates:**
 * - [Radio Button Group](?path=/docs/templates-radio-button-group--docs)
 */

export default {
  title: 'Components/sd-radio-button',
  tags: ['!dev'],
  component: 'sd-radio-button',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: 'Radio Button'
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2269-23138&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex flex-col gap-12">
      <sd-radio-group value="1" size="lg">
        <sd-radio-button value="1">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Large
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Large
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Large
        </sd-radio-button>
      </sd-radio-group>

      <sd-radio-group value="1">
        <sd-radio-button value="1" size="md">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Medium
        </sd-radio-button>
        <sd-radio-button value="2" size="md">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Medium
        </sd-radio-button>
        <sd-radio-button value="3" size="md">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Medium
        </sd-radio-button>
      </sd-radio-group>

      <sd-radio-group value="1" size="sm">
        <sd-radio-button value="1">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Small
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Small
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Small
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `checked` attribute to set the state of the radio button to checked.
 */

export const Checked = {
  name: 'Checked',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group value="1">
        <sd-radio-button value="1">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Checked
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Checked
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Checked
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `default` slot to add a label.
 */

export const Label = {
  name: 'Label',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group value="1">
        <sd-radio-button value="1">
          <div>Label</div>
        </sd-radio-button>

        <sd-radio-button value="2">
          <div>Label</div>
        </sd-radio-button>

        <sd-radio-button value="3">
          <div>Label</div>
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `icon` slot to add system icons.
 */

export const Icon = {
  name: 'Icon',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group value="1">
        <sd-radio-button value="1">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable an input radio button.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group value="1">
        <sd-radio-button value="1">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Active
        </sd-radio-button>
        <sd-radio-button value="2" disabled>
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Disabled
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          Active
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};
