---
name: write-overview-pages
description: "Create Storybook overview MDX documentation pages for a Solid Design System component or style. Use for: Writing overview pages, component/style documentation pages, MDX pages with usage guidelines and accessibility information."
---

# Write Overview Pages

## When to Use

- Creating or updating the overview MDX documentation page for a component or style
- Writing usage guidelines, common use cases, and accessibility information

## File Locations

| File | Path | Purpose |
|------|------|---------|
| Component overview MDX | `packages/docs/src/stories/components/{name}.mdx` | Component documentation page |
| Style overview MDX | `packages/docs/src/stories/styles/{name}.mdx` | Style documentation page |

Where `{name}` is the tag without the `sd-` prefix (e.g., `button` for `sd-button`).

## Reference Examples

Before writing an overview page, read one existing file:

**Component overview:**
- read `packages/docs/src/stories/components/badge.mdx`

**Style overview:**
- read `packages/docs/src/stories/styles/mark.mdx`

## Page Template

Use this template for both components and styles. Inline comments mark where they differ.

```mdx
import { Meta, Canvas } from '@storybook/addon-docs/blocks';
import { OverviewFormatter } from '../../Overview.jsx';

<!-- Import variable: use SdComponentStories for components, SdStyleStories for styles -->
import * as SdComponentStories from './{name}.stories';

export const links = {
  <!-- For components: 'components-sd-{name}--docs' | For styles: 'styles-sd-{name}--docs' -->
  'storybook-docs': './?path=/docs/components-sd-{name}--docs',
  'figma-library': '{FIGMA_LIBRARY_URL}',  <!-- Use '' if not available -->
  'figma-docs': '{FIGMA_DOCS_URL}'         <!-- Use '' if not available -->
};

export const content = `
# {Name}

Used to {description starting with a verb}.

<DefaultStory />

<DocumentationLinks links=${JSON.stringify(links, null, 2)} />

#### Related Components

[sd-related-component](./?path=/docs/components-sd-related-component--docs)

#### Related Templates

- [Template Name](./?path=/docs/templates-template-name--docs)

### Common Use Cases

- Use case 1
- Use case 2

### Usage Guidelines

#### Guideline Sub-heading

- Guideline details

### Accessibility Information

- Accessibility details

Visit <sd-link href="https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=38262-58412&t=1qhfYXrbNhSCYCzZ-4" target="_blank">Solid DS Best Practices for WCAG Compliance</sd-link> to learn more about our accessibility standards.

<!-- Optional: only include if there are known browser-specific issues -->
<sd-notification variant="warning" open>**Known browser issues:** Description of the issue.</sd-notification>`;

<!-- For components: 'Components/sd-{name}/Overview' | For styles: 'Styles/sd-{name}/Overview' -->
<Meta title="Components/sd-{name}/Overview" />

<OverviewFormatter story={SdComponentStories.Default}>{content}</OverviewFormatter>
```

### Differences between component and style

Only three lines differ:

1. **Import variable**: `SdComponentStories` vs `SdStyleStories`
2. **`storybook-docs` link path**: `components-sd-{name}--docs` vs `styles-sd-{name}--docs`
3. **`<Meta>` title prefix**: `Components/sd-{name}/Overview` vs `Styles/sd-{name}/Overview`

## How to Write Overview Pages

### Title and Description

- The `#` title is the component/style name **without** the `sd-` prefix, in Title Case (e.g., `# Badge`, `# Headline`, `# Mark`)
- Description always starts with "Used to ..." followed by a verb phrase
- Description should be one or two sentences. For complex components, may include a brief elaboration of key behavior or modes.
- If the component has slots that are essential to understand before seeing the demo, add brief slot usage bullets between the description and `<DefaultStory />` (e.g., explaining which slot holds the headline, which holds the main content, and which holds action buttons)

### Related Components / Templates

- Link to related components: `./?path=/docs/components-sd-{name}--docs`
- Link to related styles: `./?path=/docs/styles-sd-{name}--docs`
- Link to related templates: `./?path=/docs/templates-{name}--docs`
- Use anchor hashes for links to sub-sections: `./?path=/docs/templates-tab-group--docs#tab%20group%20with%20badge`
- Single related item: use a plain link. Multiple items: use a bullet list.
- **Remove entire sections** (`#### Related Components` or `#### Related Templates`) if none apply
- When mentioning a related component/style within other sections (Use Cases, Usage Guidelines), link to it inline using the same Storybook path format

### Common Use Cases

- List 2–5 concrete use cases as bullet points
- Start each with a verb (e.g., "Indicate the number of...", "Display the number of...", "Highlight key actions...")
- Or start with "To ..." (e.g., "To highlight text sections in a headline")
- If the component has distinct usage modes (e.g., inline vs overlay, static vs interactive), split into `####` sub-headings — each with a prose paragraph explaining the mode followed by bullet points listing specific use cases

### Usage Guidelines

- Group under `####` sub-headings based on what aspects need guidance
- Choose sub-headings that match the component's concerns. Common examples:
  - **Components**: Content, Function, Action Labels, Icons, Slots, Behavior, Placement and Responsiveness, Background
  - **Styles**: Styling, Hierarchy and Sizing, Color Variants, Background, Layout
- Use actionable bullet points — tell the user what to do and what not to do
- Reference specific attribute values, class names, or constraints where helpful
- When referencing another component/style, link to it inline: `[sd-{name}](./?path=/docs/components-sd-{name}--docs)`
- Inside the content template string, markdown backticks don't render as code — use `<code>` tags for inline HTML element references (e.g., `<code>&lt;h2&gt;</code>`)

### Accessibility Information

- Include relevant WCAG guidance specific to this component/style
- Reference color contrast requirements, font size minimums, ARIA attributes
- Mention screen reader behavior if applicable
- If accessibility guidance covers distinct sub-topics, use `####` sub-headings to separate them
- May include `<sd-notification variant="warning" open>` blocks inline for important accessibility caveats that should stand out visually
- Always end with the standard WCAG compliance link (already in template)

### Optional: Known Browser Issues

- Add an `<sd-notification variant="warning" open>` block **after** the WCAG link, inside the content string
- Start with `**Known browser issues:**` in bold
- Only include if there are documented browser-specific problems

### Content Depth

- Match content depth to component complexity
- Simple styles (e.g., text highlighting, basic typography): fewer guidelines, 1–2 sub-headings per section
- Complex components (e.g., interactive overlays, form controls, multi-slot containers): detailed sections with multiple sub-headings and thorough accessibility guidance

### Content Sources

When writing content, source information from:
1. The GitHub issue specification (if implementing from an issue)
2. Figma component documentation (linked in `figma-docs`)
3. Existing component/style implementation (API, attributes, slots)
4. Ask the user if critical information is unclear

## Checklist

Before finishing, verify:

- [ ] Title is the component/style name without `sd-` prefix, in Title Case
- [ ] Description starts with "Used to ..."
- [ ] `<Meta>` title matches the correct section (`Components/` or `Styles/`)
- [ ] `storybook-docs` link uses the correct path prefix
- [ ] `<DefaultStory />` is included to embed the interactive default story
- [ ] `<DocumentationLinks>` contains available Figma links (empty string `''` if not available)
- [ ] Related Components/Templates use correct relative Storybook link format
- [ ] Unused Related sections are removed entirely
- [ ] Common Use Cases are concrete and start with a verb
- [ ] Usage Guidelines are grouped under `####` sub-headings
- [ ] Accessibility section is present with relevant guidance
- [ ] WCAG compliance link is included at the end of the accessibility section
- [ ] Known browser issues use `<sd-notification>` format (if applicable)
