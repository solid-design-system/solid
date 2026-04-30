<h4 class="sd-headline sd-headline--size-lg">Toast placement bottom center</h4>
Use the `data-notification-position` attribute with the value `bottom-center` to align the toast to the bottom center.

```html
<div class="flex gap-2">
  <sd-button variant="secondary" data-notification-type="info" data-notification-position="bottom-center" class="w-24">
    Info
  </sd-button>
  <sd-button
    variant="secondary"
    data-notification-type="success"
    data-notification-position="bottom-center"
    class="w-24"
  >
    Success
  </sd-button>
  <sd-button
    variant="secondary"
    data-notification-type="warning"
    data-notification-position="bottom-center"
    class="w-24"
    >Warning</sd-button
  >
  <sd-button variant="secondary" data-notification-type="error" data-notification-position="bottom-center" class="w-24"
    >Error</sd-button
  >
</div>

<script>
  var buttons = document.querySelectorAll('[data-notification-position="bottom-center"]');

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

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      notifyBottomCenter(button.getAttribute('data-notification-type'));
    });
  });
</script>
```
