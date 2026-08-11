The component gets `invalid` state when the form is not valid.

```html
<form id="invalid-form">
  <sd-file-selector id="invalid-file-selector" label="Select a file to upload" show-label> </sd-file-selector>
</form>
<script type="module">
  await Promise.all([customElements.whenDefined('sd-file-selector')]).then(() => {
    const fileSelector = document.getElementById('invalid-file-selector');
    fileSelector.setCustomValidity('Please select a file.');
    fileSelector.reportValidity();
  });
</script>
```
