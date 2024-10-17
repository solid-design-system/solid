import '../solid-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * These examples demonstrate the usage of sd-table-cell in various contexts.
 * The examples are intended solely for illustrating how sd-table-cell can be used to style tables.
 * The data generation and table sorting logic should not be used in production environments.
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Table',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * ### Simple table
 */
export const simpleTables = {
  render: () => html`
    <table class="sd-table sample-table w-full">
      <thead>
        <tr>
          <th class="sd-table-cell sd-table-cell--bg-white">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-white">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-white">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-white">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
      </tbody>
    </table>
  `
};

export const simpleTableVerticalDividers = {
  name: 'Simple Table with Vertical Dividers',
  render: () => html`
    <table class="sd-table sample-table w-full">
      <thead>
        <tr>
          <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-white">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
        </tr>
      </tbody>
    </table>
  `
};

export const simpleTableAlternatingColors = {
  name: 'Simple Table with Alternating Colors',
  render: () => html`
    <table class="sd-table sample-table w-full">
      <thead>
        <tr>
          <th class="sd-table-cell sd-table-cell--bg-primary-100">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-primary-100">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-primary-100">Header</th>
          <th class="sd-table-cell sd-table-cell--bg-primary-100">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-primary-100">Cell content</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
          <td class="sd-table-cell sd-table-cell--bg-white">Cell content</td>
        </tr>
      </tbody>
    </table>
  `
};

export const sortableTable = {
  render: () => {
    // Initalize table data
    let numbersToSort = 7;
    const tableRowCount = 6;
    const tableColumnCount = 3;
    const headerData = Array.from({ length: tableColumnCount }, () => 'Header');
    const tableData = Array.from({ length: tableRowCount }, () =>
      Array.from({ length: tableColumnCount }, () => {
        return 'Cell content';
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

          if (firstCol && secondCol) {
            return firstCol > secondCol ? dirModifier : -1 * dirModifier;
          }

          return 0;
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
      <table class="sd-table sample-table w-full" id="sortableTable" .sortData=${sortData}>
        <thead>
          ${(() => {
            return html`<tr>
              ${headerData.map((cellData, columnIndex) => {
                return html`<th
                  class="sd-table-cell sd-table-cell--bg-transparent sortable"
                  id="sortableHeader-${columnIndex}"
                  aria-sort=${ifDefined(sortData[columnIndex] === 'none' ? undefined : 'ascending')}
                >
                  <button class="sd-interactive flex items-center gap-1" @click="${() => sortTable(columnIndex)}">
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
            numbersToSort -= 1;
            return html`<tr>
              ${rowData.map(cellData => {
                return html`<td class="sd-table-cell sd-table-cell--bg-transparent">${numbersToSort}: ${cellData}</td>`;
              })}
            </tr>`;
          })}
        </tbody>
      </table>
    `;
  }
};

/**
 *
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
 *
 * ### Table with Fixed Top Header Row and Shadow
 */
export const advancedTables = {
  render: () => {
    return html`
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
      <table id="vertical-scrollable-table" class="sd-table sample-table h-[200px] overflow-y-scroll block">
        <thead>
          <tr>
            <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Header</th>
            <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Header</th>
            <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Header</th>
            <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Header</th>
            <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
        </tbody>
      </table>
    `;
  }
};

export const TableFixedBottom = {
  name: 'Table with Fixed Bottom Header Row and Shadow',
  render: () => {
    return html`
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
      <table id="vertical-scrollable-table-2" class="sd-table sample-table h-[200px] block overflow-y-scroll">
        <tbody>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Cell content</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Header
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Header
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Header
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Header
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Header
            </th>
          </tr>
        </tfoot>
      </table>
    `;
  }
};

export const TableFixedLeft = {
  name: 'Table with Fixed Left Header Column and Shadow',
  render: () => {
    return html`
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
      <div id="horizontal-scrollable-table-2" class="overflow-x-scroll overflow-y-visible w-[600px]">
        <table class="sd-table sample-table">
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
          </tr>
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-primary-100"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
          </tr>
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
          </tr>
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-primary-100"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
          </tr>
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
          </tr>
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-primary-100"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-primary-100">Cell content</td>
          </tr>
          <tr>
            <th
              class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
            >
              Header
            </th>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
            <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
          </tr>
        </table>
      </div>
    `;
  }
};

export const TableFixedRight = {
  name: 'Table with Fixed Right Header Column and Shadow',
  render: () => {
    return html`
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
        <div id="horizontal-scrollable-table-2" class="overflow-x-scroll overflow-y-visible w-[600px]">
          <table class="sd-table sample-table">
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white">
              Header
            </th>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100">
                Header
              </th>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white">
                Header
              </th>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100">
                Header
              </th>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white">
                Header
              </th>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-neutral-100">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100">
                Header
              </th>
            </tr>
            <tr>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <td class="sd-table-cell text-nowrap whitespace-nowrap sd-table-cell--bg-white">Cell content</td>
              <th class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white">
                Header
              </th>
            </tr>
          </table>
        </div>
      </div>
    `;
  }
};
