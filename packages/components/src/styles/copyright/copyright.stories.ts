import '../../solid-components';

import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');
// const { generateTemplate } = storybookTemplate('sd-copyright');

/**
 *
 */
export default {
  title: 'Styles/sd-copyright',
  component: 'sd-copyright',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/IUiRoK2jiW8ydM77uiY2RX/Chip?type=design&mode=design&t=cioeESUO1sJ6UIu8-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  render: () => {
    return html`
      <div class="max-w-xl p-4">
        <div class="sd-copyright" style="--copyright: '© 2024 Solid Design System';">
          <img src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
        </div>
      </div>
    `;
  }
};
