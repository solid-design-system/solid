Use the `sd-headline--size-*` classes for alternative appearances:

- 4xl is the default size
- `sd-headline--size-3xl`
- `sd-headline--size-xl`
- `sd-headline--size-lg`
- `sd-headline--size-base`
  **Accessibility Information:**
  Separating semantics from styles allows developers to use appropriate tags (e.g, h1 to h6 or p) for structure,
  ensuring consistent design, accessibility, and flexibility across use cases.
  H-tags are applied in the CMS following semantic headline order.

```html
<div class="flex flex-col gap-12">
  <p class="sd-headline">Lorem ipsum sic semper</p>
  <p class="sd-headline sd-headline--size-3xl">Lorem ipsum sic semper</p>
  <p class="sd-headline sd-headline--size-xl">Lorem ipsum sic semper</p>
  <p class="sd-headline sd-headline--size-lg">Lorem ipsum sic semper</p>
  <p class="sd-headline sd-headline--size-base">Lorem ipsum sic semper</p>
</div>
```
