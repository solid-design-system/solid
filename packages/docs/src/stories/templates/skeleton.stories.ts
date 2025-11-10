import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Skeleton',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3626-235289&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 *
 */
export const Default = {
  name: 'Accordion Group with Skeleton',
  render: () =>
    html`<div class="w-[800px]">
    <sd-accordion-group>
        <sd-accordion summary="Shareholder structure">
            <div class="flex flex-col gap-4 w-full">
            <sd-skeleton class="h-8"></sd-skeleton>
            <sd-skeleton class="h-8"></sd-skeleton>
            <sd-skeleton class="w-8 h-8"></sd-skeleton>
            </div>
        </sd-accordion>
        <sd-accordion summary="Cooperative financial network">
          <div class="flex flex-row gap-4 mx-auto">
                <div class="flex flex-col gap-4 w-full">
                    <sd-skeleton class="h-8"></sd-skeleton>
                    <sd-skeleton class="w-20 h-8"></sd-skeleton>
                </div>
            </div>
        </sd-accordion>
    </div>`
};
