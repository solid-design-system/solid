Use the `hoist` attribute to prevent the tooltip from being clipped when it's placed inside a container with `overflow: auto | hidden | scroll`.

```html
<div class="flex items-end overflow-scroll h-[5em] w-16">
  <sd-tooltip content="Lorem ipsum" placement="bottom-start" size="lg" hoist></sd-tooltip>
</div>
```
