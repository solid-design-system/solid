Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
**Hint:** When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
**Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.

```html
<div class="w-[400px] h-[200px] mt-12">
  <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm">
    <sd-select size="lg" label="Label" placeholder="Visually disabled" placement="bottom" value="" visually-disabled>
      <sd-option value="option-1">Option 1</sd-option>
      <sd-option value="option-2">Option 2</sd-option>
      <sd-option value="option-3">Option 3</sd-option>
      <sd-option value="option-4">Option 4</sd-option>
      <sd-option value="option-5">Option 5</sd-option>
    </sd-select>
  </sd-tooltip>
</div>
```
