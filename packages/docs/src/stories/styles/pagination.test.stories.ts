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
        <li><a href="/?page=1" aria-current="page">1</a></li>
        <li><a href="/?page=2">2</a></li>
        <li><a href="/?page=3">3</a></li>
        <li><a href="/?page=4">4</a></li>
        <li><a href="/?page=5">5</a></li>
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

export const Simple = {
  name: 'Simple',
  render: (args: any) =>
    generateTemplate({
      options: {
        templateContent: html`
        <nav class="sd-pagination sd-pagination--simple" aria-label="Simple pagination">
          <ul>
            <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
            <li>1</li>
            <li>20</li>
            <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
          </ul>
        </nav>
        `
      },
      args
    })
};

export const SinglePage = {
  name: 'Single Page',
  render: (args: any) =>
    generateTemplate({
      options: {
        templateContent: html`
        <nav class="sd-pagination" aria-label="Pagination">
          <ul>
            <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
            <li><a href="/?page=1" aria-current="page">1</a></li>
            <li><a aria-hidden="true"><sd-icon name="system/chevron-right" label="Next"></a></li>
          </ul>
        </nav>
        `
      },
      args
    })
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
              <li><a href="/?page=1" aria-current="page">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 2">
            <ul>
              <li><a href="/?page=1"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2" aria-current="page">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=3"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 3">
            <ul>
              <li><a href="/?page=2"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3" aria-current="page">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=4"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 4">
            <ul>
              <li><a href="/?page=3"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4" aria-current="page">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=5"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 5">
            <ul>
              <li><a href="/?page=4"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5" aria-current="page">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=6"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 17">
            <ul>
              <li><a href="/?page=16"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17" aria-current="page">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=18"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 18">
            <ul>
              <li><a href="/?page=17"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18" aria-current="page">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=19"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 19">
            <ul>
              <li><a href="/?page=18"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19" aria-current="page">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li><a href="/?page=20"><sd-icon name="system/chevron-right" label="Next"></a></li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 20">
            <ul>
              <li><a href="/?page=19"><sd-icon name="system/chevron-left" label="Previous"></a></li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a href="/?page=5">5</a></li>
              <li><a href="/?page=6">6</a></li>
              <li><a href="/?page=7">7</a></li>
              <li><a href="/?page=8">8</a></li>
              <li><a href="/?page=9">9</a></li>
              <li><a href="/?page=10">10</a></li>
              <li><a href="/?page=11">11</a></li>
              <li><a href="/?page=12">12</a></li>
              <li><a href="/?page=13">13</a></li>
              <li><a href="/?page=14">14</a></li>
              <li><a href="/?page=15">15</a></li>
              <li><a href="/?page=16">16</a></li>
              <li><a href="/?page=17">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20" aria-current="page">20</a></li>
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
  render: (args: any) =>
    generateTemplate({
      options: {
        templateContent: html` <div class="bg-primary p4">
      <nav class="sd-pagination sd-pagination--inverted" aria-label="Default variant pagination">
      <ul>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li><a href="/?page=1" aria-current="page">1</a></li>
        <li><a href="/?page=2">2</a></li>
        <li><a href="/?page=3">3</a></li>
        <li><a href="/?page=4">4</a></li>
        <li><a href="/?page=5">5</a></li>
        <li><a href="/?page=6">6</a></li>
        <li><a href="/?page=7">7</a></li>
        <li><a href="/?page=8">8</a></li>
        <li><a href="/?page=9">9</a></li>
        <li><a href="/?page=10">10</a></li>
        <li><a href="/?page=11">11</a></li>
        <li><a href="/?page=12">12</a></li>
        <li><a href="/?page=13">13</a></li>
        <li><a href="/?page=14">14</a></li>
        <li><a href="/?page=15">15</a></li>
        <li><a href="/?page=16">16</a></li>
        <li><a href="/?page=17">17</a></li>
        <li><a href="/?page=18">18</a></li>
        <li><a href="/?page=19">19</a></li>
        <li><a href="/?page=20">20</a></li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
    </nav>
    <nav class="sd-pagination sd-pagination--simple sd-pagination--inverted" aria-label="Simple variant pagination">
      <ul>
        <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
        <li>1</li>
        <li>20</li>
        <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
      </ul>
    </nav>
    </div>`
      },
      args
    })
};

export const Combination = generateScreenshotStory([Default, Simple, SinglePage, Truncated, Inverted]);
