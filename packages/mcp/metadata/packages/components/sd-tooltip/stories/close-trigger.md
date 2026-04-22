Use the `close-trigger` attribute to control how the tooltip is triggered to **close**:

- `click`: Removes the tooltip when the trigger element is clicked
- `hover`: Removes the tooltip when the trigger element is hovered
- `focus`: Removes the tooltip when the trigger element is focused
- `manual`: Removes the tooltip when the `open` attribute is set to `false`

```html
<div class="h-[100px]">
  <sd-tooltip
    content="Lorem ipsum"
    placement="bottom-start"
    size="lg"
    trigger="click"
    open="true"
    close-trigger="click"
  ></sd-tooltip>
</div>
```
