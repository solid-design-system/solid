import React from 'react';
import { Markdown, Canvas } from '@storybook/addon-docs/blocks';

export const OverviewFormatter = ({ children, story }) => {
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

            <div className={`m-0 sd-status-badge ${link ? `sd-status-badge--success` : `sd-status-badge--warning`}`}>
              <sd-icon name={link ? 'status-check' : 'status-exclamation'} library="sd-status-assets"></sd-icon>
              {link ? 'Available' : 'Currently unavailable'}
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
                className: 'sd-headline'
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
        {children}
      </Markdown>
    </div>
  );
};
