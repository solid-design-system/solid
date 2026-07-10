Use the `sd-status-badge--*` classes for alternative appearances:

- `sd-status-badge--success`
- `sd-status-badge--warning`
- `sd-status-badge--error`
- `sd-status-badge--info`

```html
<div class="flex flex-col items-start gap-4">
  <div class="sd-status-badge sd-status-badge--success">
    <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
    Active
  </div>
  <div class="sd-status-badge sd-status-badge--warning">
    <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
    Degraded
  </div>
  <div class="sd-status-badge sd-status-badge--error">
    <sd-icon name="status-close" library="sd-status-assets"></sd-icon>
    Canceled
  </div>
  <div class="sd-status-badge sd-status-badge--info">
    <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
    Status Info
  </div>
</div>
```
