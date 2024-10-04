/* eslint-disable no-param-reassign */
import { StoryContext } from '@storybook/web-components';

export default function docsCodepenEnhancer(code: string, storyContext: StoryContext) {
  // We hijack the formatter to keep track of every story's code change
  // and add a button to edit it on CodePen
  const storiesOnDocsPage = document.querySelectorAll(`#anchor--${storyContext.id}`);
  const packageVersionString = import.meta.env.STORYBOOK_PACKAGE_VERSIONS as string;
  const packageVersions = JSON.parse(packageVersionString) as Record<string, string>;

  // Unfortunately, the editable story in a docs page has the same ID as the first story.
  storiesOnDocsPage.forEach(story => {
    const showCodeButton = story.querySelector('.docblock-code-toggle');
    if (showCodeButton) {
      const editCodeButton = showCodeButton.cloneNode(true) as HTMLElement;
      editCodeButton.textContent = 'Edit on CodePen';
      editCodeButton.classList.add('docblock-codepen-button');

      const isEditableStory = story.querySelector('.sb-bar');

      // We want to remove old buttons, but as described two stories share the same ID.
      // This leads to this little hack to make sure that always the correct button is
      // visible for every story.
      //
      // Part 1: For the editable story (with '.sb-bar') remove all buttons except the last one
      //         as this could contain the correct button for the editable story
      if (isEditableStory) {
        story.querySelectorAll('.docblock-codepen-button:not(:last-of-type)').forEach(el => {
          el.remove();
        });
      } else {
        story.querySelectorAll('.docblock-codepen-button').forEach(el => {
          el.remove();
        });
      }

      // Add the button to the end
      showCodeButton.parentElement!.appendChild(editCodeButton);

      // Part 2: Hide the last button, because the one before the last is the correct one
      //         for the editable story
      if (isEditableStory) {
        story.querySelectorAll<HTMLElement>('.docblock-codepen-button:not(:last-of-type)').forEach(el => {
          el.style.display = 'block';
          el.style.borderRight = 'none';
        });
        story.querySelector<HTMLElement>('.docblock-codepen-button:last-of-type')!.style.display = 'none';
      }

      // Finally add the event listener to the button
      editCodeButton.addEventListener('click', () => {
        const form = document.createElement('form');
        form.action = 'https://codepen.io/pen/define';
        form.method = 'POST';
        form.target = '_blank';

        // Docs: https://blog.codepen.io/documentation/prefill/
        const data = {
          css: `/* See https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/?path=/docs/docs-general-installation--docs */
@import url("https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/styles/solid-styles.css");


/* See https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/?path=/docs/docs-general-prerequisites--docs */
body {
  font-family:
    'Frutiger Neue',
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: normal;
  font-weight: 400;
  src: url('https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/fonts/FrutigerNeuefuerUIWebW05-Bk.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: italic;
  font-weight: 400;
  src: url('https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/fonts/FrutigerNeuefuerUIWebW05-BkIt.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: normal;
  font-weight: 600;
  src: url('https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/fonts/FrutigerNeuefuerUIWebW05-Bd.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: italic;
  font-weight: 600;
  src: url('https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/fonts/FrutigerNeuefuerUIWebW05-BdIt.woff2')
    format('woff2');
}

/**
  * Render Neue Frutiger correctly.
  */

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-size: 16px;
}`,
          css_external: '',
          description: '',
          editors: 1110,
          head: '<meta name="viewport" content="width=device-width">',
          html: code.replace(/\n\s*\n/g, '\n'), // Regex removes empty lines
          js: `/* See https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/storybook/?path=/docs/docs-general-installation--docs */
import "https://solid-design-system.fe.union-investment.de/${packageVersions['@solid-design-system/components']}/components/umd/solid-components.js";

/* Example how to use modules from bundle */
const { registerIconLibrary } = window['SolidComponents'];`,
          js_external: '',
          js_module: true,
          js_pre_processor: 'none',
          tags: ['solid-design-system', 'web components'],
          title: `Solid Design System: ${storyContext.title}/${storyContext.name}`
        };

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'data';
        input.value = JSON.stringify(data);
        form.append(input);

        document.documentElement.append(form);
        form.submit();
        form.remove();
      });
    }
  });
  return code;
}
