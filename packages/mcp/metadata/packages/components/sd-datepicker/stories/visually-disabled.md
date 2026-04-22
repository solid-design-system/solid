Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
**Hint:** When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
**Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.

```html
<div class="w-[370px] h-[500px]">
  <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
    <sd-datepicker label="Label" placeholder="Visually Disabled" visually-disabled></sd-datepicker>
  </sd-tooltip>
</div>
```
