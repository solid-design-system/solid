Use `active-step` set as `-1` so the `sd-step-group` will not manage the step states automatically.
States will have to be managed manually with `current`, `waiting`, `disabled` directly on the
`sd-step` components.

```html
<sd-step-group size="lg" orientation="horizontal" active-step="-1" label="Manual State Label">
  <sd-step size="lg" orientation="horizontal">
    <p slot="label">Default</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" current>
    <p slot="label">Current</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" disabled>
    <p slot="label">Disabled</p>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" waiting>
    <p slot="label">Waiting</p>
  </sd-step>
</sd-step-group>
```
