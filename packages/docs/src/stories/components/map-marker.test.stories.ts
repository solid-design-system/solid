import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-map-marker');
const { generateTemplate } = storybookTemplate('sd-map-marker');
const { overrideArgs } = storybookHelpers('sd-map-marker');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-map-marker/Screenshots: sd-map-marker',
  tags: ['!autodocs'],
  component: 'sd-map-marker',
  parameters: { ...parameters, controls: { disable: true } },
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'label',
      value: 'Label'
    }
  ]),
  argTypes
};

/**
 * This shows the badge in its default state and variant.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The marker in its 'Cluster' variant in all possible states.
 */
export const VariantCluster = {
  name: 'Variant Cluster',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'state', values: ['default', 'hover'] }
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
        },
        {
          type: 'attribute',
          name: 'label',
          value: undefined
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

/**
 * Use the 'default' slot to add content to the marker.
 */
export const Slots = {
  name: 'Slots',
  render: () => {
    return html`
      <div class="flex gap-4 items-center">
        <sd-map-marker variant="place" label="Label">
          <span class="slot slot--border slot--background">
            <sd-icon name="content/image" color="primary"></sd-icon>
          </span>
        </sd-map-marker>
        <sd-map-marker variant="place" label="Label">
          <span class="slot slot--border slot--background">
            <img class="" src="images/logo-unioninvestment-sm.svg" alt="Logo" />
          </span>
        </sd-map-marker>
        <sd-map-marker variant="cluster" label="Label">
          <span class="slot slot--border slot--background"> 8 </span>
        </sd-map-marker>
      </div>
    `;
  }
};

/**
 * Use the '--map-marker-scaling' css variable to scale the marker to your needs.
 */
export const Scale = {
  name: 'Scale',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'template',
          name: 'marker-scaling',
          values: [
            {
              title: '--map-marker-scaling: 1.5',
              value: '<div style="--map-marker-scaling: 1.5">%TEMPLATE%</div>'
            },
            {
              title: '--map-marker-scaling: 2',
              value: '<div style="--map-marker-scaling: 2">%TEMPLATE%</div>'
            }
          ]
        }
      },
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
      ],
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, VariantCluster, VariantMain, VariantPlace, Slots, Scale]);
