Use the `expandable` slot to add content that only shows up on click. This slot should not contain any relevant action since it is only shown on click.
**Accessibility Hint:** Avoid placing essential information or actions in expandable teaser areas since they are only visible on click.

```html
<sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
  <h3 slot="headline">Headline Media Teaser</h3>
  <img slot="media" src="./placeholders/images/architecture.jpg" class="aspect-video object-cover" alt="Generic alt" />
  <div slot="expandable">Expandable slot</div>
</sd-teaser-media>
```
