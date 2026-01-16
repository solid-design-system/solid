// .storybook/manager.ts

import { addons } from 'storybook/manager-api';
import solidTheme from './solid-theme';

addons.setConfig({
  theme: solidTheme,
  sidebar: {
    showRoots: true
  }
});

// Theme Protection System
const PROTECTED_THEMES: Record<string, { id: string; password: string }> = {
  'VB Ultra': { id: 'sd-theme-vb', password: '381a5cca78c0e498082cf82a5e20c95f' },
  'Kid Starter': { id: 'sd-theme-kid', password: 'd7be651c2073ccb8a9897f1bc8bfa2cb7811f693' }
};

// Utility: SHA-256 hash function
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Cookie utilities
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(';').shift() || null;
  return null;
}

function setCookie(name: string, value: string, days = 365): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`;
}

// Get current theme from URL
function getCurrentTheme(): string | null {
  const params = new URLSearchParams(window.location.search);
  const globals = params.get('globals');
  if (!globals) return null;

  const themeMatch = globals.match(/theme:([^&;]+)/);
  if (!themeMatch) return null;

  const themeName = decodeURIComponent(themeMatch[1].replace(/\+/g, ' '));
  return themeName;
}

// Check if theme is protected
function isProtectedTheme(themeName: string): boolean {
  return Object.keys(PROTECTED_THEMES).includes(themeName);
}

// Verify cookie for theme
async function hasValidCookie(themeName: string): Promise<boolean> {
  const themeConfig = PROTECTED_THEMES[themeName];
  if (!themeConfig) return false;

  const cookieName = `solid-theme-${themeConfig.id}`;
  const storedHash = getCookie(cookieName);
  if (!storedHash) return false;

  // Expected hash: hash of the password (double hashed for storage)
  const passwordHash = await sha256(themeConfig.password);
  const doubleHash = await sha256(passwordHash);

  return storedHash === doubleHash;
}

// Store valid theme access
async function storeThemeAccess(themeName: string): Promise<void> {
  const themeConfig = PROTECTED_THEMES[themeName];
  if (!themeConfig) return;

  const passwordHash = await sha256(themeConfig.password);
  const doubleHash = await sha256(passwordHash);
  const cookieName = `solid-theme-${themeConfig.id}`;

  setCookie(cookieName, doubleHash);
}

// Verify password
async function verifyPassword(themeName: string, password: string): Promise<boolean> {
  const themeConfig = PROTECTED_THEMES[themeName];
  if (!themeConfig) return false;

  return password.trim() === themeConfig.password;
}

// Create protection dialog using native HTML dialog
function createProtectionDialog(): HTMLDialogElement {
  // Check if dialog already exists
  const existing = document.getElementById('theme-protection-dialog') as HTMLDialogElement | null;
  if (existing) return existing;

  const dialog = document.createElement('dialog');
  dialog.id = 'theme-protection-dialog';

  dialog.innerHTML = `
    <div class="dialog-header">
      <h2 class="dialog-title">Protected Theme Access</h2>
    </div>
    <div class="dialog-body">
      <p class="dialog-text">
        This theme is protected. Please enter the password to continue.
      </p>
      <div class="input-group">
        <label for="theme-password-input">Password</label>
        <input 
          id="theme-password-input" 
          type="password" 
          placeholder="Enter password"
          autocomplete="off"
        />
      </div>
      <div id="password-error" class="error-message">
        Incorrect password. Please try again.
      </div>
    </div>
    <div class="dialog-footer">
      <button id="theme-cancel-btn" class="btn-secondary" type="button">Cancel</button>
      <button id="theme-submit-btn" class="btn-primary" type="button">Submit</button>
    </div>
  `;

  document.body.appendChild(dialog);
  return dialog;
}

// Show protection dialog
async function showProtectionDialog(themeName: string): Promise<void> {
  const dialog = createProtectionDialog();
  const input = document.getElementById('theme-password-input') as HTMLInputElement;
  const submitBtn = document.getElementById('theme-submit-btn') as HTMLButtonElement;
  const cancelBtn = document.getElementById('theme-cancel-btn') as HTMLButtonElement;
  const errorDiv = document.getElementById('password-error') as HTMLDivElement;

  // Reset input and error
  if (input) input.value = '';
  if (errorDiv) errorDiv.classList.remove('show');

  // Show the dialog
  dialog.showModal();

  // Focus input after dialog is shown
  setTimeout(() => input?.focus(), 100);

  // Handle submit
  const handleSubmit = async () => {
    // Get the input fresh each time
    const inputEl = document.getElementById('theme-password-input') as HTMLInputElement;
    const password = inputEl?.value || '';
    const isValid = await verifyPassword(themeName, password);

    if (isValid) {
      await storeThemeAccess(themeName);
      dialog.close();
      if (errorDiv) errorDiv.classList.remove('show');

      // Clean up listeners
      submitBtn?.removeEventListener('click', handleSubmit);
      cancelBtn?.removeEventListener('click', handleCancel);
      input?.removeEventListener('keypress', handleKeyPress);
      dialog.removeEventListener('close', handleDialogClose);
    } else {
      if (errorDiv) errorDiv.classList.add('show');
      inputEl?.select();
    }
  };

  // Handle cancel
  const handleCancel = () => {
    dialog.close();

    // Navigate back to default theme
    const params = new URLSearchParams(window.location.search);
    const globals = params.get('globals');
    if (globals) {
      const newGlobals = globals.replace(/theme:[^&;]+/, 'theme:UI+Light');
      params.set('globals', newGlobals);
      window.location.search = params.toString();
    }

    // Clean up listeners
    submitBtn?.removeEventListener('click', handleSubmit);
    cancelBtn?.removeEventListener('click', handleCancel);
    input?.removeEventListener('keypress', handleKeyPress);
    dialog.removeEventListener('close', handleDialogClose);
  };

  // Handle Enter key
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Handle ESC key or backdrop click
  const handleDialogClose = () => {
    handleCancel();
  };

  submitBtn?.addEventListener('click', handleSubmit);
  cancelBtn?.addEventListener('click', handleCancel);
  input?.addEventListener('keypress', handleKeyPress);
  dialog.addEventListener('close', handleDialogClose);
}

// Check theme access
async function checkThemeAccess(): Promise<void> {
  const currentTheme = getCurrentTheme();

  if (!currentTheme || !isProtectedTheme(currentTheme)) {
    return; // Public theme or no theme, no protection needed
  }

  const hasAccess = await hasValidCookie(currentTheme);

  if (!hasAccess) {
    await showProtectionDialog(currentTheme);
  }
}

// Initialize theme protection
function initializeThemeProtection() {
  console.log('Initializing theme protection');

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkThemeAccess);
  } else {
    checkThemeAccess();
  }

  // Watch for URL changes with multiple strategies
  let lastUrl = window.location.href;

  const urlChangeHandler = () => {
    const currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      console.log('URL changed to:', currentUrl);
      checkThemeAccess();
    }
  };

  // Monkey-patch History API to catch pushState and replaceState
  // These are commonly used by SPAs like Storybook and don't trigger events
  const originalPushState = history.pushState.bind(history);
  const originalReplaceState = history.replaceState.bind(history);

  history.pushState = function (...args) {
    originalPushState(...args);
    console.log('pushState detected');
    urlChangeHandler();
  };

  history.replaceState = function (...args) {
    originalReplaceState(...args);
    console.log('replaceState detected');
    urlChangeHandler();
  };

  // 1. Popstate for back/forward navigation
  window.addEventListener('popstate', () => {
    console.log('Popstate event');
    urlChangeHandler();
  });

  // 2. Hashchange (just in case)
  window.addEventListener('hashchange', () => {
    console.log('Hash change event');
    urlChangeHandler();
  });
}

// Start immediately
if (typeof window !== 'undefined') {
  initializeThemeProtection();
}
