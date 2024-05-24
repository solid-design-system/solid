import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-flipcard');
const { generateTemplate } = storybookTemplate('sd-flipcard');
const { overrideArgs } = storybookHelpers('sd-flipcard');

export default {
  title: 'Components/sd-flipcard',
  component: 'sd-flipcard',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'front',
      value: `  <div slot="front"><h4
      class='sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted'
      >
        <sd-icon name="content/picture" library="global-resources"></sd-icon>
        Nisi eu excepteur anim esse
      </h4>
  
      <p class='sd-paragraph text-left sd-paragraph--inverted'>
        Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
      </p>
  
      <sd-link size="inherit" href="#" inverted>Link</sd-link></div> `
    },
    {
      type: 'slot',
      name: 'back',
      value: `   <div slot="back"><h4
      class='sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted'
    >
      <sd-icon name="content/picture" library="global-resources"></sd-icon>
      Nisi eu excepteur anim esse
    </h4>

    <p class='sd-paragraph  text-left sd-paragraph--inverted'>
      Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
    </p>

    <sd-link size="inherit" href="#" inverted>Link</sd-link></div>`
    }
  ]),

  argTypes,

  parameters: { ...parameters },
  decorators: [withActions] as any
};
/**
 * This shows sd-divider in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="width:350px">${generateTemplate({ args })}</div>`;
  }
};
