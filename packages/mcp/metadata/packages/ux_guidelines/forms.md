---
description: >
  Use when a user needs information about the UX principles for building forms. This includes guidelines on creating intuitive, accessible, and engaging user experiences that align with the brand's values and enhance user satisfaction across all digital touch points.
name: forms
title: Forms
components:
  - sd-button
  - sd-checkbox
  - sd-checkbox-group
  - sd-container
  - sd-headline
  - sd-input
  - sd-link
  - sd-meta
  - sd-option
  - sd-prose
  - sd-radio
  - sd-radio-group
  - sd-select
  - sd-switch
  - sd-textarea
  - sd-tooltip
version: 1.0.0
---

# Pattern Guide: Forms

sd-tage. To allow users to scan and complete the form quickly, forms should:

- Ask only for necessary information so as to respect the user’s privacy regulations.
- Follow a logical, predictable order—e.g first name first, last name second.
- Allow users to stay with a single interaction method for as long as possible (i.e. do not make users shift from keyboard to mouse numerous times in a single form).
- Group related tasks under section titles to provide more context and make the interface easier to scan.
- Keep in mind password managers and browser capabilities that populate data for users.
- Disclose inputs progressively to avoid overwhelming the user.
- If the majority of the fields are required, mark only the optional field labels with “(optional)”. The mandatory fields remain required, only the asterisk is omitted.
- If the majority of the fields are optional, mark only the required field labels with “*”.
- The approach employed should remain uniform across your product.

## Best Practices for Forms

### Providing Help

- Description text: give information about required fields
- Tooltips: Don't make tooltips the sole source of essential information.
- Set value: Prefill any possible values to spare the user time.
- Placeholder text: Use for non-essential hints, examples, or format suggestions: It cannot replace labels.
- Error text: Display information about the error, as well as tips or rules for correcting it.
- Helper text: include formatting examples, validation rules, and error prevention tips as hints.

### Multi-Step Forms

Break long forms into steps using a progress indicator.

- Group steps by content type.
- Show the description text (required/optional convention) only on the first step.
- Apply the same required/optional marking pattern consistently across all steps.
- Group input elements by interaction type (keyboard vs. mouse) within a step.
- Allow backward navigation while preserving input values.
- Validate mandatory fields when advancing — show error states on all incomplete required fields before blocking progress.

### Related Templates

- forms

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

## Forms Validation

### Error Handling

Validation should primarily occur on submit, to avoid overwhelming users with premature feedback.

- For input fields that can be easily corrected before submission (e.g., format errors), use afterward validation and display the error message once the user leaves the field (on blur).
- Show the on-blur error only if the value has changed.

When a form produces an error:

- Highlight incorrect fields as invalid and describe the issue in text form.
- Do not blame the user – error messages must be solution-oriented, guiding them on how to correct the problem.
- Explicitly explain what information or formats are required, and provide assistance where possible.
- Support users with automatic corrections (e.g., for streets, dates) when feasible.
- Use placeholder text for brief hints/examples and helper text for detailed guidance. Both may be combined, but do not rely on placeholders alone since they disappear while typing.
- Avoid references based on sensory characteristics (e.g., “the field on top” or “the red field”).

### Success Handling

Validation should occur on blur when the system can reliably confirm correctness (e.g., checking formats such as postal codes or password requirements).
When input is valid:

- Apply the on-valid style only after validation confirms correctness.
- Do not use the on-valid style as a mere indicator that the field has been filled.
- For prefilled input fields, display the on-valid style only after the user interacts with the field (on blur) or submits it.

## Best Practices for Forms Validations

### Valid

Style on Valid: Show a valid input, if the requirements are matched.

### Error

- Helper text: Give information about what you need or where to find the information
- Placeholder text: Give non-essential hints, examples, or format suggestions
- Tooltip: If a more detailed information has to be given, tooltip can be used together with the helper text.
- Error message: Describe in a solution-oriented, informative way how to fix the error. When an error occurs, the helper text is replaced with the error text for that field.

### Writing examples for Error Messages

- Example for fields where a first name is needed: "Please enter your first name."
- Example if a Client number isn't matching the required length: "Numbers are missing in your client number. Please check your input."
- Example for fields where a date is needed in a specific format: "Please enter the expiration date in the format MM/YY."
- Example if the username is wrong: "Please check your username and try again."
