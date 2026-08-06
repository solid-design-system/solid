Use the `valueFormatter` to customize the display of the value in the progress bar. The function receives the current value as a parameter and should return a string to display in the value-position part.

```html
<div class="flex flex-col gap-4">
  <div class="value-formatter-story-right">
    <sd-progress-bar class="max-w-[300px]" value="4" max="10" value-position="right"></sd-progress-bar>
  </div>
  <div class="value-formatter-story-bottom max-w-[300px]">
    <sd-progress-bar value="4" max="10" value-position="bottom"></sd-progress-bar>
  </div>
</div>
<script>
  Promise.all([customElements.whenDefined('sd-progress-bar')]).then(() => {
    document.querySelector('.value-formatter-story-right sd-progress-bar').valueFormatter = value =>
      value + ' of 10 MB';
    document.querySelector('.value-formatter-story-bottom sd-progress-bar').valueFormatter = value =>
      '€' + value + 'k of €10k spent';
  });
</script>
```
