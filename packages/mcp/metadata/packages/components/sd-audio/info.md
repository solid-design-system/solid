## Overview

`<sd-audio>` — Used to play audio files that are part of the page content.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-audio/animated
- sd-audio/inverted
- sd-audio/reverse
- sd-audio/speed
- sd-audio/no-timestamps
- sd-audio/transcript

### Key Properties

- prop.reversedLayout [attr: reversed-layout]: boolean, default=false — Reverses the order of the audio controls and timestamps
- prop.hideTimestamps [attr: hide-timestamps]: boolean, default=false — Hides the timestamps
- prop.animated: boolean, default=false — Enables the wave animation
- prop.inverted: boolean, default=false — Inverts the colors of the component
- prop.speed: number, default=1 — Sets value of the audio element playback rate
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-playback-start: Emitted when the audio playback starts.
- event.sd-playback-end: Emitted when the audio playback ends.
- event.sd-playback-pause: Emitted when the audio playback pauses.
- event.sd-playback-mute: Emitted when the audio is muted.
- event.sd-playback-unmute: Emitted when the audio is unmuted.
- event.sd-playback-speed: Emitted when the playback speed is changed.
- event.sd-transcript-click: Emitted when the transcript button is clicked.

### Slots

- slot.default: The default slot.
- slot.play-icon: The play icon.
- slot.pause-icon: The pause icon.
- slot.transcript: The transcript.

### CSS Parts

- part.base: The component's base wrapper.
- part.audio-controls: The audio controls.
- part.playback-speed: The playback speed.
- part.play-button: The play button.
- part.volume: The volume button.
- part.progress-slider: The audio progress slider.
- part.timestamps: The audio timestamps.

## Guidelines

### Use Cases

- Embed instructional audio to guide users through complex processes or tutorials.
- Promote new products, services, or events with audio content.
- Enable visually impaired users to access content through audio narration.

### Rules

### Behavior

- Avoid autoplaying audio as it can be disruptive.
- Provide controls to allow users to play and pause.
- Use appropriate formats and sizes to optimize loading times and performance.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Provide audio descriptions to ensure all users can access the content.
- Ensure all player controls (play, pause, volume, speed, etc.) are fully operable using only the keyboard.
- Include an audio transcript to support users who are deaf, hard of hearing, or prefer reading at their own pace.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- audio

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
