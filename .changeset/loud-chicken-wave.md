---
'@solid-design-system/docs': patch
---

Improved `sd-step-group` and `sd-step-group template` accessibility.

- Add aria label to all stories.

Improved `sd-step` accessibility.

- Skipped `aria-required-parent` violation in accessibility automatic tests. This test is not relevant in this context since we only want to show the isolated component and not in the context of its real use which would be wrapped in a `sd-step-group` component.