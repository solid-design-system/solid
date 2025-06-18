import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb');
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
      type: 'attribute',
      name: 'label',
      value: 'Breadcrumbs'
    },
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

/**
 * Whenever the breadcrumb has no available space it automatically truncates.
 *
 * Disclaimer: When window size is lower than 1024px the breadcrumb assumes the mobile view and only the second to last breadcrumb item appears.
 */
export const Truncated = {
  render: (args: any) => {
    return html`<div style="width: 200px; height: 200px;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
                <sd-breadcrumb-item href="#">First level</sd-breadcrumb-item>
                <sd-breadcrumb-item href="#">Second level</sd-breadcrumb-item>
                <sd-breadcrumb-item href="#">Third level</sd-breadcrumb-item>
                <sd-breadcrumb-item href="#">Fourth level</sd-breadcrumb-item>
                <sd-breadcrumb-item current>Current</sd-breadcrumb-item>
              `
          }
        ]
      })}
    </div>`;
  }
};
