Use the `activation` attribute to define how the tab panel is shown when the user interacts with it:

- `auto`: Automatically shows the corresponding tab panel
- `manual`: Requires user interaction to show the corresponding tab panel

```html
<sd-tab-group activation="auto">
  <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
  <sd-tab-panel name="tab-1">
    <div>Auto provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
  <sd-tab-panel name="tab-2">
    <div>Auto provident illo neque vel ex.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
  <sd-tab-panel name="tab-3">
    <div>Auto provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
  <sd-tab-panel name="tab-4">
    <div>Auto Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
  <sd-tab-panel name="tab-5">
    <div>Auto provident nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
</sd-tab-group>

<sd-tab-group activation="manual">
  <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
  <sd-tab-panel name="tab-1">
    <div>Manual provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
  <sd-tab-panel name="tab-2">
    <div>Manual provident illo neque vel ex.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
  <sd-tab-panel name="tab-3">
    <div>Manual provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
  <sd-tab-panel name="tab-4">
    <div>Manual Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
  <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
  <sd-tab-panel name="tab-5">
    <div>Manual provident nisi doloremque soluta inventore.</div>
  </sd-tab-panel>
</sd-tab-group>
```
