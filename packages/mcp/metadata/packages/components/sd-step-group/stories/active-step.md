Use the `active-step` attribute to set the current step.

```html
<sd-step-group size="lg" orientation="horizontal" active-step="0">
  <sd-step size="lg" orientation="horizontal">
    <p slot="label">Step 1</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" current>
    <p slot="label">Step 2</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" waiting>
    <p slot="label">Step 3</p>
  </sd-step>
</sd-step-group>
```
