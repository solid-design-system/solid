import '../../../../components/src/solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');
const { generateScreenshotStory } = storybookUtilities;

/**
 * The `sd-table-cell` component offers basic styling for table cells.
 * It is designed to be used in conjunction with the `sd-table` component.
 */

export default {
  title: 'Styles/sd-table-cell/Screenshots: sd-table-cell',
  tags: ['!autodocs'],
  component: 'sd-table-cell',
  parameters: {
    ...parameters,
    controls: { disable: true }
  },
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Lorem ipsum dolor sit amet.' },
    { type: 'attribute', name: 'sd-table-cell--bg-...', value: 'transparent' }
  ]),
  argTypes
};

/**
 * This shows sd-table-cell in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: '<table class="sd-table"><tr class="relative"><td class="%CLASSES%">%SLOT%</td></tr></table>'
      },
      args
    });
  }
};

/**
 * This shows the gradient shadow overlay for sd-table-cell--shadow-* when active.
 * Verifies that --tw-gradient-* variables are properly defined so the shadow gradient
 * renders correctly in production environments without Tailwind loaded (fixes #2057).
 */
export const Shadow = {
  name: 'Shadow',
  render: () => {
    return html`
      <div class="flex flex-col gap-8">
        <table class="sd-table">
          <tbody>
            <tr>
              <td class="sd-table-cell sd-table-cell--shadow-right sd-table-cell--shadow-active relative">
                shadow-right
              </td>
              <td class="sd-table-cell">Cell content</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr>
              <td class="sd-table-cell">Cell content</td>
              <td class="sd-table-cell sd-table-cell--shadow-left sd-table-cell--shadow-active relative">
                shadow-left
              </td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr>
              <td class="sd-table-cell sd-table-cell--shadow-bottom sd-table-cell--shadow-active relative">
                shadow-bottom
              </td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr>
              <td class="sd-table-cell sd-table-cell--shadow-top sd-table-cell--shadow-active relative">shadow-top</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([Default, Shadow]);
