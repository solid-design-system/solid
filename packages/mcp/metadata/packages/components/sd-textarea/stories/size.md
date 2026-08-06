Use the `size` attribute to change the size:

- `lg` (default)
- `md`
- `sm`
  **Note:** On the `floating-label` variant “sm” size is not available.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12">
  <sd-textarea
    value="Large"
    size="lg"
    label="Label"
    rows="4"
    spellcheck
    class="w-full min-w-[200px] md:min-w-0 max-w-[500px]"
  ></sd-textarea>

  <sd-textarea
    value="Medium"
    size="md"
    label="Label"
    rows="4"
    spellcheck
    class="w-full min-w-[200px] md:min-w-0 max-w-[500px]"
  ></sd-textarea>

  <sd-textarea
    value="Small"
    size="sm"
    label="Label"
    rows="4"
    spellcheck
    class="w-full min-w-[200px] md:min-w-0 max-w-[500px]"
  ></sd-textarea>
</div>
```
