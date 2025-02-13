---
'@solid-design-system/components': minor
'@solid-design-system/docs': minor
---

Add `visually-disabled` attribute in form elements for improved accessibility.

By introducing this new attribute, it is possible to display an element as if it is disabled while still keeping it accessible to screen readers. This attribute is currently available on the following components:

- sd-button
- sd-link
- sd-input
- sd-combobox
- sd-select
- sd-radio
- sd-radio-button
- sd-checkbox
- sd-textarea

The components `sd-radio-group` and `sd-checkbox-group` also have a new `help-text` attribute and slot which allows users to include a description.

A new form template utilizing the `visually-disabled` approach has been created as a suggestion on how to handle forms in a more accessible way.
