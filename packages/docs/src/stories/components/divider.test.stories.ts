import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-divider');
const { generateTemplate } = storybookTemplate('sd-divider');
const { overrideArgs } = storybookHelpers('sd-divider');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-divider/Screenshots: sd-divider',
  tags: ['!autodocs'],
  component: 'sd-divider',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        sd-divider[orientation='vertical'] {
          height: 120px;
        }
        sd-divider[orientation='horizontal'] {
          width: 120px;
        }
        .size-sm sd-divider[orientation='horizontal'] {
          width: 50px;
        }
        .size-sm sd-divider[orientation='vertical'] {
          height: 50px;
        }
        .size-l sd-divider[orientation='horizontal'] {
          width: 150px;
        }
        .size-l sd-divider[orientation='vertical'] {
          height: 150px;
        }
      </style>
      ${story()}
    `
  ]
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Orientation = {
  name: 'Orientation',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'orientation' }
      },
      args
    });
  }
};

export const Inverted = {
  name: 'Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'inverted' }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['rgba(var(--sd-color-primary))', 'transparent']
        }
      }
    });
  }
};

export const Sizes = {
  name: 'Sizes',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'template',
          name: 'size',
          values: [
            {
              title: 'width: 50px',
              value: `<div class="size-sm"><sd-divider/><div>`
            },
            {
              title: 'width: 150px',
              value: `<div class="size-l"><sd-divider/><div>`
            },
            {
              title: 'height: 50px',
              value: `<div class="size-sm"><sd-divider orientation="vertical"/><div>`
            },
            {
              title: 'height: 150px',
              value: `<div class="size-l"><sd-divider orientation="vertical"/><div>`
            }
          ]
        }
      },
      args
    });
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-divider::part(...){outline: solid 2px red}',
          values: [
            {
              title: 'main',
              value: `<style>#part-main sd-divider::part(main){outline: solid 2px red }</style><div id="part-main">%TEMPLATE%</div>`
            }
          ]
        }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Orientation, Inverted, Sizes, Parts]);
