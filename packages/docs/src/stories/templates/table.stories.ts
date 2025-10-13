import cx from 'classix';
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * These examples demonstrate the usage of sd-table-cell in various contexts.
 * The examples are intended solely for illustrating how sd-table-cell can be used to style tables.
 * The data generation and table sorting logic should not be used in production environments.
 *
 * **Accessibility Hint:** Whenever the table doesn't contain interactive elements,
 * wrap the table inside a scrollable region using `role="region"`, `tabindex="0"` and `aria-label`,
 * to ensure it becomes accessible to keyboard only users.
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Table',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export const simpleTable = {
  render: () => html`
    <section tabindex="0" aria-label="Simple table" class="focus-visible:focus-outline">
      <table id="simple" class="sd-table sample-table w-full">
        <thead>
          <tr>
            <th class="sd-table-cell sd-table-cell--bg-white">Job title</th>
            <th class="sd-table-cell sd-table-cell--bg-white">Location</th>
            <th class="sd-table-cell sd-table-cell--bg-white">Job category</th>
            <th class="sd-table-cell sd-table-cell--bg-white">Employment type</th>
            <th class="sd-table-cell sd-table-cell--bg-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Apprenticeship</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Portfolio Management</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Fund Administration</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                Part-time))</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Customer Service</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Hamburg</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Compliance</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)">
                Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
              </sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Other</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <script type="module">
      const table = document.getElementById('simple');
      const actions = table.querySelectorAll('sd-button');

      actions?.forEach(action => {
        action.onclick = () => {
          alert('Action performed');
        };
      });
    </script>
  `
};

export const simpleTableVerticalDividers = {
  name: 'Simple Table with Vertical Dividers',
  render: () => html`
    <section tabindex="0" aria-label="Simple Table with Vertical Dividers" class="focus-visible:focus-outline">
      <table id="dividers" class="sd-table sample-table w-full">
        <thead>
          <tr>
            <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Job title</th>
            <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Location</th>
            <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Job category</th>
            <th class="sd-table-cell sd-table-cell--bg-white sd-table-cell--divider">Employment type</th>
            <th class="sd-table-cell sd-table-cell--bg-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)"
                >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Apprenticeship</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">
              Dual Study Program / Training
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)"
                >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">IT</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">
              Dual Study Program / Training
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)"
                >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Portfolio Management</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)"
                >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Fund Administration</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)">
                Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                Part-time))
              </sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Customer Service</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Hamburg</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Compliance</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)"
                >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Private Clients</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)">
                Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
              </sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">IT</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Private Clients</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider w-1/3">
              <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Other</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent sd-table-cell--divider">Full-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <script type="module">
      const table = document.getElementById('dividers');
      const actions = table.querySelectorAll('sd-button');

      actions?.forEach(action => {
        action.onclick = () => {
          alert('Action performed');
        };
      });
    </script>
  `
};

export const simpleTableAlternatingColors = {
  name: 'Simple Table with Alternating Colors',
  render: () => html`
    <section tabindex="0" aria-label="Simple Table with Alternating Colors" class="focus-visible:focus-outline">
      <table id="alternating" class="sd-table sample-table w-full">
        <thead>
          <tr>
            <th class="sd-table-cell sd-table-cell--bg-primary-100">Job title</th>
            <th class="sd-table-cell sd-table-cell--bg-primary-100">Location</th>
            <th class="sd-table-cell sd-table-cell--bg-primary-100">Job category</th>
            <th class="sd-table-cell sd-table-cell--bg-primary-100">Employment type</th>
            <th class="sd-table-cell sd-table-cell--bg-primary-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Apprenticeship</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-primary-100 w-1/3">
              <sd-link href="javascript:void(0)"
                >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">IT</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Dual Study Program / Training</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Portfolio Management</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-primary-100 w-1/3">
              <sd-link href="javascript:void(0)"
                >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Fund Administration</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                Part-time))</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Customer Service</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-primary-100 w-1/3">
              <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Hamburg</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Compliance</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)"
                >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-primary-100 w-1/3">
              <sd-link href="javascript:void(0)">
                Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
              </sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">IT</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Full-time<br />Part-time</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
              <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-primary-100 w-1/3">
              <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Frankfurt am Main</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Other</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">Full-time</td>
            <td class="sd-table-cell sd-table-cell--bg-primary-100">
              <div class="flex">
                <sd-tooltip content="Add to favorites">
                  <button class="sd-interactive sd-interactive--reset gap-2">
                    <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                  </button>
                </sd-tooltip>
                <sd-tooltip content="Share">
                  <button class="sd-interactive sd-interactive--reset">
                    <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                  </button>
                </sd-tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <script type="module">
      const table = document.getElementById('alternating');
      const actions = table.querySelectorAll('sd-button');

      actions?.forEach(action => {
        action.onclick = () => {
          alert('Action performed');
        };
      });
    </script>
  `
};

