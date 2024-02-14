import '../../solid-components';

import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-media');
const { overrideArgs } = storybookHelpers('sd-media');
// const { generateTemplate } = storybookTemplate('sd-media');

/**
 *
 */
export default {
  title: 'Styles/sd-media',
  component: 'sd-media',
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
        <figure class="sd-media">
          <div class="sd-copyright" style="--copyright: '© 2024 Solid Design System';">
            <img src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
          </div>
          <figcaption>This is a media caption</figcaption>
        </figure>
      </div>
    `;
  }
};
