import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from 'storybook/actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

export default {
  title: 'Components/sd-radio-button',
  tags: ['!dev', 'autodocs'],
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
    return html`<div tabindex="0" class="w-min focus-visible:focus-outline">${generateTemplate({ args })}</div>`;
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
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Large
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Large
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Large
        </sd-radio-button>
      </sd-radio-group>

      <sd-radio-group value="1" size="md">
        <sd-radio-button value="1" size="md">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Medium
        </sd-radio-button>
        <sd-radio-button value="2" size="md">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Medium
        </sd-radio-button>
        <sd-radio-button value="3" size="md">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Medium
        </sd-radio-button>
      </sd-radio-group>

      <sd-radio-group value="1" size="sm">
        <sd-radio-button value="1">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Small
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Small
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon name="system/image" slot="icon"></sd-icon>
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
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
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
          <sd-icon label="landscape" name="system/image" slot="icon"></sd-icon>
        </sd-radio-button>
        <sd-radio-button value="2">
          <sd-icon label="landscape" name="system/image" slot="icon"></sd-icon>
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon label="landscape" name="system/image" slot="icon"></sd-icon>
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
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
        </sd-radio-button>
        <sd-radio-button value="2" disabled>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Disabled
        </sd-radio-button>
        <sd-radio-button value="3">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * **Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  name: 'Visually Disabled',
  render: () => html`
    <div class="flex gap-12 h-[100px] pt-12">
      <sd-radio-group>
        <sd-radio-button value="1">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
        </sd-radio-button>

        <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm">
          <sd-radio-button value="2" visually-disabled>
            <sd-icon name="system/image" slot="icon"></sd-icon>
            Visually disabled
          </sd-radio-button>
        </sd-tooltip>

        <sd-radio-button value="3">
          <sd-icon name="system/image" slot="icon"></sd-icon>
          Label
        </sd-radio-button>
      </sd-radio-group>
    </div>
  `
};
