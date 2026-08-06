Use the `left` slot to add system icons.

```html
<sd-tab-group>
  <sd-tab slot="nav" panel="tab-1">
    <sd-icon slot="left" name="system/image"></sd-icon>
    Label 1
  </sd-tab>
  <sd-tab-panel name="tab-1">
    <div>
      Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-2">
    <sd-icon slot="left" name="system/image"></sd-icon>
    Label 2
  </sd-tab>
  <sd-tab-panel name="tab-2">
    <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-3">
    <sd-icon slot="left" name="system/image"></sd-icon>
    Label 3
  </sd-tab>
  <sd-tab-panel name="tab-3">
    <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
</sd-tab-group>
```
