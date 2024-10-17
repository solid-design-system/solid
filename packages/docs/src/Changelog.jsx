import React from 'react';
import { Markdown } from '@storybook/blocks';

export const ChangelogFormatter = ({ children }) => {
  const formattedChildren = children.replace(/@solid-design-system\/components-v/g, '');

  return (
    <>
      <h1>Changelog</h1>
      <hr />
      <Markdown
        options={{
          overrides: {
            h1: {
              component: 'h2',
              props: {
                style: {
                  fontSize: '1rem',
                  margin: '2rem 0 0'
                }
              }
            },
            h3: {
              component: 'h4',
              props: {
                style: {
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '1rem 0 0'
                }
              }
            },
            ul: {
              props: {
                style: {
                  margin: '1rem 0'
                }
              }
            }
          }
        }}
      >
        {formattedChildren}
      </Markdown>
    </>
  );
};
