import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Expandable with Different Backgrounds and Text Styles',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/owNwnmTLTH7rDD4kOyGJK9/Expandable?node-id=0-1&t=8M0kKNRUhCykqrGj-0'
    }
  }
};

/**
 * Examples of the `sd-expandable` on different backgrounds.
 * - `white`
 * - `neutral-100`
 * - `primary-100`
 * - `primary (if inverted)`
 */

export const BackgroundOptions = {
  name: 'Background options',
  render: () =>
    html`<div class="flex flex-col gap-4">
      <div>
        <sd-expandable class="sd-prose sd-prose--full-width">
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
      <div class="bg-primary p-4">
        <sd-expandable inverted class="sd-prose sd-prose--full-width sd-prose--inverted">
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

/**
 * Examples of the `sd-expandable` with different typography classes on the element itself:
 * - `sd-leadtext`
 * - `sd-prose`
 */

export const TextStyles = {
  name: 'Text Styles',
  render: () =>
    html`<div class="flex flex-col gap-4">
      <div class="bg-neutral-100 p-4">
        <sd-expandable
          class="sd-leadtext"
          style="--gradient-color-start: rgb(var(--sd-color-neutral-100, 246 246 246) / 0);--gradient-color-end: rgb(var(--sd-color-neutral-100, 246 246 246) / 1)"
        >
          <p>
            Global economic growth continues to be an important support factor for the capital markets. The US economy
            in particular is running like a well-oiled machine. This is unlikely to change much in the coming quarters.
            Our economists expect real economic output to increase by 2.7 per cent in 2024 as a whole. Unlike in
            previous months, they also expect the economic outlook to improve in other regions, above all in the
            eurozone. Here, gross domestic product (GDP) is expected to grow by 0.6 per cent over the course of the
            year. Germany brings up the rear with GDP growth forecast to be only slightly above zero. As the economies
            of China and Japan are stabilising at the same time, the global economy is expected to grow by 2.9% in 2024,
            slightly more than in the previous year. The growth gap between the most important regions is therefore
            closing somewhat.
          </p>
        </sd-expandable>
      </div>
      <div class="bg-neutral-100 p-4">
        <sd-expandable
          class="sd-prose sd-prose--full-width"
          style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
        >
          <p>
            Global economic growth continues to be an important support factor for the capital markets. The US economy
            in particular is running like a well-oiled machine. This is unlikely to change much in the coming quarters.
            Our economists expect real economic output to increase by 2.7 per cent in 2024 as a whole. Unlike in
            previous months, they also expect the economic outlook to improve in other regions, above all in the
            eurozone. Here, gross domestic product (GDP) is expected to grow by 0.6 per cent over the course of the
            year. Germany brings up the rear with GDP growth forecast to be only slightly above zero. As the economies
            of China and Japan are stabilising at the same time, the global economy is expected to grow by 2.9% in 2024,
            slightly more than in the previous year. The growth gap between the most important regions is therefore
            closing somewhat.
          </p>
          <h4>US inflation soon to reach its cyclical low</h4>
          <p>
            Our judgement on inflation is mixed. Although the global trend of falling inflation is continuing, it is
            slowing down. In the US, the cyclical low in core inflation, i.e. the price trend excluding energy and food,
            is likely to be reached in the summer. However, inflation remains above the US Federal Reserve's inflation
            target. If inflation in the United States does not fall any further, this will generally support interest
            rates on the bond market. We therefore do not expect yields on the bond market to fall, especially for bonds
            with longer maturities. By contrast, the eurozone is later in the economic cycle and is structurally not as
            fast-growing as the US, which is why the European Central Bank (ECB) can expect a further decline in price
            increases. Inflation is likely to approach the ECB's target of two per cent by mid-2025.
          </p>
        </sd-expandable>
      </div>
    </div>`
};
