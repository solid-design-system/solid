import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-expandable');
const { overrideArgs } = storybookHelpers('sd-expandable');
const { generateTemplate } = storybookTemplate('sd-expandable');

/**
 * Used to display a brief summary that expands to reveal additional content.
 *
 *  **Related templates**:
 * - [Expandable](?path=/docs/templates-expandable--docs)
 */
export default {
  title: 'Components/sd-expandable',
  component: 'sd-expandable',
  tags: ['!dev'],
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2056-20823&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `open` attribute to set the state of the expandable.
 */

export const Open = {
  render: () => {
    return html`<div class="flex flex-col gap-12">
      <sd-expandable class="sd-prose sd-prose--full-width">
        <p>
          For us, diversity equals strength. By taking the views and experiences of a wide range of people into account,
          we provide room for creative solutions and ensure that we are equipped for the future. A diverse and inclusive
          working environment is important to us. We benefit from the perspectives of different genders, age groups,
          educational levels and backgrounds, thus guaranteeing that we are successful together.
        </p>
        <p>
          As a member of the cooperative financial network, diversity and corporate citizenship are an integral part of
          our corporate culture. Our approach is based around interacting with each other, our customers and our
          partners on an equal footing. Our actions are defined by values such as respect, professionalism and
          collaboration. In the true spirit of the cooperative principles, we channel a wide range of strengths in order
          to be stronger together.
        </p>
        <p>
          By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within
          the company. We want to attract and retain the best candidates, irrespective of cultural or social background,
          ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created a working
          environment that is free of prejudice, where respect is paramount and people can achieve their full potential.
          This is the policy that underpins the actions of our managers and employees.
        </p>
      </sd-expandable>
      <sd-expandable open class="sd-prose sd-prose--full-width">
        <p>
          For us, diversity equals strength. By taking the views and experiences of a wide range of people into account,
          we provide room for creative solutions and ensure that we are equipped for the future. A diverse and inclusive
          working environment is important to us. We benefit from the perspectives of different genders, age groups,
          educational levels and backgrounds, thus guaranteeing that we are successful together.
        </p>
        <p>
          As a member of the cooperative financial network, diversity and corporate citizenship are an integral part of
          our corporate culture. Our approach is based around interacting with each other, our customers and our
          partners on an equal footing. Our actions are defined by values such as respect, professionalism and
          collaboration. In the true spirit of the cooperative principles, we channel a wide range of strengths in order
          to be stronger together.
        </p>
        <p>
          By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within
          the company. We want to attract and retain the best candidates, irrespective of cultural or social background,
          ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created a working
          environment that is free of prejudice, where respect is paramount and people can achieve their full potential.
          This is the policy that underpins the actions of our managers and employees.
        </p>
      </sd-expandable>
    </div>`;
  }
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const Inverted = {
  render: () => {
    return html`<div class="bg-primary p-8">
      <sd-expandable inverted class="sd-prose sd-prose--full-width sd-prose--inverted">
        <p>
          For us, diversity equals strength. By taking the views and experiences of a wide range of people into account,
          we provide room for creative solutions and ensure that we are equipped for the future. A diverse and inclusive
          working environment is important to us. We benefit from the perspectives of different genders, age groups,
          educational levels and backgrounds, thus guaranteeing that we are successful together.
        </p>
        <p>
          As a member of the cooperative financial network, diversity and corporate citizenship are an integral part of
          our corporate culture. Our approach is based around interacting with each other, our customers and our
          partners on an equal footing. Our actions are defined by values such as respect, professionalism and
          collaboration. In the true spirit of the cooperative principles, we channel a wide range of strengths in order
          to be stronger together.
        </p>
        <p>
          By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within
          the company. We want to attract and retain the best candidates, irrespective of cultural or social background,
          ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created a working
          environment that is free of prejudice, where respect is paramount and people can achieve their full potential.
          This is the policy that underpins the actions of our managers and employees.
        </p>
      </sd-expandable>
    </div>`;
  }
};

/**
 * Use the CSS properties `--gradient-color-start` and `--gradient-color-end` to set a gradient that matches the background color.
 */

export const Gradient = {
  render: () =>
    html`<div class="flex flex-col gap-4">
      <div class="bg-neutral-100 p-4">
        <sd-expandable
          class="sd-prose sd-prose--full-width"
          style="--gradient-color-start: rgb(var(--sd-color-neutral-100, 246 246 246) / 0);--gradient-color-end: rgb(var(--sd-color-neutral-100, 246 246 246) / 1)"
        >
          <p>
            For us, diversity equals strength. By taking the views and experiences of a wide range of people into
            account, we provide room for creative solutions and ensure that we are equipped for the future. A diverse
            and inclusive working environment is important to us. We benefit from the perspectives of different genders,
            age groups, educational levels and backgrounds, thus guaranteeing that we are successful together.
          </p>
          <p>
            As a member of the cooperative financial network, diversity and corporate citizenship are an integral part
            of our corporate culture. Our approach is based around interacting with each other, our customers and our
            partners on an equal footing. Our actions are defined by values such as respect, professionalism and
            collaboration. In the true spirit of the cooperative principles, we channel a wide range of strengths in
            order to be stronger together.
          </p>
          <p>
            By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within
            the company. We want to attract and retain the best candidates, irrespective of cultural or social
            background, ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created
            a working environment that is free of prejudice, where respect is paramount and people can achieve their
            full potential. This is the policy that underpins the actions of our managers and employees.
          </p>
        </sd-expandable>
      </div>
      <div class="bg-primary-100 p-4">
        <sd-expandable
          class="sd-prose sd-prose--full-width"
          style="--gradient-color-start: rgb(var(--sd-color-primary-100, 236 240 249) / 0);--gradient-color-end: rgb(var(--sd-color-primary-100, 236 240 249) / 1)"
        >
          <p>
            For us, diversity equals strength. By taking the views and experiences of a wide range of people into
            account, we provide room for creative solutions and ensure that we are equipped for the future. A diverse
            and inclusive working environment is important to us. We benefit from the perspectives of different genders,
            age groups, educational levels and backgrounds, thus guaranteeing that we are successful together.
          </p>
          <p>
            As a member of the cooperative financial network, diversity and corporate citizenship are an integral part
            of our corporate culture. Our approach is based around interacting with each other, our customers and our
            partners on an equal footing. Our actions are defined by values such as respect, professionalism and
            collaboration. In the true spirit of the cooperative principles, we channel a wide range of strengths in
            order to be stronger together.
          </p>
          <p>
            By signing the Diversity Charter in 2013, Union Investment underlined how highly it values diversity within
            the company. We want to attract and retain the best candidates, irrespective of cultural or social
            background, ethnicity, gender, sexual orientation, disability, religion or age. To do this, we have created
            a working environment that is free of prejudice, where respect is paramount and people can achieve their
            full potential. This is the policy that underpins the actions of our managers and employees.
          </p>
        </sd-expandable>
      </div>
    </div> `
};
