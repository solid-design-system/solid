Use the `active` attribute to toggle the active state.

```html
<div class="grid grid-cols-2 gap-12">
  <sd-tab-group activation="auto" id="active">
    <sd-tab slot="nav" panel="tab-1" variant="default">Default 1</sd-tab>
    <sd-tab-panel name="tab-1">
      Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-2" variant="default">Default 2</sd-tab>
    <sd-tab-panel name="tab-2"> Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-3" variant="default">Default 3</sd-tab>
    <sd-tab-panel name="tab-3">
      Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </sd-tab-panel>
  </sd-tab-group>
  <sd-tab-group activation="auto" id="active-container">
    <sd-tab slot="nav" panel="tab-1" variant="container">Container 1</sd-tab>
    <sd-tab-panel name="tab-1">
      Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-2" variant="container">Container 2</sd-tab>
    <sd-tab-panel name="tab-2"> Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </sd-tab-panel>
    <sd-tab slot="nav" panel="tab-3" variant="container">Container 3</sd-tab>
    <sd-tab-panel name="tab-3">
      Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.
    </sd-tab-panel>
  </sd-tab-group>
</div>
<script type="module">
  const tabGroups = document.querySelectorAll('sd-tab-group#active, sd-tab-group#active-container');
  // Wait for controls to be defined before attaching form listeners
  Promise.all([
    customElements.whenDefined('sd-tab-group'),
    customElements.whenDefined('sd-tab'),
    customElements.whenDefined('sd-tab-panel')
  ]).then(() => {
    setTimeout(() => {
      // To make this more robust and reduce race conditions use setTimeout
      tabGroups.forEach(tab => tab.show('tab-2'));
    }, 1);
  });
</script>
```
