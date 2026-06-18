import '../../../../components/src/solid-components';
import { icons } from '../../../../components/src/components/icon/library.internal';
import { icons as statusIcons } from '../../../../components/src/components/icon/library.status';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  getIconsByCategory
} from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn/multi-theming';

const { argTypes, args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

if (typeof globalThis !== 'undefined') {
  (globalThis as any).iconsFromCdn = iconsFromCdn;
}

export default {
  title: 'Components/sd-icon/Screenshots: sd-icon',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'union-investment/content/image' }], args),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const LibraryDefault = {
  name: 'Library: default',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: ['content/image', 'union-investment/content/image', 'system/image', 'union-investment/system/image']
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: '' }],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-primary))'
          ]
        }
      },
      args
    })
};

export const LibraryInternal = {
  name: 'Library: _internal',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: Object.keys(icons)
        }
      },
      constants: [
        { type: 'attribute', name: 'library', value: '_internal' },
        { type: 'attribute', name: 'name', value: 'check' }
      ],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-primary))'
          ]
        }
      },
      args
    })
};

export const StatusLibrary = {
  name: 'Library: status assets',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: Object.keys(statusIcons)
        }
      },
      constants: [
        { type: 'attribute', name: 'library', value: 'sd-status-assets' },
        { type: 'attribute', name: 'name', value: 'status-questionmark' }
      ],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-primary))'
          ]
        }
      },
      args
    })
};

export const MultiThemingLibrary = {
  name: 'Library: multi-theming',
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
    const contentIcons = getIconsByCategory('content').map((icon: string) => `content/${icon}`);
    const systemIcons = getIconsByCategory('system').map((icon: string) => `system/${icon}`);

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: [...contentIcons, ...systemIcons]
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
    });
  }
};
