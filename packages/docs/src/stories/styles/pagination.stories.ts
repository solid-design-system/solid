import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from 'storybook/actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-pagination');
const { overrideArgs } = storybookHelpers('sd-pagination');
const { generateTemplate } = storybookTemplate('sd-pagination');

const html = String.raw;

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Styles/sd-pagination',
  component: 'sd-pagination',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/LiEAPa5PkSJyjkyAE9RNsi/Solid-DS-%E2%80%93-Component-Library?node-id=9401-33&p=f&t=A7lFFTs8C5yV9hmi-0'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: html``
  }),
  decorators: [
    withActions,
    (story: any) => {
      const handlePageClick = (event: MouseEvent) => {
        event.preventDefault();
      };

      if (document.querySelector('script[pagination-loaded]')) {
        return story();
      }

      const script = document.createElement('script');
      script.setAttribute('pagination-loaded', 'true');
      script.type = 'module';
      script.textContent = `
        document
          .querySelectorAll('.sd-pagination a[href]')
          .forEach(page => page.addEventListener('click', ${handlePageClick}));
      `;
      document.body.appendChild(script);
      return story();
    }
  ]
};

export const Default = {
  decorators: [],
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent:
          args['sd-pagination--...'] === 'simple'
            ? html`
              <nav class="%CLASSES%" aria-label="Default pagination">
                <ul>
                  <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
                  <li>1</li>
                  <li>20</li>
                  <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
                </ul>
              </nav>`
            : html`
              <nav class="%CLASSES%" aria-label="Default pagination">
                <ul>
                  <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
                  <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
                </ul>
              </nav>`
      },
      args
    });
  }
};

/**
 * Use the `sd-pagination` classes for alternative appearances:
 *
 * - `number` (default)
 * - `simple`
 */
export const Variants = {
  render: () => html`
    <div class="flex gap-10">
      <nav class="sd-pagination" aria-label="Default variant pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
        </ul>
      </nav>
      <nav class="sd-pagination sd-pagination--simple" aria-label="Simple variant pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
          <li>1</li>
          <li>20</li>
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
        </ul>
      </nav>
    </div>
  `
};

/**
 * Automatically truncated on default appearance.
 */
export const Truncation = {
  render: () => html`
      <nav class="sd-pagination" aria-label="Truncated pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
        </ul>
      </nav>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4">
      <nav class="sd-pagination sd-pagination--inverted" aria-label="Inverted pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
        </ul>
      </nav>
    </div>
  `
};

/**
 * Provides an accessible hidden headline for pagination navigation.
 */
export const HiddenHeadline = {
  render: () => html`
    <div class="p-4">
      <nav class="sd-pagination" aria-labelledby="pagination--hidden-headline">
        <h4 id="pagination--hidden-headline">Pagination</h4>
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></a></li>
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
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></a></li>
        </ul>
      </nav>
    </div>
  `
};
