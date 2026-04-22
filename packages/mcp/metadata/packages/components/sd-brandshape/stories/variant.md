Use the `variant` attribute to set the color variant:

- `primary` (default): Used on light backgrounds
- `neutral-100`
- `border-primary`: Used on light backgrounds
  <br>Change the fill color to match the background color
- `image`: Used to show an image without additional content
- `white`: Used on primary, primary-100 and neutral-100 backgrounds
- `border-white`: Used on primary background

```html
<div class="space-y-5">
  <sd-brandshape variant="primary">
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="neutral-100">
    <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="border-primary">
    <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="image">
    <div class="h-8"></div>
    <img slot="image" src="./placeholders/images/generic.jpg" alt="" />
  </sd-brandshape>

  <div class="bg-primary">
    <sd-brandshape variant="white">
      <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
    </sd-brandshape>

    <sd-brandshape variant="border-white">
      <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
    </sd-brandshape>
  </div>
</div>
```
