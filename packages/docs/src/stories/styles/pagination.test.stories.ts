import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-pagination');
const { overrideArgs } = storybookHelpers('sd-pagination');
const { generateTemplate } = storybookTemplate('sd-pagination');
const { generateScreenshotStory } = storybookUtilities;

const html = String.raw;

/**
 * Used to split large content into several pages,allowing users to
 * navigate between them instead of displaying all information on a single page.
 */

export default {
  title: 'Styles/sd-pagination/Screenshots: sd-pagination',
  component: 'sd-pagination',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([
    {
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
    }
  ]),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<nav class="%CLASSES%">%SLOT%</nav> `
      },
      args
    });
  }
};

export const Variants = {
  name: 'Variants',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-pagination--simple', values: [false, true] }]
      },
      options: {
        templateContent: html`
          <nav class="%CLASSES%">
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
          </nav>
        `
      },
      args
    });
  }
};

export const SinglePage = {
  name: 'Single Page',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-pagination--simple', values: [false, true] }]
      },
      options: {
        templateContent: html`
          <nav class="%CLASSES%">
            <h2>Pagination</h2>
            <ul>
              <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1" aria-current="page">1</a></li>
              <li><a aria-hidden="true"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
        `
      },
      args
    });
  }
};

export const Truncated = {
  name: 'Truncated',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`
          <nav class="%CLASSES%">
            <h2>Truncated pagination</h2>
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
          <nav class="%CLASSES%">
            <h2>Truncated at middle pagination</h2>
            <ul>
              <li><a href="/?page=9"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1">1</a></li>
              <li><a href="/?page=2" data-page="2">2</a></li>
              <li><a href="/?page=3" data-page="3">3</a></li>
              <li><a href="/?page=4" data-page="4">4</a></li>
              <li><a href="/?page=5" data-page="5">5</a></li>
              <li><a href="/?page=6" data-page="6">6</a></li>
              <li><a href="/?page=7" data-page="7">7</a></li>
              <li><a href="/?page=8" data-page="8">8</a></li>
              <li><a href="/?page=9" data-page="9">9</a></li>
              <li><a href="/?page=10" data-page="10" aria-current="page">10</a></li>
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
              <li><a href="/?page=11"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%">
            <h2>Truncated at end pagination</h2>
            <ul>
              <li><a href="/?page=19"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1">1</a></li>
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
              <li><a href="/?page=20" data-page="20" aria-current="page">20</a></li>
              <li><a aria-hidden="true"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
        `
      },
      args
    });
  }
};

export const Inverted = {
  name: 'Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-pagination--simple', values: [false, true] }],
        x: [{ type: 'attribute', name: 'sd-pagination--inverted', values: [false, true] }]
      },
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] },
        templateContent: html`
          <nav class="%CLASSES%">
            <h2>Pagination</h2>
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
      },
      args
    });
  }
};
export const Combination = generateScreenshotStory([Default, Variants, SinglePage, Truncated, Inverted]);
