Use the `label` attribute to add an accessible label to the progress bar. For labels that contain HTML, use the `label` slot instead.
This label is visually hidden by default, to display it, use the `show-label` attribute.
**Hint**: If no label is set the component receives an aria-hidden attribute of `true`.

```html
<style>
  sd-progress-bar {
    height: 100%;
  }
</style>
<div class="flex flex-col md:flex-row gap-4 items-end">
  <sd-progress-bar value="35" max="100" label="Label"></sd-progress-bar>
  <sd-progress-bar value="35" max="100" label="Label" show-label></sd-progress-bar>
  <sd-progress-bar value="35" max="100" show-label><div slot="label" class="text-lg">Label slot</div></sd-progress-bar>
</div>
```
