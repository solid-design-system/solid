import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');

/**
 * Used to organize and structure content, scanning, comparing, and analyzing the data.
 *
 * It is designed to be used inside the ”sd-table” component.
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
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2751-1280&t=uTI8bz6LT5ZxlxSd-4'
    }
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
 * Use the `sd-table-cell` classes for alternative appearances:
 *
 * - `sd-table-cell--bg-transparent` (default)
 * - `sd-table-cell--bg-white`
 * - `sd-table-cell--bg-primary-100`
 * - `sd-table-cell--bg-neutral-100`
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
 * Use the `sd-table-cell--divider` class to toggle vertical dividers.
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
 * Use the `sd-table-cell` classes to add a shadow to columns or rows when the table is scrollable with sticky headers:
 *
 * - `sd-table-cell--shadow-right`
 * - `sd-table-cell--shadow-left`
 * - `sd-table-cell--shadow-bottom`
 * - `sd-table-cell--shadow-top`
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
