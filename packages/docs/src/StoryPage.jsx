import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories, useOf } from '@storybook/addon-docs/blocks';

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
