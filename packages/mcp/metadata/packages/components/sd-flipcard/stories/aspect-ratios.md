Use the CSS property `aspect-ratio` to set the aspect ratio of the flipcard:

- 3:4 ratio (default)
- 16:9 ratio

```html
<sd-flipcard
  flip-direction="horizontal"
  front-variant="primary-100"
  back-variant="primary-100"
  style="aspect-ratio:3/4;"
  class="mb-12"
>
  <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
  <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
</sd-flipcard>
<sd-flipcard
  flip-direction="horizontal"
  front-variant="primary-100"
  back-variant="primary-100"
  style="aspect-ratio:16/9"
>
  <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
  <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
</sd-flipcard>
```
