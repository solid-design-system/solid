Use the `size` attribute to set the size of a step:

- `lg`(default)
- `sm`
- `xs` (only available with vertical orientation)

```html
<div class="flex gap-12 w-min-content">
  <sd-step size="lg">
    <span slot="label">Large</span>
  </sd-step>
  <sd-step size="sm">
    <span slot="label">Small</span>
  </sd-step>
  <sd-step size="xs" orientation="vertical" class="pl-16">
    <span slot="label">Extra Small</span>
  </sd-step>
</div>
```
