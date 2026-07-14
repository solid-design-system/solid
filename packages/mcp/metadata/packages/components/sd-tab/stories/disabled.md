Use the `disabled` attribute to disable a tab.

```html
<sd-tab-group>
  <sd-tab slot="nav" panel="tab-1" variant="default">Label</sd-tab>
  <sd-tab-panel name="tab-1">
    <div>
      Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-2" variant="default" disabled>Disabled</sd-tab>
  <sd-tab-panel name="tab-2">
    <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-3" variant="default">Label</sd-tab>
  <sd-tab-panel name="tab-3">
    <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
</sd-tab-group>
```
