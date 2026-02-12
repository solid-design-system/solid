<div className="flex gap-2">
  ![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
  ![NPM Version](https://img.shields.io/npm/v/%40solid-design-system%2Fplaceholders)
</div>

# @solid-design-system/placeholders

This package provides placeholder texts and images.

## Texts

The file `solid-faker` provides a class with several utility functions for generating random / pseudo-random Lorem Ipsum style texts.

```
// Import the SolidFaker class
import SolidFaker from '@solid-design-system/placeholders';

// Create an instance with an optional seed value as the only argument
const faker = new SolidFaker(123);

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
```

## Images

The `src/images` folder contains placeholder images for all projects at Union Investment.

You can find their respective photographer and source below:

- [Architecture - Lance Anderson](https://unsplash.com/photos/JyAh_s_1RjY)
- [Coins - Towfiqu barbhuiya](https://unsplash.com/photos/jpqyfK7GB4w)
- [Coffeeshop - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
- [Profile - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
- [Collaboration - Austin Distel](https://unsplash.com/photos/jpHw8ndwJ_Q)
- [Family - Nathan Dumlao](https://unsplash.com/photos/Wr3comVZJxU)
- [Friends - Chewy](https://unsplash.com/photos/3cAMUE3YAO8)
- [Skyline - Tobias Reich](https://unsplash.com/photos/FDBy4lkZycM)
- [Workspace - Dan Dimmock](https://unsplash.com/photos/3mt71MKGjQ0)
- [Couple Moving 03 - Ketut Subiyanto](https://www.pexels.com/photo/cheerful-diverse-couple-writing-in-notebook-near-boxes-before-relocation-4246197/)
- [Senior Coffee - MART PRODUCTION](https://www.pexels.com/photo/man-and-woman-holding-white-ceramic-mugs-7330130/)
- [Calculator work - Mikhail Nilov](https://www.pexels.com/photo/a-person-sitting-a-wooden-table-with-a-notepad-and-laptop-using-a-calculator-6963847/)

## Videos

The `src/videos` folder contains placeholder videos for all projects at Union Investment.

You can find their respective videographer and source below:

- [Gardening - Pavel Danilyuk](https://www.pexels.com/de-de/video/liebe-menschen-garten-zeitlupe-4625767/)

## Audio

The `src/audio` folder contains placeholder audio track and audio transcript for all projects at Union Investment.

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
      to: '/placeholders/images',
    },
    {
      from: '../node_modules/@solid-design-system/placeholders/src/videos',
      to: '/placeholders/videos',
    },
    {
      from: '../node_modules/@solid-design-system/placeholders/src/audio',
      to: '/placeholders/audio',
    },
  ],
```

After adding this package to the `staticDirs` of your Storybook the `src/images` folder will be included in your `storybook` build folder under the subfolder `storybook/placeholders/images`.
To reference a image in your story you can follow this example:

```js
'./placeholders/images/collaboration.jpg';
```
