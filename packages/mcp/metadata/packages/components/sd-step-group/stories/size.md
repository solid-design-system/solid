Use the `size` attribute to set the size of the step-group:

- `lg`(default)
- `sm`

```html
<div class="flex flex-col space-y-12">
  <sd-step-group size="lg" orientation="horizontal" active-step="1" class="w-full" label="Size Label">
    <sd-step size="lg" orientation="horizontal">
      <p slot="label">Step 1</p>
    </sd-step>

    <sd-step size="lg" orientation="horizontal" current>
      <p slot="label">Step 2</p>
    </sd-step>

    <sd-step size="lg" orientation="horizontal" waiting>
      <p slot="label">Step 3</p>
    </sd-step>
  </sd-step-group>

  <sd-step-group size="sm" orientation="horizontal" active-step="1" class="w-full">
    <sd-step size="sm" orientation="horizontal">
      <p slot="label">Step 1</p>
    </sd-step>

    <sd-step size="sm" orientation="horizontal" current>
      <p slot="label">Step 2</p>
    </sd-step>

    <sd-step size="sm" orientation="horizontal" waiting>
      <p slot="label">Step 3</p>
    </sd-step>
  </sd-step-group>
</div>
```
