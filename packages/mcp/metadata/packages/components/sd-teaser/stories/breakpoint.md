Use the `breakpoint` attribute to change the teaser's layout at a specific breakpoint or enforce a specific layout:

- `0` is always horizontal
- `9999` is always vertical

```html
<div class="flex gap-8 flex-col">
  <sd-teaser breakpoint="0">
    <h3 slot="headline">Horizontal</h3>
    <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
    <p>
      Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
      reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
      sunt nulla incididunt.
    </p>
  </sd-teaser>

  <sd-teaser breakpoint="9999" class="w-[256px]">
    <h3 slot="headline">Vertical</h3>
    <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
    <p>
      Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
      reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
      sunt nulla incididunt.
    </p>
  </sd-teaser>
</div>
```
