import '../../solid-components'

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-headline');
const { overrideArgs } = storybookHelpers('sd-headline');
const { generateTemplate } = storybookTemplate('sd-headline');

/**
 * Headlines are vital for displaying content hierarchy and to improve accessibility. <br>
 * A headline can be additionally accompanied by an icon. The icon can be displayed on the left side or inline. <br>
 * <br>
 * <b>Sizes</b><br>
 * <li>4xl is the default size.</li>
 * <li>3xl</li>
 * <li>xl</li>
 * <li>lg</li>
 * <li>base</li>
 * 
 */

export default {
    title: 'Styles/sd-headline',
    component: 'sd-headline',
    parameters: {
        ...parameters,
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1Dc7fiQU12U6f7SFgsHjQE/Headline?type=design&node-id=0-1&mode=design&t=lkfrp1PXc280seHQ-0'

        }
    },
    args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
    argTypes
};


/**
 * Default: This shows sd-headline in its default state.
 */

export const Default = {
    render: (args: any) => {
      return generateTemplate({
        options: { templateContent: '<div class="%CLASSES%">%SLOT%</div>' },
        args
      });
    }
};
  
/**
 * Use the `inverted` class to make a headline with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-headline--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-headline--inverted', values: [false, true] }]
      },
      constants: { type: 'attribute', name: 'sd-headline--inverted', value: true },
      options: { templateBackgrounds: { alternate: 'y', colors: ['transparent', '#00358E'] } },
      args
    });
  }
};