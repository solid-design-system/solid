Use the `orientation` attribute to set the scroll direction of the component:

- `horizontal` (default)
- `vertical`
- `auto`

```html
<div class="flex gap-12">
  <sd-scrollable orientation="horizontal">
    <div class="flex h-40 items-start w-max p-4 gap-1">
      <sd-tag size="lg">Tag 1</sd-tag>
      <sd-tag size="lg">Tag 2</sd-tag>
      <sd-tag size="lg">Tag 3</sd-tag>
      <sd-tag size="lg">Tag 4</sd-tag>
      <sd-tag size="lg">Tag 5</sd-tag>
      <sd-tag size="lg">Tag 6</sd-tag>
    </div>
  </sd-scrollable>

  <sd-scrollable orientation="vertical" style="height:135px;">
    <div class="self-start p-4 text-sm justify-start">
      <p>
        Union Investment has extended its lease with Converse, the footwear and apparel brand known for its deep
        connection to youth culture, at 1 Lovejoy Wharf in Boston. The contract for around 20,000 sqm of
        state-of-the-art office space was renewed long-term. The building has been part of the UniImmo: Global
        open-ended real estate fund portfolio since 2016 and is the global headquarters of the lifestyle brand, which
        has been part of NIKE, Inc. since 2003.
      </p>
    </div>
  </sd-scrollable>
</div>
```
