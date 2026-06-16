import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn/multi-theming';

const { generateTemplate } = storybookTemplate('sd-icon');

function getIconsByTheme() {
  const sdTheme = document.documentElement.dataset.sdTheme;
  const theme = sdTheme && sdTheme !== 'undefined' ? sdTheme.replace('sd-theme-', '') : 'ui';
  return iconsFromCdn[theme];
}

export default {
  title: 'Components/sd-icon/multi-theming',
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

export const LibraryMultiThemingContent = {
  name: 'multi-theming/content',
  render: (args: any) => {
    const sdTheme = document.documentElement.dataset.sdTheme;
    const theme = sdTheme && sdTheme !== 'undefined' ? sdTheme.replace('sd-theme-', '') : 'ui';
    const icons = iconsFromCdn[theme];

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: [...icons.content.map((icon: string) => `content/${icon}`)]
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'library',
          value: ''
        }
      ],
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

export const LibraryMultiThemingSystem = {
  name: 'multi-theming/system',
  render: (args: any) => {
    const icons = getIconsByTheme();

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: [...icons.system.map((icon: string) => `system/${icon}`)]
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'library',
          value: ''
        }
      ],
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

export const LibraryMultiThemingStatus = {
  name: 'multi-theming/status',
  render: (args: any) => {
    const icons = getIconsByTheme();

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: [...icons.status.map((icon: string) => `status/${icon}`)]
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'library',
          value: ''
        }
      ],
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

export const LibraryMultiThemingBrandLogos = {
  name: 'multi-theming/brand-logos',
  render: (args: any) => {
    const icons = getIconsByTheme();

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: [...icons.brandLogos.map((icon: string) => `brand-logos/${icon}`)]
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'library',
          value: ''
        }
      ],
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
