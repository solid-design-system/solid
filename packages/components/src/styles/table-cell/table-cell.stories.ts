import '../../solid-components';
import { html } from 'lit-html';
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
      options: { templateContent: '<table class="sd-table"><tr><td class="%CLASSES%">%SLOT%</td></tr></table>' },
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
        <div class="headline">Simple Table</div>
        <table class="sd-table sample-table">
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map(cellData => {
                  return html`<th class="sd-table-cell sd-table-cell--bg-transparent">${cellData}</th>`;
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
        <div class="headline">Multi Select Table</div>
        <div class="disclaimer">This sample will be provided soon.</div>
      </div>
    `;
  }
};

export const AdvancedSamples = {
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
        document.addEventListener('DOMContentLoaded', event => {
          console.log('DOM fully loaded and parsed');
          let scrollabeTable = document.getElementById('vertical-scrollable-table');
          let table = scrollabeTable.getElementsByTagName('table')[0];

          scrollabeTable.addEventListener('scroll', event => {
            if (scrollabeTable.scrollTop === 0) {
              table.classList.remove('sd-table-cell--shadow-bottom');
            } else {
              table.classList.add('sd-table-cell--shadow-bottom');
            }
          });
        });
      </script>

      <div class="story-wrapper">
        <div class="headline">Simple Table</div>
        <div id="vertical-scrollable-table" class="overflow-y-auto h-[200px]">
          <table class="sd-table sample-table border-collapse w-full">
            <thead>
              ${(() => {
                return html`<tr class="sticky top-[-1px] sd-table-cell--bg-white">
                  ${headerData.map(cellData => {
                    return html`<th class="sd-table-cell relative">${cellData}</th>`;
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
        </div>

        <script>
          document.addEventListener('DOMContentLoaded', event => {
            console.log('DOM fully loaded and parsed');
            let scrollabeTable = document.getElementById('horizontal-scrollable-table');
            let tables = scrollabeTable.getElementsByTagName('tr');

            console.log(tables);

            scrollabeTable.addEventListener('scroll', event => {
              if (scrollabeTable.scrollLeft === 0) {
                for (let table of tables) {
                  table.classList.remove('sd-table-cell--shadow-right');
                }
              } else {
                for (let table of tables) {
                  table.classList.add('sd-table-cell--shadow-right');
                }
              }
            });
          });
        </script>
        <div class="headline">Simple Table With Vertical Headers</div>
        <div id="horizontal-scrollable-table" class="overflow-x-scroll overflow-y-visible w-[600px]">
          <table class="sd-table sample-table border-separate">
            ${tableData.map((rowData, rowIndex) => {
              return html`<tr class="sd-table-cell">
                ${rowData.map((cellData, columIndex) => {
                  if (columIndex === 0) {
                    return html`<th
                      class="sd-table-cell absolute left-0 top-auto sticky left-0 z-[2] ${rowIndex % 2 === 0
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
