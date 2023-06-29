import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-accordion-group');
const { generateTemplate } = storybookTemplate('sd-accordion-group');

export default {
  title: 'Components/sd-accordion-group',
  component: 'sd-accordion-group',
  args: {
    ...args,
    'default-slot':
      '<sd-accordion summary="Accordion 1"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 2"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 3"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 4"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 5"><slot-comp></slot-comp></sd-accordion>'
  },
  argTypes,
  parameters: { ...parameters }
};

/**
 * Vertical stack of interactive headlines that can be used to toggle the display of additional information; each element can be "collapsed" with only a brief caption visible, or "expanded" to display the entire content.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};
