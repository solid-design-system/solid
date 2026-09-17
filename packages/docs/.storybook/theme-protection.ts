const PROTECTED_THEMES = new Set(['BBBank', 'KidStarter', 'SP', 'VB']);
const ACCESS_COOKIE = 'solid-theme-access';
const CHROMATIC_BUILD = Boolean(
  (globalThis as typeof globalThis & { __SOLID_STORYBOOK_CHROMATIC__?: boolean }).__SOLID_STORYBOOK_CHROMATIC__
);
const THEME_PASSWORD = (globalThis as typeof globalThis & { __SOLID_STORYBOOK_THEME_PASSWORD__?: string })
  .__SOLID_STORYBOOK_THEME_PASSWORD__;

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop()!.split(';').shift() || null : null;
}

export function isProtectedTheme(themeName: string | undefined): boolean {
  return themeName !== undefined && PROTECTED_THEMES.has(themeName);
}

export function hasThemeAccess(themeName: string | undefined): boolean {
  return CHROMATIC_BUILD || !isProtectedTheme(themeName) || getCookie(ACCESS_COOKIE) === 'granted';
}

export function storeThemeAccess(): void {
  const expires = new Date(Date.now() + 365 * 864e5).toUTCString();
  document.cookie = `${ACCESS_COOKIE}=granted; expires=${expires}; path=/; SameSite=Strict`;
}

export function verifyThemePassword(password: string): boolean {
  return THEME_PASSWORD !== undefined && password.trim() === THEME_PASSWORD;
}
