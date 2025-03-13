---
'@solid-design-system/docs': patch
---

Fix a11y tests in `sd-header` screenshots tests by adding missing label.

In some cases (eg. Combination test) the components are added together in the same context, therefore we skip tests for the following two rules: `landmark-no-duplicate-banner` and `landmark-unique`.
