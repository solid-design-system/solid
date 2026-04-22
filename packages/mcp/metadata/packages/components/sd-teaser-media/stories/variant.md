Use the `variant` attribute to set the color variant:

- `white (default)`
- `primary`
- `primary-100`
- `neutral-100`
- `gradient-dark`
- `gradient-light`

```html
<div class="flex flex-col gap-12">
  <sd-teaser-media variant="white" class="max-w-[600px]">
    <h3 slot="headline">Headline Media Teaser (white – default)</h3>
    <img
      slot="media"
      src="./placeholders/images/architecture.jpg"
      class="aspect-video object-cover"
      alt="Generic alt"
    />
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sd-teaser-media>

  <sd-teaser-media variant="primary" class="max-w-[600px]">
    <h3 slot="headline">Headline Media Teaser (primary)</h3>
    <img
      slot="media"
      src="./placeholders/images/architecture.jpg"
      class="aspect-video object-cover"
      alt="Generic alt"
    />
    <p class="sd-paragraph sd-paragraph--inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sd-teaser-media>

  <sd-teaser-media variant="primary-100" class="max-w-[600px]">
    <h3 slot="headline">Headline Media Teaser (primary-100)</h3>
    <img
      slot="media"
      src="./placeholders/images/architecture.jpg"
      class="aspect-video object-cover"
      alt="Generic alt"
    />
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sd-teaser-media>

  <sd-teaser-media variant="neutral-100" class="max-w-[600px]">
    <h3 slot="headline">Headline Media Teaser (neutral-100)</h3>
    <img
      slot="media"
      src="./placeholders/images/architecture.jpg"
      class="aspect-video object-cover"
      alt="Generic alt"
    />
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sd-teaser-media>

  <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
    <h3 slot="headline">Headline Media Teaser (gradient-dark)</h3>
    <img
      slot="media"
      src="./placeholders/images/architecture.jpg"
      class="aspect-video object-cover"
      alt="Generic alt"
    />
    <p class="sd-paragraph sd-paragraph--inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sd-teaser-media>

  <sd-teaser-media variant="gradient-light" class="max-w-[600px]">
    <h3 slot="headline">Headline Media Teaser (gradient-light)</h3>
    <img
      slot="media"
      src="./placeholders/images/architecture.jpg"
      class="aspect-video object-cover"
      alt="Generic alt"
    />
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sd-teaser-media>
</div>
```
