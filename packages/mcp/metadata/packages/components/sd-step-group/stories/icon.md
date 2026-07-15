Use the `default` slot to add a content-icon.

```html
<sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
  <sd-step size="lg" orientation="horizontal" not-interactive>
    <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
    <div slot="label">Step 1</div>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" not-interactive>
    <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
    <div slot="label">Step 2</div>
  </sd-step>

  <sd-step size="lg" orientation="horizontal" not-interactive>
    <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
    <div slot="label">Step 3</div>
  </sd-step>
</sd-step-group>
```
