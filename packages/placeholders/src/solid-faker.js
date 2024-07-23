/**
 * Minimal utility class for generating Lorem Ipsum random / pseudo-random text.
 */
export default class SolidFaker {
  /**
   * Constructor for SolidFaker class.
   * @param {number} seedValue - Seed value for consistent randomness (optional).
   */
  constructor(seedValue) {
    /**
     * Array containing Lorem Ipsum words.
     * @type {string[]}
     */
    this.loremIpsumWords = [
      'lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'sed',
      'do',
      'eiusmod',
      'tempor',
      'incididunt',
      'ut',
      'labore',
      'et',
      'dolore',
      'magna',
      'aliqua',
      'ut',
      'enim',
      'ad',
      'minim',
      'veniam',
      'quis',
      'nostrud',
      'exercitation',
      'ullamco',
      'laboris',
      'nisi',
      'ut',
      'aliquip',
      'ex',
      'ea',
      'commodo',
      'consequat',
      'duis',
      'aute',
      'irure',
      'dolor',
      'in',
      'reprehenderit',
      'in',
      'voluptate',
      'velit',
      'esse',
      'cillum',
      'dolore',
      'eu',
      'fugiat',
      'nulla',
      'pariatur',
      'excepteur',
      'sint',
      'occaecat',
      'cupidatat',
      'non',
      'proident',
      'sunt',
      'in',
      'culpa',
      'qui',
      'officia',
      'deserunt',
      'mollit',
      'anim',
      'id',
      'est',
      'laborum'
    ];

    /**
     * Seed value for consistent randomness.
     * @type {number|undefined}
     */
    this.seedValue = seedValue || Math.floor(Math.random() * this.loremIpsumWords.length);
  }

  /**
   * Generate a random index for selecting a word from loremIpsumWords array.
   * @returns {number} - Random index.
   */
  getRandomIndex() {
    // If a seed value is defined, use it for consistent randomness
    // Generate a random index using a mathematical function based on the seed value
    // Math.abs() is used to ensure a positive value
    // Math.sin() generates a sine value between -1 and 1 based on the seed value
    // Ensure the index stays within the range of the loremIpsumWords array length
    const x = Math.abs(Math.sin(this.seedValue++));
    return Math.floor((x - Math.floor(x)) * this.loremIpsumWords.length);
  }

  /**
   * Generates a random integer between the specified minimum and maximum values.
   *
   * @param {number} min - The minimum value of the range (inclusive).
   * @param {number} max - The maximum value of the range (inclusive).
   * @returns {number} The randomly generated integer.
   */
  getRandomInt(min, max) {
    return Math.floor(Math.abs(Math.sin(this.seedValue++)) * (max - min + 1)) + min;
  }

  /**
   * Generate a random number of words.
   * @param {number} numWords - Number of words to generate.
   * @param {number} [capitalizeType=0] - Capitalization type:
   *   0 - all lowercase, 1 - capitalize first word, 2 - capitalize all words.
   * @returns {string} - Random words joined together.
   */
  words(numWords, capitalizeType = 0) {
    if (this.originalSeed !== undefined) {
      this.seedValue = this.originalSeed; // Reset seed to original for consistent output
    }
    const result = [];
    for (let i = 0; i < numWords; i++) {
      const randomIndex = this.getRandomIndex();
      let word = this.loremIpsumWords[randomIndex];
      if ((capitalizeType === 1 && i === 0) || capitalizeType === 2) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      result.push(word);
    }
    return result.join(' ');
  }

  /**
   * Generate a random number of sentences.
   * @param {number} sentencesCount - Number of sentences to generate.
   * @returns {string} - Random sentences joined together.
   */
  sentences(sentencesCount) {
    const sentence = [];
    for (let i = 0; i < sentencesCount; i++) {
      sentence.push(this.words(this.getRandomInt(3, 7), 1));
    }
    return sentence.join('. ') + '.';
  }

  /**
   * Generate a random number of paragraphs.
   * @param {number} paragraphsCount - Number of paragraphs to generate.
   * @returns {string} - Random paragraphs joined together.
   */
  paragraphs(paragraphsCount) {
    const paragraph = [];
    for (let i = 0; i < paragraphsCount; i++) {
      paragraph.push(this.sentences(this.getRandomInt(3, 7)));
    }
    return paragraph.join('\n\n');
  }
}
