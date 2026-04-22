The component gets `valid` state when the input is valid. Use the `style-on-valid` attribute to automatically indicate and show a valid state.

```html
<form class="w-[500px]">
  <sd-textarea
    id="valid-textarea"
    value="Input text here"
    size="lg"
    label="Label"
    style-on-valid
    spellcheck
  ></sd-textarea>
</form>
<script type="module">
  await Promise.all([customElements.whenDefined('sd-textarea'), customElements.whenDefined('sd-button')]).then(() => {
    const input = document.getElementById('valid-textarea');

    input.setCustomValidity(''); // Clear custom validity
    input.reportValidity();
  });
</script>
```
