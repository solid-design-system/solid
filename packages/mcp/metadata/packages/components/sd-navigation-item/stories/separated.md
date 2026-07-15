Use the `separated` attribute, to have more that only one action. It is possible to use it as a link and an accordion simultaneously.
**Hints:**

- Only works with a `children slot` and an `href` attribute.
- `target` and `download` attributes are optional.

```html
<sd-navigation-item href="https://www.union-investment.de/" target="_blank" vertical separated>
  <div>Vertical Navigation Separated</div>
  <sd-navigation-item vertical indented slot="children"> Sub Navigation 1 </sd-navigation-item>
  <sd-navigation-item vertical indented slot="children"> Sub Navigation 2 </sd-navigation-item>
  <sd-navigation-item vertical indented slot="children"> Sub Navigation 3 </sd-navigation-item>
</sd-navigation-item>
```
