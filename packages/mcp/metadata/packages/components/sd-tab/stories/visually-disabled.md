Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
**Hint:** When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
**Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.

```html
<sd-tab-group>
  <sd-tab slot="nav" panel="tab-1" variant="default">Label</sd-tab>
  <sd-tab-panel name="tab-1">
    <div>
      Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </div>
  </sd-tab-panel>
  <sd-tooltip slot="nav" content="Visually Disabled" trigger="hover focus" size="sm" placement="top" hoist>
    <sd-tab panel="tab-2" variant="default" visually-disabled>Visually disabled</sd-tab>
  </sd-tooltip>
  <sd-tab-panel name="tab-2">
    <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-3" variant="default">Label</sd-tab>
  <sd-tab-panel name="tab-3">
    <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
</sd-tab-group>
```
