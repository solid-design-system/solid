import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Expandable',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3274-14175&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### Text Styles
 *
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
