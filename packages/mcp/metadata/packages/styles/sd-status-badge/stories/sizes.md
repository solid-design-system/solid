Use the `sd-status-badge--size-*` classes for alternative sizes:

- large size is the default size
- `sd-status-badge--size-md`
- `sd-status-badge--size-sm`

```html
<div class="flex flex-col items-start gap-12">
  <div class="sd-status-badge sd-status-badge--info">
    <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
    Status Info
  </div>
  <div class="sd-status-badge sd-status-badge--info sd-status-badge--size-md">
    <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
    Status Info
  </div>
  <div class="sd-status-badge sd-status-badge--info sd-status-badge--size-sm">
    <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
    Status Info
  </div>
</div>
```
