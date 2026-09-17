import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { Footer } from './Footer.jsx';

export const StoryPageContainer = ({ context, children, ...props }) => (
  <>
    <DocsContainer context={context} {...props}>
      {children}
    </DocsContainer>
    <Footer context={context} />
  </>
);
