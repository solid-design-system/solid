import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn/multi-theming';

const { args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

if (typeof globalThis !== 'undefined') {
  (globalThis as any).iconsFromCdn = iconsFromCdn;
}

type IconSet = {
  content: string[];
  system: string[];
};

const multiThemingIcons = iconsFromCdn as Record<string, IconSet>;
const vbIcons = multiThemingIcons.vb;

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
          sd-icon[name*='content/'] {
            font-size: 48px;
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
        'sd-theme-sparda': { theme: 'Sparda' },
        'sd-theme-kid': { theme: 'KidStarter' }
      }
    }
  },
  render: (args: any) => {
    return html`${generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: vbIcons.content.map((icon: string) => `content/${icon}`)
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'sd-multi-theming' }],
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
        'sd-theme-sparda': { theme: 'Sparda' },
        'sd-theme-kid': { theme: 'KidStarter' }
      }
    }
  },
  render: (args: any) => {
    return html`${generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: vbIcons.system.map((icon: string) => `system/${icon}`)
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'sd-multi-theming' }],
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
