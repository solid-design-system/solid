Use the `label` attribute to add an accessible label to the file selector.
For labels that contain HTML, use the label slot instead.
This label is visually hidden by default, to display it, use the `show-label` attribute.

```html
<div class="flex flex-col gap-10">
  <sd-file-selector label="Select a file to upload"></sd-file-selector>
  <sd-file-selector label="Select a file to upload" show-label></sd-file-selector>
  <sd-file-selector label="Select a file to upload" show-label>
    <div slot="label" class="text-lg">Label slot</div>
  </sd-file-selector>
</div>
```
