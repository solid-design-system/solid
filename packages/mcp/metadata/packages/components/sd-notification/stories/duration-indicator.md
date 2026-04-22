Use the `duration-indicator` attribute to enable an animation that visualizes the duration of a notification.

```html
<sd-notification id="duration-indicator-attribute" variant="info" open duration-indicator duration="5000">
  Notification will self close after 5 seconds
</sd-notification>
<script>
  var durationIndicator = document.querySelector('#duration-indicator-attribute');
  durationIndicator.addEventListener('sd-after-hide', () => {
    setTimeout(() => {
      durationIndicator.open = true;
    }, 3000);
  });
</script>
```
