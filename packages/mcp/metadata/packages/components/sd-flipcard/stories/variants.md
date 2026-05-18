Use the `variant` attribute to set the color variant for front or back:

- `primary` (default)
- `primary-100`
- `gradient-light`
- `gradient-dark`

```html
<div class="grid grid-cols-2 gap-8">
  <sd-flipcard flip-direction="horizontal" front-variant="primary" back-variant="primary">
    <p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>
  </sd-flipcard>
  <sd-flipcard flip-direction="horizontal" front-variant="primary-100" back-variant="primary-100">
    <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
  </sd-flipcard>
  <sd-flipcard flip-direction="horizontal" front-variant="gradient-light" back-variant="gradient-light">
    <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
    <img
      slot="media-front"
      class="object-cover h-full w-full"
      src="./placeholders/images/generic.jpg"
      alt="Generic Alt"
    />
    <img
      slot="media-back"
      class="object-cover h-full w-full"
      src="./placeholders/images/generic.jpg"
      alt="Generic Alt"
    />
  </sd-flipcard>
  <sd-flipcard flip-direction="horizontal" front-variant="gradient-dark" back-variant="gradient-dark">
    <p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>
    <img
      slot="media-front"
      class="object-cover h-full w-full"
      src="./placeholders/images/generic.jpg"
      alt="Generic Alt"
    />
    <img
      slot="media-back"
      class="object-cover h-full w-full"
      src="./placeholders/images/generic.jpg"
      alt="Generic Alt"
    />
  </sd-flipcard>
</div>
```
