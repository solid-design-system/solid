import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

/**
 * ## Colors
 * Per default icons inherit their color from the current text color. Thus, you can set the color property on the <sl-icon> element or an ancestor to change the color.
 *
 * ## Sizes
 * Icons are sized relative to the current font size. To change their size, set the font-size property on the icon itself or on a parent element as shown below.
 *
 * ## Libraries
 * You can register additional icons to use with the <sl-icon> component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.
 * Solid will ship with two built-in icon libraries, default and system. The default icon library contains all of the icons by Union Investment's Design System. The system icon library contains only a small subset of icons that are used internally by Solid components.
 *
 * To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.
 *
 * If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via currentColor, so you may need to apply fill="currentColor or stroke="currentColor" to the SVG element using this function.
 *
 * Here's an example that registers an icon library located in the /assets/icons directory.
 *
 * ```html
 * <script type="module">
 *   import { registerIconLibrary } from '/dist/utilities/icon-library.js';
 *
 *   registerIconLibrary('my-icons', {
 *     resolver: name => `/assets/icons/${name}.svg`,
 *     mutator: svg => svg.setAttribute('fill', 'currentColor')
 *   });
 * </script>
 * ```
 *
 * To display an icon, set the library and name attributes of an <sl-icon> element.
 *
 * ```html
 * <!-- This will show the icon located at /assets/icons/smile.svg -->
 * <sl-icon library="my-icons" name="smile"></sl-icon>
 * ```
 *
 * You can even version your icon libraries:
 *
 * ```html
 * <script type="module">
 *   import { registerIconLibrary } from '/dist/utilities/icon-library.js';
 *
 *   registerIconLibrary('my-icons-2-3-0', {
 *     resolver: name => `/2-3-0/assets/icons/${name}.svg`,
 *     mutator: svg => svg.setAttribute('fill', 'currentColor')
 *   });
 * </script>
 * ```
 *
 * If an icon is used before registration occurs, it will be empty initially but shown when registered.
 * Check out the examples below or the [Shoelace Docs](https://shoelace.style/components/icon?id=icon-libraries)
 * to see how to handle this.
 */

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args: overrideArgs(
    [
      { name: 'library', type: 'attribute', value: 'global-resources' },
      { name: 'name', type: 'attribute', value: 'system/picture' }
    ],
    args
  ),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Default: This shows the sd-icon in its default state.
 *
 * > ❗️ We currently don't provide a default library, as this is blocked by external dependencies.
 * In future Updates of Solid Components this will be changed. Instead we're showing an icon from global resources.
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
          values: ['system/picture', 'content/picture']
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
          values: ['system/picture', 'content/picture']
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
