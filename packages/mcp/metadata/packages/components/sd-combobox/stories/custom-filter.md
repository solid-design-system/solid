A custom filter can be applied by passing a filter function to the filter property. This filter() function will be called for each option. The first argument is an element and the second argument is the query string.

```html
<div class="h-[400px] min-w-[200px] md:min-w-0 max-w-[400px]">
  <sd-combobox label="Custom filter" class="filter-combobox"> ${createColorOptionsHtml()} </sd-combobox>
</div>
<script type="module">
  const comboboxes = document.querySelectorAll('.filter-combobox');
  comboboxes.forEach(combobox => {
    const oldFilter = combobox.filter;
    combobox.filter = (option, queryString) => {
      // only show options for more than 2 characters on text input
      if (queryString && queryString.length > 2) {
        return oldFilter(option, queryString);
      }
      return false;
    };
  });
</script>
```
