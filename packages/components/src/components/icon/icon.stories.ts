import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

/**
 * **Used to display icons.**
 *
 * Icons can be used to indicate an action or to represent content.
 *
 */

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'union-investment/content/image' }], args),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `name` attribute to change the icon. Checkout these lists of Union Investment's icons for available names:
 * - [Content Icons](?path=/story/components-sd-icon-default--library-default-content)
 * - [System Icons](?path=/story/components-sd-icon-default--library-default-system)
 */

export const Name = {
  render: () => {
    return html`
      <div class="flex flex-col gap-12">
        <div class="flex gap-12">
          <sd-icon name="union-investment/content/image" label="Simplified picture frame"></sd-icon>
          <sd-icon name="union-investment/system/image" label="Very simplified picture frame"></sd-icon>
        </div>
        <div class="flex gap-12">
          <sd-icon name="union-investment/content/alarm" label="Simplified alarm bell"></sd-icon>
          <sd-icon name="union-investment/system/alarm" label="Very simplified alarm bell"></sd-icon>
        </div>
      </div>
    `;
  }
};

/**
 * Use the `label` attribute to announce non-decorative icons to assistive devices.
 */

export const Label = {
  render: () => {
    return html`
      <div class="flex gap-2">
        <sd-button variant="tertiary" size="sm"
          ><sd-icon name="union-investment/system/arrow-left" label="Back"></sd-icon
        ></sd-button>
        <sd-button variant="tertiary" size="sm"
          ><sd-icon name="union-investment/system/arrow-right" label="Next"></sd-icon
        ></sd-button>
      </div>
    `;
  }
};

/**
 * Use the `color` attribute to change an icon’s color
 *
 * - `currentColor` (default): Inherits the current text color, which makes it easy to style icons via CSS.
 * - `primary`: Sets the color to the primary color.
 * - `white`: Sets the color to white.
 */

export const Color = {
  render: () => {
    return html`
      <div class="flex gap-6">
        <sd-icon class="p-2" name="union-investment/content/image" color="currentColor"></sd-icon>
        <sd-icon class="p-2" name="union-investment/content/image" color="primary"></sd-icon>
        <div class="p-2 bg-primary">
          <sd-icon name="union-investment/content/image" color="white"></sd-icon>
        </div>
      </div>
    `;
  }
};

/**
 * Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element.
 */

export const Size = {
  render: () => {
    return html`
      <div class="flex gap-6">
        <sd-icon class="text-sm" name="union-investment/content/image" label="Small picture frame"></sd-icon>
        <sd-icon name="union-investment/content/image" label="Picture frame which inherits the size"></sd-icon>
        <sd-icon class="text-xl" name="union-investment/content/image" label="Extra large picture frame"></sd-icon>
        <sd-icon
          style="font-size: 36px"
          name="union-investment/content/image"
          label="Even larger picture frame"
        ></sd-icon>
      </div>
    `;
  }
};

