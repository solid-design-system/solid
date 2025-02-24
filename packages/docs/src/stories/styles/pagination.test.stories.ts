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
 * Used to split large content into several pages, allowing users to
 * navigate between them instead of displaying all information on a single page.
 */

export default {
  title: 'Styles/sd-pagination/Screenshots: sd-pagination',
  component: 'sd-pagination',
  tags: ['!autodocs', 'skip-a11y-[landmark-unique]'],
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/LiEAPa5PkSJyjkyAE9RNsi/Solid-DS-%E2%80%93-Component-Library?node-id=9401-33&p=f&t=A7lFFTs8C5yV9hmi-0'
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
        templateContent: html`<nav class="%CLASSES%" aria-label="Pagination">%SLOT%</nav> `
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
          <nav class="%CLASSES%" aria-label="Pagination">
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
          <nav class="%CLASSES%" aria-label="Pagination">
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
          <nav class="%CLASSES%" aria-label="Pagination with current page 1">
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
          <nav class="%CLASSES%" aria-label="Pagination with current page 2">
            <ul>
              <li><a href="/?page=1"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1">1</a></li>
              <li><a href="/?page=2" data-page="2" aria-current="page">2</a></li>
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
              <li><a href="/?page=3"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 3">
            <ul>
              <li><a href="/?page=2"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1">1</a></li>
              <li><a href="/?page=2" data-page="2">2</a></li>
              <li><a href="/?page=3" data-page="3" aria-current="page">3</a></li>
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
              <li><a href="/?page=4"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 4">
            <ul>
              <li><a href="/?page=3"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1">1</a></li>
              <li><a href="/?page=2" data-page="2">2</a></li>
              <li><a href="/?page=3" data-page="3">3</a></li>
              <li><a href="/?page=4" data-page="4" aria-current="page">4</a></li>
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
              <li><a href="/?page=5"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 5">
            <ul>
              <li><a href="/?page=4"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1" data-page="1">1</a></li>
              <li><a href="/?page=2" data-page="2">2</a></li>
              <li><a href="/?page=3" data-page="3">3</a></li>
              <li><a href="/?page=4" data-page="4">4</a></li>
              <li><a href="/?page=5" data-page="5" aria-current="page">5</a></li>
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
              <li><a href="/?page=6"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 17">
            <ul>
              <li><a href="/?page=16"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
              <li><a href="/?page=17" data-page="17" aria-current="page">17</a></li>
              <li><a href="/?page=18" data-page="18">18</a></li>
              <li><a href="/?page=19" data-page="19">19</a></li>
              <li><a href="/?page=20" data-page="20">20</a></li>
              <li><a href="/?page=18"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 18">
            <ul>
              <li><a href="/?page=17"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
              <li><a href="/?page=18" data-page="18" aria-current="page">18</a></li>
              <li><a href="/?page=19" data-page="19">19</a></li>
              <li><a href="/?page=20" data-page="20">20</a></li>
              <li><a href="/?page=19"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 19">
            <ul>
              <li><a href="/?page=18"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
              <li><a href="/?page=19" data-page="19" aria-current="page">19</a></li>
              <li><a href="/?page=20" data-page="20">20</a></li>
              <li><a href="/?page=20"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 20">
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
          <nav class="%CLASSES%" aria-label="Pagination">
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
