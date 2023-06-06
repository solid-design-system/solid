import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args,
  argTypes
};

/**
 * Default: This shows sd-icon in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 *
 * The following resolver allows it to fetch data from the global-resources CDN. It always point to the latest branch.
 *
 * ```js
 registerIconLibrary('global-resources', { resolver: name => { let finalName = name; if (name.includes('system/') && !name.includes('system/colored/')) { finalName = name.replace('system/', 'system/colored/'); } return `https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/${finalName}.svg`; } });
 ```
  You can now use the component like this:

  ```html
  <sd-icon name="system/alarm" library="global-resources"></sd-icon>
  <sd-icon name="content/colored/alarm" library="global-resources"></sd-icon>
  ```

  * You can version the library by adding a version number to the library name and changing "latest" to the version number.
 *
 * ```js
 registerIconLibrary('global-resources-3-1-0', { resolver: name => { let finalName = name; if (name.includes('system/') && !name.includes('system/colored/')) { finalName = name.replace('system/', 'system/colored/'); } return `https://global-resources.fe.union-investment.de/3.1.0/scripts/services/svg/icons/${finalName}.svg`; } });
 ```
 */

export const LibraryGlobalResources = {
  render: (args: any) => {
    return html`${generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'name',
          values: ['system/alarm', 'system/colored/alarm']
        }
      },
      options: {
        title: 'system'
      },
      constants: [{ type: 'attribute', name: 'library', value: 'global-resources' }],
      args
    })}
    ${generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'name',
          values: ['content/colored/letter', 'content/white/letter']
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'global-resources' }],
      args,
      options: {
        title: 'content',
        templateBackgrounds: { alternate: 'x', colors: ['white', '#00358E'] }
      }
    })}`;
  }
};
