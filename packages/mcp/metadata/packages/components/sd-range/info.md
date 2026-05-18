## Overview

`<sd-range>` — Used to allow users to select a single or multiple values within a defined range using a slider.

## API

### Key Properties

- prop.tooltipFormatter: (value: number) => string — A function used to format the tooltip's value.
  The value of the thumb is passed as the only argument.
  The function should return a string to display in the tooltip.
- prop.name: string, default='' — The name of the range, submitted as a name/value pair with form data.
- prop.label: string, default='' — The range's label. If you need to display HTML, use the `label` slot instead.
- prop.helpText [attr: help-text]: string, default='' — The range's help text. If you need to display HTML, use the help-text slot instead.
- prop.min: number, default=0 — The minimum acceptable value of the range.
- prop.max: number, default=100 — The maximum acceptable value of the range.
- prop.step: number, default=1 — The interval at which the range will increase and decrease.
- prop.disabled: boolean, default=false — Disables the range.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Disables the range visually.
- prop.noTrackBar [attr: no-track-bar]: boolean, default=false — Disables the active track bar.
- prop.tooltip: |'on-interaction'|'hidden'|'always-visible', default='on-interaction' — Defines the thumbs tooltip behaviour.
- prop.defaultValue: string, default='' — The default value of the form control. Primarily used for resetting the form control.
- prop.value: — The current values of the input (in ascending order) as a string of space separated values
- prop.valueAsArray: — Gets or sets the current values of the range as an array of numbers
- prop.validity: — Gets the validity state object
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the control loses focus.
- event.sd-change: Emitted when an alteration to the control's value is committed by the user.
- event.sd-focus: Emitted when the control gains focus.
- event.sd-input: Emitted when the control receives input.
- event.sd-move: Emitted when the user moves a thumb, either via touch or keyboard. Use `Event.preventDefault()` to prevent movement.

### Slots

- slot.default: The default slot.
- slot.help-text: Text that describes how to use the range. Alternatively, you can use the `help-text` attribute.
- slot.label: The range's label. Alternatively, you can use the `label` attribute.
- slot.scale-ticks: Used to display tick marks at specific intervals along the range.

### CSS Parts

- part.form-control: The form control that wraps the label, input, and help text.
- part.form-control-label: The label's wrapper.
- part.form-control-help-text: The help text's wrapper.
- part.base: The component's base wrapper.
- part.input-wrapper: The container that wraps the input track and ticks.
- part.track-wrapper: The wrapper for the track.
- part.track: The inactive track.
- part.active-track: The active track.
- part.track-click-helper: The element that increases the track clickable area.
- part.thumb: The thumb(s) that the user can drag to change the range.
- part.scale-ticks: The container that wraps the tick marks.

## Guidelines

### Use Cases

- Adjust settings within a defined range (e.g., volume, brightness).
- Filter results by specifying a price range or product parameters.
- Select time intervals for scheduling or reminder tasks.
- Set minimum and maximum inputs (e.g., age, quantity, distance).
- Visualize progress by assigning milestones within a larger goal or process.

### Rules

### Labels and Value Display

- Provide clear labels or tooltips indicating the current value or range.
- Pair the slider with text labels or numeric indicators for precise adjustments.
- Avoid relying solely on color or visuals; add a text representation for clarity.

### Range Definition

- Choose realistic minimum and maximum values for the intended use case.
- Avoid extremely large intervals (e.g., 1 to 1,000,000) unless necessary, and label them thoroughly.
- Use appropriate step sizes for fine control (e.g., increments of 5 or 10 for a price slider).
- Enable two-handle sliders (min/max) if the scenario requires independent adjustments.

### Context

- Position the range component in an uncluttered area to facilitate easy interaction.
- Reserve the component for relevant, contextually meaningful ranges (e.g., price filters, time spans).

### Background

- Use light background options like white, neutral-100 or primary-100.

### Accessibility

- Always provide a label for the range so that screenreaders correctly announce the component.
- Provide alternative input methods like numeric input fields or a stepper, allowing users who struggle with dragging to manually set values.

### Related Templates

- range

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-range-tick: Ticks visually improve positioning on range sliders.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
