Use the `variant` attribute to set the button’s variant:

- `primary` (default): Use the primary button for the most important actions in your interface, such as submitting a form, confirming a decision, or progressing to the next step in a process
- `secondary`: Not all functions must have primary actions, sometimes the actions are subordinate to the content and all are equally important
- `tertiary`: Use tertiary buttons for actions like accessing additional options, providing supplemental information, or performing less critical tasks
- `cta` (Call to Action): The call-to-action button is only used once on a page (main conversion of the page)

```html
<div class="flex gap-12">
  <sd-button variant="primary">Primary</sd-button>
  <sd-button variant="secondary">Secondary</sd-button>
  <sd-button variant="tertiary">Tertiary</sd-button>
  <sd-button variant="cta">Call to action</sd-button>
</div>
```
