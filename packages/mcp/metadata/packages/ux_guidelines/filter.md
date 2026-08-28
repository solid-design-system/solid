---
description: >
  Use when a user needs information about the UX principles for building filter patterns. This includes guidelines on creating intuitive, accessible, and engaging user experiences that align with the brand's values and enhance user satisfaction across all digital touch points.
name: filter
title: Filter
components:
  - sd-button
  - sd-checkbox-group
  - sd-combobox
  - sd-radio-button
  - sd-radio-group
  - sd-select
  - sd-tag
version: 1.0.0
---

# Pattern Guide: Filter

Filters allow users to narrow down a set of results by selecting criteria that match their needs. They are a key interaction pattern in search results, product listings, fund finders, and data tables.

## Design Guidelines

### General Principles

Filtering enables users to reduce large sets of data or content by applying specific criteria.

- Reduce large datasets to only what’s relevant to the user
- Support targeted decision-making in content-heavy or data-driven environments
- Enable users to isolate results based on defined attributes (e.g. status, type, date range)
- Allow for comparative exploration and progressive refinement
- Surface advanced options without overwhelming the default experience

### Anatomy

- Filter Category: Labels the group of related filter criteria (e.g. "Asset Class", "Region").
- Filter Values: The interactive controls inside a category — radios, checkboxes, select fields, or tags.
- Show More Filters: A control that expands secondary or less-used filter categories ("Show more filters", "Refine results").
- Active Filters Summary: A list of currently applied filters displayed as tags, each with a remove control.
- Active Filters Indicator: A count badge shown when more than one filter is active — gives users a quick overview without full filter visibility.
- Clear Filter Button: Resets all active filters at once and removes the active filters indicator.

## Choosing a Filter Pattern

### Single-Selection Filters

In a single selection filter, only one attribute can be selected at a time. Users choose a single value from a predefined group of mutually exclusive options.

#### sd-select or sd-combobox

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples

Allows to select one value from a list. This is the recommended single selection method for most filter use cases.

- Saves space and reduces visual noise.
- Facilitates composing denser filter panels.
- Easy for the users to quickly review the selected option.

#### sd-radio-button-group

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples

Allows users to switch between mutually exclusive item groups, such as categories or view options.

- Switch between:
  - Categories (Blog, Lexicon, Fonds)
  - Attributes (Article, Document, Form)
  - Views (List, Details, Grid)
- Select a meaningful default category (e.g.: most visited category)
- Avoid using for lists of more than five items.

#### sd-radio-group

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples

Allows users to select exactly one option from a set of mutually exclusive items within a single category; one option is always preselected, and a valid selection is required.

- Shows all available options upfront, allowing users to easily compare them.
- Use radio groups as filters when an option must be preselected, otherwise use a select field.

### Single-Selection Filters

In multi selection filters, multiple attributes are selectable by the user. Users can select multiple choices from a predefined group of values.

#### sd-select or sd-combobox with checkboxes

Allows users to choose multiple values from a predefined list within a dropdown, particularly effective when space is limited or the option list is long.

- Saves space by collapsing long option lists into a compact dropdown.
- Ideal for dense filter panels where screen real estate is limited.
- Avoid using for lists of 5 or less items in simple filter panels; in those cases, show the options upfront.

#### sd-tag

Allows users to toggle multiple attribute filters on or off, providing quick, lightweight control and immediate visual feedback.

- Provides toggling of multiple attributes directly in the interface, making the selected filters highly visible and improving clarity.
- Best suited for short lists of frequently used or high-value attributes.
- Avoid using tags for option sets larger than seven items, as they lose clarity and effectiveness as controls.
- Don’t use tags in combination with other filters on the same filter panel.

#### sd-checkbox-group

Allows users to select any number of options from a list of independent attributes; no minimum or maximum selection is required.

- Show all available options upfront, allowing users to scan and compare attributes easily.
- Use when users may select any number of items, including none.
- Prefer checkboxes for short option lists; lists with over 5 items should be grouped within an select field.

## Filter Behaviors

For filters there are different methods users can interact within an interface.

### Applying filters

#### Immediate Update

- Filters apply instantly when users change a value. Use when:
  - User is only expected to select one filter.
  - Changes do not significantly impact loading time.
- This is the expected behavior for radio button groups, radio groups and tags.

#### Apply Button Required

- Users select options and confirm via an “Apply” button.
- Use when:
  - Filters have large performance impact.
  - Designing for a Mobile layout.

### Active Filters

#### Placement

- Panel closed or off-canvas | Below the result list header / above the results |
- Panel persistently visible (sidebar) | Inside the filter panel, directly below the filter controls |

#### Presentation

- Display each active filter as a removable tag.
- Keep tag labels concise — omit the category name when it is clear from context.
- Display the active filters indicator (count badge) when more than one filter is active.

---

### Clearing Filters

#### Individual filter

- User deselects directly in the filter control, or removes the active tag.

#### Batch reset

- Show a persistent "Reset filters" control when more than one filter is active. Place it:
  - Next to or below the active filters summary (when panel is closed/off-canvas).
  - Inside the filter panel, near the Apply button (when an Apply button is used).

---

### Filter Disclosure ("Show More Filters")

- Group filters under clearly labelled categories.
- Collapse secondary or rarely-used filters behind a "Show more filters" control.
- The control label should reflect what it reveals (e.g. "Show more filters", "Refine results").

## Related Templates

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
