import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');

/**
 * The `sd-table-cell` component offers basic styling for table cells.
 * It is designed to be used in conjunction with the `sd-table` component.
 */

export default {
  title: 'Styles/sd-table-cell',
  tags: ['!dev'],
  component: 'sd-table-cell',
  parameters: {
    ...parameters
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
 * Choose from these color variants for alternate table experiences.
 *
 * - `sd-table-cell--bg-transparent`
 * - `sd-table-cell--bg-white`
 * - `sd-table-cell--bg-primary-100`
 * - `sd-table-cell--bg-neutral-100`
 */

export const Variants = {
  render: () => {
    return html`
      <div class="flex gap-4">
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-transparent">bg-transparent</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-white">bg-white</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-primary-100">bg-primary-100</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">bg-neutral-100</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
};

/**
 * As an option vertical dividers can be toggled by selecting divider.
 */

export const Divider = {
  render: () => {
    return html`
      <table class="sd-table">
        <thead>
          <tr>
            <td class="font-bold sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Header</td>
          </tr>
        </thead>
        <tbody>
          <tr class="relative">
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          </tr>
        </tbody>
        <tbody>
          <tr class="relative">
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          </tr>
        </tbody>
      </table>
    `;
  }
};

/**
 * As an option columns or rows can have a shadow included. This is especially useful when the table is scrollable with sticky headers.
 */

export const Shadow = {
  render: () => {
    return html`
      <div class="flex gap-16 flex-wrap">
        <table class="sd-table sample-table">
          <tbody>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active"
              >
                Cell content
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active"
              >
                Cell content
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active "
              >
                Cell content
              </td>
            </tr>
          </tbody>
        </table>

        <table class="sd-table sample-table">
          <tbody>
            <tr>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-bottom sd-table-cell--shadow-active "
              >
                Cell content
              </td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-bottom sd-table-cell--shadow-active "
              >
                Cell content
              </td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-bottom sd-table-cell--shadow-active"
              >
                Cell content
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
          </tbody>
        </table>

        <table class="sd-table sample-table">
          <tbody>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
            <tr>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Cell content
              </td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Cell content
              </td>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-top sd-table-cell--shadow-active "
              >
                Cell content
              </td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table sample-table">
          <tbody>
            <tr>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-right sd-table-cell--shadow-active"
              >
                Cell content
              </td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
            <tr>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-right sd-table-cell--shadow-active"
              >
                Cell content
              </td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
            <tr>
              <td
                class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-right  sd-table-cell--shadow-active "
              >
                Cell content
              </td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
};
