Use the `not-interactive` attribute to create a non-interactive step group.

```html
<sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
  <sd-step size="lg" orientation="horizontal">
    <div slot="label">Step 1</div>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" current>
    <span slot="label">Step 2</span>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" waiting>
    <span slot="label">Step 3</span>
  </sd-step>
</sd-step-group>
```
