Use the `toastStack` attribute with the value `bottom-center` to align the toast to the bottom center.

```html
<div class="flex gap-2">
  <sd-button variant="secondary" class="w-24" onclick="notifyBottomCenter('info')"> Info </sd-button>
  <sd-button variant="secondary" class="w-24" onclick="notifyBottomCenter('success')"> Success </sd-button>
  <sd-button variant="secondary" class="w-24" onclick="notifyBottomCenter('warning')">Warning</sd-button>
  <sd-button variant="secondary" class="w-24" onclick="notifyBottomCenter('error')">Error</sd-button>
</div>

<script>
  function notifyBottomCenter(variant = 'info') {
    const notification = Object.assign(document.createElement('sd-notification'), {
      closable: true,
      variant: variant,
      toastStack: 'bottom-center',
      duration: Infinity,
      innerHTML: 'Lorem ipsum dolor sit amet.'
    });

    notification.style.width = '250px';

    document.body.append(notification);
    return notification.toast();
  }
</script>
```
