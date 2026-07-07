## Overview

`<sd-menu>` — Used as a list of choices to the user, such as a set of actions or functions.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-menu, example: icon
- component: sd-menu, example: checkmark
- component: sd-menu, example: submenu
- component: sd-menu, example: grouping
- component: sd-menu, example: disabled

### Key Properties

- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-select: Emitted when a menu item is selected.

### Slots

- slot.default: The menu's content.

## Guidelines

### Use Cases

- Navigate between different sections or pages.
- Access various functions or features quickly.
- Switch between user account settings or preferences.
- Provide shortcuts for frequently used tasks.

### Rules

### Labels and Value Display

- Use clear, descriptive labels to ensure users know what to expect.
- Use icons alongside text for better visual identification of actions.
- Avoid overwhelming users with too many menu items. Keep it concise and focused.

### Structure and Organization

- Organize menu items in a logical, hierarchical order to enhance navigation.
- Prioritize frequently used functions at the top of the menu for quicker access.
- Don’t use multiple menus with similar content on the same screen. Keep the navigation consistent and clear.

### Behavior

- Ensure the menu is easy to access and appears consistently across the platform.
- Provide visual feedback (e.g., hover, active state) to indicate interactivity.
- Ensure the menu is responsive and adapts well to different screen sizes and devices.

### Accessibility

- Keyboard Navigation: Ensure the menu can be opened, navigated, and closed using keyboard shortcuts (e.g., arrow keys to move between items, Enter to select, Esc to close).
- Screen Reader Compatibility: Use appropriate ARIA roles, such as role="menu" for the menu container, role="menuitem" for each item, and aria-haspopup="true" for any submenu trigger. Provide descriptive, concise labels for each menu item.
- Focus Management: Ensure that focus is automatically directed to the first menu item when the menu is opened. When the menu is closed, focus should return to the element that triggered the menu (e.g., button or link).
- Visible Focus Indicators: Ensure all interactive menu items have visible focus states for keyboard and screen reader users. This could be through a color change, outline, or other visual indicators.
- Limit Nested Menus: Avoid deep nesting of menus. Restrict the depth of nested menus to improve usability for screen readers and keyboard navigation.
  Avoid Truncated Labels: Ensure that menu item labels are fully visible and not truncated. If the text is too long, consider using ellipses (...) and providing a tooltip or accessible description to display the full label.
- Accessible Shortcuts: If the menu includes keyboard shortcuts or accelerators, ensure these are clearly communicated in the UI (e.g., with tooltips or labels like “Ctrl + S” for save) and accessible to screen readers.
- Descriptive State Announcements: For dynamic menu behaviors (e.g., opening/closing or item selection), ensure that screen readers announce changes in state, such as "Menu opened" or "Option selected." Use ARIA live regions or alerts as needed.
