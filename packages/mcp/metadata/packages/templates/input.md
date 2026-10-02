---
name: input
title: Input
components:
  - sd-button
  - sd-change
  - sd-container
  - sd-container--variant-primary-100
  - sd-headline
  - sd-headline--size-3xl
  - sd-icon
  - sd-input
version: 1.0.0
---

## Template: Input with Currency

```html
<div class="max-w-[300px]">
  <sd-input label="Monthly savings" id="currencyInput" type="number" value="100">
    <span slot="right" class="text-sm inline-flex items-center text-primary"> EUR </span>
  </sd-input>
</div>
```

## Template: Input with Currency Stepper

```html
<div class="max-w-[300px]">
  <sd-input label="Currency stepper" id="stepperSampleInput" type="number" spin-buttons min="0" value="0.00">
    <span slot="right" class="text-sm inline-flex items-center">
      <span class="text-neutral-700">EUR</span>
    </span>
  </sd-input>
</div>
<script type="module">
  const stepper = document.getElementById('stepperSampleInput');

  stepper.addEventListener('sd-change', event => {
    stepper.value = String(parseInt(event.target.value, 10).toFixed(2));
  });
</script>
```

## Template: Input with Floating Label

```html
<div class="max-w-[300px]">
  <sd-input type="email" placeholder="someone@example.com" label="Email" spellcheck floating-label></sd-input>
</div>
```

## Template: Input with Visually Hidden Label

```html
<h4 class="text-primary font-bold text-xl mb-4">Transactions</h4>

<div class="max-w-[520px]">
  <sd-input type="search" placeholder="Search by merchant, amount, or reference">
    <span slot="label" class="sr-only">Search transactions</span>
  </sd-input>
</div>
```

## Template: Input in a clear context

```html
<style>
  #input-in-a-clear-context {
    font-size: 14px;
    line-height: 24px;
  }
</style>

<div class="sd-container sd-container--variant-primary-100 px-4 py-16 lg:px-10 lg:py-24">
  <div class="flex flex-col gap-16 lg:flex-row lg:items-center">
    <div class="flex flex-col items-start gap-4 lg:flex-1 lg:flex-row">
      <sd-icon name="content/newsletter" color="primary" class="h-24 w-24 shrink-0"></sd-icon>

      <h4 class="sd-headline sd-headline--size-3xl">More Solid. More perks. Don't miss out and subscribe today!</h4>
    </div>

    <div class="flex w-full flex-col items-start gap-4 lg:flex-1">
      <sd-input class="w-full" type="email" placeholder="Email address">
        <span slot="label" class="sr-only">Email address</span>
      </sd-input>

      <sd-button variant="cta" size="sm">Subscribe to newsletter</sd-button>
    </div>
  </div>
</div>
```
