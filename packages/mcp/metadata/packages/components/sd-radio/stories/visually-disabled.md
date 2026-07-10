Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
**Hint:** When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
**Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.

```html
<sd-radio-group label="Visually disabled" value="1">
  <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm">
    <sd-radio value="1" visually-disabled>Radio 1</sd-radio>
  </sd-tooltip>
</sd-radio-group>
```
