Use the `placement` attribute to set the placement:

- `top-start`: Displays tooltip above the trigger element and aligns arrow to the start of the tooltip container
- `top`: Displays tooltip above the trigger element
- `top-end`: Displays tooltip above the trigger element and aligns arrow to the end of the tooltip container
- `bottom-start`: Displays tooltip below the trigger element and aligns arrow to the start of the tooltip container
- `bottom`: Displays tooltip below the trigger element
- `bottom-end`: Displays tooltip below the trigger element and aligns arrow to the end of the tooltip container

```html
<div class="grid grid-cols-1 justify-items-center md:grid-cols-3 md:justify-items-start gap-24 p-12">
  <div>
    <sd-tooltip content="Top Start Positioning" placement="top-start" open size="lg" trigger="click focus"></sd-tooltip>
  </div>
  <div>
    <sd-tooltip content="Top Positioning" placement="top" open size="lg" trigger="click focus"></sd-tooltip>
  </div>
  <div>
    <sd-tooltip content="Top End Positioning" placement="top-end" open size="lg" trigger="click focus"></sd-tooltip>
  </div>
  <div>
    <sd-tooltip
      content="Bottom Start Positioning"
      placement="bottom-start"
      open
      size="lg"
      trigger="click focus"
    ></sd-tooltip>
  </div>
  <div>
    <sd-tooltip content="Bottom Positioning" placement="bottom" open size="lg" trigger="click focus"></sd-tooltip>
  </div>
  <div>
    <sd-tooltip
      content="Bottom End Positioning"
      placement="bottom-end"
      open
      size="lg"
      trigger="click focus"
    ></sd-tooltip>
  </div>
</div>
```
