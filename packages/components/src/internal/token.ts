const TOKENS = {
  'sd-duration': 'duration'
} as const;

const processors: Record<string, (value: string) => string | number> = {
  duration: (value: string): number => parseFloat(value)
};

export const token = (name: string): string | number | null => {
  const [entry, property] = Object.entries(TOKENS).find(([key]) => name.startsWith(key)) || [];
  if (!entry || !property) return null;

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
  return processors[property]?.(value) ?? value;
};
