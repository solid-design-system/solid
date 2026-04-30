The component gets `valid` state when the input is valid.
Use the `style-on-valid` attribute to automatically indicate and show a valid state.

```html
<div class="w-[400px] h-[400px]">
  <sd-select
    size="lg"
    placement="bottom"
    label="Label"
    placeholder="Please select"
    style-on-valid=""
    value="option-1"
    class="valid-example"
  >
    <sd-option class="option" value="option-1">Option 1</sd-option>
    <sd-option class="option" value="option-2">Option 2</sd-option>
    <sd-option class="option" value="option-3">Option 12</sd-option>
  </sd-select>
</div>

<script>
  var validSelect = document.querySelector('.valid-example');
  var options = validSelect.querySelectorAll('.option');
  setTimeout(() => {
    validSelect.checkValidity();
    validSelect.reportValidity();
  }, 500);
</script>
```
