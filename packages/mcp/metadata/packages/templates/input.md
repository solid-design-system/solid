---
name: input
title: Input
components:
  - sd-change
  - sd-input
version: 1.0.0
---

## Template: Input With Currency Stepper

```html
<div class="w-[250px]">
  <sd-input label="Currency stepper" id="stepperSampleInput" type="number" spin-buttons min="0" value="0.00">
    <span slot="right" class="text-sm inline-flex items-center">
      <span class="text-neutral-700">EUR</span>
    </span>
  </sd-input>
</div>
<script type="module">
  const stepper = document.getElementById('stepperSampleInput');

  stepper.addEventListener('sd-change', event => {
    stepper.value = String(parseInt(event.target.value, 10).toFixed(2));
  });
</script>
```
