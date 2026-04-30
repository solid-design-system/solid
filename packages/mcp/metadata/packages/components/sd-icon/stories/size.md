Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element.

```html
<div class="flex gap-6">
  <sd-icon class="text-sm" name="union-investment/content/image" label="Small picture frame"></sd-icon>
  <sd-icon name="union-investment/content/image" label="Picture frame which inherits the size"></sd-icon>
  <sd-icon class="text-xl" name="union-investment/content/image" label="Extra large picture frame"></sd-icon>
  <sd-icon style="font-size: 36px" name="union-investment/content/image" label="Even larger picture frame"></sd-icon>
</div>
```
