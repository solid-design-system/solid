import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-header');
const { generateTemplate } = storybookTemplate('sd-header');
const { overrideArgs } = storybookHelpers('sd-header');

export default {
  title: 'Components/sd-header',
  component: 'sd-header',
  tags: ['!dev', 'autodocs'],
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text">Default slot</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    docs: { story: { inline: false, height: '200px' } },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2372-57409&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [
    (story: any) =>
      html`<style>
          body.sb-show-main.sb-main-padded {
            padding: 0;
          }
          .innerZoomElementWrapper > * {
            border: none !important;
          }
          @media (max-width: 1024px) and (min-width: 768px) {
            .top-right {
              display: flex;
              gap: 48px;
            }
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * Default: This shows sd-header in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div style="height: 100px;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

/**
 * Use the `fixed` attribute to set the header to a fixed position.
 */

export const Fixed = {
  name: 'Fixed',
  render: () => html`
    <div>
      <sd-header fixed>
        <div class="slot slot--border slot--text">Default slot</div>
      </sd-header>
    </div>
  `
};
