Add `children` slot to the navigation item to create an accordion.
**Hints:**

- Only works with `vertical` attribute.
- A `chevron` will be added regardless of the `chevron` attribute.
- The `open` attribute can be used to control the open state of the accordion.

```html
<sd-navigation-item vertical>
  <div>Vertical navigation with accordion</div>
  <sd-navigation-item vertical indented slot="children"> Sub navigation 1 </sd-navigation-item>
  <sd-navigation-item vertical indented slot="children"> Sub navigation 2 </sd-navigation-item>
  <sd-navigation-item vertical indented slot="children"> Sub navigation 3 </sd-navigation-item>
</sd-navigation-item>
```
