import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-map-marker');
const { generateTemplate } = storybookTemplate('sd-map-marker');

export default {
  title: 'Components/sd-map-marker',
  component: 'sd-map-marker',
  parameters: {
    ...parameters
  },
  argTypes,
  decorators: [withActions] as any
};

/**
 * This shows the badge in its default state.
 */

export const Default = {
  parameters: { controls: { exclude: ['default'] } },
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The marker in its 'Cluster' variant in all possible states.
 */

export const VariantCluster = {
  name: 'Variant Cluster',
  parameters: { controls: { exclude: ['state'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'state' }
      },
      args,
      constants: [
        {
          type: 'slot',
          name: 'default',
          value: '8'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'cluster'
        }
      ]
    });
  }
};

/**
 * The marker in its 'Main' variant in all possible states.
 */

export const VariantMain = {
  name: 'Variant Main',
  parameters: { controls: { exclude: ['default', 'state'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'state' }
      },
      args,
      constants: [
        {
          type: 'slot',
          name: 'default',
          value: ''
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'main'
        }
      ]
    });
  }
};

/**
 * The marker in its 'Place' variant in all possible states.
 */

export const VariantPlace = {
  name: 'Variant Place',
  parameters: { controls: { exclude: ['default', 'state'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'state' }
      },
      args,
      constants: [
        {
          type: 'slot',
          name: 'default',
          value: '<sd-icon name="content/image" color="primary"></sd-icon>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'place'
        }
      ]
    });
  }
};
