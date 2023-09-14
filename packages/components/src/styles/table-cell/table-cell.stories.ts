import '../../solid-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
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
      options: { templateContent: '<table class="sd-table"><tr><td class="%CLASSES%">%SLOT%</td></tr></table>' },
      args
    });
  }
};

/**
 * These examples demonstrate the usage of sd-table-cell in various contexts.
 *
 * __Note:__ These examples are intended solely for illustrating how sd-table-cell can be used to style tables.
 * The data generation and table sorting logic should not be used in production environments.
 */

export const Samples = {
  parameters: {
    controls: {
      exclude: ['sd-table-cell--divider', 'sd-table-cell--bg-...']
    }
  },
  render: (args: Record<string, any>) => {
    // Initalize table data
    const tableRowCount = 7;
    const tableColumnCount = 5;
    const sortData: ('ascending' | 'descending' | 'none')[] = Array.from({ length: tableColumnCount }, (v, i) =>
      i === 0 ? 'ascending' : 'none'
    );
    const headerData = Array.from({ length: tableColumnCount }, () => 'Header');
    const tableData = Array.from({ length: tableRowCount }, () =>
      Array.from({ length: tableColumnCount }, () => {
        return args['default-slot'] ?? 'Lorem ipsum dolor sit amet.';
      })
    );

    // Function to exchange the sort icons and set the aria-sort attribute in the sortable table after a click on a table header
    const sortTable = (column: number) => {
      const sortingOptions: {
        [key: string]: {
          nextSort: 'ascending' | 'descending' | 'none';
          iconName: string;
          ariaSort: string | undefined;
        };
      } = {
        none: { nextSort: 'ascending', iconName: 'system/sort-up', ariaSort: undefined },
        ascending: { nextSort: 'descending', iconName: 'system/sort-up-filled', ariaSort: 'ascending' },
        descending: { nextSort: 'none', iconName: 'system/sort-down-filled', ariaSort: 'descending' }
      };
      const icons = document.querySelectorAll('[id*="sortIcon"]');
      const headerCells = document.querySelectorAll('[id*="sortableHeader"]');

      if (icons && headerCells) {
        headerCells.forEach((headerCell, index) => {
          //Change the sort icon and aria-sort attribute for the clicked column
          if (index === column) {
            const nextSort = sortingOptions[sortData[column]].nextSort;
            const { iconName, ariaSort } = sortingOptions[nextSort];

            sortData[index] = nextSort;
            icons[index].setAttribute('name', iconName);
            ariaSort !== undefined
              ? headerCell.setAttribute('aria-sort', ariaSort)
              : headerCell.removeAttribute('aria-sort');
          }
          //Reset the sort icon and remove the aria-sort attribute for all other columns
          else {
            const { iconName } = sortingOptions['none'];

            sortData[index] = 'none';
            icons[index].setAttribute('name', iconName);
            headerCell.removeAttribute('aria-sort');
          }
        });
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

        .sample-table {
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

        div:not(:first-of-type).headline {
          margin-top: 72px;
        }
      </style>
      <div class="story-wrapper">
        <div class="headline">Simple Table With Vertical Lines</div>
        <table class="sd-table sample-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((cellData, columnIndex) => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--bg-transparent ${columnIndex + 1 < headerData.length
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
                    class="sd-table-cell sd-table-cell--bg-transparent ${columnIndex + 1 < headerData.length
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
        <table class="sd-table sample-table" id="sortableTable" .sortData=${sortData}>
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((cellData, columnIndex) => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--bg-transparent sortable ${columnIndex + 1 < headerData.length
                      ? 'sd-table-cell--divider'
                      : ''}"
                    id="sortableHeader-${columnIndex}"
                    aria-sort=${ifDefined(sortData[columnIndex] === 'none' ? undefined : 'ascending')}
                  >
                    <button class="sd-interactive sd-interactive--reset" @click="${() => sortTable(columnIndex)}">
                      ${cellData}<sd-icon
                        id="sortIcon-${columnIndex}"
                        library="global-resources"
                        name=${sortData[columnIndex] === 'none' ? 'system/sort-up' : 'system/sort-up-filled'}
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
                    class="sd-table-cell sd-table-cell--bg-transparent ${columnIndex + 1 < headerData.length
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
        <table class="sd-table sample-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((cellData, columnIndex) => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--bg-primary-100 ${columnIndex + 1 < headerData.length
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
                      ? 'sd-table-cell--bg-white'
                      : 'sd-table-cell--bg-primary-100'} ${columnIndex + 1 < headerData.length &&
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
        <div class="disclaimer">This sample will be provided soon.</div>

        <div class="headline">Multi Select Table</div>
        <div class="disclaimer">This sample will be provided soon.</div>
      </div>
    `;
  }
};
