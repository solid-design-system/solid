import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table');
const { overrideArgs } = storybookHelpers('sd-table');
const { generateTemplate } = storybookTemplate('sd-table');

export default {
  title: 'Styles/sd-table',
  tags: ['!dev', 'autodocs'],
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

const table = `
  <div class="flex gap-12">
    <table class="border-separate border">
      <thead>
        <tr>
          <th class="border">Lorem ipsum</th>
          <th class="border">Lorem ipsum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border">%SLOT%</td>
          <td class="border">%SLOT%</td>
        </tr>
        <tr>
          <td class="border">%SLOT%</td>
          <td class="border">%SLOT%</td>
        </tr>
      </tbody>
    </table>

    <table class="%CLASSES%">
      <thead>
        <tr>
          <th class="text-left">Lorem ipsum</th>
          <th class="text-left">Lorem ipsum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>%SLOT%</td>
          <td>%SLOT%</td>
        </tr>
        <tr>
          <td>%SLOT%</td>
          <td>%SLOT%</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: `${table}` },
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
