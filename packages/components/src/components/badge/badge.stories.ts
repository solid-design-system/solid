import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-badge');
const { overrideArgs } = storybookHelpers('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge');

/**
 *
 * Used to visual indicate a quantity related to a particular element. Often displayed next to an icon or label.
 *
 * **Related templates**:
 * - [Button with Badge](?path=/docs/templates-button-with-badge--docs)
 *
 */

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2116-4927&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: '8' }]),
  argTypes,
  decorators: [withActions] as any
};

/**
 * This shows the badge in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the badge’s variant.
 *
 * - `default`: Utilized for standard emphasis.
 * - `success` and `error`: Alternative color options like green or red are employed to highlight specific notifications, without implying any semantic meaning.
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="flex gap-12">
      <sd-badge variant="default">8</sd-badge>
      <sd-badge variant="success">8</sd-badge>
      <sd-badge variant="error">8</sd-badge>
    </div>
  `
};

/**
 * Use the `size` attribute to set the badge’s size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-badge size="sm">8</sd-badge>
      <sd-badge size="md">8</sd-badge>
      <sd-badge size="lg">8</sd-badge>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  name: 'Inverted',
  render: () => html`
    <div class="flex gap-12 bg-primary p-4">
      <sd-badge inverted>8</sd-badge>
      <sd-badge variant="success" inverted>8</sd-badge>
      <sd-badge variant="error" inverted>8</sd-badge>
    </div>
  `
};

/**
 * The max value is defined by the application.
 *
 * A `+` should be used to show overflow.
 */

export const Overflow = {
  name: 'Overflow',
  render: () => html`
    <div class="flex gap-12 p-4">
      <sd-badge>99</sd-badge>
      <sd-badge>99+</sd-badge>
      <sd-badge>999</sd-badge>
      <sd-badge>999+</sd-badge>
    </div>
  `
};
