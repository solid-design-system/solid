import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-skeleton');
storybookTemplate('sd-skeleton');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=/docs/templates-skeleton--docs)
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
  args: {
    ...args
  },
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs'
    }
  }
};

export const Default = {
  render: () => {
    return html`
      <div class="flex flex-row gap-4 w-[392px] mx-auto">
        <div class="flex flex-col gap-4 w-full">
          <sd-skeleton class="h-8"></sd-skeleton>
          <sd-skeleton class="h-4"></sd-skeleton>
          <sd-skeleton class="h-4"></sd-skeleton>
          <sd-skeleton class="w-8 h-4"></sd-skeleton>
        </div>
      </div>
    `;
  }
};
