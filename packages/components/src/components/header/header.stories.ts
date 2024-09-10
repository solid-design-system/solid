import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-header');
const { generateTemplate } = storybookTemplate('sd-header');
const { overrideArgs } = storybookHelpers('sd-header');

/**
 * Used as a container for the main navigation of a website.<br />Appears at the top of all pages of a website or application containing logo and main navigation and if applicable sub-brand logo and meta navigation.
 *
 *  **Related components**
 * - [sd-navigation-item](?path=/docs/components-sd-navigation-item--docs)
 *
 *
 *  **Related templates**
 * - [Header](?path=/docs/templates-header--docs)
 */

export default {
  title: 'Components/sd-header',
  component: 'sd-header',
  tags: ['!dev'],
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text">Default slot</div>`
    }
  ]),
  argTypes,
  parameters: { ...parameters, docs: { story: { inline: false, height: '200px' } } },
  decorators: [
    withActions,
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
