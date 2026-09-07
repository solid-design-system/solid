import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { Footer } from './Footer.jsx';

/**
 * The default docs container plus the full-width "Utilized Components and Styles" footer, rendered as a
 * sibling of the docs page wrapper (whose flex row of content + TOC would otherwise constrain its width).
 */
export const StoryPageContainer = ({ context, children, ...props }) => (
  <>
    <DocsContainer context={context} {...props}>
      {children}
    </DocsContainer>
    <Footer context={context} />
  </>
);
