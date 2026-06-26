Use the `tooltipFormatter` to customize the display of the value inside the tooltip. The function received the thumb as the only argument and should return a string to display in the tooltip.

```html
<div class="min-h-20 tooltip-formatter">
  <sd-range style label="Money spent" max="100" step="1" tooltip="on-interaction" value="25"> </sd-range>
</div>
<script>
  Promise.all([customElements.whenDefined('sd-range')]).then(() => {
    document.querySelector('.tooltip-formatter sd-range').tooltipFormatter = v =>
      '€' + v.toLocaleString('en-US') + ' of €100 spent';
  });
</script>
```