/**
 * You can register additional icons to use with the `<sd-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.
 * Solid ships with two built-in icon libraries, `default` and `system`:
 * - `default`: The `default` icon library refers to the official CDN by Union Investment which is fed by Celum. It is provided by the brand departement, therefore requests towards the icons itself need to be addressed accordingly.
 * - `system`: They icons are an integrated library of the Solid Components to ensure they're always available. They are a subset of Union Investment's official icons. As names and visuals may change over time, system icons should NOT be used directly.
 *
 * To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.
 *
 * If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via currentColor, so you may need to apply fill="currentColor or stroke="currentColor" to the SVG element using this function.
 *
 * Here's an example that registers an icon library located in the `/assets/icons` directory.
 *
 * ```html
 * <script type="module">
 *   import { registerIconLibrary } from '@solid-design-system/components/unversioned/icon/library';
 *
 *   registerIconLibrary('my-icons', {
 *     resolver: name => `/assets/icons/${name}.svg`,
 *     mutator: svg => svg.setAttribute('fill', 'currentColor')
 *   });
 * </script>
 * ```
 *
 * If you use the UMD bundle, you have to access the `registerIconLibrary()` function from the `SolidComponents` global.
 *
 * ```html
 * <script src="https://solid-design-system.fe.union-investment.de/x.x.x/components/umd/solid-components.js"></script>
 * <script>
 *  const { registerIconLibrary } = window['Solid Components'];
 *
 *  registerIconLibrary('my-icons', {
 *    resolver: name => `/assets/icons/${name}.svg`,
 *    mutator: svg => svg.setAttribute('fill', 'currentColor')
 *  });
 * </script>
 * ```
 *
 * Please have in mind, that you have to make sure that `window['Solid Components']` is available before you call `registerIconLibrary()` e. g. via polling or similar.
 *
 * To display an icon, set the library and name attributes of an <sd-icon> element.
 *
 * ```html
 * <!-- This will show the icon located at /assets/icons/smile.svg -->
 * <sd-icon library="my-icons" name="smile"></sd-icon>
 * ```
 *
 * You can even version your icon libraries:
 *
 * ```html
 * <script type="module">
 *   import { registerIconLibrary } from '@solid-design-system/components/unversioned/icon/library';
 *
 *   registerIconLibrary('my-icons-2-3-0', {
 *     resolver: name => `/2-3-0/assets/icons/${name}.svg`,
 *     mutator: svg => svg.setAttribute('fill', 'currentColor')
 *   });
 * </script>
 * ```
 *
 * If an icon is used before registration occurs, it will be empty initially but shown when registered.
 *
 * The following examples demonstrate how to register icons from Union Investment's Global Resources CDN. Checkout [Shoelace's Docs](https://shoelace.style/components/icon?id=icon-libraries)
 * to examples of popular, open source icon libraries.
 */

export const IconLibraries = {
  render: () => {
    return html`
      <sd-icon library="global-resources" name="system/picture"> </sd-icon>

      <script type="module">
        // ESM:
        // import { registerIconLibrary } from '@solid-design-system/components/unversioned/icon/library';

        // UMD:
        // const { registerIconLibrary } = window['SolidComponents'];

        // preview-ignore:start
        // Note on this script:
        // - It's actual registration happens in preview.js, here it is replicated for the code preview.
        // - To prevent errors, the registration is wrapped in a hidden conditional statement that is always false.
        if (false) {
          // preview-ignore:end
          registerIconLibrary('global-resources', {
            resolver: name => {
              // split path and name
              let path = name.split('/');
              let iconName = path.pop();

              // "system" and "system/colored" should both resolve to "system/colored", same for "content"
              if (path.length === 1) {
                path.push('colored');
              }

              return (
                'https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/' +
                path.join('/') +
                '/' +
                iconName +
                '.svg'
              );
            },

            // We need currentColor as the main color for the icons
            mutator: svg => {
              const recoloredElements = {};
              recoloredElements['currentColorFills'] = svg.querySelectorAll('[fill="#00358e"], [fill="#fff"]');
              recoloredElements['currentColorStrokes'] = svg.querySelectorAll('[stroke="#00358e"], [stroke="#fff"]');
              recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#43b02a"]');
              recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#43b02a"]');

              recoloredElements.currentColorFills.forEach(filledElement => {
                filledElement.setAttribute('fill', 'currentColor');
              });

              recoloredElements.currentColorStrokes.forEach(strokedElement => {
                strokedElement.setAttribute('stroke', 'currentColor');
              });

              recoloredElements.greenFills.forEach(filledElement => {
                filledElement.setAttribute('fill', 'rgb(var(--sd-color-accent, 45 157 0) / var(--tw-bg-opacity, 1))');
              });

              recoloredElements.greenStrokes.forEach(strokedElement => {
                strokedElement.setAttribute(
                  'stroke',
                  'rgb(var(--sd-color-accent, 45 157 0) / var(--tw-bg-opacity, 1))'
                );
              });
              return svg;
            }
          });
          // preview-ignore:start
        }
        // preview-ignore:end
      </script>
    `;
  }
};
