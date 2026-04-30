---
name: brandshape
title: Brandshape
components:
  - sd-brandshape
  - sd-button
  - sd-copyright
  - sd-copyright--orientation-vertical
  - sd-headline
  - sd-headline--3xl
  - sd-paragraph
version: 1.0.0
---

## Template: Brandshape

```html
<sd-brandshape variant="border-primary">
  <h4 class="sd-headline sd-headline--3xl mb-4">Exclusion criteria: Ensure minimum standards, avoid controversies</h4>
  <p class="sd-paragraph">
    In this approach, single or multiple criteria are defined that exclude investment in certain companies, industries
    or countries. The individual criteria can be determined individually within the SIRIS platform, such as the
    exclusion of companies that generate more than 5 per cent of their turnover from gambling. The exclusion criteria
    are additionally reviewed in a two-stage research process.
  </p>
</sd-brandshape>
```

## Template: Brandshape with transparent variant

```html
<style>
  .brandshape-wrapper {
    background: url('./placeholders/images/skyline.jpg');
    background-size: cover;
    background-position: center;
    padding: 3rem;
  }
</style>
<div class="brandshape-wrapper">
  <sd-brandshape variant="primary|80">
    <h4 class="sd-headline sd-headline--3xl mb-4 text-white">
      Exclusion criteria: Ensure minimum standards, avoid controversies
    </h4>
    <p class="sd-paragraph text-white">
      In this approach, single or multiple criteria are defined that exclude investment in certain companies, industries
      or countries. The individual criteria can be determined individually within the SIRIS platform, such as the
      exclusion of companies that generate more than 5 per cent of their turnover from gambling. The exclusion criteria
      are additionally reviewed in a two-stage research process.
    </p>
    <sd-button variant="cta" class="mt-4">Find out more</sd-button>
  </sd-brandshape>
</div>
```

## Template: Brandshape with Copyright

```html
<style>
  sd-brandshape::part(content) {
    height: 200px;
  }

  .sd-copyright::after {
    bottom: 60px;
    padding-right: 8px;
  }
</style>
<sd-brandshape
  variant="image"
  class="sd-copyright sd-copyright--orientation-vertical"
  style="--copyright: '© Union Investment 2025';"
>
  <img
    slot="image"
    src="./placeholders/images/skyline.jpg"
    alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs"
    class="object-bottom"
  />
</sd-brandshape>
```
