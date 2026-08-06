---
name: radio-group
title: Radio Group
components:
  - sd-change
  - sd-radio
  - sd-radio-group
version: 1.0.0
---

## Template: Radio Group with Help text

```html
<sd-radio-group
  name="greeting"
  value="mr"
  label="Greeting"
  orientation="horizontal"
  help-text="Please select your preferred salutation."
  required
>
  <sd-radio value="mr">Mr.</sd-radio>
  <sd-radio value="ms">Ms.</sd-radio>
  <sd-radio value="non-binary">Non-binary</sd-radio>
</sd-radio-group>
```

## Template: Radio Group with Error text

```html
<sd-radio-group id="radio-group-error" name="role" label="What is your role/function?" orientation="vertical" required>
  <sd-radio value="advisor-in-service">Advisor in service</sd-radio>
  <sd-radio value="customer-advisor">Customer advisor</sd-radio>
  <sd-radio value="securities-specialist">Securities specialist/Wealth advisor</sd-radio>
  <sd-radio value="online-branch-employee">Online branch employee</sd-radio>
  <sd-radio value="other">Other</sd-radio>
</sd-radio-group>

<script type="module">
  await customElements.whenDefined('sd-radio-group');

  const radioGroup = document.querySelector('#radio-group-error');
  radioGroup.setCustomValidity('Select an option to proceed.');
  radioGroup.reportValidity();

  radioGroup.addEventListener('sd-change', () => {
    radioGroup.setCustomValidity('');
    radioGroup.reportValidity();
  });
</script>
```
