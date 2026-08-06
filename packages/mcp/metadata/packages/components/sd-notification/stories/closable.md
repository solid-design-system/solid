Use the `closable` attribute to toggle a close button.

```html
<sd-notification id="closable-example" variant="info" open closable>Lorem ipsum dolor sit</sd-notification>
<script>
  var closableNotification = document.querySelector('#closable-example');
  closableNotification.addEventListener('sd-after-hide', () => {
    setTimeout(() => {
      closableNotification.open = true;
    }, 3000);
  });
</script>
```
