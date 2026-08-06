The component gets `invalid` state when the form is not valid.

```html
<div class="h-[300px] min-w-[200px] md:min-w-0 max-w-[400px]">
  <sd-combobox
    size="lg"
    placement="bottom"
    label="Label"
    placeholder="Please search and select"
    style-on-valid=""
    value=""
    required=""
    class="invalid-example"
  >
    <sd-option class="option" value="option-1">Option 1</sd-option>
    <sd-option class="option" value="option-2">Option 2</sd-option>
    <sd-option class="option" value="option-3">Option 3</sd-option>
  </sd-combobox>
</div>

<script>
  var invalidSelect = document.querySelector('.invalid-example');
  setTimeout(() => {
    invalidSelect.checkValidity();
    invalidSelect.reportValidity();
    invalidSelect.setCustomValidity('Error text');
  }, 500);
</script>
```
