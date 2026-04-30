---
name: step-group
title: Step Group
components:
  - sd-icon
  - sd-paragraph
  - sd-step
  - sd-step-group
version: 1.0.0
---

## Template: Step Group Horizontal Inline with Label for current step only

```html
<style>
  .hide-label sd-step:not([current])::part(label) {
    position: absolute;
    visibility: hidden;
    width: 1px;
    height: 1px;
    pointer-events: none;
  }
</style>
<div class="h-32 gap-16 w-[500px]">
  <sd-step-group size="sm" orientation="horizontal" active-step="0" class="w-full hide-label" label="Account">
    <sd-step orientation="horizontal" horizontal-inline current>
      <span slot="label">Account</span>
    </sd-step>
    <sd-step waiting orientation="horizontal" horizontal-inline label="Step 2"></sd-step>
    <sd-step orientation="horizontal" waiting horizontal-inline label="Step 3"></sd-step>
  </sd-step-group>
</div>

<div class="h-32 gap-16 w-[500px]">
  <sd-step-group size="sm" orientation="horizontal" active-step="1" class="w-full hide-label" label="Payment">
    <sd-step orientation="horizontal" horizontal-inline label="Step 1"></sd-step>
    <sd-step orientation="horizontal" horizontal-inline current>
      <span slot="label">Payment</span>
    </sd-step>
    <sd-step orientation="horizontal" waiting horizontal-inline label="Step 3"></sd-step>
  </sd-step-group>
</div>

<div class="h-32 gap-16 w-[500px]">
  <sd-step-group size="sm" orientation="horizontal" active-step="2" class="w-full hide-label" label="Confirmation">
    <sd-step orientation="horizontal" horizontal-inline label="Step 1"></sd-step>
    <sd-step orientation="horizontal" horizontal-inline label="Step 2"></sd-step>
    <sd-step orientation="horizontal" horizontal-inline current>
      <span slot="label">Confirmation</span>
    </sd-step>
  </sd-step-group>
</div>
```

## Template: Non Interactive Step Group

```html
<sd-step-group label="Non-Interactive Step Group" size="lg" orientation="horizontal" not-interactive>
  <sd-step size="lg" orientation="horizontal">
    <p slot="label">Make an appointment</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" current>
    <span slot="label">Select funds for saving plan</span>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" disabled>
    <span slot="label"
      >Open a new <br />
      account</span
    >
  </sd-step>

  <sd-step size="lg" orientation="horizontal" disabled>
    <span slot="label"
      >Provide <br />
      documents</span
    >
  </sd-step>
</sd-step-group>
```

## Template: Non-Interactive Step Group with Icon

```html
<sd-step-group
  label="Non-Interactive Step Group with Icon"
  size="sm"
  orientation="horizontal"
  active-step="0"
  not-interactive
>
  <sd-step size="sm" orientation="horizontal" horizontal-inline state="default">
    <sd-icon slot="circle-content" name="content/calendar" class="h-8 w-8"></sd-icon>
    <span slot="label">Book appointment</span>
    <p class="sd-paragraph">Get advice from our partner banks and find the right plan for you.</p>
  </sd-step>

  <sd-step size="sm" orientation="horizontal" horizontal-inline state="current">
    <sd-icon slot="circle-content" name="content/chess-piece" class="h-8 w-8"></sd-icon>
    <span slot="label">Select fund</span>
    <p class="sd-paragraph">Choose the right fund for your plan from a wide range of funds.</p>
  </sd-step>

  <sd-step size="sm" orientation="horizontal" horizontal-inline state="disabled">
    <sd-icon slot="circle-content" name="content/certificate" class="h-8 w-8"></sd-icon>
    <span slot="label">Security account</span>
    <p class="sd-paragraph">Open your own securities account together with your bank advisor.</p>
  </sd-step>
</sd-step-group>
```
