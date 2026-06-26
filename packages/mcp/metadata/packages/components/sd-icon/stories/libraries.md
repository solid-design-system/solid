Solid ships with three public icon libraries, `default`, `sd-status-assets`, and `sd-multi-theming`:

- `default`: The `default` icon library refers to the official CDN by Union Investment which is fed by Celum. It is provided by the brand department, therefore requests towards the icons itself need to be addressed accordingly. Checkout [content](?path=/story/components-sd-icon-libraries-default--content) and [system](?path=/story/components-sd-icon-libraries-default--system) for available icons.
- `sd-status-assets`: This library contains icons specifically for status indicators like the `sd-status-badge` component. They are maintained by the Solid team. Checkout [status](?path=/story/components-sd-icon-libraries--status-library) for available icons.
- `sd-multi-theming`: A smaller set of icons that is multi-theming compatible. They will automatically display the correct variant when the theme changes. They are maintained by the Solid team. Check out [content](?path=/story/components-sd-icon-libraries-multi-theming--content) and [system](?path=/story/components-sd-icon-libraries-multi-theming--system) for available icons.
  <sd-notification variant="warning" open class="mt-4">The library <code>sd-multi-theming</code> is currently in public beta.</sd-notification>

```html
<div class="flex flex-col gap-12">
  <div>
    <h3 class="sd-headline sd-headline--size-base mb-4">Default Library</h3>
    <div class="flex gap-6">
      <sd-icon color="primary" name="union-investment/content/image"></sd-icon>
      <sd-icon color="primary" name="union-investment/system/image"></sd-icon>
    </div>
  </div>

  <div>
    <h3 class="sd-headline sd-headline--size-base mb-4">Status Library</h3>
    <div class="flex gap-6">
      <sd-icon color="primary" library="sd-status-assets" name="status-check"></sd-icon>
      <sd-icon color="primary" library="sd-status-assets" name="status-exclamation"></sd-icon>
      <sd-icon color="primary" library="sd-status-assets" name="status-close"></sd-icon>
    </div>
  </div>

  <div>
    <h3 class="sd-headline sd-headline--size-base mb-4">Multi-Theming Library</h3>
    <div class="flex gap-6">
      <sd-icon color="primary" library="sd-multi-theming" name="system/image"></sd-icon>
      <sd-icon class="sd-theme-bb" color="primary" library="sd-multi-theming" name="system/image"></sd-icon>
      <sd-icon class="sd-theme-vb" color="primary" library="sd-multi-theming" name="system/image"></sd-icon>
      <sd-icon class="sd-theme-kid" color="primary" library="sd-multi-theming" name="system/image"></sd-icon>
    </div>
  </div>
</div>
```
