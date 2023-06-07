import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args,
  argTypes,
  parameters: {
    mockData: [
      {
        url: 'https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/system/colored/alarm.svg',
        method: 'GET',
        status: 200,
        response: {
          data: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00358e" d="M15 22.667h-9.333v-7.6c-1.833-1.4-3-3.6-3-6.067 0-4.233 3.433-7.667 7.667-7.667s7.667 3.433 7.667 7.667c0 2.467-1.167 4.667-3 6.067v2.4c2.7-1.467 4.533-4.133 4.933-7.2-0.367-0.3-0.6-0.767-0.6-1.267 0-0.933 0.733-1.667 1.667-1.667s1.667 0.733 1.667 1.667c0 0.567-0.3 1.1-0.733 1.4-0.5 4.1-3.1 7.633-6.933 9.3v2.967zM7.667 20.667h5.333v-4.467c-0.833 0.3-1.733 0.467-2.667 0.467s-1.833-0.167-2.667-0.467v4.467zM10.333 3.333c-3.133 0-5.667 2.533-5.667 5.667s2.533 5.667 5.667 5.667 5.667-2.533 5.667-5.667-2.533-5.667-5.667-5.667zM10.333 12c-1.667 0-3-1.333-3-3s1.333-3 3-3 3 1.333 3 3-1.333 3-3 3zM10.333 8c-0.567 0-1 0.433-1 1s0.433 1 1 1 1-0.433 1-1-0.433-1-1-1z"></path></svg>'.replace(
            /"/g,
            "'"
          )
        }
      },
      {
        url: 'https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/content/colored/letter.svg',
        method: 'GET',
        status: 200,
        response: {
          data: '<svg id="letter_svg__Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M68,58H14A10,10,0,0,1,4,48V14H58A10,10,0,0,1,68,24ZM8,18V48a6,6,0,0,0,6,6H64V24a6,6,0,0,0-6-6Z" fill="#00358e"></path><path d="M59.36,47.53,46.7,35.85,59.34,24.49l-2.68-3L40,36.46a6,6,0,0,1-8.08,0L15.34,21.51l-2.68,3L25.3,35.85,12.64,47.53l2.72,2.94L28.29,38.53l1,.9a10,10,0,0,0,13.44,0l1-.9L56.64,50.47Z" fill="#43b02a"></path></svg>'.replace(
            /"/g,
            "'"
          )
        }
      },
      {
        url: 'https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/content/white/letter.svg',
        method: 'GET',
        status: 200,
        response: {
          data: '<svg id="letter_svg__Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M68,58H14A10,10,0,0,1,4,48V14H58A10,10,0,0,1,68,24ZM8,18V48a6,6,0,0,0,6,6H64V24a6,6,0,0,0-6-6Z" fill="#fff"></path><path d="M59.36,47.53,46.7,35.85,59.34,24.49l-2.68-3L40,36.46a6,6,0,0,1-8.08,0L15.34,21.51l-2.68,3L25.3,35.85,12.64,47.53l2.72,2.94L28.29,38.53l1,.9a10,10,0,0,0,13.44,0l1-.9L56.64,50.47Z" fill="#43b02a"></path></svg>'.replace(
            /"/g,
            "'"
          )
        }
      }
    ]
  }
};

/**
 * Default: This shows the sd-icon in its default state.
 *
 * > ❗️ We currently don't provide a default library, as this is blocked by external dependencies.
 * In future Updates of Solid Components this will be changed.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The following resolver allows it to fetch data from the global-resources CDN. It points to the latest branch.
 *
 * ```js
 *  registerIconLibrary('global-resources', {
 *   resolver: name => {
 *     // split path and name
 *     let path = name.split('/');
 *     let iconName = path.pop();
 *
 *     // "system" and "system/colored" should both resolve to "system/colored", same for "content"
 *     if (path.length === 1) {
 *       path.push('colored');
 *     }
 *
 *     return `https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/${path.join(
 *       '/'
 *     )}/${iconName}.svg`;
 *   },
 *
 *   // We need currentColor as the main color for the icons
 *   mutator: svg => {
 *     const recoloredElements = {};
 *     recoloredElements['currentColorFills'] = svg.querySelectorAll('[fill="#00358e"], [fill="#fff"]');
 *     recoloredElements['currentColorStrokes'] = svg.querySelectorAll('[stroke="#00358e"], [stroke="#fff"]');
 *     recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#43b02a"]');
 *     recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#43b02a"]');
 *
 *     recoloredElements.currentColorFills.forEach(filledElement => {
 *       filledElement.setAttribute('fill', 'currentColor');
 *     });
 *
 *     recoloredElements.currentColorStrokes.forEach(strokedElement => {
 *       strokedElement.setAttribute('stroke', 'currentColor');
 *     });
 *
 *     recoloredElements.greenFills.forEach(filledElement => {
 *       filledElement.setAttribute('fill', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
 *     });
 *
 *     recoloredElements.greenStrokes.forEach(strokedElement => {
 *       strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
 *     });
 *     return svg;
 *   }
 * });
 * ```
 *
 * You can now use the component like this:
 *
 * ```html
 * <sd-icon name="system/alarm" library="global-resources"></sd-icon>
 * <sd-icon name="content/alarm" library="global-resources"></sd-icon>
 * ```
 *
 * You can version the library by adding a version number to the library name and changing "latest" to the version number.
 *
 * ```js
 * registerIconLibrary('global-resources-3-1-0', ... });
 * ```
 */

export const LibraryGlobalResources = {
  name: 'Library: global-resources',
  parameters: { controls: { exclude: ['name', 'library'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'name',
          values: ['system/alarm', 'content/letter']
        },
        y: {
          type: 'attribute',
          name: 'color'
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'global-resources' }],
      options: {
        title: 'system',
        templateBackgrounds: { alternate: 'y', colors: ['white', 'white', '#00358E'] }
      },
      args
    })
};

/**
 * The following resolver allows it to fetch data from the global-resources CDN, but overrides given paths and names.
 * This is especially useful if you want to override icons which are baked into components.
 *
 * ```js
 *
 * registerIconLibrary('global-resources-overriden', {
 *   resolver: name => {
 *     // split path and name
 *     let path = name.split('/');
 *     let iconName = path.pop();
 *
 *     // "system" and "system/colored" should both resolve to "system/colored", same for "content"
 *     if (path.length === 1) {
 *       path.push('colored');
 *     }
 *
 *     // Override icon names which are baked into components
 *     if (path[0] === 'system') {
 *       iconName =
 *         {
 *           alarm: 'wecker'
 *         }[iconName] || iconName;
 *     } else if (path[0] === 'content') {
 *       iconName =
 *         {
 *           letter: 'korrespondenz'
 *         }[iconName] || iconName;
 *     }
 *
 *     return `https://global-resources.fe.union-investment.de/latest/scripts/services/svg/attrax-icons/${path.join(
 *       '/'
 *     )}/${iconName}.svg`;
 *   },
 *   // We need currentColor as the main color for the icons
 *   mutator: svg => svg.setAttribute('fill', 'currentColor')
 * });
 *
 * ```
 */

export const LibraryGlobalResourcesOverriden = {
  name: 'Library: global-resources (overriden)',
  parameters: { controls: { exclude: ['name', 'library'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'name',
          values: ['system/alarm', 'content/letter']
        },
        y: {
          type: 'attribute',
          name: 'color'
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'global-resources-overriden' }],
      options: {
        title: 'system',
        templateBackgrounds: { alternate: 'y', colors: ['white', 'white', '#00358E'] }
      },
      args
    })
};
