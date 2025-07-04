import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

/**
 * Used to visualize a page's location within the site's hierarchy and provide easy navigation to previous sections.
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=15550-3896&t=xZeI50k4O0CnwRwc-4'
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
  ])
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
