import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories, useOf } from '@storybook/addon-docs/blocks';

/** Default docs page composition (the "Utilized Components and Styles" footer is added by DocsContainer). */
export const StoryPage = () => {
  const resolvedOf = useOf('meta', ['meta']);
  const isSingleStory = Object.keys(resolvedOf.csfFile.stories).length === 1;

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      {isSingleStory ? <Description of="story" /> : null}
      <Primary />
      <Controls />
      {isSingleStory ? null : <Stories />}
    </>
  );
};
