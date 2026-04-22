## Overview

`<sd-dropdown>` — Dropdowns expose additional content that "drops down" in a panel.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-dropdown/open
- sd-dropdown/rounded
- sd-dropdown/placement
- sd-dropdown/stay-open
- sd-dropdown/disabled
- sd-dropdown/distance
- sd-dropdown/skidding
- sd-dropdown/no-auto-size
- sd-dropdown/no-flip

### Key Properties

- prop.open: boolean, default=false — Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
  can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
- prop.rounded: boolean, default=false — Indicates whether or not the dropdown should be styled with rounded corners.
- prop.placement: |'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end', default='bottom-start' — The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
  inside of the viewport.
- prop.disabled: boolean, default=false — Disables the dropdown so the panel will not open.
- prop.stayOpenOnSelect [attr: stay-open-on-select]: boolean, default=false — By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
  dropdowns that allow for multiple interactions.
- prop.distance: number, default=0 — The distance in pixels from which to offset the panel away from its trigger. This defaults to `0` for `rounded=false` and to a minimum of `1` for `rounded=true`.
- prop.skidding: number, default=0 — The distance in pixels from which to offset the panel along its trigger.
- prop.noAutoSize [attr: no-auto-size]: boolean, default=false — Indicates whether or not the dropdown should automatically resize its content's width/height regarding the available space on screen.
- prop.noFlip [attr: no-flip]: boolean, default=false — When set to true, the placement of the dropdown will not flip to the opposite site to keep it in view.
- prop.hoist: boolean, default=false — Enable this option to prevent the panel from being clipped when the component is placed inside a container with
  `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the dropdown opens.
- event.sd-after-show: Emitted after the dropdown opens and all animations are complete.
- event.sd-hide: Emitted when the dropdown closes.
- event.sd-after-hide: Emitted after the dropdown closes and all animations are complete.

### Slots

- slot.default: The dropdown's main content.
- slot.trigger: The dropdown's trigger, usually a `<sd-button>` element.

### CSS Parts

- part.base: The component's base wrapper.
- part.base\_\_popup: The popup's exported `popup` part. Use this to target the dropdowns' popup container.
- part.trigger: The container that wraps the trigger.
- part.panel: The panel that gets shown when the dropdown is open.

## Guidelines

### Use Cases

- Provide a list of items in a compact space.
- Display additional options or settings related to a specific item.
- Enable navigation through different sections or categories.

### Rules

### Behavior

- Avoid hiding sets of less than 4 items in dropdowns.
- Refrain from nesting dropdowns within each other. If nesting is strictly necessary, limit the menu to two layers to prevent complex operation and cognitive load.
- Keep the panel near its trigger so users understand its context.

### Triggers

- Maintain consistent styling for dropdown triggers placed at the same level or in the same group; i.e., if a trigger has both text and icon, other triggers on the same level or group should also display text and icon.
- Avoid truncating trigger labels if possible.

### Panel Items

- Group related panel items to make them easier to find, especially if there are many. Use a group label and [sd-divider](./?path=/docs/components-sd-divider--docs) to separate them visually.

### Accessibility

- Ensure that when the menu is triggered via keyboard, the first item receives focus.

### Related Templates

- breadcrumb
- dropdown
- header-navigation
- menu

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
