Use the `orientation` attribute to set the axis of a step-group:

- `horizontal`(default)
- `vertical`
  **Accessibility hint:** Be aware that choosing a horizontal step group layout may cause layout issues, such as overflow, on small viewports or when the page is zoomed in; consider this when deciding between horizontal and vertical layouts.

```html
<div class="flex flex-col space-y-12">
  <sd-step-group size="lg" orientation="horizontal" active-step="1" class="w-full" label="Orientation Label">
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

  <div class="flex h-[20em] pl-[56px]">
    <sd-step-group size="lg" orientation="vertical" active-step="1" class="w-full">
      <sd-step size="lg" orientation="vertical">
        <p slot="label">Step 1</p>
      </sd-step>

      <sd-step size="lg" orientation="vertical" current>
        <p slot="label">Step 2</p>
      </sd-step>

      <sd-step size="lg" orientation="vertical" waiting>
        <p slot="label">Step 3</p>
      </sd-step>
    </sd-step-group>
  </div>
</div>
```
