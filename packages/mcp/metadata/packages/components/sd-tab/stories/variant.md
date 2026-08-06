Use the `variant` attribute to display to change the appearance:

- `default`: Can be used independently or within components, often for full-page content
- `container`: Highlighted tab and content linked to a background container, typically for specific sections like sub-pages or teasers

```html
<div class="grid grid-cols-2 gap-12">
  <sd-tab-group>
    <sd-tab slot="nav" panel="tab-1" variant="default">Default 1</sd-tab>
    <sd-tab-panel name="tab-1">
      <div>
        Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
      </div>
    </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-2" variant="default">Default 2</sd-tab>
    <sd-tab-panel name="tab-2">
      <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-3" variant="default">Default 3</sd-tab>
    <sd-tab-panel name="tab-3">
      <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
    </sd-tab-panel>
  </sd-tab-group>

  <sd-tab-group>
    <sd-tab slot="nav" panel="tab-1" variant="container">Container 1</sd-tab>
    <sd-tab-panel name="tab-1">
      <div>
        Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
      </div>
    </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-2" variant="container">Container 2</sd-tab>
    <sd-tab-panel name="tab-2">
      <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-3" variant="container">Container 3</sd-tab>
    <sd-tab-panel name="tab-3">
      <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
    </sd-tab-panel>
  </sd-tab-group>
</div>
```
