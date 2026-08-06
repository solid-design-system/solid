import React from 'react';
import { Markdown, Canvas } from '@storybook/addon-docs/blocks';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

export const OverviewFormatter = ({ children, story, tag }) => {
  let summary = '';
  if (tag) {
    try {
      summary = getWcStorybookHelpers(tag)?.manifest?.summary ?? '';
    } catch {
      summary = '';
    }
  }
  // The manifest's `@summary` JSDoc is the single source of truth for this text (see custom-elements.json);
  // it's read here at render time, not at MDX module-eval time, since the manifest isn't guaranteed to be
  // registered on window yet when the .mdx module's top-level code first runs.
  const markdown = summary ? children.replace(/(^\s*# .+\n\n)/, `$1${summary}\n\n`) : children;

  const links = ({ children, ...props }) => <sd-link {...props}>{children}</sd-link>;
  const defaultStoryCanvas = () => <Canvas of={story} />;
  const documentationLinks = ({ children, ...props }) => (
    <div className="flex flex-col items-start gap-8 mt-8 mb-8 md:flex-row md:items-center">
      {Object.entries(JSON.parse(props.links || '{}')).map(([name, link]) => {
        const linkName = name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <div key={name} className="flex flex-row items-center gap-4">
            {link ? <sd-link href={link}>{linkName}</sd-link> : <p>{linkName}</p>}

            <div className={`m-0 sd-status-badge ${link ? `sd-status-badge--success` : `sd-status-badge--info`}`}>
              <sd-icon name={link ? 'status-check' : 'status-info'} library="sd-status-assets"></sd-icon>
              {link ? 'Available' : 'Does not apply'}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="sb-unstyled">
      <Markdown
        options={{
          overrides: {
            h1: {
              props: {
                className: 'sd-headline mb-6'
              }
            },
            DefaultStory: {
              component: defaultStoryCanvas
            },
            DocumentationLinks: {
              component: documentationLinks
            },
            h3: {
              props: {
                className: 'sd-headline sd-headline--size-3xl mb-8 mt-12 text-black'
              }
            },
            h4: {
              props: {
                className: 'sd-headline sd-headline--size-lg text-black',
                style: {
                  marginBottom: '12px'
                }
              }
            },
            ul: {
              props: {
                className: 'sd-list',
                style: {
                  paddingTop: '0'
                }
              }
            },
            p: {
              props: {
                style: {
                  marginBottom: '12px'
                }
              }
            },
            a: {
              component: links
            },
            'sd-notification': {
              props: {
                style: {
                  display: 'flex',
                  marginTop: '24px'
                }
              }
            }
          }
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};
