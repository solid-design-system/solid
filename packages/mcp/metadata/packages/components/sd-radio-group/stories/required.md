Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
**Accessibility Hint:** To ensure screen-reader compatibility, consider including a statement such as "Fields marked with an asterisk (\*) are required" at the start of the form.

```html
<form id="required-form" class="flex flex-col gap-8">
  <sd-radio-group name="radio-group" label="Required group" required>
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
  <div class="flex gap-2">
    <sd-button class="w-min" type="submit">Submit</sd-button>
    <sd-button class="w-min" type="reset" variant="secondary">Reset</sd-button>
  </div>
</form>
<script type="module">
  // Wait for custom elements to be defined
  await Promise.all([customElements.whenDefined('sd-radio-group'), customElements.whenDefined('sd-button')]).then(
    () => {
      const form = document.getElementById('required-form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        alert('This field is valid!');
      });
    }
  );
</script>
```
