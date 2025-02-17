import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-pagination');
const { generateTemplate } = storybookTemplate('sd-pagination');

/**
 * Used to do something cool. (Describe usage of style here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */

export default {
  tags: ['!dev'],
  title: 'Styles/sd-pagination',
  component: 'sd-pagination',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `first example` to describe a feature.
 */
export const FirstExample = {
  render: () => html`
  <nav class="sd-pagination">
      <h2>Pagination</h2>
      <ul>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" aria-current="page">1</a></li>
        <li><a href="/?page=2">2</a></li>
        <li><a href="/?page=3">3</a></li>
        <li><a href="/?page=5">4</a></li>
        <li><a href="/?page=5">5</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
  </nav>
  <nav class="sd-pagination">
      <h2>Pagination</h2>
      <ul>
        <li><a href="/?page=4"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1">1</a></li>
        <li><a href="/?page=2">2</a></li>
        <li><a href="/?page=3">3</a></li>
        <li><a href="/?page=5">4</a></li>
        <li><a href="/?page=5" aria-current="page">5</a></li>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
  </nav>
  <nav class="sd-pagination">
    <h2>Pagination</h2>
    <ul>
      <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
      <li><a href="/?page=1" aria-current="page">1</a></li>
      <li><a href="/?page=2">2</a></li>
      <li><a href="/?page=3">3</a></li>
      <li><a href="/?page=5">4</a></li>
      <li><a href="/?page=5">5</a></li>
      <li><a href="/?page=6">6</a></li>
      <li><a href="/?page=7">7</a></li>
      <li><a href="/?page=8">8</a></li>
      <li><a href="/?page=9">9</a></li>
      <li><a href="/?page=10">10</a></li>
      <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
    </ul>
  </nav>
    <nav class="sd-pagination">
      <h2>Pagination</h2>
      <ul>
        <li><a href=""><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" >1</a></li>
        <li><a href="/?page=2">2</a></li>
        <li><a href="/?page=3">3</a></li>
        <li><a href="/?page=5">4</a></li>
        <li><a href="/?page=5" aria-current="page">5</a></li>
        <li><a href="/?page=6">6</a></li>
        <li><a href="/?page=7">7</a></li>
        <li><a href="/?page=8">8</a></li>
        <li><a href="/?page=9">9</a></li>
        <li><a href="/?page=10">10</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
  </nav>
  <nav class="sd-pagination">
      <h2>Pagination</h2>
      <ul>
        <li><a href=""><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" >1</a></li>
        <li><a href="/?page=2">2</a></li>
        <li><a href="/?page=3">3</a></li>
        <li><a href="/?page=5">4</a></li>
        <li><a href="/?page=5">5</a></li>
        <li><a href="/?page=6">6</a></li>
        <li><a href="/?page=7">7</a></li>
        <li><a href="/?page=8">8</a></li>
        <li><a href="/?page=9">9</a></li>
        <li><a href="/?page=10" aria-current="page">10</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
  </nav>
  `
};
