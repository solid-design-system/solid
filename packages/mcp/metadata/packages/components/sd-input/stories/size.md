Use the `size` attribute to change the size:

- `lg` (default)
- `md`
- `sm`
  **Note:** On the `floating-label` variant “sm” size is not available.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12">
  <sd-input size="lg" label="Label" placeholder="Large" class="min-w-[200px] md:min-w-0 max-w-[400px]"></sd-input>
  <sd-input size="md" label="Label" placeholder="Medium" class="min-w-[200px] md:min-w-0 max-w-[400px]"></sd-input>
  <sd-input size="sm" label="Label" placeholder="Small" class="min-w-[200px] md:min-w-0 max-w-[400px]"></sd-input>
</div>
```
