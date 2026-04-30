It is possible to add options dynamically to the combobox e.g. if the option values need to be fetched asynchronously from a remote server or API.

```html
<div class="h-[400px] min-w-[200px] md:min-w-0 max-w-[400px]">
  <sd-combobox label="Async options" class="async-combobox">
    <sd-option class="option" value="option-1">Option 1</sd-option>
    <sd-option class="option" value="option-2">Option 2</sd-option>
    <sd-option class="option" value="option-3">Option 3</sd-option>
  </sd-combobox>
</div>
<script type="module">
  const comboboxes = document.querySelectorAll('.async-combobox');
  comboboxes.forEach(combobox => {
    // After api request the options are added async
    let index = 4;
    let timeout = setInterval(() => {
      const option = document.createElement('sd-option');
      const value = 'Option ' + index++;
      option.textContent = value;
      combobox.appendChild(option);
      if (index > 10) {
        clearInterval(timeout);
      }
    }, 4000);
  });
</script>
```
