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
  tags: ['!dev'],
  title: 'Templates/Table',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * ### Simple Table
 */
export const simpleTables = {
  render: () => html`
    <table
      class="sd-table sample-table w-full focus-visible:focus-outline"
      role="region"
      tabindex="0"
      aria-label="Simple table"
    >
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `
};

export const simpleTableVerticalDividers = {
  name: 'Simple Table with Vertical Dividers',
  render: () => html`
    <table
      class="sd-table sample-table w-full focus-visible:focus-outline"
      role="region"
      tabindex="0"
      aria-label="Simple Table with Vertical Dividers"
    >
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `
};

export const simpleTableAlternatingColors = {
  name: 'Simple Table with Alternating Colors',
  render: () => html`
    <table
      class="sd-table sample-table w-full focus-visible:focus-outline"
      role="region"
      tabindex="0"
      aria-label="Simple Table with Alternating Colors"
    >
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
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
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
              </sd-button>
              <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
              </sd-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
      const statusSpans = document.querySelectorAll('[id*="sortableStatus"]');

      if (icons && headerCells) {
        headerCells.forEach((headerCell, index) => {
          //Change the sort icon and aria-sort attribute for the clicked column
          const nextSort = sortingOptions[sortData[column]].nextSort;
          sortTableByColumn(document.querySelector('[id*="sortableTable"]'), column, nextSort === 'descending');

          if (index === column) {
            const { iconName, ariaSort, status } = sortingOptions[nextSort];

            sortData[index] = nextSort;
            icons[index].setAttribute('name', iconName);
            ariaSort !== undefined
              ? headerCell.setAttribute('aria-sort', ariaSort)
              : headerCell.removeAttribute('aria-sort');
            statusSpans[index].innerHTML = status;
          }
          //Reset the sort icon and remove the aria-sort attribute for all other columns
          else {
            const { iconName, status } = sortingOptions['none'];

            sortData[index] = 'none';
            icons[index].setAttribute('name', iconName);
            headerCell.removeAttribute('aria-sort');
            statusSpans[index].innerHTML = status;
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

    const handleSortButtonFocus = (column: number) => {
      const statusSpan = document.querySelector(`[id*="sortableStatus-${column}"]`);
      statusSpan?.setAttribute('role', 'status');
    };

    const handleSortButtonBlur = (column: number) => {
      const statusSpan = document.querySelector(`[id*="sortableStatus-${column}"]`);
      statusSpan?.removeAttribute('role');
    };

    return html`
      <table class="sd-table sample-table w-full" id="sortableTable" .sortData=${sortData}>
        <thead>
          ${(() => {
            return html`<tr>
              ${headerData.map((header, columnIndex) => {
                return html`<th
                  class="${cx('sd-table-cell sd-table-cell--bg-transparent', header.sortable ? 'sortable' : '')}"
                  id="sortableHeader-${columnIndex}"
                  aria-sort=${ifDefined(sortData[columnIndex] === 'none' || !header.sortable ? undefined : 'ascending')}
                >
                  ${header.sortable
                    ? html` <span class="sr-only" id="sortableStatus-${columnIndex}"
                          >${sortData[columnIndex] === 'none' ? '' : 'Sorting ascending'}</span
                        >
                        <button
                          class="sd-interactive flex items-center gap-1"
                          @focus="${() => handleSortButtonFocus(columnIndex)}"
                          @blur="${() => handleSortButtonBlur(columnIndex)}"
                          @click="${() => sortTable(columnIndex)}"
                        >
                          ${header.label}<sd-icon
                            id="sortIcon-${columnIndex}"
                            library="global-resources"
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
              </div>
            </td>
          </tr>
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
      <table
        id="vertical-scrollable-table"
        class="sd-table sample-table h-[200px] overflow-y-scroll block focus-visible:focus-outline"
        role="region"
        tabindex="0"
        aria-label="Table with Fixed Top Header Row and Shadow"
      >
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
            <th class="sd-table-cell sd-table-cell--bg-white sticky top-0 sd-table-cell--shadow-bottom">Actions</th>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
              </div>
            </td>
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
      <table
        id="vertical-scrollable-table-2"
        class="sd-table sample-table h-[200px] block overflow-y-scroll focus-visible:focus-outline"
        role="region"
        tabindex="0"
        aria-label="Table with Fixed Bottom Header Row and Shadow"
      >
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
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
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon
                    name="system/star-empty"
                    library="default"
                    color="primary"
                    label="Add to favorites"
                  ></sd-icon>
                </sd-button>
                <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                  <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                </sd-button>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Job title
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Location
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Job category
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Employment type
            </th>
            <th
              class="sd-table-cell sd-table-cell--bg-white sticky bottom-0 sd-table-cell--shadow-top sd-table-cell--shadow-active"
            >
              Actions
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
      <div
        id="horizontal-scrollable-table-2"
        class="overflow-x-scroll overflow-y-visible w-[600px] focus-visible:focus-outline"
        role="region"
        tabindex="0"
        aria-label="Table with Fixed Left Header Column and Shadow"
      >
        <table class="sd-table sample-table">
          <thead class="sr-only">
            <tr>
              <th></th>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
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
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon
                      name="system/star-empty"
                      library="default"
                      color="primary"
                      label="Add to favorites"
                    ></sd-icon>
                  </sd-button>
                  <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                    <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                  </sd-button>
                </div>
              </td>
            </tr>
          </tbody>
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
        <div
          id="horizontal-scrollable-table-2"
          class="overflow-x-scroll overflow-y-visible w-[600px] focus-visible:focus-outline"
          role="region"
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
              <th></th>
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
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
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
                  class="sd-table-cell top-auto sticky right-0 z-[2] bg-clip-padding sd-table-cell--shadow-left sd-table-cell--shadow-active sd-table-cell--bg-white"
                >
                  <div class="flex">
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/star-empty" library="default" color="primary" label="Add to favorites"></sd-icon>
                    </sd-button>
                    <sd-button variant="tertiary" size="sm" onclick="alert('Action performed')">
                      <sd-icon name="system/share" library="default" color="primary" label="Share"></sd-icon>
                    </sd-button>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
};
