Use the `help-text` attribute to provide additional context or instructions as:

- file size restrictions
- file format requirements
- file selection limit
  For help-text that contain HTML, use the help-text slot instead.

```html
<div class="flex flex-col gap-10">
  <sd-file-selector
    label="Select a file to upload"
    help-text="Max file size is 3 MB. Only PDF, JPG and PNG files are supported."
  >
  </sd-file-selector>
  <sd-file-selector label="Select a file to upload">
    <div slot="help-text" class="text-lg">Max file size is 3 MB. Only PDF, JPG and PNG files are supported.</div>
  </sd-file-selector>
</div>
```
