The component gets `invalid` state when the form is not valid.
For an invalid switch an error-text underneath is mandatory.

```html
<form id="invalid-form">
  <sd-switch checked required id="invalid-switch">Invalid</sd-switch>
</form>
<script type="module">
  // Wait for custom elements to be defined
  await Promise.all([customElements.whenDefined('sd-switch')]).then(() => {
    const sdSwitch = document.getElementById('invalid-switch');

    sdSwitch.click();
    sdSwitch.reportValidity();
    sdSwitch.setCustomValidity('Error-text');
  });
</script>
```