export const sortableTable = {
  render: () => {
    const tableColumnCount = 5;
    const headerData = Array.from(
      { length: tableColumnCount },
      (_, index) =>
        [
          { label: 'Job title', sortable: true },
          { label: 'Location', sortable: true },
          { label: 'Job category', sortable: true },
          { label: 'Employment type', sortable: true },
          { label: 'Actions', sortable: false }
        ][index]
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
          status: string;
        };
      } = {
        none: { nextSort: 'ascending', iconName: 'system/sort-up', ariaSort: undefined, status: 'No sorting applied' },
        ascending: {
          nextSort: 'descending',
          iconName: 'system/sort-up-filled',
          ariaSort: 'ascending',
          status: 'Sorting ascending'
        },
        descending: {
          nextSort: 'none',
          iconName: 'system/sort-down-filled',
          ariaSort: 'descending',
          status: 'Sorting descending'
        }
      };
      const icons = document.querySelectorAll('[id*="sortIcon"]');
      const headerCells = document.querySelectorAll('[id*="sortableHeader"]');
      const announcementContainer = document.querySelector('[id="sortable-announcement"]');

      if (icons && headerCells) {
        headerCells.forEach((headerCell, index) => {
          if (!headerData[index].sortable) return;

          //Reset the sort icon and remove the aria-sort attribute for all other columns
          if (index !== column) {
            const { iconName } = sortingOptions['none'];

            sortData[index] = 'none';
            icons[index].setAttribute('name', iconName);
            headerCell.removeAttribute('aria-sort');
            return;
          }

          //Change the sort icon and aria-sort attribute for the clicked column
          const { nextSort } = sortingOptions[sortData[column]];
          const { status } = sortingOptions[nextSort];
          sortTableByColumn(document.querySelector('[id="sortable"]'), column, nextSort === 'descending');
          announcementContainer!.innerHTML = announcementContainer!.innerHTML === status ? `${status}\u200B` : status;

          const { iconName, ariaSort } = sortingOptions[nextSort];

          sortData[index] = nextSort;
          icons[index].setAttribute('name', iconName);
          ariaSort !== undefined
            ? headerCell.setAttribute('aria-sort', ariaSort)
            : headerCell.removeAttribute('aria-sort');
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
      <span id="sortable-announcement" role="status" class="sr-only"></span>
      <section tabindex="0" aria-label="Sortable table" class="focus-visible:focus-outline">
        <table id="sortable" class="sd-table sample-table w-full" .sortData=${sortData}>
          <thead>
            ${(() => {
              return html`<tr>
                ${headerData.map((header, columnIndex) => {
                  return html`<th
                    class="${cx('sd-table-cell sd-table-cell--bg-transparent', header.sortable ? 'sortable' : '')}"
                    id="sortableHeader-${columnIndex}"
                    aria-sort=${ifDefined(
                      sortData[columnIndex] === 'none' || !header.sortable ? undefined : 'ascending'
                    )}
                  >
                    ${header.sortable
                      ? html` <button
                          class="sd-interactive flex items-center gap-1"
                          @click="${() => sortTable(columnIndex)}"
                        >
                          ${header.label}<sd-icon
                            id="sortIcon-${columnIndex}"
                            name=${sortData[columnIndex] === 'none' ? 'system/sort-down' : 'system/sort-down-filled'}
                            class="text-[12px]"
                          ></sd-icon>
                        </button>`
                      : header.label}
                  </th>`;
                })}
              </tr>`;
            })()}
          </thead>
          <tbody>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Apprenticeship</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Portfolio Management</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Fund Administration</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">
                  Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                  Part-time)
                </sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Customer Service</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Hamburg</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Compliance</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">
                  Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
                </sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Other</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <script type="module">
        const table = document.getElementById('sortable');
        const actions = table.querySelectorAll('sd-button');

        actions?.forEach(action => {
          action.onclick = () => {
            alert('Action performed');
          };
        });
      </script>
    `;
  }
};

export const multiSelectTable = {
  render: () => html`
    <style>
      /* a11y: visually hide labels inside sd-checkbox */
      sd-checkbox.hide-label::part(label) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    </style>
    <section class="focus-visible:focus-outline">
      <table id="multi-select-table" class="sd-table sample-table w-full" aria-label="Multi Select Table">
        <thead>
          <tr class="">
            <th class="sd-table-cell sd-table-cell--bg-white text-center text-sm leading-none" scope="col">
              <sd-checkbox class="hide-label block mx-auto" id="select-all" size="sm" indeterminate tabindex="0"
                >Select all</sd-checkbox
              >
            </th>
            <th class="sd-table-cell sd-table-cell--bg-white text-sm leading-none" scope="col">Name</th>
            <th class="sd-table-cell sd-table-cell--bg-white text-sm leading-none" scope="col">ISIN</th>
            <th class="sd-table-cell sd-table-cell--bg-white text-sm leading-none" scope="col">Fund type</th>
            <th class="sd-table-cell sd-table-cell--bg-white text-sm leading-none" scope="col">Date</th>
            <th class="sd-table-cell sd-table-cell--bg-white text-sm leading-none" scope="col">File type</th>
          </tr>
        </thead>
        <tbody class="selectable-rows">
          <tr class="leading-none">
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select PrivatFonds: Flexibel</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Flexibel</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">DE000A0Q2H14</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Mixed funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Flexibel PDF">
                <button class="sd-interactive sd-interactive--reset items-center flex">
                  <sd-icon
                    class="w-6 h-6 px-4 text-sm"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Flexibel PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" checked tabindex="0"
                >Select PrivatFonds: Flexibel pro</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent  text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Flexibel pro</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">DE000A0RPAL7</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Value-protected funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Flexibel pro PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Flexibel PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" checked tabindex="0"
                >Select PrivatFonds: Konsequent</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Konsequent</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">LU0493492200</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Value-protected funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Konsequent PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Konsequent PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select PrivatFonds: Konsequent pro</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Konsequent pro</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">LU0493584741</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Value-protected funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Konsequent pro PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Konsequent pro PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select PrivatFonds: Kontrolliert</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Kontrolliert</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">DE000A0RPAM5</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Mixed funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Kontrolliert PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Kontrolliert PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select PrivatFonds: Kontrolliert pro</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Kontrolliert pro</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">DE000A0RPAN3</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Mixed funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Kontrolliert pro PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Kontrolliert pro PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" checked tabindex="0"
                >Select PrivatFonds: Nachhaltig</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">PrivatFonds: Nachhaltig</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">LU1900195949</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Mixed funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview PrivatFonds: Nachhaltig PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview PrivatFonds: Nachhaltig PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select Uni21.Jahrhundert -net-</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)"> Uni21.Jahrhundert -net- </sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">DE0009757872</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Stock funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview Uni21.Jahrhundert -net- PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview Uni21.Jahrhundert -net- PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select UniAbsoluterErtrag -net- A</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">UniAbsoluterErtrag -net- A</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">LU1206679554</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Mixed funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview UniAbsoluterErtrag -net- A PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview UniAbsoluterErtrag -net- A PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
          <tr>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-center text-sm leading-none">
              <sd-checkbox class="hide-label block mx-auto" size="sm" tabindex="0"
                >Select UniAbsoluterErtrag A</sd-checkbox
              >
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-link href="javascript:void(0)">UniAbsoluterErtrag A</sd-link>
            </td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">LU1206678580</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">Mixed funds</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">23.01.2025</td>
            <td class="sd-table-cell sd-table-cell--bg-transparent text-sm leading-none">
              <sd-tooltip content="Preview UniAbsoluterErtrag A PDF">
                <button class="sd-interactive sd-interactive--reset">
                  <sd-icon
                    class="w-6 h-6 px-4"
                    name="system/file-pdf"
                    label="Preview UniAbsoluterErtrag A PDF"
                  ></sd-icon>
                </button>
              </sd-tooltip>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-row gap-4 py-6">
        <p id="selected-count" class="sd-paragraph pt-3 font-bold">selected:</p>
        <sd-button id="download-btn" variant="primary" disabled>
          <sd-icon name="system/download" slot="icon-left"></sd-icon>Download PDF
        </sd-button>
        <sd-button id="print-btn" variant="secondary" disabled>
          <sd-icon name="system/print" slot="icon-left"></sd-icon>Print
        </sd-button>
      </div>
    </section>
    <script type="module">
      const selectAllCheckbox = document.querySelector('#select-all');
      const tbody = document.querySelector('.selectable-rows');
      const selectedCountEl = document.querySelector('#selected-count');
      const downloadBtn = document.querySelector('#download-btn');
      const printBtn = document.querySelector('#print-btn');

      function getCheckedCount() {
        const checkboxes = tbody.querySelectorAll('sd-checkbox');
        let count = 0;
        checkboxes.forEach(cb => {
          if (cb.checked) count++;
        });
        return { checked: count, total: checkboxes.length };
      }

      function updateUI() {
        const res = getCheckedCount();
        const checked = res.checked;
        const total = res.total;

        if (selectedCountEl) selectedCountEl.textContent = checked + ' selected';

        const hasSelection = checked > 0;
        [downloadBtn, printBtn].forEach(btn => {
          if (btn) btn.toggleAttribute('disabled', !hasSelection);
        });

        if (selectAllCheckbox) {
          const isAllChecked = checked === total;
          const isPartiallyChecked = checked > 0 && checked < total;
          selectAllCheckbox.checked = isAllChecked;
          selectAllCheckbox.indeterminate = isPartiallyChecked;
        }
      }

      function handleCheckboxToggle(checkbox) {
        if (checkbox && tbody.contains(checkbox)) {
          checkbox.checked = !checkbox.checked;
          updateUI();
        }
      }

      function handleSelectAllToggle() {
        const checkboxes = tbody.querySelectorAll('sd-checkbox');
        const shouldCheck = !selectAllCheckbox.checked;
        selectAllCheckbox.checked = shouldCheck;
        checkboxes.forEach(cb => (cb.checked = shouldCheck));
        updateUI();
      }

      function handleEvent(e, isSelectAll = false) {
        if (e.type === 'keydown' && !['Space', 'Enter', ' '].includes(e.key)) {
          return;
        }

        if (e.type === 'keydown') {
          e.preventDefault();
        }

        if (isSelectAll) {
          handleSelectAllToggle();
        } else {
          const checkbox = e.target.closest('sd-checkbox');
          handleCheckboxToggle(checkbox);
        }
      }

      tbody?.addEventListener('click', e => handleEvent(e, false));
      tbody?.addEventListener('keydown', e => handleEvent(e, false));

      selectAllCheckbox?.addEventListener('click', e => handleEvent(e, true));
      selectAllCheckbox?.addEventListener('keydown', e => handleEvent(e, true));

      updateUI();
    </script>
  `
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
 *   const tableHeaders = scrollableTable?.querySelectorAll('th');
 *
 *   scrollableTable?.addEventListener('scroll', () => {
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
          const tableHeaders = scrollableTable?.querySelectorAll('th');

          scrollableTable?.addEventListener('scroll', () => {
            tableHeaders.forEach(header => {
              if (scrollableTable.scrollTop === 0) {
                header.classList.remove('sd-table-cell--shadow-active');
              } else {
                header.classList.add('sd-table-cell--shadow-active');
              }
            });
          });

          const actions = scrollableTable?.querySelectorAll('button') ?? [];
          actions?.forEach(action => {
            action.onclick = () => {
              alert('Action performed');
            };
          });
        });
      </script>
      <section tabindex="0" aria-label="Table with Fixed Top Header Row and Shadow" class="focus-visible:focus-outline">
        <table id="vertical-scrollable-table" class="sd-table sample-table h-[200px] overflow-y-scroll block">
          <thead>
            <tr>
              <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Job title</th>
              <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Location</th>
              <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">
                Job category
              </th>
              <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">
                Employment type
              </th>
              <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom z-10">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Apprenticeship</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Portfolio Management</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Fund Administration</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">
                  Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                  Part-time)
                </sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Customer Service</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Hamburg</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Compliance</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">
                  Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
                </sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Other</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
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
          const tableHeaders = scrollableTable?.querySelectorAll('th');

          scrollableTable?.addEventListener('scroll', () => {
            tableHeaders.forEach(header => {
              if (scrollableTable.scrollTop === scrollableTable.scrollHeight - scrollableTable.clientHeight) {
                header.classList.remove('sd-table-cell--shadow-active');
              } else {
                header.classList.add('sd-table-cell--shadow-active');
              }
            });
          });

          const actions = scrollableTable?.querySelectorAll('button') ?? [];
          actions?.forEach(action => {
            action.onclick = () => {
              alert('Action performed');
            };
          });
        });
      </script>
      <section
        tabindex="0"
        aria-label="Table with Fixed Bottom Header Row and Shadow"
        class="focus-visible:focus-outline"
      >
        <table id="vertical-scrollable-table-2" class="sd-table sample-table h-[200px] block overflow-y-scroll">
          <thead class="sr-only">
            <tr>
              <th>Job title</th>
              <th>Location</th>
              <th>Job category</th>
              <th>Employment type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Apprenticeship</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Dual Study Program / Training</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Portfolio Management</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Fund Administration</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">
                  Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                  Part-time)
                </sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Customer Service</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Hamburg</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Compliance</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)"
                  >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
                >
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">
                  Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
                </sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <td class="sd-table-cell sd-table-cell--bg-transparent w-1/3">
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Other</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Job title
              </td>
              <td
                class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Location
              </td>
              <td
                class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Job category
              </td>
              <td
                class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Employment type
              </td>
              <td
                class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
              >
                Actions
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
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
          const tableHeaders = scrollableTable?.querySelectorAll('th');

          scrollableTable?.addEventListener('scroll', () => {
            tableHeaders.forEach(header => {
              if (scrollableTable.scrollLeft === 0) {
                header.classList.remove('sd-table-cell--shadow-active');
              } else {
                header.classList.add('sd-table-cell--shadow-active');
              }
            });
          });

          const actions = scrollableTable?.querySelectorAll('button') ?? [];
          actions?.forEach(action => {
            action.onclick = () => {
              alert('Action performed');
            };
          });
        });
      </script>
      <section
        id="horizontal-scrollable-table"
        class="overflow-x-scroll overflow-y-visible w-[600px] focus-visible:focus-outline"
        tabindex="0"
        aria-label="Table with Fixed Left Header Column and Shadow"
      >
        <table class="sd-table sample-table">
          <thead class="sr-only">
            <tr>
              <td></td>
              <th>Job title</th>
              <th>Location</th>
              <th>Job category</th>
              <th>Employment type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
              >
                <sd-link href="javascript:void(0)"
                  >Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link
                >
              </th>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Apprenticeship</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">
                Dual Study Program / Training
              </td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
              >
                <sd-link href="javascript:void(0)"
                  >Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link
                >
              </th>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">
                Dual Study Program / Training
              </td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
              >
                <sd-link href="javascript:void(0)"
                  >Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link
                >
              </th>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Portfolio Management</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
              >
                <sd-link href="javascript:void(0)">
                  (Junior) Employee for our Legal Reporting in the Fund Administration Area
                </sd-link>
              </th>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Fund Administration</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
              >
                <sd-link href="javascript:void(0)">
                  Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or
                  Part-time)
                </sd-link>
              </th>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Customer Service</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
              >
                <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
              </th>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Hamburg</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Compliance</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
              >
                <sd-link href="javascript:void(0)"
                  >(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link
                >
              </th>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
              >
                <sd-link href="javascript:void(0)">
                  Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
                </sd-link>
              </th>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">IT</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time<br />Part-time</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-white"
              >
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
              </th>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Private Clients</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-transparent">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="sd-table-cell top-auto sticky left-0 z-[2] bg-clip-padding sd-table-cell--shadow-right sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
              >
                <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
              </th>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Other</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time</td>
              <td class="sd-table-cell sd-table-cell--bg-neutral-100">
                <div class="flex">
                  <sd-tooltip content="Add to favorites">
                    <button class="sd-interactive sd-interactive--reset gap-2">
                      <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                    </button>
                  </sd-tooltip>
                  <sd-tooltip content="Share">
                    <button class="sd-interactive sd-interactive--reset">
                      <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                    </button>
                  </sd-tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
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
            const tableHeaders = scrollableTable?.querySelectorAll('th');


            scrollableTable?.addEventListener('scroll', () => {
              tableHeaders.forEach(header => {
                if (scrollableTable.scrollLeft + scrollableTable.clientWidth >= scrollableTable.scrollWidth) {
                  header.classList.remove('sd-table-cell--shadow-active');
                } else {
                  header.classList.add('sd-table-cell--shadow-active');
                }
              });
            });

            const actions = scrollableTable?.querySelectorAll('button') ?? [];
            actions?.forEach(action => {
              action.onclick = () => {
                alert('Action performed');
              };
            });
          });
        </script>
        <section
          id="horizontal-scrollable-table-2"
          class="overflow-x-scroll overflow-y-visible w-[600px] focus-visible:focus-outline"
          tabindex="0"
          aria-label="Table with Fixed Right Header Column and Shadow"
        >
          <table class="sd-table sample-table">
            <thead class="sr-only">
              <th>Job title</th>
              <th>Location</th>
              <th>Job category</th>
              <th>Employment type</th>
              <th>Actions</th>
              <td></td>
            </thead>
            <tbody>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-transparent min-w-[400px]">
                  <sd-link href="javascript:void(0)">Dual Study Program with Training Investment Fund Saleswoman/Man (m/f/d)</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Apprenticeship</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Dual Study Program / Training</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                   <sd-tooltip content="Add to favorites">
                      <button class="sd-interactive sd-interactive--reset gap-2">
                        <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                      </button>
                    </sd-tooltip>
                    <sd-tooltip content="Share">
                      <button class="sd-interactive sd-interactive--reset">
                        <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                      </button>
                    </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 min-w-[400px]">
                  <sd-link href="javascript:void(0)">Dual Study Program in Business Informatics (m/f/d), Start 01.09.2025</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">IT</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Dual Study Program / Training</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
                >
                  <div class="flex">
                    <sd-tooltip content="Add to favorites">
                      <button class="sd-interactive sd-interactive--reset gap-2">
                        <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                      </button>
                    </sd-tooltip>
                    <sd-tooltip content="Share">
                      <button class="sd-interactive sd-interactive--reset">
                        <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                      </button>
                    </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-transparent min-w-[400px]">
                  <sd-link href="javascript:void(0)">Portfolio Manager Multi Asset Solutions (Full-time or Part-time)</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Portfolio Management</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time<br />Part-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-tooltip content="Add to favorites">
                      <button class="sd-interactive sd-interactive--reset gap-2">
                        <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                      </button>
                    </sd-tooltip>
                    <sd-tooltip content="Share">
                      <button class="sd-interactive sd-interactive--reset">
                        <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                      </button>
                    </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 min-w-[400px]">
                  <sd-link href="javascript:void(0)"
                    >(Junior) Employee for our Legal Reporting in the Fund Administration Area</sd-link
                  >
                </td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Fund Administration</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time<br />Part-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
                >
                  <div class="flex">
                   <sd-tooltip content="Add to favorites">
                      <button class="sd-interactive sd-interactive--reset gap-2">
                        <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                      </button>
                    </sd-tooltip>
                    <sd-tooltip content="Share">
                      <button class="sd-interactive sd-interactive--reset">
                        <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                      </button>
                    </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-transparent min-w-[400px]">
                  <sd-link href="javascript:void(0)">
                    Sales Staff (m/f/d) Customer Service with a Focus on Partner Banks and Private Clients (Full-time or Part-time)
                  </sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Customer Service</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time<br />Part-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-tooltip content="Add to favorites">
                        <button class="sd-interactive sd-interactive--reset gap-2">
                          <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                        </button>
                      </sd-tooltip>
                      <sd-tooltip content="Share">
                        <button class="sd-interactive sd-interactive--reset">
                          <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                        </button>
                      </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 min-w-[400px]">
                  <sd-link href="javascript:void(0)">Data Protection Officer/Auditor (Full-time or Part-time)</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Hamburg</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Compliance</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time<br />Part-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
                >
                  <div class="flex">
                   <sd-tooltip content="Add to favorites">
                        <button class="sd-interactive sd-interactive--reset gap-2">
                          <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                        </button>
                      </sd-tooltip>
                      <sd-tooltip content="Share">
                        <button class="sd-interactive sd-interactive--reset">
                          <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                        </button>
                      </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-transparent min-w-[400px]">
                  <sd-link href="javascript:void(0)">(Junior) Business Analyst Risk Management (Full-time or Part-time)</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Private Clients</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time<br />Part-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                   <sd-tooltip content="Add to favorites">
                        <button class="sd-interactive sd-interactive--reset gap-2">
                          <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                        </button>
                      </sd-tooltip>
                      <sd-tooltip content="Share">
                        <button class="sd-interactive sd-interactive--reset">
                          <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                        </button>
                      </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 min-w-[400px]">
                  <sd-link href="javascript:void(0)">
                    Head of the AI Competence Center as Group Leader*in IT Data Analytics (Full-time or Part-time)
                  </sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">IT</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time<br />Part-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
                >
                  <div class="flex">
                    <sd-tooltip content="Add to favorites">
                        <button class="sd-interactive sd-interactive--reset gap-2">
                          <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                        </button>
                      </sd-tooltip>
                      <sd-tooltip content="Share">
                        <button class="sd-interactive sd-interactive--reset">
                          <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                        </button>
                      </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-transparent min-w-[400px]">
                  <sd-link href="javascript:void(0)">Trainee (m/f/d) Product Management & Sales PLUS</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Private Clients</td>
                <td class="sd-table-cell sd-table-cell--bg-transparent whitespace-nowrap">Full-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                   <sd-tooltip content="Add to favorites">
                        <button class="sd-interactive sd-interactive--reset gap-2">
                          <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                        </button>
                      </sd-tooltip>
                      <sd-tooltip content="Share">
                        <button class="sd-interactive sd-interactive--reset">
                          <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                        </button>
                      </sd-tooltip>
                  </div>
                </th>
              </tr>
              <tr>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 min-w-[400px]">
                  <sd-link href="javascript:void(0)">Trainee (m/f/d) Digitalization PLUS</sd-link>
                </td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Frankfurt am Main</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Other</td>
                <td class="sd-table-cell sd-table-cell--bg-neutral-100 whitespace-nowrap">Full-time</td>
                <th
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-neutral-100"
                >
                  <div class="flex">
                    <sd-tooltip content="Add to favorites">
                        <button class="sd-interactive sd-interactive--reset gap-2">
                          <sd-icon class="w-6 h-6" name="system/star-empty" label="Add to favorites"></sd-icon>
                        </button>
                      </sd-tooltip>
                      <sd-tooltip content="Share">
                        <button class="sd-interactive sd-interactive--reset">
                          <sd-icon class="w-6 h-6 pl-[2px]" name="system/share" label="Share"></sd-icon>
                        </button>
                      </sd-tooltip>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    `;
  }
};
