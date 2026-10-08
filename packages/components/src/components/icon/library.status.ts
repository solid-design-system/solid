import type { IconLibrary } from './library';

//
// Status icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// This library is for exclusive use with the `sd-status-badge` component.
//
const statusIcons = {
  'status-check':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M9.246 2.21a.836.836 0 0 0-1.145.275l-.002.003-3.07 5.21-1.471-1.467a.838.838 0 0 0-1.183 1.184l2.232 2.232a.84.84 0 0 0 .582.26h.107a.84.84 0 0 0 .612-.401l.003-.005 3.628-6.14a.837.837 0 0 0-.289-1.15z"/></svg>',
  'status-clock':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M6.573 6.135V2.084a.847.847 0 0 0-1.692 0v4.4q0 .09.018.172l-.001-.005q.01.044.024.08l-.001-.006c0 .028 0 .057.025.085q.021.048.046.087l-.001-.003.031.06a1 1 0 0 0 .108.129l3.408 3.41a.848.848 0 0 0 1.2-1.2z"/></svg>',
  'status-close':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M9.673 2.356a.833.833 0 0 0-1.178 0L6.028 4.822 3.561 2.356a.834.834 0 0 0-1.178 1.178L4.85 6 2.383 8.466a.833.833 0 0 0 1.178 1.178l2.467-2.466 2.467 2.467a.834.834 0 0 0 1.178-1.178L7.206 6l2.467-2.467a.83.83 0 0 0 0-1.177"/></svg>',
  'status-exclamation':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M6.754 10.054c0 .46-.375.834-.838.834a.836.836 0 0 1-.837-.834c0-.46.375-.833.837-.833.463 0 .838.373.838.833M5.916.888a.836.836 0 0 0-.837.833v5c0 .46.375.833.837.833a.836.836 0 0 0 .838-.833v-5a.836.836 0 0 0-.838-.833"/></svg>',
  'status-info':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M5.777 3.815c.69 0 1.25-.557 1.25-1.243 0-.687-.56-1.244-1.25-1.244s-1.25.557-1.25 1.244.56 1.243 1.25 1.243M6.75 5.75a.83.83 0 0 0-.834-.829h-.833a.83.83 0 0 0-.833.83c0 .457.373.829.833.829v2.21H4.25a.83.83 0 0 0-.833.829.83.83 0 0 0 .833.829h3.332c.46 0 .833-.371.833-.83a.83.83 0 0 0-.833-.828H6.75z"/></svg>',
  'status-minus':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M9.684 5.055H2.148a.836.836 0 0 0-.837.833c0 .46.375.833.837.833h7.536a.836.836 0 0 0 .837-.833.836.836 0 0 0-.837-.833"/></svg>',
  'status-questionmark':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12"><path fill="currentColor" d="M6.753 10.054c0 .46-.375.834-.837.834a.836.836 0 0 1-.838-.834c0-.46.376-.833.838-.833s.837.373.837.833M5.916.888a2.784 2.784 0 0 0-2.791 2.777c0 .46.375.834.837.834a.836.836 0 0 0 .838-.834c0-.613.5-1.11 1.116-1.11s1.116.497 1.116 1.11c0 .24-.52.792-.837 1.111-.559.586-1.117 1.192-1.117 1.944v.014a.837.837 0 0 0 1.675.014 4.4 4.4 0 0 1 .669-.833c.603-.639 1.284-1.361 1.284-2.261A2.784 2.784 0 0 0 5.916.888"/></svg>'
} as const;

export const icons = Object.fromEntries(
  Object.entries(statusIcons).sort(([left], [right]) => left.localeCompare(right))
) as typeof statusIcons;

const statusLibrary: IconLibrary = {
  name: 'sd-status-assets',
  resolver: (name: keyof typeof icons) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return '';
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default statusLibrary;
