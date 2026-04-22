The component gets `valid` state when the input is valid.
Use the `style-on-valid` attribute to automatically indicate and show a valid state.

```html
<form id="valid-form">
  <sd-input id="valid-input" class="w-[250px]" label="Label" style-on-valid value="Input text here"></sd-input>
</form>
<script type="module">
  await Promise.all([customElements.whenDefined('sd-input')]).then(() => {
    const input = document.getElementById('valid-input');
    input.setCustomValidity(''); // Clear custom validity
    input.reportValidity();
  });
</script>
```
