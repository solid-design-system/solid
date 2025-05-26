/**
 * Animates an element using keyframes. Returns a promise that resolves after the animation completes or gets canceled.
 */
interface ExtendedKeyframeAnimationOptions extends KeyframeAnimationOptions {
  reducedMotion?: 'allow';
}

export function cssVar(expression: string, el: HTMLElement): string | null {
  const match = /var\((--[\w-]+)(?:,\s*([^)]+))?\)/.exec(expression);
  if (!match) return expression;

  const [, variable, fallback] = match;
  const value = getComputedStyle(el).getPropertyValue(variable).trim();
  return value || fallback || null;
}

export function animateTo(el: HTMLElement, keyframes: Keyframe[], options?: ExtendedKeyframeAnimationOptions) {
  return new Promise(resolve => {
    if (options?.duration === Infinity) {
      throw new Error('Promise-based animations must be finite.');
    }

    const reducedMotion = prefersReducedMotion();
    const duration =
      typeof options!.duration === 'string' ? parseDuration(cssVar(options!.duration, el) ?? '') : options!.duration;
    const animation = el.animate(keyframes, {
      ...options,
      duration: reducedMotion && options?.reducedMotion !== 'allow' ? 0 : duration
    });

    animation.addEventListener('cancel', resolve, { once: true });
    animation.addEventListener('finish', resolve, { once: true });
  });
}

/** Parses a CSS duration and returns the number of milliseconds. */
export function parseDuration(delay: number | string) {
  delay = delay.toString().toLowerCase();

  if (delay.indexOf('ms') > -1) {
    return parseFloat(delay);
  }

  if (delay.indexOf('s') > -1) {
    return parseFloat(delay) * 1000;
  }

  return parseFloat(delay);
}

/** Tells if the user has enabled the "reduced motion" setting in their browser or OS. */
export function prefersReducedMotion() {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  return query.matches;
}

/**
 * Stops all active animations on the target element. Returns a promise that resolves after all animations are canceled.
 */
export function stopAnimations(el: HTMLElement) {
  return Promise.all(
    el.getAnimations().map(animation => {
      return new Promise(resolve => {
        const handleAnimationEvent = requestAnimationFrame(resolve);

        animation.addEventListener('cancel', () => handleAnimationEvent, { once: true });
        animation.addEventListener('finish', () => handleAnimationEvent, { once: true });
        animation.cancel();
      });
    })
  );
}

/**
 * We can't animate `height: auto`, but we can calculate the height and shim keyframes by replacing it with the
 * element's scrollHeight before the animation.
 */
export function shimKeyframesHeightAuto(keyframes: Keyframe[], calculatedHeight: number) {
  return keyframes.map(keyframe => ({
    ...keyframe,
    height: keyframe.height === 'auto' ? `${calculatedHeight}px` : keyframe.height
  }));
}
