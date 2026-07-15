---
name: tooltip
title: Tooltip
components:
  - sd-checkbox
  - sd-checkbox-group
  - sd-headline
  - sd-headline--inverted
  - sd-headline--size-base
  - sd-input
  - sd-option
  - sd-paragraph
  - sd-paragraph--inverted
  - sd-paragraph--size-sm
  - sd-radio
  - sd-radio-group
  - sd-select
  - sd-textarea
  - sd-tooltip
version: 1.0.0
---

## Template: Input with Tooltip

```html
<sd-input class="w-[400px] py-6">
  <span slot="right" class="text-sm inline-flex items-center">
    <span class="text-neutral-700">EUR</span>
  </span>

  <label slot="label">Liquid assets</label>
  <sd-tooltip slot="tooltip" placement="top-start" size="sm" content="Available cash assets"></sd-tooltip>
</sd-input>
```

## Template: Select with Tooltip

```html
<sd-select class="w-[400px] h-[300px] py-6" size="lg" placement="top" placeholder="Please select" value="">
  <div slot="label">Access role</div>
  <sd-tooltip
    slot="tooltip"
    content="Select the level of access for this user"
    size="sm"
    placement="top-start"
    hoist
  ></sd-tooltip>

  <sd-option value="option-1">Viewer</sd-option>
  <sd-option value="option-2">Editor</sd-option>
  <sd-option value="option-3">Owner</sd-option>
</sd-select>
```

## Template: Textarea with Tooltip

```html
<sd-textarea
  class="w-[540px] py-4"
  value="A solid design system is more than a collection of components; it’s a living document that aligns teams, maintains consistency, and supports scalability. Here, you can capture the reasoning behind design choices, specific use cases, and any nuances that will aid other team members in understanding how to implement this component effectively."
>
  <div slot="label">Project description</div>
  <sd-tooltip slot="tooltip" content="Explain your project in clear terms" size="sm"></sd-tooltip>
</sd-textarea>
```

## Template: Radio Group with Tooltip

```html
<sd-radio-group class="w-[400px] py-6">
  <div slot="label">Choose your subscription plan</div>
  <sd-tooltip slot="tooltip" content="Select the plan that best meets your needs" size="sm"></sd-tooltip>

  <sd-radio value="basic">Basic plan</sd-radio>
  <sd-radio value="standard">Standard plan</sd-radio>
  <sd-radio value="premium">Premium plan</sd-radio>
</sd-radio-group>
```

## Template: Checkbox Group with Tooltip

```html
<sd-checkbox-group class="w-[400px] py-6">
  <div slot="label">Select your interests</div>
  <sd-tooltip slot="tooltip" content="Choose all that apply to you" size="sm"></sd-tooltip>

  <sd-checkbox value="newsletters">Subscribe to our newsletters</sd-checkbox>
  <sd-checkbox value="promotions">Receive our promotions</sd-checkbox>
  <sd-checkbox value="updates">Get our product updates</sd-checkbox>
</sd-checkbox-group>
```

## Template: Tooltip with Bolded Text

```html
<div class="h-[150px] flex items-center">
  <sd-tooltip placement="top-start" size="sm">
    <div slot="content">
      <h5 class="sd-headline sd-headline--size-base sd-headline--inverted">Guidelines</h5>
      <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Document design standards and usage</p>
    </div>
  </sd-tooltip>
</div>
```
