Use the `duration` attribute to set the duration (in milliseconds) of the notification.

```html
<sd-notification variant="info" open duration="Infinity">Notification will stay open (Infinity)</sd-notification>
<sd-notification id="duration-example" variant="info" open duration="5000">
  Notification will self close after 5 seconds
</sd-notification>
<script>
  var notificationDuration = document.querySelector('#duration-example');
  notificationDuration.addEventListener('sd-after-hide', () => {
    setTimeout(() => {
      notificationDuration.open = true;
    }, 3000);
  });
</script>
```
