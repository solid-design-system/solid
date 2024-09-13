import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');

/**
 * Used to organize and structured content, scanning, comparing, and analyzing the data.
 *
 * Offers basic styling for table cells. It is designed to be used in conjunction with the ”sd-table” component.
 *
 * **Related Components**:
 * - [sd-table](?path=/docs/styles-sd-table--docs)
 *
 * **Related Templates**:
 * - [Table](?path=/docs/templates-table--docs)
 */

export default {
  title: 'Styles/sd-table-cell',
  tags: ['!dev'],
  component: 'sd-table-cell',
  parameters: {
    ...parameters
  },
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Table Cell' },
    { type: 'attribute', name: 'sd-table-cell--bg-...', value: 'transparent' }
  ]),
  argTypes
};

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
 * Use the `&--bg-*`class for alternative appearances.
 *
 * - `transparent` (default)
 * - `white`
 * - `primary-100`
 * - `neutral-100`
 */

export const Variants = {
  render: () => {
    return html`
      <div class="grid grid-cols-2 gap-8">
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-transparent">Transparent</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-white">White</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-primary-100">Primary-100</td>
            </tr>
          </tbody>
        </table>
        <table class="sd-table">
          <tbody>
            <tr class="relative">
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">Neutral-100</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
};

/**
 * Use the `&--divider` class to toggle vertical dividers.
 */

export const Divider = {
  render: () => {
    return html`
      <table class="sd-table w-[325px]">
        <thead>
          <tr>
            <td class="font-bold sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Header</td>
          </tr>
        </thead>
        <tbody>
          <tr class="relative">
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          </tr>
          <tr class="relative">
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          </tr>
        </tbody>
      </table>
    `;
  }
};

/**
 * Use `&--shadow-*` to add a shadow to columns or rows. This is especially useful when the table is scrollable with sticky headers.
 *
 * - `right`
 * - `left`
 * - `bottom`
 * - `top`
 */

export const Shadow = {
  render: () => {
    return html`
      <div class="flex flex-col gap-16">
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
      </div>
    `;
  }
};
