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
 * These examples demonstrate the usage of sd-table-cell in various contexts.
 * The examples are intended solely for illustrating how sd-table-cell can be used to style tables.
 * The data generation and table sorting logic should not be used in production environments.
 *
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
    const headerData = Array.from({ length: tableColumnCount }, () => 'Header');
    const tableData = Array.from({ length: tableRowCount }, () =>
      Array.from({ length: tableColumnCount }, () => {
        return args['default-slot'] ?? 'Lorem ipsum dolor sit amet.';
      })
    );
    const sortData: ('ascending' | 'descending' | 'none')[] = Array.from({ length: tableColumnCount }, (_v, i) =>
      i === 0 ? 'ascending' : 'none'
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
          const nextSort = sortingOptions[sortData[column]].nextSort;
          sortTableByColumn(document.querySelector('[id*="sortableTable"]'), column, nextSort === 'descending');

          if (index === column) {
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

    const sortTableByColumn = (table: HTMLTableElement | null, column: number, descending: boolean) => {
      if (table) {
        const dirModifier = descending ? 1 : -1;
        const tableBody = table.tBodies[0];
        const rows = Array.from(tableBody.querySelectorAll('tr'));

        // Sort each row
        const sortedRows = rows.sort((a, b) => {
          const firstCol = a.querySelector(`td:nth-child(${column + 1})`)?.textContent?.trim();
          const secondCol = b.querySelector(`td:nth-child(${column + 1})`)?.textContent?.trim();

          return firstCol > secondCol ? dirModifier : -1 * dirModifier;
        });

        // Remove all existing TRs from the table
        while (tableBody.firstChild) {
          tableBody.removeChild(tableBody.firstChild);
        }

        // Re-add the newly sorted rows
        tableBody.append(...sortedRows);
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
          gap: 8px;
          text-align: left;
        }

        div:not(:first-of-type).headline {
          margin-top: 72px;
        }
      </style>
      <div class="story-wrapper">
        <div class="headline">Simple Table</div>
        <table class="sd-table sample-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map(cellData => {
                  return html`<th class="sd-table-cell sd-table-cell--bg-white">${cellData}</th>`;
                })}
              </tr>`;
            })()}
          </thead>
          <tbody>
            ${tableData.map(rowData => {
              return html`<tr>
                ${rowData.map(cellData => {
                  return html`<td class="sd-table-cell sd-table-cell--bg-transparent">${cellData}</td>`;
                })}
              </tr>`;
            })}
          </tbody>
        </table>
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
        <div class="headline">Simple Table With Alternating Colors</div>
        <table class="sd-table sample-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map(cellData => {
                  return html`<th class="sd-table-cell sd-table-cell--bg-primary-100">${cellData}</th>`;
                })}
              </tr>`;
            })()}
          </thead>
          <tbody>
            ${tableData.map((rowData, rowIndex) => {
              return html`<tr>
                ${rowData.map(cellData => {
                  return html`<td
                    class="sd-table-cell ${rowIndex % 2 === 0
                      ? 'sd-table-cell--bg-white'
                      : 'sd-table-cell--bg-primary-100'}"
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
                    class="sd-table-cell sd-table-cell--bg-transparent sortable"
                    id="sortableHeader-${columnIndex}"
                    aria-sort=${ifDefined(sortData[columnIndex] === 'none' ? undefined : 'ascending')}
                  >
                    <button
                      class="text-primary hover:bg-neutral-200 transition-all"
                      @click="${() => sortTable(columnIndex)}"
                    >
                      ${cellData}<sd-icon
                        id="sortIcon-${columnIndex}"
                        library="global-resources"
                        name=${sortData[columnIndex] === 'none' ? 'system/sort-down' : 'system/sort-down-filled'}
                        class="text-[12px]"
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
                ${rowData.map(cellData => {
                  return html`<td class="sd-table-cell sd-table-cell--bg-transparent">
                    ${Math.floor(Math.random() * 10)}: ${cellData}
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

/**
 * These examples demonstrate the usage of sd-table-cell when the header is sticky and a shadow is displayed.
 *
 * ```html
 * <table id="vertical-scrollable-table" class="sd-table block overflow-y-scroll">
 *   <thead>
 *     <tr>
 *       <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">
 *         Header
 *       </th>;
 *     </tr>;
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td class="sd-table-cell sd-table-cell--bg-transparent">
 *         Lorem ipsum
 *       </td>
 *     </tr>
 *   </tbody>
 * </table>
 * ```
 *
 * To make the bottom shadow visible, the following JavaScript code is required:
 *
 * ```js
 * document.addEventListener('DOMContentLoaded', () => {
 *   const scrollableTable = document.getElementById('vertical-scrollable-table');
 *   const tableHeaders = scrollableTable.querySelectorAll('th');
 *
 *   scrollableTable.addEventListener('scroll', () => {
 *     tableHeaders.forEach(header => {
 *       if (scrollableTable.scrollTop === 0) {
 *         header.classList.remove('sd-table-cell--shadow-active');
 *       } else {
 *         header.classList.add('sd-table-cell--shadow-active');
 *       }
 *     });
 *   });
 * });
 * ```
 */
export const AdvancedSamples = {
  name: 'Advanced Samples',
  parameters: {
    controls: {
      exclude: ['sd-table-cell--divider', 'sd-table-cell--bg-...']
    }
  },
  render: (args: Record<string, any>) => {
    // Initalize table data
    const tableRowCount = 7;
    const tableColumnCount = 5;
    const headerData = Array.from({ length: tableColumnCount }, () => 'Header');
    const tableData = Array.from({ length: tableRowCount }, () =>
      Array.from({ length: tableColumnCount }, () => {
        return args['default-slot'] ?? 'Lorem ipsum dolor sit amet.';
      })
    );

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

      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const scrollableTable = document.getElementById('vertical-scrollable-table');
          const tableHeaders = scrollableTable.querySelectorAll('th');

          scrollableTable.addEventListener('scroll', () => {
            tableHeaders.forEach(header => {
              if (scrollableTable.scrollTop === 0) {
                header.classList.remove('sd-table-cell--shadow-active');
              } else {
                header.classList.add('sd-table-cell--shadow-active');
              }
            });
          });
        });
      </script>

      <div class="story-wrapper">
        <div class="headline">Fixed, horizontal, top header with shadow table</div>
        <table id="vertical-scrollable-table" class="sd-table sample-table h-[200px] block overflow-y-scroll ">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map(cellData => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom"
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
                ${rowData.map(cellData => {
                  return html`<td class="sd-table-cell sd-table-cell--bg-transparent">${cellData}</td>`;
                })}
              </tr>`;
            })}
          </tbody>
        </table>

        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const scrollableTable = document.getElementById('vertical-scrollable-table-2');
            const tableHeaders = scrollableTable.querySelectorAll('th');

            scrollableTable.addEventListener('scroll', () => {
              tableHeaders.forEach(header => {
                if (scrollableTable.scrollTop === scrollableTable.scrollHeight - scrollableTable.clientHeight) {
                  header.classList.remove('sd-table-cell--shadow-active');
                } else {
                  header.classList.add('sd-table-cell--shadow-active');
                }
              });
            });
          });
        </script>

        <div class="headline">Fixed, horizontal, bottom header with shadow table</div>
        <table id="vertical-scrollable-table-2" class="sd-table sample-table h-[200px] block overflow-y-scroll ">
          <tbody>
            ${tableData.map(rowData => {
              return html`<tr>
                ${rowData.map(cellData => {
                  return html`<td class="sd-table-cell sd-table-cell--bg-transparent">${cellData}</td>`;
                })}
              </tr>`;
            })}
          </tbody>
          <tfoot>
            ${(() => {
              return html`<tr>
                ${headerData.map(cellData => {
                  return html`<th
                    class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
                  >
                    ${cellData}
                  </th>`;
                })}
              </tr>`;
            })()}
          </tfoot>
        </table>

        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const scrollableTable = document.getElementById('horizontal-scrollable-table');
            const tableHeaders = scrollableTable.querySelectorAll('th');

            scrollableTable.addEventListener('scroll', () => {
              tableHeaders.forEach(header => {
                if (scrollableTable.scrollLeft === 0) {
                  header.classList.remove('sd-table-cell--shadow-active');
                } else {
                  header.classList.add('sd-table-cell--shadow-active');
                }
              });
            });
          });
        </script>
        <div class="headline">Fixed, vertical, left header with shadow table</div>
        <div id="horizontal-scrollable-table" class="overflow-x-scroll overflow-y-visible w-[600px]">
          <table class="sd-table sample-table">
            ${tableData.map((rowData, rowIndex) => {
              return html`<tr>
                ${rowData.map((cellData, columIndex) => {
                  if (columIndex === 0) {
                    return html`<th
                      class="sd-table-cell absolute left-0 top-auto sticky left-0 z-[2] sd-table-cell--shadow-right ${rowIndex %
                        2 ===
                      0
                        ? 'sd-table-cell--bg-white'
                        : 'sd-table-cell--bg-primary-100'}"
                    >
                      Header
                    </th>`;
                  } else {
                    return html`<td
                      class="sd-table-cell text-nowrap whitespace-nowrap ${rowIndex % 2 === 0
                        ? 'sd-table-cell--bg-white'
                        : 'sd-table-cell--bg-primary-100'}"
                    >
                      ${cellData}
                    </td>`;
                  }
                })}
              </tr>`;
            })}
          </table>
        </div>

        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const scrollableTable = document.getElementById('horizontal-scrollable-table-2');
            const tableHeaders = scrollableTable.querySelectorAll('th');
            const maxScrollX = scrollableTable.scrollWidth - scrollableTable.clientWidth;

            scrollableTable.addEventListener('scroll', () => {
              tableHeaders.forEach(header => {
                if (scrollableTable.scrollLeft === maxScrollX) {
                  header.classList.remove('sd-table-cell--shadow-active');
                } else {
                  header.classList.add('sd-table-cell--shadow-active');
                }
              });
            });
          });
        </script>
        <div class="headline">Fixed, vertical, right header with shadow table</div>
        <div id="horizontal-scrollable-table-2" class="overflow-x-scroll overflow-y-visible w-[600px]">
          <table class="sd-table sample-table">
            ${tableData.map((rowData, rowIndex) => {
              return html`<tr>
                ${rowData.map((cellData, columIndex) => {
                  if (columIndex === 4) {
                    return html`<th
                      class="sd-table-cell absolute left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active ${rowIndex %
                        2 ===
                      0
                        ? 'sd-table-cell--bg-white'
                        : 'sd-table-cell--bg-primary-100'}"
                    >
                      Header
                    </th>`;
                  } else {
                    return html`<td
                      class="sd-table-cell text-nowrap whitespace-nowrap ${rowIndex % 2 === 0
                        ? 'sd-table-cell--bg-white'
                        : 'sd-table-cell--bg-primary-100'}"
                    >
                      ${cellData}
                    </td>`;
                  }
                })}
              </tr>`;
            })}
          </table>
        </div>
      </div>
    `;
  }
};
