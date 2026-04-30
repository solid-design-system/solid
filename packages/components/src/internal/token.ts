import { cssVar, parseDuration } from './animate';
import type SolidElement from './solid-element';

const tokenProcessors: Record<string, (value: string) => string | number> = {
  'sd-duration': (value: string): number => parseDuration(value)
};

/** Retrieves the value of a css variable token from a SolidElement. */
export function token<T>(el: SolidElement, name: string, fallback: T): T {
  const value = cssVar(`var(${name})`, el);

  if (value === null) {
    return fallback;
  }

  const processor = Object.keys(tokenProcessors).find(t => name.startsWith(t));
  return (tokenProcessors[processor ?? name]?.(value) as T) ?? (value as T) ?? fallback;
}
