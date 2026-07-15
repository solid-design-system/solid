Use the `icon-left` and `icon-right` slots to add system icons to each side of the link. They automatically adapt the size.

```html
<div class="flex gap-12">
  <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" standalone>
    <sd-icon name="system/image" slot="icon-left"></sd-icon>
    Icon Left
  </sd-link>
  <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" standalone>
    Icon Right
    <sd-icon name="system/image" slot="icon-right"></sd-icon>
  </sd-link>
</div>
```
