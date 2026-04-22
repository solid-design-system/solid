---
name: supernumber
title: Supernumber
components:
  - sd-container
  - sd-container--variant-primary
  - sd-container--variant-white
  - sd-display
  - sd-paragraph
  - sd-paragraph--inverted
  - sd-paragraph--size-sm
  - sd-pararaph
version: 1.0.0
---

## Template: Supernumber Sizes

```html
<div class="flex flex-col gap-4">
  <section>
    <p class="sd-display">size lg</p>
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-[72px] text-primary leading-[86.4px]">XXX</div>
    </div>
  </section>

  <section>
    <p class="sd-display">size md</p>
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-4xl text-primary leading-[48px]">XXX</div>
    </div>
  </section>

  <section>
    <p class="sd-display">size sm</p>
    <div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
      <div class="text-3xl text-primary leading-[38.4px]">XXX</div>
    </div>
  </section>
</div>
```

## Template: Supernumber with Overline, Subline and Description

```html
<div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
  <p class="sd-paragraph font-bold mb-2">Fixed Income</p>
  <div class="text-[72px] text-primary leading-[86.4px]">176,5</div>
  <p class="sd-paragraph font-bold my-4">Including money market instruments</p>
  <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
    Breakdown of total assets under management by asset class in billion euros, as of 28 June 2024
  </p>
</div>
```

## Template: Supernumber Inverted with Overline, Subline and Description

```html
<div class="sd-container sd-container--variant-primary flex flex-col items-center text-center">
  <p class="sd-paragraph sd-paragraph--inverted font-bold mb-2">Fixed Income</p>
  <div class="text-[72px] text-white leading-[86.4px]">176,5</div>
  <p class="sd-paragraph sd-paragraph--inverted font-bold my-4">Including money market instruments</p>
  <p class="sd-pararaph sd-paragraph--size-sm sd-paragraph--inverted text-base text-center pt-2">
    Breakdown of total assets under management by asset class in billion euros, as of 28 June 2024
  </p>
</div>
```

## Template: Supernumber Animation

```html
<div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
  <div class="text-[72px] text-primary leading-[86.4px]" id="countup">0</div>
</div>

<script type="module">
  import { CountUp } from './countup/countUp.min.js';
  const countup = new CountUp('countup', 500, {
    enableScrollSpy: true,
    duration: 3
  });

  if (!countup.error) {
    countup.start();
  } else {
    console.error(countup.error);
  }
</script>
```

## Template: Supernumber Animation with Prefix

```html
<div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
  <div class="text-[72px] text-primary leading-[86.4px]" id="with-prefix">0</div>
  <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
    We have stood for forward-looking real estate investments and active asset management for more than 55 years. We
    present our approach and our philosophy of investing in real estate to you here.
  </p>
</div>

<script type="module">
  import { CountUp } from './countup/countUp.min.js';

  const countup = new CountUp('with-prefix', 1989, {
    enableScrollSpy: true,
    duration: 3,
    prefix: 'Since ',
    separator: ''
  });

  if (!countup.error) {
    countup.start();
  } else {
    console.error(countup.error);
  }
</script>
```

## Template: Supernumber Animation with Suffix

```html
<div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
  <div class="text-[72px] text-primary leading-[86.4px]" id="with-suffix">0</div>

  <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
    We have stood for forward-looking real estate investments and active asset management for more than 55 years. We
    present our approach and our philosophy of investing in real estate to you here.
  </p>
</div>

<script type="module">
  import { CountUp } from './countup/countUp.min.js';

  const suffixDemo = new CountUp('with-suffix', 55, {
    enableScrollSpy: true,
    duration: 3,
    suffix: ' years'
  });

  if (!suffixDemo.error) {
    suffixDemo.start();
  } else {
    console.error(suffixDemo.error);
  }
</script>
```

## Template: Supernumber Animation with Separator and Decimal

```html
<div class="sd-container sd-container--variant-white flex flex-col items-center text-center">
  <div class="text-[72px] text-primary leading-[86.4px]" id="i18n">0</div>

  <p class="sd-pararaph sd-paragraph--size-sm text-base text-center pt-2">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmd tempor invit ut labore et dolore
    magna aliquyam erat
  </p>
</div>

<script type="module">
  import { CountUp } from './countup/countUp.min.js';

  const i18nDemo = new CountUp('i18n', 5000.45, {
    enableScrollSpy: true,
    duration: 3,
    decimalPlaces: 2,
    separator: '.',
    decimal: ','
  });

  if (!i18nDemo.error) {
    i18nDemo.start();
  } else {
    console.error(i18nDemo.error);
  }
</script>
```
