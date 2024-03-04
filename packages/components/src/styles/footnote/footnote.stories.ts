import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-footnote');
const { overrideArgs } = storybookHelpers('sd-footnote');
const { generateTemplate } = storybookTemplate('sd-footnote');

/**
 * A footnote contains additional information/sources related to the content and usually appears at the bottom of a page or below the content it refers to.
 */

export default {
  title: 'Styles/sd-footnote',
  component: 'sd-footnote',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DeZ6iJggYfpSXHcEexNeYs/Footnote?type=design&node-id=0-1&mode=design&t=7vjD8Qq8iKSnKn6a-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Lorem Ipsum' }]),
  argTypes
};

/**
 * Default: This shows sd-footnote in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};
