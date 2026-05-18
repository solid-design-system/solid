---
name: write-migration-guide
description: "Generate a migration guide from an old UI component to a new sd-* component. Use for: migration documentation, breaking change guides, component replacement docs, helping users migrate between versions."
---

# Write Migration Guide

## When to Use

- A new `sd-*` component replaces an old `ui-*` component from the Component Library
- A breaking change requires users to update their code
- Creating version-to-version migration documentation for a package

## Prerequisites

- The new `sd-*` component is implemented (or at minimum its public API is defined)
- The old component's API is known (attributes, slots, events, methods, CSS variables)
- The caller identifies both old and new component names

## Migration Guide Types

There are two types of migration guides:

| Type | Location | Named by |
|------|----------|----------|
| Component Library migration | `packages/docs/src/stories/docs/migration/` | Old component (e.g., `ui-button.mdx`) |
| Breaking change (version) | `packages/docs/src/stories/packages/{pkg}/Migration/from v{OLD}/` | Follow existing naming convention in that folder |

## Procedure

### Step 0: Read an existing migration guide and the template for reference

Read both:
1. The template: read `templates/migration-guide-template.mdx`
2. An existing migration guide for style reference: read `packages/docs/src/stories/docs/migration/ui-teaser.mdx`

### Step 1: Check — is this a Component Library migration or a breaking change migration?

**If replacing a `ui-*` component** — this is a Component Library migration. Continue to Step 2.

**If making a breaking change to an existing `sd-*` component** — this is a version migration. Skip to Step 5.

### Step 2: Gather the old component's API

Read or request the old `ui-*` component's public API:
- Attributes/properties
- Slots
- CSS variables / CSS custom properties
- Events
- Event listeners
- Methods

If the old component's source is not available, ask the user to provide the API surface or reference the old Component Library Storybook.

### Step 3: Gather the new component's API

Read the new `sd-*` component source at `packages/components/src/components/{name}/{name}.ts` and extract:
- Properties (from `@property()` decorators)
- Slots (from `@slot` JSDoc tags)
- CSS custom properties (from `@cssproperty` JSDoc tags)
- CSS parts (from `@csspart` JSDoc tags)
- Events (from `@event` JSDoc tags)
- Public methods

### Step 4: Create the Component Library migration guide

Create a file at `packages/docs/src/stories/docs/migration/{old-component-name}.mdx`.

Structure the file using the template from `templates/migration-guide-template.mdx`:

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Docs/Migration/{old-component-name}" />

# Migration Guide: From `{old-component-name}` to `{new-component-name}`

The new `{new-component-name}` is designed to replace the `{old-component-name}`. [Brief description of the key architectural change, e.g., "Instead of mainly providing content via attributes, the `{new-component-name}` component uses slots to allow for more flexibility and customization."]
```

Then fill in these sections, **omitting any section that has no changes**:

#### Slots
- **New Slots** — each with a heading and description
- **Updated Slots** — each with a heading explaining what changed
- **Removed Slots** — numbered list, each with brief reasoning for removal

Use `<hr />` between major sections.

#### Attributes
- **New Attributes** — each with heading and description (include type, default, behavior)
- **Updated Attributes** — each with heading explaining what changed
- **Removed Attributes** — numbered list with reasoning

#### CSS Variables
- **New CSS Variables** — each with heading and description
- **Updated CSS Variables** — each with heading explaining the change
- **Removed CSS Variables** — numbered list with reasoning

#### Events
- **New Events** — each with heading and description
- **Updated Events** — each with heading explaining what changed
- **Removed Events** — numbered list with reasoning

#### Event Listeners
- **New Event Listeners** — each with heading and description
- **Updated Event Listeners** — each with heading explaining what changed
- **Removed Event Listeners** — numbered list with reasoning

#### Methods
- **New Methods** — each with heading and description
- **Updated Methods** — each with heading explaining what changed
- **Removed Methods** — numbered list with reasoning

#### Additional Changes (optional)
Add any other migration notes that don't fit the sections above (e.g., behavioral differences, accessibility improvements, CSS class changes).

**Done** — skip Step 5.

### Step 5: Create a breaking change migration guide

For version-to-version migration within an `sd-*` package:

1. Identify the package and old version
2. Create a file at `packages/docs/src/stories/packages/{package-name}/Migration/from v{old-version}/`
3. Follow the naming convention and writing style of existing guides in that folder — read one for reference

Document:
- What changed and why
- Before/after code examples
- Any automated migration steps (if applicable)
