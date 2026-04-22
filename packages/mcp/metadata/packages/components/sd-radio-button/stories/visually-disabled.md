Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
**Hint:** When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
**Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.

```html
<div class="flex gap-12 h-[100px] pt-12">
  <sd-radio-group value="1">
    <sd-radio-button value="1">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Label
    </sd-radio-button>

    <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm">
      <sd-radio-button value="2" visually-disabled>
        <sd-icon name="system/image" slot="icon"></sd-icon>
        Visually disabled
      </sd-radio-button>
    </sd-tooltip>

    <sd-radio-button value="3">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Label
    </sd-radio-button>
  </sd-radio-group>
</div>
```
