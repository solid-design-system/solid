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

- [Architecture - Lance Anderson](https://unsplash.com/de/fotos/braun-weisses-beton-wahrzeichen-JyAh_s_1RjY)
  — ALT (EN): "A modern building with a sweeping wave-shaped roof in brown and white against a clear blue sky."
  — ALT (DE): "Ein modernes Gebäude mit geschwungenem Wellendach in Braun und Weiß vor blauem Himmel."
- [Architecture interior - People inside a library - Tetiana Shevereva](https://www.pexels.com/photo/people-inside-a-library-3490856/)
  — ALT (EN): "Spatial recording of the bustling Stuttgart City Library across several floors."
  — ALT (DE): "Raumaufnahme der beliebten Stadtbibliothek Stuttgart über mehrere Stockwerke."
- [Business woman working - Tima Miroshnichenko](https://www.pexels.com/photo/woman-in-gray-blazer-sitting-by-the-table-5717512/)
  — ALT (EN): "A young woman in business attire sits in front of a large window and works on her laptop."
  — ALT (DE): "Eine junge Frau im Business-Outfit sitzt vor einem großen Fenster und arbeitet am Laptop."
- [Calculator work - Mikhail Nilov](https://www.pexels.com/photo/a-person-sitting-a-wooden-table-with-a-notepad-and-laptop-using-a-calculator-6963847/)
  — ALT (EN): "A woman is sitting at a table doing calculations with a calculator, notebook, and laptop."
  — ALT (DE): "Eine Frau sitzt an einem Tisch und rechnet mit einem Taschenrechner, Notizbuch und Laptop."
- [City day 01 - Ricky Esquivel ](https://www.pexels.com/pt-br/foto/foto-da-cidade-1604141/)
  — ALT (EN): "Car-free streets of Chicago with scattered people."
  — ALT (DE): "Autofreie Straßen von Chiacgo mit vereinzelten Menschen."
- [City day 02 - Zhang Kaiyv](https://www.pexels.com/pt-br/foto/arranha-ceus-1139556/)
  — ALT (EN): "Skyline of Beijing at sunset."
  — ALT (DE): "Skyline von Peking in untergehender Sonne."
- [City night 01 - Carlos Oliva](https://www.pexels.com/photo/city-skyline-across-body-of-water-during-night-time-3586966/)
  — ALT (EN): "Night shot of the Brooklyn Bridge with the New York skyline in the background."
  — ALT (DE): "Nachtaufnahme der Brooklynbridge mit der New Yorker Skyline im Hintergrund."
- [City night 02 - Reynaldo Brigantty](https://www.pexels.com/pt-br/foto/edificios-com-luz-azul-747101/)
  — ALT (EN): "Night shot of the New York skyline bathed in blue light."
  — ALT (DE): "Nachtaufnahme einer in blaues licht gehüllten New Yorker Skyline."
- [Coins - Towfiqu barbhuiya](https://unsplash.com/photos/jpqyfK7GB4w)
  — ALT (EN): "Hands stack coins into three piles on a table."
  — ALT (DE): "Hände stapeln Münzen zu drei Stapeln auf einem Tisch."
- [Coffeeshop - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
  — ALT (EN): "Four young people sit around a café table laughing, while one of them looks at a tablet."
  — ALT (DE): "Vier junge Menschen sitzen an einem Cafétisch und lachen, während einer von ihnen auf ein Tablet schaut."
- [Collaboration - Austin Distel](https://unsplash.com/photos/jpHw8ndwJ_Q)
  — ALT (EN): "Two young men in suits sit on a dark leather sofa, laughing together over a laptop with a city skyline visible behind them."
  — ALT (DE): "Zwei junge Männer in Anzügen sitzen auf einem Ledersofa und schauen lachend auf einen Laptop, während im Hintergrund eine Stadtsilhouette zu sehen ist."
- [Conference Table - Vlada Karpovich](https://www.pexels.com/pt-br/foto/marketing-escritorio-trabalhando-homens-7433822/)
  — ALT (EN): "Five adults are sitting and standing together at a conference table, discussing with interest the diagrams and graphs on the table."
  — ALT (DE): "An einem Konferenztisch sitzen und stehen fünf erwachsene Menschen gemeinsam und besprechen interessiert die auf dem Tisch liegenden Diagramme und Grafiken."
- [Couple moving 01 - Ketut Subiyanto](https://www.pexels.com/photo/thoughtful-couple-writing-in-notebook-while-moving-house-4246012/)
  — ALT (EN): "A couple sits in front of a bed surrounded by moving boxes, looking at an open magazine."
  — ALT (DE): "Zwischen Umzugskartons sitzt ein Paar vor einem Bett und blickt auf ein aufgeschlagenes Heft."
- [Couple moving 02 - Ketut Subiyanto](https://www.pexels.com/photo/embracing-diverse-couple-lying-on-bed-during-relocation-in-new-house-4246056/)
  — ALT (EN): "A couple looking into each other's eyes lies on a bed between suitcases and moving boxes."
  — ALT (DE): "Ein Paar, das sich in die Augen schaut, liegt auf einem Bett zwischen Koffern und Umzugskartons."
- [Couple moving 03 - Ketut Subiyanto](https://www.pexels.com/photo/heerful-diverse-couple-writing-in-notebook-near-boxes-before-relocation-4246197/)
  — ALT (EN): "A man and a woman are bent over a closed moving box. The man is pointing with a pen at something written on the box, while the woman is writing something in a notebook."
  — ALT (DE): "Ein Mann und eine Frau sind über einen verschlossenen Umzugskarton gebeugt. Der Mann zeigt mit einem Stift auf etwas, das auf den Karton geschrieben steht, während die Frau etwas in ein Heft schreibt."
- [Diagrams meeting - Artem Podrez](https://www.pexels.com/photo/person-holding-white-and-blue-box-5716001/)
  — ALT (EN): "Two people are looking at various diagrams together on a piece of paper and an open laptop."
  — ALT (DE): "Zwei Personen betrachten gemeinsam verschiedene Diagramme auf einem Papier und einem aufgeklappten Laptop."
- [Family - Nathan Dumlao](https://unsplash.com/photos/Wr3comVZJxU)
  — ALT (EN): "A smiling father with glasses is standing outside, carrying a baby on his shoulders and a toddler by his side."
  — ALT (DE): "Ein lächelnder Vater mit Brille steht draußen und trägt ein Baby auf den Schultern und ein Kleinkind an seiner Seite."
- [Family play 01 - Mikhail Nilov](https://www.pexels.com/photo/healthy-couple-love-laptop-6972784/)
  — ALT (EN): "A man with a beard and glasses and a little boy are sitting on a sofa. The man hands the boy a toy car."
  — ALT (DE): "Ein Mann mit Bart und Brille und ein kleiner Junge sitzen auf einem Sofa. Der Mann reicht dem Jungen ein Spielzeugauto."
- [Family play 02 - Mikhail Nilov](https://www.pexels.com/photo/healthy-couple-love-relaxation-6973191/)
  — ALT (EN): "A man with a beard and glasses and a little boy are sitting on a sofa. The man hands the boy a toy car."
  — ALT (DE): "Ein Mann mit Bart und Brille und ein kleiner Junge sitzen auf einem Sofa. Der Mann reicht dem Jungen ein Spielzeugauto."
- [Family play 03 - Andrea Piacquadio](https://www.pexels.com/pt-br/foto/uma-foto-de-uma-mae-e-uma-filha-brincando-no-quarto-3761510/)
  — ALT (EN): "A woman lifts up a girl who has her arms outstretched. Both are lying in bed."
  — ALT (DE): "Eine Frau hebt ein Mädchen hoch, das die Arme ausgestreckt hat. Beide liegen im Bett."
- [Family reading - Andrea Piacquadio](https://www.pexels.com/photo/mother-and-daughter-reading-book-with-interest-in-bed-3755514/)
  — ALT (EN): "A young woman is lying in bed with a girl, and they are reading a book together."
  — ALT (DE): "Eine junge Frau liegt mit einem Mädchen in einem Bett und sie lesen gemeinsam in ein Buch."
- [Finance meeting - Artem Podrez](https://www.pexels.com/photo/businessman-person-woman-space-6779716/)
  — ALT (EN): "Two women evaluate charts and tables."
  — ALT (DE): "Zwei Frauen werten Diagramme und Tabellen aus."
- [Friends - Chewy](https://unsplash.com/photos/3cAMUE3YAO8)
  — ALT (EN): "Two women sit on a bed, laughing and playing with two dogs in a bright bedroom."
  — ALT (DE): "Zwei Frauen sitzen auf einem Bett, lachen und spielen mit zwei Hunden in einem hellen Schlafzimmer."
- [Handshake working - Sora Shimazaki](https://www.pexels.com/pt-br/foto/colheita-de-colegas-apertando-as-maos-no-escritorio-5673488/)
  — ALT (EN): "A handshake between a woman and a man. Between them is a table with a laptop and a stack of documents."
  — ALT (DE): "Ein Handschlag zwischen einer Frau und einem Mann. Dazwischen steht ein Tisch mit Laptop und einem Stapel Unterlagen."
- [Laptop working - SHVETS production](https://www.pexels.com/pt-br/foto/mao-computador-portatil-laptop-notebook-7561704/)
  — ALT (EN): "This is a detailed shot of a left hand resting on the keyboard of a MacBook."
  — ALT (DE): "Es handelt sich um eine Detailaufnahme von einer linken Hand, die auf einer Tastatur eines MacBooks liegt."
- [Office talk - Edmond Dantès](https://www.pexels.com/photo/high-angle-shot-of-a-people-having-a-business-meeting-4343028/)
  — ALT (EN): "Two women and two men are sitting opposite each other on benches, talking to each other. Between them is a table with glasses and a basket of notebooks."
  — ALT (DE): "Auf Sitzbänken sitzen zwei Frauen und zwei Männer gegenüber und reden miteinander. Zwischen ihnen steht ein Tisch mit Gläsern und einem Korb mit Heften."
- [Profile picture man 01 - Lubomir Satko](https://www.pexels.com/photo/portrait-of-a-smiling-man-12437056/)
  — ALT (EN): "Portrait of a smiling man with a short full beard and short dark hair."
  — ALT (DE): "Portrait eines lachenden Mann mit kurzem Vollbart und kurzen dunklen Haaren."
- [Profile picture man 02 - Mizuno K](https://www.pexels.com/photo/smiling-man-with-a-beard-in-a-suit-13801851/)
  — ALT (EN): "Portrait of a smiling man with a short beard and short dark hair."
  — ALT (DE): "Portrait eines lächelnden Mann mit kurzem Bart und kurzen dunklen Haaren."
- [Profile picture woman 01 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
  — ALT (EN): "Portrait of a smiling woman with long dark hair. She wears spiral earrings and has a round nose piercing."
  — ALT (DE): "Portrait einer lächelnden Frau mit langen dunklen Haaren. Sie trägt spiralförmige Ohringe und hat ein rundes Nasenpiercing."
- [Profile picture woman 02 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
  — ALT (EN): "Portrait of a young woman with light freckles and blonde curly hair."
  — ALT (DE): "Portrait einer jungen Frau mit leichten Sommersprossen und blonden lockigen Haaren."
- [Profile picture woman 03 - Vlada Karpovich](https://www.pexels.com/photo/people-smiling-together-7433918/)
  — ALT (EN): "Portrait of a woman with gray shoulder-length hair and large dark glasses."
  — ALT (DE): "Portrait einer Frau mit grauen schulterlangen Haaren und einer großen dunklen Brille."
- [Profile picture woman 04 - Vlada Karpovich](https://www.pexels.com/photo/people-smiling-together-7433918/)
  — ALT (EN): "Portrait of a smiling woman with light shoulder-length hair."
  — ALT (DE): "Portrait einer lächelnden Frau mit hellen schulterlangen Haaren."
- [Profile picture woman 05 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
  — ALT (EN): "Portrait of a smiling woman with long dark hair and a white blouse."
  — ALT (DE): "Portrait einer lächelnden Frau mit langen dunklen Haaren und weißer Bluse."
- [Profile picture woman 06 - Christina Morillo](https://www.pexels.com/photo/woman-smiling-at-the-camera-1181686/)
  — ALT (EN): "Portrait of a smiling woman with short curly brown hair. She is wearing a necklace and a black and white striped top."
  — ALT (DE): "Portrait einer lächelnden Frau mit kurzen lockigen braunen Haaren. Sie trägt eine Kette ein schwarz weiß gestreiftes Oberteil."
- [Profile picture woman 07 - Yan Krukau](https://www.pexels.com/photo/women-with-their-arms-crossed-8837166/)
  — ALT (EN): "Portrait of a smiling woman with light shoulder-length hair and large dark glasses."
  — ALT (DE): "Portrait einer lächelnden Frau mit hellen schulterlangen Haaren und einer großen dunklen Brille."
- [Senior Coffee - MART PRODUCTION](https://www.pexels.com/photo/man-and-woman-holding-white-ceramic-mugs-7330130/)
  — ALT (EN): "An elderly woman and an elderly man stand arm in arm, gazing into the distance with a cup in their hands."
  — ALT (DE): "Eine ältere Frau und ein älterer Mann stehen Arm in Arm und blicken mit einer Tasse in die Ferne."
- [Senior yoga - Marcus Aurelius](https://www.pexels.com/photo/couple-practicing-yoga-6787440/)
  — ALT (EN): "In a beautiful large greenhouse, with many plants growing in the background, a woman and a man are doing yoga."
  — ALT (DE): "In einem schönen großen Gewächshaus, in dessen Hintergrund viele Pflanzen wachsen, machen eine Frau und ein Mann Yoga."
- [Skyline - Tobias Reich](https://unsplash.com/photos/FDBy4lkZycM)
  — ALT (EN): "A view of a city at night from the top of a building."
  — ALT (DE): "Ein Blick auf eine Stadt bei Nacht von der Spitze eines Gebäudes."
- [Working from home - Anastasia Shuraeva](https://www.pexels.com/photo/woman-carrying-her-baby-and-working-on-a-laptop-4079281/)
  — ALT (EN): "A young woman is working on a laptop while a little boy sits on her lap eating a tangerine."
  — ALT (DE): "Eine junge Frau arbeitet an einem Laptop, während ein kleiner Junge auf ihrem Schoß sitzt und eine Mandarine ist."
- [Workspace - Dan Dimmock](https://unsplash.com/photos/3mt71MKGjQ0)
  — ALT (EN): "Brown-framed glasses and a pen rest on an open notebook with handwritten notes, next to a laptop on a desk."
  — ALT (DE): "Eine braune Brille und ein Stift liegen auf einem aufgeschlagenen Notizbuch mit handgeschriebenen Notizen, daneben ein Laptop."

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
