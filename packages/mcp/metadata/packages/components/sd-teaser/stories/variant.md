Use the `variant` attribute to use the appropriate teaser for your context:

- `white` (default)
- `white border-neutral-400`
- `neutral-100`
- `primary-100`
- `primary`

```html
<div class="grid grid-cols-2 gap-12">
  <sd-teaser variant="white" inset>
    <h3 slot="headline">Teaser with white background</h3>
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.</p>
  </sd-teaser>
  <sd-teaser variant="white border-neutral-400">
    <h3 slot="headline">Teaser with white background and border neutral-400</h3>
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.</p>
  </sd-teaser>
  <sd-teaser variant="neutral-100" inset>
    <h3 slot="headline">Teaser with neutral-100 background</h3>
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.</p>
  </sd-teaser>
  <sd-teaser variant="primary-100" inset>
    <h3 slot="headline">Teaser with primary-100 background</h3>
    <p class="sd-paragraph">Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.</p>
  </sd-teaser>
  <sd-teaser variant="primary" inset>
    <h3 slot="headline">Teaser with primary background</h3>
    <p class="sd-paragraph sd-paragraph--inverted">
      Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
    </p>
  </sd-teaser>
</div>
```
