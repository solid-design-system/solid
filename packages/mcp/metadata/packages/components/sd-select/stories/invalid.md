The component gets `invalid` state when the form is not valid.

```html
<div class="w-[400px] h-[300px]">
  <sd-select
    size="lg"
    placement="bottom"
    label="Label"
    placeholder="Please select"
    style-on-valid=""
    value=""
    required=""
    clearable=""
    class="invalid-example"
  >
    <sd-option class="option" value="option-1">Option 1</sd-option>
    <sd-option class="option" value="option-2">Option 2</sd-option>
    <sd-option class="option" value="option-3">Option 3</sd-option>
  </sd-select>
</div>

<script>
  var invalidSelect = document.querySelector('.invalid-example');
  setTimeout(() => {
    invalidSelect.checkValidity();
    invalidSelect.reportValidity();
    invalidSelect.setCustomValidity('Please select at least one option.');
  }, 500);
</script>
```
