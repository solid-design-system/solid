import '../../solid-components';
import { html } from 'lit';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-flag');
const { overrideArgs } = storybookHelpers('sd-flag');
const { generateTemplate } = storybookTemplate('sd-flag');

/**
 * A small, non-interactive label the represents a category.
 *
 * <b>Variants</b><br>
 * <li>--neutral-200 is the default variant</li>
 * <li>--neutral-500</li>
 * <li>--neutral-300</li>
 * <li>--white</li>
 */

export default {
  title: 'Styles/sd-flag',
  component: 'sd-flag',
  parameters: {
    ...parameters,
    backgrounds: {
      default: 'neutral-200'
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vQ57OHDm26QE1gtZKtfb6L/Flag?type=design&node-id=804-717&mode=design&t=bdhcOj9ub57hEPZl-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Lorem Ipsum' }]),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<span class="%CLASSES%">%SLOT%</span>' },
      args
    });
  }
};

export const Variants = {
  parameters: { controls: { exclude: ['default', 'sd-flag--...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-flag',
            values: ['sd-flag--neutral-500', 'sd-flag--neutral-300', 'sd-flag--neutral-200', 'sd-flag--white']
          }
        ]
      },
      args
    });
  }
};

export const FlagSamples = {
  parameters: {
    controls: {
      exclude: ['default', 'sd-flag--...', 'sd-chip--...']
    },
    backgrounds: {
      default: 'white'
    }
  },
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
            <span class="absolute top-3 left-4 sd-chip sd-chip--white">chip name</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-200">flag name</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at,
              interdum tortor.
            </p>
            <div class="flex flex-row gap-2">
              <span class="sd-chip">chip name</span>
              <span class="sd-chip">chip name</span>
            </div>
            <div class="flex-none">
              <sd-button variant="primary">Label</sd-button>
            </div>
          </div>
        </sd-teaser>

        <sd-teaser id="teaserWithContentPlaceholder" variant="primary-100" breakpoint="9999" inset class="flex flex-1">
          <div slot="media" class="relative flex items-center place-content-center h-full">
            <sd-icon name="content/picture" library="global-resources" color="primary" class="text-[5rem]"></sd-icon>
            <span class="absolute top-3 left-4 sd-chip sd-chip--primary-300">chip name</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-500">flag name</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at,
              interdum tortor.
            </p>
            <div class="flex flex-row gap-2">
              <span class="sd-chip sd-chip--primary-300">chip name</span>
              <span class="sd-chip sd-chip--primary-300">chip name</span>
            </div>
            <div class="flex-none">
              <sd-button variant="primary">Label</sd-button>
            </div>
          </div>
        </sd-teaser>

        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
            <span class="absolute top-3 left-4 sd-chip sd-chip--white">chip name</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-200">flag name</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at,
              interdum tortor.
            </p>
            <div class="flex flex-row gap-2">
              <span class="sd-chip sd-chip--primary-500">chip name</span>
              <span class="sd-chip sd-chip--primary-500">chip name</span>
            </div>
            <div class="flex-none">
              <sd-button variant="primary" inverted>Label</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};
