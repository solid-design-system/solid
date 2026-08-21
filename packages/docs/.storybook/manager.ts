// .storybook/manager.ts

import { addons } from 'storybook/manager-api';
import solidTheme from './solid-theme';
import { hasThemeAccess, isProtectedTheme, storeThemeAccess, verifyThemePassword } from './theme-protection';

addons.setConfig({
  theme: solidTheme,
  sidebar: {
    showRoots: true
  }
});

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
async function showProtectionDialog(): Promise<void> {
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
    const isValid = verifyThemePassword(password);

    if (isValid) {
      storeThemeAccess();
      if (errorDiv) errorDiv.classList.remove('show');

      // Clean up listeners
      submitBtn?.removeEventListener('click', handleSubmit);
      cancelBtn?.removeEventListener('click', handleCancel);
      input?.removeEventListener('keypress', handleKeyPress);
      dialog.removeEventListener('close', handleDialogClose);
      dialog.close();
      window.location.reload();
    } else {
      if (errorDiv) errorDiv.classList.add('show');
      inputEl?.select();
    }
  };

  // Handle cancel
  const handleCancel = () => {
    // Remove the close handler before closing to avoid recursively re-entering this handler.
    submitBtn?.removeEventListener('click', handleSubmit);
    cancelBtn?.removeEventListener('click', handleCancel);
    input?.removeEventListener('keypress', handleKeyPress);
    dialog.removeEventListener('close', handleDialogClose);
    dialog.close();

    // Navigate back to default theme
    const params = new URLSearchParams(window.location.search);
    const globals = params.get('globals');
    if (globals) {
      const newGlobals = globals.replace(/theme:[^&;]+/, 'theme:UI+Light');
      params.set('globals', newGlobals);
      window.location.search = params.toString();
    }
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

  const hasAccess = hasThemeAccess(currentTheme);

  if (!hasAccess) {
    await showProtectionDialog();
  }
}

// Initialize theme protection
function initializeThemeProtection() {
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
      checkThemeAccess();
    }
  };

  // Monkey-patch History API to catch pushState and replaceState
  // These are commonly used by SPAs like Storybook and don't trigger events
  const originalPushState = history.pushState.bind(history);
  const originalReplaceState = history.replaceState.bind(history);

  history.pushState = function (...args) {
    originalPushState(...args);
    urlChangeHandler();
  };

  history.replaceState = function (...args) {
    originalReplaceState(...args);
    urlChangeHandler();
  };

  // 1. Popstate for back/forward navigation
  window.addEventListener('popstate', () => {
    urlChangeHandler();
  });

  // 2. Hashchange (just in case)
  window.addEventListener('hashchange', () => {
    urlChangeHandler();
  });
}

// Start immediately
if (typeof window !== 'undefined') {
  initializeThemeProtection();
}
