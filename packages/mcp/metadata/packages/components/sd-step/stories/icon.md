Use the `circle-content` slot to add a content-icon in a non-interactive step.

```html
<div class="w-[220px]">
  <sd-step not-interactive>
    <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
    <span slot="label">Step name</span>
  </sd-step>
</div>
```
