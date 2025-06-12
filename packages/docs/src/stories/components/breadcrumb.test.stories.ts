import { html } from 'lit-html';
import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

export default {
  title: 'Components/sd-breadcrumb/Screenshots: sd-breadcrumb',
  component: 'sd-breadcrumb',
  tags: ['!autodocs'],
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
        <sd-breadcrumb-item href="#">Third level</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Forth level</sd-breadcrumb-item>
        <sd-breadcrumb-item current>Current</sd-breadcrumb-item>
      `
    }
  ]),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Truncated = {
  render: (args: any) => {
    return html`<div style="width: 300px;">${generateTemplate({ args })}</div>`;
  }
};

export const Mobile = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  },
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
