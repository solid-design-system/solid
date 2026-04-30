The component gets `invalid` state when the datepicker is not valid.

```html
<div class="w-[370px] h-[500px]">
  <sd-datepicker id="invalid-example" label="Label" style-on-valid="" required></sd-datepicker>
</div>
<script type="module">
  var invalidDatepicker = document.querySelector('#invalid-example');
  setTimeout(() => {
    invalidDatepicker.checkValidity();
    invalidDatepicker.reportValidity();
    invalidDatepicker.setCustomValidity('Please enter the date in the format DD.MM.YYYY');
  }, 500);
</script>
```
