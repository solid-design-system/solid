import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn';

const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/default',
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      disable: true
    }
  },
  // decorator to add <styles> to the story
  decorators: [
    (story: any) =>
      html`${story()}<style>
          sd-icon {
            font-size: 1.5rem;
          }
        </style>`
  ]
};

/**
 * > Important: This list is only updated when Storybook is updated.
 */

export const LibraryDefaultContent = {
  name: 'union-investment/content',
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
          values: (iconsFromCdn as { content: string[] }).content.map(icon => `content/${icon}`)
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: '' }],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};

/**
 * > Important: This list is only updated when Storybook is updated.
 */

export const LibraryDefaultSystem = {
  name: 'union-investment/system',
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
          values: (iconsFromCdn as { system: string[] }).system.map(icon => `system/${icon}`)
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: '' }],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};

export const StatusLibrary = {
  name: 'sd-status-assets',
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
          values: [
            'status-check',
            'status-exclamation',
            'status-close',
            'status-info',
            'status-clock',
            'status-minus',
            'status-questionmark'
          ]
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'sd-status-assets' }],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};
