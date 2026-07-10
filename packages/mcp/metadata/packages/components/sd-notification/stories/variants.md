Use the `variant` attribute to change the theme of the notification:

- `info` (default): suitable for notifications, conveying neutral information about an action
- `success`: imply a successful or positive outcome of an action
- `error`: indicate a destructive and irreversible outcome of an action
- `warning`: alert for possible issues or significant changes that must be considered

```html
<style>
  .notification-list > sd-notification::part(base) {
    margin: 0;
  }
</style>
<div class="flex flex-col gap-12 notification-list">
  <sd-notification variant="info" open>Info Lorem ipsum dolor sit</sd-notification>
  <sd-notification variant="success" open>Success Lorem ipsum dolor sit</sd-notification>
  <sd-notification variant="error" open>Error Lorem ipsum dolor sit</sd-notification>
  <sd-notification variant="warning" open>Warning Lorem ipsum dolor sit</sd-notification>
</div>
```
