## Overview

`<sd-tab-group>` — Used to organise content into a container that shows one section at a time.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-tab-group, example: activation
- component: sd-tab-group, example: scrollable

### Key Properties

- prop.activation: 'auto'|'manual', default='auto' — When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
  manual, the tab will receive focus but will not show until the user presses spacebar or enter.

### Events

- event.sd-tab-show: Emitted when a tab is shown.
- event.sd-tab-hide: Emitted when a tab is hidden.

### Slots

- slot.default: Used for grouping tab panels in the tab group. Must be `<sd-tab-panel>` elements.
- slot.nav: Used for grouping tabs in the tab group. Must be `<sd-tab>` elements.

### CSS Parts

- part.base: The component's base wrapper.
- part.nav: The tab group's navigation container where tabs are slotted in.
- part.scroll-container: The container that wraps the tabs and active-tab-indicator.
- part.tabs: The container that wraps the tabs.
- part.separation: The line that separates tabs from panels.
- part.body: The tab group's body where tab panels are slotted in.
- part.scroll-button--start: The starting scroll button.
- part.scroll-button--end: The ending scroll button.
- part.scroll-button__base: The scroll button's exported `base` part.

## Guidelines

### Use Cases

- Organize content into different sections, allowing users to switch between them without leaving the page.
- Implement in dashboards where users need to access different data views or widgets.
- Group settings or configuration options into categories for easier navigation.
- Display different aspects of a product, such as description, reviews, and specifications.
- Arrange user profile information into sections like personal details, activity, and settings.

### Rules

### Content

- Choose labels that are concise and use no more than two words.
- Ensure the first tab is the most relevant for the user.
- Place related tabs next to each other for logical grouping.
- Avoid overloading each tab’s content with too much information; keep it manageable and focused.
- Avoid using tabs for content that needs to be read in a specific order; use [sd-step-group](./?path=/docs/components-sd-step-group--docs) instead.

### Behavior

- Maintain a consistent tab order across different pages or sections to reduce confusion and enhance user familiarity.
- Limit the number of tabs (typically no more than six) to avoid overwhelming users; for more options, consider using side navigation.
- Do not nest tabs within other tab containers.

### Tab Panel

- Use [sd-tab-panel](./?path=/docs/components-sd-tab-panel--docs) optionally when applying the "default" tab group variant.
- When applying the "container" tab group variant, [sd-tab-panel](./?path=/docs/components-sd-tab-panel--docs) is mandatory.

### Styling

- Bold labels if desired, keeping this decision consistent across the group.
- Customize to suit user requirements by changing label alignment or deleting the separator between group and content.

### Background

- Use background options of white, neutral-100, or primary-100.

### Accessibility

- Provide a clear label for the tab group (e.g., via aria-label or aria-labelledby).
- The tab group takes a single tabstop, then focus moves to the first interactive element in the tab panel, or the tab panel if there is none. Arrow keys should be used to move between tabs.
- Use only for non-critical information. Hiding content can become a potential barrier, making it more challenging for users to access information.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.
