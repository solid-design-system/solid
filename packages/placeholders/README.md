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
- [Architecture interior - People inside a library - Tetiana Shevereva](https://www.pexels.com/photo/people-inside-a-library-3490856/)
- [Business woman working - Tima Miroshnichenko](https://www.pexels.com/photo/woman-in-gray-blazer-sitting-by-the-table-5717512/)
- [Calculator work - Mikhail Nilov](https://www.pexels.com/photo/a-person-sitting-a-wooden-table-with-a-notepad-and-laptop-using-a-calculator-6963847/)
- [City day 01 - Ricky Esquivel ](https://www.pexels.com/pt-br/foto/foto-da-cidade-1604141/)
- [City day 02 - Zhang Kaiyv](https://www.pexels.com/pt-br/foto/arranha-ceus-1139556/)
- [City night 01 - Carlos Oliva](https://www.pexels.com/photo/city-skyline-across-body-of-water-during-night-time-3586966/)
- [City night 02 - Reynaldo Brigantty](https://www.pexels.com/pt-br/foto/edificios-com-luz-azul-747101/)
- [Coins - Towfiqu barbhuiya](https://unsplash.com/photos/jpqyfK7GB4w)
- [Coffeeshop - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
- [Collaboration - Austin Distel](https://unsplash.com/photos/jpHw8ndwJ_Q)
- [Conference Table - Vlada Karpovich](https://www.pexels.com/pt-br/foto/marketing-escritorio-trabalhando-homens-7433825/)
- [Couple moving 01 - Ketut Subiyanto](https://www.pexels.com/photo/thoughtful-couple-writing-in-notebook-while-moving-house-4246012/)
- [Couple moving 02 - Ketut Subiyanto](https://www.pexels.com/photo/embracing-diverse-couple-lying-on-bed-during-relocation-in-new-house-4246056/)
- [Couple moving 03 - Ketut Subiyanto](https://www.pexels.com/photo/cheerful-diverse-couple-writing-in-notebook-near-boxes-before-relocation-4246197/)
- [Diagrams meeting - Artem Podrez](https://www.pexels.com/photo/person-holding-white-and-blue-box-5716001/)
- [Family - Nathan Dumlao](https://unsplash.com/photos/Wr3comVZJxU)
- [Family play 01 - Mikhail Nilov](https://www.pexels.com/photo/healthy-couple-love-laptop-6972784/)
- [Family play 02- Mikhail Nilov](https://www.pexels.com/photo/healthy-couple-love-relaxation-6973191/)
- [Family play 03- Andrea Piacquadio](https://www.pexels.com/pt-br/foto/uma-foto-de-uma-mae-e-uma-filha-brincando-no-quarto-3761510/)
- [Family reading - Andrea Piacquadio](https://www.pexels.com/photo/mother-and-daughter-reading-book-with-interest-in-bed-3755514/)
- [Finance meeting - Artem Podrez](https://www.pexels.com/photo/businessman-person-woman-space-6779716/)
- [Friends - Chewy](https://unsplash.com/photos/3cAMUE3YAO8)
- [Handshake working - Sora Shimazaki](https://www.pexels.com/pt-br/foto/colheita-de-colegas-apertando-as-maos-no-escritorio-5673488/)
- [Laptop working - SHVETS production](https://www.pexels.com/pt-br/foto/mao-computador-portatil-laptop-notebook-7561704/)
- [Office talk - Edmond Dantès](https://www.pexels.com/photo/high-angle-shot-of-a-people-having-a-business-meeting-4343028/)
- [Profile picture man 01 - Lubomir Satko](https://unsplash.com/photos/-uHVRvDr7pg)
- [Profile picture man 02 - Mizuno K](https://unsplash.com/photos/-uHVRvDr7pg)
- [Profile picture woman 01 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
- [Profile picture woman 02 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
- [Profile picture woman 03 - Vlada Karpovich](https://www.pexels.com/photo/people-smiling-together-7433918/)
- [Profile picture woman 04 - Vlada Karpovich](https://www.pexels.com/photo/people-smiling-together-7433918/)
- [Profile picture woman 05 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
- [Profile picture woman 06 - Christina Morillo](https://www.pexels.com/photo/woman-smiling-at-the-camera-1181686/)
- [Profile picture woman 07 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
- [Profile - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
- [Senior Coffee - MART PRODUCTION](https://www.pexels.com/photo/man-and-woman-holding-white-ceramic-mugs-7330130/)
- [Senior yoga - Marcus Aurelius](https://www.pexels.com/photo/couple-practicing-yoga-6787440/)
- [Skyline - Tobias Reich](https://unsplash.com/photos/FDBy4lkZycM)
- [Working from home - Anastasia Shuraeva](https://www.pexels.com/photo/woman-carrying-her-baby-and-working-on-a-laptop-4079281/)
- [Workspace - Dan Dimmock](https://unsplash.com/photos/3mt71MKGjQ0)

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
