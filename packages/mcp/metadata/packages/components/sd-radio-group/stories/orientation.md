Use the `orientation` attribute to set the axis of the radio buttons:

- `vertical` (default)
- `horizontal`

```html
<div class="flex gap-12">
  <sd-radio-group name="radio-group" orientation="vertical" value="1" label="Group label">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>

  <sd-radio-group name="radio-group" orientation="horizontal" value="1" label="Group label">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
</div>
```
