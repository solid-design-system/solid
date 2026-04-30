---
name: implement-bugfix
description: "Implement a bug fix for an existing Solid Design System component using TDD. Use for: fixing component bugs, regression fixes, writing failing tests first, patching component behavior."
---

# Implement Bugfix

## When to Use

- Fixing a bug in an existing `sd-*` web component
- Implementing a fix described in a Bugfix issue (title starts with `fix:`)
- Writing a regression test for a reported bug
- Patching incorrect component behavior, styling, or accessibility

## Prerequisites

- The bug issue has been read and parsed (via the **read-issue-from-github** skill or provided directly by the caller)
- The parsed issue data includes: current behavior, expected behavior, steps to reproduce
- The affected component has been identified (e.g., `sd-button` → component name is `button`)

## Procedure

### Step 0: Read the affected component and its test file for reference

Read both files to understand the current implementation and test patterns:

1. Read `packages/components/src/components/{name}/{name}.ts` — the component source
2. Read `packages/components/src/components/{name}/{name}.test.ts` — the existing tests

Where `{name}` is the component tag without the `sd-` prefix (e.g., `button` for `sd-button`).

If the issue references a specific area (a slot, property, event, or CSS part), focus on that area first.

### Step 1: Understand the bug

From the parsed issue data, identify:

- **Current behavior** — what is happening now (the bug)
- **Expected behavior** — what should happen instead
- **Steps to reproduce** — the sequence that triggers the bug
- **Technical Information** — any additional context (browser, version, component version)

Determine the root cause category:

| Category | Signals |
|----------|---------|
| Rendering | Wrong HTML output, missing elements, incorrect structure |
| Styling | Wrong colors, spacing, layout, responsive behavior |
| Event handling | Events not firing, wrong event data, missing propagation |
| Property/attribute | Property not reflected, wrong default, type mismatch |
| Accessibility | Missing ARIA, broken keyboard nav, screen reader issues |
| Form behavior | Validation, submission, value not updating |

### Step 2: Write a failing test first (TDD)

Create a regression test that captures the bug. It must **fail** with the current code and **pass** after the fix.

Add the test to the existing test file at `packages/components/src/components/{name}/{name}.test.ts`.

#### Test file conventions

Use the same imports as the existing test file. The standard pattern:

```typescript
import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdComponentName from './component-name';
```

Key rules:
- Always import from `'../../../dist/solid-components'` — tests run against the built bundle
- Import the component type with `import type` for type-safe fixtures
- Use `sinon` for spies, stubs, and fakes
- Import `waitUntil` only when testing async behavior

#### Place the regression test

Add to an existing `describe('regression tests', ...)` block if one exists. Otherwise, create one at the end of the file:

```typescript
describe('regression tests', () => {
  it('should [expected behavior] when [condition] (fixes #ISSUE_NUMBER)', async () => {
    // Arrange: set up the component in the state from "Steps to reproduce"
    const el = await fixture<SdComponentName>(html`...`);

    // Act: perform the action that triggers the bug

    // Assert: verify the expected behavior
  });
});
```

Include the issue number in the test description for traceability.

#### Confirm the test fails

```sh
cd packages/components && pnpm test.single {name}
```

The test should **fail** — confirming it correctly captures the bug.

### Step 3: Fix the component code

Edit `packages/components/src/components/{name}/{name}.ts` to fix the root cause.

#### Component code conventions

- **CSS**: Use Tailwind classes via `@apply`. Do NOT use arbitrary values like `mt-[var(--spacing-xxl)]` in `@apply` — add custom values as plain CSS outside `@apply`
- **Properties**: Reflect to attributes (`reflect: true`) unless they are rich data (Array/Object) or frequently updated
- **Imports**: Use `import { customElement } from '../../internal/register-custom-element'` — never Lit's built-in `@customElement`
- **Component imports**: Use direct paths (`import '../icon/icon'`), add `@dependency` JSDoc tag
- **Internal state**: Mark with `/** @internal */` and `@state()`
- **Accessibility**: Maintain or improve ARIA attributes, keyboard navigation, semantic HTML

Keep the fix **minimal** — only change what is necessary to resolve the bug. Do not refactor surrounding code.

### Step 4: Verify the fix

Run the regression test to confirm it passes:

```sh
cd packages/components && pnpm test.single {name}
```

If the test still fails, revisit the fix in Step 3. If it passes, run the full component test suite to check for regressions:

```sh
cd packages/components && pnpm test.single {name}
```

All existing tests must continue to pass.

### Step 5: Check — is this a visual change?

Determine whether the fix alters the component's visual appearance (layout, colors, spacing, borders, hover/focus states).

**If NOT a visual change** — the fix is complete. Stop here.

**If a visual change** — the Chromatic test stories may need updating:

1. Read `packages/docs/src/stories/components/{name}.test.stories.ts`
2. Check whether existing test stories already cover the corrected visual state
3. If the fixed state is not captured, add a test story that renders the corrected visual

Do NOT modify documentation stories (`{name}.stories.ts`) unless the fix changes documented behavior (e.g., a property's described default was wrong).
