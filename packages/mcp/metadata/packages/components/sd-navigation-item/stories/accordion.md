Add `children` slot to the navigation item to create an accordion.
**Hints:**

- Only works with `vertical` attribute.
- A `chevron` will be added regardless of the `chevron` attribute.
- The `open` attribute can be used to control the open state of the accordion.

```html
<sd-navigation-item vertical>
  <div>Vertical Navigation with Accordion</div>
  <sd-navigation-item vertical indented slot="children"> Sub Navigation 1 </sd-navigation-item>
  <sd-navigation-item vertical indented slot="children"> Sub Navigation 2 </sd-navigation-item>
  <sd-navigation-item vertical indented slot="children"> Sub Navigation 3 </sd-navigation-item>
</sd-navigation-item>
```
