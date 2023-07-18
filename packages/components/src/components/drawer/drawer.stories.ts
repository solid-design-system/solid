import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');
const { overrideArgs } = storybookHelpers('sd-drawer');

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
  args: overrideArgs([{ type: 'attribute', name: 'open', value: true }]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-drawer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'label', 'icon-left', 'icon-right'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-button::part(...){outline: solid 2px red}',
          values: [
            'base',
            'overlay',
            'panel',
            'header',
            'header-actions',
            'title',
            'close-button',
            'body',
            'footer'
          ].map(part => {
            return {
              title: part,
              value: `<style>.parts{position: relative; height: 300px; width: 500px; margin: 0.5rem;} #part-${part} sd-drawer::part(${part}){outline: solid 2px red}</style><div id="part-${part}" class="parts">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
        },
        { type: 'attribute', name: 'contained', value: true }
      ],
      args
    });
  }
};
