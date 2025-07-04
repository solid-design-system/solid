export const numericSort = (a: number, b: number): number => a - b;

/**
 * Check if two numeric array differ
 * @param a The first array
 * @param b The second array
 * @returns True if the arrays differ, false otherwise
 */
export const arraysDiffer = (a: readonly number[], b: readonly number[]): boolean => {
  if (a.length !== b.length) return true;

  // As the sort order is not guaranteed, we need to sort the arrays before comparing
  const sortedA = a.slice().sort(numericSort);
  const sortedB = b.slice().sort(numericSort);
  for (let i = 0; i < sortedA.length; i += 1) {
    if (sortedA[i] !== sortedB[i]) return true;
  }
  return false;
};

export const getNormalizedValueFromClientX = (baseDiv: HTMLElement, x: number): number => {
  const bounds = baseDiv.getBoundingClientRect();
  const size = bounds.width;
  if (size <= 0) return 0;

  let nextX = x;

  nextX -= bounds.left;
  if (nextX <= 0) return 0;
  if (nextX >= size) return 1;
  nextX /= size;
  return nextX;
};
