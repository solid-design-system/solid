Use the `horizontal-inline` attribute to activate the inline option of the horizontal orientation.

```html
<sd-step-group size="lg" orientation="horizontal" active-step="1" class="w-full" label="Orientation Label">
  <sd-step size="lg" orientation="horizontal" horizontal-inline>
    <p slot="label">Step 1</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" horizontal-inline current>
    <p slot="label">Step 2</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" horizontal-inline waiting>
    <p slot="label">Step 3</p>
  </sd-step>
</sd-step-group>
```
