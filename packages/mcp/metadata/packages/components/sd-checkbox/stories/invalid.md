The component gets `invalid` state when the form is not valid.
For an invalid checkbox an error-text underneath (or if used in a group underneath the checkbox-group) is mandatory.

```html
<form id="form-example">
  <sd-checkbox id="checkbox-example" required>Invalid</sd-checkbox>
  <sd-button class="mt-4" type="submit" hidden>Submit</sd-button>
</form>
<script>
  var checkbox = document.querySelector('#checkbox-example');
  var form = document.querySelector('#form-example');

  setTimeout(() => {
    checkbox.setCustomValidity('Error-text');
    form.reportValidity();
  }, 500);

  checkbox.addEventListener('sd-change', () => {
    checkbox.checked ? checkbox.setCustomValidity('') : checkbox.setCustomValidity('Error-text');
  });
</script>
```
