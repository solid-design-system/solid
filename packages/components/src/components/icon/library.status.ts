import type { IconLibrary } from './library';

//
// Status icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// This library is for exclusive use with the `sd-status-badge` component.
//
const statusIcons = {
  'status-check':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M9.222 2.21a.836.836 0 0 0-1.145.275l-.001.003-3.07 5.21-1.472-1.467a.838.838 0 0 0-1.183 1.184l2.232 2.232a.84.84 0 0 0 .582.26h.108a.84.84 0 0 0 .612-.401l.002-.005 3.628-6.14a.837.837 0 0 0-.289-1.15z"/></svg>',
  'status-clock':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.999 5.659v-3.99a.834.834 0 0 0-1.667 0v4.334q0 .087.018.17l-.001-.006q.01.044.024.078L4.37 6.24c0 .027 0 .056.025.083a1 1 0 0 0 .046.086l-.002-.003.031.059q.05.07.106.127l3.356 3.359a.835.835 0 0 0 1.18-1.18z"/></svg>',
  'status-close':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M9.66 2.341a.833.833 0 0 0-1.178 0L6.013 4.808 3.548 2.34A.834.834 0 0 0 2.37 3.519l2.465 2.466-2.467 2.467A.834.834 0 0 0 3.547 9.63l2.467-2.467L8.481 9.63a.833.833 0 0 0 1.178-1.178L7.193 5.985l2.466-2.467a.83.83 0 0 0 0-1.177"/></svg>',
  'status-exclamation':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M6.837 10.181c0 .46-.375.834-.838.834a.836.836 0 0 1-.837-.834c0-.46.375-.833.837-.833.463 0 .838.373.838.833M6 1.015a.836.836 0 0 0-.838.833v5c0 .46.375.833.837.833a.836.836 0 0 0 .838-.833v-5a.836.836 0 0 0-.838-.833"/></svg>',
  'status-info':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.854 3.927c.69 0 1.25-.557 1.25-1.244s-.56-1.244-1.25-1.244-1.25.558-1.25 1.244c0 .687.56 1.244 1.25 1.244m.972 1.935a.83.83 0 0 0-.833-.83H5.16a.83.83 0 0 0-.833.83c0 .457.373.829.833.829V8.9h-.833a.83.83 0 0 0-.833.83.83.83 0 0 0 .833.828H7.66a.83.83 0 0 0 .833-.829.83.83 0 0 0-.833-.829h-.833z"/></svg>',
  'status-minus':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M9.778 5.333H2.243a.836.836 0 0 0-.838.833c0 .46.375.834.838.834h7.535a.836.836 0 0 0 .838-.834.836.836 0 0 0-.838-.833"/></svg>',
  'status-questionmark':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M6.847 10.181c0 .46-.375.834-.838.834a.836.836 0 0 1-.837-.834c0-.46.375-.833.837-.833.463 0 .838.373.838.833M6.01 1.015a2.784 2.784 0 0 0-2.791 2.777c0 .46.375.833.837.833a.836.836 0 0 0 .837-.833c0-.613.5-1.11 1.116-1.11s1.117.497 1.117 1.11c0 .24-.52.792-.838 1.111-.558.586-1.116 1.192-1.116 1.944v.014c0 .46.375.834.837.834.458 0 .83-.365.838-.82a4.4 4.4 0 0 1 .669-.833C8.119 5.403 8.8 4.68 8.8 3.78a2.784 2.784 0 0 0-2.79-2.765"/></svg>'
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
