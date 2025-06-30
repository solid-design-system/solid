import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
import { userEvent } from '@storybook/test';

const { argTypes, parameters } = storybookDefaults('sd-menu');
const { overrideArgs } = storybookHelpers('sd-menu');
const { generateTemplate } = storybookTemplate('sd-menu');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-menu/Screenshots: sd-menu',
  component: 'sd-menu',
  tags: ['!autodocs', 'skip-a11y-[aria-allowed-attr]'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-menu-item>Menu Item 1</sd-menu-item>
        <sd-menu-item>Menu Item 2</sd-menu-item>
        <sd-menu-item>Menu Item 3</sd-menu-item>`
    }
  ]),
  argTypes,
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          sd-menu {
            width: 180px;
          }</style
        >${story()}`
  ] as unknown
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const IconIndent = {
  name: 'Icon Indent',
  render: () => {
    return html`
      <sd-menu>
        <sd-menu-item>
          <sd-icon name="union-investment/content/image" slot="icon-indent"></sd-icon>
          Menu Item 1
        </sd-menu-item>
        <sd-menu-item>
          <sd-icon name="union-investment/content/image" slot="icon-indent"></sd-icon>
          Menu Item 2
        </sd-menu-item>
        <sd-menu-item>
          <sd-icon name="union-investment/content/image" slot="icon-indent"></sd-icon>
          Menu Item 3
        </sd-menu-item>
      </sd-menu>
    `;
  }
};

export const Checkmark = {
  name: 'Checkmark',
  render: () => {
    return html`
      <sd-menu>
        <sd-menu-item type="checkbox" checked>Menu Item 1</sd-menu-item>
        <sd-menu-item type="checkbox" checked>Menu Item 2</sd-menu-item>
        <sd-menu-item type="checkbox">Menu Item 3</sd-menu-item>
      </sd-menu>
    `;
  }
};

export const Submenu = {
  name: 'Submenu',
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-allowed-attr',
            enabled: false
          }
        ]
      }
    }
  },
  render: () => {
    return html`
      <sd-menu>
        <sd-menu-item>Menu Item 1</sd-menu-item>
        <sd-menu-item>Menu Item 2</sd-menu-item>
        <sd-menu-item id="submenu-trigger">
          Menu Item 3
          <sd-menu slot="submenu">
            <sd-menu-item>Submenu Item 1</sd-menu-item>
            <sd-menu-item>Submenu Item 2</sd-menu-item>
            <sd-menu-item>Submenu Item 3</sd-menu-item>
          </sd-menu>
        </sd-menu-item>
      </sd-menu>
      <script type="module">
        const submenu = document.querySelector('#submenu-trigger').shadowRoot.querySelector('sd-popup');
        submenu.setAttribute('active', '');
      </script>
    `;
  }
};

export const Grouping = {
  name: 'Grouping',
  render: () => {
    return html`
      <sd-menu>
        <sd-menu-item>Menu Item 1</sd-menu-item>
        <sd-menu-item>Menu Item 2</sd-menu-item>
        <sd-divider></sd-divider>
        <sd-menu-item>Menu Item 3</sd-menu-item>
        <sd-menu-item>Menu Item 4</sd-menu-item>
        <sd-divider></sd-divider>
        <sd-menu-item>Menu Item 5</sd-menu-item>
        <sd-menu-item>Menu Item 6</sd-menu-item>
      </sd-menu>
    `;
  }
};

export const Disabled = {
  name: 'Disabled',
  render: () => {
    return html`
      <sd-menu class="w-[200px]">
        <sd-menu-item>Menu Item 1</sd-menu-item>
        <sd-menu-item disabled>Disabled Menu Item 2</sd-menu-item>
        <sd-menu-item>Menu Item 3</sd-menu-item>
      </sd-menu>
    `;
  }
};

export const Combination = generateScreenshotStory([Default, IconIndent, Checkmark, Submenu, Grouping, Disabled]);
