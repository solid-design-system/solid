Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers. When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip. Disabling elements is not recommended for accessibility reasons.

```html
<div class="w-[250px] pt-12">
  <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm" placement="top">
    <sd-file-selector value="Visually disabled" label="Select a file to upload" visually-disabled></sd-file-selector
  ></sd-tooltip>
</div>
```
