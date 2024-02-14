[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![NPM Version](https://img.shields.io/npm/v/%40solid-design-system%2Fplaceholders)

# Solid Placeholders

This package provides placeholder texts and images.

## Texts

The file `solid-faker` provides a class with several utility functions for generating random / pseudo-random Lorem Ipsum style texts.

```
// Import the included singleton instance which uses a default seed value of 123 for consistent results
import { solidFaker } from '@solid-design-system/placeholders';

// It is also possible to import the class itself, which then must be intantiated with an optional seed value as its only argument
import SolidFaker from '@solid-design-system/placeholders';
const solidFakerInstance = new SolidFaker();

// Set the seed to any other number to provide a different set of consistent results
faker.seed(321);

// Generate 5 random words (all lowercase)
console.log(faker.words(5));

// Generate 5 random words with first word capitalized
console.log(faker.words(5, 1));

// Generate 5 random words with all words capitalized
console.log(faker.words(5, 2));

// Generate 3 random sentences
console.log(faker.sentences(3));

// Generate 2 random paragraphs
console.log(faker.paragraphs(2));

// Optionally, set the seed to undefined for random results on each invocation
faker.seed();
```

## Images

The `src/images` folder contains placeholder images for all projects at Union Investment.

You can find their respective photographer and source below:

- [Architecture - Lance Anderson](https://unsplash.com/photos/JyAh_s_1RjY)
- [Coins - Towfiqu barbhuiya](https://unsplash.com/photos/jpqyfK7GB4w)
- [Coffeeshop - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
- [Collaboration - Austin Distel](https://unsplash.com/photos/jpHw8ndwJ_Q)
- [Family - Nathan Dumlao](https://unsplash.com/photos/Wr3comVZJxU)
- [Friends - Chewy](https://unsplash.com/photos/3cAMUE3YAO8)
- [Skyline - Tobias Reich](https://unsplash.com/photos/FDBy4lkZycM)
- [Workspace - Dan Dimmock](https://unsplash.com/photos/3mt71MKGjQ0)

## Usage

```bash
npm i @solid-design-system/placeholders
```

## Storybook integration

To integrate the images in this package into your Storybook you need to add the following lines of code to the Storybook `main.js` file:

```js
  staticDirs: [
    {
      from: '../node_modules/@solid-design-system/placeholders/src/images',
      to: '/placeholders',
    },
  ],
```

After adding this package to the `staticDirs` of your Storybook the `src/images` folder will be included in your `storybook` build folder under the subfolder `storybook/placeholders`.
To reference a image in your story you can follow this example:

```js
'./placeholders/collaboration.jpg';
```
