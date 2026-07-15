The component gets `invalid` state when the form is not valid.

```html
<form id="invalid-form">
  <sd-input id="invalid-input" class="w-[250px]" label="Label" style-on-valid placeholder="Placeholder text"></sd-input>
</form>
<script type="module">
  await Promise.all([customElements.whenDefined('sd-input')]).then(() => {
    const input = document.getElementById('invalid-input');
    input.setCustomValidity('Error text');
    input.reportValidity();
  });
</script>
```
