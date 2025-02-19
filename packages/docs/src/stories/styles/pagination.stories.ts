import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-pagination');
const { overrideArgs } = storybookHelpers('sd-pagination');
const { generateTemplate } = storybookTemplate('sd-pagination');

const html = String.raw;

/**
 * Used to split large content into several pages,allowing users to
 * navigate between them instead of displaying all information on a single page.
 *
 * **Related templates**:
 * - [Pagination](?path=docs/templates-pagination--docs)
 */

export default {
  tags: ['!dev'],
  title: 'Styles/sd-pagination',
  component: 'sd-pagination',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: '' // TODO: URL to figma
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: html`
      <h2>Pagination</h2>
      <ul>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" data-page="1" aria-current="page">1</a></li>
        <li><a href="/?page=2" data-page="2">2</a></li>
        <li><a href="/?page=3" data-page="3">3</a></li>
        <li><a href="/?page=4" data-page="4">4</a></li>
        <li><a href="/?page=5" data-page="5">5</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
    `
  }),
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<nav class="%CLASSES%">%SLOT%</nav> `
      },
      args
    });
  }
};

/**
 * Use the `sd-pagination` classes for alternative appearances:
 *
 * - Number is the default format
 * - `sd-pagination--simple`: Simple format
 */
export const Variants = {
  render: () => html`
    <nav class="sd-pagination">
      <h2>Default pagination</h2>
      <ul>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" data-page="1" aria-current="page">1</a></li>
        <li><a href="/?page=2" data-page="2">2</a></li>
        <li><a href="/?page=3" data-page="3">3</a></li>
        <li><a href="/?page=4" data-page="4">4</a></li>
        <li><a href="/?page=5" data-page="5">5</a></li>
        <li><a href="/?page=6" data-page="6">6</a></li>
        <li><a href="/?page=7" data-page="7">7</a></li>
        <li><a href="/?page=8" data-page="8">8</a></li>
        <li><a href="/?page=9" data-page="9">9</a></li>
        <li><a href="/?page=10" data-page="10">10</a></li>
        <li><a href="/?page=11" data-page="11">11</a></li>
        <li><a href="/?page=12" data-page="12">12</a></li>
        <li><a href="/?page=13" data-page="13">13</a></li>
        <li><a href="/?page=14" data-page="14">14</a></li>
        <li><a href="/?page=15" data-page="15">15</a></li>
        <li><a href="/?page=16" data-page="16">16</a></li>
        <li><a href="/?page=17" data-page="17">17</a></li>
        <li><a href="/?page=18" data-page="18">18</a></li>
        <li><a href="/?page=19" data-page="19">19</a></li>
        <li><a href="/?page=20" data-page="20">20</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
    </nav>
    <nav class="sd-pagination sd-pagination--simple">
      <h2>Simple pagination</h2>
      <ul>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" data-page="1" aria-current="page">1</a></li>
        <li><a href="/?page=2" data-page="2">2</a></li>
        <li><a href="/?page=3" data-page="3">3</a></li>
        <li><a href="/?page=4" data-page="4">4</a></li>
        <li><a href="/?page=5" data-page="5">5</a></li>
        <li><a href="/?page=6" data-page="6">6</a></li>
        <li><a href="/?page=7" data-page="7">7</a></li>
        <li><a href="/?page=8" data-page="8">8</a></li>
        <li><a href="/?page=9" data-page="9">9</a></li>
        <li><a href="/?page=10" data-page="10">10</a></li>
        <li><a href="/?page=11" data-page="11">11</a></li>
        <li><a href="/?page=12" data-page="12">12</a></li>
        <li><a href="/?page=13" data-page="13">13</a></li>
        <li><a href="/?page=14" data-page="14">14</a></li>
        <li><a href="/?page=15" data-page="15">15</a></li>
        <li><a href="/?page=16" data-page="16">16</a></li>
        <li><a href="/?page=17" data-page="17">17</a></li>
        <li><a href="/?page=18" data-page="18">18</a></li>
        <li><a href="/?page=19" data-page="19">19</a></li>
        <li><a href="/?page=20" data-page="20">20</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
    </nav>
  `
};

/**
 * Use the `sd-pagination--inverted` class when displayed on primary background.
 */
export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4">
      <nav class="sd-pagination sd-pagination--inverted">
        <h2>Inverted pagination</h2>
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
          <li><a href="/?page=1" data-page="1" aria-current="page">1</a></li>
          <li><a href="/?page=2" data-page="2">2</a></li>
          <li><a href="/?page=3" data-page="3">3</a></li>
          <li><a href="/?page=4" data-page="4">4</a></li>
          <li><a href="/?page=5" data-page="5">5</a></li>
          <li><a href="/?page=6" data-page="6">6</a></li>
          <li><a href="/?page=7" data-page="7">7</a></li>
          <li><a href="/?page=8" data-page="8">8</a></li>
          <li><a href="/?page=9" data-page="9">9</a></li>
          <li><a href="/?page=10" data-page="10">10</a></li>
          <li><a href="/?page=11" data-page="11">11</a></li>
          <li><a href="/?page=12" data-page="12">12</a></li>
          <li><a href="/?page=13" data-page="13">13</a></li>
          <li><a href="/?page=14" data-page="14">14</a></li>
          <li><a href="/?page=15" data-page="15">15</a></li>
          <li><a href="/?page=16" data-page="16">16</a></li>
          <li><a href="/?page=17" data-page="17">17</a></li>
          <li><a href="/?page=18" data-page="18">18</a></li>
          <li><a href="/?page=19" data-page="19">19</a></li>
          <li><a href="/?page=20" data-page="20">20</a></li>
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
        </ul>
      </nav>
    </div>
  `
};
