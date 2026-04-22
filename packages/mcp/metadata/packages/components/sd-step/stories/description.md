Use the ”default” slot to add a description to the step. Alternatively, you can use the description attribute.

```html
<div class="h-32 mb-16 w-[200px]">
  <sd-step orientation="vertical" description="">
    <span slot="label">Step name</span>
    <p class="sd-paragraph">Description lorem ipsum sic semper</p>
  </sd-step>
</div>
<div class="mb-16 w-[255px]">
  <sd-step orientation="horizontal" horizontal-inline>
    <span slot="label">Step name</span>
    <p class="sd-paragraph">Description lorem ipsum sic semper</p>
  </sd-step>
</div>
<div class="w-[293px]">
  <sd-step orientation="horizontal">
    <span slot="label">Step name</span>
    <p class="sd-paragraph">Description lorem ipsum sic semper</p>
  </sd-step>
</div>
```
