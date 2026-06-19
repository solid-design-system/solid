import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  getIconsByCategory
} from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn/multi-theming';

const { args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

if (typeof globalThis !== 'undefined') {
  (globalThis as any).iconsFromCdn = iconsFromCdn;
}

export default {
  title: 'Components/sd-icon/Libraries/multi-theming',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'content/image' }], args),
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [
    (story: any) =>
      html` <style>
          sd-icon {
            font-size: 1.5rem;
          }
          .sb-show-main.sd-theme-ui-light table,
          .sb-show-main.sd-theme-ui-dark table {
            display: none;
          }

          .sb-show-main:not(.sd-theme-ui-light):not(.sd-theme-ui-dark) sd-notification {
            display: none;
          }
        </style>
        ${story()}`
  ]
};

export const Content = {
  name: 'content',
  parameters: {
    chromatic: {
      disableSnapshot: true,
      modes: {
        'sd-theme-vb': { theme: 'VB' },
        'sd-theme-bb': { theme: 'BBBank' },
        'sd-theme-kid': { theme: 'KidStarter' }
      }
    }
  },
  render: (args: any) => {
    const iconsList = getIconsByCategory('content');

    return html` <sd-notification variant="info" open class="mb-4"
        >Please notice that this library is not available for themes UI-Light and UI-dark</sd-notification
      >
      ${generateTemplate({
        axis: {
          x: {
            type: 'attribute',
            name: 'color'
          },
          y: {
            type: 'attribute',
            name: 'name',
            values: iconsList.map((icon: string) => `content/${icon}`)
          }
        },
        constants: [{ type: 'attribute', name: 'library', value: 'multi-theming' }],
        options: {
          templateBackgrounds: {
            alternate: 'x',
            colors: [
              'rgba(var(--sd-color-background-white))',
              'rgba(var(--sd-color-background-white))',
              'rgba(var(--sd-color-primary))'
            ]
          }
        },
        args
      })}`;
  }
};

export const System = {
  name: 'system',
  parameters: {
    chromatic: {
      disableSnapshot: true,
      modes: {
        'sd-theme-vb': { theme: 'VB' },
        'sd-theme-bb': { theme: 'BBBank' },
        'sd-theme-kid': { theme: 'KidStarter' }
      }
    }
  },
  render: (args: any) => {
    const iconsList = getIconsByCategory('system');

    return html` <sd-notification variant="info" open class="mb-4"
        >Please notice that this library is not available for themes UI-Light and UI-dark</sd-notification
      >
      ${generateTemplate({
        axis: {
          x: {
            type: 'attribute',
            name: 'color'
          },
          y: {
            type: 'attribute',
            name: 'name',
            values: iconsList.map((icon: string) => `system/${icon}`)
          }
        },
        constants: [{ type: 'attribute', name: 'library', value: 'multi-theming' }],
        options: {
          templateBackgrounds: {
            alternate: 'x',
            colors: [
              'rgba(var(--sd-color-background-white))',
              'rgba(var(--sd-color-background-white))',
              'rgba(var(--sd-color-primary))'
            ]
          }
        },
        args
      })}`;
  }
};
