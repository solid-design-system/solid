import { css } from 'lit';

/*
 * Make Tailwind-CSS globally accessible
 *
 * This approach seems to be okay facing the following sentence:
 * "Many modern browsers implement an optimization for <style> tags either cloned from a common
 * node or hat have identical text, to allow them to share a single backing stylesheet.
 * With this optimization the performance of external and internal styles should be similar."
 * (See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#internal_vs._external_styles)
 */

export default css`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    /**
    * This is a helper component to quickly add a focus outline to an element.
    * Known issue: Safari renders always square outlines.
    * We could fix this by using box-shadows, but we then would have to use ring-offset-color (https://tailwindcss.com/docs/ring-offset-color) to fake the offset.
    * As we don't know the background color of the focused element, this is not possible. Therefore we're using outlines and wait until Safari gets it fixed.
    */
    .focus-outline {
      @apply outline outline-2 outline-offset-2 outline-primary;
    }

    .focus-outline-inverted {
      @apply outline outline-2 outline-offset-2 outline-white;
    }
  }

  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
