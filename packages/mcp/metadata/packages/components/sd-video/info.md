## Overview

`<sd-video>` — Used to wrap external video elements (e. g. from Moving Image or bare <video>-Tags) and provide some basic styling for Union Investment.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-video/video-element-with-poster-slot
- sd-video/playing

### Key Properties

- prop.playing: boolean, default=false — Set to `true` to hide the play icon.
- prop.isBelowBreakpoint: boolean, default=false — Reactive property to trigger breakpoint re-renders.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-play: Event emitted when clicking the `play-icon`. Listen for this event and use it to play the wrapped video.

### Slots

- slot.default: The default slot used to pass a video player element.
- slot.play-icon: The video's play icon.
- slot.poster: Specifies an image to be shown before initial play of the wrapped video. Acts like the `poster` attribute on the native video tag.

### CSS Parts

- part.base: The component's base wrapper.
- part.play-button: The `<button>` element wrapper around the play-icon slot (full screen to field all click events).
- part.play-button-bg: The `<div>` element wrapper around the play-button that defines the circular background.
- part.poster-wrapper: The `<div>` element wrapper around the poster slot.

## Guidelines

### Use Cases

- Promote new products, services, or events.
- Embed instructional content to guide users through complex processes or tutorials.
- Display educational clips in e-learning applications.

### Rules

### Content

- Include a description of the content.
- Use the “poster” slot to display a descriptive image before playback, giving users a preview of the content.
- Use the “&--copyright” property to display a copyright.

### Behavior and Interaction

- Provide controls to allow users to play and pause.
- Avoid autoplaying content with sound, as it can be disruptive; if autoplay is necessary, consider muting the audio.
- Ensure users have control over playback to prevent unexpected starts.

### Performance and Loading

- Use appropriate formats and compress video files without significant quality loss to optimize loading times and performance.
- Limit the number of media items on a single page to prevent slowing down page load times.

### Accessibility

- Disable or limit autoplay features. Unsolicited audio can disorient or overwhelm users, particularly screen reader users.
- Provide captions or subtitles for video content to support users who are deaf or hard of hearing.
- Offer a transcript (text version) if the video contains spoken dialogue or other critical audio elements.
- Make status announcements (e.g., “Video paused,” “Video started”) if needed, via aria-live or a similar approach.

### Related Templates

- video

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
