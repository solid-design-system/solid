import { html } from 'lit-html';
import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

/**
 * Used to visualize a page's location within the site's hierarchy and provide easy navigation to previous sections.
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/79bDuD6NL6ssJHLwBJCpdy/Solid-DS-%E2%80%93-Component-Library?node-id=38860-1316&t=J6mvYDg507RR7LeU-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-breadcrumb-item href="#">First level</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Second level</sd-breadcrumb-item>
        <sd-breadcrumb-item current>Current</sd-breadcrumb-item>
      `
    }
  ]),
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Inverted = {
  render: (args: any) => {
    return html`
      <div class="bg-primary p-10">
        ${generateTemplate({
          args: {
            ...args,
            inverted: true
          }
        })}
      </div>
    `;
  }
};
