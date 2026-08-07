Teasers accept a `media` slot to display images or videos.
**Accessibility Hint:** If the image doesn't contribute to the information delivered to the user, don't describe it in the alt attribute and leave it empty.

```html
<sd-teaser>
  <h3 slot="headline">Lorem ipsum sic semper</h3>
  <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
  <p>
    Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
    reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate sunt
    nulla incididunt.
  </p>
</sd-teaser>
```
