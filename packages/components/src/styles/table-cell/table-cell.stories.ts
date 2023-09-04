import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');

/**
 * A paragraph is used to display blocks of text. It uses the base font size and can contain bold and/or link styles.<br>
 * <br>
 * <b>Sizes</b>
 * <li>lg is the default paragraph size.</li>
 * <li>sm can be used as an alternative for tighter spaces.</li>
 */

export default {
  title: 'Styles/sd-table-cell',
  component: 'sd-table-cell',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-paragraph in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<td class="%CLASSES%">%SLOT%</td>' },
      args
    });
  }
};

// TODO: Add sample "Simple Table, First Column Fixed" and "Multi Select Table" as soon as we have sd-scrollable.

/**
 * Examples: This shows how sd-table-cell looks in different contexts.
 */

export const Examples = {
  render: (args: any) => {
    const columns = 5;
    const rows = 5;
    const headerData = Array.from({ length: columns }, () => 'Header');
    const tableData = Array.from({ length: rows }, () => Array.from({ length: columns }, () => 'Content'));
    return html`
      <style>
        .sd-table {
          width: 600px;
        }

        .headline {
          padding: 16px;
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 20px;
          width: 600px;
          box-sizing: border-box;
        }

        div:not(:first-of-type).headline {
          margin-top: 72px;
        }
      </style>
      <div class="headline">Simple Table With Vertical Lines</div>
      <table class="sd-table">
        <thead>
          ${(() => {
            return html`<tr>
              ${headerData.map((cellData, i) => {
                if (i + 1 === headerData.length) {
                  return html`<th class="sd-table-cell sd-table-cell--transparent">${cellData}</th>`;
                }
                return html`<th class="sd-table-cell sd-table-cell--transparent sd-table-cell--divider">
                  ${cellData}
                </th>`;
              })}
            </tr>`;
          })()}
        </thead>
        <tbody>
          ${tableData.map(rowData => {
            return html`<tr>
              ${rowData.map((cellData, i) => {
                if (i + 1 === rowData.length) {
                  return html`<td class="sd-table-cell sd-table-cell--transparent">${cellData}</td>`;
                }
                return html`<td class="sd-table-cell sd-table-cell--transparent sd-table-cell--divider">
                  ${cellData}
                </td>`;
              })}
            </tr>`;
          })}
        </tbody>
      </table>

      <div class="headline">Sortable Table</div>
      <table class="sd-table">
        <thead>
          ${(() => {
            return html`<tr>
              ${headerData.map((cellData, i) => {
                if (i + 1 === headerData.length) {
                  return html`<th class="sd-table-cell sd-table-cell--neutral-100">
                    ${cellData}
                    <sd-button variant="tertiary" size="sm">
                      <sd-icon library="global-resources" name="system/sort-up"></sd-icon>
                    </sd-button>
                  </th>`;
                }
                if (i === 0) {
                  return html`<th class="sd-table-cell sd-table-cell--neutral-100 sd-table-cell--divider">
                    ${cellData}
                    <sd-button variant="tertiary" size="sm">
                      <sd-icon library="global-resources" name="system/sort-down-filled"></sd-icon>
                    </sd-button>
                  </th>`;
                }
                return html`<th class="sd-table-cell sd-table-cell--neutral-100 sd-table-cell--divider">
                  ${cellData}
                  <sd-button variant="tertiary" size="sm">
                    <sd-icon library="global-resources" name="system/sort-up"></sd-icon>
                  </sd-button>
                </th>`;
              })}
            </tr>`;
          })()}
        </thead>
        <tbody>
          ${tableData.map(rowData => {
            return html`<tr>
              ${rowData.map((cellData, i) => {
                if (i + 1 === rowData.length) {
                  return html`<td class="sd-table-cell sd-table-cell--transparent">${cellData}</td>`;
                }
                return html`<td class="sd-table-cell sd-table-cell--transparent sd-table-cell--divider">
                  ${cellData}
                </td>`;
              })}
            </tr>`;
          })}
        </tbody>
      </table>

      <div class="headline">Sortable Table</div>
      <table class="sd-table">
        <thead>
          ${(() => {
            return html`<tr>
              ${headerData.map((cellData, i) => {
                if (i + 1 === headerData.length) {
                  return html`<th class="sd-table-cell sd-table-cell--primary-100">${cellData}</th>`;
                }
                return html`<th class="sd-table-cell sd-table-cell--primary-100 sd-table-cell--divider">
                  ${cellData}
                </th>`;
              })}
            </tr>`;
          })()}
        </thead>
        <tbody>
          ${tableData.map((rowData, j) => {
            return html`<tr>
              ${rowData.map((cellData, i) => {
                if (i + 1 === rowData.length) {
                  if (j % 2 === 0) {
                    return html`<td class="sd-table-cell sd-table-cell--white">${cellData}</td>`;
                  }
                  return html`<td class="sd-table-cell sd-table-cell--white sd-table-cell--primary-100">
                    ${cellData}
                  </td>`;
                }
                if (j % 2 === 0) {
                  return html`<td class="sd-table-cell sd-table-cell--white sd-table-cell--divider">${cellData}</td>`;
                }
                return html`<td class="sd-table-cell sd-table-cell--primary-100 sd-table-cell--divider">
                  ${cellData}
                </td>`;
              })}
            </tr>`;
          })}
        </tbody>
      </table>
    `;
  }
};
