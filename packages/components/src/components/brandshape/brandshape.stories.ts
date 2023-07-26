import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

export default {
  title: 'Components/sd-brandshape',
  component: 'sd-brandshape',
  parameters: { ...parameters },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: 'Default'
    },
    { type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
  ]),
  argTypes: {
    ...argTypes,
    'shapes-attr': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...argTypes['shapes-attr'],
      control: 'text',
      options: ['["top"]', '["top", "middle"]', '["middle", "bottom"]', '["top", "middle", "bottom"]'] // HAS NO OVERRIDE EFFECT FOR THE STORYBOOK
    }
  }
};

/**
 * Default: This shows sd-brandshape in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const test = {
  render: () => {
    return '<sd-brandshape>Default Slot</sd-brandshape>';
  }
};

/**
 *  The top shape of the brandshape.
 */
export const Top = {
  name: 'Shape Top',
  parameters: { controls: { exclude: ['variant', 'form'] } },
  render: () => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', 'white', '#00358E']
        }
      },
      args: overrideArgs([
        {
          type: 'slot',
          name: 'default',
          value: 'Default'
        },
        { type: 'attribute', name: 'shapes', value: '["top"]' }
      ]),
      constants: { type: 'template', name: 'width', value: '<div style="width: 500px">%TEMPLATE%</div>' }
    });
  }
};

/**
 *  The top, middle shape of the brandshape.
 */
export const topMiddle = {
  name: 'Shape Top Middle',
  parameters: { controls: { exclude: ['variant', 'form'] } },
  render: () => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', 'white', '#00358E']
        }
      },
      args: overrideArgs([
        {
          type: 'slot',
          name: 'default',
          value: 'Default'
        },
        { type: 'attribute', name: 'shapes', value: '["top", "middle"]' }
      ]),
      constants: { type: 'template', name: 'width', value: '<div style="width: 500px">%TEMPLATE%</div>' }
    });
  }
};

/**
 *  The middle, bottom shape of the brandshape.
 */
export const middleBottom = {
  name: 'Shape Middle Bottom',
  parameters: { controls: { exclude: ['variant', 'form'] } },
  render: () => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', 'white', '#00358E']
        }
      },
      args: overrideArgs([
        {
          type: 'slot',
          name: 'default',
          value: 'Default'
        },
        { type: 'attribute', name: 'shapes', value: '["middle", "bottom"]' }
      ]),
      constants: { type: 'template', name: 'width', value: '<div style="width: 500px">%TEMPLATE%</div>' }
    });
  }
};

/**
 *  The top, middle, bottom shape of the brandshape.
 */
export const topMiddleBottom = {
  name: 'Shape Top Middle Bottom',
  parameters: { controls: { exclude: ['variant', 'form'] } },
  render: () => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', 'white', '#00358E']
        }
      },
      args: overrideArgs([
        {
          type: 'slot',
          name: 'default',
          value: 'Default'
        },
        { type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
      ]),
      constants: { type: 'template', name: 'width', value: '<div style="width: 500px">%TEMPLATE%</div>' }
    });
  }
};
