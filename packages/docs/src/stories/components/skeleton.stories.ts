import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-skeleton');
const { overrideArgs } = storybookHelpers('sd-skeleton');
const { generateTemplate } = storybookTemplate('sd-skeleton');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs'
    }
  },
  args: overrideArgs([{ type: 'attribute', name: 'variant', value: 'rectangular' }]),
  argTypes: {
    ...argTypes
  }
};

/**
 * The skeleton component is used to provide a low fidelity representation of content while it loads.
 */

export const Default = {
  render: (args: any) => {
    return html`
      <div class="w-[392px]">
        <div class="flex flex-col gap-4 w-full">
          ${generateTemplate({
            args,
            constants: [{ type: 'attribute', name: 'class', value: 'h-8' }]
          })}
          ${generateTemplate({
            args,
            constants: [{ type: 'attribute', name: 'class', value: 'h-4' }]
          })}
          ${generateTemplate({
            args,
            constants: [{ type: 'attribute', name: 'class', value: 'h-4' }]
          })}
          ${generateTemplate({
            args,
            constants: [{ type: 'attribute', name: 'class', value: 'w-8 h-4' }]
          })}
        </div>
      </div>
    `;
  }
};

/**
 * Use the `variant` attribute to set the skeleton's variant:
 *
 * - rectangular: Variant's height can be adjusted according to needs
 * - circular: Variant's width and height can be adjusted according to needs
 */

export const Variants = {
  render: () => {
    return html`
      <div class="h-full">
        <div class="flex flex-row gap-4 w-full">
          <sd-skeleton class="w-[154px] h-4"></sd-skeleton>
          <sd-skeleton variant="circular" class="h-4 w-4"></sd-skeleton>
        </div>
      </div>
    `;
  }
};
