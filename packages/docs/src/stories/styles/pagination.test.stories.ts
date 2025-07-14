import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

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
    a11y: {
      config: {
        rules: [
          {
            id: 'landmark-unique',
            enabled: false
          }
        ]
      }
    },
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
        <ul>
          <li>
            <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
          </li>
          <li><a aria-current="page">1</a></li>
          <li><a href="/?page=2">2</a></li>
          <li><a href="/?page=3">3</a></li>
          <li><a href="/?page=4">4</a></li>
          <li><a href="/?page=5">5</a></li>
          <li>
            <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
          </li>
        </ul>
      `
    }
  ]),
  argTypes
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
              <li>
                <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li>1</li>
              <li>20</li>
              <li>
                <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
        `
      },
      args
    })
};

export const SimpleWithButtons = {
  name: 'Simple with buttons',
  render: (args: any) =>
    generateTemplate({
      options: {
        templateContent: html`
          <nav class="sd-pagination sd-pagination--simple" aria-label="Simple pagination with buttons">
            <ul>
              <li>
                <button aria-hidden="true" disabled>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li>1</li>
              <li>20</li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="simple-pagination-with-buttons-live" aria-live="polite"></p>
          </nav>
          <nav class="sd-pagination sd-pagination--simple" aria-label="Simple pagination with buttons">
            <ul>
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li>10</li>
              <li>20</li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="simple-pagination-with-buttons-live" aria-live="polite"></p>
          </nav>
          <nav class="sd-pagination sd-pagination--simple" aria-label="Simple pagination with buttons">
            <ul>
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li>20</li>
              <li>20</li>
              <li>
                <button aria-hidden="true" disabled>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="simple-pagination-with-buttons-live" aria-live="polite"></p>
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
        <nav class="sd-pagination" aria-label="Single page pagination">
          <ul>
            <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
            <li><a aria-current="page">1</a></li>
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
              <li>
                <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a aria-current="page">1</a></li>
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
              <li>
                <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 2">
            <ul>
              <li>
                <a href="/?page=1"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a href="/?page=1">1</a></li>
              <li><a aria-current="page">2</a></li>
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
              <li>
                <a href="/?page=3"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 3">
            <ul>
              <li>
                <a href="/?page=2"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a aria-current="page">3</a></li>
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
              <li>
                <a href="/?page=4"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 4">
            <ul>
              <li>
                <a href="/?page=3"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a aria-current="page">4</a></li>
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
              <li>
                <a href="/?page=5"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 5">
            <ul>
              <li>
                <a href="/?page=4"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a href="/?page=1">1</a></li>
              <li><a href="/?page=2">2</a></li>
              <li><a href="/?page=3">3</a></li>
              <li><a href="/?page=4">4</a></li>
              <li><a aria-current="page">5</a></li>
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
              <li>
                <a href="/?page=6"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 17">
            <ul>
              <li>
                <a href="/?page=16"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
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
              <li><a aria-current="page">17</a></li>
              <li><a href="/?page=18">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li>
                <a href="/?page=18"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 18">
            <ul>
              <li>
                <a href="/?page=17"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
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
              <li><a aria-current="page">18</a></li>
              <li><a href="/?page=19">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li>
                <a href="/?page=19"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 19">
            <ul>
              <li>
                <a href="/?page=18"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
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
              <li><a aria-current="page">19</a></li>
              <li><a href="/?page=20">20</a></li>
              <li>
                <a href="/?page=20"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination with current page 20">
            <ul>
              <li>
                <a href="/?page=19"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
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
              <li><a aria-current="page">20</a></li>
              <li>
                <a aria-hidden="true"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
        `
      },
      args
    });
  }
};

export const TruncatedWithButtons = {
  name: 'Truncated with buttons',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul>
              <li>
                <button aria-hidden="true" disabled>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button aria-current="page">1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button aria-current="page">2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button aria-current="page">3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button aria-current="page">4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button aria-current="page">5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button aria-current="page">12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button aria-current="page">13</button></li>
              <li><button>14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button aria-current="page">14</button></li>
              <li><button>15</button></li>
              <li>
                <button>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
          </nav>
          <nav class="%CLASSES%" aria-label="Pagination">
            <ul class="buttons">
              <li>
                <button>
                  <sd-icon name="system/chevron-left" label="Go to previous page"></sd-icon>
                </button>
              </li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button>7</button></li>
              <li><button>8</button></li>
              <li><button>9</button></li>
              <li><button>10</button></li>
              <li><button>11</button></li>
              <li><button>12</button></li>
              <li><button>13</button></li>
              <li><button>14</button></li>
              <li><button aria-current="page">15</button></li>
              <li>
                <button aria-hidden="true" disabled>
                  <sd-icon name="system/chevron-right" label="Go to next page"></sd-icon>
                </button>
              </li>
            </ul>
            <p id="pagination-live" aria-live="polite"></p>
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
          <nav class="sd-pagination sd-pagination--inverted" aria-label="Inverted pagination">
            <ul>
              <li>
                <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a aria-current="page">1</a></li>
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
              <li>
                <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
          <nav
            class="sd-pagination sd-pagination--simple sd-pagination--inverted"
            aria-label="Simple variant pagination"
          >
            <ul>
              <li>
                <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li>1</li>
              <li>20</li>
              <li>
                <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
        </div>`
      },
      args
    })
};

export const HiddenHeadline = {
  name: 'Hidden Headline',
  render: (args: any) =>
    generateTemplate({
      options: {
        templateContent: html`
          <nav class="sd-pagination" aria-labelledby="pagination--hidden-headline">
            <h4 id="pagination--hidden-headline">Hidden headline pagination</h4>
            <ul>
              <li>
                <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
              </li>
              <li><a aria-current="page">1</a></li>
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
              <li>
                <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
              </li>
            </ul>
          </nav>
        `
      },
      args
    })
};

export const Combination = generateScreenshotStory([
  Default,
  Simple,
  SimpleWithButtons,
  SinglePage,
  Truncated,
  TruncatedWithButtons,
  Inverted,
  HiddenHeadline
]);
