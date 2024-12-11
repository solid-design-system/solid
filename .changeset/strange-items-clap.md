---
'@solid-design-system/components': major
---

The `sd-flipcard` component has been updated to improve a11y, flexibility and alignment with design. Checkout the migration guide for more details.

implement new sd-flipcard:

- remove 'activation' feature.
- Include a dedicated button to trigger the flip (clicking the card and hovering will no longer trigger a flip).
- remove 'empty' variant and set 'primary' as the default variant.
- add 'placement' feature to set the position of the default slots for both the front and back cards.
- simplify variants to remove any positioning logic (eg: gradient-light-top -> gradient-light)
- update tests and templates.
