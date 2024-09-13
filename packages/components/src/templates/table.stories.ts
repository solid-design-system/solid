import '../solid-components';
import { html } from 'lit-html';

/**
 * The `sd-table-cell` component offers basic styling for table cells.
 * It is designed to be used in conjunction with the `sd-table` component.
 *
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
  render: () => html`
    <table class="sd-table sample-table" id="sortableTable" data-chromatic="ignore">
      <thead>
        <tr>
          <th class="sd-table-cell sd-table-cell--bg-transparent sortable" id="sortableHeader-0" aria-sort="ascending">
            <button class="text-primary hover:bg-neutral-200 transition-all">
              Header
              <sd-icon
                library="global-resources"
                class="text-[12px]"
                id="sortIcon-0"
                name="system/sort-down-filled"
              ></sd-icon>
            </button>
          </th>
          <th class="sd-table-cell sd-table-cell--bg-transparent sortable" id="sortableHeader-1">
            <button class="text-primary hover:bg-neutral-200 transition-all">
              Header
              <sd-icon library="global-resources" class="text-[12px]" id="sortIcon-1" name="system/sort-down"></sd-icon>
            </button>
          </th>
          <th class="sd-table-cell sd-table-cell--bg-transparent sortable" id="sortableHeader-2">
            <button class="text-primary hover:bg-neutral-200 transition-all">
              Header
              <sd-icon library="global-resources" class="text-[12px]" id="sortIcon-2" name="system/sort-down"></sd-icon>
            </button>
          </th>
          <th class="sd-table-cell sd-table-cell--bg-transparent sortable" id="sortableHeader-3">
            <button class="text-primary hover:bg-neutral-200 transition-all">
              Header
              <sd-icon library="global-resources" class="text-[12px]" id="sortIcon-3" name="system/sort-down"></sd-icon>
            </button>
          </th>
          <th class="sd-table-cell sd-table-cell--bg-transparent sortable" id="sortableHeader-4">
            <button class="text-primary hover:bg-neutral-200 transition-all">
              Header
              <sd-icon library="global-resources" class="text-[12px]" id="sortIcon-4" name="system/sort-down"></sd-icon>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">0: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">9: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">3: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">1: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">1: Lorem ipsum dolor sit amet.</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">7: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">3: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">1: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">4: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">1: Lorem ipsum dolor sit amet.</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">7: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">5: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">7: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">2: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">0: Lorem ipsum dolor sit amet.</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">4: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">3: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">8: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">0: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">5: Lorem ipsum dolor sit amet.</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">9: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">0: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">7: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">7: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">5: Lorem ipsum dolor sit amet.</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">2: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">5: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">3: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">1: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">5: Lorem ipsum dolor sit amet.</td>
        </tr>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">0: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">2: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">1: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">5: Lorem ipsum dolor sit amet.</td>
          <td class="sd-table-cell sd-table-cell--bg-transparent">6: Lorem ipsum dolor sit amet.</td>
        </tr>
      </tbody>
    </table>
  `
};

/**
 *
 * Table with Fixed Top Header Row and Shadow
 *
 * ### Table with Fixed Top Header Row and Shadow
 */
export const advancedTables = {
  render: () =>
    html` <table id="vertical-scrollable-table" class="sd-table block overflow-y-scroll">
      <thead>
        <tr>
          <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sd-table-cell sd-table-cell--bg-transparent">Lorem ipsum</td>
        </tr>
      </tbody>
    </table>`
};
