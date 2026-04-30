Use the `toastStack` attribute to change the position of the toast notifications:

- `top-right` (default)
- `bottom-center`
  **Important:** Some screen readers may occasionally ignore live regions that are added to a page after it has already loaded.
  Therefore, to make sure the toast stack regions are already present on page load, please make sure to render the following:

```html
<div
  role="region"
  id="sd-toast-stack--top-right"
  class="sd-toast-stack sd-toast-stack--top-right"
  aria-label="Top right notifications"
></div>
<div
  role="region"
  id="sd-toast-stack--bottom-center"
  class="sd-toast-stack sd-toast-stack--bottom-center"
  aria-label="Bottom center notifications"
></div>
```

**Hints:**

- It requires the use of the `toast` method to work. Click on the `Show code` button to see the JavaScript code responsible for generating the toast notification.
- Click on one of the buttons below to see the corresponding toast notification.
<h4 class="sd-headline sd-headline--size-lg">Toast placement top right</h4>
Use the `data-notification-position` attribute with the value `top-right` to align the toast to the top right.

```html
<div class="flex gap-2">
  <sd-button variant="secondary" data-notification-type="info" data-notification-position="top-right" class="w-24">
    Info
  </sd-button>
  <sd-button variant="secondary" data-notification-type="success" data-notification-position="top-right" class="w-24">
    Success
  </sd-button>
  <sd-button variant="secondary" data-notification-type="warning" data-notification-position="top-right" class="w-24"
    >Warning</sd-button
  >
  <sd-button variant="secondary" data-notification-type="error" data-notification-position="top-right" class="w-24"
    >Error</sd-button
  >
</div>
<script>
  var buttons = document.querySelectorAll('[data-notification-position="top-right"]');

  function notify(variant = 'info') {
    const notification = Object.assign(document.createElement('sd-notification'), {
      closable: true,
      variant: variant,
      toastStack: 'top-right',
      duration: Infinity,
      innerHTML: 'Lorem ipsum dolor sit amet.'
    });

    document.body.append(notification);
    return notification.toast();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      notify(button.getAttribute('data-notification-type'));
    });
  });
</script>
```
