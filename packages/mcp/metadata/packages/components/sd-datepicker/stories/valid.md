The component gets `valid` state when the datepicker is valid.
Use the `style-on-valid` attribute to automatically indicate and show a valid state.

```html
<div class="w-[370px] h-[500px]">
  <sd-datepicker id="valid-example" label="Label" value="2025.11.10" style-on-valid=""></sd-datepicker>
</div>
<script type="module">
  var validDatepicker = document.querySelector('#valid-example');
  setTimeout(() => {
    validDatepicker.checkValidity();
    validDatepicker.reportValidity();
    validDatepicker.setCustomValidity('');
  }, 500);
</script>
```
