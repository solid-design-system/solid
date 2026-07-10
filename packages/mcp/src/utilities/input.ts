const INVALID_SEGMENTS = new Set(['.', '..']);

/** Trim leading/trailing slashes from a slug-like value. */
export const trimSlashes = (value: string): string => value.replace(/^\/+|\/+$/g, '');

/**
 * Validates a path-like slug made of one or multiple segments.
 * Prevents path traversal and null-byte based bypasses.
 */
export const isSafePathSlug = (value: string): boolean => {
  const parts = value.split('/').filter(Boolean);
  return parts.length > 0 && parts.every(part => !INVALID_SEGMENTS.has(part) && !part.includes('\0'));
};

/** Normalizes and validates a user-provided slug. Returns null if invalid. */
export const normalizeSafeSlug = (value: string): string | null => {
  const normalized = trimSlashes(value.trim());
  if (!normalized || !isSafePathSlug(normalized)) {
    return null;
  }
  return normalized;
};
