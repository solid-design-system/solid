The component gets `invalid` state when the form is not valid.

```html
<form class="w-[500px]">
  <sd-textarea
    id="invalid-textarea"
    value=""
    size="lg"
    label="Label"
    rows="4"
    placeholder="Placeholder"
    style-on-valid
    spellcheck
  ></sd-textarea>
</form>
<script type="module">
  await Promise.all([customElements.whenDefined('sd-textarea'), customElements.whenDefined('sd-button')]).then(() => {
    const input = document.getElementById('invalid-textarea');

    input.setCustomValidity('Error text');
    input.reportValidity();
  });
</script>
```
