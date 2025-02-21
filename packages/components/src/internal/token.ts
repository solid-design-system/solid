const TOKENS = {
  duration: 'transition-duration'
} as const;

const processors: Record<string, (value: string) => string | number> = {
  duration: (value: string): number => parseFloat(value.replace('s', '')) * 1000
};

export const token = <T extends keyof typeof TOKENS>(name: string): ReturnType<(typeof processors)[T]> | null => {
  const el = document.createElement('div');
  el.className = name;
  el.style.position = 'absolute';
  el.style.pointerEvents = 'none';
  el.style.visibility = 'hidden';

  const [entry, property] = Object.entries(TOKENS).find(([key]) => name.startsWith(key)) || [];
  if (!entry || !property) return null;

  document.body.appendChild(el);
  const value = window.getComputedStyle(el).getPropertyValue(property);
  document.body.removeChild(el);

  return processors[entry as T]?.(value) ?? value;
};
