- Use the `href` attribute to make it a link instead of a button.
- Use the `target` attribute to specify where to open the link.
- Use the `download` attribute to tell the browser to download the linked file as this filename.

```html
<div class="flex gap-12">
  <sd-button href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
    >Link</sd-button
  ><sd-button href="https://union-investment.com" target="_blank">New window</sd-button
  ><sd-button href="./placeholders/src/images/collaboration.jpg" download>Download</sd-button>
</div>
```
