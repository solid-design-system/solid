import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table');
const { overrideArgs } = storybookHelpers('sd-table');
const { generateTemplate } = storybookTemplate('sd-table');

/**
 * Used to reset the styles of a table to predefined values. To style table cells use the `sd-table-cell` component.
 *
 * **Related components**:
 * - [sd-table-cell](?path=/docs/styles-sd-table-cell--docs)
 */

export default {
  title: 'Styles/sd-table',
  tags: ['!dev'],
  component: 'sd-table',
  parameters: {
    ...parameters
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: 'Lorem ipsum dolor sit amet.'
  }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<table class="%CLASSES% w-full"><tr><td>%SLOT%</td></tr></table>' },
      args
    });
  }
};

/**
 * Use `default` slot to add content to the table.
 */
export const Slot = {
  render: () => html`
    <table class="sd-table w-full">
      <tbody>
        <tr>
          <td>Lorem ipsum dolor sit amet.</td>
        </tr>
      </tbody>
    </table>
  `
};
