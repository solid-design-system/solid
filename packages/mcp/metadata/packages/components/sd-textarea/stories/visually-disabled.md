Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
**Hint:** When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
**Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.

```html
<div class="w-[500px] mt-12">
  <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm">
    <sd-textarea
      size="lg"
      label="Label"
      placeholder="Input text visually disabled"
      rows="4"
      spellcheck
      visually-disabled
    ></sd-textarea>
  </sd-tooltip>
</div>
```
