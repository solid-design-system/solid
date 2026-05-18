## Overview

`<sd-animation>` — Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

## API

### Key Properties

- prop.name: string, default='none' — The name of the built-in animation to use. For custom animations, use the `keyframes` prop.
- prop.play: boolean, default=false — Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
  the animation finishes or gets canceled.
- prop.delay: number, default=0 — The number of milliseconds to delay the start of the animation.
- prop.direction: PlaybackDirection, default='normal' — Determines the direction of playback as well as the behavior when reaching the end of an iteration.
  [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
- prop.duration: number, default=1000 — The number of milliseconds each iteration of the animation takes to complete.
- prop.easing: string, default='linear' — The easing function to use for the animation. This can be a Solid easing function or a custom easing function
  such as `cubic-bezier(0, 1, .76, 1.14)`.
- prop.endDelay [attr: end-delay]: number, default=0 — The number of milliseconds to delay after the active period of an animation sequence.
- prop.fill: FillMode, default='auto' — Sets how the animation applies styles to its target before and after its execution.
- prop.iterations: default=Infinity — The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.
- prop.iterationStart [attr: iteration-start]: number, default=0 — The offset at which to start the animation, usually between 0 (start) and 1 (end).
- prop.keyframes: Keyframe[]|undefined — The keyframes to use for the animation. If this is set, `name` will be ignored.
- prop.playbackRate [attr: playback-rate]: number, default=1 — Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
  to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
  value can be changed without causing the animation to restart.
- prop.currentTime: number — Gets and sets the current animation time.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-cancel: Emitted when the animation is canceled.
- event.sd-finish: Emitted when the animation finishes.
- event.sd-start: Emitted when the animation starts or restarts.

### Slots

- slot.default: The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<sd-animation>` elements.
