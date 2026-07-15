The component gets the `invalid` state when the form is not valid.
For an invalid radio-group (since radios always come in groups) an error-text underneath the group is mandatory.

```html
<form id="invalid-form" class="flex flex-col gap-8">
  <sd-radio-group name="radio-group" id="invalid-radio" label="Invalid group" required>
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
</form>

<script type="module">
  // Wait for custom elements to be defined
  await Promise.all([customElements.whenDefined('sd-radio-group'), customElements.whenDefined('sd-button')]).then(
    () => {
      const input = document.getElementById('invalid-radio');
      input.setCustomValidity('Please fill in this field.');
      input.reportValidity();
    }
  );
</script>
```
