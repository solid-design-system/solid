const TOKENS = {
  'sd-duration': 'duration'
} as const;

const processors: Record<string, (value: string) => string | number> = {
  duration: (value: string): number => parseFloat(value)
};

export const token = (name: string): string | number | null => {
  const [entry, property] = Object.entries(TOKENS).find(([key]) => name.startsWith(key)) || [];
  if (!entry || !property) return null;

  const value = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
  console.log('root =>', document.documentElement);
  console.log(`Token: ${name} => ${value}`);
  return processors[property]?.(value) ?? value;
};
