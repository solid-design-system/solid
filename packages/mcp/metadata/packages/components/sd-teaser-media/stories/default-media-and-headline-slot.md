- Use the `default` slot to display main information and/or action elements below the headline.
- Use the `media` slot to add an image to the teaser.
- Use the `headline` slot to display titles. It should always contain a <h\*> element.
  **Accessibility Hint:**
- Please make sure to use semantically correct headline tags for the headline slot to provide accessible content.
- The heading in a teaser should be the first item in the DOM. A heading introduces a new thematic region and separates the following content from the previous region.
- If the image in a teaser doesn't contribute to the information delivered to the user, don't describe the image in the alt attribute and leave it empty.

```html
<sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
  <h3 slot="headline">Headline Media Teaser</h3>
  <img slot="media" src="./placeholders/images/architecture.jpg" class="aspect-video object-cover" alt="Generic alt" />
  <div class="slot slot--border slot--text slot--inverted h-12">Default slot</div>
</sd-teaser-media>
```
