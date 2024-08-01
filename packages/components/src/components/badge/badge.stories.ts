import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-badge');
const { overrideArgs } = storybookHelpers('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge');

/**
 *
 * The badge can be used to display a number or status. It can be used in combination with other components to draw attention to specific information.
 *
 * **Related templates**:
 * - [Button with Badge](?path=/docs/templates-button-with-badge--docs)
 */

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frKFVz9UBKAtsvErLKTeGj/Badge?type=design&node-id=0-1&mode=design&t=OeLPPGif39ASuNmf-0'
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
 * Use the `size` attribute to set the badge’s size. The default size is `md` but you can also use `sm` and `lg`.
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
 * Use the `variant` attribute to set the badge’s variant. The default variant is `default` but you can also use `success` and `error`.
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="flex gap-12">
      <sd-badge variant="default">Default</sd-badge>
      <sd-badge variant="success">Success</sd-badge>
      <sd-badge variant="error">Error</sd-badge>
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
      <sd-badge inverted>Inverted</sd-badge>
    </div>
  `
};
