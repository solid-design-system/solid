---
name: write-component-tests
description: "Write or extend unit tests for a Solid Design System web component. Use for: creating component tests, adding test coverage, writing accessibility tests, testing component behavior, regression tests for bug fixes."
---

# Write Component Tests

## When to Use

- Creating tests for a new component
- Adding test coverage for new properties, events, or behavior
- Writing accessibility tests for component variants
- Writing regression tests for bug fixes (failing test first)

## Test File Location

```
packages/components/src/components/{name}/{name}.test.ts
```

Where `{name}` is the component tag without the `sd-` prefix (e.g., `button` for `sd-button`).

## Running Tests

```sh
# Run all component tests
cd packages/components && pnpm test

# Run tests for a specific component
cd packages/components && pnpm test.single {name}

# Run tests in watch mode
cd packages/components && pnpm test.watch
```

## Testing Conventions

- **Test runner**: Web Test Runner with `@open-wc/testing`
- **Philosophy**: "Test the behavior, not the implementation." Verify components meet expected requirements from the user's perspective. Don't test internal technical details.
- **Mandatory coverage**: Accessibility per variant, default property values, child content rendering
- **Visual regression**: Handled by Chromatic via test stories (see **write-component-stories** skill), not unit tests
- **E2E tests**: Playwright for complex interactions (separate from unit tests)

### What to test
- Default property values
- Accessibility for every variant combination
- User-visible behavior (clicks, focus, form submission)
- Event emission and propagation
- Slot content rendering
- Disabled/loading state behavior
- ARIA attributes

### What NOT to test
- Internal implementation details
- Exact CSS class names
- Internal state management (unless it affects behavior)
- Lit lifecycle methods directly

## Procedure

### Step 0: Read an existing test for reference

Before writing tests, read one existing test file matching the complexity of the target component:
- **Simple component**: read `packages/components/src/components/badge/badge.test.ts`
- **Complex form control**: read `packages/components/src/components/button/button.test.ts`
- **Async events**: read `packages/components/src/components/accordion/accordion.test.ts`
- **Keyboard interaction**: read `packages/components/src/components/select/select.test.ts`

### Step 1: Set up imports

Always use these imports:

```typescript
import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdComponentName from './component-name';
```

Key points:
- **Always** import from `'../../../dist/solid-components'` — this ensures the built bundle is tested, not the source
- Import the component type with `import type` for type-safe fixtures
- Use `sinon` for spies, stubs, and fakes
- Import `waitUntil` only when testing async events

### Step 2: Write the test structure

Use the component tag as the top-level describe label:

```typescript
describe('<sd-component-name>', () => {
  // tests organized in nested describe blocks
});
```

Organize tests in nested `describe` blocks by category. Include these sections as applicable:

#### 1. Accessibility tests (required for every component)

Test accessibility for **every variant combination**:

```typescript
describe('accessibility tests', () => {
  const variants = ['primary', 'secondary', 'tertiary'];

  variants.forEach(variant => {
    it(`should be accessible when variant is "${variant}"`, async () => {
      const el = await fixture<SdButton>(
        html`<sd-button variant="${variant}">Label</sd-button>`
      );
      await expect(el).to.be.accessible();
    });
  });
});
```

#### 2. Default property tests

Verify default values match the component spec:

```typescript
describe('when provided no parameters', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdBadge>(html`<sd-badge>Content</sd-badge>`);
    await expect(el).to.be.accessible();
  });

  it('should have default values set correctly', async () => {
    const el = await fixture<SdBadge>(html`<sd-badge>Content</sd-badge>`);
    expect(el.variant).to.equal('blue');
    expect(el.size).to.equal('lg');
    expect(el.inverted).to.equal(false);
  });

  it('should render the child content', async () => {
    const el = await fixture<SdBadge>(html`<sd-badge>Content</sd-badge>`);
    expect(el.innerText).to.eq('Content');
  });
});
```

#### 3. Property/attribute tests

Test each property's effect on the component:

```typescript
describe('when disabled', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdButton>(
      html`<sd-button disabled>Label</sd-button>`
    );
    await expect(el).to.be.accessible();
  });

  it('should disable the native element', async () => {
    const el = await fixture<SdButton>(
      html`<sd-button disabled>Label</sd-button>`
    );
    expect(el.shadowRoot!.querySelector('button[disabled]')).to.exist;
  });
});
```

#### 4. Event tests

Test that events fire correctly:

```typescript
it('should emit sd-show when calling show()', async () => {
  const el = await fixture<SdAccordion>(
    html`<sd-accordion>Content</sd-accordion>`
  );
  const showHandler = sinon.spy();
  el.addEventListener('sd-show', showHandler);
  el.show();

  await waitUntil(() => showHandler.calledOnce);
  expect(showHandler).to.have.been.calledOnce;
});
```

For events that should NOT fire:

```typescript
it('should not bubble up clicks when disabled', async () => {
  const el = await fixture<SdButton>(
    html`<sd-button disabled>Label</sd-button>`
  );
  const handleClick = sinon.spy();
  el.addEventListener('click', handleClick);
  el.click();

  expect(handleClick).not.to.have.been.called;
});
```

#### 5. Slot tests

Test slot content rendering:

```typescript
it('should render slot content', async () => {
  const el = await fixture<SdComponent>(html`
    <sd-component>
      <span slot="icon-left">Icon</span>
      Label
    </sd-component>
  `);
  const slotContent = el.querySelector('[slot="icon-left"]');
  expect(slotContent).to.exist;
  expect(slotContent!.textContent).to.equal('Icon');
});
```

#### 6. Form interaction tests (for form controls)

```typescript
describe('when submitting a form', () => {
  it('should submit when inside the form', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form action="" method="post">
        <sd-button type="submit">Submit</sd-button>
      </form>
    `);
    const button = form.querySelector<SdButton>('sd-button')!;
    const handleSubmit = sinon.spy((event: SubmitEvent) => event.preventDefault());

    form.addEventListener('submit', handleSubmit);
    button.click();

    expect(handleSubmit).to.have.been.calledOnce;
  });
});
```

#### 7. Shadow DOM queries

Always use `shadowRoot!` with `querySelector` to access internal elements:

```typescript
// Query by part attribute
el.shadowRoot!.querySelector('[part~="base"]')

// Query by tag
el.shadowRoot!.querySelector('button')

// Query by attribute
el.shadowRoot!.querySelector('button[disabled]')
```
