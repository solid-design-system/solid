import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');

/**
 * The sd-table-cell component offers basic styling for table cells.
 * Additionally, it includes a sd-table class, which should be applied to the table element,
 * resetting the default HTML styles for the table.
 */

export default {
  title: 'Styles/sd-table-cell',
  component: 'sd-table-cell',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem ipsum dolor sit amet.' }),
  argTypes
};

/**
 * This shows sd-table-cell in its default state.
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
 * These examples demonstrate the usage of sd-table-cell in various contexts.
 *
 * __Note:__ These examples are intended solely for illustrating how sd-table-cell can be used to style tables.
 * The data generation and table sorting logic should not be used in production environments.
 */

export const Examples = {
  parameters: {
    controls: {
      exclude: [
        'sd-table-cell--divider',
        'sd-table-cell--white',
        'sd-table-cell--transparent',
        'sd-table-cell--primary-100',
        'sd-table-cell--neutral-100'
      ]
    }
  },
  render: (args: Record<string, any>) => {
    // Initalize table data
    const tableRowCount = 7;
    const tableColumnCount = 5;
    const sortData: ('ascending' | 'descending' | 'none')[] = Array.from({ length: tableColumnCount }, () => 'none');
    const headerData = Array.from({ length: tableColumnCount }, () => 'Header');
    const tableData = Array.from({ length: tableRowCount }, () =>
      Array.from({ length: tableColumnCount }, () => {
        return args['default-slot'] ?? 'Lorem ipsum dolor sit amet.';
      })
    );

    // Function to exchange the sort icons in the sortable table after a click on the table header
    const sortTable = (column: number) => {
      const icon = document.getElementById(`sortIcon-${column}`);
      const headerCell = document.getElementById(`sortableHeader-${column}`);
      if (icon && headerCell) {
        switch (sortData[column]) {
          case 'none':
            sortData[column] = 'ascending';
            icon.setAttribute('name', 'system/sort-up-filled');
            headerCell.setAttribute('aria-sort', 'ascending');
            return;
          case 'ascending':
            sortData[column] = 'descending';
            icon.setAttribute('name', 'system/sort-down-filled');
            headerCell.setAttribute('aria-sort', 'descending');
            return;
          case 'descending':
            sortData[column] = 'none';
            icon.setAttribute('name', 'system/sort-up');
            headerCell.removeAttribute('aria-sort');
        }
      }
    };

    return html`
      <style>
        .story-wrapper {
          display: inline-block;
          max-width: 1200px;
        }

        .headline {
          padding: 16px;
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          width: 100%;
          box-sizing: border-box;
        }

        .disclaimer {
          background-color: #f6f6f6;
          padding: 16px;
          text-align: left;
          font-size: 14px;
          color: #333;
          width: 100%;
          margin-bottom: 10px;
          box-sizing: border-box;
        }

        .sd-table {
          margin-top: 20px;
          width: 100%;
        }

        .sd-table-cell.sortable {
          padding: 0;
        }

        .sd-table-cell.sortable button {
          display: inline-flex;
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 16px;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          text-align: left;
        }

        .sd-table-cell.sortable button:hover {
          background-color: white;
        }

        div:not(:first-of-type).headline {
          margin-top: 72px;
        }
      </style>
      <div class="story-wrapper">
        <div class="headline">Simple Table With Vertical Lines</div>
        <table class="sd-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((cellData, columnIndex) => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--transparent ${columnIndex + 1 < headerData.length
                      ? 'sd-table-cell--divider'
                      : ''}"
                  >
                    ${cellData}
                  </th>`;
                })}
              </tr>`;
            })()}
          </thead>
          <tbody>
            ${tableData.map(rowData => {
              return html`<tr>
                ${rowData.map((cellData, columnIndex) => {
                  return html`<td
                    class="sd-table-cell sd-table-cell--transparent ${columnIndex + 1 < headerData.length
                      ? 'sd-table-cell--divider'
                      : ''}"
                  >
                    ${cellData}
                  </td>`;
                })}
              </tr>`;
            })}
          </tbody>
        </table>

        <div class="headline">Sortable Table</div>
        <table class="sd-table" id="sortableTable" .sortData=${sortData}>
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((cellData, columnIndex) => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--neutral-100 sortable ${columnIndex + 1 < headerData.length
                      ? 'sd-table-cell--divider'
                      : ''}"
                    id="sortableHeader-${columnIndex}"
                  >
                    <button class="sd-interactive sd-interactive--reset" @click="${() => sortTable(columnIndex)}">
                      ${cellData}<sd-icon
                        id="sortIcon-${columnIndex}"
                        library="global-resources"
                        name="system/sort-up"
                      ></sd-icon>
                    </button>
                  </th>`;
                })}
              </tr>`;
            })()}
          </thead>
          <tbody>
            ${tableData.map(rowData => {
              return html`<tr>
                ${rowData.map((cellData, columnIndex) => {
                  return html`<td
                    class="sd-table-cell sd-table-cell--transparent ${columnIndex + 1 < headerData.length
                      ? 'sd-table-cell--divider'
                      : ''}"
                  >
                    ${cellData}
                  </td>`;
                })}
              </tr>`;
            })}
          </tbody>
        </table>
        <div class="headline">Simple Table With Alternating Colors</div>
        <table class="sd-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((cellData, columnIndex) => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--primary-100 ${columnIndex + 1 < headerData.length
                      ? 'sd-table-cell--divider'
                      : ''}"
                  >
                    ${cellData}
                  </th>`;
                })}
              </tr>`;
            })()}
          </thead>
          <tbody>
            ${tableData.map((rowData, rowIndex) => {
              return html`<tr>
                ${rowData.map((cellData, columnIndex) => {
                  return html`<td
                    class="sd-table-cell ${rowIndex % 2 === 0
                      ? 'sd-table-cell--white'
                      : 'sd-table-cell--primary-100'} ${columnIndex + 1 < headerData.length &&
                    'sd-table-cell--divider'}"
                  >
                    ${cellData}
                  </td>`;
                })}
              </tr>`;
            })}
          </tbody>
        </table>

        <div class="headline">Simple Table, First Column Fixed</div>
        <div class="disclaimer">
          This sample will be provided as soon as we have implemented the sd-scrollable component.
        </div>

        <div class="headline">Multi Select Table</div>
        <div class="disclaimer">
          This sample will be provided as soon as we have implemented the sd-scrollable component.
        </div>
      </div>
    `;
  }
};
