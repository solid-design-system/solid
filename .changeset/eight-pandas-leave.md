---
'@solid-design-system/docs': patch
---

Skipped `aria-required-parent` violation in accessibility automatic tests. This test is not relevant in this context since we only want to show the isolated component and not in the context of its real use which would be wrapped in a `sd-tab-group` component. This use case is already validated in other stories like `variant` or `active`.
