import React from 'react';

const toTitle = tag =>
  tag
    .replace(/^sd-/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const Footer = ({ context }) => {
  let preparedMeta;
  try {
    preparedMeta = context?.resolveOf('meta', ['meta'])?.preparedMeta;
  } catch {
    return null;
  }
  const relatedLinks = preparedMeta?.parameters?.relatedLinks;
  const components = relatedLinks?.components ?? [];
  const styles = relatedLinks?.styles ?? [];

  if (!components.length && !styles.length) return null;

  const items = [
    ...components.map(tag => ({ tag, href: `./?path=/docs/components-${tag}--docs` })),
    ...styles.map(tag => ({ tag, href: `./?path=/docs/styles-${tag}--docs` }))
  ].sort((a, b) => a.tag.localeCompare(b.tag));

  return (
    <div className="sb-unstyled bg-neutral-100 py-16">
      <div className="sd-docs-footer">
        <div className="sd-docs-footer-content">
          <h4 className="sd-headline sd-headline--size-lg text-black mb-4">Utilized Components and Styles</h4>
          <ul className="m-0 flex list-none flex-col gap-4 p-0 pt-4">
            {items.map(item => (
              <li key={item.href}>
                <sd-link href={item.href}>{toTitle(item.tag)}</sd-link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
