- Use the `href` attribute to render the tag as a link. By default a tag is rendered as a button.
- Use the `target` attribute can to specify where to open the link.
- Use the `download` attribute to tell the browser to download the linked file as this filename.

```html
<div class="flex gap-12">
  <sd-tag href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
    >Link</sd-tag
  ><sd-tag href="https://union-investment.com" target="_blank">New window</sd-tag
  ><sd-tag href="./placeholders/images/coffeeshop.jpg" download="">Download</sd-tag>
</div>
```
