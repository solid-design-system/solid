Use the `meta` slot to add additional content to the teaser.

```html
<sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
  <h3 slot="headline">Headline Media Teaser</h3>
  <div slot="meta" class="slot slot--border slot--text slot--inverted h-12">Meta slot</div>
  <img slot="media" src="./placeholders/images/architecture.jpg" class="aspect-video object-cover" alt="Generic alt" />
</sd-teaser-media>
```
